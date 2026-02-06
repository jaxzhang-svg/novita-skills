---
url: "https://novita.ai/docs/api-reference/basic-query-fixed-term-billing"
title: "Query Fixed-Term Billing - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Basic

Query Fixed-Term Billing

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Query Fixed-Term Billing

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/bill/monthly/list \
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
      "memberId": "<string>",\
      "productName": "<string>",\
      "productCategory": "<string>",\
      "ownerID": "<string>",\
      "tradeMode": "<string>",\
      "tradeType": "<string>",\
      "basePrice": "<string>",\
      "billNum": "<string>",\
      "amount": "<string>",\
      "voucherAmount": "<string>",\
      "payAmount": "<string>",\
      "payAmountDisplay": "<string>",\
      "pricePrecision": "<string>",\
      "createTime": "<string>",\
      "cycle": "<string>",\
      "storageDays": "<string>"\
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

monthly

/

list

Try it

Query Fixed-Term Billing

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/bill/monthly/list \
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
      "memberId": "<string>",\
      "productName": "<string>",\
      "productCategory": "<string>",\
      "ownerID": "<string>",\
      "tradeMode": "<string>",\
      "tradeType": "<string>",\
      "basePrice": "<string>",\
      "billNum": "<string>",\
      "amount": "<string>",\
      "voucherAmount": "<string>",\
      "payAmount": "<string>",\
      "payAmountDisplay": "<string>",\
      "pricePrecision": "<string>",\
      "createTime": "<string>",\
      "cycle": "<string>",\
      "storageDays": "<string>"\
    }\
  ]
}
```

## [​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing\#query-parameters)  Query Parameters

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-category)

category

string

Product type. default: `summary`, Options:

- `summary` (Summary bill)
- `gpu` (GPU instance)
- `local_storage` (Storage resources)
- `image` (Image dedicated endpoint)

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-product-name)

productName

string

Product name. Supports fuzzy matching.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-start-time)

startTime

string

The start time of the bill to query, timestamp in seconds, default: 0.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-end-time)

endTime

string

The end time of the bill to query, timestamp in seconds, default: 0.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-owner-id)

ownerId

string

Specify the instance ID to query.

## [​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing\#response-parameters)  Response Parameters

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-bills)

bills

object\[\]

required

Billing information for fixed-term instances.

Hide properties

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-user-id)

userId

string

required

User ID to which the instance belongs.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-start-time-1)

startTime

string

required

The start time of the bill, timestamp in seconds.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-end-time-1)

endTime

string

required

The end time of the bill, timestamp in seconds.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-member-id)

memberId

string

required

Sub-user ID within the team.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-product-name-1)

productName

string

required

Product name.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-product-category)

productCategory

string

required

Product type.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-owner-id)

ownerID

string

required

Instance ID.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-trade-mode)

tradeMode

string

required

Billing method. The value is `monthly`, indicating fixed-term.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-trade-type)

tradeType

string

required

Type of fixed-term. Possible values:

- `monthly_new_buy` (New purchase).
- `monthly_re_buy` (Renewal).
- `monthly_re_config` (Expansion).

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-base-price)

basePrice

string

required

Monthly unit price.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-bill-num)

billNum

string

required

Usage.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-amount)

amount

string

required

Total price.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-voucher-amount)

voucherAmount

string

required

Voucher deduction amount.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-pay-amount)

payAmount

string

required

Cash payment amount.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-pay-amount-display)

payAmountDisplay

string

required

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-price-precision)

pricePrecision

string

required

Price Precision.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-create-time)

createTime

string

required

Bill creation time.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-cycle)

cycle

string

required

Billing Cycle.

[​](https://novita.ai/docs/api-reference/basic-query-fixed-term-billing#param-storage-days)

storageDays

string

required

Storage service duration (days).

Was this page helpful?

YesNo

[Query Usage-based Billing](https://novita.ai/docs/api-reference/basic-query-usage-based-billing) [Introduction](https://novita.ai/docs/api-reference/model-apis-introduction)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.