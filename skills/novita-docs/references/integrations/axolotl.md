---
url: "https://novita.ai/docs/guides/axolotl"
title: "Run Axolotl on Novita AI - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/axolotl#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Template Guide

Run Axolotl on Novita AI

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Use Axolotl:main-latest on Novita AI](https://novita.ai/docs/guides/axolotl#how-to-use-axolotlmain-latest-on-novita-ai)

Axolotl offers a robust, flexible framework for training LLMs using advanced techniques, supporting various model architectures and training strategies. Ideal for researchers and developers, Axolotl combined with Novita AI’s powerful, hardware-free infrastructure streamlines workflows, removing local hardware constraints.This guide provides a step-by-step process to deploy and run Axolotl on Novita AI, unlocking the full potential of your AI model training projects.

## [​](https://novita.ai/docs/guides/axolotl\#how-to-use-axolotlmain-latest-on-novita-ai)  How to Use Axolotl:main-latest on Novita AI

Step 1: Access [**the GPU Instance Console**](https://novita.ai/gpus)

- Click `Get Started` to access the GPU Instance console.

![Step1 Accessthe GPU Instance Console Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step1-AccesstheGPUInstanceConsole.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=28625df2e2e6f1232c8107762cfc6ed6)

Step 2: Choose a Template and GPU Type

- Browse various official templates and GPU card options.
- Select [**the Axolotl:main-latest template**](https://novita.ai/gpus-console?templateId=311).
- Click `Deploy` under the 4090 GPU card to proceed to the instance creation page.

![Step2 Choosea Templateand GPU Type Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step2-ChooseaTemplateandGPUType.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=3e15b2cbd4b915cd6c6df292fca60e29)

Step 3: Adjust Disk and Configuration Parameters

- In the `Disk` section, adjust the size of the system disk and local disk.
- In the `Configuration` section, modify settings such as the image, startup commands, ports, and environment variables.
- Check the box for Start Jupyter Notebook to launch Jupyter.

![Step3 Adjust Diskand Configuration Parameters Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step3-AdjustDiskandConfigurationParameters.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=5f7ad58a188a14c676e26db9b05ba2d8)

Step 4: Confirm Configuration and Deploy

- Review the instance configuration and costs on the confirmation page.
- Click `Deploy` to start the deployment process.

![Step4 Confirm Configurationand Deploy Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step4-ConfirmConfigurationandDeploy.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=d7cc24bc299612b7f5e94a7f9578ebf5)

Step 5: Wait for Deployment to Complete

- Wait for the instance to finish deploying.

![Step5 Waitfor Deploymentto Complete Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step5-WaitforDeploymenttoComplete.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=d1bde3687d206d330aa7ae8bd07356cf)

Step 6: Manage and Monitor Instances

- Once deployment is complete, the system will redirect you to the `Instance Management` page.
- Locate your newly created instance, which will initially show a Pulling status (indicating the image is being downloaded).
- Click the small arrow on the right side of the instance to view details.
- Monitor the image pull progress. Once complete, the instance will transition to Running status.
- Click `Logs` to view deployment logs.

### [​](https://novita.ai/docs/guides/axolotl\#)  ![Step6 Manageand Monitor Instances Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step6-ManageandMonitorInstances.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=ea8a23135307454deb057dfb51f32652)

Step 7: Check Instance Logs

- Go to the `Instance Logs` tab to check if the service is starting.
- Wait for the service to finish initializing.

### [​](https://novita.ai/docs/guides/axolotl\#)  ![Step7 Check Instance Logs Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step7-CheckInstanceLogs.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=5aece56043a7a85239b9c168b15b442f)

Step 8: Connect to Jupyter Lab

- Close the logs page.
- Click `Connect` to open the connection information page.
- Locate the `Connection Options` section and click `Connect to Jupyter Lab` to access the Jupyter interface.

### [​](https://novita.ai/docs/guides/axolotl\#)  ![Step8 Connectto Jupyter Lab Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step8-ConnecttoJupyterLab.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=cf66856fabd630d6f248d7959c8ba7ac)

Step 9: Access Jupyter Lab

- Wait for the Jupyter Lab web interface to load.
- Open `Terminal` to run an official example and verify the service is working correctly.

### [​](https://novita.ai/docs/guides/axolotl\#)  ![Step9 Access Jupyter Lab Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step9-AccessJupyterLab.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=c36adb44cdaf47173b8e301e97547332)

Step 10: Run a Fine-Tuning Example

- Execute the official example code to perform a fine-tuning task.

Copy

```
# Fetch axolotl examples
axolotl fetch examples

# Or, specify a custom path
axolotl fetch examples --dest path/to/folder

# Train a model using LoRA
axolotl train examples/llama-3/lora-1b.yml
```

**Note:** You can’t change the default mount path for the network volume in the console. It can only be set when creating an instance or via OpenAPI. Set your desired mount path during instance creation when attaching a volume.

Was this page helpful?

YesNo

[Run Kohya\_SS GUI on Novita AI](https://novita.ai/docs/guides/kohya_ss-gui) [LLM API Metrics](https://novita.ai/docs/guides/observability-llm-api-metrics)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Step1 Accessthe GPU Instance Console Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step1-AccesstheGPUInstanceConsole.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=89df652fd7748c832c20da753e1b0661)

![Step2 Choosea Templateand GPU Type Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step2-ChooseaTemplateandGPUType.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=b09ba2579715f6ab21fee4de3d5a642e)

![Step3 Adjust Diskand Configuration Parameters Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step3-AdjustDiskandConfigurationParameters.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=a2f2acab5bb039005cf7d038eb5dd2d3)

![Step4 Confirm Configurationand Deploy Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step4-ConfirmConfigurationandDeploy.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=07c54a4c3133af0242ea50fbcf3e561a)

![Step5 Waitfor Deploymentto Complete Pn](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step5-WaitforDeploymenttoComplete.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=8a1db369c018144ebf55a6e7b72f9c5d)