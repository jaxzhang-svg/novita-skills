---
url: "https://novita.ai/docs/api-reference/model-apis-llm-query-file"
title: "Retrieve file - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-query-file#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Batch

Retrieve file

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Retrieve file

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openai/v1/files/{file_id} \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "id": "<string>",
  "object": "<string>",
  "bytes": 123,
  "filename": "<string>",
  "created_at": 123,
  "expires_at": 123,
  "purpose": "<string>",
  "metadata": {
    "total_requests": 123
  }
}
```

GET

https://api.novita.ai

/

openai

/

v1

/

files

/

{file\_id}

Try it

Retrieve file

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openai/v1/files/{file_id} \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "id": "<string>",
  "object": "<string>",
  "bytes": 123,
  "filename": "<string>",
  "created_at": 123,
  "expires_at": 123,
  "purpose": "<string>",
  "metadata": {
    "total_requests": 123
  }
}
```

Retrieves information about a specific file using its file ID.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-query-file\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-query-file\#path-parameters)  Path Parameters

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-file-id)

file\_id

string

required

The unique identifier of the file to retrieve information for.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-query-file\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-id)

id

string

required

The unique identifier of the file.

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-object)

object

string

required

The object type, which is always `file`.

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-bytes)

bytes

integer

required

The size of the file in bytes.

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-filename)

filename

string

required

The name of the file.

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-created-at)

created\_at

integer

required

The Unix timestamp (in seconds) when the file was created.

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-expires-at)

expires\_at

integer

The Unix timestamp (in seconds) when the file will expire. Only present for output files.

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-purpose)

purpose

string

required

The purpose of the file.Available purposes:

- `batch` \- Input file for batch processing
- `batch_output` \- Output file from batch processing

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-metadata)

metadata

object

required

Additional metadata about the file.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-query-file#param-total-requests)

total\_requests

integer

The total number of requests in the batch input file. Only present for batch input files.

Was this page helpful?

YesNo

[List files](https://novita.ai/docs/api-reference/model-apis-llm-list-files) [Delete file](https://novita.ai/docs/api-reference/model-apis-llm-delete-file)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.