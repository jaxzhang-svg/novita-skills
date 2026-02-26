# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TwitterAPI Skill is a TypeScript CLI tool built with Bun that provides a streamlined wrapper around the TwitterAPI.io service. Its core feature is field filtering that reduces token usage by 70-90% when processing API responses. The tool is optimized for agent/AI usage with structured JSON output and comprehensive error handling.

## Development Commands

### Installation
```bash
# Install dependencies
bun install

# Link for global usage (optional)
bun link
```

### Running
```bash
# Development mode
bun run dev

# Watch mode
bun run watch

# Build and run
bun run build
./dist/cli
```

### Code Quality
```bash
# Type check
bun run typecheck

# Lint
bun run lint

# Format
bun run format

# All checks
bun run typecheck && bun run lint
```

### Testing
```bash
# Run tests
bun test

# Run tests with watch
bun test --watch
```

## Architecture

The project follows a layered architecture:

```
src/
├── cli.ts              # Entry point with Commander.js app, error handling
├── index.ts            # Package exports
├── commands/           # CLI command modules (user, tweet, etc.)
│   ├── user.ts        # User-related commands
│   ├── tweet.ts       # Tweet-related commands
│   └── index.ts       # Command exports
├── core/              # Core infrastructure
│   ├── client.ts      # HTTP client using Bun fetch
│   ├── config.ts      # Configuration management
│   ├── exceptions.ts  # Exception hierarchy
│   └── index.ts       # Core exports
└── filters/           # Field filtering engine (core feature)
    ├── presets.ts     # Predefined field sets for compact output
    ├── engine.ts      # Dot-notation field extraction
    └── index.ts       # Filter exports
```

### Key Design Patterns

**Client Creation**: Create a client directly for API calls:
```typescript
import { TwitterAPIClient } from "./core/client.js";

const client = new TwitterAPIClient();
const response = await client.get("/twitter/user/info", { userName: "elonmusk" });
```

**Configuration Hierarchy**: Config loads in order (env vars override file):
1. `~/.twitterapi/config.json` (JSON config file)
2. `TWITTERAPI_KEY` environment variable
3. `TWITTERAPI_LOGIN_COOKIE` for write operations
4. Defaults from `Config` class

**Error Handling**: All commands wrap API calls with structured JSON error output:
```typescript
try {
  const client = new TwitterAPIClient();
  const response = await client.get("/endpoint");
} catch (error) {
  if (error instanceof TwitterAPIError) {
    const errorData = {
      error: true,
      type: "api_error",
      message: error.message,
      ...(error.statusCode !== undefined && { status_code: error.statusCode })
    };
    console.error(JSON.stringify(errorData));
    process.exit(1);
  }
  throw error;
}
```

**Async/Await**: All I/O operations use async/await with Bun's Promise-based APIs.

## Field Filtering System

The core feature - reduces API response size for token efficiency:

**Presets** (in `filters/presets.ts`): Predefined field sets for common use cases
- `COMPACT_USER_FIELDS`: Basic user info (id, screen_name, name, description, follower counts, verified, profile_image_url)
- `COMPACT_TWEET_FIELDS`: Tweet essentials (id, text, created_at, author_id, public_metrics)
- `COMPACT_USER_LIST_FIELDS`: Lightweight user lists (followers/following)

**Usage Pattern**:
```typescript
import { filterFields } from "./filters/engine.js";
import { COMPACT_USER_FIELDS } from "./filters/presets.js";

// Apply preset
const filteredData = filterFields(apiResponse, [...COMPACT_USER_FIELDS]);

// Custom fields with dot notation
const filteredData = filterFields(apiResponse, ["id", "name", "public_metrics.followers_count"]);
```

**Dot Notation**: Nested fields use dot syntax (e.g., `"public_metrics.like_count"`)

**Type Safety**: Field lists are readonly arrays (`as const`) for better type inference.

## Adding New Commands

1. Create new file in `commands/` directory (e.g., `commands/community.ts`)
2. Use Commander.js for CLI definition with structured error handling
3. Import and register in `cli.ts`:
```typescript
import * as communityCommands from "./commands/community.js";

// In main()
program.addCommand(communityCommands.createCommand());
```

4. Follow the command pattern:
```typescript
import { Command } from "commander";
import { TwitterAPIClient } from "../core/client.js";
import { TwitterAPIError } from "../core/exceptions.js";
import { outputJson } from "../cli.js";

async function someCommand(arg: string, options: { flag?: boolean }): Promise<void> {
  try {
    const client = new TwitterAPIClient();
    const response = await client.get("/endpoint", { key: arg });
    // Process and filter response
    outputJson(response);
  } catch (error) {
    if (error instanceof TwitterAPIError) {
      const errorData = {
        error: true,
        type: "api_error",
        message: error.message,
        command: "some command",
        ...(error.statusCode !== undefined && { status_code: error.statusCode })
      };
      console.error(JSON.stringify(errorData));
      process.exit(1);
    }
    throw error;
  }
}

export function createCommand(): Command {
  const cmd = new Command("category");
  cmd.description("Command description");

  cmd.command("subcommand")
    .description("Subcommand description")
    .argument("<arg>", "Argument description")
    .option("--flag", "Flag description")
    .action(someCommand);

  return cmd;
}
```

## API Integration

**Base URL**: `https://api.twitterapi.io`

**Authentication**: All requests require `x-api-key` header (set automatically by `TwitterAPIClient`)

**HTTP Client**: Uses Bun's native `fetch` API for optimal performance

**Rate Limiting**: Client handles 429 responses, raises `RateLimitError` with `retryAfter` attribute

**Response Pattern**: API responses may have data in different locations:
```typescript
// Handle multiple possible response structures
const data = (response.data ?? response.users ?? response.tweets ?? response) as Record<string, unknown>;
```

**Pagination**: Most list endpoints use cursor-based pagination (empty string for first page, `next_cursor` for subsequent)

## TypeScript Configuration

- **Module System**: ESNext with bundler resolution for Bun compatibility
- **Target**: ES2022 for modern JavaScript features
- **Strict Mode**: Enabled for maximum type safety
- **Paths**: Uses `.js` extensions in imports for proper ES module resolution

## Environment Variables

- `TWITTERAPI_KEY`: API key for authentication (required)
- `TWITTERAPI_LOGIN_COOKIE`: Session cookie for write operations (posting, liking, following)
- `TWITTERAPI_BASE_URL`: Optional custom API base URL

## Configuration File

Create `~/.twitterapi/config.json`:
```json
{
  "api_key": "your-api-key",
  "base_url": "https://api.twitterapi.io",
  "timeout": 30,
  "max_retries": 3,
  "retry_delay": 1.0
}
```

Note: `api_key` and `login_cookie` are not saved by `saveToFile()` for security reasons.

## Build Process

**Development**: Use `bun run dev` or `bun run watch` for hot-reloading

**Production Build**:
- `bun run build`: Compiles TypeScript and creates standalone executable
- Output goes to `dist/` directory
- Executable is marked with +x permission

**TypeScript Compilation**:
- `bun run build:js`: Runs `tsc` for separate JS output
- Source maps and declarations are generated
