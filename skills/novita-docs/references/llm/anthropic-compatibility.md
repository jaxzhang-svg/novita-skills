---
url: "https://novita.ai/docs/guides/llm-anthropic-compatibility"
title: "Novita AI Anthropic SDK Compatibility"
---

[Skip to main content](https://novita.ai/docs/guides/llm-anthropic-compatibility#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Anthropic SDK Compatibility

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Supported Models](https://novita.ai/docs/guides/llm-anthropic-compatibility#supported-models)
- [Quick Start Guide](https://novita.ai/docs/guides/llm-anthropic-compatibility#quick-start-guide)
- [1\. Install the Anthropic SDK](https://novita.ai/docs/guides/llm-anthropic-compatibility#1-install-the-anthropic-sdk)
- [2\. Initialize the Client](https://novita.ai/docs/guides/llm-anthropic-compatibility#2-initialize-the-client)
- [3\. Call the API](https://novita.ai/docs/guides/llm-anthropic-compatibility#3-call-the-api)

Novita AI provides a compatibility API that allows you to use the Anthropic SDK with Novita AI models. This is useful if you are already using the Anthropic SDK and want to switch to Novita AI models.

## [​](https://novita.ai/docs/guides/llm-anthropic-compatibility\#supported-models)  Supported Models

Currently, only the following models are compatible with the Anthropic SDK:

- deepseek/deepseek-v3.2
- qwen/qwen3-coder-next
- moonshotai/kimi-k2.5

View More

## [​](https://novita.ai/docs/guides/llm-anthropic-compatibility\#quick-start-guide)  Quick Start Guide

This guide demonstrates how to use the Anthropic SDK with the Novita AI models step by step.

### [​](https://novita.ai/docs/guides/llm-anthropic-compatibility\#1-install-the-anthropic-sdk)  1\. Install the Anthropic SDK

Python

TypeScript

Copy

```
pip install anthropic
```

### [​](https://novita.ai/docs/guides/llm-anthropic-compatibility\#2-initialize-the-client)  2\. Initialize the Client

The Anthropic SDKs are designed to pull the API key and base URL from the environmental variables: `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL`. Also, you can supply the parameters to the Anthropic client when initializing it.

You can view and manage your API keys on the [settings page](https://novita.ai/settings/key-management?utm_source=getstarted).

- Using Environment Variables

Bash

Copy

```
export ANTHROPIC_BASE_URL="https://api.novita.ai/anthropic"
export ANTHROPIC_API_KEY="<YOUR_NOVITA_API_KEY>"
```

- Set the parameters while initializing the Anthropic client

Python

TypeScript

Copy

```
import anthropic

client = anthropic.Anthropic(
    base_url="https://api.novita.ai/anthropic",
    api_key="<YOUR_NOVITA_API_KEY>",
    # Rewrite header
    default_headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <YOUR_NOVITA_API_KEY>",
    }
)
```

### [​](https://novita.ai/docs/guides/llm-anthropic-compatibility\#3-call-the-api)  3\. Call the API

Python

TypeScript

Copy

```
import anthropic

# Initialize the client, if you already set `ANTHROPIC_BASE_URL` and `ANTHROPIC_API_KEY`
# in the environment variables, you can omit the `api_key` and `base_url` parameters.
client = anthropic.Anthropic(
    base_url="https://api.novita.ai/anthropic",
    api_key="<YOUR_NOVITA_API_KEY>",
    # Rewrite header
    default_headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <YOUR_NOVITA_API_KEY>",
    }
)

message = client.messages.create(
    model="moonshotai/kimi-k2-instruct",
    max_tokens=1000,
    temperature=1,
    system=[\
        {\
            "type": "text",\
            "text": "You are a world-class poet. Respond only with short poems."\
        }\
    ],
    messages=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "text",\
                    "text": "Why is the ocean salty?"\
                }\
            ]\
        }\
    ]
)

print(message.content)
```

Was this page helpful?

YesNo

[Interactive Playground](https://novita.ai/docs/guides/llm-playgrounds) [Interleaved Thinking Supporty](https://novita.ai/docs/guides/llm-interleaved-thinking)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.