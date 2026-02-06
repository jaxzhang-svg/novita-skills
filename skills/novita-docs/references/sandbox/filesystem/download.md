---
url: "https://novita.ai/docs/guides/sandbox-filesystem-download"
title: "Download data from sandbox - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-filesystem-download#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Filesystem

Download data from sandbox

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

You can download data from the sandbox using the `files.read()` method.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

JavaScript & TypeScript

Python

Copy

```
import fs from 'fs'
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// Create a file in the sandbox for testing
const filePathInSandbox = '/tmp/test-file'
await sandbox.files.write(filePathInSandbox, "test-file-content")

// Read file from sandbox
const content = await sandbox.files.read(filePathInSandbox)

// Write file to local filesystem
const localFilePath = './local-test-file'
fs.writeFileSync(localFilePath, content)

await sandbox.kill()
```

Was this page helpful?

YesNo

[Upload data to sandbox](https://novita.ai/docs/guides/sandbox-filesystem-upload) [Running commands in sandbox](https://novita.ai/docs/guides/sandbox-commands)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.