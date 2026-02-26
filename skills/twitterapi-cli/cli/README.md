# TwitterAPI Skill

A CLI tool for TwitterAPI.io - streamlined API wrapper with field filtering to reduce token usage.

## Features

- **Field Filtering**: Reduce token usage by 70-90% with compact field presets
- **Type Safe**: Built with TypeScript for full type safety
- **Easy to Use**: Intuitive CLI commands with helpful error messages
- **Configuration**: Support for environment variables and config files
- **Fast Runtime**: Built with Bun for maximum performance

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/twitterapi-skill.git
cd twitterapi-skill

# Install dependencies
bun install

# Build the project
bun run build

# Link for global usage (optional)
bun link
```

## Configuration

Set your API key:

```bash
export TWITTERAPI_KEY="your-api-key"
```

Or create a config file at `~/.twitterapi/config.json`:

```json
{
  "api_key": "your-api-key"
}
```

## Usage

### User Commands

```bash
# Get user info (compact mode saves tokens)
bun run src/cli.ts user info elonmusk --compact

# Get user tweets
bun run src/cli.ts user tweets elonmusk --limit 10

# Get followers (custom fields)
bun run src/cli.ts user followers elonmusk --fields "screen_name,name,followers_count"

# Get following list
bun run src/cli.ts user following elonmusk --compact
```

### Tweet Commands

```bash
# Search tweets
bun run src/cli.ts tweet search "python programming" --limit 20 --compact
```

### Output Options

- `--compact` / `-c`: Use compact field preset (saves tokens)
- `--fields` / `-f`: Custom fields (comma-separated)

## Development

```bash
# Run in development mode
bun run dev

# Watch for changes and rebuild
bun run watch

# Type check
bun run typecheck

# Lint code
bun run lint

# Format code
bun run format

# Build for production
bun run build
```

## License

MIT License