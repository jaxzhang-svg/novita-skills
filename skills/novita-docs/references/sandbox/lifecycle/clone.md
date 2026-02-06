---
url: "https://novita.ai/docs/guides/sandbox-clone"
title: "Sandbox Clone - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-clone#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Sandbox Clone

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

The following features require [installing the Beta SDK & CLI](https://novita.ai/docs/guides/sandbox-sdk-and-cli#install-beta-sdk). Please note that beta features are subject to change and may be less stable than production releases. If you encounter any issues while using these features, please [contact us](https://meetings-na2.hubspot.com/junyu).

The **“Sandbox Clone”** feature allows you to duplicate a running or paused sandbox instance. The cloned sandbox maintains the same file system and memory state as the original sandbox.

If you clone a running sandbox, the sandbox being cloned will be briefly suspended. During this period, the sandbox instance will be unavailable, and the suspension time is close to the time required to [pause a sandbox](https://novita.ai/docs/guides/sandbox-persistence#pausing-sandbox).

**Parameter Description:**

- `count`: Specifies how many sandbox instances to clone. The minimum value is 1, and the maximum is determined by the concurrent running sandbox instance limit (see [Quota Limit](https://novita.ai/docs/guides/sandbox-quota-limit)).
- `strict`: Specifies whether to strictly clone according to the number specified in the `count` parameter. The default value is false. When set to true, if the number of successfully cloned instances is less than `count`, a clone failure error will be returned, and other successfully created sandboxes will also be cleaned up. When set to false, the actual number of successfully cloned sandbox instances will be returned.
- `timeout`(`timeoutMs`): Specifies the timeout for cloning sandbox instances. If this parameter is not specified, when the parent sandbox is running, it inherits the parent sandbox’s timeout configuration; but when the parent sandbox is in a paused state, the default value of 5min is used.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox';

const sandbox = await Sandbox.create();
console.log('Sandbox created', sandbox.sandboxId)

const sbxClones = await Sandbox.clone(sandbox.sandboxId,
    {
        count: 2,
        strict: false,
        timeoutMs: 100_000
    }
);
console.log('Sandbox clones created', sbxClones.map(sbxClone => sbxClone.sandboxId))

await sandbox.kill()
for (const sbxClone of sbxClones) {
    await sbxClone.kill()
}
```

Additionally, you can also use the [Novita Sandbox CLI](https://novita.ai/docs/guides/sandbox-cli) to clone a specified sandbox instance:

Bash

Copy

```
# novita-sandbox-cli sandbox clone [sandboxID] -c [count] -s [strict] -t [timeout]
novita-sandbox-cli sandbox clone 0r0efkbfwzfp9p7qpc1c -c 2
```

Was this page helpful?

YesNo

[Auto Pause and Resume](https://novita.ai/docs/guides/sandbox-auto-persistence) [Idle Timeout](https://novita.ai/docs/guides/sandbox-idle-timeout)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.