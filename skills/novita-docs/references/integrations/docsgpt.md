---
url: "https://novita.ai/docs/guides/docsgpt"
title: "DocsGPT - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/docsgpt#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

DocsGPT

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to use DocsGPT](https://novita.ai/docs/guides/docsgpt#how-to-use-docsgpt)
- [Prerequisites:](https://novita.ai/docs/guides/docsgpt#prerequisites)
- [Launching DocsGPT (macOS and Linux)](https://novita.ai/docs/guides/docsgpt#launching-docsgpt-macos-and-linux)
- [Launching DocsGPT (Windows)](https://novita.ai/docs/guides/docsgpt#launching-docsgpt-windows)
- [How to Integrate Novita AI API with DocsGPT](https://novita.ai/docs/guides/docsgpt#how-to-integrate-novita-ai-api-with-docsgpt)

DocsGPT simplifies documentation with AI-powered assistance. Integrating it with Novita AI enhances its performance, offering faster processing, scalable resources, and advanced model support for improved productivity.This guide walks you through how to use DocsGPT with Novita AI based on the OpenAl APl, offering a way to query your content and get served customized answers.

## [​](https://novita.ai/docs/guides/docsgpt\#how-to-use-docsgpt)  **How to use DocsGPT**

### [​](https://novita.ai/docs/guides/docsgpt\#prerequisites)  **Prerequisites:**

**Docker:** Ensure you have [Docker](https://docs.docker.com/engine/install/) installed and running on your system.

### [​](https://novita.ai/docs/guides/docsgpt\#launching-docsgpt-macos-and-linux)  **Launching DocsGPT (macOS and Linux)**

For macOS and Linux users, the easiest way to launch DocsGPT is using the provided `setup.sh` script. This script automates the configuration process and offers several setup options.Step 1: Download the DocsGPT repository

- First, you need to download the DocsGPT repository to your local machine. You can do this using Git:

Copy

```
git clone https://github.com/arc53/DocsGPT.git
cd DocsGPT
```

Step 2: Run the `setup.sh` script

- Navigate to the DocsGPT directory in your terminal and execute the `setup.sh` script:

Copy

```
./setup.sh
```

This interactive script will guide you through setting up DocsGPT. It offers four options: using the public API, running locally, connecting to a local inference engine, or using a cloud API provider. The script will automatically configure your `.env` file and handle necessary downloads and installations based on your chosen option.

### [​](https://novita.ai/docs/guides/docsgpt\#launching-docsgpt-windows)  **Launching DocsGPT (Windows)**

For Windows users, please refer to the [Docker Deployment documentation](https://docs.docsgpt.cloud/Deploying/Docker-Deploying) for detailed step-by-step instructions on setting up DocsGPT using Docker.

## [​](https://novita.ai/docs/guides/docsgpt\#how-to-integrate-novita-ai-api-with-docsgpt)  **How to Integrate Novita AI API with DocsGPT**

Step 1: Log in to [Novita AI](https://novita.ai/) and create an [API Key](https://novita.ai/settings/key-management)

![images/3-1LogintoNovitaAI.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/3-1LogintoNovitaAI.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=b5c90a73cd15f73f327bb9c3be6ad701)

![images/3-2CreateanAPIKey.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/3-2CreateanAPIKey.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=48e2bd4c6e3642b24b12bff15417b13b)

Step 2: Select option4 and connect cloud API provider in your terminal

![images/2SelectOption4andConnectCloudAPIProvider.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/2SelectOption4andConnectCloudAPIProvider.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=bb8ddd2e4bdebda1e2d69e839823de97)

Step 3: Choose option7 Novita and enter the API key you just created

![images/4ChooseOption7NovitaandEntertheAPIKeyYouJustCreated.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/4ChooseOption7NovitaandEntertheAPIKeyYouJustCreated.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=cfb5b58e584472599f3e9b3c14d4aa8d)

Step 4: Wait for the startup process to complete

![images/5WaitfortheStartupProcesstoComplete.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/5WaitfortheStartupProcesstoComplete.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=332ea094376d7e01ee8419b7918b821e)

Step 5: Access DocsGPT in your browser

- Once the setup is complete and Docker containers are running, navigate to [http://localhost:5173/](http://localhost:5173/) in your web browser to access the DocsGPT web application.

![images/6AccesstheApplicationathttp-localhost-5173.jpeg](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/6AccesstheApplicationathttp-localhost-5173.jpeg?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=27b16380d04d4b5b39f6082b7b18b252)

Step 6: Stopping DocsGPT

- To stop DocsGPT, simply open a new terminal in the `DocsGPT` directory and run:

Copy

```
docker compose -f deployment/docker-compose.yaml down
```

- (or the specific `docker compose` command shown at the end of the `setup.sh` execution, which may include optional compose files depending on your choices).

Was this page helpful?

YesNo

[Portkey](https://novita.ai/docs/guides/portkey) [LlamaIndex](https://novita.ai/docs/guides/llamaindex)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![images/3-1LogintoNovitaAI.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/3-1LogintoNovitaAI.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=ae6c9fd6ecf64f9a44b0264c83067c71)

![images/3-2CreateanAPIKey.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/3-2CreateanAPIKey.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=f786ee80361a0f021de9c133d749132e)

![images/2SelectOption4andConnectCloudAPIProvider.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/2SelectOption4andConnectCloudAPIProvider.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=c09369c41d4d27a41bcac762055212e2)

![images/4ChooseOption7NovitaandEntertheAPIKeyYouJustCreated.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/4ChooseOption7NovitaandEntertheAPIKeyYouJustCreated.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=3449b6848f47a44e0b81b6f86b2b9dca)

![images/5WaitfortheStartupProcesstoComplete.png](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/5WaitfortheStartupProcesstoComplete.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=902538a2411981898d8b8e484b6b7eaf)

![images/6AccesstheApplicationathttp-localhost-5173.jpeg](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/images/6AccesstheApplicationathttp-localhost-5173.jpeg?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=e5d192a51ef63ee568fac4b67ce7fe77)