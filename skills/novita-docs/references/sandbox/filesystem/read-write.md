---
url: "https://novita.ai/docs/guides/sandbox-filesystem-read-write"
title: "Read & write files - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-filesystem-read-write#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Filesystem

Read & write files

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Reading files](https://novita.ai/docs/guides/sandbox-filesystem-read-write#reading-files)
- [Writing single files](https://novita.ai/docs/guides/sandbox-filesystem-read-write#writing-single-files)
- [Writing multiple files](https://novita.ai/docs/guides/sandbox-filesystem-read-write#writing-multiple-files)

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

## [​](https://novita.ai/docs/guides/sandbox-filesystem-read-write\#reading-files)  Reading files

You can read files from the sandbox filesystem using the `files.read()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// Create a file in the sandbox for testing
const filePathInSandbox = '/tmp/test-file'
await sandbox.files.write(filePathInSandbox, "test-file-content")

const fileContent = await sandbox.files.read(filePathInSandbox)
console.log(fileContent)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-filesystem-read-write\#writing-single-files)  Writing single files

You can write single files to the sandbox filesystem using the `files.write()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const filePathInSandbox = '/tmp/test-file'

const result = await sandbox.files.write(filePathInSandbox, "test-file-content")
console.log(result)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-filesystem-read-write\#writing-multiple-files)  Writing multiple files

You can also write multiple files to the sandbox filesystem using the `files.write()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const result = await sandbox.files.write([\
    { path: '/tmp/test-file-1', data: 'file content 1' },\
    { path: '/tmp/test-file-2', data: 'file content 2' }\
])

console.log(result)

await sandbox.kill()
```

Was this page helpful?

YesNo

[Overview](https://novita.ai/docs/guides/sandbox-filesystem) [Watch sandbox directory for changes](https://novita.ai/docs/guides/sandbox-filesystem-watch)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.