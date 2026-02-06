---
url: "https://novita.ai/docs/guides/pageassist"
title: "Page Assist - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/pageassist#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Page Assist

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Integrate Novita AI with Page Assist](https://novita.ai/docs/guides/pageassist#how-to-integrate-novita-ai-with-page-assist)
- [Step 1: Prepare Your Environment](https://novita.ai/docs/guides/pageassist#step-1-prepare-your-environment)
- [Step 2: Clone Page Assist Repository](https://novita.ai/docs/guides/pageassist#step-2-clone-page-assist-repository)
- [Step 3: Build Page Assist Extension](https://novita.ai/docs/guides/pageassist#step-3-build-page-assist-extension)
- [Step 4: Load the Extension](https://novita.ai/docs/guides/pageassist#step-4-load-the-extension)
- [Step 5: Configure Novita AI as OpenAI API Compatible Endpoint](https://novita.ai/docs/guides/pageassist#step-5-configure-novita-ai-as-openai-api-compatible-endpoint)
- [Step 6: Choose your Model and Test Page Assist with Novita AI](https://novita.ai/docs/guides/pageassist#step-6-choose-your-model-and-test-page-assist-with-novita-ai)

Page Assist offers a seamless browser extension that integrates AI capabilities directly into your web interactions. By combining Novita AI with Page Assist, you can unlock a powerful AI-enhanced browsing experience that enhances productivity and insight generation.This guide will walk you through the process of deploying and running Page Assist with Novita AI to supercharge your web interactions.

## [​](https://novita.ai/docs/guides/pageassist\#how-to-integrate-novita-ai-with-page-assist)  **How to Integrate Novita AI with Page Assist**

You can find the GitHub repository of Page Assist here: [n4ze3m/page-assist](https://github.com/n4ze3m/page-assist).

### [​](https://novita.ai/docs/guides/pageassist\#step-1-prepare-your-environment)  Step 1: Prepare Your Environment

- Install Bun or npm: Follow the installation guide for [Bun](https://bun.sh/) or use npm as an alternative.

### [​](https://novita.ai/docs/guides/pageassist\#step-2-clone-page-assist-repository)  Step 2: Clone Page Assist Repository

1. Open your terminal and run:

Copy

```
git clone https://github.com/n4ze3m/page-assist.git
cd page-assist
```

2. Install dependencies using Bun or npm:

Copy

```
bun install
```

### [​](https://novita.ai/docs/guides/pageassist\#step-3-build-page-assist-extension)  Step 3: Build Page Assist Extension

- Build the extension for Chrome (default):

Copy

```
bun run build
```

- For Firefox, use:

Copy

```
bun build:firefox
```

### [​](https://novita.ai/docs/guides/pageassist\#step-4-load-the-extension)  Step 4: Load the Extension

1. For Chrome:
   - Navigate to `chrome://extensions`.
   - Enable Developer Mode.
   - Click `Load unpacked` and select the `build/chrome-xxx` (e.g. `build/chrome-mv3`) directory.
2. For Firefox:
   - Go to `about:addons`.
   - Click `Extensions` tab.
   - Click `Manage Your Extensions`.
   - Select `Load Temporary Add-on` and choose the `manifest.json` file from in the `build/firefox-xxx` (e.g. `build/firefox-mv3`) directory.

### [​](https://novita.ai/docs/guides/pageassist\#step-5-configure-novita-ai-as-openai-api-compatible-endpoint)  Step 5: Configure Novita AI as OpenAI API Compatible Endpoint

1. Obtain Your Novita AI API Key:   - [Log in](https://novita.ai/user/login) to your Novita AI account.
   - Navigate to [the Key Management page](https://novita.ai/settings/key-management).
   - Generate a new API Key and copy it.
2. Set Up Novita AI Endpoint:

   - In your Page Assist Settings, enter `Open Compatible API` to add provider.

![Inyour Page Assist Settings,enter Open Compatible AP Itoaddprovider Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/InyourPageAssistSettings,enterOpenCompatibleAPItoaddprovider.jpeg?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=24e573b9f95e29ce67db8b0109a77310)

   - Choose Novita from the `Custom list`, and use your API key for authentication.

![Choose Novitafromthe Customlist,anduseyour AP Ikeyforauthentication Jpe](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/ChooseNovitafromtheCustomlist,anduseyourAPIkeyforauthentication..jpeg?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=f2520fdd7279f785ca4b96fddea18869)

### [​](https://novita.ai/docs/guides/pageassist\#step-6-choose-your-model-and-test-page-assist-with-novita-ai)  Step 6: Choose your Model and Test Page Assist with Novita AI

- Choose your model from the model list provided by Novita AI.

![Chooseyourmodelfromthemodellistprovidedby Novita AI Jpe](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/ChooseyourmodelfromthemodellistprovidedbyNovitaAI..jpeg?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=e8cbe0720bdc700a93337b39f3bb0f1b)

- Interact with your Novita AI model by asking questions or analyzing web content.

![Interactwithyour Novita A Imodelbyaskingquestionsoranalyzingwebcontent Jpe](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/InteractwithyourNovitaAImodelbyaskingquestionsoranalyzingwebcontent.jpeg?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=44211eb01eaa61cbd57dc78d6f94b0ad)

Was this page helpful?

YesNo

[CodeCompanion](https://novita.ai/docs/guides/codecompanion) [DeepSearcher](https://novita.ai/docs/guides/deepsearcher)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Inyour Page Assist Settings,enter Open Compatible AP Itoaddprovider Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/InyourPageAssistSettings,enterOpenCompatibleAPItoaddprovider.jpeg?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=6010f0eac08d677190dc3e2f43df5551)

![Choose Novitafromthe Customlist,anduseyour AP Ikeyforauthentication Jpe](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/ChooseNovitafromtheCustomlist,anduseyourAPIkeyforauthentication..jpeg?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=ede06592cbfaa2797a71cf06ebfad038)

![Chooseyourmodelfromthemodellistprovidedby Novita AI Jpe](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/ChooseyourmodelfromthemodellistprovidedbyNovitaAI..jpeg?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=c16a4c5daebcca75c4ea2be99acb8401)

![Interactwithyour Novita A Imodelbyaskingquestionsoranalyzingwebcontent Jpe](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/InteractwithyourNovitaAImodelbyaskingquestionsoranalyzingwebcontent.jpeg?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=8d188289770e38efcad3e39c8c220a83)