---
name: novita-social-monitor
description: Social media intelligence monitoring for Novita. Use when systematically browsing X/Twitter accounts from personal following list (@Jax_Zhang_4R) to gather AI industry intelligence. Performs sequential account review with per-account record keeping (including original tweet links), followed by comprehensive summary. Always use @skills/twitterapi-cli for data retrieval.
---

# Novita Social Monitor

AI industry intelligence gathering through sequential X/Twitter account review.

## Commands

### Get Following List

```bash
twitterapi user following Jax_Zhang_4R --limit 200
```

### Get Account Info

```bash
twitterapi user info <account> --compact
```

Analyze description/bio to determine category.

### Fetch Tweets (Time-Filtered)

```bash
# Read last check time from state file
STATE_FILE="$HOME/.novita-monitor/state.json"
LAST_CHECK=$(cat "$STATE_FILE" | grep -o '"last_check": "[^"]*"' | cut -d'"' -f4 2>/dev/null || echo "2026-01-01_00:00:00_UTC")

# Get current time
UNTIL=$(date -u +"%Y-%m-%d_%H:%M:%S_UTC")

# Fetch tweets from last check to now
twitterapi tweet search "from:<account> since:${LAST_CHECK} until:${UNTIL}" --limit 3 --compact

# Update state file with current time
echo "{\"last_check\": \"$UNTIL\"}" > "$STATE_FILE"
```

### Fallback (No Time Filter)

```bash
twitterapi user tweets <account> --limit 3 --compact
```

### Search Brand Mentions

```bash
twitterapi tweet search "@novita_labs" --limit 50 --compact
```

### Get Account Info

```bash
twitterapi user info <account> --compact
```

## Processing Workflow

For each account:

1. **Get account info** - Fetch description to identify category
2. **Classify by description** - Analyze bio/description to determine:
   - **LLM Competitors**: LLM providers, model hosting, inference APIs
   - **GPU Competitors**: GPU clouds, compute infrastructure
   - **Partners**: Integration partners, ecosystem collaborators
   - **Ecosystem Leaders**: Major platforms (OpenAI, Anthropic, etc.)
   - **Chinese Open Source**: Chinese AI model providers
   - **AI KOLs**: Industry thought leaders, researchers
   - **Uncategorized**: General AI industry relevance
3. **Fetch tweets** - Use time-filtered command above
4. **Analyze by category**:
   - Competitors: Product launches, pricing, partnerships
   - Partners: Integration updates
   - Ecosystem: Platform changes
   - Check engagement: 100-500 (interesting), 500-2000 (notable), 2000+ (critical)

## Record Format

```markdown
# @<account> - <Date>

## Account Info
- **Category**: [category]
- **Followers**: [count]

## Tweets Reviewed

### [Summary]
- **Engagement**: [likes] likes, [RTs] RTs
- **Date**: [timestamp]
- **Link**: https://x.com/<account>/status/<tweet_id>
- **Relevance**: [why it matters]
```

**Every tweet must have original link.**

## State File

Location: `~/.novita-monitor/state.json`

```json
{
  "last_check": "2026-02-26_14:50:00_UTC"
}
```

**Purpose**: Records last execution time. Each run reads this time as `since:` value, then updates to current time after fetching tweets.

**First run**: Create file manually or script will use default `2026-01-01_00:00:00_UTC`.
