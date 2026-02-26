/**
 * Predefined field sets for compact output mode
 *
 * These presets define commonly used fields to significantly reduce
 * token usage when displaying API responses.
 */

/** User-related compact fields */
export const COMPACT_USER_FIELDS = [
  "id",
  "screen_name",
  "name",
  "description",
  "followers_count",
  "friends_count",
  "statuses_count",
  "verified",
  "created_at",
  "profile_image_url",
] as const;

/** Extended user fields (when more detail is needed) */
export const EXTENDED_USER_FIELDS = [
  ...COMPACT_USER_FIELDS,
  "location",
  "url",
  "protected",
  "listed_count",
  "favourites_count",
] as const;

/** Tweet-related compact fields */
export const COMPACT_TWEET_FIELDS = [
  "id",
  "text",
  "created_at",
  "author_id",
  "conversation_id",
  "public_metrics.like_count",
  "public_metrics.retweet_count",
  "public_metrics.reply_count",
  "public_metrics.quote_count",
] as const;

/** Extended tweet fields */
export const EXTENDED_TWEET_FIELDS = [
  ...COMPACT_TWEET_FIELDS,
  "source",
  "lang",
  "possibly_sensitive",
  "reply_settings",
  "edit_history_tweet_ids",
  "attachments.media_keys",
  "attachments.poll_ids",
  "entities.mentions",
  "entities.hashtags",
  "entities.urls",
] as const;

/** Follower/Following list compact fields */
export const COMPACT_USER_LIST_FIELDS = [
  "id",
  "screen_name",
  "name",
  "description",
  "followers_count",
  "verified",
  "profile_image_url",
] as const;

/** Search result fields */
export const COMPACT_SEARCH_TWEET_FIELDS = [
  ...COMPACT_TWEET_FIELDS,
  "author_id",
] as const;

/** Reply fields (when fetching tweet replies) */
export const COMPACT_REPLY_FIELDS = [
  "id",
  "text",
  "created_at",
  "author_id",
  "public_metrics.like_count",
  "public_metrics.reply_count",
  "in_reply_to_tweet_id",
] as const;

/** Thread context fields */
export const COMPACT_THREAD_FIELDS = [
  ...COMPACT_TWEET_FIELDS,
  "parent",
  "children",
] as const;

/** Quote tweet fields */
export const COMPACT_QUOTE_FIELDS = [
  ...COMPACT_TWEET_FIELDS,
  "quoted_tweet_id",
  "quoted_tweet_author_id",
] as const;

/** Retweeter list fields */
export const COMPACT_RETWEETER_FIELDS = [
  "id",
  "screen_name",
  "name",
  "profile_image_url",
  "retweeted_at",
] as const;

/** Action response fields (for post/like/follow operations) */
export const COMPACT_ACTION_RESPONSE_FIELDS = [
  "success",
  "id",
  "text",
  "created_at",
  "error",
  "message",
] as const;

/** Error response fields */
export const COMPACT_ERROR_FIELDS = [
  "error",
  "message",
  "code",
  "status",
] as const;

/** Preset aliases for easy reference */
export const PRESETS: Record<string, readonly string[]> = {
  user: COMPACT_USER_FIELDS,
  user_extended: EXTENDED_USER_FIELDS,
  tweet: COMPACT_TWEET_FIELDS,
  tweet_extended: EXTENDED_TWEET_FIELDS,
  user_list: COMPACT_USER_LIST_FIELDS,
  search_tweet: COMPACT_SEARCH_TWEET_FIELDS,
  reply: COMPACT_REPLY_FIELDS,
  thread: COMPACT_THREAD_FIELDS,
  quote: COMPACT_QUOTE_FIELDS,
  retweeter: COMPACT_RETWEETER_FIELDS,
  action: COMPACT_ACTION_RESPONSE_FIELDS,
  error: COMPACT_ERROR_FIELDS,
};

/**
 * Get a preset field list by name
 */
export function getPreset(name: string): string[] {
  const preset = PRESETS[name];
  if (!preset) {
    const available = Object.keys(PRESETS).join(", ");
    throw new Error(`Unknown preset '${name}'. Available: ${available}`);
  }
  return [...preset];
}

/**
 * List all available preset names
 */
export function listPresets(): string[] {
  return Object.keys(PRESETS);
}
