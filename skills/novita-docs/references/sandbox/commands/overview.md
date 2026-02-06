---
url: "https://novita.ai/docs/guides/sandbox-commands"
title: "Running commands in sandbox - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-commands#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Commands

Running commands in sandbox

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

You can run terminal commands inside the sandbox using the `commands.run()` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const result = await sandbox.commands.run('ls -l')
console.log(result)

await sandbox.kill()
```

Was this page helpful?

YesNo

[Download data from sandbox](https://novita.ai/docs/guides/sandbox-filesystem-download) [Streaming command output](https://novita.ai/docs/guides/sandbox-commands-streaming)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.