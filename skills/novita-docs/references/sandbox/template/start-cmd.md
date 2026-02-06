---
url: "https://novita.ai/docs/guides/sandbox-template-start-cmd"
title: "Start Command - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-template-start-cmd#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Template

Start Command

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to add start command](https://novita.ai/docs/guides/sandbox-template-start-cmd#how-to-add-start-command)
- [Sandbox template config](https://novita.ai/docs/guides/sandbox-template-start-cmd#sandbox-template-config)
- [Logs](https://novita.ai/docs/guides/sandbox-template-start-cmd#logs)

The start command allows you to specify a command that will be **already running** when you spawn your custom sandbox.
This way, you can for example have running servers or seeded databases inside the sandbox that are already fully ready when you spawn the sandbox using the SDK and with zero waiting time for your users during the runtime.The idea behind the start command feature is to lower the wait times for your users and have everything ready for your users when you spawn your sandbox.You can see how it works [here](https://novita.ai/docs/guides/sandbox-template#how-it-works).

Before running the command-line related example code in this document, please refer to the [tutorial](https://novita.ai/docs/guides/sandbox-cli) to install the CLI and complete [authentication](https://novita.ai/docs/guides/sandbox-cli-auth).

## [​](https://novita.ai/docs/guides/sandbox-template-start-cmd\#how-to-add-start-command)  How to add start command

When you are building a sandbox template you can specify the start command by using the `-c` option:

Bash

Copy

```
novita-sandbox-cli template build -c "<your-start-command>"
```

When you spawn the custom sandbox you built, the start command will be already running if there was no error when we tried to execute it.

### [​](https://novita.ai/docs/guides/sandbox-template-start-cmd\#sandbox-template-config)  Sandbox template config

You can specify the start command also inside the `novita.toml` in the same directory where you run `novita-sandbox-cli template build`.

Toml

Copy

```
template_id = "0r0efkbfwzfp9p7qpc1c"
dockerfile = "novita.Dockerfile"
template_name = "my-agent-sandbox"
start_cmd = "<your-start-command>"
```

## [​](https://novita.ai/docs/guides/sandbox-template-start-cmd\#logs)  Logs

You can retrieve the start command’s logs using the CLI during runtime.

These logs are the logs from the start command during the build phase.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

Bash

Copy

```
novita-sandbox-cli sandbox logs <sandbox-id>
```

Was this page helpful?

YesNo

[Sandbox Templates](https://novita.ai/docs/guides/sandbox-template) [Customize sandbox CPU & RAM](https://novita.ai/docs/guides/sandbox-template-customize-cpu-ram)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.