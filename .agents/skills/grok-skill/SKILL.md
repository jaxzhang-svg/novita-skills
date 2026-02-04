---
name: grok-skill
description: >
  Search and analyze X (Twitter) using xAI Grok 4 via Official API with Agentic Search.
  Trigger on prompts that explicitly or implicitly ask to "search Twitter/X", "what's
  trending", "tweets from @handle", "hashtag #…", "what are people saying", or
  that require tweet-level activity/engagement from X.
---

# Grok 4 — X/Twitter Live Search Skill

## Prerequisites

- **xAI API key** required (set as `GROK_API_KEY` environment variable)
- Get your key at [console.x.ai](https://console.x.ai)
- Bun runtime installed

## When to use
Use this Skill whenever the user asks for trends, activity, examples, or evidence **from X/Twitter**:
- "search twitter|x for <query>"
- "what's trending on X"
- "top tweets/threads/hashtags about <topic>"
- "what are people saying about <project>"
- "tweets from @handle", "compare @a vs @b"

## How to run (Claude should execute these)
- Minimal:
  ```bash
  bun scripts/grok.ts --q "<query>"
  ```

- One-off with inline API key:
  ```bash
  GROK_API_KEY="xai-..." bun scripts/grok.ts --q "<query>"
  ```

- With handles, date window, and image/video understanding:
  ```bash
  bun scripts/grok.ts \
    --q "<topic or question>" \
    --include "@OpenAI" "@AnthropicAI" \
    --from "2025-11-01" --to "2025-11-07" \
    --img --video
  ```

- Output is concise JSON: `summary`, `citations` (tweet URLs), and `usage`. Paste a short synthesis with linked tweets.

## Defaults & notes
- Uses xAI Official `x_search` tool.
- If user gives handles, pass them via `--include` (or `--exclude`).
- Use `--from/--to` for time-bounded asks; if unspecified, do not assume dates.
- Use `--img` to enable image understanding (reads images in posts).
- Use `--video` to enable video understanding (analyzes video in posts).
- `--include` and `--exclude` are **mutually exclusive**.
- Do **not** claim access to private/protected content. Prefer links over long quotes.

## Troubleshooting
- Sparse results → relax filters; consider removing handles.
- Missing links → they're in `citations` of the JSON output; share the URLs.
