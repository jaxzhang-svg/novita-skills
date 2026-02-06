---
url: "https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file"
title: "Upload file - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Batch

Upload file

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Upload file

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/files \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "purpose": "<string>"
}
'
```

200

Copy

```
{
  "id": "<string>",
  "object": "<string>",
  "bytes": 123,
  "created_at": 123,
  "filename": "<string>",
  "purpose": "<string>",
  "metadata": {
    "total_requests": 123
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

files

Try it

Upload file

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/files \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "purpose": "<string>"
}
'
```

200

Copy

```
{
  "id": "<string>",
  "object": "<string>",
  "bytes": 123,
  "created_at": 123,
  "filename": "<string>",
  "purpose": "<string>",
  "metadata": {
    "total_requests": 123
  }
}
```

Upload the batch input file so that it can be correctly referenced when creating a batch.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-file)

file

file

required

The batch input file to be uploaded should be in `.jsonl` format, with each line detailing an API inference request.Each request must have a unique `custom_id` to identify inference results in the output file after batch processing. The parameters within the `body` field of each line are used as the actual inference request parameters for the endpoint.

All requests within a single batch JSONL file must target the same model. Do not mix requests for different models in one batch.

Here is an example of an input file containing two requests:

Copy

```
{"custom_id": "request-1", "body": {"model": "deepseek/deepseek-v3-0324", "messages": [{"role": "user", "content": "Hello, world!"}], "max_tokens": 400}}
{"custom_id": "request-2", "body": {"model": "deepseek/deepseek-v3-0324", "messages": [{"role": "system", "content": "You are a helpful assistant."},{"role": "user", "content": "Hello world!"}],"max_tokens": 1000}}
```

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-purpose)

purpose

string

required

The purpose of the uploaded file. For batch processing, this should be set to `batch`.Enum: `batch`

## [​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-id)

id

string

required

The unique identifier of the uploaded file.

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-object)

object

string

required

The object type, which is always `file`.

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-bytes)

bytes

integer

required

The size of the uploaded file in bytes.

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-created-at)

created\_at

integer

required

The Unix timestamp (in seconds) when the file was created.

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-filename)

filename

string

required

The name of the uploaded file.

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-purpose-1)

purpose

string

required

The purpose of the uploaded file.

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-metadata)

metadata

object

Additional metadata about the uploaded file.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file#param-total-requests)

total\_requests

integer

required

The total number of requests contained in the batch input file.

Was this page helpful?

YesNo

[List batch](https://novita.ai/docs/api-reference/model-apis-llm-list-batches) [List files](https://novita.ai/docs/api-reference/model-apis-llm-list-files)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.