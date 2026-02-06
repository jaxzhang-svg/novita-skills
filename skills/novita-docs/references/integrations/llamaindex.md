---
url: "https://novita.ai/docs/guides/llamaindex"
title: "LlamaIndex - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llamaindex#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

LlamaIndex

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Integrate Novita AI API with LlamaIndex](https://novita.ai/docs/guides/llamaindex#how-to-integrate-novita-ai-api-with-llamaindex)

Designed for optimal indexing and retrieval, LlamaIndex excels in delivering high efficiency for applications requiring precise and fast data access. By combining [Novita AI](https://novita.ai/) with LlamaIndex, you will unlock key benefits such as superior data retrieval accuracy, unmatched scalability, and cost-effective performance.This guide will walk you through how to use LlamaIndex with Novita AI based on the OpenAl APl, offering smarter, scalable, and highly efficient AI solutions that drive innovation and deliver exceptional results for developers.

## [​](https://novita.ai/docs/guides/llamaindex\#how-to-integrate-novita-ai-api-with-llamaindex)  **How to Integrate Novita AI API with LlamaIndex**

Step 1: Visit [Model Library](https://novita.ai/llm-api) on Novita AI and select a model of interest.

![images/Step1VisitModelLibraryonNovitaAIandselectamodelofinterest.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step1VisitModelLibraryonNovitaAIandselectamodelofinterest.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=d3db29afa82f298487c3284f24397510)

Step 2: Navigate to the demo page of the chosen model and click the `Code` button on the right.

![images/Step2NavigatetothedemopageofthechosenmodelandclicktheCodebuttonontheright.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step2NavigatetothedemopageofthechosenmodelandclicktheCodebuttonontheright.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=e5ca58627abad4dd217b7ac3abd598e7)

Step 3: Copy the model’s name and make a note of it.

![images/Step3Copythemodel’snameandmakeanoteofit.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step3Copythemodel%E2%80%99snameandmakeanoteofit.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=816f535a6a61bc39356d6e050b462511)

Step 4: [Log in](https://novita.ai/user/login) to the Novita platform.

![images/Step4LogintotheNovitaplatform.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step4LogintotheNovitaplatform.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=d274e15bfd1b4c639512ec19a7ddf6ed)

Step 5: After logging in, go to the platform’s [settings page](https://novita.ai/settings).

![images/Step5Afterloggingin,gototheplatform’ssettingspage.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step5Afterloggingin,gototheplatform%E2%80%99ssettingspage.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=8792b12498ad8c59383777d528f340e9)

Step 6: Create a new [API key](https://novita.ai/settings/key-management) and copy it for service authentication.

![images/Step6CreateanewAPIkeyandcopyitforserviceauthentication.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step6CreateanewAPIkeyandcopyitforserviceauthentication.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=07b03a5c86e922736118a779e34041ff)

Step 7: Install `llama_index` and related Python libraries by running:

![images/Step7Installllama_indexandrelatedPythonlibrariesbyrunning.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step7Installllama_indexandrelatedPythonlibrariesbyrunning.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=fd802a1818ff357dfcede0fe966e61a9)

Step 8: Write Python code and set the model name and API key as parameters in the NovitaAI class.

![images/Step8WritePythoncodeandsetthemodelnameandAPIkeyasparametersintheNovitaAIclass.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step8WritePythoncodeandsetthemodelnameandAPIkeyasparametersintheNovitaAIclass.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=dc8c9b21bd91d18469faab2d238fa9ce)

Step 9: Run the code to get the output.

![images/Step9Runthecodetogettheoutput.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step9Runthecodetogettheoutput.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=4f3bf4015516d4acfc6c079b8a7f8c65)

For more examples, refer to the documentation: [llama\_index/llama-index-integrations/llms/llama-index-llms-novita at main · run-llama/llama\_index](https://github.com/run-llama/llama_index/tree/main/llama-index-integrations/llms/llama-index-llms-novita).

Was this page helpful?

YesNo

[DocsGPT](https://novita.ai/docs/guides/docsgpt) [LoLLMS WebUI](https://novita.ai/docs/guides/lollmswebui)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![images/Step1VisitModelLibraryonNovitaAIandselectamodelofinterest.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step1VisitModelLibraryonNovitaAIandselectamodelofinterest.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=b174c793195574f561ce97f8ed6e0dc4)

![images/Step2NavigatetothedemopageofthechosenmodelandclicktheCodebuttonontheright.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step2NavigatetothedemopageofthechosenmodelandclicktheCodebuttonontheright.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=6ca43b2a3d19064ed10333d773ad032d)

![images/Step3Copythemodel’snameandmakeanoteofit.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step3Copythemodel%E2%80%99snameandmakeanoteofit.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=b7eab66781ba72cf082674caf779a15f)

![images/Step4LogintotheNovitaplatform.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step4LogintotheNovitaplatform.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=938ae8d51416655d375bd6c020319f88)

![images/Step5Afterloggingin,gototheplatform’ssettingspage.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step5Afterloggingin,gototheplatform%E2%80%99ssettingspage.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=6de67f5b1282300e137beeca07aff254)

![images/Step6CreateanewAPIkeyandcopyitforserviceauthentication.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step6CreateanewAPIkeyandcopyitforserviceauthentication.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=61304dc4055953da0d688ec188267ec8)

![images/Step7Installllama_indexandrelatedPythonlibrariesbyrunning.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step7Installllama_indexandrelatedPythonlibrariesbyrunning.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=3b2a2015490c8d2d863cef1738a024ff)

![images/Step8WritePythoncodeandsetthemodelnameandAPIkeyasparametersintheNovitaAIclass.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step8WritePythoncodeandsetthemodelnameandAPIkeyasparametersintheNovitaAIclass.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=cb3b32c2cbef6a6cc75528fc169b2b8f)

![images/Step9Runthecodetogettheoutput.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step9Runthecodetogettheoutput.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=a78cde0549ef5dedad097efcfd7d408f)