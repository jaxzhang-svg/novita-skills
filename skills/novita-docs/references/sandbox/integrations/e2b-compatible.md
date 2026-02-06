---
url: "https://novita.ai/docs/guides/sandbox-e2b-compatible"
title: "E2B SDK Compatibility - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-e2b-compatible#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

E2B SDK Compatibility

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Installation](https://novita.ai/docs/guides/sandbox-e2b-compatible#installation)
- [Code Interpreter SDK](https://novita.ai/docs/guides/sandbox-e2b-compatible#code-interpreter-sdk)
- [Core SDK](https://novita.ai/docs/guides/sandbox-e2b-compatible#core-sdk)
- [Desktop SDK](https://novita.ai/docs/guides/sandbox-e2b-compatible#desktop-sdk)
- [CLI](https://novita.ai/docs/guides/sandbox-e2b-compatible#cli)
- [Setup Configuration](https://novita.ai/docs/guides/sandbox-e2b-compatible#setup-configuration)
- [Examples](https://novita.ai/docs/guides/sandbox-e2b-compatible#examples)

Novita Agent Sandbox provides a compatibility API that allows you to use the E2B SDK and CLI. This is useful if you are already using the E2B SDK and CLI and want to switch to Novita Agent Sandbox. However, we recommend using the Novita [Agent Sandbox SDK](https://novita.ai/docs/guides/sandbox-sdk-and-cli) to access all features.

## [​](https://novita.ai/docs/guides/sandbox-e2b-compatible\#installation)  Installation

### [​](https://novita.ai/docs/guides/sandbox-e2b-compatible\#code-interpreter-sdk)  Code Interpreter SDK

JavaScript & TypeScript

Python

Copy

```
npm i @e2b/code-interpreter@beta
```

### [​](https://novita.ai/docs/guides/sandbox-e2b-compatible\#core-sdk)  Core SDK

JavaScript & TypeScript

Python

Copy

```
npm i e2b@beta
```

### [​](https://novita.ai/docs/guides/sandbox-e2b-compatible\#desktop-sdk)  Desktop SDK

JavaScript & TypeScript

Python

Copy

```
npm i @e2b/desktop@beta
```

### [​](https://novita.ai/docs/guides/sandbox-e2b-compatible\#cli)  CLI

Bash

Copy

```
npm i -g @e2b/cli@v1.9.2
```

## [​](https://novita.ai/docs/guides/sandbox-e2b-compatible\#setup-configuration)  Setup Configuration

You need to set the following environment variables in your project to use the E2B SDK and CLI with Novita Agent Sandbox.

Bash

Copy

```
export E2B_DOMAIN=sandbox.novita.ai
export E2B_API_KEY="<Your Novita AI API Key>"
```

## [​](https://novita.ai/docs/guides/sandbox-e2b-compatible\#examples)  Examples

Below is an example showing how to create a sandbox through the SDK and run specified commands using E2B SDK.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from '@e2b/code-interpreter'
// or import { Sandbox } from 'e2b'
// or import { Sandbox } from '@e2b/desktop'

const sbx = await Sandbox.create()
const execution = await sbx.commands.run('ls -l')
console.log(execution)

await sbx.kill()
```

Below is an example showing how to use the E2B CLI with Novita Agent Sandbox.

Bash

Copy

```
export E2B_DOMAIN=sandbox.novita.ai
# Authentication in CLI
e2b auth login

# Start sandbox and connect to terminal
e2b sandbox spawn <template-id>

# List sandboxes
e2b sandbox list

# Shutdown running sandboxes
e2b sandbox kill <sandbox-id>
```

Was this page helpful?

YesNo

[Create Your First Agent Sandbox](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox) [Pricing](https://novita.ai/docs/guides/sandbox-pricing)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.