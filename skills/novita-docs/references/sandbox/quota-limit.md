---
url: "https://novita.ai/docs/guides/sandbox-quota-limit"
title: "Quota Limit - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-quota-limit#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

Quota Limit

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Agent Sandbox CPU and Memory Ratio Restrictions](https://novita.ai/docs/guides/sandbox-quota-limit#agent-sandbox-cpu-and-memory-ratio-restrictions)
- [CPU Restrictions](https://novita.ai/docs/guides/sandbox-quota-limit#cpu-restrictions)
- [Memory Restrictions](https://novita.ai/docs/guides/sandbox-quota-limit#memory-restrictions)
- [Ratio Rules](https://novita.ai/docs/guides/sandbox-quota-limit#ratio-rules)
- [Example Overview](https://novita.ai/docs/guides/sandbox-quota-limit#example-overview)
- [Notes](https://novita.ai/docs/guides/sandbox-quota-limit#notes)

Currently, each user allows to create a maximum of **100** concurrent sandboxes by default. The quota can be adjusted based on your requirements after our evaluation.If you need a higher quota, please [contact our support team](https://meet.brevo.com/novita-ai/contact-sales).

## [​](https://novita.ai/docs/guides/sandbox-quota-limit\#agent-sandbox-cpu-and-memory-ratio-restrictions)  Agent Sandbox CPU and Memory Ratio Restrictions

When creating an Agent sandbox template, the system enforces constraints on the ratio between **CPU** and **memory**. These restrictions are designed to ensure the stability and resource efficiency of Agent sandboxes, and to avoid operational issues caused by unreasonable resource allocation.

### [​](https://novita.ai/docs/guides/sandbox-quota-limit\#cpu-restrictions)  CPU Restrictions

- Supported CPU specification range: **1‒8 vCPU**
- Only integer values for CPU count are supported, such as: `1`, `2`, `4`, `8 vCPU`

### [​](https://novita.ai/docs/guides/sandbox-quota-limit\#memory-restrictions)  Memory Restrictions

- Maximum memory limit: **8192 MiB (8 GiB)**
- Memory must be an integer multiple of **512 MiB**, e.g.: `512 MiB`, `1024 MiB`, `2048 MiB`, etc.

### [​](https://novita.ai/docs/guides/sandbox-quota-limit\#ratio-rules)  Ratio Rules

| Item | Restriction Requirement | Description |
| --- | --- | --- |
| Minimum Ratio | 1:0.5 (CPU:Memory) | Each 1 vCPU requires at least: 0.5 × 1024 = **512 MiB** memory |
| Maximum Ratio | 1:4 (CPU:Memory) | Each 1 vCPU can allocate up to: 4 × 1024 = **4096 MiB** memory |
| Memory Step | 512 MiB increments | Memory must be a multiple of 512 MiB, e.g.: 512 MiB, 1024 MiB, 1536 MiB, etc. |

### [​](https://novita.ai/docs/guides/sandbox-quota-limit\#example-overview)  Example Overview

| CPU Spec | Minimum Memory | Maximum Value by Ratio | Actual Maximum Selectable |
| --- | --- | --- | --- |
| 1 vCPU | 512 MiB | 4096 MiB (4 GiB) | 4096 MiB (4 GiB) |
| 2 vCPU | 1024 MiB (1 GiB) | 8192 MiB (8 GiB) | 8192 MiB (8 GiB) |
| 4 vCPU | 2048 MiB (2 GiB) | 16384 MiB (16 GiB) | 8192 MiB (8 GiB) |
| 8 vCPU | 4096 MiB (4 GiB) | 32768 MiB (32 GiB) | 8192 MiB (8 GiB) |

### [​](https://novita.ai/docs/guides/sandbox-quota-limit\#notes)  Notes

- The above rules are only effective **when creating the [sandbox template](https://novita.ai/docs/guides/sandbox-template)**. Sandboxes launched from this template will inherit its specifications.
- The memory upper limit is **8192 MiB (8 GiB)** by default; even if the calculated ratio exceeds this value, the actual selectable memory cannot surpass this limit.
- If the configuration is out of range, the system will prompt an error and the user needs to select again.
- It is recommended to reasonably choose the CPU to memory ratio according to your workload, to avoid OOM (out-of-memory) errors due to insufficient resources or wasting resources due to overallocation.

Was this page helpful?

YesNo

[Pricing](https://novita.ai/docs/guides/sandbox-pricing) [Console](https://novita.ai/docs/guides/sandbox-console)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.