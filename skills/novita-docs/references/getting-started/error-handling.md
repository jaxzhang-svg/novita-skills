---
url: "https://novita.ai/docs/guides/error"
title: "Common Error Codes - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/error#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Common Error Codes

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Error Code 400](https://novita.ai/docs/guides/error#error-code-400)
- [Error Code 401](https://novita.ai/docs/guides/error#error-code-401)
- [Error Code 403](https://novita.ai/docs/guides/error#error-code-403)
- [Error Code 429](https://novita.ai/docs/guides/error#error-code-429)
- [Error Code 503 / 504](https://novita.ai/docs/guides/error#error-code-503-%2F-504)
- [Possible Causes:](https://novita.ai/docs/guides/error#possible-causes)
- [Recommended Solutions:](https://novita.ai/docs/guides/error#recommended-solutions)
- [Error Code 500](https://novita.ai/docs/guides/error#error-code-500)
- [Other Errors](https://novita.ai/docs/guides/error#other-errors)

This document summarizes the most common error codes returned by the Novita API platform, along with definitions, causes, and recommended solutions to help users troubleshoot efficiently.

* * *

## [​](https://novita.ai/docs/guides/error\#error-code-400)  Error Code 400

**Description**: Invalid request parameters.

**Solution**:

Review the error message details and check whether the parameter formats, field names, or value ranges comply with the API documentation.

* * *

## [​](https://novita.ai/docs/guides/error\#error-code-401)  Error Code 401

**Description**: API Key is missing or incorrect.

**Solution**:

- Ensure the API Key is provided in the request;
- Verify that the API Key is correct and has not expired;
- If using environment variables or config files, confirm they are being read correctly during execution.

* * *

## [​](https://novita.ai/docs/guides/error\#error-code-403)  Error Code 403

**Description**: Access denied due to insufficient permissions.

**Solution**:

- Verify that your account associated with the API Key has permission to access the requested model;
- Some models require identity verification to access:
  - Log in to the console and check your account’s verification status;
  - If not verified, complete identity verification first;
  - Alternatively, use an API Key from an already verified account.

* * *

## [​](https://novita.ai/docs/guides/error\#error-code-429)  Error Code 429

**Description**: Rate limit exceeded (Too Many Requests).

**Solution**:

- Check if the limit is due to **TPM** (tokens per minute) or **RPM** (requests per minute);
- Refer to the official Rate Limits documentation;
- To raise your rate limit, contact support or use a verified account.

* * *

## [​](https://novita.ai/docs/guides/error\#error-code-503-/-504)  Error Code 503 / 504

**Description**: Backend timeout or service unavailable, often caused by high system load or throttling.

### [​](https://novita.ai/docs/guides/error\#possible-causes)  Possible Causes:

- GPU or CPU overload on model service nodes;
- Long generation time on non-streaming requests exceeds gateway timeout;
- Failures in downstream services (e.g., Redis, model engine);
- Traffic shaping module activated surge protection and returned 503.

### [​](https://novita.ai/docs/guides/error\#recommended-solutions)  Recommended Solutions:

**For API Users**:

- **Enable retry mechanism**: Use exponential backoff to prevent repeated overload;
- **Switch to streaming mode**: Streaming responses return tokens as they’re generated, lowering latency and timeout risk;
- **Optimize client settings**: Ensure `client_timeout` and `proxy_timeout` exceed 60 seconds;
- **Avoid peak periods**: For high concurrency scenarios, retry during off-peak hours.

**For Platform Ops**:

- Enhance monitoring and auto-scaling of model services;
- Adjust gateway-level `proxy_read_timeout` appropriately;
- Implement fine-grained throttling rules (e.g., priority queues, core-business prioritization);
- Use Prometheus + Alertmanager to trigger alerts on 503/504 spikes.

* * *

## [​](https://novita.ai/docs/guides/error\#error-code-500)  Error Code 500

**Description**: Internal server error—typically caused by backend exceptions or model engine crashes.

**Solution**:

- These issues usually require platform-side resolution. Contact support to investigate logs and system resources;
- Optionally, try switching models or falling back to a less resource-intensive configuration.

* * *

## [​](https://novita.ai/docs/guides/error\#other-errors)  Other Errors

For undefined or undocumented errors:

- First, refer to the `message` field in the API response;
- Next, check request logs or console traces;
- Finally, contact Novita support or submit a ticket for further assistance.

Was this page helpful?

YesNo

[Interleaved Thinking Supporty](https://novita.ai/docs/guides/llm-interleaved-thinking) [LLM FAQs](https://novita.ai/docs/guides/LLM-FAQ)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.