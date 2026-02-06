---
url: "https://novita.ai/docs/guides/LLM-FAQ"
title: "LLM FAQs - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/LLM-FAQ#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

LLM FAQs

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Voucher Usage Guide](https://novita.ai/docs/guides/LLM-FAQ#voucher-usage-guide)
- [What types of voucher does Novita provide?](https://novita.ai/docs/guides/LLM-FAQ#what-types-of-voucher-does-novita-provide)
- [Rate Limits for Model Usage](https://novita.ai/docs/guides/LLM-FAQ#rate-limits-for-model-usage)
- [What are the RPM limits for different users?](https://novita.ai/docs/guides/LLM-FAQ#what-are-the-rpm-limits-for-different-users)
- [RPM Adjustment and Upgrade Policy](https://novita.ai/docs/guides/LLM-FAQ#rpm-adjustment-and-upgrade-policy)
- [Can users apply for increased RPM limits?](https://novita.ai/docs/guides/LLM-FAQ#can-users-apply-for-increased-rpm-limits)
- [Application process:](https://novita.ai/docs/guides/LLM-FAQ#application-process)
- [What happens if actual usage falls short of the committed RPM?](https://novita.ai/docs/guides/LLM-FAQ#what-happens-if-actual-usage-falls-short-of-the-committed-rpm)
- [Is self-service RPM upgrade supported?](https://novita.ai/docs/guides/LLM-FAQ#is-self-service-rpm-upgrade-supported)
- [How to control thinking function of Zai-org/GLM-4.5 when calling its API?](https://novita.ai/docs/guides/LLM-FAQ#how-to-control-thinking-function-of-zai-org%2Fglm-4-5-when-calling-its-api)

## [​](https://novita.ai/docs/guides/LLM-FAQ\#voucher-usage-guide)  Voucher Usage Guide

### [​](https://novita.ai/docs/guides/LLM-FAQ\#what-types-of-voucher-does-novita-provide)  What types of voucher does Novita provide?

Novita currently offers the following types of vouchers to help users experience the platform’s services:

- **New User Voucher**: Available to first-time registered users for trying out services of various types of models.
- **Referral Voucher**: Earned by inviting others to register and complete tasks on the platform.

## [​](https://novita.ai/docs/guides/LLM-FAQ\#rate-limits-for-model-usage)  Rate Limits for Model Usage

### [​](https://novita.ai/docs/guides/LLM-FAQ\#what-are-the-rpm-limits-for-different-users)  What are the RPM limits for different users?

RPM (Requests Per Minute) limits vary based on a user’s verification level and account status. For detailed limits, please refer to the official documentation:

👉 For further assistance, please [book a call with our sales team](https://meet.brevo.com/novita-ai/contact-sales)

## [​](https://novita.ai/docs/guides/LLM-FAQ\#rpm-adjustment-and-upgrade-policy)  RPM Adjustment and Upgrade Policy

### [​](https://novita.ai/docs/guides/LLM-FAQ\#can-users-apply-for-increased-rpm-limits)  Can users apply for increased RPM limits?

Yes. Novita allows flexible RPM upgrades based on usage needs. Rules are listed as below:

- **DeepSeek models**: The platform will strive to accommodate reasonable scaling needs.
- **Other models**: RPM increases are evaluated based on model cost and actual user behavior, subject to capacity availability.

### [​](https://novita.ai/docs/guides/LLM-FAQ\#application-process)  **Application process:**

User → Customer Manager / Tech Support → Product Team Review & Approval

### [​](https://novita.ai/docs/guides/LLM-FAQ\#what-happens-if-actual-usage-falls-short-of-the-committed-rpm)  **What happens if actual usage falls short of the committed RPM?**

If the user’s actual RPM remains below the committed level for one consecutive week, the platform will adjust the rate limits policy as:

- Reduce the limit to the peak RPM in the past week, or
- Revert to the model’s default rate limit (whichever is lower).

### [​](https://novita.ai/docs/guides/LLM-FAQ\#is-self-service-rpm-upgrade-supported)  **Is self-service RPM upgrade supported?**

Yes. Novita plans to launch an **RPM Upgrade Package**, allowing users to manage and increase RPM limits independently, without manual approval.For further assistance, please [book a call with our sales team](https://meet.brevo.com/novita-ai/contact-sales).

### [​](https://novita.ai/docs/guides/LLM-FAQ\#how-to-control-thinking-function-of-zai-org/glm-4-5-when-calling-its-api)  How to control thinking function of Zai-org/GLM-4.5 when calling its API?

When calling API zai-org/glm-4.5, there always exists some situations where thinking function is not needed. In these cases, if you want to turn thinking function off, you can simply add one fixed sentence called:

Copy

```
"enable_thinking": false
```

at the bottom, for example:

Copy

```
{
  "model": "zai-org/glm-4.5",
  "messages": [\
  {\
   "role": "user",\
   "content": "How is the weather in New York?"\
  }\
 ],
 "temperature": 0.7,
 "stream": false,
 "max_tokens": 500,
 "tool_choice": "auto",
 "enable_thinking": false
}
```

Was this page helpful?

YesNo

[Common Error Codes](https://novita.ai/docs/guides/error) [SDKs for Model APIs](https://novita.ai/docs/guides/model-apis-sdks)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.