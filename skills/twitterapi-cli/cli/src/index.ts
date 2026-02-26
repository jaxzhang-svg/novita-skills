/**
 * TwitterAPI Skill - A CLI tool for TwitterAPI.io
 *
 * A streamlined API wrapper with field filtering to reduce token usage
 * and improve developer experience.
 */

export { TwitterAPIClient } from "./core/client.js";
export { Config } from "./core/config.js";
export type {
  TwitterAPIError,
  AuthenticationError,
  RateLimitError,
  NotFoundError,
  ValidationError,
  ServerError,
  ConfigurationError,
} from "./core/exceptions.js";
