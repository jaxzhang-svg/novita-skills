---
url: "https://novita.ai/docs/guides/kohya_ss-gui"
title: "Run Kohya_SS GUI on Novita AI - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/kohya_ss-gui#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Template Guide

Run Kohya\_SS GUI on Novita AI

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Run Kohya\_ss: GUI on Novita AI](https://novita.ai/docs/guides/kohya_ss-gui#how-to-run-kohya-ss-gui-on-novita-ai)

Kohya\_SS GUI offers a user-friendly Gradio interface for Kohya’s Stable Diffusion trainers. It has strong Linux support through community installations, with limited but possible macOS compatibility. Combining Novita AI with Kohya\_SS GUI streamlines AI model training workflows, removing hardware limitations and creating an optimized environment for diffusion model fine-tuning.This guide will show you how to deploy and run Kohya\_SS GUI on Novita AI’s platform.

## [​](https://novita.ai/docs/guides/kohya_ss-gui\#how-to-run-kohya-ss-gui-on-novita-ai)  How to Run Kohya\_ss: GUI on Novita AI

Step 1: Access GPU Instance Control Panel

- Navigate to the `GPU menu` in the top navigation bar.
- Click `Get Started` to enter the GPU Instance control interface.

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step1AccessGPUInstanceControlPanel.jpg](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step1AccessGPUInstanceControlPanel.jpg?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=ae638187047dd0adf6700fbeedd7facd)

Step 2: Select Kohya\_ss:GUI Template

- Locate and select the `Kohya_ss:GUI` official template.
- Click `Deploy` button under the 4090 GPU card option to enter the instance creation page.

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step2SelectKohya_ssGUITemplate.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step2SelectKohya_ssGUITemplate.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=07ef1cf322b09306119cd9235be8a7d4)

Step 3: Configure Disk Parameters and Review Configuration Settings

- On the left panel, adjust the disk settings as needed:
  - Set appropriate system disk size;
  - Configure local disk capacity based on your storage needs.
- Check the right panel for configuration options:
  - Verify image settings are correct;
  - Confirm startup commands are properly configured;
  - Ensure ports and environment variables meet your requirements.
- Confirm all settings are correct and then click the `Next` button to advance to the final confirmation page.

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step3ConfigureDiskParametersandReviewConfigurationSettings.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step3ConfigureDiskParametersandReviewConfigurationSettings.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=682f057986ba5c59d5b4f87db9c51761)

Step 4: Proceed to Confirmation and Deploy Your Instance

- Review the complete instance configuration summary.
- Verify the cost details displayed on this page.
- Click `Deploy` to initiate the deployment process.

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step4ProceedtoConfirmationandDeployYourInstance.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step4ProceedtoConfirmationandDeployYourInstance.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=66846408e8d230a9e3c2497a86944ed8)

Step 5: Wait as the System Creates Your Instance

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step5WaitastheSystemCreatesYourInstance.jpg](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step5WaitastheSystemCreatesYourInstance.jpg?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=2a4fd55b0bc5d39997cdb10ace54d88b)

Step 6: Monitor Deployment Progress and Track Image Download

- After deployment, the system will automatically redirect you to the instance management page.
- Your new instance will display `Pulling` status while downloading the image.
- After clicking the arrow icon next to your instance name, the instance details panel will be expanded with the image download progress in real-time.
- Once image downloading completes, instance will change status from `Pulling` to `Running`.

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step6MonitorDeploymentProgressandTrackImageDownload.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step6MonitorDeploymentProgressandTrackImageDownload.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=8f2d5e2bc6ba2f1ef3059e11c9a9745b)

Step 7: Check Instance Logs

- Click the `Logs` button on your instance and select `Instance Logs` from the available options.
- Observe the Kohya\_ss service startup process in the logs and wait for confirmation that all services have loaded successfully.

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step7CheckInstanceLogs.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step7CheckInstanceLogs.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=1c0d285d27092766146df663e8fe3e98)

Step 8: Connect to Your Instance

- Close the logs view when ready and click the `Connect` button to view connection options.
- View various connection methods: SSH, TCP, and HTTP of your instance.
- For Kohya\_SS GUI access, focus on the HTTP connection details. Therefore, in the Connection Options section, click `Connect to HTTP Service` and access to a new browser tab or window.

### [​](https://novita.ai/docs/guides/kohya_ss-gui\#)  ![images/Step8-1ConnecttoYourInstance.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step8-1ConnecttoYourInstance.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=6cc3f1846be91a2d099871b98da23229)

![images/Step8-2ConnecttoYourInstance.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step8-2ConnecttoYourInstance.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=3493475ecd61abe9f68b1a1becaf4251)

Step 9: Begin Using Your Instance

- Allow a few moments for the web interface to fully load and get ready to run Kohya\_ss:GUI on Novita AI.

![images/Step9BeginUsingYourInstance.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step9BeginUsingYourInstance.png?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=777e1b0937e91ac1d64f468fe8b71938)

Was this page helpful?

YesNo

[How to Explore the Templates in Novita?](https://novita.ai/docs/guides/template_library) [Run Axolotl on Novita AI](https://novita.ai/docs/guides/axolotl)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![images/Step8-2ConnecttoYourInstance.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step8-2ConnecttoYourInstance.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=8c643a75b05c4acef51e106fe13c078e)

![images/Step9BeginUsingYourInstance.png](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/Step9BeginUsingYourInstance.png?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=8f7a8faf13bfa2cca103e90b159c15d4)