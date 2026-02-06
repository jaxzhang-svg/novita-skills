---
url: "https://novita.ai/docs/api-reference/model-apis-llm-create-rerank"
title: "Create rerank - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM API

Create rerank

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Create rerank

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/rerank \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "model": "<string>",
  "query": "<string>",
  "documents": [\
    "<string>"\
  ],
  "top_n": 123
}
'
```

200

Copy

```
{
  "id": "<string>",
  "results": [\
    {\
      "document": {\
        "text": "<string>"\
      },\
      "index": 123,\
      "relevance_score": 123\
    }\
  ],
  "usage": {
    "completion_tokens": 123,
    "prompt_tokens": 123,
    "total_tokens": 123
  }
}
```

POST

https://api.novita.ai

/

openai

/

v1

/

rerank

Try it

Create rerank

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/rerank \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "model": "<string>",
  "query": "<string>",
  "documents": [\
    "<string>"\
  ],
  "top_n": 123
}
'
```

200

Copy

```
{
  "id": "<string>",
  "results": [\
    {\
      "document": {\
        "text": "<string>"\
      },\
      "index": 123,\
      "relevance_score": 123\
    }\
  ],
  "usage": {
    "completion_tokens": 123,
    "prompt_tokens": 123,
    "total_tokens": 123
  }
}
```

Creates a rerank request.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-model)

model

string

required

The name of the model to use.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-query)

query

string

required

The search query.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-documents)

documents

string\[\]

required

Document List.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-top-n)

top\_n

integer

Number of most relevant documents or indices to return.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-id)

id

string

required

ID

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-results)

results

object\[\]

required

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-document)

document

object

Original document content.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-text)

text

string

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-index)

index

integer

The index value of the position in the input candidate doc array.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-relevance-score)

relevance\_score

number

Similarity score.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-usage)

usage

object

Token usage statistics.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-completion-tokens)

completion\_tokens

integer

required

The number of tokens in the generated completion.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-prompt-tokens)

prompt\_tokens

integer

required

The number of tokens in the prompt.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-rerank#param-total-tokens)

total\_tokens

integer

required

The total number of tokens used in the request (prompt + completion).

Was this page helpful?

YesNo

[Create embeddings](https://novita.ai/docs/api-reference/model-apis-llm-create-embeddings) [List models](https://novita.ai/docs/api-reference/model-apis-llm-list-models)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.