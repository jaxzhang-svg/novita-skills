---
url: "https://novita.ai/docs/guides/sandbox-pricing"
title: "Pricing - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-pricing#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

Pricing

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Billing Items](https://novita.ai/docs/guides/sandbox-pricing#billing-items)
- [Pricing](https://novita.ai/docs/guides/sandbox-pricing#pricing)
- [Get Bills](https://novita.ai/docs/guides/sandbox-pricing#get-bills)
- [Overdue Payment Notice](https://novita.ai/docs/guides/sandbox-pricing#overdue-payment-notice)

Agent Sandbox supports independent billing for CPU and RAM (memory) by the second, with on-demand usage and flexible billing.

## [​](https://novita.ai/docs/guides/sandbox-pricing\#billing-items)  Billing Items

| Billing Item | Description |
| --- | --- |
| CPU | Billed based on the number of vCPU cores used and usage duration (accurate to the second). Current pricing can be found on the [here](https://novita.ai/pricing?sandbox=1). No billing occurs after the Sandbox is stopped. |
| RAM (memory) | Billed based on allocated memory capacity and usage duration (accurate to the second). Current pricing can be found on the [here](https://novita.ai/pricing?sandbox=1). No billing occurs after the Sandbox is stopped. |
| [Storage](https://novita.ai/docs/guides/sandbox-filesystem) | Current pricing can be found on the [here](https://novita.ai/pricing?sandbox=1). |
| [Templates](https://novita.ai/docs/guides/sandbox-template) | Currently free. |

## [​](https://novita.ai/docs/guides/sandbox-pricing\#pricing)  Pricing

- **CPU**

| vCPUs (cores) | Unit Price |
| --- | --- |
| 1 | $0.0000098/s |
| 2 | $0.0000196/s |
| 3 | $0.0000294/s |
| 4 | $0.0000392/s |
| 5 | $0.000049/s |
| 6 | $0.0000588/s |
| 7 | $0.0000686/s |
| 8 | $0.0000784/s |

- **RAM (memory)**

| Memory (MiB) | Unit Price |
| --- | --- |
| Valid values: multiples of 512 MiB, from 512 MiB to 8192 MiB | $0.0000032/GiB/s |
| 512 MiB | $0.0000016/s |
| 1 GiB | $0.0000032/s |
| 2 GiB | $0.0000064/s |

- **Storage**

| Memory (MiB) | Unit Price |
| --- | --- |
| Each account includes 60 GB of free storage. Usage beyond this limit is billed on a pay-as-you-go basis. | $0.00009/GB/h |

## [​](https://novita.ai/docs/guides/sandbox-pricing\#get-bills)  Get Bills

You can view and export Agent Sandbox bills in “Billing - Billing Details - Usage-based Billing”.

- Go to the [billing details page](https://novita.ai/billing/details);
- Select the “Usage-based Billing” tab on the right, then click the “Agent Sandbox” secondary tab below;
- You can set the “Time Range” and “Group By” filters;
- You can click “Export” button after querying to export bill data as an .xlsx file.

## [​](https://novita.ai/docs/guides/sandbox-pricing\#overdue-payment-notice)  Overdue Payment Notice

If the account’s available balance (including available balance and voucher balance) is less than the bill to be paid, the account is considered overdue. Overdue payments will result in sandboxes being terminated and data loss, affecting your service. During usage, please ensure sufficient account balance. After overdue, the system will send relevant notification emails, please recharge promptly.You can confirm account balance and vouchers on the [payments](https://novita.ai/billing) page, recharge as needed.

To avoid overdue payments affecting your service, it is recommended that you set up [low balance alerts](https://novita.ai/billing/balance-warning). When your account balance is less than the alert threshold you set, an notification email will be sent.

The specific **overdue payment impacts** are as follows:

- Unable to start new sandboxes.
- Running sandboxes will be terminated.

Was this page helpful?

YesNo

[E2B SDK Compatibility](https://novita.ai/docs/guides/sandbox-e2b-compatible) [Quota Limit](https://novita.ai/docs/guides/sandbox-quota-limit)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.