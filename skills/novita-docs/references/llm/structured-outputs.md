---
url: "https://novita.ai/docs/guides/llm-structured-outputs"
title: "Structured Outputs - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-structured-outputs#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Structured Outputs

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Supported Models](https://novita.ai/docs/guides/llm-structured-outputs#supported-models)
- [Quick Start Guide](https://novita.ai/docs/guides/llm-structured-outputs#quick-start-guide)
- [1\. Initialize the Client](https://novita.ai/docs/guides/llm-structured-outputs#1-initialize-the-client)
- [2\. Define the JSON schema](https://novita.ai/docs/guides/llm-structured-outputs#2-define-the-json-schema)
- [3\. Request chat completion API](https://novita.ai/docs/guides/llm-structured-outputs#3-request-chat-completion-api)
- [The Complete Code](https://novita.ai/docs/guides/llm-structured-outputs#the-complete-code)

`Structured Outputs` enables the model to generate responses that adhere to your supplied [JSON Schema](https://json-schema.org/specification).

## [​](https://novita.ai/docs/guides/llm-structured-outputs\#supported-models)  Supported Models

The following models support `Structured Outputs`:

- zai-org/glm-4.7-flash
- deepseek/deepseek-v3.2
- qwen/qwen3-coder-next

View More

## [​](https://novita.ai/docs/guides/llm-structured-outputs\#quick-start-guide)  Quick Start Guide

This guide demonstrates how to use `Structured Outputs` ability to generate the JSON response via `json_schema` response format. We will walk through a complete Python code example.

### [​](https://novita.ai/docs/guides/llm-structured-outputs\#1-initialize-the-client)  1\. Initialize the Client

First, you need to initialize the client with your Novita API key.

Copy

```
from openai import OpenAI

client = OpenAI(
    base_url="https://api.novita.ai/openai",
    # Get the Novita AI API Key from: https://novita.ai/settings/key-management.
    api_key="<YOUR Novita AI API Key>",
)

# Go to the [Models](https://novita.ai/models) page to see the models that support `Structured Outputs`.
model = "mistralai/mistral-7b-instruct"
```

### [​](https://novita.ai/docs/guides/llm-structured-outputs\#2-define-the-json-schema)  2\. Define the JSON schema

This example creates a schema for extracting expense information from the user’s input.

Copy

```

# Define system prompt for expense tracking.
system_prompt = """You are an expense tracking assistant.
Extract expense information from the user's input and format it according to the provided schema."""

# Define JSON schema for structured response.
response_format = {
    "type": "json_schema",
    "json_schema": {
        "name": "expense_tracking_schema",
        "schema": {
            "type": "object",
            "properties": {
                "expenses": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "description": {
                                "type": "string",
                                "description": "Description of the expense"
                            },
                            "amount": {
                                "type": "number",
                                "description": "Amount spent in dollars"
                            },
                            "date": {
                                "type": "string",
                                "description": "When the expense occurred"
                            },
                            "category": {
                                "type": "string",
                                "description": "Category of expense (e.g., food, office, travel)"
                            }
                        },
                        "required": [\
                            "description",\
                            "amount"\
                        ]
                    }
                },
                "total": {
                    "type": "number",
                    "description": "Total amount of all expenses"
                }
            },
            "required": [\
                "expenses",\
                "total"\
            ],
        },
    },
}
```

### [​](https://novita.ai/docs/guides/llm-structured-outputs\#3-request-chat-completion-api)  3\. Request chat completion API

Now, make the chat completion request to the Novita endpoint.This request includes the `response_format` parameter, defining the JSON schema we defined in the previous step.

Copy

```
chat_completion = client.chat.completions.create(
    model=model,
    messages=[\
        {\
            "role": "system",\
            "content": system_prompt,\
        },\
        {\
            "role": "user",\
            "content": """I spent $120 on dinner at an Italian restaurant last Friday with my colleagues.\
Also bought office supplies for $45 on Monday.""",\
        },\
    ],
    max_tokens=1024,
    temperature=0.8,
    stream=False,
    response_format=response_format,
)

response_content = chat_completion.choices[0].message.content

# Parse and prettify the JSON
try:
    json_response = json.loads(response_content)
    prettified_json = json.dumps(json_response, indent=2)
    print(prettified_json)
except json.JSONDecodeError:
    print("Could not parse response as JSON. Raw response:")
    print(response_content)
```

**Output:**

Copy

```
{
  "expenses": [\
    {\
      "date": "2023-03-17",\
      "description": "Dinner at Italian restaurant",\
      "amount": 120,\
      "category": "Food & Dining"\
    },\
    {\
      "date": "2023-03-13",\
      "description": "Office supplies",\
      "amount": 45,\
      "category": "Office Supplies"\
    }\
  ],
  "total": 165
}
```

### [​](https://novita.ai/docs/guides/llm-structured-outputs\#the-complete-code)  The Complete Code

Copy

```
from openai import OpenAI
import json

client = OpenAI(
    base_url="https://api.novita.ai/openai",
    # Get the Novita AI API Key from: https://novita.ai/settings/key-management.
    api_key="<YOUR Novita AI API Key>",
)

# Go to the [Models](https://novita.ai/models) page to see the models that support `Structured Outputs`.
model = "mistralai/mistral-7b-instruct"

# Example of using JSON Schema for structured output
# This example creates a schema for extracting expense information

# Define system prompt for expense tracking
system_prompt = """You are an expense tracking assistant.
Extract expense information from the user's input and format it according to the provided schema."""

# Define JSON schema for structured response
response_format = {
    "type": "json_schema",
    "json_schema": {
        "name": "expense_tracking_schema",
        "schema": {
            "type": "object",
            "properties": {
                "expenses": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "description": {
                                "type": "string",
                                "description": "Description of the expense"
                            },
                            "amount": {
                                "type": "number",
                                "description": "Amount spent in dollars"
                            },
                            "date": {
                                "type": "string",
                                "description": "When the expense occurred"
                            },
                            "category": {
                                "type": "string",
                                "description": "Category of expense (e.g., food, office, travel)"
                            }
                        },
                        "required": [\
                            "description",\
                            "amount"\
                        ]
                    }
                },
                "total": {
                    "type": "number",
                    "description": "Total amount of all expenses"
                }
            },
            "required": [\
                "expenses",\
                "total"\
            ],
        },
    },
}

chat_completion = client.chat.completions.create(
    model=model,
    messages=[\
        {\
            "role": "system",\
            "content": system_prompt,\
        },\
        {\
            "role": "user",\
            "content": """I spent $120 on dinner at an Italian restaurant last Friday with my colleagues.\
Also bought office supplies for $45 on Monday.""",\
        },\
    ],
    max_tokens=1024,
    temperature=0.8,
    stream=False,
    response_format=response_format,
)

response_content = chat_completion.choices[0].message.content

# Parse and prettify the JSON
try:
    json_response = json.loads(response_content)
    prettified_json = json.dumps(json_response, indent=2)
    print(prettified_json)
except json.JSONDecodeError:
    print("Could not parse response as JSON. Raw response:")
    print(response_content)
```

Was this page helpful?

YesNo

[Function Calling](https://novita.ai/docs/guides/llm-function-calling) [Prompt Cache](https://novita.ai/docs/guides/llm-prompt-cache)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.