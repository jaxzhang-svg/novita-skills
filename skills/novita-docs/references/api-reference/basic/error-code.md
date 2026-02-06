---
url: "https://novita.ai/docs/api-reference/basic-error-code"
title: "API Error Codes - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/basic-error-code#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Basic

API Error Codes

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Image / Video / Audio](https://novita.ai/docs/api-reference/basic-error-code#image-%2F-video-%2F-audio)
- [LLM](https://novita.ai/docs/api-reference/basic-error-code#llm)
- [GPU](https://novita.ai/docs/api-reference/basic-error-code#gpu)
- [Billing](https://novita.ai/docs/api-reference/basic-error-code#billing)

## [​](https://novita.ai/docs/api-reference/basic-error-code\#image-/-video-/-audio)  Image / Video / Audio

| Error Name | Status Code | Description |
| --- | --- | --- |
| INVALID\_REQUEST\_BODY | 400 | Request parameter validation failed |
| IMAGE\_FILE\_EXCEEDS\_MAX\_SIZE | 400 | Image size exceeds limit |
| INVALID\_IMAGE\_FORMAT | 400 | Image format does not meet requirements |
| IMAGE\_EXCEEDS\_MAX\_RESOLUTION | 400 | Image resolution exceeds limit |
| INVALID\_IMAGE\_SIZE | 400 | Image width or height exceeds limit |
| API\_NOT\_FOUND | 404 | API not found |
| IMAGE\_NO\_FACE\_DETECTED | 400 | No face detected |
| INVALID\_CUSTOM\_OUTPUT\_PATH | 400 | Invalid OSS path |
| ILLEGAL\_PROMPT | 400 | Prompt contains inappropriate content |
| ILLEGAL\_IMAGE\_CONTENT | 400 | Image contains inappropriate content |
| INVALID\_AUDIO\_FILE | 400 | Invalid audio input |
| BILLING\_FAILED | 500 | Billing service error |
| BILLING\_AUTH\_FAILED | 403 | Billing service authentication failed |
| BILLING\_BALANCE\_NOT\_ENOUGH | 400 | Insufficient balance |
| MISSING\_API\_KEY | 400 | API Key not provided |
| INVALID\_API\_KEY | 403 | API Key validation failed |
| FEATURE\_NOT\_ALLOWED | 403 | No permission to upload model |
| API\_NOT\_ALLOWED | 403 | No permission to use this API |
| RATE\_LIMIT\_EXCEEDED | 429 | Rate limit exceeded |
| NEED\_REAL\_NAME\_VERIFY | 403 | Enterprise verification not completed |
| CREATE\_TASK\_FAILED | 500 | Failed to create task |
| TASK\_NOT\_FOUND | 404 | Task not found |
| GET\_RESULT\_FAILED | 500 | Failed to get task result |
| TASK\_FAILED | 500 | Task execution failed |

## [​](https://novita.ai/docs/api-reference/basic-error-code\#llm)  LLM

| Error Name | Status Code | Description |
| --- | --- | --- |
| INVALID\_API\_KEY | 403 | API Key not provided |
| MODEL\_NOT\_FOUND | 404 | Model not found |
| FAILED\_TO\_AUTH | 401 | Authentication failed |
| NOT\_ENOUGH\_BALANCE | 403 | Insufficient balance |
| INVALID\_REQUEST\_BODY | 400 | Request body format error, see message for details |
| RATE\_LIMIT\_EXCEEDED | 429 | Too many requests, please try again later |
| TOKEN\_LIMIT\_EXCEEDED | 429 | Token limit exceeded, please try again later |
| SERVICE\_NOT\_AVAILABLE | 503 | Service unavailable |
| ACCESS\_DENY | 403 | Access denied |

## [​](https://novita.ai/docs/api-reference/basic-error-code\#gpu)  GPU

| Error Name | Status Code | Description |
| --- | --- | --- |
| UNKNOWN | 500 | Unknown error |
| GET\_TOKEN\_FAILED | 400 | Failed to obtain token |
| FORBIDDEN | 403 | Access forbidden / No permission |
| UNAUTHORIZED | 401 | Unauthorized |
| USER\_ALREADY\_EXISTS | 400 | User already exists |
| INVALID\_USER\_OR\_PASSWORD | 400 | Invalid username or password |
| INVALID\_CODE | 400 | Invalid verification code |
| USER\_NOT\_FOUND | 400 | User not found |
| USER\_PHONE\_NOT\_CONSIST | 400 | User phone number mismatch |
| SEND\_CODE\_TOO\_FAST | 429 | Verification code sent too frequently |
| INVALID\_PUBLIC\_KEY | 400 | Invalid public key |
| USER\_NOT\_ACTIVATED | 400 | User not activated |
| USER\_ALREADY\_ACTIVATED | 400 | User already activated |
| INVALID\_USER\_TOKEN | 400 | Invalid user token |
| BANNED\_USER | 400 | Account has been banned |
| RATE\_LIMIT\_EXCEEDED | 429 | Request rate limit exceeded |
| RESOURCE\_NOT\_FOUND | 400 | Resource not found (e.g., container not found) |
| CONFLICT | 400 | Conflict (e.g., container conflict) |
| VALIDATOR\_PARAM | 400 | Parameter validation failed / Invalid parameter |
| REQUEST | 400 | Request error |
| OPERATION\_LIMIT | 400 | Operation limit reached |
| INSUFFICIENT\_RESOURCE | 400 | Insufficient resources |
| CLUSTER\_STATUS | 400 | Cluster status abnormal |
| NODE\_STATUS | 400 | Node status abnormal |
| DEPENDENT\_RESOURCE\_STATE | 400 | Dependent resource state abnormal |
| PREPAID\_INSTANCE\_NOT\_SUPPORT\_RELEASE | 400 | Prepaid instance does not support release |
| CREATING\_INSTANCE\_NOT\_SUPPORT\_RENEWAL | 400 | Instance in creation does not support renewal |
| INSTANCE\_LOCAL\_STORAGE\_NOT\_FOUND | 400 | Instance local storage not found |
| INVALID\_COMMAND\_PARAM | 400 | Invalid instance startup command parameter |
| GPU\_SPEC\_USED | 400 | GPU specification already in use |
| INCORRECT\_USER\_SYNCER\_REQUIRE\_PARAMS | 400 | Incorrect user syncer request parameters |
| MIGRATE\_INSUFFICIENT\_RESOURCE | 400 | Insufficient resources for migration |
| WALLET\_NOT\_FOUND | 500 | Wallet not found |
| WALLET\_UNSUPPORT\_RECHARGE\_METHOD | 400 | Unsupported wallet recharge method |
| BALANCE\_NOT\_ENOUGH | 400 | Insufficient balance |
| UNSUPPORTED\_BILLING\_MODE | 400 | Unsupported billing mode |
| EXPIRED\_OR\_BALANCE\_NOT\_ENOUGH | 400 | Expired or insufficient balance |
| ORDER\_NOT\_FOUND | 400 | Order not found |
| SAVING\_PLAN\_ALREADY\_EXISTS | 400 | Saving plan already exists |
| CREATE\_INSTANCE\_LIMIT | 400 | Instance creation limit reached, please recharge or delete other instances |
| NETWORK\_STORAGE\_TOO\_LARGE | 400 | Network storage size exceeds limit |
| CUR\_CLUSTER\_NETWORK\_STORAGE\_NOT\_SUPPORT | 400 | Network storage not supported in current region |
| NETWORK\_STORAGE\_IN\_USE | 400 | Network storage is in use |
| NETWORK\_STORAGE\_UNAVAILABLE | 400 | Network storage unavailable |
| NETWORK\_STORAGE\_NOT\_FOUND | 400 | Network storage not found |
| IMAGE\_NOT\_FOUND | 400 | Image not found |
| IMAGE\_AUTH\_IN\_USE | 400 | Image authentication in use |
| NETWORK\_NOT\_FOUND | 400 | Instance network not found |
| NETWORK\_IN\_USE | 400 | Instance network in use |
| NETWORK\_MAX\_LIMIT | 400 | Instance network creation limit exceeded |
| SEND\_MSG\_ERROR | 400 | Message sending error |
| JOB\_NOT\_FOUND | 400 | Instance job not found |
| SERVERLESS\_ENDPOINT\_NOT\_FOUND | 400 | Serverless endpoint not found |
| SERVERLESS\_WORKER\_NOT\_FOUND | 400 | Serverless worker not found |
| SERVERLESS\_PRODUCT\_NOT\_FOUND | 400 | Serverless product not found |
| SERVERLESS\_APP\_NAME\_IS\_EXIST | 400 | Serverless application name already exists |
| TEMPLATE\_IS\_PRIVATE | 400 | Template is private |
| TEMPLATE\_NOT\_FOUND | 400 | Template not found |

## [​](https://novita.ai/docs/api-reference/basic-error-code\#billing)  Billing

| Error Name | Status Code | Description |
| --- | --- | --- |
| UNKNOWN | 500 | Unknown error, please contact us |
| LIST\_BILL\_TOO\_FAST | 429 | Requests are too frequent, please try again later |
| INVALID\_PRODUCT\_CATEGORY | 400 | Invalid productCategory parameter |
| INVALID\_BILL\_CYCLE | 400 | Invalid cycle parameter |
| LIST\_BILL\_ERROR | 500 | Query error, please contact us |

Was this page helpful?

YesNo

[Authentication](https://novita.ai/docs/api-reference/basic-authentication) [User Balance Info](https://novita.ai/docs/api-reference/basic-get-user-balance)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.