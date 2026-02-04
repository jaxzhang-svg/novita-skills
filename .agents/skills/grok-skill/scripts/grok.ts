#!/usr/bin/env bun
/**
 * Grok 4 via xAI Official API with Agentic Search
 *
 * Env:
 *   GROK_API_KEY (required)
 *   GROK_MODEL (optional, defaults to "grok-4-1-fast" as per docs)
 *
 * Usage examples:
 *   bun scripts/grok.ts --q "what are people saying about ERC-7702 wallets on X?"
 *   bun scripts/grok.ts --q "tweets from @elonmusk" --include "@elonmusk" --img --video
 *
 * Exit codes:
 *   0 - success
 *   2 - usage/validation error
 *   3 - network/timeout error
 *   4 - JSON parse error
 */

interface CLI {
  q?: string;
  include: string[];
  exclude: string[];
  from?: string; // YYYY-MM-DD
  to?: string;   // YYYY-MM-DD
  img: boolean;
  video: boolean;
}

function parseArgs(argv: string[]): CLI {
  const a: CLI = { include: [], exclude: [], img: false, video: false };

  const collect = (start: number) => {
    const values: string[] = [];
    let i = start;
    while (i < argv.length && !argv[i].startsWith("--")) values.push(argv[i++]);
    return { values, next: i };
  };

  for (let i = 0; i < argv.length; i++) {
    const t = argv[i];
    switch (t) {
      case "--q":
        a.q = argv[++i];
        break;
      case "--include": {
        const { values, next } = collect(i + 1);
        a.include.push(...values);
        i = next - 1;
        break;
      }
      case "--exclude": {
        const { values, next } = collect(i + 1);
        a.exclude.push(...values);
        i = next - 1;
        break;
      }
      case "--from":
        a.from = argv[++i];
        break;
      case "--to":
        a.to = argv[++i];
        break;
      case "--img":
      case "--image":
      case "--images":
        a.img = true;
        break;
      case "--video":
      case "--videos":
        a.video = true;
        break;
      default:
        // ignore unknown tokens
        break;
    }
  }
  return a;
}

function ensureISO(d?: string): string | undefined {
  if (!d) return undefined;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) {
    console.error("Date must be YYYY-MM-DD:", d);
    process.exit(2);
  }
  const [y, m, day] = d.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, day));
  const iso = dt.toISOString().slice(0, 10);
  if (iso !== d) {
    console.error("Invalid calendar date (YYYY-MM-DD):", d);
    process.exit(2);
  }
  return d;
}

function stripAt(h: string) {
  return h.startsWith("@") ? h.slice(1) : h;
}

function normalizeHandles(list: string[]) {
  return Array.from(new Set(list.map(stripAt).map((s) => s.toLowerCase()))).slice(0, 10);
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function computeBackoffMs(attempt: number, base = 500) {
  const jitter = Math.floor(Math.random() * 250);
  return base * 2 ** (attempt - 1) + jitter;
}

async function fetchWithRetry(
  url: string,
  init: RequestInit,
  opts: { attempts?: number; timeoutMs?: number } = {}
) {
  const attempts = opts.attempts ?? 3;
  const timeoutMs = opts.timeoutMs ?? 60_000;

  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, { ...init, signal: ctrl.signal });
      clearTimeout(timer);
      if (res.ok) return res;

      const status = res.status;
      const retryAfter = res.headers.get("retry-after");
      const text = await res.text();
      const reqId = res.headers.get("x-request-id") || "n/a";

      const retriable = [408, 429, 500, 502, 503, 504].includes(status);
      if (!retriable || attempt === attempts) {
        console.error(`HTTP ${status} (request-id=${reqId}): ${text}`);
        process.exit(1);
      }

      const delay = retryAfter ? Number(retryAfter) * 1000 : computeBackoffMs(attempt);
      await sleep(delay);
      continue;
    } catch (err) {
      clearTimeout(timer);
      lastError = err;
      if (attempt === attempts) break;
      await sleep(computeBackoffMs(attempt));
    }
  }
  console.error("Network/timeout error:", String(lastError));
  process.exit(3);
}

const args = parseArgs(process.argv.slice(2));
if (!args.q) {
  console.error('Usage: bun scripts/grok.ts --q "<query>" [--include @a ... | --exclude @x ...] [--from YYYY-MM-DD] [--to YYYY-MM-DD] [--img] [--video]');
  process.exit(2);
}
if (args.include.length && args.exclude.length) {
  console.error("You cannot set both --include and --exclude (xAI constraint).");
  process.exit(2);
}
const apiKey = process.env.GROK_API_KEY;
if (!apiKey) {
  console.error([
    "Missing env GROK_API_KEY.",
    "Set it in your shell and re-run. Example:",
    '  export GROK_API_KEY="xai-..."',
  ].join("\n"));
  process.exit(2);
}

const include = normalizeHandles(args.include);
const exclude = normalizeHandles(args.exclude);

// Construct Tools Parameter
const xSearchTool: Record<string, any> = {
  type: "x_search",
};

// Add filters to the tool object
if (include.length) xSearchTool["allowed_x_handles"] = include;
if (exclude.length) xSearchTool["excluded_x_handles"] = exclude;

const fromDate = ensureISO(args.from);
if (fromDate) xSearchTool["from_date"] = fromDate;

const toDate = ensureISO(args.to);
if (toDate) xSearchTool["to_date"] = toDate;

if (args.img) xSearchTool["enable_image_understanding"] = true;
if (args.video) xSearchTool["enable_video_understanding"] = true;

const model = process.env.GROK_MODEL ?? "grok-4-1-fast"; // Default for agentic search

const url = "https://api.x.ai/v1/responses";

const body = {
  model,
  input: [
    {
      role: "system",
      content: "You are Grok, an AI assistant powered by xAI. You have access to X (Twitter) search tools. Use them to answer the user's question with up-to-date information. Cite your sources."
    },
    { role: "user", content: String(args.q) },
  ],
  tools: [xSearchTool],
  stream: false,
};

const res = await fetchWithRetry(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

let json: any;
try {
  json = await res.json();
} catch (e) {
  console.error("Failed to parse JSON response");
  process.exit(4);
}

// Inspect response for content
let text = "";
let finalMessage: any = null;

if (Array.isArray(json?.response)) {
  // Agentic search returns a list of events/messages
  // We need to find the final assistant message
  finalMessage = json.response.find(
    (item: any) => item.type === "message" && item.role === "assistant"
  );
  
  if (finalMessage && Array.isArray(finalMessage.content)) {
    // Content is an array of parts (e.g. text, annotations)
    const textPart = finalMessage.content.find((p: any) => p.type === "output_text");
    if (textPart) {
      text = textPart.text;
    }
  } else if (finalMessage && typeof finalMessage.content === "string") {
    text = finalMessage.content;
  }
} else if (json?.choices?.[0]?.message?.content) {
  text = json.choices[0].message.content;
} else if (json?.result) {
  text = json.result;
}

let citations: string[] | null = null;

// Try to get citations from the final message annotations if available
if (finalMessage?.content) {
  // Check for annotations in content parts
  const textPart = Array.isArray(finalMessage.content) 
    ? finalMessage.content.find((p: any) => p.type === "output_text")
    : null;
    
  if (textPart?.annotations) {
    const urls = textPart.annotations
      .filter((a: any) => a.type === "url_citation" && a.url)
      .map((a: any) => a.url);
    if (urls.length > 0) {
      citations = Array.from(new Set(urls));
    }
  }
}

// Fallback: Check top-level citations
if (!citations && json?.citations) {
  citations = json.citations;
}

// Fallback: extract X/Twitter URLs from text
if (!citations && text) {
  const urls = Array.from(String(text).matchAll(/https?:\/\/[^\s)]+/g)).map((m) => m[0]);
  const xUrls = urls.filter((u) => /(^https?:\/\/(x\.com|twitter\.com)\/)/i.test(u));
  if (xUrls.length) citations = Array.from(new Set(xUrls));
}

// Fallback: extract X/Twitter URLs from text when citations are absent
if (text) {
  const urls = Array.from(String(text).matchAll(/https?:\/\/[^\s)]+/g)).map((m) => m[0]);
  const xUrls = urls.filter((u) => /(^https?:\/\/(x\.com|twitter\.com)\/)/i.test(u));
  if (xUrls.length && !citations) citations = Array.from(new Set(xUrls));
} else {
  // DEBUG: If text is empty, return the raw JSON structure to help debug
  console.error("DEBUG: Empty response text. Raw JSON keys:", Object.keys(json));
  if (json.error) console.error("DEBUG: API Error:", json.error);
  // Assign raw JSON snippet to summary so user can see it
  text = "Error: Could not extract summary from response. Raw response: " + JSON.stringify(json).slice(0, 500) + "...";
}

const out = {
  query: args.q,
  summary: String(text).trim(),
  citations,
  usage: json?.usage ?? null,
  model: json?.model ?? model,
};

console.log(JSON.stringify(out, null, 2));
