---
url: "https://novita.ai/docs/guides/serverless-gpus-overview"
title: "Overview - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/serverless-gpus-overview#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Serverless GPUs

Overview

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Features](https://novita.ai/docs/guides/serverless-gpus-overview#features)
- [Terminology](https://novita.ai/docs/guides/serverless-gpus-overview#terminology)

The GPU elastic container product designed specifically for **AI inference**. You only need to specify the container image address and make slight configurations according to your business scenarios to quickly deploy an AI inference service.

## [​](https://novita.ai/docs/guides/serverless-gpus-overview\#features)  Features

- With the capability of **elastic scaling**, it automatically scales up during peak business traffic and scales down during low traffic periods, ensuring service stability while saving costs as much as possible;
- Built-in efficient **load balancing** ensures that request loads are evenly distributed to each GPU container instance;
- Billing is **accurate to the second**, charging only for the actual running time of the GPU container instances;
- Through technologies such as GPU container instance reservation, image preheating, and high-performance hardware, it can achieve **second-level cold-start**, easily handling traffic peaks;
- Complete **log panel** supports querying real-time log streams, helping you quickly identify and resolve potential issues.

## [​](https://novita.ai/docs/guides/serverless-gpus-overview\#terminology)  Terminology

- **Container Image Address**: Refers to the Docker container image address, currently supporting **“public image”** and **“private image”**.
- **Serverless Endpoint**: Represents a GPU elastic container instance. It includes components such as **worker**, **load balancer**, and **elastic scaler**.
- **Worker**: A GPU container instance used by the serverless endpoint to handle specific requests. One Worker corresponds to one GPU container instance.
- **Scale Policy**: Used to control the logic of automatically scaling up during traffic peaks and scaling down during low traffic periods.
- **Health Check Path**: The built-in load balancer performs health checks through this path, determining whether to forward requests to the Worker based on whether the returned status code is `200`.

Was this page helpful?

YesNo

[Image Prewarm](https://novita.ai/docs/guides/gpu-image-prewarm) [Preparations](https://novita.ai/docs/guides/serverless-gpus-quickstart-preparations)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.