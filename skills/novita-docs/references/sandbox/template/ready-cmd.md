---
url: "https://novita.ai/docs/guides/sandbox-template-ready-cmd"
title: "Ready Command - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-template-ready-cmd#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Ready Command

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to add ready command](https://novita.ai/docs/guides/sandbox-template-ready-cmd#how-to-add-ready-command)
- [Sandbox template config](https://novita.ai/docs/guides/sandbox-template-ready-cmd#sandbox-template-config)
- [Default values](https://novita.ai/docs/guides/sandbox-template-ready-cmd#default-values)
- [Examples](https://novita.ai/docs/guides/sandbox-template-ready-cmd#examples)
- [Wait for URL to return 200 status code](https://novita.ai/docs/guides/sandbox-template-ready-cmd#wait-for-url-to-return-200-status-code)
- [Wait for a specific process to start](https://novita.ai/docs/guides/sandbox-template-ready-cmd#wait-for-a-specific-process-to-start)
- [Wait for a file to exist](https://novita.ai/docs/guides/sandbox-template-ready-cmd#wait-for-a-file-to-exist)

The ready command allows you to specify a command that will determine **template sandbox** readiness before a [snapshot](https://novita.ai/docs/guides/sandbox-template#how-it-works) is created.
It is executed in an infinite loop until it returns a successful **exit code 0**.
This way you can control how long should we wait for the [start command](https://novita.ai/docs/guides/sandbox-template-start-cmd) or any system state.

Before running the command-line related example code in this document, please refer to the [tutorial](https://novita.ai/docs/guides/sandbox-cli) to install the CLI and complete [authentication](https://novita.ai/docs/guides/sandbox-cli-auth).

## [​](https://novita.ai/docs/guides/sandbox-template-ready-cmd\#how-to-add-ready-command)  How to add ready command

When you are building a sandbox template you can specify the ready command by using the `--ready-cmd` option:

Bash

Copy

```
novita-sandbox-cli template build --ready-cmd "<your-ready-command>"
```

### [​](https://novita.ai/docs/guides/sandbox-template-ready-cmd\#sandbox-template-config)  Sandbox template config

You can specify the ready command inside the `novita.toml` in the same directory where you run `novita-sandbox-cli template build`.

Toml

Copy

```
template_id = "0r0efkbfwzfp9p7qpc1c"
dockerfile = "novita.Dockerfile"
template_name = "my-agent-sandbox"
ready_cmd = "<your-ready-command>"
```

## [​](https://novita.ai/docs/guides/sandbox-template-ready-cmd\#default-values)  Default values

By default, the ready command is set to `sleep 0`, which means the sandbox template will be ready immediatelly.
If the [start command](https://novita.ai/docs/guides/sandbox-template-start-cmd) is defined, the default is set to `sleep 20`, which means that the template sandbox will wait for 20 seconds before taking the snapshot.

## [​](https://novita.ai/docs/guides/sandbox-template-ready-cmd\#examples)  Examples

Here are some examples of the ready command you can use.

### [​](https://novita.ai/docs/guides/sandbox-template-ready-cmd\#wait-for-url-to-return-200-status-code)  Wait for URL to return 200 status code

Bash

Copy

```
ready_cmd = 'curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"'
```

### [​](https://novita.ai/docs/guides/sandbox-template-ready-cmd\#wait-for-a-specific-process-to-start)  Wait for a specific process to start

Bash

Copy

```
ready_cmd = 'pgrep my-process-name > /dev/null'
```

### [​](https://novita.ai/docs/guides/sandbox-template-ready-cmd\#wait-for-a-file-to-exist)  Wait for a file to exist

Bash

Copy

```
ready_cmd = '[ -f /tmp/ready.flag ]'
```

Was this page helpful?

YesNo

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.