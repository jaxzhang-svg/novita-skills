---
url: "https://novita.ai/docs/guides/sandbox-list"
title: "List sandboxes - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-list#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

List sandboxes

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Filtering sandboxes](https://novita.ai/docs/guides/sandbox-list#filtering-sandboxes)
- [Listing sandboxes](https://novita.ai/docs/guides/sandbox-list#listing-sandboxes)
- [Filtering sandboxes](https://novita.ai/docs/guides/sandbox-list#filtering-sandboxes-2)
- [Advanced pagination](https://novita.ai/docs/guides/sandbox-list#advanced-pagination)

You can list sandboxes using the `Sandbox.list()` method.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

Once you have information about running sandbox, you can [connect](https://novita.ai/docs/guides/sandbox-connect) to it using the `Sandbox.connect()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create a sandbox.
const sandbox = await Sandbox.create({
  metadata: {
    name: 'My Sandbox',
  },
})

// List all running sandboxes.
const runningSandboxesPaginator = await Sandbox.list({
  query: {
    state: ["running"],
  },
})

const runningSandboxes = await runningSandboxesPaginator.nextItems()
const runningSandbox = runningSandboxes[0]

console.log('Running sandbox metadata:', runningSandbox.metadata)
console.log('Running sandbox id:', runningSandbox.sandboxId)
console.log('Running sandbox started at:', runningSandbox.startedAt)
console.log('Running sandbox template id:', runningSandbox.templateId)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-list\#filtering-sandboxes)  Filtering sandboxes

You can filter sandboxes by specifying [Metadata](https://novita.ai/docs/guides/sandbox-metadata) key value pairs.
Specifying multiple key value pairs will return sandboxes that match all of them.This can be useful when you have a large number of sandboxes and want to find only specific ones. The filtering is performed on the server.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create a sandbox with metadata.
const sandbox = await Sandbox.create({
  metadata: {
    env: 'dev',
    app: 'my-app',
    userId: '123',
  },
})

// List all running sandboxes that has `userId` key with value `123` and `env` key with value `dev`.
const runningSandboxesPaginator = await Sandbox.list({
  query: {
    metadata: { userId: '123', env: 'dev' },
  },
})

const runningSandboxes = await runningSandboxesPaginator.nextItems()
for (const runningSandbox of runningSandboxes) {
  console.log(`list running sandbox (${runningSandbox.sandboxId}) metadata:`, runningSandbox.metadata)
}

await sandbox.kill()
```

### [​](https://novita.ai/docs/guides/sandbox-list\#listing-sandboxes)  Listing sandboxes

The `Sandbox.list()` method now supports pagination. In the [advanced pagination](https://novita.ai/docs/guides/sandbox-list#advanced-pagination) section, you can find more information about pagination techniques using the updated method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const paginator = Sandbox.list()

// Get the first page of sandboxes (running and paused)
const firstPage = await paginator.nextItems()
if (paginator.hasNext) {
    // Get the next page of sandboxes
    const nextPage = await paginator.nextItems()
}

await sandbox.kill()
```

### [​](https://novita.ai/docs/guides/sandbox-list\#filtering-sandboxes-2)  Filtering sandboxes

Filter sandboxes by their current state. The state parameter can contain either “ **running**” for running sandboxes or “ **paused**” for paused sandboxes, or both.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// List all sandboxes that are running or paused.
const paginator = Sandbox.list({
  query: {
    state: ['running', 'paused'],
  },
})

const sandboxes = await paginator.nextItems()

await sandbox.kill()
```

Filter sandboxes by the metadata key value pairs specified during Sandbox creation.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create sandbox with metadata.
const sandbox = await Sandbox.create({
  metadata: {
    env: 'dev',
    app: 'my-app',
    userId: '123',
  },
})

// List all sandboxes that has `userId` key with value `123` and `env` key with value `dev`.
const paginator = Sandbox.list({
  query: {
    metadata: { userId: '123', env: 'dev' },
  },
})

const sandboxes = await paginator.nextItems()

await sandbox.kill()
```

### [​](https://novita.ai/docs/guides/sandbox-list\#advanced-pagination)  Advanced pagination

For more granular pagination, you can set custom per-page item limit (default and maximum is **1000**) and specify an offset parameter (`nextToken` or `next_token`) to start paginating from.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const paginator = Sandbox.list({
  limit: 1000,
  // nextToken: '<base64-encoded-token>',
})

// Fetch the next page
await paginator.nextItems()

// Additional paginator properties
// Whether there is a next page
console.log("paginator.hasNext: ", paginator.hasNext)

// Next page token
console.log("paginator.nextToken: ", paginator.nextToken)

await sandbox.kill()
```

You can fetch all pages by looping through the paginator while checking if there is a next page (using `hasNext` or `has_next` property) and fetching until there are no more pages left to fetch:

JavaScript & TypeScript

Python

Copy

```
import { Sandbox, SandboxInfo } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const paginator = Sandbox.list()

const sandboxes: SandboxInfo[] = []
while (paginator.hasNext) {
  const items = await paginator.nextItems()
  sandboxes.push(...items)
}

for (const sandbox of sandboxes) {
  console.log(`list sandbox (${sandbox.sandboxId})`)
}

await sandbox.kill()
```

Was this page helpful?

YesNo

[Environment variables](https://novita.ai/docs/guides/sandbox-environment-variables) [Connect to running sandbox](https://novita.ai/docs/guides/sandbox-connect)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.