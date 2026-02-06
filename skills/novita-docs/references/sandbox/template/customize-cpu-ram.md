---
url: "https://novita.ai/docs/guides/sandbox-template-customize-cpu-ram"
title: "Customize sandbox CPU & RAM - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-template-customize-cpu-ram#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Template

Customize sandbox CPU & RAM

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Through Configuration File](https://novita.ai/docs/guides/sandbox-template-customize-cpu-ram#through-configuration-file)

You can customize the CPU and RAM of your sandbox template via CLI.

Before running the command-line related example code in this document, please refer to the [tutorial](https://novita.ai/docs/guides/sandbox-cli) to install the CLI and complete [authentication](https://novita.ai/docs/guides/sandbox-cli-auth).

You need to create a [sandbox template](https://novita.ai/docs/guides/sandbox-template) first.During the build step, you can specify the CPU and RAM of your sandbox template.The following command will create a sandbox template with 2 vCPUs and 2GB RAM.

Bash

Copy

```
novita-sandbox-cli template build -c "/root/.jupyter/start-up.sh" --cpu-count 2 --memory-mb 2048
```

## [​](https://novita.ai/docs/guides/sandbox-template-customize-cpu-ram\#through-configuration-file)  Through Configuration File

You can also specify the vCPU and RAM specifications for the sandbox template in the `novita.toml` file in the same directory where you run the `novita-sandbox-cli template build` command.

Toml

Copy

```
template_id = "0r0efkbfwzfp9p7qpc1c"
dockerfile = "novita.Dockerfile"
template_name = "my-agent-sandbox"
ready_cmd = "<your-ready-command>"
# Specify sandbox template vCPU and RAM specifications as 2 vCPUs and 2GB RAM
cpu_count = 2
memory_mb = 2_048
```

Was this page helpful?

YesNo

[Start Command](https://novita.ai/docs/guides/sandbox-template-start-cmd) [Version Management](https://novita.ai/docs/guides/sandbox-template-version-management)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.