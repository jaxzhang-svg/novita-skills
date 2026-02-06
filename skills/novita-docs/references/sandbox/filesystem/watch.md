---
url: "https://novita.ai/docs/guides/sandbox-filesystem-watch"
title: "Watch sandbox directory for changes - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-filesystem-watch#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Filesystem

Watch sandbox directory for changes

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Recursive Watching](https://novita.ai/docs/guides/sandbox-filesystem-watch#recursive-watching)

You can watch a directory for changes using the `files.watchDir()` method in JavaScript and `files.watch_dir()` method in Python.

Since events are tracked asynchronously, their delivery may be delayed.
It’s recommended not to collect or close watcher immediately after making a change.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

JavaScript & TypeScript

Python

Copy

```
import { Sandbox, FilesystemEventType } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()
const dirname = '/tmp'

// Start watching directory for changes
const handle = await sandbox.files.watchDir(dirname, async (event) => {
  console.log(`got event: ${event.type} - ${event.name}`)
  if (event.type === FilesystemEventType.WRITE) {
    console.log(`wrote to file ${event.name}`)
  }
})

// Trigger file write event
await sandbox.files.write(`${dirname}/test-file`, 'test-file-content')

// Stop watching directory for changes
handle.stop()

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-filesystem-watch\#recursive-watching)  Recursive Watching

You can enable recursive watching using the parameter `recursive`.

When rapidly creating new folders (e.g., deeply nested path of folders), events other than `CREATE` might not be emitted. To avoid this behavior, create the required folder structure in advance.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox, FilesystemEventType } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()
const dirname = '/tmp'

// Start watching directory for changes
const handle = await sandbox.files.watchDir(dirname, async (event) => {
  console.log(`got event: ${event.type} - ${event.name}`)
  if (event.type === FilesystemEventType.WRITE) {
    console.log(`wrote to file ${event.name}`)
  }
}, {
  recursive: true
})

// Trigger file write event
await sandbox.files.write(`${dirname}/test-folder/test-file`, 'test-file-content')

// Stop watching directory for changes
handle.stop()

await sandbox.kill()
```

Was this page helpful?

YesNo

[Read & write files](https://novita.ai/docs/guides/sandbox-filesystem-read-write) [Upload data to sandbox](https://novita.ai/docs/guides/sandbox-filesystem-upload)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.