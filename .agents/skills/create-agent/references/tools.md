# Tool Definitions

Complete guide for defining tools with OpenRouter SDK.

## File: src/tools.ts

```typescript
import { tool } from '@openrouter/sdk';
import { z } from 'zod';

export const timeTool = tool({
  name: 'get_current_time',
  description: 'Get the current date and time',
  inputSchema: z.object({
    timezone: z.string().optional().describe('Timezone (e.g., "UTC", "America/New_York")'),
  }),
  execute: async ({ timezone }) => {
    return {
      time: new Date().toLocaleString('en-US', { timeZone: timezone || 'UTC' }),
      timezone: timezone || 'UTC',
    };
  },
});

export const calculatorTool = tool({
  name: 'calculate',
  description: 'Perform mathematical calculations',
  inputSchema: z.object({
    expression: z.string().describe('Math expression (e.g., "2 + 2", "sqrt(16)")'),
  }),
  execute: async ({ expression }) => {
    // Simple safe eval for basic math
    const sanitized = expression.replace(/[^0-9+\-*/().\s]/g, '');
    const result = Function(`"use strict"; return (${sanitized})`)();
    return { expression, result };
  },
});

export const defaultTools = [timeTool, calculatorTool];
```

## Tool Structure

A tool consists of:

- `name` - Unique identifier for the tool
- `description` - What the tool does (helps LLM decide when to use it)
- `inputSchema` - Zod schema defining input parameters
- `execute` - Async function that runs when tool is called

## Tool Patterns

### Simple Data Retrieval

```typescript
export const weatherTool = tool({
  name: 'get_weather',
  description: 'Get current weather for a location',
  inputSchema: z.object({
    city: z.string().describe('City name'),
    country: z.string().optional().describe('Country code (e.g., "US")'),
  }),
  execute: async ({ city, country }) => {
    const res = await fetch(`https://api.weather.com/v1/weather?q=${city},${country || ''}`);
    const data = await res.json();
    return data;
  },
});
```

### Data Processing

```typescript
export const analyzeTextTool = tool({
  name: 'analyze_text',
  description: 'Analyze text for sentiment, entities, etc.',
  inputSchema: z.object({
    text: z.string().describe('Text to analyze'),
    analysis_type: z.enum(['sentiment', 'entities', 'keywords']).describe('Type of analysis'),
  }),
  execute: async ({ text, analysis_type }) => {
    // Implement analysis logic
    switch (analysis_type) {
      case 'sentiment':
        return { sentiment: analyzeSentiment(text) };
      case 'entities':
        return { entities: extractEntities(text) };
      case 'keywords':
        return { keywords: extractKeywords(text) };
    }
  },
});
```

### External API Calls

```typescript
export const databaseQueryTool = tool({
  name: 'query_database',
  description: 'Execute a SQL query on the database',
  inputSchema: z.object({
    query: z.string().describe('SQL query to execute'),
  }),
  execute: async ({ query }) => {
    // Validate query to prevent SQL injection
    if (!isValidSQL(query)) {
      throw new Error('Invalid SQL query');
    }

    const result = await db.query(query);
    return result;
  },
});
```

### File Operations

```typescript
export const readFileTool = tool({
  name: 'read_file',
  description: 'Read the contents of a file',
  inputSchema: z.object({
    filepath: z.string().describe('Path to the file'),
  }),
  execute: async ({ filepath }) => {
    const content = await fs.readFile(filepath, 'utf-8');
    return { content };
  },
});

export const writeFileTool = tool({
  name: 'write_file',
  description: 'Write content to a file',
  inputSchema: z.object({
    filepath: z.string().describe('Path to the file'),
    content: z.string().describe('Content to write'),
  }),
  execute: async ({ filepath, content }) => {
    await fs.writeFile(filepath, content, 'utf-8');
    return { success: true, filepath };
  },
});
```

## Advanced Tool Features

### Optional Parameters

```typescript
export const searchTool = tool({
  name: 'search',
  description: 'Search the web',
  inputSchema: z.object({
    query: z.string().describe('Search query'),
    limit: z.number().optional().default(10).describe('Number of results'),
    time_range: z.enum(['day', 'week', 'month', 'year']).optional().describe('Time filter'),
  }),
  execute: async ({ query, limit, time_range }) => {
    // Implementation
  },
});
```

### Enum Values

```typescript
export const formatTextTool = tool({
  name: 'format_text',
  description: 'Format text in various ways',
  inputSchema: z.object({
    text: z.string(),
    format: z.enum(['uppercase', 'lowercase', 'titlecase', 'reverse']),
  }),
  execute: async ({ text, format }) => {
    switch (format) {
      case 'uppercase':
        return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
      case 'titlecase':
        return text.replace(/\b\w/g, c => c.toUpperCase());
      case 'reverse':
        return text.split('').reverse().join('');
    }
  },
});
```

### Complex Objects

```typescript
export const sendEmailTool = tool({
  name: 'send_email',
  description: 'Send an email',
  inputSchema: z.object({
    to: z.string().email(),
    subject: z.string(),
    body: z.string(),
    cc: z.array(z.string().email()).optional(),
    attachments: z.array(z.object({
      filename: z.string(),
      content: z.string(),
    })).optional(),
  }),
  execute: async ({ to, subject, body, cc, attachments }) => {
    // Implementation
  },
});
```

### Async Operations

```typescript
export const processImageTool = tool({
  name: 'process_image',
  description: 'Process an image (resize, crop, filter)',
  inputSchema: z.object({
    image_url: z.string().url(),
    operations: z.array(z.object({
      type: z.enum(['resize', 'crop', 'filter']),
      params: z.record(z.any()),
    })),
  }),
  execute: async ({ image_url, operations }) => {
    // Download image
    const image = await downloadImage(image_url);

    // Apply operations sequentially
    let result = image;
    for (const op of operations) {
      result = await applyOperation(result, op);
    }

    // Upload result
    const url = await uploadImage(result);
    return { url };
  },
});
```

## Tool Best Practices

### 1. Descriptive Names

```typescript
// ❌ Bad - too vague
export const getData = tool({ name: 'get_data', ... });

// ✅ Good - specific
export const fetchUserByEmail = tool({ name: 'fetch_user_by_email', ... });
```

### 2. Clear Descriptions

```typescript
// ❌ Bad - too generic
description: 'Get data'

// ✅ Good - specific and actionable
description: 'Fetch user profile by email address'
```

### 3. Input Validation

```typescript
export const validateURLTool = tool({
  inputSchema: z.object({
    url: z.string().url('Must be a valid URL'),
  }),
  execute: async ({ url }) => {
    // Additional validation
    if (!url.startsWith('https://')) {
      throw new Error('Only HTTPS URLs are allowed');
    }
  },
});
```

### 4. Error Handling

```typescript
export const apiCallTool = tool({
  execute: async ({ endpoint }) => {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Unknown error' };
    }
  },
});
```

### 5. Type Safety

```typescript
// Define response types for better TypeScript support
interface User {
  id: string;
  name: string;
  email: string;
}

export const getUserTool = tool({
  execute: async ({ userId }): Promise<User> => {
    const user = await db.findUser(userId);
    return user;
  },
});
```

## Tool Organization

Organize tools by domain or functionality:

```typescript
// src/tools/weather.ts
export const weatherTools = [
  getWeatherTool,
  getForecastTool,
  getAlertsTool,
];

// src/tools/database.ts
export const databaseTools = [
  queryDatabaseTool,
  insertRecordTool,
  updateRecordTool,
];

// src/tools/index.ts
export * from './weather.js';
export * from './database.js';

export const allTools = [
  ...weatherTools,
  ...databaseTools,
];
```

## Testing Tools

Test tools independently of the agent:

```typescript
// tests/tools.test.ts
import { describe, it, expect } from 'vitest';
import { calculatorTool } from '../src/tools';

describe('calculatorTool', () => {
  it('should calculate correctly', async () => {
    const result = await calculatorTool.execute({ expression: '2 + 2' });
    expect(result).toEqual({ expression: '2 + 2', result: 4 });
  });

  it('should handle invalid input', async () => {
    await expect(
      calculatorTool.execute({ expression: 'invalid' })
    ).rejects.toThrow();
  });
});
```
