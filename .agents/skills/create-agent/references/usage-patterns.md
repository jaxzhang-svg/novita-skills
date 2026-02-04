# Usage Patterns

Complete guide for using the agent in different contexts.

## Table of Contents

- [Headless (CLI)](#headless-cli)
- [Ink TUI](#ink-tui)
- [HTTP API](#http-api)
- [Discord Integration](#discord-integration)

## Headless (CLI)

Run agent without UI for programmatic use or simple CLI.

### File: src/headless.ts

```typescript
import { createAgent } from './agent.js';
import { defaultTools } from './tools.js';

async function main() {
  const agent = createAgent({
    apiKey: process.env.OPENROUTER_API_KEY!,
    model: 'openrouter/auto',
    instructions: 'You are a helpful assistant with access to tools.',
    tools: defaultTools,
  });

  // Hook into events
  agent.on('thinking:start', () => console.log('\n🤔 Thinking...'));
  agent.on('tool:call', (name, args) => console.log(`🔧 Using ${name}:`, args));
  agent.on('stream:delta', (delta) => process.stdout.write(delta));
  agent.on('stream:end', () => console.log('\n'));
  agent.on('error', (err) => console.error('❌ Error:', err.message));

  // Interactive loop
  const readline = await import('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Agent ready. Type your message (Ctrl+C to exit):\n');

  const prompt = () => {
    rl.question('You: ', async (input) => {
      if (!input.trim()) {
        prompt();
        return;
      }
      await agent.send(input);
      prompt();
    });
  };

  prompt();
}

main().catch(console.error);
```

### Run Headless

```bash
OPENROUTER_API_KEY=sk-or-... npm run start:headless
```

## Ink TUI

Beautiful terminal UI with real-time streaming using the items-based pattern.

### File: src/cli.tsx

```typescript
import React, { useState, useEffect, useCallback } from 'react';
import { render, Box, Text, useInput, useApp } from 'ink';
import type { StreamableOutputItem } from '@openrouter/sdk';
import { createAgent, type Agent, type Message } from './agent.js';
import { defaultTools } from './tools.js';

// Initialize agent (runs independently of UI)
const agent = createAgent({
  apiKey: process.env.OPENROUTER_API_KEY!,
  model: 'openrouter/auto',
  instructions: 'You are a helpful assistant. Be concise.',
  tools: defaultTools,
});

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Text bold color={isUser ? 'cyan' : 'green'}>
        {isUser ? '▶ You' : '◀ Assistant'}
      </Text>
      <Text wrap="wrap">{message.content}</Text>
    </Box>
  );
}

// Render streaming items by type using the items-based pattern
function ItemRenderer({ item }: { item: StreamableOutputItem }) {
  switch (item.type) {
    case 'message': {
      const textContent = item.content?.find((c: { type: string }) => c.type === 'output_text');
      const text = textContent && 'text' in textContent ? textContent.text : '';
      return (
        <Box flexDirection="column" marginBottom={1}>
          <Text bold color="green">◀ Assistant</Text>
          <Text wrap="wrap">{text}</Text>
          {item.status !== 'completed' && <Text color="gray">▌</Text>}
        </Box>
      );
    }
    case 'function_call':
      return (
        <Text color="yellow">
          {item.status === 'completed' ? '  ✓' : '  🔧'} {item.name}
          {item.status === 'in_progress' && '...'}
        </Text>
      );
    case 'reasoning': {
      const reasoningText = item.content?.find((c: { type: string }) => c.type === 'reasoning_text');
      const text = reasoningText && 'text' in reasoningText ? reasoningText.text : '';
      return (
        <Box flexDirection="column" marginBottom={1}>
          <Text bold color="magenta">💭 Thinking</Text>
          <Text wrap="wrap" color="gray">{text}</Text>
        </Box>
      );
    }
    default:
      return null;
  }
}

function InputField({
  value,
  onChange,
  onSubmit,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  disabled: boolean;
}) {
  useInput((input, key) => {
    if (disabled) return;
    if (key.return) onSubmit();
    else if (key.backspace || key.delete) onChange(value.slice(0, -1));
    else if (input && !key.ctrl && !key.meta) onChange(value + input);
  });

  return (
    <Box>
      <Text color="yellow">{'> '}</Text>
      <Text>{value}</Text>
      <Text color="gray">{disabled ? ' ···' : '█'}</Text>
    </Box>
  );
}

function App() {
  const { exit } = useApp();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Use Map keyed by item ID for efficient React state updates (items-based pattern)
  const [items, setItems] = useState<Map<string, StreamableOutputItem>>(new Map());

  useInput((_, key) => {
    if (key.escape) exit();
  });

  // Subscribe to agent events using items-based streaming
  useEffect(() => {
    const onThinkingStart = () => {
      setIsLoading(true);
      setItems(new Map()); // Clear items for new response
    };

    // Items-based streaming: replace items by ID, don't accumulate
    const onItemUpdate = (item: StreamableOutputItem) => {
      setItems((prev) => new Map(prev).set(item.id, item));
    };

    const onMessageAssistant = () => {
      setMessages(agent.getMessages());
      setItems(new Map()); // Clear streaming items
      setIsLoading(false);
    };

    const onError = (err: Error) => {
      setIsLoading(false);
    };

    agent.on('thinking:start', onThinkingStart);
    agent.on('item:update', onItemUpdate);
    agent.on('message:assistant', onMessageAssistant);
    agent.on('error', onError);

    return () => {
      agent.off('thinking:start', onThinkingStart);
      agent.off('item:update', onItemUpdate);
      agent.off('message:assistant', onMessageAssistant);
      agent.off('error', onError);
    };
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;
    const text = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    await agent.send(text);
  }, [input, isLoading]);

  return (
    <Box flexDirection="column" padding={1}>
      <Box marginBottom={1}>
        <Text bold color="magenta">🤖 OpenRouter Agent</Text>
        <Text color="gray"> (Esc to exit)</Text>
      </Box>

      <Box flexDirection="column" marginBottom={1}>
        {/* Render completed messages */}
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}

        {/* Render streaming items by type (items-based pattern) */}
        {Array.from(items.values()).map((item) => (
          <ItemRenderer key={item.id} item={item} />
        ))}
      </Box>

      <Box borderStyle="single" borderColor="gray" paddingX={1}>
        <InputField
          value={input}
          onChange={setInput}
          onSubmit={sendMessage}
          disabled={isLoading}
        />
      </Box>
    </Box>
  );
}

render(<App />);
```

### Run TUI

```bash
OPENROUTER_API_KEY=sk-or-... npm start
```

## HTTP API

Use with Express or other web frameworks for REST API integration.

### Basic Express Server

```typescript
import express from 'express';
import { createAgent } from './agent.js';

const app = express();
app.use(express.json());

// One agent per session (store in memory or Redis)
const sessions = new Map<string, Agent>();

app.post('/chat', async (req, res) => {
  const { sessionId, message } = req.body;

  let agent = sessions.get(sessionId);
  if (!agent) {
    agent = createAgent({ apiKey: process.env.OPENROUTER_API_KEY! });
    sessions.set(sessionId, agent);
  }

  const response = await agent.sendSync(message);
  res.json({ response, history: agent.getMessages() });
});

app.post('/chat/stream', async (req, res) => {
  const { sessionId, message } = req.body;
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  let agent = sessions.get(sessionId);
  if (!agent) {
    agent = createAgent({ apiKey: process.env.OPENROUTER_API_KEY! });
    sessions.set(sessionId, agent);
  }

  agent.on('stream:delta', (delta) => {
    res.write(`data: ${JSON.stringify({ type: 'delta', content: delta })}\n\n`);
  });

  agent.on('stream:end', (fullText) => {
    res.write(`data: ${JSON.stringify({ type: 'end', content: fullText })}\n\n`);
    res.end();
  });

  await agent.send(message);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### Fastify Alternative

```typescript
import Fastify from 'fastify';
import { createAgent } from './agent.js';

const fastify = Fastify();

fastify.register(import('@fastify/cors'));

const sessions = new Map<string, Agent>();

fastify.post('/chat', async (request, reply) => {
  const { sessionId, message } = request.body as { sessionId: string; message: string };

  let agent = sessions.get(sessionId);
  if (!agent) {
    agent = createAgent({ apiKey: process.env.OPENROUTER_API_KEY! });
    sessions.set(sessionId, agent);
  }

  const response = await agent.sendSync(message);
  return { response, history: agent.getMessages() };
});

await fastify.listen({ port: 3000 });
```

## Discord Integration

Use with Discord.js for chatbot functionality.

```typescript
import { Client, GatewayIntentBits } from 'discord.js';
import { createAgent } from './agent.js';

const discord = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const agents = new Map<string, Agent>();

discord.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;

  let agent = agents.get(msg.channelId);
  if (!agent) {
    agent = createAgent({ apiKey: process.env.OPENROUTER_API_KEY! });
    agents.set(msg.channelId, agent);
  }

  const response = await agent.sendSync(msg.content);
  await msg.reply(response);
});

discord.login(process.env.DISCORD_TOKEN);
```

### Discord with Streaming

```typescript
discord.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;

  let agent = agents.get(msg.channelId);
  if (!agent) {
    agent = createAgent({ apiKey: process.env.OPENROUTER_API_KEY! });
    agents.set(msg.channelId, agent);
  }

  const reply = await msg.channel.send('Thinking...');

  agent.on('stream:delta', async (delta) => {
    await reply.edit(reply.content + delta);
  });

  await agent.send(msg.content);
});
```

### Discord with Slash Commands

```typescript
import { REST, Routes, SlashCommandBuilder } from 'discord.js';

const commands = [
  new SlashCommandBuilder()
    .setName('chat')
    .setDescription('Chat with the AI agent')
    .addStringOption(option =>
      option.setName('message')
        .setDescription('Your message')
        .setRequired(true),
    ),
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

await rest.put(
  Routes.applicationCommands(process.env.DISCORD_CLIENT_ID!),
  { body: commands },
);

discord.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'chat') {
    await interaction.deferReply();

    let agent = agents.get(interaction.channelId);
    if (!agent) {
      agent = createAgent({ apiKey: process.env.OPENROUTER_API_KEY! });
      agents.set(interaction.channelId, agent);
    }

    const response = await agent.sendSync(interaction.options.getString('message')!);
    await interaction.followUp(response);
  }
});
```

## Best Practices

### Session Management

Use Redis or a database for production session persistence:

```typescript
import { createClient } from 'redis';

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

app.post('/chat', async (req, res) => {
  const { sessionId, message } = req.body;

  // Try to get serialized agent from Redis
  const serialized = await redis.get(`agent:${sessionId}`);

  let agent;
  if (serialized) {
    // Deserialize and restore agent
    agent = deserializeAgent(serialized);
  } else {
    agent = createAgent({ apiKey: process.env.OPENROUTER_API_KEY! });
  }

  const response = await agent.sendSync(message);

  // Serialize and save to Redis
  await redis.set(`agent:${sessionId}`, serializeAgent(agent), { EX: 3600 });

  res.json({ response });
});
```

### Error Handling

Implement comprehensive error handling:

```typescript
app.use((err: Error, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Agent-specific error handling
agent.on('error', (err) => {
  logError(err);
  // Retry logic or fallback behavior
});
```

### Rate Limiting

Implement rate limiting for API endpoints:

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

app.use('/chat', limiter);
```

### Health Checks

Add health check endpoint:

```typescript
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: Date.now() });
});
```
