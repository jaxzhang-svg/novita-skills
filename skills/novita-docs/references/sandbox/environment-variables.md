---
url: "https://novita.ai/docs/guides/sandbox-environment-variables"
title: "Environment variables - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-environment-variables#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Environment variables

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Setting environment variables](https://novita.ai/docs/guides/sandbox-environment-variables#setting-environment-variables)
- [1\. Global environment variables](https://novita.ai/docs/guides/sandbox-environment-variables#1-global-environment-variables)
- [2\. Setting environment variables when running code](https://novita.ai/docs/guides/sandbox-environment-variables#2-setting-environment-variables-when-running-code)
- [3\. Setting environment variables when running commands](https://novita.ai/docs/guides/sandbox-environment-variables#3-setting-environment-variables-when-running-commands)

This page covers how to set and use environment variables in a sandbox, and default environment variables inside the sandbox.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

## [​](https://novita.ai/docs/guides/sandbox-environment-variables\#setting-environment-variables)  Setting environment variables

There are 3 ways to set environment variables in a sandbox:

- [Global environment variables when creating the sandbox](https://novita.ai/docs/guides/sandbox-environment-variables#1-global-environment-variables).
- [When running code in the sandbox](https://novita.ai/docs/guides/sandbox-environment-variables#2-setting-environment-variables-when-running-code).
- [When running commands in the sandbox](https://novita.ai/docs/guides/sandbox-environment-variables#3-setting-environment-variables-when-running-commands).

### [​](https://novita.ai/docs/guides/sandbox-environment-variables\#1-global-environment-variables)  1\. Global environment variables

You can set global environment variables when creating a sandbox.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create({
  envs: {
    MY_VAR: 'my_value',
  },
})

const result = await sandbox.commands.run("echo $MY_VAR")

console.log(result)

// Output example:
// { exitCode: 0, error: undefined, stdout: 'my_value\n', stderr: '' }

await sandbox.kill()
```

### [​](https://novita.ai/docs/guides/sandbox-environment-variables\#2-setting-environment-variables-when-running-code)  2\. Setting environment variables when running code

You can set environment variables for specific code execution call in the sandbox.

If you had a global environment variable with the same name, it will be overridden.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const result = await sandbox.runCode('import os; print(os.environ.get("MY_VAR"))', {
  envs: {
    MY_VAR: 'my_value',
  },
})
console.log(result.logs)

await sandbox.kill()
```

### [​](https://novita.ai/docs/guides/sandbox-environment-variables\#3-setting-environment-variables-when-running-commands)  3\. Setting environment variables when running commands

You can set environment variables for specific command execution in the sandbox.

If you had a global environment variable with the same name, it will be overridden.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const result = await sandbox.commands.run('echo $MY_VAR', {
  envs: {
    MY_VAR: '123',
  },
})

console.log(result)

// Output example:
// { exitCode: 0, error: undefined, stdout: '123\n', stderr: '' }

await sandbox.kill()
```

Was this page helpful?

YesNo

[Sandbox Metadata](https://novita.ai/docs/guides/sandbox-metadata) [List sandboxes](https://novita.ai/docs/guides/sandbox-list)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.