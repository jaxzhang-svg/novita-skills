---
url: "https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes"
title: "Shutdown running sandboxes - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

CLI

Shutdown running sandboxes

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Shutdown single sandbox](https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes#shutdown-single-sandbox)
- [Shutdown all sandboxes](https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes#shutdown-all-sandboxes)

You can shutdown single or all running sandboxes with the CLI.

Before running the command-line related example code in this document, please refer to the [tutorial](https://novita.ai/docs/guides/sandbox-cli) to install the CLI and complete [authentication](https://novita.ai/docs/guides/sandbox-cli-auth).

## [​](https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes\#shutdown-single-sandbox)  Shutdown single sandbox

To shutdown a single sandbox, run the following command:

Bash

Copy

```
novita-sandbox-cli sandbox kill <sandbox-id>
```

## [​](https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes\#shutdown-all-sandboxes)  Shutdown all sandboxes

To shutdown all running sandboxes, run the following command:

Bash

Copy

```
novita-sandbox-cli sandbox kill --all
```

Was this page helpful?

YesNo

[List sandboxes](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes) [Computer use with E2B Desktop](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.