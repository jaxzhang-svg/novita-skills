---
url: "https://novita.ai/docs/guides/litellm"
title: "LiteLLM - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/litellm#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

LiteLLM

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Integrate Novita AI with LiteLLM](https://novita.ai/docs/guides/litellm#how-to-integrate-novita-ai-with-litellm)
- [Step 1: Install LiteLLM](https://novita.ai/docs/guides/litellm#step-1-install-litellm)
- [Step 2: Set Up Your API Credentials](https://novita.ai/docs/guides/litellm#step-2-set-up-your-api-credentials)
- [Step 3: Structure Your Basic API Call](https://novita.ai/docs/guides/litellm#step-3-structure-your-basic-api-call)
- [Step 4: Implement Streaming for Better User Experience](https://novita.ai/docs/guides/litellm#step-4-implement-streaming-for-better-user-experience)

LiteLLM is an open-source Python library and proxy server that provides access, spend tracking, and fallbacks to over 100 LLMs through a unified interface in the OpenAI format. By leveraging Novita AI’s cutting-edge models, the integration with LiteLLM empowers your AI applications with seamless model switching, dependable fallbacks, and intelligent request routing—all through a standardized completion API that ensures compatibility across multiple providers.This guide will show you how to quickly get started with integrating Novita AI and LiteLLM, enabling you to set up this powerful combination and streamline your workflow with ease.

## [​](https://novita.ai/docs/guides/litellm\#how-to-integrate-novita-ai-with-litellm)  **How to Integrate Novita AI with LiteLLM**

### [​](https://novita.ai/docs/guides/litellm\#step-1-install-litellm)  Step 1: Install LiteLLM

- Install the LiteLLM library using pip to create a unified interface for working with different language models.

Copy

```
pip install litellm
```

### [​](https://novita.ai/docs/guides/litellm\#step-2-set-up-your-api-credentials)  Step 2: Set Up Your API Credentials

- Log in to [the key management page](https://novita.ai/settings/key-management) in Novita AI and click `Add New Key`to generate your API key.![Visitthekeymanagementpageandselect Add New Keytogenerateyour AP Ikey Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-VisitthekeymanagementpageandselectAddNewKeytogenerateyourAPIkey..png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=ba76fbe63ca9f6246b5b7254ced54252)

### [​](https://novita.ai/docs/guides/litellm\#step-3-structure-your-basic-api-call)  Step 3: Structure Your Basic API Call

- Create a completion request to Novita AI’s models through LiteLLM’s standardized interface.

Copy

```
from litellm import completion
import os

## set ENV variables. Visit https://novita.ai/settings/key-management to get your API key
os.environ["NOVITA_API_KEY"] = "novita-api-key"

response = completion(
  model="novita/deepseek/deepseek-r1",
  messages=[{ "content": "Hello, how are you?","role": "user"}]
)
```

### [​](https://novita.ai/docs/guides/litellm\#step-4-implement-streaming-for-better-user-experience)  Step 4: Implement Streaming for Better User Experience

- Enable streaming mode for more interactive applications or when handling longer responses.

Copy

```
from litellm import completion
import os

## set ENV variables. Visit https://novita.ai/settings/key-management to get your API key
os.environ["NOVITA_API_KEY"] = "novita_api_key"

response = completion(
  model="novita/deepseek/deepseek-r1",
  messages = [{ "content": "Hello, how are you?","role": "user"}],
  stream=True,
)
```

Was this page helpful?

YesNo

[OWL](https://novita.ai/docs/guides/owl) [ChatBox](https://novita.ai/docs/guides/chatbox)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Visitthekeymanagementpageandselect Add New Keytogenerateyour AP Ikey Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-VisitthekeymanagementpageandselectAddNewKeytogenerateyourAPIkey..png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=e02f65d93a4c511d5e27571d6e9b68c6)