---
url: "https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances"
title: "Create Instances - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

Create Instances

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Step 1: Prepare Docker Image](https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances#step-1-prepare-docker-image)
- [Step 2: Create GPU Instance](https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances#step-2-create-gpu-instance)
- [Configuration Explanation](https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances#configuration-explanation)

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances\#step-1-prepare-docker-image)  Step 1: Prepare Docker Image

You need to package your runtime environment into a Docker image and upload it to an image repository in advance. Currently, [Novita AI](https://novita.ai/) supports specifying both “public image repository” and “private image repository” (including access credentials).Additionally, you can use the [public image templates](https://novita.ai/gpus-console/explore) provided by the platform to quickly create instances.

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances\#step-2-create-gpu-instance)  Step 2: Create GPU Instance

After entering the [Explore](https://novita.ai/gpus-console/explore) page, select an image template and choose your desired specifications, then click the “Deploy” button.

You can use the “Filter” feature in the bottom right corner to find the instance specifications you need.

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-create-instances\#configuration-explanation)  Configuration Explanation

| Configuration | Description |
| --- | --- |
| CPU | The number of vCPU cores you select for your instance. The vCPU count will affect the instance’s processing capability and performance, with more vCPUs being beneficial for compute-intensive applications. |
| Memory | The size of RAM in GB specified for each instance. Memory is crucial for running applications and overall instance speed. |
| Supported CUDA Version | CUDA is a parallel computing platform and API model developed by NVIDIA. Choosing the correct CUDA version is important if you plan to run applications optimized for NVIDIA GPUs, such as machine learning and 3D rendering applications. |
| Ports | You can expose your ports according to your service needs. The platform will provide port mapping services for your service. Multiple ports can be entered, separated by commas. |
| Environment Variables | Used to specify parameters for the operating system’s runtime environment. You can set environment variables here directly, and the platform will automatically initialize them for you. |
| GPU Instance Pricing | More details can be found at [GPU Instance Pricing](https://novita.ai/docs/guides/gpu-instance-pricing). |
| Base Image | The Docker image provided by the platform. |
| Custom Image | The Docker image name you specify, which the platform will default to pulling from DockerHub. Ensure that the image name is entered correctly. |

After the instance is successfully created, you can refer to the [Manage Instances](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-instances) guide to access the instance.

Was this page helpful?

YesNo

[Preparations](https://novita.ai/docs/guides/gpu-instance-quickstart-preparations) [Manage Instances](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-instances)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.