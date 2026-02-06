---
url: "https://novita.ai/docs/guides/sandbox-commands-streaming"
title: "Streaming command output - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-commands-streaming#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Commands

Streaming command output

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

To stream command output as it is being executed, pass the `onStdout`, `onStderr` callbacks to the `commands.run()` method in JavaScript
or the `on_stdout`, `on_stderr` callbacks to the `commands.run()` method in Python.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()
const result = await sandbox.commands.run('echo hello; sleep 1; echo world', {
  onStdout: (data) => {
    console.log(data)
  },
  onStderr: (data) => {
    console.log(data)
  },
})

console.log(result)

await sandbox.kill()
```

Was this page helpful?

YesNo

[Running commands in sandbox](https://novita.ai/docs/guides/sandbox-commands) [Running commands in background](https://novita.ai/docs/guides/sandbox-commands-background)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.