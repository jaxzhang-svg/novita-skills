/**
 * Configuration management for TwitterAPI Skill
 */

import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
import { config as dotenvConfig } from "dotenv";

interface ConfigData {
  api_key?: string;
  login_cookie?: string;
  base_url?: string;
  timeout?: number;
  max_retries?: number;
  retry_delay?: number;
}

/**
 * Configuration manager supporting env vars and YAML-like config file
 */
export class Config {
  /** Default paths */
  static readonly DEFAULT_CONFIG_DIR = join(
    process.env.HOME || process.env.USERPROFILE || "",
    ".twitterapi",
  );
  static readonly DEFAULT_CONFIG_FILE = join(Config.DEFAULT_CONFIG_DIR, "config.json");

  /** API endpoints */
  static readonly BASE_URL = "https://api.twitterapi.io";

  private _config: ConfigData;

  constructor() {
    // Load .env file if exists
    dotenvConfig();

    // Create config directory if not exists
    this.ensureConfigDirectory();

    // Load from file or env vars
    this._config = this.loadConfig();
  }

  private ensureConfigDirectory(): void {
    if (!existsSync(Config.DEFAULT_CONFIG_DIR)) {
      mkdir(Config.DEFAULT_CONFIG_DIR, { recursive: true }).catch(() => {
        // Ignore errors
      });
    }
  }

  private loadConfig(): ConfigData {
    const config: ConfigData = {};

    // Try to load from config file (JSON for simplicity)
    if (existsSync(Config.DEFAULT_CONFIG_FILE)) {
      try {
        const fileContent = readFile(Config.DEFAULT_CONFIG_FILE, "utf-8");
        const fileConfig = JSON.parse(fileContent.toString()) as ConfigData;
        Object.assign(config, fileConfig);
      } catch {
        // Ignore file read/parse errors
      }
    }

    // Environment variables override file config
    if (process.env.TWITTERAPI_KEY) {
      config.api_key = process.env.TWITTERAPI_KEY;
    }

    if (process.env.TWITTERAPI_LOGIN_COOKIE) {
      config.login_cookie = process.env.TWITTERAPI_LOGIN_COOKIE;
    }

    if (process.env.TWITTERAPI_BASE_URL) {
      config.base_url = process.env.TWITTERAPI_BASE_URL;
    }

    // Set defaults
    config.base_url ||= Config.BASE_URL;
    config.timeout ??= 30;
    config.max_retries ??= 3;
    config.retry_delay ??= 1.0;

    return config;
  }

  /** Get API key */
  get apiKey(): string | undefined {
    return this._config.api_key;
  }

  /** Get login cookie for write operations */
  get loginCookie(): string | undefined {
    return this._config.login_cookie;
  }

  /** Get base API URL */
  get baseUrl(): string {
    return this._config.base_url || Config.BASE_URL;
  }

  /** Get request timeout */
  get timeout(): number {
    return this._config.timeout || 30;
  }

  /** Get max retry attempts */
  get maxRetries(): number {
    return this._config.max_retries || 3;
  }

  /** Get retry delay in seconds */
  get retryDelay(): number {
    return this._config.retry_delay || 1.0;
  }

  /** Save current configuration to file */
  async saveToFile(): Promise<void> {
    // Don't save sensitive data to file
    const saveConfig: ConfigData = {
      base_url: this.baseUrl,
      timeout: this.timeout,
      max_retries: this.maxRetries,
      retry_delay: this.retryDelay,
    };

    await writeFile(Config.DEFAULT_CONFIG_FILE, JSON.stringify(saveConfig, null, 2), "utf-8");
  }

  /** Validate configuration */
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.apiKey) {
      errors.push("API key is required. Set TWITTERAPI_KEY env var or config.");
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}
