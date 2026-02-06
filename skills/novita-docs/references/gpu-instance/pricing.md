---
url: "https://novita.ai/docs/guides/gpu-instance-pricing"
title: "GPU Instance Pricing - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/gpu-instance-pricing#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Guides

GPU Instance Pricing

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [On-Demand Pricing](https://novita.ai/docs/guides/gpu-instance-pricing#on-demand-pricing)
- [Introduction](https://novita.ai/docs/guides/gpu-instance-pricing#introduction)
- [Billing Structure of On-Demand Pricing](https://novita.ai/docs/guides/gpu-instance-pricing#billing-structure-of-on-demand-pricing)
- [1\. Computing Resources](https://novita.ai/docs/guides/gpu-instance-pricing#1-computing-resources)
- [2\. Storage Resources](https://novita.ai/docs/guides/gpu-instance-pricing#2-storage-resources)
- [Advantages of On-Demand Pricing for Different Scenarios](https://novita.ai/docs/guides/gpu-instance-pricing#advantages-of-on-demand-pricing-for-different-scenarios)

## [​](https://novita.ai/docs/guides/gpu-instance-pricing\#on-demand-pricing)  On-Demand Pricing

### [​](https://novita.ai/docs/guides/gpu-instance-pricing\#introduction)  Introduction

On-Demand Pricing is designed to offer users the flexibility to access computational resources without any long-term commitments or upfront costs. This pricing model is ideal for users who require compute power on an as-needed basis, whether for short-term projects, variable workloads, or unpredictable processing demands.

### [​](https://novita.ai/docs/guides/gpu-instance-pricing\#billing-structure-of-on-demand-pricing)  Billing Structure of On-Demand Pricing

Includes “computing resources” and “storage resources”, you can view the billing details on the [Billing Explore](https://novita.ai/gpu-instance/console/billing).

#### [​](https://novita.ai/docs/guides/gpu-instance-pricing\#1-computing-resources)  1\. Computing Resources

**Cost = Instance Unit Price × Billing Duration × Number of Cards**

- Billing duration is accurate to the second and settled hourly;
- You can view the unit prices of various instance specifications on the [GPU Instance Explore](https://novita.ai/gpu-instance/console);
- The billing start time is when the instance is successfully created and enters the **pulling** state, and the billing stop time is when the instance is stopped.

#### [​](https://novita.ai/docs/guides/gpu-instance-pricing\#2-storage-resources)  2\. Storage Resources

| **Billing Item** | **Billing Method** | **Explanation** | **Billing Logic** |
| --- | --- | --- | --- |
| Container Disk | Pay-as-you-go | Supports **60GB** free quota, charges for the excess based on capacity and usage duration. | Unit price for the excess capacity: **$0.005/GB/day** |
| Volume Disk | Pay-as-you-go | Charges based on capacity and usage duration. | Unit price: **$0.005/GB/day** |
| Network Volume | Pay-as-you-go | Charges based on capacity and usage duration. | Unit price: **$0.002/GB/day** |

### [​](https://novita.ai/docs/guides/gpu-instance-pricing\#advantages-of-on-demand-pricing-for-different-scenarios)  Advantages of On-Demand Pricing for Different Scenarios

- **Short-Term Projects**: For projects with a limited duration, On-Demand Pricing allows you to align your compute costs with the project timeline.
- **Variable Workloads**: If your workloads fluctuate, On-Demand Pricing provides the flexibility to scale up or down as needed without incurring fixed costs.
- **Testing and Development**: For testing new applications or developing code, On-Demand Pricing offers a cost-effective way to access necessary compute resources without long-term financial commitments.

Was this page helpful?

YesNo

[Connect to Instance](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance) [Edit Instance](https://novita.ai/docs/guides/gpu-instance-edit-instance)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.