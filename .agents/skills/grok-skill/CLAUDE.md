# CLAUDE.md — grok-skill

Guidelines for Claude Code when working on the **grok-skill** repository.

---

## Repository Overview

| Item | Value |
|------|-------|
| **Purpose** | Claude Code Skill for X/Twitter search via Grok 4 (Official xAI API) |
| **Location** | `~/.claude/skills/grok-skill/` (user skill directory) |
| **Dev Repo** | `~/git/grok-skill/` (this repo for development) |
| **Primary Script** | `scripts/grok.ts` (Bun TypeScript) |
| **API Provider** | xAI Official API (`grok-4-1-fast` model) |
| **API Key Source** | Environment variable `$GROK_API_KEY` |
| **Runtime** | Bun |

---

## File Structure

```
grok-skill/
├── .gitignore         # Protects secrets (.env, .env.*)
├── SKILL.md           # Skill definition for Claude Code
├── README.md          # User documentation
├── CLAUDE.md          # This file (development guidelines)
└── scripts/
    └── grok.ts        # Main executable TypeScript script
```

---

## Architecture

### Module Responsibilities

**CLI Parsing (`parseArgs`):**
- Multi-value flag collection for `--include` / `--exclude`
- Handles boolean flags `--img`, `--video`
- Enforces mutual exclusivity between include/exclude

**Normalization:**
- Strips '@' prefix from handles
- Lowercases and deduplicates handles
- Caps handle lists at 10
- Validates dates to real calendar values (rejects 2025-02-30)

**API Client (`fetchWithRetry`):**
- 60-second timeout via AbortController (increased for agentic search)
- Exponential backoff retries (up to 3 attempts)
- Honors `Retry-After` header for rate limits
- Retries on 408/429/5xx errors
- Logs request-id when available

**Request Building:**
- Constructs `tools` array with `x_search` type and parameters
- Maps filters: `allowed_x_handles`, `excluded_x_handles`, `from_date`, `to_date`
- Maps capabilities: `enable_image_understanding`, `enable_video_understanding`
- Sets `model` to `grok-4-1-fast` (default)
- Endpoint: `https://api.x.ai/v1/chat/completions`

**Response Handling:**
- Primary: `choices[0].message.content`
- Citations: Checks `citations`, `choices[0].message.citations` (API dependent)
- Fallback: Extracts `https://x.com/*` and `https://twitter.com/*` URLs from text

**Error Handling:**
- Exit code 2: Usage/validation errors
- Exit code 3: Network/timeout errors
- Exit code 4: JSON parse errors

---

## Development Workflow

### 1. Making Changes

When modifying the skill:

1. **Edit files in this repo** (`~/git/grok-skill/`)
2. **Test changes** here first (see Testing section below)
3. **Deploy to skill directory** when ready:
   ```bash
   rsync -av --delete ~/git/grok-skill/ ~/.claude/skills/grok-skill/ --exclude '.git'
   ```
4. **Restart Claude Code** to reload the skill

### 2. Testing

```bash
# Set API key (choose your preferred method)
export GROK_API_KEY="xai-..."

# Test minimal query
bun scripts/grok.ts --q "test query"

# Test with filters
bun scripts/grok.ts \
  --q "recent activity" \
  --include "@OpenAI" "@AnthropicAI" \
  --from 2025-11-01 \
  --to 2025-11-07 \
  --img

# Test error handling
bun scripts/grok.ts --q "test" --from "2025-02-30"  # Should reject invalid date
unset GROK_API_KEY && bun scripts/grok.ts --q "test"  # Should show helpful error
```

### 3. Validation Checklist

Before deploying changes:
- [ ] Script runs without errors
- [ ] `GROK_API_KEY` is set in environment
- [ ] JSON output includes: `query`, `summary`, `citations`, `usage`, `model`
- [ ] SKILL.md frontmatter is valid YAML
- [ ] Script is executable (`chmod +x scripts/grok.ts`)
- [ ] All personal references removed (no machine-specific paths)
- [ ] No secrets in code or git history

---

## Key Implementation Details

### Script Arguments

| Flag | Type | Description | Default |
|------|------|-------------|---------|
| `--q` | string | Query text (required) | - |
| `--include` | string[] | X handles to include (max 10) | `[]` |
| `--exclude` | string[] | X handles to exclude (max 10) | `[]` |
| `--from` | YYYY-MM-DD | Start date for search | - |
| `--to` | YYYY-MM-DD | End date for search | - |
| `--img` | boolean | Enable image understanding | `false` |
| `--video` | boolean | Enable video understanding | `false` |

**Constraints:**
- `--include` and `--exclude` are mutually exclusive
- Dates must be in ISO format (YYYY-MM-DD) and valid calendar dates
- Handles are automatically stripped of '@' prefix, lowercased, and deduplicated

### xAI API Configuration

**Request Structure:**
```typescript
{
  model: "grok-4-1-fast",  // Configurable via GROK_MODEL env
  messages: [
    { role: "system", content: "You are Grok..." },
    { role: "user", content: query }
  ],
  tools: [
    {
      type: "x_search",
      allowed_x_handles: ["handle1", "handle2"],
      from_date: "2025-11-01",
      to_date: "2025-11-07",
      enable_image_understanding: true
    }
  ],
  stream: false
}
```

**Response Handling:**
- Primary content: `choices[0].message.content`
- Citations: Checked in various response fields
- Fallback: Extract `https://x.com/*` and `https://twitter.com/*` URLs from summary text
- Usage stats: `usage` object forwarded to output

### Response Format

```typescript
{
  query: string,           // Original query
  summary: string,         // Grok's formatted response
  citations: any[] | null, // Tweet URLs/citations (or extracted from text)
  usage: {                 // Token usage stats
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
  },
  model: string            // Model identifier
}
```

### Network Resilience

- **Timeout**: ~60 seconds via AbortController
- **Retries**: Up to 3 attempts on retriable errors (408, 429, 500, 502, 503, 504)
- **Backoff**: Exponential with jitter (500ms × 2^(attempt-1) + random 0-250ms)
- **Retry-After**: Honors rate limit headers when provided
- **Request IDs**: Logs `x-request-id` for debugging

### Exit Codes

- `0` - Success
- `2` - Usage/validation error (invalid flags, missing env, constraint violations)
- `3` - Network/timeout error (connection failures, timeouts, abort)
- `4` - JSON parse error (malformed response)

---

## SKILL.md Requirements

Claude Code discovers skills via `SKILL.md` frontmatter:

```yaml
---
name: grok-skill
description: >
  Search and analyze X (Twitter) using xAI Grok 4 via Official API with Agentic Search.
  Trigger on prompts that explicitly or implicitly ask to "search Twitter/X", "what's
  trending", "tweets from @handle", "hashtag #…", "what are people saying", or
  that require tweet-level activity/engagement from X.
---
```

**Trigger Patterns:**
- "search twitter/x for…"
- "what's trending on X"
- "tweets from @handle"
- "what are people saying about…"
- Any query requiring live X/Twitter data

---

## Common Issues & Solutions

### Issue: "Missing env GROK_API_KEY"

**Solution:**
```bash
# Set environment variable
export GROK_API_KEY="xai-..."

# Verify it's set
echo "$GROK_API_KEY"

# Persist to shell profile
echo 'export GROK_API_KEY="xai-..."' >> ~/.zshrc
source ~/.zshrc
```

### Issue: Sparse or no results

**Solutions:**
- Remove handle filters (`--include`/`--exclude`)
- Widen date range or remove date constraints

### Issue: Script not executable

**Solution:**
```bash
chmod +x ~/.claude/skills/grok-skill/scripts/grok.ts
```

### Issue: Citations are null

**Note:** This is expected behavior. Citations format varies by Grok's response. The summary field contains tweet URLs inline, and the script extracts them as a fallback.

---

## Security & Privacy

### Secrets Management

- **NEVER** commit `GROK_API_KEY` to git
- Store in environment variable or shell profile (`~/.zshrc`, `~/.bashrc`)
- If using a local `.env` file, ensure it's in `.gitignore`

### .gitignore Protection

The repository includes protection for:
```gitignore
.env
.env.*
!.env.example
```

This prevents accidental secret commits while allowing Bun's automatic `.env` loading for local development.

---

## Cost Management

**Token Usage:**
- Average: 700-1000 prompt tokens
- Average: 300-500 completion tokens
- Total per query: ~1000-1500 tokens

**Best Practices:**
- Use specific date ranges to limit scope
- Monitor usage via returned `usage` field
- Be aware `img` and `video` flags increase token usage

**xAI Pricing:**
- Check current rates at [docs.x.ai](https://docs.x.ai)

---

## Deployment

### Deploy to User Skill Directory

```bash
# From dev repo
cd ~/git/grok-skill

# Deploy to Claude Code skills
rsync -av --delete . ~/.claude/skills/grok-skill/ --exclude '.git'

# Verify
ls -la ~/.claude/skills/grok-skill

# Restart Claude Code to reload skill
```

### Version Control

```bash
# Stage changes
git add -A

# Commit with conventional commit message
git commit -m "feat: migrate to official xAI API"

# Push to GitHub
git push origin main
```

---

## Testing Guidelines

### Manual Testing Scenarios

1. **Basic functionality**: Simple query returns valid JSON
2. **Multi-value flags**: `--include "@a" "@b"` parses correctly
3. **Date validation**: Rejects invalid dates (2025-02-30)
4. **Mutual exclusivity**: Errors when both include and exclude are set
5. **Missing API key**: Shows helpful, portable error message
6. **Network resilience**: Retries on transient failures
7. **Citation extraction**: Parses URLs from summary when citations null

---

## Enhancement Ideas

Future improvements to consider:

**Completed:**
- ✅ Retry logic with exponential backoff
- ✅ Timeout handling
- ✅ Request ID logging
- ✅ Migration to Official xAI API
- ✅ Image/Video understanding flags

**Planned:**
- [ ] Add `--format` flag for output (JSON, Markdown, Plain)
- [ ] Support for hashtag filtering (`--hashtag #topic`)
- [ ] Caching layer for repeated queries
- [ ] Batch query mode for multiple searches
- [ ] Export results to file (`--output results.json`)
- [ ] Add `--dry-run` to preview request body (secrets redacted)
- [ ] Add `--verbose` flag for debug logging
- [ ] Add `--help` flag for inline usage

---

**Last Updated:** 2025-11-07
**Repository:** https://github.com/mikedemarais/grok-skill

