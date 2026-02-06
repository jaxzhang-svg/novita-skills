---
url: "https://novita.ai/docs/guides/llm-function-calling"
title: "Function Calling - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-function-calling#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Function Calling

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Supported Models](https://novita.ai/docs/guides/llm-function-calling#supported-models)
- [Quick Start Guide](https://novita.ai/docs/guides/llm-function-calling#quick-start-guide)
- [1\. Initialize the Client](https://novita.ai/docs/guides/llm-function-calling#1-initialize-the-client)
- [2\. Define the Function to Be Called](https://novita.ai/docs/guides/llm-function-calling#2-define-the-function-to-be-called)
- [3\. Construct the API Request with Tools and User Message](https://novita.ai/docs/guides/llm-function-calling#3-construct-the-api-request-with-tools-and-user-message)
- [4\. Respond with the Function Call Result and Get the Final Answer](https://novita.ai/docs/guides/llm-function-calling#4-respond-with-the-function-call-result-and-get-the-final-answer)
- [The Complete Code](https://novita.ai/docs/guides/llm-function-calling#the-complete-code)

`Function Calling` empowers AI models to interact with external tools and APIs, enabling them to perform specific actions and access real-time information. This capability extends the functionality of AI models beyond simple text generation, allowing for more dynamic and practical applications.

## [​](https://novita.ai/docs/guides/llm-function-calling\#supported-models)  Supported Models

The following models support `Function Calling`:

- zai-org/glm-4.7-flash
- deepseek/deepseek-v3.2
- qwen/qwen3-coder-next

View More

## [​](https://novita.ai/docs/guides/llm-function-calling\#quick-start-guide)  Quick Start Guide

This guide demonstrates how to use Function Calling to retrieve current weather information for a user’s specified location. We will walk through a complete Python code example.For the specific API format of Function Calling, please refer to the API reference [Create Chat Completion](https://novita.ai/docs/api-reference/model-apis-llm-create-chat-completion).

### [​](https://novita.ai/docs/guides/llm-function-calling\#1-initialize-the-client)  1\. Initialize the Client

First, you need to initialize the client with your Novita API key.

Copy

```
from openai import OpenAI
import json

client = OpenAI(
    base_url="https://api.novita.ai/openai",
    # Get the Novita AI API Key from: https://novita.ai/settings/key-management.
    api_key="<YOUR Novita AI API Key>",
)

model = "deepseek/deepseek_v3"
```

### [​](https://novita.ai/docs/guides/llm-function-calling\#2-define-the-function-to-be-called)  2\. Define the Function to Be Called

Next, define the Python function that the model can call. In this example, it’s a function to get weather information.

Copy

```
# Example function to simulate fetching weather data.
def get_weather(location):
    """Retrieves the current weather for a given location."""
    print("Calling get_weather function with location: ", location)
    # In a real application, you would call an external weather API here.
    # This is a simplified example returning hardcoded data.
    return json.dumps({"location": location, "temperature": "60 degrees Fahrenheit"})
```

### [​](https://novita.ai/docs/guides/llm-function-calling\#3-construct-the-api-request-with-tools-and-user-message)  3\. Construct the API Request with Tools and User Message

Now, create the API request to the Novita endpoint. This request includes the `tools` parameter, defining the functions the model can use, and the user’s message.

Copy

```
tools = [\
    {\
        "type": "function",\
        "function": {\
            "name": "get_weather",\
            "description": "Get weather of an location, the user shoud supply a location first",\
            "parameters": {\
                "type": "object",\
                "properties": {\
                    "location": {\
                        "type": "string",\
                        "description": "The city and state, e.g. San Francisco, CA",\
                    }\
                },\
                "required": ["location"]\
            },\
        }\
    },\
]

messages = [\
    {\
        "role": "user",\
        "content": "What is the weather in San Francisco?"\
    }\
]

# Let's send the request and print the response.
response = client.chat.completions.create(
    model=model,
    messages=messages,
    tools=tools,
)

# Please check if the response contains tool calls if in production.
tool_call = response.choices[0].message.tool_calls[0]
print(tool_call.model_dump())
```

**Output:**

Copy

```
{'id': '0', 'function': {'arguments': '{"location": "San Francisco, CA"}', 'name': 'get_weather'}, 'type': 'function'}
```

### [​](https://novita.ai/docs/guides/llm-function-calling\#4-respond-with-the-function-call-result-and-get-the-final-answer)  4\. Respond with the Function Call Result and Get the Final Answer

The next step is to process the function call, execute the `get_weather` function, and send the result back to the model to generate the final response to the user.

Copy

```
# Ensure tool_call is defined from the previous step
if tool_call:
    # Extend conversation history with the assistant's tool call message
    messages.append(response.choices[0].message)

    function_name = tool_call.function.name
    if function_name == "get_weather":
        function_args = json.loads(tool_call.function.arguments)
        # Execute the function and get the response
        function_response = get_weather(
            location=function_args.get("location"))
        # Append the function response to the messages
        messages.append(
            {
                "tool_call_id": tool_call.id,
                "role": "tool",
                "content": function_response,
            }
        )

    # Get the final response from the model, now with the function result
    answer_response = client.chat.completions.create(
        model=model,
        messages=messages,
        # Note: Do not include tools parameter here.
    )
    print(answer_response.choices[0].message)
```

**Output:**

Copy

```
ChatCompletionMessage(content="The weather in San Francisco, CA is currently **60 degrees Fahrenheit**. For more detailed information, such as specific conditions (e.g., sunny, cloudy, rainy), you might want to check a local weather app or website. Let me know if you'd like help with anything else!", refusal=None, role='assistant', function_call=None, tool_calls=None)
```

### [​](https://novita.ai/docs/guides/llm-function-calling\#the-complete-code)  The Complete Code

Copy

```
from openai import OpenAI
import json

client = OpenAI(
    base_url="https://api.novita.ai/openai",
    # Get the Novita AI API Key from: https://novita.ai/settings/key-management.
    api_key="<YOUR Novita AI API Key>",
)

model = "deepseek/deepseek_v3"

# Example function to simulate fetching weather data.
def get_weather(location):
    """Retrieves the current weather for a given location."""
    print("Calling get_weather function with location: ", location)
    # In a real application, you would call an external weather API here.
    # This is a simplified example returning hardcoded data.
    return json.dumps({"location": location, "temperature": "60 degrees Fahrenheit"})

tools = [\
    {\
        "type": "function",\
        "function": {\
            "name": "get_weather",\
            "description": "Get weather of an location, the user shoud supply a location first",\
            "parameters": {\
                "type": "object",\
                "properties": {\
                    "location": {\
                        "type": "string",\
                        "description": "The city and state, e.g. San Francisco, CA",\
                    }\
                },\
                "required": ["location"]\
            },\
        }\
    },\
]

messages = [\
    {\
        "role": "user",\
        "content": "What is the weather in San Francisco?"\
    }\
]

# Let's send the request and print the response.
response = client.chat.completions.create(
    model=model,
    messages=messages,
    tools=tools,
)

# Please check if the response contains tool calls if in production.
tool_call = response.choices[0].message.tool_calls[0]
print(tool_call.model_dump())

# Ensure tool_call is defined from the previous step
if tool_call:
    # Extend conversation history with the assistant's tool call message
    messages.append(response.choices[0].message)

    function_name = tool_call.function.name
    if function_name == "get_weather":
        function_args = json.loads(tool_call.function.arguments)
        # Execute the function and get the response
        function_response = get_weather(
            location=function_args.get("location"))
        # Append the function response to the messages
        messages.append(
            {
                "tool_call_id": tool_call.id,
                "role": "tool",
                "content": function_response,
            }
        )

    # Get the final response from the model, now with the function result
    answer_response = client.chat.completions.create(
        model=model,
        messages=messages,
        # Note: Do not include tools parameter here
    )
    print(answer_response.choices[0].message)
```

Was this page helpful?

YesNo

[DeepSeek-OCR Usage](https://novita.ai/docs/guides/llm-deepseek-ocr) [Structured Outputs](https://novita.ai/docs/guides/llm-structured-outputs)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.