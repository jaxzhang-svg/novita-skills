---
url: "https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint"
title: "Create Serverless Endpoint - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

Create Serverless Endpoint

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Step 1: Prepare Container Image](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint#step-1-prepare-container-image)
- [Step 2: Go to the Console](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint#step-2-go-to-the-console)
- [Step 3: Configure Serverless Endpoint](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint#step-3-configure-serverless-endpoint)
- [Step 4: Access the Deployed Llama 3 8B Model Service](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint#step-4-access-the-deployed-llama-3-8b-model-service)
- [Next Step](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint#next-step)

This guide takes deploying a **Llama 3.1 8B model** as an example to introduce how to create a Serverless Endpoint from scratch.

## [​](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint\#step-1-prepare-container-image)  Step 1: Prepare Container Image

You need to package the runtime environment into a Docker image and upload it to an image repository in advance. Currently, [Novita AI](https://novita.ai/) supports specifying **“public image repository”** and **“private image repository”** (including image repository access credentials).We use the vLLM official image repository for serving the Llama 3.1 8B model: `vllm/vllm-openai:latest`. You can use this image address directly.

## [​](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint\#step-2-go-to-the-console)  Step 2: Go to the Console

Go to the [Serverless Console](https://novita.ai/gpu-instance/console/serverless), select the appropriate GPU container instance specification, and click **“Create Endpoint”**.

Currently, only **RTX 4090 24GB** instance specifications are supported. More options will be available gradually, please stay tuned for official updates.

## [​](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint\#step-3-configure-serverless-endpoint)  Step 3: Configure Serverless Endpoint

Here we use the public image `vllm/vllm-openai:latest` as an example for configuration:

- **Endpoint Name**: Used to uniquely identify your Endpoint. The system will generate a name for you by default, but you can also specify one yourself.
- **App Name**: The application name is part of the Endpoint URL. It is optional and supports customization, **only lowercase letters, numbers, and hyphens are allowed**. If not specified, the system will generate one automatically.
- **Worker Configuration**
  - **Workers Min**: The minimum number of Workers to retain. It can be set to 0, so no Workers will be retained when your service has no requests. Note that setting it to 0 may not respond quickly to subsequent requests. Be cautious if your scenario requires quick response time.
  - **Workers Max**: The maximum number of Workers to retain. When your service request volume increases and triggers the auto-scaling mechanism, the number of Workers will increase. This configuration limits the maximum number of Workers to help control costs.
  - **Idle Timeout (seconds)**: When the auto-scaling mechanism triggers a Worker to be taken offline, the platform will retain the Worker for the specified time to quickly handle potential subsequent request increases. Note that the platform will charge you for this time.
  - **Max Concurrency**: The maximum number of concurrent requests each Worker can handle. When the concurrency exceeds the maximum value, requests will be dispatched to other Workers. If all Workers are fully occupied, requests will be queued for execution.
  - **GPUs/Worker**: The number of GPUs each Worker occupies.
  - **CUDA Version**: Supports specifying the CUDA version.
- **Scale Policy**:

  - **Queue Delay**: Adjusts the number of Workers based on the waiting time of requests in the queue. You need to configure the “Queue Delay Time (seconds)”. When the waiting time of requests in the queue exceeds this value, auto-scaling will be triggered. When it is less than this value, auto-scaling will be triggered to scale down (combined with the “Idle Timeout (seconds)” set earlier to determine the specific time for Worker to go offline).
  - **Request Count**: Adjusts the number of Workers based on the number of requests in the queue. You need to configure the “Queue Max Request Count”. When the number of requests in the queue exceeds this value, auto-scaling will be triggered. When it is less than this value, auto-scaling will be triggered to scale down (combined with the “Idle Timeout (seconds)” set earlier to determine the specific time for Worker to go offline).
- **Image Configuration**:

  - **Container Image**: The image repository address, such as `vllm/vllm-openai:latest`.
  - **Container Registry Credentials**: When you specify a private image repository, you need to set the access credentials. Please configure it through the [Settings - Container Registry Auth](https://novita.ai/gpu-instance/console/settings).
  - **HTTP Port**: The HTTP port exposed by the Workers. The load balancer will forward requests to this port of the Workers, for example, `8080` in this case.
  - **Container Start Command**: The command executed when the container starts. For example: `--model meta-llama/Llama-3.1-8B-Instruct --max-model-len 4096`.
- **Storage Configuration**: Here you can configure the container disk, volume disk and network volume. Currently, the container disk and volume disk sizes are fixed. More options will be available gradually, please stay tuned for official updates.
- **Others**:

  - **Health Check Path**: The built-in **load balancer** will perform health checks through this path. It will determine whether to forward requests to the Worker based on whether the returned status code is `200`, such as `/health`.
  - **Environment Variables**: Here you can configure the environment variables that the service depends on. For example: `HUGGING_FACE_HUB_TOKEN={Your Hugging Face Access Token (with read permission)}`.

After confirming that the configuration is correct, click **“Deploy”** to complete the creation process.

## [​](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint\#step-4-access-the-deployed-llama-3-8b-model-service)  Step 4: Access the Deployed Llama 3 8B Model Service

You can find the Serverless Endpoint you just created in the [Serverless Console](https://novita.ai/gpu-instance/console/serverless). When the Endpoint’s status changes to **“Serving”**, and at least one Worker is in the **“Running”** state, click the **“Copy”** button to copy the URL for accessing the model service.And you can use the `curl` command to access the service like below:

Copy

```
curl "{URL you just copied}/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/Llama-3.1-8B-Instruct",
    "messages": [\
        {\
            "role": "system",\
            "content": "Act like you are a helpful assistant."\
        },\
        {\
            "role": "user",\
            "content": "Hi there!"\
        }\
    ],
    "max_tokens": 512
}'
```

## [​](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint\#next-step)  Next Step

Next, please refer to the document [Manage Serverless Endpoint](https://novita.ai/docs/guides/serverless-gpus-quickstart-manage-endpoint) to learn how to check and modify the serverless endpoint you just created.

Was this page helpful?

YesNo

[Preparations](https://novita.ai/docs/guides/serverless-gpus-quickstart-preparations) [Create Async Serverless Endpoint](https://novita.ai/docs/guides/serverless-gpus-quickstart-create-async-endpoint)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.