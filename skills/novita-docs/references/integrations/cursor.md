---
url: "https://novita.ai/docs/guides/cursor"
title: "Cursor - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/cursor#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Cursor

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [What is Cursor?](https://novita.ai/docs/guides/cursor#what-is-cursor)
- [Prerequisites](https://novita.ai/docs/guides/cursor#prerequisites)
- [Novita AI LLM API Key](https://novita.ai/docs/guides/cursor#novita-ai-llm-api-key)
- [Download the Cursor App](https://novita.ai/docs/guides/cursor#download-the-cursor-app)
- [Integration Steps](https://novita.ai/docs/guides/cursor#integration-steps)
- [Connect Novita AI to Cursor](https://novita.ai/docs/guides/cursor#connect-novita-ai-to-cursor)
- [Start a Chat with AI in Cursor](https://novita.ai/docs/guides/cursor#start-a-chat-with-ai-in-cursor)
- [Notes on Cursor Features](https://novita.ai/docs/guides/cursor#notes-on-cursor-features)

This guide will walk you through the steps needed to integrate Novita AI’s models with Cursor. Using your own API keys, you can leverage Novita AI’s large language models (LLMs) for custom AI messages in Cursor. This integration ensures that you can run AI-powered conversations and interactions while keeping full control over your API usage and cost.

## [​](https://novita.ai/docs/guides/cursor\#what-is-cursor)  What is Cursor?

Cursor is a code editor built for programming with AI. It integrates with multiple large language models (LLMs) and allows you to input your own API keys, giving you full control over AI usage and costs. Whether you’re coding or interacting with AI, Cursor streamlines the experience with features like smart autocomplete, auto-suggestions, and multi-model support, all within your development environment.

## [​](https://novita.ai/docs/guides/cursor\#prerequisites)  Prerequisites

Before you begin the integration, ensure you have the following:

### [​](https://novita.ai/docs/guides/cursor\#novita-ai-llm-api-key)  **Novita AI LLM API Key**

- **Create an account**: Visit [Novita AI’s website](https://novita.ai/) and sign up for an account.
- **Generate your API Key**: After logging in, navigate to the [Key Management](https://novita.ai/settings/key-management) page to generate your API key. This key is essential to connect Novita AI’s models to Cursor.








![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)

- **Select a Model Name**: You’ll need to copy the model name you want to use from Novita AI’s [Model Library](https://novita.ai/models/llm/deepseek-deepseek-r1). Some available models include:  - `deepseek/deepseek-r1`
  - `deepseek/deepseek-v3`
  - `deepseek/deepseek-r1-distill-llama-70b`
  - `deepseek/deepseek-r1-distill-llama-8b`
  - `deepseek/deepseek-r1-distill-qwen-32b`
  - `deepseek/deepseek-r1-distill-qwen-14b`








    ![](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/cursor-1.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=416d93d12a1dbd67f7dd1151a07ae061)

### [​](https://novita.ai/docs/guides/cursor\#download-the-cursor-app)  **Download the Cursor App**

- Go to the official [Cursor website](https://cursor.com/) and download the Cursor app.
- Download Cursor App from [official website](https://cursor.com/)

## [​](https://novita.ai/docs/guides/cursor\#integration-steps)  Integration Steps

### [​](https://novita.ai/docs/guides/cursor\#connect-novita-ai-to-cursor)  Connect Novita AI to Cursor

- Open the **Cursor App** and go to **Settings**.
- Navigate to the **Models** section.
- Uncheck all the other models that are pre-configured in Cursor.
- In the **Model Name** field, paste the model name you copied from the **Novita AI Model Library** (e.g., `deepseek/deepseek-r1`).
- Enter your **Novita AI API key** in the designated field.
- Click the **Verify** button to ensure your API key is correct. Once validated, the API key will be activated.
- In the **Open AI Base URL** field, override the default URL with the Novita AI endpoint: [`https://api.novita.ai/openai`](https://api.novita.ai/openai)

By following these steps, you’ll link your Novita AI API key with the Cursor app, enabling you to use Novita AI’s models through CursorStart a Chat with AI in Cursor.

### [​](https://novita.ai/docs/guides/cursor\#start-a-chat-with-ai-in-cursor)  Start a Chat with AI in Cursor

To open the **Chat** interface, either:

- Click on **Toggle AI Pane**, or
- Press the keyboard shortcut **Ctrl + Alt + B** to start a new chat.

You can now send prompts and interact with the models you’ve added.

![Start a Chat with AI in Cursor](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/cursor-3.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=a641d67842cf591c95734b2cca08f05f)

## [​](https://novita.ai/docs/guides/cursor\#notes-on-cursor-features)  Notes on Cursor Features

- **Tab Completion, Apply from Chat, and Composer**: These features require specialized models and will not work with custom API keys. If you wish to use these specific features, consider switching to the default models provided by Cursor.

Was this page helpful?

YesNo

[Continue](https://novita.ai/docs/guides/continue) [LangChain](https://novita.ai/docs/guides/langchain)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)

![](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/cursor-1.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=7b0aa20b977a2c425dfeee97d036adcc)

![Start a Chat with AI in Cursor](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/cursor-3.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=e65805409656454d0c43242885009053)