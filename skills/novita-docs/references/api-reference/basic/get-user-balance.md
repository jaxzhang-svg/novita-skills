---
url: "https://novita.ai/docs/api-reference/basic-get-user-balance"
title: "User Balance Info - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/basic-get-user-balance#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Basic

User Balance Info

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

User Balance Info

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/balance/detail \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "availableBalance": "<string>",
  "cashBalance": "<string>",
  "creditLimit": "<string>",
  "outstandingInvoices": "<string>"
}
```

GET

https://api.novita.ai

/

openapi

/

v1

/

billing

/

balance

/

detail

Try it

User Balance Info

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/balance/detail \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "availableBalance": "<string>",
  "cashBalance": "<string>",
  "creditLimit": "<string>",
  "outstandingInvoices": "<string>"
}
```

## [​](https://novita.ai/docs/api-reference/basic-get-user-balance\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/basic-get-user-balance#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/basic-get-user-balance#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/basic-get-user-balance\#response)  Response

[​](https://novita.ai/docs/api-reference/basic-get-user-balance#param-available-balance)

availableBalance

string

The user’s credit balance, unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-get-user-balance#param-cash-balance)

cashBalance

string

The remaining balance of your top-up. The Unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-get-user-balance#param-credit-limit)

creditLimit

string

Your credit limit (i.e., the maximum amount you can owe), unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-get-user-balance#param-outstanding-invoices)

outstandingInvoices

string

The amount you currently owe, unit is 0.0001 USD.

Was this page helpful?

YesNo

[API Error Codes](https://novita.ai/docs/api-reference/basic-error-code) [Query Monthly Bill](https://novita.ai/docs/api-reference/basic-query-monthly-bill)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.