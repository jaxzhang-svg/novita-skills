---
url: "https://novita.ai/docs/guides/huggingface"
title: "Hugging Face - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/huggingface#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Hugging Face

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Using Novita AI on Hugging Face in the Website UI](https://novita.ai/docs/guides/huggingface#using-novita-ai-on-hugging-face-in-the-website-ui)
- [Step 1: Configure API Keys](https://novita.ai/docs/guides/huggingface#step-1-configure-api-keys)
- [Step 2: Choose Inference API Modes](https://novita.ai/docs/guides/huggingface#step-2-choose-inference-api-modes)
- [Step 3: Explore Compatible Providers on Model Pages](https://novita.ai/docs/guides/huggingface#step-3-explore-compatible-providers-on-model-pages)
- [Using Huggingface\_hub from Python by the Client SDKs](https://novita.ai/docs/guides/huggingface#using-huggingface-hub-from-python-by-the-client-sdks)
- [Step 1: Install Huggingface\_hub](https://novita.ai/docs/guides/huggingface#step-1-install-huggingface-hub)
- [Step 2: Call model API in Python](https://novita.ai/docs/guides/huggingface#step-2-call-model-api-in-python)
- [Using Huggingface\_hub from JS by the Client SDKs](https://novita.ai/docs/guides/huggingface#using-huggingface-hub-from-js-by-the-client-sdks)

Novita AI’s integration with Hugging Face Platform enables advanced serverless inference capabilities. This provides direct access to Hub model pages through optimized infrastructure, offering developers a streamlined setup experience. With full support for Hugging Face’s JavaScript and Python SDKs, Novita AI simplifies model deployment and scaling without infrastructure management.Our comprehensive guide walks you through Novita AI implementation on Hugging Face, covering both web interface and SDK integration methods.

## [​](https://novita.ai/docs/guides/huggingface\#using-novita-ai-on-hugging-face-in-the-website-ui)  **Using Novita AI on Hugging Face in the Website UI**

### [​](https://novita.ai/docs/guides/huggingface\#step-1-configure-api-keys)  **Step 1: Configure API Keys**

- Access your account settings dashboard to configure your API keys.
- Input your Novita AI authentication credentials into the Hugging Face platform.








![ Configure API Keys in Hugging Face](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/ConfigureAPIKeysinHuggingFace.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=7f70e8903dfb2bca046ca9d81271e930)


### [​](https://novita.ai/docs/guides/huggingface\#step-2-choose-inference-api-modes)  **Step 2: Choose Inference API Modes**

- Custom Key Mode: Calls are sent directly to the inference provider, utilizing your own API key.
- HF-Routed Mode: In this mode, no provider token is required. Charges are applied to your Hugging Face account instead of the provider’s account.








![Choose Inference API Modes](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/ChooseInferenceAPIModes.png?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=b14ffdd53826ab3276300dbf452c2a13)


### [​](https://novita.ai/docs/guides/huggingface\#step-3-explore-compatible-providers-on-model-pages)  **Step 3: Explore Compatible Providers on Model Pages**

- Model pages display third-party inference providers compatible with the selected model (the ones that are compatible with the current model, sorted by user preference).








![ Explore Compatible Providers on Model Pages in Hugging Face](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/ExploreCompatibleProvidersonModelPagesinHuggingFace.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=c4b1d98633c874bbb8133c64890b7eff)


## [​](https://novita.ai/docs/guides/huggingface\#using-huggingface-hub-from-python-by-the-client-sdks)  **Using Huggingface\_hub from Python by the Client SDKs**

### [​](https://novita.ai/docs/guides/huggingface\#step-1-install-huggingface-hub)  **Step 1: Install** [**Huggingface\_hub**](https://github.com/huggingface/huggingface_hub)

Copy

```
pip install huggingface_hub
```

### [​](https://novita.ai/docs/guides/huggingface\#step-2-call-model-api-in-python)  **Step 2: Call model API in Python**

Copy

```
from huggingface_hub import InferenceClient

client = InferenceClient(
    provider="novita",
    api_key="xxxxxxxxxxxxxxxxxxxxxxxx", # optional, required from 2nd calling, get from https://novita.ai/settings/key-management
)

# an example question
messages = [\
    dict(\
        role="user",\
        content='Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?',\
    ),\
]
completion = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-R1",
    messages=messages,
    max_tokens=512,
)

print(completion.choices[0].message)
```

## [​](https://novita.ai/docs/guides/huggingface\#using-huggingface-hub-from-js-by-the-client-sdks)  **Using Huggingface\_hub from JS by the Client SDKs**

Copy

```
import { HfInference } from "@huggingface/inference";

const client = new HfInference("xxxxxxxxxxxxxxxxxxxxxxxx");

const chatCompletion = await client.chatCompletion({
    model: "deepseek-ai/DeepSeek-R1",
    messages: [\
        {\
            role: "user",\
            content: "What is the capital of France?"\
        }\
    ],
    provider: "novita",
    max_tokens: 500
});

console.log(chatCompletion.choices[0].message)
```

Was this page helpful?

YesNo

[Helicone](https://novita.ai/docs/guides/helicone) [Langflow](https://novita.ai/docs/guides/langflow)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![ Configure API Keys in Hugging Face](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/ConfigureAPIKeysinHuggingFace.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=408320182e99f200ee8e20b280e8fee9)

![Choose Inference API Modes](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/ChooseInferenceAPIModes.png?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=a6425c8b9b0d36f56417a383e830b29a)

![ Explore Compatible Providers on Model Pages in Hugging Face](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/ExploreCompatibleProvidersonModelPagesinHuggingFace.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=92b801e10c31dadefa767d772a2d2838)