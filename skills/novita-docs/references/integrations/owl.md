---
url: "https://novita.ai/docs/guides/owl"
title: "OWL - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/owl#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

OWL

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Integrate Novita AI with RAGFlow](https://novita.ai/docs/guides/owl#how-to-integrate-novita-ai-with-ragflow)
- [Step 1: Pre-Configuration Setup](https://novita.ai/docs/guides/owl#step-1-pre-configuration-setup)
- [Step 2: Install OWL](https://novita.ai/docs/guides/owl#step-2-install-owl)
- [Step 3: Configure OWL](https://novita.ai/docs/guides/owl#step-3-configure-owl)
- [Step 4: View Results](https://novita.ai/docs/guides/owl#step-4-view-results)

OWL is an open-source framework for multi-agent collaboration that specializes in real-world task automation, built on the CAMEL-AI Foundation. By integrating with various AI models, OWL combines dynamic agent interactions with powerful toolkits for online search, browser automation, document processing, and code execution. This framework enables more natural, efficient, and robust task automation across diverse domains, delivering actionable insights tailored to your specific needs.This guide will enable you to seamlessly integrate Novita AI with OWL and elevate your AI-driven processes for faster, smarter outcomes.

## [​](https://novita.ai/docs/guides/owl\#how-to-integrate-novita-ai-with-ragflow)  **How to Integrate Novita AI with RAGFlow**

### [​](https://novita.ai/docs/guides/owl\#step-1-pre-configuration-setup)  **Step 1: Pre-Configuration Setup**

1. **Access the API Endpoint**

- Use the official API endpoint: [https://api.novita.ai/openai](https://api.novita.ai/openai).

2. **Create an API Key**

- Visit the [key management page](https://novita.ai/settings/key-management) and select `Add New Key` to generate your API key.![Visitthekeymanagementpageandselect Add New Keytogenerateyour AP Ikey Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-VisitthekeymanagementpageandselectAddNewKeytogenerateyourAPIkey..png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=ba76fbe63ca9f6246b5b7254ced54252)
- Keep your API key safe.  - **Note:** API keys are securely encrypted on the server. If you lose it, you’ll need to delete the old key and create a new one.![Keepyour AP Ikeysafe 1 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-KeepyourAPIkeysafe-1.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=aee9e2e9c06051a02c71cf7979265596)![Keepyour AP Ikeysafe 2 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-KeepyourAPIkeysafe-2.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=7a06cefa2a3860de9db5ff52a2f95e91)

3. **Identify the Model ID**

- meta-llama/llama-4-scout-17b-16e-instruct

### [​](https://novita.ai/docs/guides/owl\#step-2-install-owl)  **Step 2: Install OWL**

- To begin, download and install OWL by following the step-by-step instructions on the Github: [https://github.com/camel-ai/owl](https://github.com/camel-ai/owl).

### [​](https://novita.ai/docs/guides/owl\#step-3-configure-owl)  **Step 3: Configure OWL**

- Prepare OWL for use by setting up environment variables and adding your API key. Run the following commands in your terminal:

Copy

```
cd owl
cp .env_template .env
```

- Start OWL and specify your task by executing:

Copy

```
python examples/run_novita_ai.py
```

![Step3 Configure OWL Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step3-ConfigureOWL.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=d54fb187a6aaf37bf22c7d8a03374c1c)

### [​](https://novita.ai/docs/guides/owl\#step-4-view-results)  **Step 4: View Results**

1. **Terminal Output**

- Once launched, OWL will display the execution results directly in the terminal window.![Terminal Output 1 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/TerminalOutput-1.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=c93696ac4dfe47b305d465243b57e024)![Terminal Output 2 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/TerminalOutput-2.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=eea7a48cd8070d65c177707fd2027457)

2. **Web Interface**

- For a more intuitive experience, use OWL’s web-based interface. Launch it by running:

Copy

```
cd owl
python webapp.py
```

![Web Interface 1 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/WebInterface-1.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=89aa59be53d17f128496533510564add)![Web Interface 2 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/WebInterface-2.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=0b268cbf677b9846ac4a6f535b6f7958)

- Steps to use the Web UI:
  - Select `run_novita_ai` from the left-hand menu and go to the `Environment Variable Management` tab on the right and input your `NOVITA_API_KEY`.![Stepstousethe Web UI 1 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-1.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=74c433bed70e116dcfda4124e619b39e)
  - Click `Run` to execute your task.![Stepstousethe Web UI 2 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-2.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=ff4ce3d506aba0093547fc06e0368794)
  - To perform a new task, update the input field and click `Run` again.![Stepstousethe Web UI 3 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-3.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=dafac36d880a75665bb026867f982540)![Stepstousethe Web UI 4 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-4.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=7601da5147281374c130d7145652e280)
  - Results will be displayed in the terminal, or a new file will be generated in the root directory, depending on the task.![Stepstousethe Web UI 5 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-5.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=b89fc1b455ff6aa18c9d98a69ddc381f)
  - Alternatively, you can directly input your desired task into the content box and click the `Run` button to execute it.![Stepstousethe Web UI 6 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-6.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=a7a423e4fd0cc8c4995fb50503a972e8)

Was this page helpful?

YesNo

[Browser Use](https://novita.ai/docs/guides/browseruse) [LiteLLM](https://novita.ai/docs/guides/litellm)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Visitthekeymanagementpageandselect Add New Keytogenerateyour AP Ikey Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-VisitthekeymanagementpageandselectAddNewKeytogenerateyourAPIkey..png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=e02f65d93a4c511d5e27571d6e9b68c6)

![Keepyour AP Ikeysafe 1 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-KeepyourAPIkeysafe-1.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=d1b8cbdf7fcff47f06c2b70f491b1968)

![Keepyour AP Ikeysafe 2 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-KeepyourAPIkeysafe-2.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=8eb063a281e42eeb723fcd353bdfe005)

![Step3 Configure OWL Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step3-ConfigureOWL.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=fd886e520c8d40c2052f3202471c9670)

![Terminal Output 1 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/TerminalOutput-1.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=c55e99fe33b7b81688c0ff656a88b875)

![Terminal Output 2 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/TerminalOutput-2.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=74c43f6c611b95ccc81f5f182c7414b0)

![Web Interface 1 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/WebInterface-1.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=8fd35d43c9aa73872f1e8f5ebc14447e)

![Web Interface 2 Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/WebInterface-2.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=4b8e227871934755cf64f66e7c2ebc8d)

![Stepstousethe Web UI 1 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-1.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=dbae95236af50e562b35217db9443ca9)

![Stepstousethe Web UI 2 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-2.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=305b6d14c33c339baadf70d3551faaa4)

![Stepstousethe Web UI 3 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-3.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=6c5a4b945a21202973f168125077b5a8)

![Stepstousethe Web UI 4 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-4.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=16df52ce1404f72871808ad5f0b795d0)

![Stepstousethe Web UI 5 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-5.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=ad26ed617c97b5d37be08efb36a5c81d)

![Stepstousethe Web UI 6 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/-StepstousetheWebUI-6.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=3036ee8eb1d80d759cf0d94f955324ad)