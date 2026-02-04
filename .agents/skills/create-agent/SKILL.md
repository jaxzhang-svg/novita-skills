---
name: create-agent
description: Bootstrap a modular AI agent with OpenRouter SDK, extensible hooks, and optional Ink TUI. Use when user needs to: (1) Create a new AI agent project, (2) Build agents with OpenRouter SDK, (3) Implement agent features like tools, streaming, or TUI, (4) Integrate agent with HTTP API, Discord, or other platforms.
---

# Build a Modular AI Agent with OpenRouter

This skill helps you create a **modular AI agent** with standalone agent core, OpenRouter SDK integration, and optional Ink TUI.

## Architecture Overview

```
Your App → [Ink TUI | HTTP API | Discord] → Agent Core → OpenRouter SDK
```

**Key concept**: The Agent Core runs independently of any UI, making it reusable across different interfaces.

## Quick Start

### Prerequisites

Get API key at https://openrouter.ai/settings/keys

⚠️ **Security**: Never commit API keys. Use environment variables.

### Initialize Project

```bash
mkdir my-agent && cd my-agent
npm init -y
npm pkg set type="module"
npm install @openrouter/sdk zod eventemitter3
npm install ink react
npm install -D typescript @types/react tsx
```

### Setup TypeScript

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "start": "tsx src/cli.tsx",
    "start:headless": "tsx src/headless.ts",
    "dev": "tsx watch src/cli.tsx"
  }
}
```

### File Structure

```
src/
├── agent.ts        # Agent core with hooks
├── tools.ts        # Tool definitions
├── cli.tsx         # Ink TUI (optional)
└── headless.ts     # Headless usage example
```

## Agent Core Implementation

The agent core is standalone with hooks for extensibility. **See [agent-core.md](references/agent-core.md)** for complete implementation.

Key features:
- **Event-driven**: Emits events for all operations
- **Streaming**: Uses items-based streaming model
- **Tool support**: Extensible tool system
- **Conversation history**: Built-in message management

**Quick example**:

```typescript
import { createAgent } from './agent.js';

const agent = createAgent({
  apiKey: process.env.OPENROUTER_API_KEY!,
  model: 'openrouter/auto',
  instructions: 'You are a helpful assistant.',
});

const response = await agent.send('Hello, world!');
```

## Tool Definitions

Define tools using the OpenRouter SDK tool system. **See [tools.md](references/tools.md)** for examples.

```typescript
import { tool } from '@openrouter/sdk';
import { z } from 'zod';

export const timeTool = tool({
  name: 'get_current_time',
  description: 'Get the current date and time',
  inputSchema: z.object({
    timezone: z.string().optional(),
  }),
  execute: async ({ timezone }) => ({
    time: new Date().toLocaleString('en-US', { timeZone: timezone || 'UTC' }),
  }),
});
```

## Usage Patterns

The agent can be used in multiple contexts. **See [usage-patterns.md](references/usage-patterns.md)** for detailed guides:

### Headless (CLI)

Run agent without UI for programmatic use:

```typescript
agent.on('stream:delta', (delta) => process.stdout.write(delta));
await agent.send('Tell me about AI');
```

### Ink TUI

Beautiful terminal UI with real-time streaming. See `src/cli.tsx` in [usage-patterns.md](references/usage-patterns.md).

### HTTP API

Use with Express or other web frameworks:

```typescript
app.post('/chat', async (req, res) => {
  const response = await agent.sendSync(req.body.message);
  res.json({ response });
});
```

### Discord Integration

Integrate with Discord bot:

```typescript
discord.on('messageCreate', async (msg) => {
  const response = await agent.sendSync(msg.content);
  await msg.reply(response);
});
```

## Understanding Items-Based Streaming

OpenRouter SDK uses an items-based streaming model. **See [items-streaming.md](references/items-streaming.md)** for details.

**Key concept**: Items are emitted multiple times with the same ID but progressively updated content. Replace items by ID, don't accumulate chunks.

```typescript
const items = new Map<string, StreamableOutputItem>();

for await (const item of result.getItemsStream()) {
  items.set(item.id, item); // Replace by ID
  updateUI(items);
}
```

**Benefits**:
- No manual chunk management
- Handles concurrent outputs
- Full TypeScript inference
- Natural Map-based state for React/UI

## Model Discovery

**Do not hardcode model IDs** - they change frequently. **See [model-discovery.md](references/model-discovery.md)** for details.

### Fetch Available Models

```typescript
async function fetchModels() {
  const res = await fetch('https://openrouter.ai/api/v1/models');
  const data = await res.json();
  return data.data;
}
```

### Use openrouter/auto

For simplicity, use `openrouter/auto` which automatically selects the best model:

```typescript
const agent = createAgent({
  apiKey: process.env.OPENROUTER_API_KEY!,
  model: 'openrouter/auto',
});
```

## Agent API Reference

See [api-reference.md](references/api-reference.md) for complete API documentation.

### Constructor Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| apiKey | string | required | OpenRouter API key |
| model | string | 'openrouter/auto' | Model to use |
| instructions | string | 'You are a helpful assistant.' | System prompt |
| tools | Tool[] | [] | Available tools |
| maxSteps | number | 5 | Max agentic loop iterations |

### Key Methods

- `send(content)` - Send message with streaming
- `sendSync(content)` - Send message without streaming
- `getMessages()` - Get conversation history
- `addTool(tool)` - Add tool at runtime

### Key Events

- `message:user` / `message:assistant` - Message events
- `item:update` - Streaming item updates (items-based)
- `tool:call` / `tool:result` - Tool events
- `stream:start` / `stream:delta` / `stream:end` - Streaming events

## Common Tasks

### Custom Hooks

```typescript
agent.on('message:assistant', (msg) => {
  saveToDatabase('assistant', msg.content);
});

agent.on('tool:call', (name, args) => {
  analytics.track('tool_used', { name, args });
});
```

### Dynamic Model Selection

```typescript
const models = await fetchModels();
const bestModel = models.find((m) => m.id.includes('claude'));

const agent = createAgent({
  apiKey: process.env.OPENROUTER_API_KEY!,
  model: bestModel.id,
});
```

### Runtime Tool Addition

```typescript
agent.addTool(customTool);
```

## Resources

- OpenRouter Docs: https://openrouter.ai/docs
- Models API: https://openrouter.ai/api/v1/models
- Ink Docs: https://github.com/vadimdemedes/ink
- Get API Key: https://openrouter.ai/settings/keys

## Reference Files

This skill includes detailed reference files:

| File | Description |
|------|-------------|
| [agent-core.md](references/agent-core.md) | Complete agent core implementation with hooks |
| [tools.md](references/tools.md) | Tool definition examples and patterns |
| [usage-patterns.md](references/usage-patterns.md) | Headless, TUI, HTTP, Discord integration guides |
| [items-streaming.md](references/items-streaming.md) | Items-based streaming model explanation |
| [api-reference.md](references/api-reference.md) | Complete API reference and event documentation |
| [model-discovery.md](references/model-discovery.md) | Model fetching and selection patterns |
