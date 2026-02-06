---
url: "https://novita.ai/docs/api-reference/model-apis-llm-delete-file"
title: "Delete file - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-delete-file#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Batch

Delete file

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Delete file

cURL

Copy

```
curl --request DELETE \
  --url https://api.novita.ai/openai/v1/files/{file_id} \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "deleted": true,
  "id": "<string>",
  "object": "<string>"
}
```

DELETE

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

Delete file

cURL

Copy

```
curl --request DELETE \
  --url https://api.novita.ai/openai/v1/files/{file_id} \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "deleted": true,
  "id": "<string>",
  "object": "<string>"
}
```

Deletes a specific file using its file ID.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file\#path-parameters)  Path Parameters

[​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file#param-file-id)

file\_id

string

required

The unique identifier of the file to delete.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file#param-deleted)

deleted

boolean

required

Indicates whether the file was successfully deleted. Returns `true` if the deletion was successful.

[​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file#param-id)

id

string

required

The unique identifier of the deleted file.

[​](https://novita.ai/docs/api-reference/model-apis-llm-delete-file#param-object)

object

string

required

The object type, which is always `file`.

Was this page helpful?

YesNo

[Retrieve file](https://novita.ai/docs/api-reference/model-apis-llm-query-file) [Retrieve file content](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.