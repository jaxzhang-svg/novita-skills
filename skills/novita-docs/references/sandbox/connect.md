---
url: "https://novita.ai/docs/guides/sandbox-connect"
title: "Connect to running sandbox - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-connect#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Connect to running sandbox

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Get the sandbox ID](https://novita.ai/docs/guides/sandbox-connect#1-get-the-sandbox-id)
- [2\. Connect to the sandbox](https://novita.ai/docs/guides/sandbox-connect#2-connect-to-the-sandbox)

If you have a running sandbox, you can connect to it using the `Sandbox.connect()` method and then start controlling it with our SDK.This is useful if you want to, for example, reuse the same sandbox instance for the same user after a short period of inactivity.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

## [​](https://novita.ai/docs/guides/sandbox-connect\#1-get-the-sandbox-id)  1\. Get the sandbox ID

To connect to a running sandbox, you first need to retrieve its ID. You can do this by calling the `Sandbox.list()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from "novita-sandbox/code-interpreter"

// Get all running sandboxes
const runningSandboxesPaginator = await Sandbox.list({
  query: {
    state: ["running"],
  },
})

const runningSandboxes = await runningSandboxesPaginator.nextItems()
if (runningSandboxes.length === 0) {
  throw new Error("No running sandboxes found")
}
const runningSandboxId = runningSandboxes[0].sandboxId

console.log(`got a running sandbox: ${runningSandboxId}`)
```

## [​](https://novita.ai/docs/guides/sandbox-connect\#2-connect-to-the-sandbox)  2\. Connect to the sandbox

Now that you have the sandbox ID, you can connect to the sandbox using the `Sandbox.connect()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from "novita-sandbox/code-interpreter"

// Get all running sandboxes
const runningSandboxesPaginator = await Sandbox.list({
  query: {
    state: ["running"],
  },
})

const runningSandboxes = await runningSandboxesPaginator.nextItems()
if (runningSandboxes.length === 0) {
  throw new Error("No running sandboxes found")
}
const runningSandboxId = runningSandboxes[0].sandboxId

// connect to the sandbox.
const sandbox = await Sandbox.connect(runningSandboxId)
console.log("connected to sandbox: ", sandbox.sandboxId)

// Now you can use the sandbox as usual
// ...
```

Was this page helpful?

YesNo

[List sandboxes](https://novita.ai/docs/guides/sandbox-list) [Internet access](https://novita.ai/docs/guides/sandbox-internet-access)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.