---
url: "https://novita.ai/docs/guides/observability-llm-api-metrics"
title: "LLM API Metrics - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/observability-llm-api-metrics#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Observability

LLM API Metrics

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Available Metrics](https://novita.ai/docs/guides/observability-llm-api-metrics#available-metrics)

Novita AI provides comprehensive monitoring metrics for your LLM API usage. These metrics give you insights into the availability and performance of your LLM API requests.You can access these metrics through the [LLM Metrics Console](https://novita.ai/model-api/console/llm-metrics).

## [​](https://novita.ai/docs/guides/observability-llm-api-metrics\#available-metrics)  Available Metrics

All the following metrics are **dimensioned by model**, and sampled on a **per-minute basis**, but depending on the interval you select, the sampling points may not be displayed per minute. In such cases, the sampling points within that time interval will be averaged before being displayed.

**Request Per Minute (RPM)**Shows the number of API requests made per minute, helping you understand usage patterns and API concurrency levels.**Request Success Rate**Shows the percentage of successful API responses (non-5xx status codes) made per minute, indicating API availability.**Average Token Count Per Request**Shows the average number of input and output tokens per request made per minute, useful for understanding token consumption patterns.**End-to-end (E2E) Latency**Shows the overall time it takes for the model to generate the full response for requests made per minute. Includes 99th percentile, 95th percentile, and average latency metrics.**Time to First Token (TTFT)**

This metric is only tracked for streaming requests with the `stream=true` parameter is enabled.

Shows the time required to process the prompt and generate the first output token for requests made per minute. Includes 99th percentile, 95th percentile, and average latency metrics.**Time Per Output Token (TPOT)**

This metric is only tracked for streaming requests when the `stream=true` parameter is enabled.

Shows the average time between consecutive output tokens for requests made per minute. Includes 99th percentile, 95th percentile, and average latency metrics.

Was this page helpful?

YesNo

[Run Axolotl on Novita AI](https://novita.ai/docs/guides/axolotl) [Payment Methods](https://novita.ai/docs/guides/payment-methods)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.