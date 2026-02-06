---
url: "https://novita.ai/docs/guides/gpu-instance-save-image"
title: "Save Image - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/gpu-instance-save-image#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Guides

Save Image

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

[Novita AI](https://novita.ai/) GPU instance supports the “Save Image” feature, which allows you to export the current instance as a Docker image.For **instance migration scenarios**, you can first save the current instance as an image, and then specify the exported Docker image address when creating an instance in another region.

1. To ensure the integrity of the exported Docker image, please make sure the instance has been exited. You can also stop the instance by clicking “More Operations - Stop”.
2. For instances in the “exited” state, you can click the “More Operations - Save Image” button at the bottom right corner of the instance to save the image.
3. In the pop-up form, input the “Image Path”, for private repositories, include the “Container Registry Credentials”, and then click the “Save” button.
4. You can view the progress of the “Save Image” job on the [Jobs](https://novita.ai/gpus-console/jobs) page.

Was this page helpful?

YesNo

[Upgrade Instance](https://novita.ai/docs/guides/gpu-instance-upgrade-instance) [How to Choose a GPU?](https://novita.ai/docs/guides/gpu-instance-choose-a-gpu)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.