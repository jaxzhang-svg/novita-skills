---
url: "https://novita.ai/docs/guides/llm-monitor"
title: "LLM Monitoring - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-monitor#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

LLM Monitoring

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Metric Descriptions](https://novita.ai/docs/guides/llm-monitor#metric-descriptions)

Novita AI provides comprehensive monitoring metrics for the usage of large language model (LLM) APIs. These metrics help you gain deep insights into the availability and performance of your LLM API requests.You can view the monitoring metrics on the [LLM Monitoring Page](https://novita.ai/models-console/llm-metrics).

## [​](https://novita.ai/docs/guides/llm-monitor\#metric-descriptions)  Metric Descriptions

All metrics are broken down by **model** and sampled at the **minute level**. However, depending on your selected time interval, samples may not be shown for every minute. In such cases, values will be averaged across the selected time range.

- **Requests Per Minute (RPM)**

Displays the number of API requests sent per minute. This helps you understand usage patterns and the level of API concurrency.

- **Request Success Rate**

Shows the percentage of successful API responses per minute (non-5xx status codes), reflecting the API’s availability.

- **Average Token Count per Request**

Displays the average number of input and output tokens per request per minute, which helps you monitor token consumption patterns.

- **End-to-End (E2E) Latency**

Shows the total time required for the model to generate a full response in each request per minute. Metrics include the 99th percentile, 95th percentile, and average latency.

- **Time to First Token (TTFT)**

Only tracked for streaming requests where stream=true.

Displays the time it takes to process the prompt and generate the first output token in each request per minute. Includes the 99th percentile, 95th percentile, and average latency.

- **Time Per Output Token (TPOT)**

Only tracked for streaming requests where stream=true.

Displays the average time between consecutive output tokens in each request per minute. Includes the 99th percentile, 95th percentile, and average latency.

Was this page helpful?

YesNo

[Rate limits](https://novita.ai/docs/guides/llm-rate-limits) [Interactive Playground](https://novita.ai/docs/guides/llm-playgrounds)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.