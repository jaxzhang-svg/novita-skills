---
url: "https://novita.ai/docs/guides/sandbox-commands-background"
title: "Running commands in background - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-commands-background#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Commands

Running commands in background

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

To run commands in background, pass the `background` option to the `commands.run()` method. This will return immediately and the command will continue to run in the sandbox.
You can then later kill the command using the `commands.kill()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// Start the command in the background
const command = await sandbox.commands.run('echo hello; sleep 10; echo world', {
  background: true,
  onStdout: (data) => {
    console.log(data)
  },
})

// Kill the command
await command.kill()

await sandbox.kill()
```

Was this page helpful?

YesNo

[Streaming command output](https://novita.ai/docs/guides/sandbox-commands-streaming) [Installing CLI](https://novita.ai/docs/guides/sandbox-cli)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.