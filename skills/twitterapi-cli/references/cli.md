# CLI Command Reference

Complete reference for all `twitterapi` CLI commands and options.

## Table of Contents

- [Global Options](#global-options)
- [User Commands](#user-commands)
  - [user info](#user-info)
  - [user tweets](#user-tweets)
  - [user followers](#user-followers)
  - [user following](#user-following)
- [Tweet Commands](#tweet-commands)
  - [tweet search](#tweet-search)
- [Common Options](#common-options)
- [Output Format](#output-format)

---

## Global Options

The CLI supports these global options:

```bash
twitterapi [command] --help    # Show help for a command
```

---

## User Commands

### user info

Get user profile information for a Twitter user.

**Usage:**
```bash
twitterapi user info <username> [options]
```

**Arguments:**
- `<username>` - Twitter username (with or without @ prefix)

**Options:**
- `-c, --compact` - Use compact field preset (saves ~70% tokens)
- `-f, --fields <fields>` - Custom fields (comma-separated, e.g., `id,name,description`)

**Examples:**

```bash
# Full user profile
twitterapi user info elonmusk

# Compact output (recommended for agents)
twitterapi user info elonmusk --compact

# Custom fields
twitterapi user info elonmusk --fields "id,name,description,verified, followers_count"
```

**Output (compact mode):**
```json
{
  "id": "123456",
  "screen_name": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers_count": 150000000,
  "friends_count": 200,
  "statuses_count": 50000,
  "verified": true,
  "created_at": "2009-06-02T20:12:29.000Z",
  "profile_image_url": "https://..."
}
```

---

### user tweets

Get recent tweets from a user's timeline.

**Usage:**
```bash
twitterapi user tweets <username> [options]
```

**Arguments:**
- `<username>` - Twitter username (with or without @ prefix)

**Options:**
- `-l, --limit <number>` - Number of tweets to return (default: 20, max: 100)
- `-r, --include-replies` - Include replies in results
- `-c, --compact` - Use compact field preset (saves ~90% tokens)
- `-f, --fields <fields>` - Custom fields (comma-separated)

**Examples:**

```bash
# Get 10 recent tweets
twitterapi user tweets elonmusk --limit 10

# Include replies
twitterapi user tweets elonmusk --include-replies

# Compact output (recommended)
twitterapi user tweets elonmusk --limit 20 --compact

# Custom fields
twitterapi user tweets elonmusk --fields "id,text,created_at,public_metrics.like_count"
```

**Output (compact mode):**
```json
{
  "tweets": [
    {
      "id": "1234567890",
      "text": "Tweet content here...",
      "created_at": "2024-02-20T10:30:00.000Z",
      "author_id": "123456",
      "conversation_id": "1234567890",
      "public_metrics.like_count": 42000,
      "public_metrics.retweet_count": 5100,
      "public_metrics.reply_count": 2300,
      "public_metrics.quote_count": 800
    }
  ],
  "count": 1
}
```

---

### user followers

Get a list of followers for a user.

**Usage:**
```bash
twitterapi user followers <username> [options]
```

**Arguments:**
- `<username>` - Twitter username (with or without @ prefix)

**Options:**
- `-l, --limit <number>` - Number of followers to return (default: 20, max: 200)
- `-c, --compact` - Use compact mode (default: true)

**Examples:**

```bash
# Get 50 followers (compact)
twitterapi user followers elonmusk --limit 50

# Get full profiles
twitterapi user followers elonmusk --limit 10 --no-compact
```

**Output (compact mode):**
```json
{
  "users": [
    {
      "id": "789012",
      "screen_name": "user123",
      "name": "User Name",
      "description": "Bio here...",
      "followers_count": 5000,
      "verified": false,
      "profile_image_url": "https://..."
    }
  ],
  "count": 1
}
```

---

### user following

Get accounts that a user is following.

**Usage:**
```bash
twitterapi user following <username> [options]
```

**Arguments:**
- `<username>` - Twitter username (with or without @ prefix)

**Options:**
- `-l, --limit <number>` - Number of accounts to return (default: 20, max: 200)
- `-c, --compact` - Use compact mode (default: true)

**Examples:**

```bash
# Get 30 following
twitterapi user following elonmusk --limit 30
```

**Output:** Same format as `user followers`

---

## Tweet Commands

### tweet search

Search for tweets matching a query string.

**Usage:**
```bash
twitterapi tweet search "<query>" [options]
```

**Arguments:**
- `<query>` - Search query string (use quotes for multi-word queries)

**Options:**
- `-l, --limit <number>` - Number of tweets to return (default: 20, max: 100)
- `-c, --compact` - Use compact field preset (saves ~90% tokens)
- `-f, --fields <fields>` - Custom fields (comma-separated)

**Examples:**

```bash
# Search for tweets
twitterapi tweet search "python programming"

# Compact output with custom limit
twitterapi tweet search "AI tools" --limit 50 --compact

# Custom fields
twitterapi tweet search "openai" --fields "id,text,created_at,author_id"
```

**Output (compact mode):**
```json
{
  "tweets": [
    {
      "id": "1234567890",
      "text": "Tweet about AI tools...",
      "created_at": "2024-02-20T10:30:00.000Z",
      "author_id": "123456",
      "conversation_id": "1234567890",
      "public_metrics.like_count": 1200,
      "public_metrics.retweet_count": 300,
      "public_metrics.reply_count": 150,
      "public_metrics.quote_count": 50
    }
  ],
  "count": 1,
  "query": "AI tools"
}
```

---

## Common Options

These options apply to multiple commands:

### Field Filtering Options

- `--compact` - Use predefined compact field sets (saves 70-90% tokens)
- `--fields <fields>` - Specify custom fields using comma-separated list

### Limit Options

- `--limit <number>` - Number of results to return
  - Default: 20 (most commands)
  - Max: 200 (followers/following)
  - Max: 100 (tweets/search)

### Other Options

- `--include-replies` - Include tweet replies in user timeline
- `--no-compact` - Disable compact mode and return full response

---

## Output Format

All commands output JSON to stdout for easy parsing by agents and scripts.

**Success Output:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```

**Error Output:**
```json
{
  "error": true,
  "type": "api_error",
  "message": "Error message here",
  "command": "user info",
  "status_code": 404
}
```

**Standard Output Keys:**

- Single object commands (`user info`): Return the object directly
- List commands (`user tweets`, `user followers`, etc.): Return `{ items: [...], count: N }`
- Search commands: Return `{ tweets: [...], count: N, query: "..." }`

---

## Usage Tips

1. **Always use compact mode** for agent/AI usage to save tokens
2. **Specify limits** to avoid unnecessary data transfer
3. **Use custom fields** when you need specific data points
4. **Pipe to jq** for further processing:
   ```bash
   twitterapi user info elonmusk --compact | jq '.followers_count'
   ```

---

## API Configuration

The CLI reads configuration from:

1. **Environment variables:**
   ```bash
   export TWITTERAPI_KEY="your-api-key"
   export TWITTERAPI_LOGIN_COOKIE="your-cookie"  # For write operations
   ```

2. **Config file** `~/.twitterapi/config.json`:
   ```json
   {
     "api_key": "your-api-key",
     "base_url": "https://api.twitterapi.io",
     "timeout": 30
   }
   ```

3. **Command-line** (not yet implemented - planned feature)

For detailed API endpoint documentation, see the original API skill at https://docs.twitterapi.io/skill.md.
