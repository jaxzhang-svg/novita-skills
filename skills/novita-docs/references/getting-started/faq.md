---
url: "https://novita.ai/docs/guides/faq"
title: "FAQ - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/faq#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Resources

FAQ

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [GPU Instance](https://novita.ai/docs/guides/faq#gpu-instance)
- [1\. How to check the price of the GPU instances?](https://novita.ai/docs/guides/faq#1-how-to-check-the-price-of-the-gpu-instances)
- [2\. When does the billing for GPU instance start?](https://novita.ai/docs/guides/faq#2-when-does-the-billing-for-gpu-instance-start)
- [3\. Introduction of container disk, volume disk, and network volume.](https://novita.ai/docs/guides/faq#3-introduction-of-container-disk-volume-disk-and-network-volume)
- [4\. Why can’t the instance be restarted after it stops?](https://novita.ai/docs/guides/faq#4-why-can%E2%80%99t-the-instance-be-restarted-after-it-stops)
- [5\. How to handle abnormal instance status?](https://novita.ai/docs/guides/faq#5-how-to-handle-abnormal-instance-status)
- [6\. No instance specifications with a specified CUDA version.](https://novita.ai/docs/guides/faq#6-no-instance-specifications-with-a-specified-cuda-version)
- [7\. What is the maximum CUDA version supported by the platform?](https://novita.ai/docs/guides/faq#7-what-is-the-maximum-cuda-version-supported-by-the-platform)
- [8\. How to diagnose the “Save Image” failure?](https://novita.ai/docs/guides/faq#8-how-to-diagnose-the-%E2%80%9Csave-image%E2%80%9D-failure)
- [9\. Can dedicated IP be supported?](https://novita.ai/docs/guides/faq#9-can-dedicated-ip-be-supported)
- [10\. How to check the GPU usage of the instance?](https://novita.ai/docs/guides/faq#10-how-to-check-the-gpu-usage-of-the-instance)
- [Payments](https://novita.ai/docs/guides/faq#payments)
- [1\. How can I avoid top-up failures?](https://novita.ai/docs/guides/faq#1-how-can-i-avoid-top-up-failures)

Here are some frequently asked questions about Novita AI. Before contacting our support team, please check the FAQs below to help you quickly find solutions.

## [​](https://novita.ai/docs/guides/faq\#gpu-instance)   GPU Instance

### [​](https://novita.ai/docs/guides/faq\#1-how-to-check-the-price-of-the-gpu-instances)  1\. How to check the price of the GPU instances?

You can check the price of GPU instances and their configurations (container disk, volume disk, network volume, etc.) on the [Pricing Page](https://novita.ai/gpu-instance/pricing).

### [​](https://novita.ai/docs/guides/faq\#2-when-does-the-billing-for-gpu-instance-start)  2\. When does the billing for GPU instance start?

Billing starts when the instance status changes to “ **Pulling**” status.

### [​](https://novita.ai/docs/guides/faq\#3-introduction-of-container-disk-volume-disk-and-network-volume)  3\. Introduction of container disk, volume disk, and network volume.

- **Container Disk**  - Does not support dynamic expansion, can only specify capacity when creating an instance;
  - Mount directory: `/` (cannot be customized);
  - Data will be saved when saving the image;
  - Supports **60GB** free quota, charges will apply for the excess part, for details refer to: [Billing Instructions](https://novita.ai/docs/guides/gpu-instance-pricing)
- **Volume Disk**  - Supports dynamic expansion;
  - Default mount directory: `/workspace` (customizable);
  - Data will **not** be saved when saving the image;
  - Read and write speed is the same as the container disk;
  - Volume Disk capacity requires additional charges, for details refer to: [Billing Instructions](https://novita.ai/docs/guides/gpu-instance-pricing).
- **Network Volume**  - Supports dynamic expansion;
  - Default mount directory: `/network` (customizable);
  - Network volume has an independent lifecycle, unrelated to the instance, even if the instance is deleted, the network volume data still exists;
  - Overall read and write speed is slower than the container disk or volume disk (depending on specific usage);
  - Network volume capacity requires additional charges, for details refer to: [Billing Instructions](https://novita.ai/docs/guides/gpu-instance-pricing)

### [​](https://novita.ai/docs/guides/faq\#4-why-can%E2%80%99t-the-instance-be-restarted-after-it-stops)  4\. Why can’t the instance be restarted after it stops?

After the instance stops, the resources belonging to the instance may have been preempted. In this case, it is recommended to first [save the image](https://novita.ai/docs/guides/gpu-instance-save-image) based on the target instance, and then create a new instance based on the saved image before.

After saving the instance image, the data on the container disk will be saved with the image, but the data on the volume disk will not. It is recommended to use the [network volume](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume) for data with high persistence requirements.

### [​](https://novita.ai/docs/guides/faq\#5-how-to-handle-abnormal-instance-status)  5\. How to handle abnormal instance status?

First, try to troubleshoot the problem through the “System Logs” and “Instance Logs” of the instance. If the problem cannot be resolved, you can [contact us](https://discord.gg/YyPRAzwp7P).

![](https://cf-images.novitai.com/docs/v2/gpu_instance_faq_logs.png/docs)

### [​](https://novita.ai/docs/guides/faq\#6-no-instance-specifications-with-a-specified-cuda-version)  6\. No instance specifications with a specified CUDA version.

CUDA versions are backward compatible. For example, if your service relies on CUDA version 12.1, you can choose an instance specification with a CUDA version greater than or equal to 12.1.

### [​](https://novita.ai/docs/guides/faq\#7-what-is-the-maximum-cuda-version-supported-by-the-platform)  7\. What is the maximum CUDA version supported by the platform?

You can check the allowed CUDA versions in the “Filter” module at the bottom right corner of the [Explore](https://novita.ai/gpu-instance/console/explore).

![](https://cf-images.novitai.com/docs/v2/gpu_instance_faq_filter_cuda.png/docs)

### [​](https://novita.ai/docs/guides/faq\#8-how-to-diagnose-the-%E2%80%9Csave-image%E2%80%9D-failure)  8\. How to diagnose the “Save Image” failure?

First, try to troubleshoot the problem through the logs of the [“Save Image”](https://novita.ai/gpu-instance/console/jobs) task. If you are saving the image to a private repository address, please check whether your [Container Registry Auth Configuration](https://novita.ai/gpu-instance/console/settings) is correct. If the problem cannot be resolved, you can [contact us](https://discord.gg/YyPRAzwp7P).

![](https://cf-images.novitai.com/docs/v2/gpu_instance_faq_jobs_logs.png/docs)

### [​](https://novita.ai/docs/guides/faq\#9-can-dedicated-ip-be-supported)  9\. Can dedicated IP be supported?

Yes. Currently, this capability is not open to the public. If you have such requirements, please [contact us](https://discord.gg/YyPRAzwp7P).

### [​](https://novita.ai/docs/guides/faq\#10-how-to-check-the-gpu-usage-of-the-instance)  10\. How to check the GPU usage of the instance?

Due to the PID isolation of Docker containers, the `nvidia-smi` command cannot be used to view the process. You can install the `py3nvml` library and use the shell command to check the GPU usage:

Copy

```
# Install the py3nvml library.
$ pip install py3nvml
# Check the GPU usage.
$ py3smi
Fri Sep 20 12:17:39 2024
+-----------------------------------------------------------------------------+
| NVIDIA-SMI                        Driver Version: 550.54.14                 |
+---------------------------------+---------------------+---------------------+
| GPU Fan  Temp Perf Pwr:Usage/Cap|        Memory-Usage | GPU-Util Compute M. |
+=================================+=====================+=====================+
|   5 35%   28C    8   11W / 450W |   353MiB / 24564MiB |       0%    Default |
+---------------------------------+---------------------+---------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
| GPU        Owner      PID      Uptime  Process Name                   Usage |
+=============================================================================+
+-----------------------------------------------------------------------------+
```

## [​](https://novita.ai/docs/guides/faq\#payments)   Payments

### [​](https://novita.ai/docs/guides/faq\#1-how-can-i-avoid-top-up-failures)  1\. How can I avoid top-up failures?

Top-up failures are generally caused by two main reasons:

- **Rejection from the card issuer.** This may occur for the following reasons. Please check or contact your card issuer for details:  - The corresponding payment channel is not activated.
  - The credit card has expired or been frozen.
  - The credit card balance is insufficient.
  - The card number is incorrect.
  - The security code is incorrect.
- **Risk control measures from the payment channel.** Please check and make any necessary adjustments:  - The device ID is associated with a high number of cards.
  - The number of cards declined using this email address is very high.
  - The time since this card was first seen on the Stripe network with this device ID is very short.
  - The authorization rate associated with this email address is very low.
  - The name on the email address does not match the name on the card.

Was this page helpful?

YesNo

[Team](https://novita.ai/docs/guides/team)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.