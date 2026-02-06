---
url: "https://novita.ai/docs/guides/sandbox-auto-persistence"
title: "Auto Pause and Resume - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-auto-persistence#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Auto Pause and Resume

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Enable Auto Pause](https://novita.ai/docs/guides/sandbox-auto-persistence#enable-auto-pause)
- [Enable Auto Resume](https://novita.ai/docs/guides/sandbox-auto-persistence#enable-auto-resume)

The following features require [installing the Beta SDK & CLI](https://novita.ai/docs/guides/sandbox-sdk-and-cli#install-beta-sdk). Please note that beta features are subject to change and may be less stable than production releases. If you encounter any issues while using these features, please [contact us](https://meetings-na2.hubspot.com/junyu).

When the sandbox instance is not currently needed but you need to be able to resume it at any time later, you can refer to the [documentation](https://novita.ai/docs/guides/sandbox-persistence) to manually pause and resume sandbox instances.The **“Auto Pause and Resume”** feature allows your sandbox instance to automatically pause after [timeout](https://novita.ai/docs/guides/sandbox-lifecycle) and resume when needed. When you attempt to perform operations (such as executing commands, running code, or file operations) on a paused sandbox, it will automatically resume without manual intervention.

## [​](https://novita.ai/docs/guides/sandbox-auto-persistence\#enable-auto-pause)  Enable Auto Pause

You can enable the auto pause feature by setting the `auto_pause` parameter to `true` when creating a sandbox instance. The sandbox instance will automatically pause after timeout and can be resumed later.

Note: The resumed sandbox instance will still have the auto pause feature enabled and will automatically pause again after timeout.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter';

const sandbox = await Sandbox.create(
    {
        timeoutMs: 5_000,
        autoPause: true
    },
);
console.log('Sandbox created', sandbox.sandboxId)

console.log('Waiting for 10 seconds...')
await new Promise(resolve => setTimeout(resolve, 10000));

const resumedSandbox = await Sandbox.connect(sandbox.sandboxId)
console.log('Sandbox resumed', resumedSandbox.sandboxId)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-auto-persistence\#enable-auto-resume)  Enable Auto Resume

You can enable the auto resume feature by setting the `auto_resume` key in `metadata` to `true` when creating a sandbox instance. Once enabled, when you attempt to operate on a paused sandbox (such as executing commands, running code, file operations, etc.), the sandbox will automatically resume.

Note: The default timeout for the resumed sandbox is 5 minutes. You can update the sandbox timeout using the `setTimeout` or `set_timeout` method.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter';

const sandbox = await Sandbox.create(
    {
        metadata:{"auto_resume": "true"}
    }
);
console.log('Sandbox created', sandbox.sandboxId)

await sandbox.betaPause()
console.log('Sandbox paused', sandbox.sandboxId)

const result = await sandbox.commands.run('ls -al')
console.log('Command result', result)

await sandbox.kill()
```

Was this page helpful?

YesNo

[Mount object storage bucket](https://novita.ai/docs/guides/sandbox-mount-cloudstorage) [Sandbox Clone](https://novita.ai/docs/guides/sandbox-clone)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.