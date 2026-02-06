---
url: "https://novita.ai/docs/guides/llm-prompt-cache"
title: "Prompt Cache - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-prompt-cache#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Prompt Cache

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Benefits](https://novita.ai/docs/guides/llm-prompt-cache#1-benefits)
- [2\. Supported Models](https://novita.ai/docs/guides/llm-prompt-cache#2-supported-models)
- [3\. Use Cases](https://novita.ai/docs/guides/llm-prompt-cache#3-use-cases)
- [4\. Response Examples](https://novita.ai/docs/guides/llm-prompt-cache#4-response-examples)

Prompt Cache is a cost-optimization feature provided by the Novita inference engine.When a request matches a previous Prompt, the system returns a cached result and charges only a minimal cache token fee — significantly reducing cost and improving response latency.

## [​](https://novita.ai/docs/guides/llm-prompt-cache\#1-benefits)  1\. Benefits

With Prompt Cache enabled, you gain:

- **Lower Cost**Repeated Prompts no longer require full inference. Only minimal cache token fees are charged.
- **Lower Latency**Cached results are returned instantly without running the model.
- **Higher Throughput**In high-QPS scenarios, Prompt Cache reduces compute load and improves overall system capacity.
- **Transparent to Your Application**no additional logic or system changes are required.

## [​](https://novita.ai/docs/guides/llm-prompt-cache\#2-supported-models)  2\. Supported Models

Several serverless open-source models currently support prompt cache billing, including:

- zai-org/glm-4.7-flash
- deepseek/deepseek-v3.2
- moonshotai/kimi-k2.5

View More

For pricing details regarding the prompt cache feature of supported models, please refer to: [https://novita.ai/pricing](https://novita.ai/pricing) (see “Cache” section).

## [​](https://novita.ai/docs/guides/llm-prompt-cache\#3-use-cases)  3\. Use Cases

Prompt Cache is highly effective in workloads with **frequent repeated Prompts**, including but not limited to:

- **Template-based Generation**
  - Fixed-format summaries
  - Template-driven rewriting
  - Prompts reused across tasks
- **Text Classification & Field Extraction**
  - Content type classification
  - Tag or key information extraction
- **Content Moderation**
  - Review of comments, ads, or titles
  - Many moderation prompts repeat across users and time
- **Repeated System Prompts in Chat Applications**
  - Chatbot persona definitions
  - Global conversation rules
  - Background information reused across multiple turns
- **Workflow / Assistant-style Prompts**
  - SQL generation assistants
  - Code repair assistants
  - Summary assistants with fixed output formats

These scenarios naturally achieve high cache hit rates, reducing inference cost significantly.

## [​](https://novita.ai/docs/guides/llm-prompt-cache\#4-response-examples)  4\. Response Examples

When the cache is hit, no inference is performed, resulting in significantly lower cost and faster responses.

If the model supports prompt caching, your API calls require no modifications. Below is a sample response when hitting the cached result:

Copy

```
{
    "prompt_tokens": 3295,
    "completion_tokens": 137,
    "total_tokens": 3432,
    "prompt_tokens_details":
    {
        "audio_tokens": 0,
        "cached_tokens": 448,
        "cache_creation_Prompt_tokens": 0,
        "cache_read_Prompt_tokens": 0
    }
}
```

Was this page helpful?

YesNo

[Structured Outputs](https://novita.ai/docs/guides/llm-structured-outputs) [Dedicated Endpoint User Manual](https://novita.ai/docs/guides/llm-dedicated-endpoint)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.