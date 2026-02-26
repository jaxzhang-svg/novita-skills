/**
 * API client for TwitterAPI.io
 */

import { Config } from "./config.js";
import {
  TwitterAPIError,
  RateLimitError,
  raiseForStatus,
} from "./exceptions.js";

interface RequestOptions {
  params?: Record<string, string | number | boolean | undefined>;
  json?: Record<string, unknown>;
  headers?: Record<string, string>;
}

/**
 * HTTP client for TwitterAPI.io with retry logic and error handling
 */
export class TwitterAPIClient {
  private config: Config;

  constructor(config?: Config) {
    this.config = config || new Config();
  }

  /**
   * Make HTTP request with error handling
   */
  private async makeRequest(
    method: string,
    endpoint: string,
    options: RequestOptions = {},
  ): Promise<Record<string, unknown>> {
    const { params, json: jsonData, headers: additionalHeaders } = options;

    // Build URL with query parameters
    let url = endpoint.startsWith("http")
      ? endpoint
      : `${this.config.baseUrl}${endpoint}`;

    if (params && Object.keys(params).length > 0) {
      const queryParams = new URLSearchParams();
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined) {
          queryParams.set(key, String(value));
        }
      }
      const queryString = queryParams.toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }

    // Prepare headers
    const headers: Record<string, string> = {
      "x-api-key": this.config.apiKey || "",
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "twitterapi-skill/0.1.0",
      ...additionalHeaders,
    };

    // Prepare request
    const requestInit: RequestInit = {
      method,
      headers,
    };

    if (jsonData) {
      requestInit.body = JSON.stringify(jsonData);
    }

    try {
      const response = await fetch(url, requestInit);

      // Handle rate limiting
      if (response.status === 429) {
        const retryAfterHeader = response.headers.get("Retry-After");
        const retryAfter = retryAfterHeader ? parseInt(retryAfterHeader, 10) : undefined;
        throw new RateLimitError(
          "Rate limit exceeded",
          retryAfter,
          response.status,
        );
      }

      // Handle other errors
      if (response.status >= 400) {
        let errorData: Record<string, unknown> = {};
        try {
          errorData = (await response.json()) as Record<string, unknown>;
        } catch {
          errorData = { message: await response.text() };
        }

        const message =
          typeof errorData.message === "string"
            ? errorData.message
            : `Request failed: ${response.status}`;

        raiseForStatus(response.status, errorData, message);
      }

      // Return JSON response
      if (response.status === 204) {
        // No content
        return {};
      }

      return (await response.json()) as Record<string, unknown>;
    } catch (error) {
      if (error instanceof TwitterAPIError) {
        throw error;
      }
      throw new TwitterAPIError(`HTTP error: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Make GET request
   */
  async get(endpoint: string, params?: RequestOptions["params"]): Promise<Record<string, unknown>> {
    return this.makeRequest("GET", endpoint, { params });
  }

  /**
   * Make POST request
   */
  async post(
    endpoint: string,
    json?: Record<string, unknown>,
    params?: RequestOptions["params"],
  ): Promise<Record<string, unknown>> {
    return this.makeRequest("POST", endpoint, { json, params });
  }

  /**
   * Make DELETE request
   */
  async delete(endpoint: string, params?: RequestOptions["params"]): Promise<Record<string, unknown>> {
    return this.makeRequest("DELETE", endpoint, { params });
  }

  /**
   * Make PATCH request
   */
  async patch(
    endpoint: string,
    json?: Record<string, unknown>,
    params?: RequestOptions["params"],
  ): Promise<Record<string, unknown>> {
    return this.makeRequest("PATCH", endpoint, { json, params });
  }

  /**
   * Close the client (no-op for Bun fetch, kept for compatibility)
   */
  close(): void {
    // No-op for Bun fetch
  }
}
