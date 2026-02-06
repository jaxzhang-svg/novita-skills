---
url: "https://novita.ai/docs/guides/skyvern"
title: "Skyvern - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/skyvern#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Skyvern

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Setting Up Docker Compose](https://novita.ai/docs/guides/skyvern#setting-up-docker-compose)
- [Leveraging Novita AI in Skyvern](https://novita.ai/docs/guides/skyvern#leveraging-novita-ai-in-skyvern)

The collaboration between Skyvern and Novita AI marks a significant advancement in AI-powered automation and development capabilities. By combining Skyvern’s expertise in browser-based workflow automation with Novita AI’s robust GPU infrastructure and model deployment platform, developers and businesses can now access a comprehensive solution for building and scaling AI applications.Our comprehensive guide will walk you through Novita AI implementation on Skyvern, including setting up Docker Compose and leveraging Novita AI in Skyvern.

## [​](https://novita.ai/docs/guides/skyvern\#setting-up-docker-compose)  Setting Up Docker Compose

Step 1: Ensure [Docker Desktop](https://www.docker.com/products/docker-desktop/) is installed and running on your machine.Step 2: Check for running PostgreSQL instances using `docker ps` the command.Step 3: Navigate to the project directory after cloning the repository.

Copy

```
git clone <repository-url> && cd <repository-name>
```

Step 4: Add your LLM provider API Key on the [docker-compose.yml](https://github.com/Skyvern-AI/skyvern/blob/main/docker-compose.yml). ( _If you want to run Skyvern on a remote server, make sure you set the correct server ip for the UI container in_ [_docker-compose.yml_](https://github.com/Skyvern-AI/skyvern/blob/main/docker-compose.yml) _.)_Step 5: Enter the following command via the command line.

Copy

```
docker compose up -d
```

Step 6: Access the application interface at`http://localhost:8080` in your browser to start using the UI.

## [​](https://novita.ai/docs/guides/skyvern\#leveraging-novita-ai-in-skyvern)  Leveraging Novita AI in Skyvern

Step 1: Update environment variables in docker-compose.yml before building the docker image.Step 2: Start Novita AI LLM service by running`docker compose up -d`.

![Leveraging Novita AI in Skyvern- edit environment variables](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/LeveragingNovitaAIinSkyvern-editenvironmentvariables.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=03a7b4e59209a08d7d78318f4707f8a7)

Was this page helpful?

YesNo

[LangChain](https://novita.ai/docs/guides/langchain) [LobeChat](https://novita.ai/docs/guides/lobechat)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Leveraging Novita AI in Skyvern- edit environment variables](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/third-party/LeveragingNovitaAIinSkyvern-editenvironmentvariables.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=33da8f0d6625d32a3dd168c4f5f8df3d)