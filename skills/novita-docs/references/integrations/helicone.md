---
url: "https://novita.ai/docs/guides/helicone"
title: "Helicone - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/helicone#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Helicone

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Setting Up Helicone AI Gateway](https://novita.ai/docs/guides/helicone#setting-up-helicone-ai-gateway)
- [Step1: Create an Account](https://novita.ai/docs/guides/helicone#step1-create-an-account)
- [Step 2: Generate an API Key](https://novita.ai/docs/guides/helicone#step-2-generate-an-api-key)
- [Step 3: Pick Your Preferred Integration Method](https://novita.ai/docs/guides/helicone#step-3-pick-your-preferred-integration-method)
- [Step 4: Send Your First Request](https://novita.ai/docs/guides/helicone#step-4-send-your-first-request)
- [Obtaining Novita AI API Key](https://novita.ai/docs/guides/helicone#obtaining-novita-ai-api-key)
- [Step 1: Go to Novita AI and Log in](https://novita.ai/docs/guides/helicone#step-1-go-to-novita-ai-and-log-in)
- [Step 2: Manage Novita AI LLM API Key](https://novita.ai/docs/guides/helicone#step-2-manage-novita-ai-llm-api-key)
- [How to Integrate Novita AI API with Helicone](https://novita.ai/docs/guides/helicone#how-to-integrate-novita-ai-api-with-helicone)
- [Step 1: Log into your Novita AI Account and Helicone Account](https://novita.ai/docs/guides/helicone#step-1-log-into-your-novita-ai-account-and-helicone-account)
- [Step 2: Set HELICONE\_API\_KEY and NOVITA\_API\_KEY as Environment Variables](https://novita.ai/docs/guides/helicone#step-2-set-helicone-api-key-and-novita-api-key-as-environment-variables)
- [Step 3: Modify the Base URL and Add Auth Headers](https://novita.ai/docs/guides/helicone#step-3-modify-the-base-url-and-add-auth-headers)

Novita AI’s integration with Helicone’s observability platform marks a significant advancement in LLM development. This combination provides developers with a streamlined inference platform and comprehensive monitoring capabilities, transforming how teams work with Large Language Models.By leveraging Helicone’s monitoring tools through Novita AI’s infrastructure, developers gain access to robust analytics and performance insights. This guide will walk you through setting up Helicone AI Gateway, obtaining Novita AI API Key, and integrating Novita AI API with Helicone.

## [​](https://novita.ai/docs/guides/helicone\#setting-up-helicone-ai-gateway)  **Setting Up Helicone AI Gateway**

Getting started with [Helicone AI Gateway](https://www.helicone.ai/) only requires four steps: creating an account, generating an API key, picking your preferred integration method, and sending your first request.

### [​](https://novita.ai/docs/guides/helicone\#step1-create-an-account)  **Step1: Create an Account**

- After account creation, you can move forward with the setup process.

### [​](https://novita.ai/docs/guides/helicone\#step-2-generate-an-api-key)  **Step 2: Generate an API Key**

- Go to Settings: Locate and select your organization name in the upper-left corner, then select `Settings` from the dropdown.








![Step 2- Generate an API Key-Go to Settings-page](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/Step2-GenerateanAPIKey-GotoSettings-page.webp?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=3853b03151053c8597dc235859a43c25)

- Select the API Key Tab.








![Step 2- Generate an API Key-Select the API Key Tab-page](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/Step2-GenerateanAPIKey-SelecttheAPIKeyTab-page.webp?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=d85e2f0e1ab33ee283b67effdce307ec)

- Generate New Key: Click on `Generate new key`. During the API key creation process, you can enable `read` and `write` permissions. Write keys enable access to Helicone through our proxy service, feedback or any other Helicone service when calling  `POST` or using our gateway.








![Step 2- Generate an API Key-Select the API Key Tab-page](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/Step2-GenerateanAPIKey-GenerateNewKey-page.webp?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=a131461ee71d78f150e41dd4e95c9244)


### [​](https://novita.ai/docs/guides/helicone\#step-3-pick-your-preferred-integration-method)  **Step 3: Pick Your Preferred Integration Method**

- Choose your provider from the options below to view specific instructions.

### [​](https://novita.ai/docs/guides/helicone\#step-4-send-your-first-request)  **Step 4: Send Your First Request**

- Upon receiving your requests, you will see them in the `Requests` tab.
- Your new request will be immediately visible on the `Dashboard`.

## [​](https://novita.ai/docs/guides/helicone\#obtaining-novita-ai-api-key)  **Obtaining Novita AI API Key**

To obtain your [Novita AI API key](https://novita.ai/), simply log into your account, navigate to the LLM API key management section, and add the necessary credits to begin.

### [​](https://novita.ai/docs/guides/helicone\#step-1-go-to-novita-ai-and-log-in)  **Step 1: Go to Novita AI and Log in**

- Novita AI offers multiple login options: use your Google or GitHub credentials for instant account creation, or register directly with your email address.








![](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/Step1-GotoNovitaAIandLog-in-page.webp?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=57855f095783ffc6f7c43914f6eb7996)


### [​](https://novita.ai/docs/guides/helicone\#step-2-manage-novita-ai-llm-api-key)  **Step 2: Manage Novita AI LLM API Key**

Novita AI ensures secure API access by using Bearer authentication, where your API key is included in the header format “Authorization: Bearer {{API Key}}”.

- Your first login generates a default key automatically - access all keys through the “Key Management” section in settings.
- Additional keys can be created using the “+ Add New Key” function.








![](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/Step2-KeyManagementinNovitaAI.webp?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=f9e6a61572b4a1d3c60cd509e08ca16a)


## [​](https://novita.ai/docs/guides/helicone\#how-to-integrate-novita-ai-api-with-helicone)  **How to Integrate Novita AI API with Helicone**

The Novita AI-Helicone integration requires three simple steps: accessing both platform accounts, configuring your API keys as environment variables (HELICONE\_API\_KEY and NOVITA\_API\_KEY), and updating the base URL with proper authentication headers.

### [​](https://novita.ai/docs/guides/helicone\#step-1-log-into-your-novita-ai-account-and-helicone-account)  **Step 1: Log into your Novita AI Account and Helicone Account**

- Access your [Novita AI](https://novita.ai/) account or create one, then generate your API key directly from the dashboard.
- Sign in to [Helicone](https://www.helicone.ai/) (or create a new account) to obtain your API key.

### [​](https://novita.ai/docs/guides/helicone\#step-2-set-helicone-api-key-and-novita-api-key-as-environment-variables)  **Step 2: Set HELICONE\_API\_KEY and NOVITA\_API\_KEY as Environment Variables**

Copy

```
$env:HELICONE_API_KEY="<your API key>"
$env:NOVITA_API_KEY="<your API key>"
```

### [​](https://novita.ai/docs/guides/helicone\#step-3-modify-the-base-url-and-add-auth-headers)  **Step 3: Modify the Base URL and Add Auth Headers**

- Update the following Novita AI URL with the Helicone Gateway URL.

[`https://api.novita.ai`](https://api.novita.ai/) -> [`https://novita.helicone.ai`](https://novita.helicone.ai/)

- Then add the following headers for authentication:

Copy

```
* curl -H "Authorization: Bearer <your API key>"
```

**Example**

- Now you can use this simple fetch call to interact with any Novita AI model.
- Copy











```
curl \
  --header 'Authorization: Bearer <NOVITA_API_KEY>' \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "deepseek/deepseek-r1",
    "messages": [\
      {\
        "role": "user",\
        "content": "What language is mostly spoken in Singapore?"\
      }\
    ]
}' \
  --url https://novita.helicone.ai/v3/chat/completions
```


Was this page helpful?

YesNo

[Dify](https://novita.ai/docs/guides/dify) [Hugging Face](https://novita.ai/docs/guides/huggingface)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.