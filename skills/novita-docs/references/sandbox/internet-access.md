---
url: "https://novita.ai/docs/guides/sandbox-internet-access"
title: "Internet access - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-internet-access#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Internet access

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Sandbox public URL](https://novita.ai/docs/guides/sandbox-internet-access#sandbox-public-url)
- [Connecting to a server running inside the sandbox](https://novita.ai/docs/guides/sandbox-internet-access#connecting-to-a-server-running-inside-the-sandbox)

Every sandbox has access to the internet and can be reached by a public URL.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

## [​](https://novita.ai/docs/guides/sandbox-internet-access\#sandbox-public-url)  Sandbox public URL

Every sandbox has a public URL that can be used to access running services inside the sandbox.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// You need to always pass a port number to get the host
const host = sandbox.getHost(3000)
console.log(`https://${host}`)

// Example output:
// https://3000-idpw1qdrbcciscn2r8lw7-82b888ba.sandbox.novita.ai

await sandbox.kill()
```

The first leftmost part of the host is the port number we passed to the method.

## [​](https://novita.ai/docs/guides/sandbox-internet-access\#connecting-to-a-server-running-inside-the-sandbox)  Connecting to a server running inside the sandbox

You can start a server inside the sandbox and connect to it using the approach above.In this example we will start a simple HTTP server that listens on port 3000 and responds with the content of the directory where the server is started.

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// Start a simple HTTP server inside the sandbox.
const commandHandle = await sandbox.commands.run('python -m http.server 3000', { background: true })
const host = sandbox.getHost(3000)
const url = `https://${host}`
console.log('Server started at:', url)

// Fetch data from the server inside the sandbox.
const response = await fetch(url);
const data = await response.text();
console.log('Response from server inside sandbox:', data);

// Kill the server process inside the sandbox.
await commandHandle.kill()

// Example output:
// Server started at: https://3000-ibbw4zmqp38s77v1vbykj-d0b9e1e2.sandbox.novita.ai
// Response from server inside sandbox: <!DOCTYPE HTML>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>Directory listing for /</title>
// </head>
// <body>
// <h1>Directory listing for /</h1>
// <hr>
// <ul>
// <li><a href=".bash_logout">.bash_logout</a></li>
// <li><a href=".bashrc">.bashrc</a></li>
// <li><a href=".profile">.profile</a></li>
// </ul>
// <hr>
// </body>
// </html>

await sandbox.kill()
```

Was this page helpful?

YesNo

[Connect to running sandbox](https://novita.ai/docs/guides/sandbox-connect) [Mount object storage bucket](https://novita.ai/docs/guides/sandbox-mount-cloudstorage)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.