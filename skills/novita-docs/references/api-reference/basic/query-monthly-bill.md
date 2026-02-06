---
url: "https://novita.ai/docs/api-reference/basic-query-monthly-bill"
title: "Query Monthly Bill - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/basic-query-monthly-bill#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Basic

Query Monthly Bill

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Query Monthly Bill

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/monthly/bill \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "data": [\
    {\
      "billId": "<string>",\
      "userId": "<string>",\
      "billingMonth": "<string>",\
      "totalAmount": "<string>",\
      "originTotalAmount": "<string>",\
      "voucherPayAmount": "<string>",\
      "cashPayAmount": "<string>",\
      "debtAmount": "<string>",\
      "status": "<string>",\
      "invoiceUrl": "<string>",\
      "startTime": "<string>",\
      "endTime": "<string>",\
      "repaidAmount": "<string>"\
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

monthly

/

bill

Try it

Query Monthly Bill

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openapi/v1/billing/monthly/bill \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "data": [\
    {\
      "billId": "<string>",\
      "userId": "<string>",\
      "billingMonth": "<string>",\
      "totalAmount": "<string>",\
      "originTotalAmount": "<string>",\
      "voucherPayAmount": "<string>",\
      "cashPayAmount": "<string>",\
      "debtAmount": "<string>",\
      "status": "<string>",\
      "invoiceUrl": "<string>",\
      "startTime": "<string>",\
      "endTime": "<string>",\
      "repaidAmount": "<string>"\
    }\
  ]
}
```

## [​](https://novita.ai/docs/api-reference/basic-query-monthly-bill\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/basic-query-monthly-bill\#response-parameters)  Response Parameters

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-data)

data

object\[\]

required

Monthly billing information.

Hide properties

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-bill-id)

billId

string

required

Unique identifier for the bill.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-user-id)

userId

string

required

User ID to which the bill belongs.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-billing-month)

billingMonth

string

required

The billing month in YYYY-MM format (e.g., “2025-11”).

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-total-amount)

totalAmount

string

required

Total amount for the billing month, unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-origin-total-amount)

originTotalAmount

string

required

Original total amount before any discounts or adjustments, unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-voucher-pay-amount)

voucherPayAmount

string

required

Amount paid using vouchers, unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-cash-pay-amount)

cashPayAmount

string

required

Amount paid in cash, unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-debt-amount)

debtAmount

string

required

Outstanding debt amount, unit is 0.0001 USD.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-status)

status

string

required

Bill status. Possible values:

- `pending` (Upcoming)
- `outed` (Payment Due)
- `paid` (Paid)
- `overdue` (Overdue)

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-invoice-url)

invoiceUrl

string

required

URL to download the invoice. Empty string if invoice is not yet available.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-start-time)

startTime

string

required

Start time of the billing period, Unix timestamp in seconds.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-end-time)

endTime

string

required

End time of the billing period, Unix timestamp in seconds.

[​](https://novita.ai/docs/api-reference/basic-query-monthly-bill#param-repaid-amount)

repaidAmount

string

required

Amount that has been paid, unit is 0.0001 USD.

Was this page helpful?

YesNo

[User Balance Info](https://novita.ai/docs/api-reference/basic-get-user-balance) [Query Usage-based Billing](https://novita.ai/docs/api-reference/basic-query-usage-based-billing)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.