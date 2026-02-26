/**
 * Example usage of TwitterAPI Skill
 */

import { Config } from "./core/config.js";
import { TwitterAPIClient } from "./core/client.js";
import { filterFields } from "./filters/engine.js";
import { COMPACT_USER_FIELDS } from "./filters/presets.js";

async function main() {
  // Create configuration
  const config = new Config();
  console.log("Configuration loaded:", {
    baseUrl: config.baseUrl,
    timeout: config.timeout,
    hasApiKey: !!config.apiKey,
  });

  // Create client
  const client = new TwitterAPIClient(config);

  // Example API call (requires TWITTERAPI_KEY env var)
  if (config.apiKey) {
    try {
      const response = await client.get("/twitter/user/info", {
        userName: "elonmusk",
      });

      let data = (response.data ?? response.user ?? response) as Record<string, unknown>;

      // Apply field filtering
      const filtered = filterFields(data, [...COMPACT_USER_FIELDS]);

      console.log("Filtered user data:", filtered);
    } catch (error) {
      console.error("API Error:", error);
    }
  } else {
    console.log("Skipping API call - no TWITTERAPI_KEY set");
  }
}

main().catch(console.error);
