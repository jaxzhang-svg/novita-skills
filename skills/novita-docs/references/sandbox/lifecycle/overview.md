---
url: "https://novita.ai/docs/guides/sandbox-lifecycle"
title: "Sandbox Lifecycle - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-lifecycle#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Sandbox Lifecycle

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Change sandbox timeout during runtime](https://novita.ai/docs/guides/sandbox-lifecycle#change-sandbox-timeout-during-runtime)
- [Retrieve sandbox information](https://novita.ai/docs/guides/sandbox-lifecycle#retrieve-sandbox-information)
- [Shutdown sandbox](https://novita.ai/docs/guides/sandbox-lifecycle#shutdown-sandbox)

When you start the sandbox, it stays alive for 5 minutes by default but you can change it by passing the `timeout` parameter.
After the time passes, the sandbox will be automatically shutdown.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create sandbox with and keep it running for 60 seconds.
const sandbox = await Sandbox.create({
  timeoutMs: 60_000, // The units are milliseconds.
})

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-lifecycle\#change-sandbox-timeout-during-runtime)  Change sandbox timeout during runtime

You can change the sandbox timeout when it’s running by calling the the `setTimeout` method in JavaScript or `set_timeout` method in Python.When you call the set timeout method, the sandbox timeout will be reset to the new value that you specified.This can be useful if you want to extend the sandbox lifetime when it’s already running.
You can for example start with a sandbox with 1 minute timeout and then periodically call set timout every time user interacts with it in your app.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create sandbox with and keep it running for 60 seconds.
const sandbox = await Sandbox.create({ timeoutMs: 60_000 })

// Change the sandbox timeout to 30 seconds.
// The new timeout will be 30 seconds from now.
await sandbox.setTimeout(30_000)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-lifecycle\#retrieve-sandbox-information)  Retrieve sandbox information

You can retrieve sandbox information like sandbox ID, template, metadata, started at/end at date by calling the `getInfo` method in JavaScript or `get_info` method in Python.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create sandbox with and keep it running for 60 seconds.
const sandbox = await Sandbox.create({ timeoutMs: 60_000 })

// Retrieve sandbox information.
const info = await sandbox.getInfo()

console.log(info)

// Output example:
// {
//   sandboxId: 'i8kktl6jolbramfm8cp3k-a402f90a',
//   templateId: '23j9hy90m6r461w7nkrn',
//   name: 'code-interpreter-v1',
//   metadata: {},
//   envdVersion: '0.2.0',
//   envdAccessToken: undefined,
//   startedAt: 2025-06-30T06:46:36.096Z,
//   endAt: 2025-06-30T07:16:36.096Z
// }

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-lifecycle\#shutdown-sandbox)  Shutdown sandbox

You can shutdown the sandbox any time even before the timeout is up by calling the `kill` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

// Create sandbox with and keep it running for 60 seconds.
const sandbox = await Sandbox.create({ timeoutMs: 60_000 })

// Shutdown the sandbox immediately.
await sandbox.kill()
```

Was this page helpful?

YesNo

[Learn more](https://novita.ai/docs/guides/sandbox-learn-more) [Sandbox Persistence](https://novita.ai/docs/guides/sandbox-persistence)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.