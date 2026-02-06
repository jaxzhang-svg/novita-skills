---
url: "https://novita.ai/docs/guides/llm-interleaved-thinking"
title: "Interleaved Thinking Supporty - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-interleaved-thinking#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Interleaved Thinking Supporty

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Overview](https://novita.ai/docs/guides/llm-interleaved-thinking#1-overview)
- [2\. Key Concepts](https://novita.ai/docs/guides/llm-interleaved-thinking#2-key-concepts)
- [2.1 Interleaving](https://novita.ai/docs/guides/llm-interleaved-thinking#2-1-interleaving)
- [2.2 Reasoning Details (reasoning\_details)](https://novita.ai/docs/guides/llm-interleaved-thinking#2-2-reasoning-details-reasoning-details)
- [2.3 Conversation Memory Requirement](https://novita.ai/docs/guides/llm-interleaved-thinking#2-3-conversation-memory-requirement)
- [3\. API Behavior](https://novita.ai/docs/guides/llm-interleaved-thinking#3-api-behavior)
- [3.1 Request Format](https://novita.ai/docs/guides/llm-interleaved-thinking#3-1-request-format)
- [3.2 Response Format](https://novita.ai/docs/guides/llm-interleaved-thinking#3-2-response-format)
- [4\. Example Request (MiniMax-M2)](https://novita.ai/docs/guides/llm-interleaved-thinking#4-example-request-minimax-m2)
- [5\. Example Response (Non-Streaming)](https://novita.ai/docs/guides/llm-interleaved-thinking#5-example-response-non-streaming)
- [6\. Streaming Response Example](https://novita.ai/docs/guides/llm-interleaved-thinking#6-streaming-response-example)
- [7\. Developer Notes](https://novita.ai/docs/guides/llm-interleaved-thinking#7-developer-notes)
- [7.1 Models That Support Interleaved Thinking](https://novita.ai/docs/guides/llm-interleaved-thinking#7-1-models-that-support-interleaved-thinking)
- [7.2 Pricing](https://novita.ai/docs/guides/llm-interleaved-thinking#7-2-pricing)
- [7.3 Error Handling](https://novita.ai/docs/guides/llm-interleaved-thinking#7-3-error-handling)
- [8\. Best Practices](https://novita.ai/docs/guides/llm-interleaved-thinking#8-best-practices)
- [9\. Summary](https://novita.ai/docs/guides/llm-interleaved-thinking#9-summary)

> **Last Updated**: 2025-12-03
>
> **Status**: Supported (OpenAI-Compatible)

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#1-overview)  1\. Overview

**Interleaved Thinking** is an advanced reasoning framework that enables models to perform explicit reasoning steps between tool calls.Models with Interleaved Thinking can:

- Reflect on the current environment and tool outputs
- Decide the next action based on updated reasoning
- Maintain a continuous reasoning chain across multiple tool invocations
- Provide transparent, inspectable multi-step thinking through `reasoning_details` or `reasoning_content`

This capability transforms traditional function-calling into **agent-level tool use**, making complex workflows more accurate, reliable, and context-aware.Novita fully supports Interleaved Thinking for all models that natively expose reasoning streams (e.g., MiniMax-M2 and other OpenAI-compatible reasoning models).

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#2-key-concepts)  2\. Key Concepts

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#2-1-interleaving)  2.1 Interleaving

Instead of executing a single reasoning phase followed by a tool call, the model performs:

Copy

```
Reason → Tool Call → Observe → Reason → Tool Call → ...
```

This allows the model to adjust its strategy dynamically based on previous tool outputs.

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#2-2-reasoning-details-reasoning-details)  2.2 Reasoning Details (`reasoning_details`)

For some models, the content of the model’s thinking will be returned in the form of a separate structure:

Copy

```
"reasoning_details": [\
  {\
    "type": "reasoning.text",\
    "format": "openai-responses-v1",\
    "text": "Model’s step-by-step reasoning..."\
  }\
]
```

For such models, Novita supports returning this field in both streaming and non-streaming modes.

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#2-3-conversation-memory-requirement)  2.3 Conversation Memory Requirement

To maintain reasoning continuity: You **must append the model’s full response** including `reasoning_details`, `tool_calls`, and `content` to subsequent `messages`.Failing to preserve the chain may result in:

- Incorrect tool use
- Lost reasoning context
- Repeated or circular tool calls
- Reduced reliability

This requirement mirrors OpenAI’s reasoning APIs.

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#3-api-behavior)  3\. API Behavior

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#3-1-request-format)  3.1 Request Format

No changes are required on the user side.
Interleaved Thinking works with the standard OpenAI-compatible Chat Completions API.

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#3-2-response-format)  3.2 Response Format

The model may return the following fields:

- `reasoning_content`: original thinking content
- `reasoning_details`: structured reasoning segments, this field is optioanl
- `tool_calls`: tool invocation plan
- `content`: natural language output

These extend the standard OpenAI format.

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#4-example-request-minimax-m2)  4\. Example Request (MiniMax-M2)

Copy

```
{
  "model": "minimax/minimax-m2",
  "messages": [\
    {\
      "role": "user",\
      "content": "How's the weather in San Francisco?"\
    },\
    {\
      "role": "assistant",\
      "name": "MiniMax AI",\
      "content": "",\
      "tool_calls": [\
        {\
          "id": "call_function_asqvfevfc8af_1",\
          "type": "function",\
          "function": {\
            "name": "get_weather",\
            "arguments": "{\"location\": \"San Francisco, US\"}"\
          }\
        }\
      ],\
      "reasoning_details": [\
        {\
          "type": "reasoning.text",\
          "id": "reasoning-text-1",\
          "format": "openai-responses-v1",\
          "index": 0,\
          "text": "The user is asking about the weather in San Francisco..."\
        }\
      ]\
    },\
    {\
      "role": "tool",\
      "tool_call_id": "call_function_asqvfevfc8af_1",\
      "content": "24℃, sunny"\
    }\
  ],
  "stream": true,
  "reasoning_split": true,
  "max_tokens": 1024,
  "temperature": 0.7,
  "tools": [\
    {\
      "type": "function",\
      "function": {\
        "name": "get_weather",\
        "description": "Get weather for a specific location",\
        "parameters": {\
          "type": "object",\
          "properties": {\
            "location": { "type": "string" }\
          },\
          "required": ["location"]\
        }\
      }\
    }\
  ]
}
```

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#5-example-response-non-streaming)  5\. Example Response (Non-Streaming)

Copy

```
{
  "id": "07a4dedfdb1498b045498dfd42497639",
  "object": "chat.completion",
  "created": 1764303147,
  "model": "MiniMax",
  "choices": [\
    {\
      "index": 0,\
      "message": {\
        "role": "assistant",\
        "content": "",\
        "name": "MiniMax",\
        "tool_calls": [\
          {\
            "index": 0,\
            "id": "call_function_9w7wq1j9zmpl_1",\
            "type": "function",\
            "function": {\
              "name": "get_weather",\
              "arguments": "{\"location\": \"ShangHai\"}"\
            }\
          }\
        ],\
        "reasoning_content": "The user asked for Shanghai weather...",\
        "reasoning_details": [\
          {\
            "type": "reasoning.text",\
            "text": "The user is asking about the weather in Shanghai...",\
            "id": "reasoning-text-1",\
            "format": "openai-responses-v1",\
            "index": 0\
          }\
        ]\
      },\
      "finish_reason": "tool_calls"\
    }\
  ]
}
```

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#6-streaming-response-example)  6\. Streaming Response Example

Copy

```
{
  "id": "664c5ad870c1888fbcbd267d9829e354",
  "object": "chat.completion.chunk",
  "created": 1764303504,
  "model": "minimax-m2",
  "choices": [\
    {\
      "index": 0,\
      "delta": {\
        "role": "assistant",\
        "reasoning_content": "...\n\nThe user has specifically asked...",\
        "reasoning_details": [\
          {\
            "type": "reasoning.text",\
            "text": ".\n\nThe user has specifically asked...",\
            "id": "reasoning-text-1",\
            "format": "openai-responses-v1",\
            "index": 0\
          }\
        ]\
      },\
      "finish_reason": null\
    }\
  ]
}
```

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#7-developer-notes)  7\. Developer Notes

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#7-1-models-that-support-interleaved-thinking)  7.1 Models That Support Interleaved Thinking

All models exposing `reasoning_details` through OpenAI-compatible APIs, including:

- MiniMax-M2
- (Upcoming) Novita Reasoning Series
- Other reasoning-enabled partner models

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#7-2-pricing)  7.2 Pricing

Billing is based on reasoning tokens, following the model’s pricing rules.
`reasoning_details` will increase token usage.

### [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#7-3-error-handling)  7.3 Error Handling

You may encounter:

- Missing tool parameters
- Recursive or repeated tool calls
- Incorrect assumptions in the reasoning phase

Ensure your application validates tool arguments and handles model errors gracefully.

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#8-best-practices)  8\. Best Practices

**✓ Always include full model messages in the next request**Include:

- `content`
- `tool_calls`
- `reasoning_details`

**✓ Enable streaming for long-chain reasoning**Streaming allows the client to:

- Monitor the reasoning process
- Detect incorrect tool plans early
- Provide faster user feedback

**✓ Combine with server-side state machines for stability**For production systems, we recommend pairing Interleaved Thinking with deterministic guardrails, e.g.:

- Parameter validators
- Execution sandbox
- Maximum recursion safeguards

## [​](https://novita.ai/docs/guides/llm-interleaved-thinking\#9-summary)  9\. Summary

Interleaved Thinking significantly enhances multi-step reasoning and tool-use reliability:

- Transparent and inspectable step-wise reasoning
- Adaptive planning between tool invocations
- Stronger context retention across long workflows
- Fully compatible with OpenAI-style Chat Completions API

Novita will continue expanding support for advanced reasoning models, bringing agent-level intelligence to the API layer.

Was this page helpful?

YesNo

[Anthropic SDK Compatibility](https://novita.ai/docs/guides/llm-anthropic-compatibility) [Common Error Codes](https://novita.ai/docs/guides/error)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.