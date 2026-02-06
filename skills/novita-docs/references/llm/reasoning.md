---
url: "https://novita.ai/docs/guides/llm-reasoning"
title: "Reasoning Models - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-reasoning#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Reasoning Models

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Overview](https://novita.ai/docs/guides/llm-reasoning#overview)
- [Typical Use Cases](https://novita.ai/docs/guides/llm-reasoning#typical-use-cases)
- [Installation & Setup](https://novita.ai/docs/guides/llm-reasoning#installation-%26-setup)
- [API Usage](https://novita.ai/docs/guides/llm-reasoning#api-usage)
- [Request Parameters](https://novita.ai/docs/guides/llm-reasoning#request-parameters)
- [Example Code](https://novita.ai/docs/guides/llm-reasoning#example-code)
- [Streaming Response](https://novita.ai/docs/guides/llm-reasoning#streaming-response)
- [Non-Streaming Response](https://novita.ai/docs/guides/llm-reasoning#non-streaming-response)
- [Context Management](https://novita.ai/docs/guides/llm-reasoning#context-management)
- [Supported Models](https://novita.ai/docs/guides/llm-reasoning#supported-models)
- [Billing](https://novita.ai/docs/guides/llm-reasoning#billing)
- [Notes & Best Practices](https://novita.ai/docs/guides/llm-reasoning#notes-%26-best-practices)

## [​](https://novita.ai/docs/guides/llm-reasoning\#overview)  Overview

Reasoning models are advanced language models optimized for complex problem-solving tasks. By generating detailed reasoning steps (chain-of-thought), they improve the accuracy of answers in analytical scenarios.

### [​](https://novita.ai/docs/guides/llm-reasoning\#typical-use-cases)  Typical Use Cases

- **Complex Problem Solving**: Suitable for tasks requiring step-by-step logic, such as math or scientific reasoning.
- **Decision Support Systems**: Helps explain the logic behind conclusions by providing detailed reasoning processes.
- **Education and Training**: Assists learners in understanding complex concepts by presenting derivation processes clearly.

* * *

## [​](https://novita.ai/docs/guides/llm-reasoning\#installation-&-setup)  Installation & Setup

Before using reasoning models, make sure the latest OpenAI SDK is installed:

Copy

```
pip install -U openai
```

* * *

## [​](https://novita.ai/docs/guides/llm-reasoning\#api-usage)  API Usage

Use the `/chat/completions` endpoint to invoke reasoning models.

### [​](https://novita.ai/docs/guides/llm-reasoning\#request-parameters)  Request Parameters

- `max_tokens`: Sets the maximum number of tokens the model can return.
- `temperature`: Recommended between 0.5 and 0.7 (suggested: 0.6) to balance creativity and logic.
- `top_p`: Recommended value is 0.95.

* * *

### [​](https://novita.ai/docs/guides/llm-reasoning\#example-code)  Example Code

#### [​](https://novita.ai/docs/guides/llm-reasoning\#streaming-response)  Streaming Response

Copy

```
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.novita.ai/openai")
messages = [\
    {"role": "user", "content": "Explain Newton's Second Law."}\
]

response = client.chat.completions.create(
    model="deepseek/deepseek-r1",
    messages=messages,
    stream=True,
    max_tokens=4096
)

content = ""
reasoning_content = ""
for chunk in response:
    if chunk.choices[0].delta.content:
        content += chunk.choices[0].delta.content
    if chunk.choices[0].delta.reasoning_content:
        reasoning_content += chunk.choices[0].delta.reasoning_content

print("Final Answer:", content)
print("Reasoning Steps:", reasoning_content)
```

#### [​](https://novita.ai/docs/guides/llm-reasoning\#non-streaming-response)  Non-Streaming Response

Copy

```
response = client.chat.completions.create(
    model="deepseek/deepseek-r1",
    messages=[\
        {"role": "user", "content": "What is the greenhouse effect? How can it be mitigated?"}\
    ],
    stream=False,
    max_tokens=4096
)

content = response.choices[0].message.content
reasoning_content = response.choices[0].message.reasoning_content

print("Final Answer:", content)
print("Reasoning Steps:", reasoning_content)
```

* * *

## [​](https://novita.ai/docs/guides/llm-reasoning\#context-management)  Context Management

Reasoning outputs are not automatically carried over to the next round of dialogue. You must manually maintain the message history:

Copy

```
messages.append({"role": "assistant", "content": content})
messages.append({"role": "user", "content": "Please continue explaining the solution."})
```

* * *

## [​](https://novita.ai/docs/guides/llm-reasoning\#supported-models)  Supported Models

The following reasoning models are currently supported on the Novita platform:

- zai-org/glm-4.7-flash
- deepseek/deepseek-v3.2
- moonshotai/kimi-k2.5

View More

* * *

## [​](https://novita.ai/docs/guides/llm-reasoning\#billing)  Billing

- Billing is based on the number of tokens for both input and output.
- Please refer to each model’s pricing page for specific billing rules and token conversion details.

* * *

## [​](https://novita.ai/docs/guides/llm-reasoning\#notes-&-best-practices)  Notes & Best Practices

- Avoid placing reasoning instructions in the `system` message. Instead, make the intent explicit in the `user` message.
- For mathematical tasks, clearly instruct the model, e.g., “Please reason step by step and provide a final answer.”
- To prevent the model from skipping reasoning steps, consider asking for a newline before the final answer.

Was this page helpful?

YesNo

[Recommended Models](https://novita.ai/docs/guides/llm-recommended) [DeepSeek-OCR Usage](https://novita.ai/docs/guides/llm-deepseek-ocr)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.