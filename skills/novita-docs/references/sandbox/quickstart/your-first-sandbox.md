---
url: "https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox"
title: "Create Your First Agent Sandbox - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

Create Your First Agent Sandbox

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Create an Account](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#create-an-account)
- [Create API Key](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#create-api-key)
- [Install SDK](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#install-sdk)
- [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables)
- [Use SDK to Start Agent Sandbox](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#use-sdk-to-start-agent-sandbox)

## [​](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox\#create-an-account)  Create an Account

If you don’t have a Novita account, you need to [sign up](https://novita.ai/user/register) first. For details, please refer to [Quickstart guide](https://novita.ai/docs/guides/quickstart).

## [​](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox\#create-api-key)  Create API Key

Go to the Novita [Key Management page](https://novita.ai/settings/key-management), you can create an API key and save the API key value for use in subsequent steps.

## [​](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox\#install-sdk)  Install SDK

You can install the SDK by executing the following commands.

JavaScript & TypeScript SDK

Python SDK

Copy

```
npm i novita-sandbox
```

## [​](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox\#configure-environment-variables)  Configure Environment Variables

Create a `.env` file in your project folder (if it doesn’t exist), and configure the API key and API domain address.

For JavaScript and TypeScript projects, you need to import the `dotenv/config` package in your project; for Python projects, you need to import the `dotenv` library in your project and call the `load_dotenv` method to load environment variables.
For details, please refer to the [example](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#use-sdk-to-start-agent-sandbox).

.env

Copy

```
NOVITA_API_KEY=sk_*** # Novita API key obtained from previous steps
```

Or you can configure the API key and API domain address by setting environment variables in your terminal.

Bash

Copy

```
export NOVITA_API_KEY=sk_*** # Novita API key obtained from previous steps
```

## [​](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox\#use-sdk-to-start-agent-sandbox)  Use SDK to Start Agent Sandbox

Below is a simple example showing how to create a sandbox through the SDK and run specified commands.

JavaScript & TypeScript

Python

Copy

```
// index.ts
import 'dotenv/config'
import { Sandbox } from 'novita-sandbox/code-interpreter'

// The .env file should be located in the project root directory
// dotenv/config will automatically look for .env in the current working directory
// Or
// You can set the environment variable in the command line
// export NOVITA_API_KEY=sk_***

const sandbox = await Sandbox.create()
const execution = await sandbox.runCode('print("hello world")')
console.log(execution.logs)

const files = await sandbox.files.list('/tmp')
console.log(files)

// Close sandbox when no longer needed
await sandbox.kill()
```

Execute the following commands to run the above code.

index.ts

main.py

Copy

```
npx tsx ./index.ts
```

Was this page helpful?

YesNo

[Installing SDKs & CLI](https://novita.ai/docs/guides/sandbox-sdk-and-cli) [E2B SDK Compatibility](https://novita.ai/docs/guides/sandbox-e2b-compatible)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.