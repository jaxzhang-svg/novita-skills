---
url: "https://novita.ai/docs/guides/sandbox-template"
title: "Sandbox Templates - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-template#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Template

Sandbox Templates

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to create custom sandbox](https://novita.ai/docs/guides/sandbox-template#how-to-create-custom-sandbox)
- [1\. Install CLI](https://novita.ai/docs/guides/sandbox-template#1-install-cli)
- [2\. Initialize sandbox template](https://novita.ai/docs/guides/sandbox-template#2-initialize-sandbox-template)
- [3\. Customize novita.Dockerfile](https://novita.ai/docs/guides/sandbox-template#3-customize-novita-dockerfile)
- [4\. Build your sandbox template](https://novita.ai/docs/guides/sandbox-template#4-build-your-sandbox-template)
- [5\. Start your custom sandbox](https://novita.ai/docs/guides/sandbox-template#5-start-your-custom-sandbox)
- [How it works](https://novita.ai/docs/guides/sandbox-template#how-it-works)

Sandbox templates allow you to customize the sandbox environment to your needs.

Novita Agent Sandbox service has built-in public templates for out-of-the-box use. You can find these public templates in the [console](https://novita.ai/sandbox-console/template).

Before running the command-line related example code in this document, please refer to the [tutorial](https://novita.ai/docs/guides/sandbox-cli) to install the CLI and complete [authentication](https://novita.ai/docs/guides/sandbox-cli-auth).

To create a sandbox template, you specify the `novita.Dockerfile`. We then take this Dockerfile and create a new sandbox template from it and give you back a template ID.You can then use this template ID to create a new sandbox with the SDK based on the template you created.

## [​](https://novita.ai/docs/guides/sandbox-template\#how-to-create-custom-sandbox)  How to create custom sandbox

**Steps**

1. [Install CLI](https://novita.ai/docs/guides/sandbox-template#1-install-cli)
2. [Initialize sandbox template](https://novita.ai/docs/guides/sandbox-template#2-initialize-sandbox-template)
3. [Customize `novita.Dockerfile`](https://novita.ai/docs/guides/sandbox-template#3-customize-novita-dockerfile)
4. [Build your sandbox template](https://novita.ai/docs/guides/sandbox-template#4-build-your-sandbox-template)
5. [Start your custom sandbox](https://novita.ai/docs/guides/sandbox-template#5-start-your-custom-sandbox)

### [​](https://novita.ai/docs/guides/sandbox-template\#1-install-cli)  1\. Install CLI

Please refer to the [tutorial](https://novita.ai/docs/guides/sandbox-cli) for installation and complete [authentication](https://novita.ai/docs/guides/sandbox-cli-auth).

### [​](https://novita.ai/docs/guides/sandbox-template\#2-initialize-sandbox-template)  2\. Initialize sandbox template

The following command will create a basic `novita.Dockerfile` in the current directory.

Bash

Copy

```
novita-sandbox-cli template init
```

### [​](https://novita.ai/docs/guides/sandbox-template\#3-customize-novita-dockerfile)  3\. Customize `novita.Dockerfile`

Now you can customize your sandbox template by editing the `novita.Dockerfile` file.

novita.Dockerfile

Copy

```
# Make sure to use this base image
FROM novitalabs/code-interpreter:latest

# Install some Python packages
RUN pip install cowsay
```

### [​](https://novita.ai/docs/guides/sandbox-template\#4-build-your-sandbox-template)  4\. Build your sandbox template

Now you can build your sandbox template. We’ll use Docker and the CLI.
What is going to happen is that CLI will call Docker to build the image and then push it to the Novita cloud.
Then we convert the Docker image to a micro VM that can be then launched as a sandbox with our SDK.

Bash

Copy

```
novita-sandbox-cli template build -c "/root/.jupyter/start-up.sh"
```

This process will take a moment. In the end, you’ll see your template ID that you’ll need to use to create a sandbox with the SDK.

### [​](https://novita.ai/docs/guides/sandbox-template\#5-start-your-custom-sandbox)  5\. Start your custom sandbox

Now you can use the template ID to create a sandbox with the SDK.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Your template ID from the previous step
const templateID = 'id-of-your-template'

// Pass the template ID to the `Sandbox.create` method
const sandbox = await Sandbox.create(templateID)

// The template installed cowsay, so we can use it
const result = await sandbox.runCode(`
import cowsay
cowsay.say('Hello!')`)

console.log(result)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-template\#how-it-works)  How it works

Every time you are building a sandbox template, we create a container based on the `novita.Dockerfile` file you create in the process.
We extract the container’s filesystem, do provisioning and configuration (e.g. installing required dependencies), and start a sandbox.Then, these steps happen:

1. We take the running sandbox.
2. (Only if you specified the [start command](https://novita.ai/docs/guides/sandbox-template-start-cmd), otherwise this step is skipped) Execute the start command.
3. Wait for readiness (by default 20 seconds if start command is specified, otherwise immediately ready). Readiness check can be configured using [ready command](https://novita.ai/docs/guides/sandbox-template-ready-cmd).
4. Snapshot the sandbox and make it ready for you to spawn it with the SDK.

We call this sandbox snapshot a _sandbox template_.

Snapshots are saved running sandboxes. We serialize and save the whole sandbox’s filesystem together with all the running processes in a way that can be loaded later.This allows us to load the sandbox in a few hundred milliseconds any time later with all the processes already running and the filesystem exactly as it was.

Was this page helpful?

YesNo

[Idle Timeout](https://novita.ai/docs/guides/sandbox-idle-timeout) [Start Command](https://novita.ai/docs/guides/sandbox-template-start-cmd)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.