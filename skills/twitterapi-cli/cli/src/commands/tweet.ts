/**
 * Tweet-related CLI commands
 */

import { Command } from "commander";
import { TwitterAPIClient } from "../core/client.js";
import { TwitterAPIError } from "../core/exceptions.js";
import { filterFields } from "../filters/engine.js";
import { COMPACT_TWEET_FIELDS } from "../filters/presets.js";
import { outputJson } from "../cli.js";

/**
 * Search for tweets matching a query
 */
async function tweetSearch(
  query: string,
  options: {
    limit?: number;
    compact?: boolean;
    fields?: string;
  },
): Promise<void> {
  try {
    const client = new TwitterAPIClient();

    const params: Record<string, string | number> = {
      query,
      count: Math.min(options.limit ?? 20, 100),
    };

    const response = await client.get("/twitter/tweet/advanced_search", params);

    // TwitterAPI.io returns: { data: { tweets: [...] } }
    // Extract tweets from the response
    let tweets: unknown = response.data;
    if (tweets && typeof tweets === 'object' && 'tweets' in tweets) {
      tweets = (tweets as Record<string, unknown>).tweets;
    }
    tweets = tweets ?? response.tweets ?? response.data ?? response;

    if (!Array.isArray(tweets)) {
      tweets = tweets ? [tweets] : [];
    }

    // Apply field filtering
    if (options.compact) {
      tweets = (tweets as Record<string, unknown>[]).map((t) =>
        filterFields(t, [...COMPACT_TWEET_FIELDS])
      );
    } else if (options.fields) {
      const fieldList = options.fields.split(",").map((f) => f.trim());
      tweets = (tweets as Record<string, unknown>[]).map((t) => filterFields(t, fieldList));
    }

    const limit = options.limit ?? 20;
    const limitedTweets = (tweets as Record<string, unknown>[]).slice(0, limit);

    outputJson({
      tweets: limitedTweets,
      count: limitedTweets.length,
      query,
    });
  } catch (error) {
    if (error instanceof TwitterAPIError) {
      const errorData = {
        error: true,
        type: "api_error",
        message: error.message,
        command: "tweet search",
        args: { query, limit: options.limit, compact: options.compact },
        ...(error.statusCode !== undefined && { status_code: error.statusCode }),
      };
      console.error(JSON.stringify(errorData));
      process.exit(1);
    }
    throw error;
  }
}

/**
 * Create tweet command group
 */
export function createCommand(): Command {
  const cmd = new Command("tweet");

  cmd.description("Tweet-related commands (search, get, etc.)");

  // tweet search command
  cmd
    .command("search")
    .description("Search for tweets matching a query")
    .argument("<query>", "Search query (e.g., 'python programming')")
    .option("-l, --limit <number>", "Number of tweets to retrieve", "20")
    .option("-c, --compact", "Use compact field preset (reduces token usage by ~90%)")
    .option("-f, --fields <fields>", "Custom fields (comma-separated)")
    .action(tweetSearch);

  return cmd;
}
