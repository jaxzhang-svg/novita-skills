---
url: "https://novita.ai/docs/api-reference/basic-query-usage-based-billing"
title: "Query Usage-based Billing - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Basic

Query Usage-based Billing

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Query Usage-based Billing

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/bill/list \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "bills": [\
    {\
      "userId": "<string>",\
      "startTime": "<string>",\
      "endTime": "<string>",\
      "billingMethod": "<string>",\
      "productName": "<string>",\
      "category": "<string>",\
      "ownerID": "<string>",\
      "billNum0": "<string>",\
      "billNum1": "<string>",\
      "basePrice0": "<string>",\
      "basePrice1": "<string>",\
      "discountPrice0": "<string>",\
      "discountPrice1": "<string>",\
      "amount": "<string>",\
      "voucherAmount": "<string>",\
      "payAmount": "<string>",\
      "payAmountDisplay": "<string>",\
      "pricePrecision": "<string>",\
      "productId": "<string>"\
    }\
  ]
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

bill

/

list

Try it

Query Usage-based Billing

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/bill/list \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "bills": [\
    {\
      "userId": "<string>",\
      "startTime": "<string>",\
      "endTime": "<string>",\
      "billingMethod": "<string>",\
      "productName": "<string>",\
      "category": "<string>",\
      "ownerID": "<string>",\
      "billNum0": "<string>",\
      "billNum1": "<string>",\
      "basePrice0": "<string>",\
      "basePrice1": "<string>",\
      "discountPrice0": "<string>",\
      "discountPrice1": "<string>",\
      "amount": "<string>",\
      "voucherAmount": "<string>",\
      "payAmount": "<string>",\
      "payAmountDisplay": "<string>",\
      "pricePrecision": "<string>",\
      "productId": "<string>"\
    }\
  ]
}
```

## [​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing\#query-parameters)  Query Parameters

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-cycle-type)

cycleType

string

required

Billing cycle granularity. Options: `Hour`, `Day`, `Week`, `Month`

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-product-category)

productCategory

string

required

Product type. Options:

- `summary` (Summary bill)
- `gpu` (GPU instance)
- `llm` (llm api)
- `serverless` (Serverless Endpoint)
- `cloud_storage` (Storage resources)
- `gen_api` (Image/Video/Audio generation)

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-product-name)

productName

string

Product name. Supports fuzzy matching.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-start-time)

startTime

string

Start time of the billing period to query, timestamp in seconds, default: 0.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-end-time)

endTime

string

End time of the billing period to query, timestamp in seconds, default: 0.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-owner-id)

ownerId

string

Specify instance ID to query.

## [​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing\#response-parameters)  Response Parameters

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-bills)

bills

object\[\]

required

Pay-as-you-go instance billing information.

Hide properties

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-user-id)

userId

string

required

User ID to which the instance belongs.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-start-time-1)

startTime

string

required

Start time of the bill. Format is Unix timestamp.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-end-time-1)

endTime

string

required

End time of the bill. Format is Unix timestamp.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-billing-method)

billingMethod

string

required

Billing method of the instance. A value of 1 indicates pay-as-you-go.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-product-name-1)

productName

string

required

Product name.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-category)

category

string

required

Product category.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-owner-id)

ownerID

string

required

Instance ID.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-bill-num0)

billNum0

string

required

- llm: input token
- gpu: number of cards \* billing time
- storage: storage size \* billing time

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-bill-num1)

billNum1

string

required

- llm: output token

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-base-price0)

basePrice0

string

required

Original Price

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-base-price1)

basePrice1

string

required

No significance

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-discount-price0)

discountPrice0

string

required

- llm: input token unit price
- others: unit price

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-discount-price1)

discountPrice1

string

required

- llm: output token unit price

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-amount)

amount

string

required

Total price.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-voucher-amount)

voucherAmount

string

required

Voucher deduction amount.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-pay-amount)

payAmount

string

required

Cash payment amount.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-pay-amount-display)

payAmountDisplay

string

required

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-price-precision)

pricePrecision

string

required

Price Precision.

[​](https://novita.ai/docs/api-reference/basic-query-usage-based-billing#param-product-id)

productId

string

required

Product ID.

Was this page helpful?

YesNo

[Query Monthly Bill](https://novita.ai/docs/api-reference/basic-query-monthly-bill) [Query Fixed-Term Billing](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.