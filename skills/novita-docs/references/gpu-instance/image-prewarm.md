---
url: "https://novita.ai/docs/guides/gpu-image-prewarm"
title: "Image Prewarm - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/gpu-image-prewarm#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Guides

Image Prewarm

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Operation Steps](https://novita.ai/docs/guides/gpu-image-prewarm#operation-steps)
- [Quota Limits](https://novita.ai/docs/guides/gpu-image-prewarm#quota-limits)

The image prewarm feature supports synchronizing specified images from the source image repository to the cluster’s local cache in advance. When instances start or elastic scaling is triggered in Serverless scenarios, images can be loaded directly from the local cache, avoiding remote repository pulls, improving startup performance and optimizing scaling response time.

By default: The system will select cache nodes within the cluster for image prewarm, and other nodes will pull images from these nodes via the internal network when starting instances or scaling.

## [​](https://novita.ai/docs/guides/gpu-image-prewarm\#operation-steps)  Operation Steps

1. **Navigate to the Image Prewarm page**.
2. **Create a prewarm task**:Click the **“Create Image Prewarm Task”** button to enter the task creation page and complete the following configurations:   - You can **manually enter the image address**, or **directly select a template** to load the images configured in the template.
   - If the image is located in a **non-public repository**, you need to select **pre-configured image repository authentication information**.
   - Select the target **prewarm region**.
   - Select the **card type** (GPU/accelerator card type) to be prewarmed; if not selected, the system will prewarm **all card types** by default.
   - Click **“Confirm Create”**, and the system will generate the image prewarm task.
3. **View task status**:You can view task progress and status in real-time in the **prewarm task list**.
4. **Create a template based on prewarmed images**:After prewarm is complete, you can directly **create an image template** based on the prewarmed images for subsequent instance or service deployment.

Notes:During the image prewarm process, images will be pulled in parallel across multiple nodes in the cluster. Please confirm in advance whether the source image repository has **access rate limiting policies**.If rate limiting or bandwidth restrictions exist, the prewarm task may remain in an executing state for an extended period or fail.

## [​](https://novita.ai/docs/guides/gpu-image-prewarm\#quota-limits)  Quota Limits

Currently, the image prewarm feature supports **up to 5 concurrent prewarm tasks** by default, and the **image pull quota limit per task is 100 GB**.If you need to adjust the number of concurrent tasks or the pull quota per task, please contact technical support for assistance with configuration.

Was this page helpful?

YesNo

[Jupyter Lab](https://novita.ai/docs/guides/gpu-instance-jupyterlab) [Overview](https://novita.ai/docs/guides/serverless-gpus-overview)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.