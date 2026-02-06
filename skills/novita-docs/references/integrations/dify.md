---
url: "https://novita.ai/docs/guides/dify"
title: "Dify - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/dify#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Dify

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [What is Dify?](https://novita.ai/docs/guides/dify#what-is-dify)
- [Key Features of Dify:](https://novita.ai/docs/guides/dify#key-features-of-dify)
- [Prerequisites](https://novita.ai/docs/guides/dify#prerequisites)
- [Integration Steps](https://novita.ai/docs/guides/dify#integration-steps)
- [1\. Connect Novita AI to Dify](https://novita.ai/docs/guides/dify#1-connect-novita-ai-to-dify)
- [2\. Create a DeepSeek AI Application](https://novita.ai/docs/guides/dify#2-create-a-deepseek-ai-application)
- [3\. Enable Knowledge Base for Enhanced Text Analysis](https://novita.ai/docs/guides/dify#3-enable-knowledge-base-for-enhanced-text-analysis)
- [Step 1: Create a Knowledge Base](https://novita.ai/docs/guides/dify#step-1-create-a-knowledge-base)
- [Step 2: Integrate the Knowledge Base into Your AI App](https://novita.ai/docs/guides/dify#step-2-integrate-the-knowledge-base-into-your-ai-app)
- [Step 3: Share Your AI Application](https://novita.ai/docs/guides/dify#step-3-share-your-ai-application)
- [4\. Enhance AI Capabilities with Workflow-based Applications](https://novita.ai/docs/guides/dify#4-enhance-ai-capabilities-with-workflow-based-applications)

With the Novita AI & Dify integration, you gain seamless access to a comprehensive suite of Novita AI LLM models, including DeepSeek, Llama, Qwen, and more, enabling you to effortlessly build and deploy advanced AI applications tailored to your needs.This guide will walk you through integrating Novita AI’s DeepSeek R1 model with the Dify platform, enabling you to create AI applications with advanced multi-turn reasoning capabilities. DeepSeek ensures your AI applications understand the context and can hold natural, dynamic conversations, making interactions feel human-like.

## [​](https://novita.ai/docs/guides/dify\#what-is-dify)  What is Dify?

**Dify** is an open-source platform that simplifies the development of generative AI applications. Whether you’re building a chatbot, knowledge assistant, or other AI-powered tools, Dify makes it easy to integrate advanced language models like **Novita AI’s DeepSeek** and deploy them quickly, with minimal coding.

### [​](https://novita.ai/docs/guides/dify\#key-features-of-dify)  Key Features of Dify:

- **Visual Development**: Dify’s drag-and-drop interface allows you to quickly create and deploy applications without extensive coding, reducing development time.
- **Knowledge Base Augmentation**: Enhance AI responses using **Retrieval-Augmented Generation (RAG)**. This feature connects your AI to internal documents or specialized data for accurate, contextual, and informative answers.
- **Workflow Expansion**: Integrate sophisticated logic into your AI apps with **functional nodes**. You can also connect third-party platforms for additional functionality.
- **Data Insights**: Track important performance metrics such as conversations, engagement, and response quality. Dify also integrates with specialized analytics platforms to monitor and improve AI performance.

## [​](https://novita.ai/docs/guides/dify\#prerequisites)  Prerequisites

Before you begin, make sure you have:

- **Novita AI LLM API Key**:

  - Visit [Novita AI’s website](https://novita.ai/) and create an account.
  - After logging in, go to the [**Key Management**](https://novita.ai/settings/key-management) page to generate your **API Key**. This key is required to connect Novita AI’s models to Dify.








    ![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)
- **Dify Account**:

  - Sign up for a Dify account at [Dify.ai](https://dify.ai/) to start building AI applications.

## [​](https://novita.ai/docs/guides/dify\#integration-steps)  Integration Steps

### [​](https://novita.ai/docs/guides/dify\#1-connect-novita-ai-to-dify)  1\. Connect Novita AI to Dify

To connect Novita AI’s models with Dify:

- Log in to your Dify account.
- Click on your profile icon or name in the top-right corner and select **Settings**.
- In the **Model Providers** section, find **Novita AI** in the list.
- Paste your **Novita AI API Key** into the provided field and click **Save**.

With this integration, you’ll now have access to **DeepSeek R1** and other Novita AI models directly in Dify.

### [​](https://novita.ai/docs/guides/dify\#2-create-a-deepseek-ai-application)  2\. Create a DeepSeek AI Application

Once the integration is complete, you can create an application powered by DeepSeek R1:

- From the Dify homepage, click **Create Blank App** in the left sidebar.
- Choose **Chatbot** as the application type.








![Choose Chatbot as the application type](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-2.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=7b01f66617f76fd6689c637adb1badbc)

- Give your app a name (e.g., “DeepSeek R1 Bot”) and click **Create**.








![Give your app a name and click Create.](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-3.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=1313a6732656a7c2dfde30517eaa0f7b)

- From the **Model** dropdown, select **Novita AI DeepSeek R1**.








![From the Model dropdown, select Novita AI DeepSeek R1](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-4.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=920ed00a474834c22d65f3afc859103c)


### [​](https://novita.ai/docs/guides/dify\#3-enable-knowledge-base-for-enhanced-text-analysis)  3\. Enable Knowledge Base for Enhanced Text Analysis

To improve your AI’s response accuracy, augment it with a **knowledge base**. Using **Retrieval-Augmented Generation (RAG)**, your AI will be able to access documents and generate more contextually relevant responses.

#### [​](https://novita.ai/docs/guides/dify\#step-1-create-a-knowledge-base)  Step 1: Create a Knowledge Base

- In Dify, go to the **Knowledge Base** section and click **Create Knowledage**.








![go to the Knowledge Base section and click Create Knowledage.](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-5.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=612f1e003205d791dfba362a8ddc97e0)

- Upload documents (e.g., guides, FAQs, manuals) that provide relevant information for your AI to use.








![Upload documents ](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-6.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=58ad4121af615a12515b90d4adc82a50)

- Use **Parent-Child Segmentation Mode** to maintain document hierarchy and context, ensuring DeepSeek processes the content correctly and understands relationships between sections.








![Use Parent-Child Segmentation Mode ](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-7.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=173f12e8bf9a95f34ddbea37e0b2dc4e)


#### [​](https://novita.ai/docs/guides/dify\#step-2-integrate-the-knowledge-base-into-your-ai-app)  Step 2: Integrate the Knowledge Base into Your AI App

- In your chatbot’s **Context Settings**, click the option to **Add Knowledge Base**.








![Add Knowledge Base](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-8.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=e4aa8520e0536b0cd3cf78754ad5355f)

- Choose the documents you uploaded and integrate them into your app’s context to improve its responses.

#### [​](https://novita.ai/docs/guides/dify\#step-3-share-your-ai-application)  Step 3: Share Your AI Application

Once your AI app is ready, you can share or embed it on external platforms:

![Share Your AI Application](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-9.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=fab0671f7c6ff329c12a15acdd20ee97)

- **Public Link**: Generate a public link for others to access your AI application.
- **Embed on Websites**: Embed your app directly onto your website using Dify’s provided embed code.

### [​](https://novita.ai/docs/guides/dify\#4-enhance-ai-capabilities-with-workflow-based-applications)  4\. Enhance AI Capabilities with Workflow-based Applications

If you need more than just a chatbot, Dify supports **workflow-based applications**. This allows you to add custom business logic and extend your AI’s capabilities by using functional nodes.

- Choose **Workflow** as the application type.
- Use **drag-and-drop nodes** to define your app’s behavior based on conditions or actions.
- Integrate external APIs (e.g., Google Search, databases) to provide richer data for your AI to process, enabling more insightful and automated responses.








![Workflow-based Applications](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-10.png?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=79452baeb346e66a38a145ab8feafcbd)


Integrating Novita AI’s DeepSeek R1 with Dify provides a robust platform for creating advanced AI applications. With DeepSeek’s multi-turn reasoning, your AI App can have more dynamic, context-aware conversations, making it highly effective for building chatbots, knowledge assistants, and more.

Was this page helpful?

YesNo

[AnythingLLM](https://novita.ai/docs/guides/anythingllm) [Helicone](https://novita.ai/docs/guides/helicone)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)

![Choose Chatbot as the application type](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-2.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=f4772166e0e066f1b48a48f3b76d2911)

![Give your app a name and click Create.](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-3.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=994873c26c22f9ed11f0ecc4cd4ea05e)

![From the Model dropdown, select Novita AI DeepSeek R1](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-4.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=46c07753a0e242e8518b2b2fc7f2f925)

![go to the Knowledge Base section and click Create Knowledage.](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-5.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=1a3453804011475a91c1e29d4cb7dd58)

![Upload documents ](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-6.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=d7a14fdf5641514b38200349a93eefe6)

![Use Parent-Child Segmentation Mode ](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-7.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2c2918302c842c8d0886396da71046c8)

![Add Knowledge Base](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-8.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=270ac67acba8cdf6a40712c6e1eb1638)

![Share Your AI Application](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-9.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=6a7df0827004d1ac95b3ea0a3f63afc0)

![Workflow-based Applications](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/images/third-party/dify-10.png?w=1100&fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=d24bf32fa5f32d39e170639faa925187)