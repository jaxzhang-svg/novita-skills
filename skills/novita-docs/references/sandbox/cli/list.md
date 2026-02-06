---
url: "https://novita.ai/docs/guides/sandbox-cli-list-sandboxes"
title: "List sandboxes - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

CLI

List sandboxes

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [List all running sandboxes](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes#list-all-running-sandboxes)
- [Filter by state](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes#filter-by-state)
- [Filter by metadata](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes#filter-by-metadata)
- [List limit](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes#list-limit)

Before running the command-line related example code in this document, please refer to the [tutorial](https://novita.ai/docs/guides/sandbox-cli) to install the CLI and complete [authentication](https://novita.ai/docs/guides/sandbox-cli-auth).

### [​](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes\#list-all-running-sandboxes)  List all running sandboxes

To list all running sandboxes, use the following command:

Bash

Copy

```
novita-sandbox-cli sandbox list
```

### [​](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes\#filter-by-state)  Filter by state

To filter the sandboxes by their state you can specify the `--state` flag, which can either be “ **running**”, “ **paused**” or both.

Bash

Copy

```
novita-sandbox-cli sandbox list --state running,paused
```

This will return all sandboxes, both running and paused.

### [​](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes\#filter-by-metadata)  Filter by metadata

To filter the sandboxes by their metadata, use the `--metadata` flag.

Bash

Copy

```
novita-sandbox-cli sandbox list --metadata key1=value1,key2=value2
```

### [​](https://novita.ai/docs/guides/sandbox-cli-list-sandboxes\#list-limit)  List limit

To limit the amount of sandboxes returned by the command, use the `--limit` flag.

Bash

Copy

```
novita-sandbox-cli sandbox list --limit 10
```

By default, the command will return all sandboxes.

Was this page helpful?

YesNo

[Create sandbox and connect to terminal](https://novita.ai/docs/guides/sandbox-cli-spawn-sandbox) [Shutdown running sandboxes](https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.