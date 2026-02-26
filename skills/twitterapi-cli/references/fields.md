# Field Filtering Guide

Complete guide to field filtering - the core feature that reduces Twitter API response size by 70-90% for token-efficient processing.

## Table of Contents

- [Overview](#overview)
- [Using Presets](#using-presets)
- [Dot Notation](#dot-notation)
- [Custom Fields](#custom-fields)
- [Available Presets](#available-presets)
- [Examples](#examples)

---

## Overview

Twitter API responses contain many fields that are often unnecessary for your use case. Field filtering allows you to extract only the fields you need, dramatically reducing:

- **Token usage** - 70-90% reduction in most cases
- **Processing time** - Less data to parse
- **Memory usage** - Smaller JSON objects

**How it works:**

1. API returns full response
2. CLI filters response using dot-notation field paths
3. Only specified fields are returned as clean JSON

---

## Using Presets

Presets are predefined field sets for common use cases. Use them with the `--compact` flag:

```bash
twitterapi user info elonmusk --compact
twitterapi user tweets elonmusk --limit 10 --compact
twitterapi tweet search "AI tools" --limit 20 --compact
```

**Benefits:**
- Pre-optimized field selections
- Consistent output structure
- 70-90% token savings

---

## Dot Notation

Nested fields are accessed using dot notation (e.g., `public_metrics.followers_count`).

**Syntax:**
```
top_level_field
nested.field
deeply.nested.field.path
```

**Example:**
```bash
# Get specific engagement metrics
twitterapi user tweets elonmusk --fields "id,text,public_metrics.like_count,public_metrics.retweet_count"
```

**Output:**
```json
{
  "id": "1234567890",
  "text": "Tweet content...",
  "public_metrics.like_count": 42000,
  "public_metrics.retweet_count": 5100
}
```

---

## Custom Fields

For maximum control, specify exact fields using the `--fields` flag:

```bash
twitterapi user info elonmusk --fields "id,name,description,verified"
```

**Field list format:**
- Comma-separated: `field1,field2,field3`
- Spaces are trimmed automatically
- Use dot notation for nested fields

**Use custom fields when:**
- You need a very specific subset of data
- Presets include unnecessary fields
- You're building a specialized integration

---

## Available Presets

### User Presets

#### `COMPACT_USER_FIELDS`
Basic user profile information.

**Fields:**
- `id` - User ID
- `screen_name` - Username (handle)
- `name` - Display name
- `description` - Bio text
- `followers_count` - Follower count
- `friends_count` - Following count
- `statuses_count` - Tweet count
- `verified` - Verification status
- `created_at` - Account creation date
- `profile_image_url` - Profile image URL

**Use for:** User profiles, account lookups

#### `EXTENDED_USER_FIELDS`
Extended profile information.

**Includes:** All COMPACT_USER_FIELDS plus:
- `location` - User location
- `url` - Website URL
- `protected` - Protected account status
- `listed_count` - List membership count
- `favourites_count` - Like count

**Use for:** Detailed profile analysis

#### `COMPACT_USER_LIST_FIELDS`
Lightweight user list format.

**Fields:**
- `id` - User ID
- `screen_name` - Username
- `name` - Display name
- `description` - Bio text
- `followers_count` - Follower count
- `verified` - Verification status
- `profile_image_url` - Profile image URL

**Use for:** Follower/following lists (excludes metrics that add up)

---

### Tweet Presets

#### `COMPACT_TWEET_FIELDS`
Essential tweet data.

**Fields:**
- `id` - Tweet ID
- `text` - Tweet content
- `created_at` - Tweet timestamp
- `author_id` - Author user ID
- `conversation_id` - Conversation thread ID
- `public_metrics.like_count` - Like count
- `public_metrics.retweet_count` - Retweet count
- `public_metrics.reply_count` - Reply count
- `public_metrics.quote_count` - Quote tweet count

**Use for:** Tweet timelines, search results, engagement analysis

#### `EXTENDED_TWEET_FIELDS`
Extended tweet metadata.

**Includes:** All COMPACT_TWEET_FIELDS plus:
- `source` - Tweet source (app name)
- `lang` - Tweet language
- `possibly_sensitive` - Sensitive content flag
- `reply_settings` - Reply settings
- `edit_history_tweet_ids` - Edit history
- `attachments.media_keys` - Media attachments
- `attachments.poll_ids` - Poll attachments
- `entities.mentions` - @mentions
- `entities.hashtags` - Hashtags
- `entities.urls` - URLs

**Use for:** Full tweet analysis, entity extraction

#### `COMPACT_SEARCH_TWEET_FIELDS`
Search result format (same as COMPACT_TWEET_FIELDS).

**Use for:** Tweet search results

#### `COMPACT_REPLY_FIELDS`
Reply-specific fields.

**Fields:**
- `id` - Reply tweet ID
- `text` - Reply content
- `created_at` - Reply timestamp
- `author_id` - Reply author
- `public_metrics.like_count` - Reply like count
- `public_metrics.reply_count` - Reply count
- `in_reply_to_tweet_id` - Parent tweet ID

**Use for:** Reply threads, conversation analysis

#### `COMPACT_THREAD_FIELDS`
Thread context fields.

**Includes:** COMPACT_TWEET_FIELDS plus:
- `parent` - Parent tweet reference
- `children` - Child tweet references

**Use for:** Thread reconstruction

#### `COMPACT_QUOTE_FIELDS`
Quote tweet fields.

**Includes:** COMPACT_TWEET_FIELDS plus:
- `quoted_tweet_id` - Quoted tweet ID
- `quoted_tweet_author_id` - Quoted tweet author

**Use for:** Quote tweet analysis

#### `COMPACT_RETWEETER_FIELDS`
Retweeter information.

**Fields:**
- `id` - Retweeter user ID
- `screen_name` - Retweeter username
- `name` - Retweeter display name
- `profile_image_url` - Profile image
- `retweeted_at` - Retweet timestamp

**Use for:** Retweet analysis

---

### Other Presets

#### `COMPACT_ACTION_RESPONSE_FIELDS`
Action operation results.

**Fields:**
- `success` - Success status
- `id` - Created resource ID
- `text` - Created resource text
- `created_at` - Creation timestamp
- `error` - Error information (if any)
- `message` - Response message

**Use for:** Post/like/follow operations

#### `COMPACT_ERROR_FIELDS`
Error information.

**Fields:**
- `error` - Error flag
- `message` - Error message
- `code` - Error code
- `status` - HTTP status

**Use for:** Error handling

---

## Examples

### Example 1: Basic User Profile

```bash
twitterapi user info elonmusk --compact
```

**Output:**
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

**Token savings:** ~75% vs full response

---

### Example 2: Tweet Timeline with Engagement

```bash
twitterapi user tweets elonmusk --limit 10 --compact
```

**Output:**
```json
{
  "tweets": [
    {
      "id": "1234567890",
      "text": "Tweet content...",
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

**Token savings:** ~85% vs full response

---

### Example 3: Custom Field Selection

```bash
twitterapi user tweets elonmusk --fields "id,text,public_metrics.like_count"
```

**Output:**
```json
{
  "tweets": [
    {
      "id": "1234567890",
      "text": "Tweet content...",
      "public_metrics.like_count": 42000
    }
  ],
  "count": 1
}
```

**Token savings:** ~92% vs full response

---

### Example 4: Follower List (Lightweight)

```bash
twitterapi user followers elonmusk --limit 50 --compact
```

**Output:**
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

**Token savings:** ~80% vs full response

---

### Example 5: Search with Custom Fields

```bash
twitterapi tweet search "AI tools" --limit 20 --fields "id,text,created_at,author_id,public_metrics.like_count"
```

**Output:**
```json
{
  "tweets": [
    {
      "id": "1234567890",
      "text": "Tweet about AI tools...",
      "created_at": "2024-02-20T10:30:00.000Z",
      "author_id": "123456",
      "public_metrics.like_count": 1200
    }
  ],
  "count": 1,
  "query": "AI tools"
}
```

**Token savings:** ~88% vs full response

---

## Best Practices

1. **Use presets** (`--compact`) for most use cases
2. **Specify custom fields** only when presets don't fit
3. **Always filter** when working with large datasets
4. **Use dot notation** for nested fields
5. **Limit results** with `--limit` to reduce API load

---

## Performance Comparison

| Command | Full Response | Compact Mode | Custom Fields | Savings |
|---------|--------------|--------------|---------------|---------|
| user info | ~800 tokens | ~200 tokens | ~150 tokens | 75-81% |
| user tweets (20) | ~3500 tokens | ~500 tokens | ~300 tokens | 85-91% |
| user followers (50) | ~8000 tokens | ~1500 tokens | ~1000 tokens | 81-87% |
| tweet search (20) | ~4000 tokens | ~600 tokens | ~400 tokens | 85-90% |

**Note:** Token counts are approximate and vary by content.

---

## Advanced Usage

### Combining Filters with jq

```bash
# Extract just the tweet text and likes
twitterapi user tweets elonmusk --limit 10 --compact | \
  jq '.tweets[] | {text: .text, likes: .public_metrics.like_count}'
```

### Field Validation

The CLI will return empty values for fields that don't exist in the response:

```bash
twitterapi user info elonmusk --fields "id,name,nonexistent_field"
```

**Output:**
```json
{
  "id": "123456",
  "name": "Elon Musk",
  "nonexistent_field": null
}
```

---

## Technical Details

**Field Filtering Engine:** Built on dot-notation parsing with efficient field extraction.

**Implementation:** The `filterFields` function in `filters/engine.ts` handles:
- Dot-notation field paths
- Nested object traversal
- Array element filtering
- Missing field handling (returns `null`)

**Type Safety:** Field lists are defined as `readonly` arrays (`as const`) for TypeScript type inference.
