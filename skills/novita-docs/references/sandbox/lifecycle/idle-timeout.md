---
url: "https://novita.ai/docs/guides/sandbox-idle-timeout"
title: "Idle Timeout - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-idle-timeout#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Idle Timeout

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

The following features require [installing the Beta SDK & CLI](https://novita.ai/docs/guides/sandbox-sdk-and-cli#install-beta-sdk). Please note that beta features are subject to change and may be less stable than production releases. If you encounter any issues while using these features, please [contact us](https://meetings-na2.hubspot.com/junyu).

We can set a timeout for each sandbox (refer to [Lifecycle Management](https://novita.ai/docs/guides/sandbox-lifecycle)). When the sandbox running time reaches the timeout, the sandbox will be automatically killed. However, in some scenarios, we cannot determine the expected running time of the sandbox, but we want the sandbox to be automatically killed when not in use to save costs. In this case, you can use the **“Idle Timeout”** feature.When creating a sandbox, we can set the `idle_timeout` parameter in metadata (unit: seconds, minimum is 60) to enable the **“Idle Timeout”** feature. Once enabled, when the system detects that the sandbox has no operations (executing commands, running code, file operations, etc.) within the specified time range, the system will kill the sandbox instance. Otherwise, the sandbox will continue to run until it reaches the maximum time limit for sandbox operation (currently default is 3600 seconds).Please refer to the following example:

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter';

const sandbox = await Sandbox.create(
    {
        metadata: { "idle_timeout": "60" }
    }
);
console.log('Sandbox created', sandbox.sandboxId)

const result = await sandbox.commands.run('ls -al')
console.log('Command result', result)

await new Promise(resolve => setTimeout(resolve, 90000));

const isRunning = await sandbox.isRunning()
console.log('Sandbox is running', isRunning)

await sandbox.kill()
```

Was this page helpful?

YesNo

[Sandbox Clone](https://novita.ai/docs/guides/sandbox-clone) [Sandbox Templates](https://novita.ai/docs/guides/sandbox-template)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.