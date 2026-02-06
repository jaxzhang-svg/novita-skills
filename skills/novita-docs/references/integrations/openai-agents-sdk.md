---
url: "https://novita.ai/docs/guides/openai-agents-sdk"
title: "OpenAI Agents SDK - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/openai-agents-sdk#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

OpenAI Agents SDK

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Get Started](https://novita.ai/docs/guides/openai-agents-sdk#get-started)
- [Hello world example](https://novita.ai/docs/guides/openai-agents-sdk#hello-world-example)
- [Handoffs example](https://novita.ai/docs/guides/openai-agents-sdk#handoffs-example)
- [Functions example](https://novita.ai/docs/guides/openai-agents-sdk#functions-example)

The [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) is a lightweight yet powerful framework for building multi-agent workflows. And the SDK is compatible with any model providers that support the OpenAI Chat Completions API format.This guide will walk you through how to use Novita LLM API with OpenAI Agents SDK.

## [​](https://novita.ai/docs/guides/openai-agents-sdk\#get-started)  Get Started

1. Set up your Python environment and install the Agents SDK.

Copy

```
python -m venv env
source env/bin/activate
pip install openai-agents==0.0.7
```

2. Set up your Novita API key.

Go to [Key Management](https://novita.ai/settings/key-management?utm_source=getstarted) and create a new API key.

## [​](https://novita.ai/docs/guides/openai-agents-sdk\#hello-world-example)  Hello world example

If running this, ensure you set the NOVITA\_API\_KEY and MODEL\_NAME environment variables.

Copy

```
import os
from openai import AsyncOpenAI
from agents import (
    Agent,
    Runner,
    set_default_openai_api,
    set_default_openai_client,
    set_tracing_disabled,
)

BASE_URL = "https://api.novita.ai/openai"
API_KEY = os.getenv("NOVITA_API_KEY")
MODEL_NAME = os.getenv("MODEL_NAME")

# Because Novita not support the responses API so we use the chat completions API instead.
set_default_openai_api("chat_completions")
set_default_openai_client(AsyncOpenAI(base_url=BASE_URL, api_key=API_KEY))
# Disable tracing for this example
# Refer to https://openai.github.io/openai-agents-python/tracing/#external-tracing-processors-list to use the custom spans.
set_tracing_disabled(disabled=True)

agent = Agent(name="Assistant",
              instructions="You are a helpful assistant", model=MODEL_NAME)

result = Runner.run_sync(
    agent, "Write a haiku about recursion in programming.")
print(result.final_output)

# Code within the code,
# Functions calling themselves,
# Infinite loop's dance.
```

## [​](https://novita.ai/docs/guides/openai-agents-sdk\#handoffs-example)  Handoffs example

If running this, ensure you set the NOVITA\_API\_KEY and MODEL\_NAME environment variables.

Copy

```
import os
import asyncio
from openai import AsyncOpenAI
from agents import (
    Agent,
    Runner,
    set_default_openai_api,
    set_default_openai_client,
    set_tracing_disabled,
)

BASE_URL = "https://api.novita.ai/openai"
API_KEY = os.getenv("NOVITA_API_KEY")
MODEL_NAME = os.getenv("MODEL_NAME")

# Because Novita not support the responses API so we use the chat completions API instead.
set_default_openai_api("chat_completions")
set_default_openai_client(AsyncOpenAI(base_url=BASE_URL, api_key=API_KEY))
# Disable tracing for this example
# Refer to https://openai.github.io/openai-agents-python/tracing/#external-tracing-processors-list to use the custom spans.
set_tracing_disabled(disabled=True)

spanish_agent = Agent(
    name="Spanish agent",
    instructions="You only speak Spanish.",
    model=MODEL_NAME,
)

english_agent = Agent(
    name="English agent",
    instructions="You only speak English",
    model=MODEL_NAME,
)

triage_agent = Agent(
    name="Triage agent",
    instructions="Handoff to the appropriate agent based on the language of the request.",
    handoffs=[spanish_agent, english_agent],
    model=MODEL_NAME,
)

async def main():
    result = await Runner.run(triage_agent, input="Hola, ¿cómo estás?")
    print(result.final_output)
    # ¡Hola! Estoy bien, gracias por preguntar. ¿Y tú, cómo estás?

if __name__ == "__main__":
    asyncio.run(main())
```

## [​](https://novita.ai/docs/guides/openai-agents-sdk\#functions-example)  Functions example

If running this, ensure you set the NOVITA\_API\_KEY and MODEL\_NAME environment variables.

Copy

```
import os
import asyncio
from openai import AsyncOpenAI
from agents import (
    Agent,
    Runner,
    set_default_openai_api,
    set_default_openai_client,
    set_tracing_disabled,
    function_tool,
)

BASE_URL = "https://api.novita.ai/openai"
API_KEY = os.getenv("NOVITA_API_KEY")
MODEL_NAME = os.getenv("MODEL_NAME")

# Because Novita not support the responses API so we use the chat completions API instead.
set_default_openai_api("chat_completions")
set_default_openai_client(AsyncOpenAI(base_url=BASE_URL, api_key=API_KEY))
# Disable tracing for this example
# Refer to https://openai.github.io/openai-agents-python/tracing/#external-tracing-processors-list to use the custom spans.
set_tracing_disabled(disabled=True)

@function_tool
def get_weather(city: str) -> str:
    return f"The weather in {city} is sunny."

agent = Agent(
    name="Hello world",
    instructions="You are a helpful agent.",
    tools=[get_weather],
    model=MODEL_NAME,
)

async def main():
    result = await Runner.run(agent, input="What's the weather in Tokyo?")
    print(result.final_output)
    # The weather in Tokyo is sunny.

if __name__ == "__main__":
    asyncio.run(main())
```

Was this page helpful?

YesNo

[Claude Code Integration Guide](https://novita.ai/docs/guides/claude-code) [AnythingLLM](https://novita.ai/docs/guides/anythingllm)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.