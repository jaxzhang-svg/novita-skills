---
url: "https://novita.ai/docs/guides/sandbox-metadata"
title: "Sandbox Metadata - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-metadata#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Sandbox Metadata

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Filtering sandboxes by metadata](https://novita.ai/docs/guides/sandbox-metadata#filtering-sandboxes-by-metadata)

Metadata is a way to attach arbitrary key-value pairs for a sandbox.This is useful in various scenarios, for example:

- Associate a sandbox with a user session.
- Store custom user data for a sandbox like API keys.
- Associate a sandbox with a user ID and [connect to it later](https://novita.ai/docs/guides/sandbox-connect).

You specify metadata when creating a sandbox and can access it later through listing running sandboxes with `Sandbox.list()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create sandbox with metadata.
const sandbox = await Sandbox.create({
  metadata: {
    userId: '123',
  },
})

// List running sandboxes and access metadata.
const runningSandboxesPaginator = await Sandbox.list({
  query: {
    state: ["running"],
  },
})

const runningSandboxes = await runningSandboxesPaginator.nextItems()

console.log("runningSandboxes[0].metadata: ", runningSandboxes[0].metadata)

// Example output:
// { userId: '123' }

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-metadata\#filtering-sandboxes-by-metadata)  Filtering sandboxes by metadata

You can also filter sandboxes by metadata, you can find more about it [here](https://novita.ai/docs/guides/sandbox-list#filtering-sandboxes).

Was this page helpful?

YesNo

[Sandbox Metrics](https://novita.ai/docs/guides/sandbox-metrics) [Environment variables](https://novita.ai/docs/guides/sandbox-environment-variables)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.