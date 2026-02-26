/**
 * Exception classes for TwitterAPI Skill
 */

/**
 * Base exception for TwitterAPI errors
 */
export class TwitterAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public responseData?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "TwitterAPIError";
  }

  toString(): string {
    return this.statusCode ? `[${this.statusCode}] ${this.message}` : this.message;
  }
}

/**
 * Raised when authentication fails (401)
 */
export class AuthenticationError extends TwitterAPIError {
  constructor(message: string, statusCode?: number, responseData?: Record<string, unknown>) {
    super(message, statusCode, responseData);
    this.name = "AuthenticationError";
  }
}

/**
 * Raised when rate limit is exceeded (429)
 */
export class RateLimitError extends TwitterAPIError {
  constructor(
    message: string,
    public retryAfter?: number,
    statusCode?: number,
    responseData?: Record<string, unknown>,
  ) {
    super(message, statusCode, responseData);
    this.name = "RateLimitError";
  }
}

/**
 * Raised when resource is not found (404)
 */
export class NotFoundError extends TwitterAPIError {
  constructor(message: string, statusCode?: number, responseData?: Record<string, unknown>) {
    super(message, statusCode, responseData);
    this.name = "NotFoundError";
  }
}

/**
 * Raised when request validation fails (400)
 */
export class ValidationError extends TwitterAPIError {
  constructor(message: string, statusCode?: number, responseData?: Record<string, unknown>) {
    super(message, statusCode, responseData);
    this.name = "ValidationError";
  }
}

/**
 * Raised when server error occurs (5xx)
 */
export class ServerError extends TwitterAPIError {
  constructor(message: string, statusCode?: number, responseData?: Record<string, unknown>) {
    super(message, statusCode, responseData);
    this.name = "ServerError";
  }
}

/**
 * Raised when configuration is invalid or missing
 */
export class ConfigurationError extends TwitterAPIError {
  constructor(message: string) {
    super(message);
    this.name = "ConfigurationError";
  }
}

/**
 * Raise appropriate exception based on status code
 */
export function raiseForStatus(
  statusCode: number,
  responseData?: Record<string, unknown>,
  message = "",
): never {
  const msg = message || getMessageForStatus(statusCode);

  switch (statusCode) {
    case 401:
      throw new AuthenticationError(msg, statusCode, responseData);
    case 403:
      throw new AuthenticationError(msg, statusCode, responseData);
    case 404:
      throw new NotFoundError(msg, statusCode, responseData);
    case 400:
      throw new ValidationError(msg, statusCode, responseData);
    case 429:
      const retryAfter =
        typeof responseData?.retry_after === "number" ? responseData.retry_after : undefined;
      throw new RateLimitError(msg, retryAfter, statusCode, responseData);
    default:
      if (statusCode >= 500) {
        throw new ServerError(msg, statusCode, responseData);
      }
      if (statusCode >= 400) {
        throw new TwitterAPIError(msg, statusCode, responseData);
      }
      throw new TwitterAPIError(msg, statusCode, responseData);
  }
}

function getMessageForStatus(statusCode: number): string {
  const messages: Record<number, string> = {
    400: "Validation failed",
    401: "Authentication failed",
    403: "Access forbidden",
    404: "Resource not found",
    429: "Rate limit exceeded",
  };

  return messages[statusCode] || "Request failed";
}
