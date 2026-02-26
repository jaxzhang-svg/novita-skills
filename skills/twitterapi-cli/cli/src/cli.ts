#!/usr/bin/env bun
/**
 * CLI entry point for TwitterAPI Skill - Agent optimized
 */

import { Command } from "commander";
import { Config } from "./core/config.js";
import {
  TwitterAPIError,
  ConfigurationError,
  AuthenticationError,
  RateLimitError,
  NotFoundError,
} from "./core/exceptions.js";
import * as userCommands from "./commands/user.js";
import * as tweetCommands from "./commands/tweet.js";

const PACKAGE_VERSION = "0.1.0";

/**
 * Get configured API client
 */
export function getClient() {
  const config = new Config();
  const { TwitterAPIClient } = require("./core/client.js");
  return new TwitterAPIClient(config);
}

/**
 * Output data as JSON
 */
export function outputJson(data: unknown): void {
  console.log(JSON.stringify(data, null, 2));
}

/**
 * Handle exceptions and output structured error
 */
export function handleError(error: unknown): never {
  const errorData: Record<string, unknown> = {
    error: true,
    message: error instanceof Error ? error.message : String(error),
  };

  if (error instanceof ConfigurationError) {
    errorData.type = "configuration_error";
    errorData.help = "Set TWITTERAPI_KEY environment variable";
  } else if (error instanceof AuthenticationError) {
    errorData.type = "authentication_error";
  } else if (error instanceof RateLimitError) {
    errorData.type = "rate_limit_error";
    if (error.retryAfter !== undefined) {
      errorData.retry_after = error.retryAfter;
    }
  } else if (error instanceof NotFoundError) {
    errorData.type = "not_found_error";
  } else if (error instanceof TwitterAPIError) {
    errorData.type = "api_error";
    if (error.statusCode !== undefined) {
      errorData.status_code = error.statusCode;
    }
  } else {
    errorData.type = "unexpected_error";
  }

  outputJson(errorData);
  process.exit(1);
}

/**
 * Main CLI setup
 */
function createProgram(): Command {
  const program = new Command();

  program
    .name("twitterapi")
    .description("CLI tool for TwitterAPI.io - Agent optimized")
    .version(PACKAGE_VERSION, "-v, --version", "Show version")
    .helpOption("-h, --help", "Display help for command");

  return program;
}

/**
 * Main entry point
 */
export async function main(): Promise<void> {
  try {
    const program = createProgram();

    // Register command modules
    program.addCommand(userCommands.createCommand());
    program.addCommand(tweetCommands.createCommand());

    // Parse arguments
    await program.parseAsync(process.argv);
  } catch (error) {
    handleError(error);
  }
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => handleError(error));
}
