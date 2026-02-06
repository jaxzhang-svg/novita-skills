---
url: "https://novita.ai/docs/guides/portkey"
title: "Portkey - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/portkey#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Portkey

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Set Up Portkey AI Gateway](https://novita.ai/docs/guides/portkey#how-to-set-up-portkey-ai-gateway)
- [Step 1: Setup your AI Gateway](https://novita.ai/docs/guides/portkey#step-1-setup-your-ai-gateway)
- [Step 2: Make your first request](https://novita.ai/docs/guides/portkey#step-2-make-your-first-request)
- [Step 3: Routing & Guardrails](https://novita.ai/docs/guides/portkey#step-3-routing-%26-guardrails)
- [How to Integrate Novita AI API with Portkey](https://novita.ai/docs/guides/portkey#how-to-integrate-novita-ai-api-with-portkey)
- [Step 1: Install the Portkey SDK](https://novita.ai/docs/guides/portkey#step-1-install-the-portkey-sdk)
- [Step 2: Initialize Portkey with the Virtual Key](https://novita.ai/docs/guides/portkey#step-2-initialize-portkey-with-the-virtual-key)
- [Step 3: Invoke Chat Completions with Novita AI](https://novita.ai/docs/guides/portkey#step-3-invoke-chat-completions-with-novita-ai)

Portkey AI Gateway transforms how developers work with AI models like Novita AI, providing a unified interface for seamless access to multiple language models with fast, secure, and reliable routing. This integration simplifies AI development and improves application performance.This guide will walk you through setting up Portkey AI Gateway and then integrating Novita AI API with Portkey.

## [​](https://novita.ai/docs/guides/portkey\#how-to-set-up-portkey-ai-gateway)  How to Set Up Portkey AI Gateway

Setting up Portkey AI Gateway is simple and efficient, requiring just three key steps: configuring the gateway, sending your first request, and optimizing routing and guardrails for seamless performance.

### [​](https://novita.ai/docs/guides/portkey\#step-1-setup-your-ai-gateway)  Step 1: Setup your AI Gateway

To run the gateway locally, ensure Node.js and npm are installed on your system. Once ready, execute the following command:

Copy

```
npx @portkey-ai/gateway
```

After the gateway starts, two key URLs will be displayed:

- The Gateway: `http://localhost:8787/v1`
- The Gateway Console: `http://localhost:8787/public/`

### [​](https://novita.ai/docs/guides/portkey\#step-2-make-your-first-request)  Step 2: Make your first request

Begin by installing the Portkey AI Python library:

Copy

```
pip install -qU portkey-ai
```

Next, execute the following Python code to send your first request:

Copy

```
from portkey_ai import Portkey

# OpenAI compatible client
client = Portkey(
    provider="openai", # or 'anthropic', 'bedrock', 'groq', etc
    Authorization="sk-***" # the provider API key
)

# Make a request through your AI Gateway
client.chat.completions.create(
    messages=[{"role": "user", "content": "What's the weather like?"}],
    model="gpt-4o-mini"
)
```

Effortlessly monitor all your local logs in one centralized location using the Gateway Console at: `http://localhost:8787/public/`.

### [​](https://novita.ai/docs/guides/portkey\#step-3-routing-&-guardrails)  Step 3: Routing & Guardrails

Portkey AI Gateway enables you to configure routing rules, add reliability features, and enforce guardrails. Below is an example configuration:

Copy

```
config = {
  "retry": {"attempts": 5},

  "output_guardrails": [{\
    "default.contains": {"operator": "none", "words": ["Apple"]},\
    "deny": True\
  }]
}

# Attach the config to the client
client = client.with_options(config=config)

client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Reply randomly with Apple or Bat"}]
)

# In this example, the guardrail denies all replies containing "Apple", so the response would always be "Bat". The retry configuration would attempt the request up to 5 times before giving up.
```

![](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/portkey-gateway.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=f871cd472dd92dfd665afc2a6889f4c8)

## [​](https://novita.ai/docs/guides/portkey\#how-to-integrate-novita-ai-api-with-portkey)  How to Integrate Novita AI API with Portkey

To access the Novita AI API via the Portkey AI Gateway, follow these steps:

### [​](https://novita.ai/docs/guides/portkey\#step-1-install-the-portkey-sdk)  Step 1: Install the Portkey SDK

Integrate the Portkey SDK into your application to seamlessly interact with Novita AI’s API through Portkey’s gateway.**Node.JS**

Copy

```
npm install --save portkey-ai
```

**Python**

Copy

```
pip install portkey-ai
```

### [​](https://novita.ai/docs/guides/portkey\#step-2-initialize-portkey-with-the-virtual-key)  Step 2: Initialize Portkey with the Virtual Key

To integrate Novita AI with Portkey, retrieve your LLM API key from [Novita AI](https://novita.ai/settings/key-management) and add it to Portkey to generate the virtual key.**Node.JS SDK**

Copy

```
import Portkey from 'portkey-ai'

const portkey = new Portkey({
  apiKey: "PORTKEY_API_KEY",  // Replace with your Portkey API key
  virtualKey: "VIRTUAL_KEY"   // Replace with your virtual key for Novita AI
})
```

**Python SDK**

Copy

```
from portkey_ai import Portkey

portkey = Portkey(
    api_key="PORTKEY_API_KEY",  # Replace with your Portkey API key
    virtual_key="VIRTUAL_KEY"   # Replace with your virtual key for Novita AI
)
```

### [​](https://novita.ai/docs/guides/portkey\#step-3-invoke-chat-completions-with-novita-ai)  Step 3: Invoke Chat Completions with Novita AI

Utilize the Portkey instance to send requests to Novita AI. If necessary, you can override the virtual key directly within the API call.**Node.JS SDK**

Copy

```
const chatCompletion = await portkey.chat.completions.create({
  messages: [{ role: 'user', content: 'Say this is a test' }],
  model: 'Nous-Hermes-2-Mixtral-8x7B-DPO'
});

console.log(chatCompletion.choices);
```

**Python SDK**

Copy

```
completion = portkey.chat.completions.create(
    messages= [{ "role": 'user', "content": 'Say this is a test' }],
    model= 'reka-core'
)

print(completion)
```

Was this page helpful?

YesNo

[Verba](https://novita.ai/docs/guides/verba) [DocsGPT](https://novita.ai/docs/guides/docsgpt)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/portkey-gateway.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=97201b65fc2aa7918410dcef53461d10)