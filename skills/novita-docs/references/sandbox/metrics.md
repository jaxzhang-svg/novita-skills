---
url: "https://novita.ai/docs/guides/sandbox-metrics"
title: "Sandbox Metrics - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-metrics#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Sandbox

Sandbox Metrics

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Getting sandbox metrics](https://novita.ai/docs/guides/sandbox-metrics#getting-sandbox-metrics)
- [Getting sandbox metrics using the SDKs](https://novita.ai/docs/guides/sandbox-metrics#getting-sandbox-metrics-using-the-sdks)
- [Getting sandbox metrics using the CLI](https://novita.ai/docs/guides/sandbox-metrics#getting-sandbox-metrics-using-the-cli)
- [Limitations](https://novita.ai/docs/guides/sandbox-metrics#limitations)

The sandbox metrics allows you to get information about the sandbox’s CPU and memory usage.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

## [​](https://novita.ai/docs/guides/sandbox-metrics\#getting-sandbox-metrics)  Getting sandbox metrics

Getting the metrics of a sandbox returns an array of timestamped metrics containing CPU and memory usage information.
The metrics are collected at the start of the sandbox, then every 2 seconds, and finally right before the sandbox is deleted.

### [​](https://novita.ai/docs/guides/sandbox-metrics\#getting-sandbox-metrics-using-the-sdks)  Getting sandbox metrics using the SDKs

JavaScript & TypeScript

Python

Copy

```
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()
console.log('Sandbox created', sandbox.sandboxId)

let metrics = await sandbox.getMetrics()

// You can also get the metrics by sandbox ID:
// const metrics = await Sandbox.getMetrics(sbx.sandboxId)

while (metrics && metrics.length <= 1) {
    console.log('Waiting for metrics...')
    await new Promise(resolve => setTimeout(resolve, 1000))
    metrics = await sandbox.getMetrics()
}

console.log('Sandbox metrics:', metrics)

// Example output:
// Sandbox metrics: [\
//   {\
//     cpuCount: 2,\
//     cpuUsedPct: 17.85,\
//     memTotalMiB: 987,\
//     memUsedMiB: 245,\
//     timestamp: '2025-06-30T06:49:15.243Z'\
//   },\
//   {\
//     cpuCount: 2,\
//     cpuUsedPct: 0.4,\
//     memTotalMiB: 987,\
//     memUsedMiB: 246,\
//     timestamp: '2025-06-30T06:49:20.237Z'\
//   }\
// ]

await sandbox.kill()
```

### [​](https://novita.ai/docs/guides/sandbox-metrics\#getting-sandbox-metrics-using-the-cli)  Getting sandbox metrics using the CLI

Bash

Copy

```
novita-sandbox-cli sandbox metrics <sandbox_id>
```

## [​](https://novita.ai/docs/guides/sandbox-metrics\#limitations)  Limitations

- It may take a second or more to get the metrics after the sandbox is created. Until the logs are collected from the sandbox, you will get an empty array.

Was this page helpful?

YesNo

[Sandbox Persistence](https://novita.ai/docs/guides/sandbox-persistence) [Sandbox Metadata](https://novita.ai/docs/guides/sandbox-metadata)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.