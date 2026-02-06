---
url: "https://novita.ai/docs/guides/sandbox-persistence"
title: "Sandbox Persistence - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-persistence#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Sandbox Persistence

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Pausing sandbox](https://novita.ai/docs/guides/sandbox-persistence#pausing-sandbox)
- [Resuming sandbox](https://novita.ai/docs/guides/sandbox-persistence#resuming-sandbox)
- [Listing paused sandboxes](https://novita.ai/docs/guides/sandbox-persistence#listing-paused-sandboxes)
- [Removing paused sandboxes](https://novita.ai/docs/guides/sandbox-persistence#removing-paused-sandboxes)
- [Sandbox’s timeout](https://novita.ai/docs/guides/sandbox-persistence#sandbox%E2%80%99s-timeout)
- [Network](https://novita.ai/docs/guides/sandbox-persistence#network)

The sandbox persistence allows you to pause your sandbox and resume it later from the same state it was in when you paused it.This includes not only state of the sandbox’s filesystem but also the sandbox’s memory. This means all running processes, loaded variables, data, etc.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

Please note:

- It takes about 4 seconds per 1 GB RAM to pause the sandbox.
- It takes about 1 second to resume the sandbox.
- Sandbox can be used up to 30 days.


After 30 days from the initial sandbox create call, the data may be deleted and you will not be able to resume it. Attempting to resume a sandbox that was deleted or does not exist will result in the NotFoundError in the JavaScript SDK or the NotFoundException in the Python SDK.

## [​](https://novita.ai/docs/guides/sandbox-persistence\#pausing-sandbox)  Pausing sandbox

When you pause a sandbox, both the sandbox’s [filesystem](https://novita.ai/docs/guides/sandbox-filesystem) and memory state will be saved. This includes all the files in the sandbox’s filesystem and all the running processes, loaded variables, data, etc.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()
console.log('Sandbox created', sandbox.sandboxId)

// Pause the sandbox.
// You can save the sandbox ID in your database
// to resume the sandbox later
const result = await sandbox.betaPause()
console.log('Sandbox paused', sandbox.sandboxId, result)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-persistence\#resuming-sandbox)  Resuming sandbox

When you resume a sandbox, it will be in the same state it was in when you paused it.
This means that all the files in the sandbox’s filesystem will be restored and all the running processes, loaded variables, data, etc. will be restored.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()
console.log('Sandbox created', sandbox.sandboxId)

// Pause the sandbox.
// You can save the sandbox ID in your database
// to resume the sandbox later
const result = await sandbox.betaPause()
console.log('Sandbox paused', sandbox.sandboxId, result)

// Resume the sandbox from the same state.
const resumedSandbox = await sandbox.connect()
console.log('Sandbox resumed', resumedSandbox.sandboxId)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-persistence\#listing-paused-sandboxes)  Listing paused sandboxes

You can list all paused sandboxes by calling the `Sandbox.list` method and supplying the `state` query parameter.
More information about using the method can be found in [List Sandboxes](https://novita.ai/docs/guides/sandbox-list).

JavaScript & TypeScript

Python

Copy

```
import { Sandbox, SandboxInfo } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// List all paused sandboxes.
const paginator = Sandbox.list({ query: { state: ['paused'] } })

// Get all paused sandboxes.
const sandboxes: SandboxInfo[] = []
while (paginator.hasNext) {
  const items = await paginator.nextItems()
  sandboxes.push(...items)
}

console.log('all paused sandboxes', sandboxes)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-persistence\#removing-paused-sandboxes)  Removing paused sandboxes

You can remove paused sandboxes by calling the `kill` method on the sandbox instance.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()
console.log('Sandbox created', sandbox.sandboxId)

// Pause the sandbox.
await sandbox.betaPause()

// Kill the paused sandbox.
await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-persistence\#sandbox%E2%80%99s-timeout)  Sandbox’s timeout

When you resume a sandbox, the sandbox’s timeout is reset to the default timeout of a sandbox - 5 minutes.You can pass a custom timeout to the `Sandbox.connect()` method like this:

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const connectedSandbox = await Sandbox.connect(sandbox.sandboxId, { timeoutMs: 60 * 1000 })
console.log('Sandbox connected', connectedSandbox.sandboxId)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-persistence\#network)  Network

If you have a service (for example a server) running inside your sandbox and you pause the sandbox, the service won’t be accessible from the outside and all the clients will be disconnected.
If you resume the sandbox, the service will be accessible again but you need to connect clients again.

Was this page helpful?

YesNo

[Sandbox Lifecycle](https://novita.ai/docs/guides/sandbox-lifecycle) [Sandbox Metrics](https://novita.ai/docs/guides/sandbox-metrics)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.