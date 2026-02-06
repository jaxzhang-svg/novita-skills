---
url: "https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model"
title: "Retrieve model - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM API

Retrieve model

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Retrieve model

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openai/v1/models/{model} \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

Copy

```
{
  "created": 1733560109,
  "id": "meta-llama/llama-3.3-70b-instruct",
  "object": "model",
  "input_token_price_per_m": 3900,
  "output_token_price_per_m": 3900,
  "title": "meta-llama/llama-3.3-70b-instruct",
  "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.\n\nSupported languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai.",
  "context_size": 131072,
}
```

GET

https://api.novita.ai

/

openai

/

v1

/

models

/

{model}

Try it

Retrieve model

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openai/v1/models/{model} \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

Copy

```
{
  "created": 1733560109,
  "id": "meta-llama/llama-3.3-70b-instruct",
  "object": "model",
  "input_token_price_per_m": 3900,
  "output_token_price_per_m": 3900,
  "title": "meta-llama/llama-3.3-70b-instruct",
  "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.\n\nSupported languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai.",
  "context_size": 131072,
}
```

Retrieves a model instance, providing basic information about the model. This endpoint is compatible with OpenAI API.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model\#path-parameters)  Path Parameters

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-model)

model

string

required

The ID of the model to use for this request.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-id)

id

string

required

The model identifier, which can be referenced in the API endpoints.

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-created)

created

integer

required

The Unix timestamp (in seconds) when the model was created.

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-object)

object

string

required

The object type, which is always “model”.

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-input-token-price-per-m)

input\_token\_price\_per\_m

integer

required

The price per million input tokens.

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-output-token-price-per-m)

output\_token\_price\_per\_m

integer

required

The price per million output tokens.

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-title)

title

string

required

The title of the model.

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-description)

description

string

required

The description of the model.

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model#param-context-size)

context\_size

integer

required

The maximum context size of the model.

Was this page helpful?

YesNo

[List models](https://novita.ai/docs/api-reference/model-apis-llm-list-models) [Create batch](https://novita.ai/docs/api-reference/model-apis-llm-create-batch)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.