/**
 * User-related CLI commands - Agent optimized
 */

import { Command } from "commander";
import { TwitterAPIClient } from "../core/client.js";
import { TwitterAPIError } from "../core/exceptions.js";
import { filterFields } from "../filters/engine.js";
import { COMPACT_USER_FIELDS, COMPACT_USER_LIST_FIELDS } from "../filters/presets.js";
import { outputJson } from "../cli.js";

/**
 * Get user profile information
 */
async function userInfo(
  username: string,
  options: { compact?: boolean; fields?: string },
): Promise<void> {
  try {
    const client = new TwitterAPIClient();
    username = username.replace(/^@/, "");

    const response = await client.get("/twitter/user/info", {
      userName: username,
    });

    let data = (response.data ?? response.user ?? response) as Record<string, unknown>;

    if (options.compact) {
      data = filterFields(data, [...COMPACT_USER_FIELDS]) as Record<string, unknown>;
    } else if (options.fields) {
      const fieldList = options.fields.split(",").map((f) => f.trim());
      data = filterFields(data, fieldList) as Record<string, unknown>;
    }

    outputJson(data);
  } catch (error) {
    if (error instanceof TwitterAPIError) {
      const errorData = {
        error: true,
        type: "api_error",
        message: error.message,
        command: "user info",
        args: { username, compact: options.compact, fields: options.fields },
        ...(error.statusCode !== undefined && { status_code: error.statusCode }),
      };
      console.error(JSON.stringify(errorData));
      process.exit(1);
    }
    throw error;
  }
}

/**
 * Get recent tweets from a user
 */
async function userTweets(
  username: string,
  options: {
    limit?: number;
    includeReplies?: boolean;
    compact?: boolean;
    fields?: string;
  },
): Promise<void> {
  try {
    const client = new TwitterAPIClient();
    username = username.replace(/^@/, "");

    const params: Record<string, string | number> = {
      userName: username,
      count: Math.min(options.limit ?? 20, 100),
    };

    if (options.includeReplies) {
      params.include_replies = "true";
    }

    const response = await client.get("/twitter/user/last_tweets", params);

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

    if (options.compact) {
      const { COMPACT_TWEET_FIELDS } = await import("../filters/presets.js");
      tweets = (tweets as Record<string, unknown>[]).map((t) =>
        filterFields(t, [...COMPACT_TWEET_FIELDS])
      );
    } else if (options.fields) {
      const fieldList = options.fields.split(",").map((f) => f.trim());
      tweets = (tweets as Record<string, unknown>[]).map((t) => filterFields(t, fieldList));
    }

    const limit = options.limit ?? 20;
    const limitedTweets = (tweets as Record<string, unknown>[]).slice(0, limit);

    outputJson({ tweets: limitedTweets, count: limitedTweets.length });
  } catch (error) {
    if (error instanceof TwitterAPIError) {
      const errorData = {
        error: true,
        type: "api_error",
        message: error.message,
        command: "user tweets",
        args: { username, limit: options.limit, compact: options.compact },
        ...(error.statusCode !== undefined && { status_code: error.statusCode }),
      };
      console.error(JSON.stringify(errorData));
      process.exit(1);
    }
    throw error;
  }
}

/**
 * Get followers of a user
 */
async function userFollowers(
  username: string,
  options: { limit?: number; compact?: boolean },
): Promise<void> {
  try {
    const client = new TwitterAPIClient();
    username = username.replace(/^@/, "");

    const response = await client.get("/twitter/user/followers", {
      userName: username,
      count: Math.min(options.limit ?? 20, 200),
    });

    let users = (response.data ?? response.users ?? response) as unknown;
    if (!Array.isArray(users)) {
      users = users ? [users] : [];
    }

    if (options.compact) {
      users = (users as Record<string, unknown>[]).map((u) =>
        filterFields(u, [...COMPACT_USER_LIST_FIELDS])
      );
    }

    const limit = options.limit ?? 20;
    const limitedUsers = (users as Record<string, unknown>[]).slice(0, limit);

    outputJson({ users: limitedUsers, count: limitedUsers.length });
  } catch (error) {
    if (error instanceof TwitterAPIError) {
      const errorData = {
        error: true,
        type: "api_error",
        message: error.message,
        command: "user followers",
        ...(error.statusCode !== undefined && { status_code: error.statusCode }),
      };
      console.error(JSON.stringify(errorData));
      process.exit(1);
    }
    throw error;
  }
}

/**
 * Get accounts that a user is following
 */
async function userFollowing(
  username: string,
  options: { limit?: number; compact?: boolean },
): Promise<void> {
  try {
    const client = new TwitterAPIClient();
    username = username.replace(/^@/, "");

    const response = await client.get("/twitter/user/followings", {
      userName: username,
      count: Math.min(options.limit ?? 20, 200),
    });

    let users = (response.data ?? response.users ?? response) as unknown;
    if (!Array.isArray(users)) {
      users = users ? [users] : [];
    }

    if (options.compact) {
      users = (users as Record<string, unknown>[]).map((u) =>
        filterFields(u, [...COMPACT_USER_LIST_FIELDS])
      );
    }

    const limit = options.limit ?? 20;
    const limitedUsers = (users as Record<string, unknown>[]).slice(0, limit);

    outputJson({ users: limitedUsers, count: limitedUsers.length });
  } catch (error) {
    if (error instanceof TwitterAPIError) {
      const errorData = {
        error: true,
        type: "api_error",
        message: error.message,
        command: "user following",
        ...(error.statusCode !== undefined && { status_code: error.statusCode }),
      };
      console.error(JSON.stringify(errorData));
      process.exit(1);
    }
    throw error;
  }
}

/**
 * Create user command group
 */
export function createCommand(): Command {
  const cmd = new Command("user");

  cmd.description("User-related commands");

  // user info command
  cmd
    .command("info")
    .description("Get user profile information")
    .argument("<username>", "Twitter username")
    .option("-c, --compact", "Use compact field preset (saves tokens)")
    .option("-f, --fields <fields>", "Custom fields (comma-separated)")
    .action(userInfo);

  // user tweets command
  cmd
    .command("tweets")
    .description("Get recent tweets from a user")
    .argument("<username>", "Twitter username")
    .option("-l, --limit <number>", "Number of tweets to return", "20")
    .option("-r, --include-replies", "Include replies in results")
    .option("-c, --compact", "Use compact field preset")
    .option("-f, --fields <fields>", "Custom fields (comma-separated)")
    .action(userTweets);

  // user followers command
  cmd
    .command("followers")
    .description("Get followers of a user")
    .argument("<username>", "Twitter username")
    .option("-l, --limit <number>", "Number of followers to return", "20")
    .option("-c, --compact", "Use compact mode (default true)", "true")
    .action(userFollowers);

  // user following command
  cmd
    .command("following")
    .description("Get accounts that a user is following")
    .argument("<username>", "Twitter username")
    .option("-l, --limit <number>", "Number of accounts to return", "20")
    .option("-c, --compact", "Use compact mode (default true)", "true")
    .action(userFollowing);

  return cmd;
}
