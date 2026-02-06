---
url: "https://novita.ai/docs/guides/anythingllm"
title: "AnythingLLM - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/anythingllm#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

AnythingLLM

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [What is AnythingLLM?](https://novita.ai/docs/guides/anythingllm#what-is-anythingllm)
- [Key Features](https://novita.ai/docs/guides/anythingllm#key-features)
- [Prerequisites](https://novita.ai/docs/guides/anythingllm#prerequisites)
- [How to install AnythingLLM on Linux locally?](https://novita.ai/docs/guides/anythingllm#how-to-install-anythingllm-on-linux-locally)
- [Integration Steps](https://novita.ai/docs/guides/anythingllm#integration-steps)
- [1\. Connect Novita AI to AnythingLLM](https://novita.ai/docs/guides/anythingllm#1-connect-novita-ai-to-anythingllm)
- [2\. Enable Web Search](https://novita.ai/docs/guides/anythingllm#2-enable-web-search)
- [3\. Create a Knowledge Base](https://novita.ai/docs/guides/anythingllm#3-create-a-knowledge-base)
- [4\. Try Asking Questions](https://novita.ai/docs/guides/anythingllm#4-try-asking-questions)

With AnythingLLM, you gain seamless access to a comprehensive suite of Novita AI LLM models, including DeepSeek, Llama, Qwen, and more, along with vector database solutions. The integration enables you to effortlessly build and deploy AI-powered applications that handle complex language tasks while ensuring privacy and control.This guide will walk you through installing and integrating AnythingLLM, connecting Novita AI’s models, enabling web search functionality, and setting up a knowledge base for dynamic and intelligent document interactions.

## [​](https://novita.ai/docs/guides/anythingllm\#what-is-anythingllm)  **What is AnythingLLM?**

AnythingLLM is a full-stack application designed to give you the flexibility of using both commercial LLMs and popular open-source LLMs, along with vector database solutions. You can run this application locally or host it remotely, offering a secure, private environment to interact intelligently with your documents.By integrating these resources, AnythingLLM allows you to build a highly functional AI-powered chat interface that handles complex language tasks without compromising privacy or control.

## [​](https://novita.ai/docs/guides/anythingllm\#key-features)  Key Features

- **Thread-like Structure Workspace**: Workspaces act as threads, organizing related documents in a contained space. Each Workspace isolates documents from others, preserving a unique context for each project or topic.
- **Flexibility for Personal and Businesses:** Install AnythingLLM and its full suite of tools as a single application on your personal desktop. And Fine-grained permissioning and access control for organization is also built-in.
- **Security:** AnythingLLM only talks to the services you connect to and can run fully on your machine without internet connectivity.

## [​](https://novita.ai/docs/guides/anythingllm\#prerequisites)  Prerequisites

Before you begin, make sure you have the following:

- Novita AI LLM API Key:
  - Visit [Novita AI’s website](https://novita.ai/) and create an account.
  - After logging in, go to the [Key Management](https://novita.ai/settings/key-management) page to generate your API Key. This key is required to connect Novita AI’s models to AnythingLLM.








    ![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)
- **AnythingLLM Software**:Download and install [AnythingLLM software](https://anythingllm.com/desktop) from the official website.

![AnythingLLM Software](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-1.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=992b561c32a164e75fb8c78d68a56fd8)

- **A Working Knowledge Base** (Optional):If you plan to use your own documents for knowledge augmentation, prepare them for upload.

## [​](https://novita.ai/docs/guides/anythingllm\#how-to-install-anythingllm-on-linux-locally)  How to install AnythingLLM on Linux locally?

For Linux users, you can install AnythingLLM by running this command on terminal:curl -fsSL[https://s3.us-west-1.amazonaws.com/public.useanything.com/latest/installer.sh](https://s3.us-west-1.amazonaws.com/public.useanything.com/latest/installer.sh) \| shThis will download the latest version of AnythingLLM’s AppImage, unpack it, and then supply a symlink to seamlessly run AnythingLLM. This script will unpack the app in `$HOME/AnythingLLMDesktop`.You can start the app at any time by running `./AnythingLLMDesktop/start`. This will boot the app with full logging.

## [​](https://novita.ai/docs/guides/anythingllm\#integration-steps)  Integration Steps

### [​](https://novita.ai/docs/guides/anythingllm\#1-connect-novita-ai-to-anythingllm)  1\. Connect Novita AI to AnythingLLM

To connect Novita AI’s models with **AnythingLLM**, follow these steps:

- In the application, click on the **🔧 Settings** icon located in the lower-left corner.








![Open AnythingLLM setting](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-2.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=7083c507ec45a0d304b560bd3b6bbea0)

- Go to the **LLM API Providers** section, **and then** select **Novita AI** from the dropdown menu.








![LLM API Providers](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-7.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=88ffbf9b190c1f719082c0726eedc334)

- In the **Novita API Key** field, **paste your Novita AI API Key** (the one you generated earlier).
- Click **Save** to complete the integration.

Now, AnythingLLM will have access to all Novita AI’s models, allowing you to use them in your applications.

### [​](https://novita.ai/docs/guides/anythingllm\#2-enable-web-search)  2\. Enable Web Search

AnythingLLM allows you to search the web in real-time by enabling web search capabilities. Follow these steps to set up web search functionality:

- **Navigate to Agent Skills**: In the settings or main interface, locate the **Agent Skills** section.
- **Enable Scrape Websites and Web Search**: Toggle the option to turn on both **Scrape Websites** and **Web Search** capabilities.
- **Choose Web Search Providers**: You can choose from the following recommended search providers:

  - **DuckDuckGo**: A free and privacy-focused web search using DuckDuckGo’s HTML interface.
  - **Google Search Engine**: Powered by a custom Google Search Engine. It’s free for up to 100 queries per day.
  - **Bing Search**: Powered by the Bing Search API. It’s free for up to 1000 queries per month.

![Enable Web Search](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-3.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=5e52036a4ef5b07ed2e80d281a41c2b9)

### [​](https://novita.ai/docs/guides/anythingllm\#3-create-a-knowledge-base)  3\. Create a Knowledge Base

Next, you’ll want to build a knowledge base for your assistant to use. Follow these steps:

- Click the Upload icon of the Workspace.








![Click the Upload icon of the Workspace](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-4.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=69932f5292d8284e93c63849372eb4a6)

- Upload local documents or website links.
- Select the file(s) or webpage you wish to upload to the workspace.
- Once the file is selected, click **Move to Workspace** to transfer the document(s) to the AnythingLLM workspace.
- Save your files and click **Save and Embed** to finalize the process.
- Your knowledge base is now set up and ready for use.








![Save and embed in AnythingLLM](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-5.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=6d488675b9a819252300f840a60783f1)


### [​](https://novita.ai/docs/guides/anythingllm\#4-try-asking-questions)  4\. Try Asking Questions

In AnythingLLM, ask questions using **@agent**.The model will respond based on your documents and search results, with citations or references from the files.

![Try Asking Questions](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-6.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=ce01e8db95c4e668baa6888446a522b2)

Was this page helpful?

YesNo

[OpenAI Agents SDK](https://novita.ai/docs/guides/openai-agents-sdk) [Dify](https://novita.ai/docs/guides/dify)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)

![AnythingLLM Software](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-1.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=82929cb7984d5fd57bb4eccefc4a284f)

![Open AnythingLLM setting](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-2.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=b7322d6433184155cac659605b9d4ae8)

![LLM API Providers](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-7.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=13adca57c6f85df4398f7da8966b95df)

![Enable Web Search](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-3.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=e13b78d0e80f119ef27e619f4d0ea66a)

![Click the Upload icon of the Workspace](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-4.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=d8de0f1da4ad9e168c86e55dba710052)

![Save and embed in AnythingLLM](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-5.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=423105128e3814083dfaaa9130879b14)

![Try Asking Questions](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/anythingllm-6.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=bc72c1e2cd7854587e922820e4268223)