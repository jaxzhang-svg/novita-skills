---
url: "https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop"
title: "Computer use with E2B Desktop - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Computer use with E2B Desktop

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Get Novita API Key](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop#1-get-novita-api-key)
- [2\. Environment Configuration](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop#2-environment-configuration)
- [3\. SDK Installation](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop#3-sdk-installation)
- [4\. Implementation Examples](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop#4-implementation-examples)
- [Get Virtual Desktop Stream VNC URL](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop#get-virtual-desktop-stream-vnc-url)

[E2B Desktop](https://github.com/e2b-dev/desktop) is an open-source secure virtual desktop framework specifically engineered for developing Computer Use Agents. This solution provides a comprehensive, isolated desktop environment that enables AI agents to securely interact with desktop applications through controlled virtualization.This document will provide detailed instructions on how to run this project based on Novita Agent sandbox service.

### [​](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop\#1-get-novita-api-key)  1\. Get Novita API Key

If you don't have a Novita account, you need to [sign up](https://novita.ai/user/register) first. For details, please refer to [Quick Start](https://novita.ai/docs/guides/quickstart). After signing up, you can create an API key through the [Key Management](https://novita.ai/settings/key-management) page and save it for subsequent steps.

### [​](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop\#2-environment-configuration)  2\. Environment Configuration

Before you start using the service, you need to configure the necessary environment variables:

Bash

Copy

```
export E2B_DOMAIN=sandbox.novita.ai
export E2B_API_KEY=<Your API key obtained in the previous step>
```

Running example:![Setup Environment Variables](https://mintcdn.com/novitaai/x1b8G4-Z9MJIBPJz/guides/images/sbx-e2b-desktop-env.png?fit=max&auto=format&n=x1b8G4-Z9MJIBPJz&q=85&s=7b590d78947f00f34e7e364f6f74b24f)

### [​](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop\#3-sdk-installation)  3\. SDK Installation

Select the appropriate installation method corresponding to your development environment and programming language:

JavaScript & TypeScript

Python

Copy

```
npm i @e2b/desktop@2.0.1
```

### [​](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop\#4-implementation-examples)  4\. Implementation Examples

#### [​](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop\#get-virtual-desktop-stream-vnc-url)  Get Virtual Desktop Stream VNC URL

The following implementation demonstrates the instantiation of a virtual desktop environment and the retrieval of VNC access endpoints for remote desktop interaction:

JavaScript & TypeScript

Python

Copy

```
// demo.ts implementation
import { Sandbox } from '@e2b/desktop'

// Initialize virtual desktop sandbox instance
const desktop = await Sandbox.create()

// Activate desktop streaming service
await desktop.stream.start()

// Retrieve interactive VNC endpoint URL
const url = desktop.stream.getUrl()
console.log(url)

// Expected output format:
// Browser-accessible URL for interactive virtual desktop session. Suitable for application integration.
// https://6080-ik0n7lc3j0dvqd4jxy6g7.sandbox.novita.ai/vnc.html?autoconnect=true&resize=scale

// Retrieve read-only VNC endpoint URL (interaction disabled)
const urlDisabledInteraction = desktop.stream.getUrl({ viewOnly: true })
console.log(urlDisabledInteraction)
// Expected output format:
// Browser-accessible URL for view-only virtual desktop session (non-interactive mode). Suitable for monitoring applications.
// https://6080-ik0n7lc3j0dvqd4jxy6g7.sandbox.novita.ai/vnc.html?autoconnect=true&view_only=true&resize=scale

// Keep the program running
console.log("Desktop stream started, press Ctrl+C to stop the program...")
const interval = setInterval(() => {}, 1000)

// Register interrupt signal handlers for resource cleanup
let isCleaning = false
const cleanup = async () => {
    if (isCleaning) return
    isCleaning = true

    console.log("\nProgram interrupted, cleaning up resources...")
    clearInterval(interval)
    try {
        await desktop.stream.stop() // Terminate streaming service
        await desktop.kill()        // Deallocate sandbox instance
    } catch (err) {
        console.error("Error cleaning up resources:", err)
    }
    process.exit(0)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)
```

Running example:![Run Example](https://mintcdn.com/novitaai/x1b8G4-Z9MJIBPJz/guides/images/sbx-e2b-desktop-run-tsx.png?fit=max&auto=format&n=x1b8G4-Z9MJIBPJz&q=85&s=f8cdcc27d9edc87ce0013b0f15c6b876)Access virtual desktop stream VNC URL:![Desktop Streaming](https://mintcdn.com/novitaai/x1b8G4-Z9MJIBPJz/guides/images/sbx-e2b-desktop-streaming.png?fit=max&auto=format&n=x1b8G4-Z9MJIBPJz&q=85&s=ae0782153ef8dd90e1225216f31a1bef)Additional implementation examples and advanced use cases are available in the [official E2B Desktop repository](https://github.com/e2b-dev/desktop/tree/main/examples).

Was this page helpful?

YesNo

[Shutdown running sandboxes](https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes) [BrowserUse](https://novita.ai/docs/guides/sandbox-integrations-browser-use)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Setup Environment Variables](https://mintcdn.com/novitaai/x1b8G4-Z9MJIBPJz/guides/images/sbx-e2b-desktop-env.png?w=1100&fit=max&auto=format&n=x1b8G4-Z9MJIBPJz&q=85&s=1391638fef47bba6cb2de5e27e19c668)

![Run Example](https://mintcdn.com/novitaai/x1b8G4-Z9MJIBPJz/guides/images/sbx-e2b-desktop-run-tsx.png?w=1100&fit=max&auto=format&n=x1b8G4-Z9MJIBPJz&q=85&s=0c6ef2146bd2e23105375cb7d50caf2d)

![Desktop Streaming](https://mintcdn.com/novitaai/x1b8G4-Z9MJIBPJz/guides/images/sbx-e2b-desktop-streaming.png?w=1100&fit=max&auto=format&n=x1b8G4-Z9MJIBPJz&q=85&s=8587152003ea29608349722570a4f9ca)