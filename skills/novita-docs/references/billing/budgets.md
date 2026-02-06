---
url: "https://novita.ai/docs/guides/budgets"
title: "Budgets - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/budgets#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Resources

Budgets

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Permissions](https://novita.ai/docs/guides/budgets#permissions)
- [Budget Control Modes](https://novita.ai/docs/guides/budgets#budget-control-modes)
- [1\. Budget Type Description](https://novita.ai/docs/guides/budgets#1-budget-type-description)
- [2\. Budget Type Switching](https://novita.ai/docs/guides/budgets#2-budget-type-switching)
- [Adjusting Member Budget Limits](https://novita.ai/docs/guides/budgets#adjusting-member-budget-limits)
- [Budget Usage & Service Invocation Rules](https://novita.ai/docs/guides/budgets#budget-usage-%26-service-invocation-rules)

The **Team Member Budgets** feature allows you to set flexible spending limits for each member,helping you effectively control overall costs.

> **Note**: This feature is only available for team accounts. Personal accounts or accounts not part of a team will see the menu but cannot access budget management functionalities. You can convert your personal account into a team account or join an existing team to collaborate with others.

## [​](https://novita.ai/docs/guides/budgets\#permissions)  Permissions

- Only the **Team Owner**, **Admin**, and **Billing Roles** can check and manage team budgets.
- **Developer** and **Basic Roles** can only view their own budget type and budget limit, and cannot make changes.

## [​](https://novita.ai/docs/guides/budgets\#budget-control-modes)  Budget Control Modes

For all team members, the system enforces budget execution and reset logic based on each member’s **Budget Type**.

### [​](https://novita.ai/docs/guides/budgets\#1-budget-type-description)  1\. Budget Type Description

| **Budget Type** | **Description** | **Example** |
| --- | --- | --- |
| **Unlimited** | No limit | Unlimited usage |
| **One-time** | One-time budget | budget frozen once consumed |

### [​](https://novita.ai/docs/guides/budgets\#2-budget-type-switching)  2\. Budget Type Switching

When an administrator changes a member’s budget type, the system applies the following transition rules:

| **Switch Path** | **Processing Logic** |
| --- | --- |
| Unlimited → One-time | The new budget will take effect immediately, with current spending reset to zero and tracked under the new budget cycle. |
| One-time → Unlimited | Current quota and restrictions are immediately discarded, and unlimited quota begins. |

## [​](https://novita.ai/docs/guides/budgets\#adjusting-member-budget-limits)  Adjusting Member Budget Limits

Please follow the steps below to adjust a member’s budget:

1. Go to the [**Team Member Budgets**](https://novita.ai/billing/budgets) page.
2. Find the relevant member in the list, or use the search box to quickly locate them. Budgets can be configured for both current team members and invited members who are pending acceptance.

![Budges01 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/Budges01.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=c7df2a97caf5dfbe4a16cdaf30f4427b)

3. Click the “ **Edit”** button and select the desired budget type.

   - New members are set to **Unlimited** by default, and this can be changed at any time.
   - The **One-time** budget type allows you to set a specific budget limit.

![Budges02 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/Budges02.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=05736cda09f305ecbe2d59cc4c0cc4ab)

4. Click the “ **Refresh”** button to get the latest budget and consumption data.

![Budges03 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/Budges03.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=779bca0d1f3a71c0d73945756120b92e)

> **Note**: Budget changes take effect immediately. Once a member’s quota is exhausted, they will be unable to initiate new service calls.

## [​](https://novita.ai/docs/guides/budgets\#budget-usage-&-service-invocation-rules)  Budget Usage & Service Invocation Rules

- All API Keys created by a member share the same budget pool.
- Before any service is started, the system will automatically check both the wallet balance and the member’s remaining quota. If either is insufficient, the request will be denied.
- Upon reaching the budget limit, all related tasks will be automatically stopped.

Was this page helpful?

YesNo

[Payment Methods](https://novita.ai/docs/guides/payment-methods) [Automatic Top-Up](https://novita.ai/docs/guides/auto-top-up)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Budges01 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/Budges01.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=210f95d672a8d49f5aad3fbbc32c6f36)

![Budges02 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/Budges02.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=3d407a815d8ac293284076dae04bc24d)

![Budges03 Pn](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/Budges03.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=7069ee360d03f807317be170ee4761c8)