---
url: "https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content"
title: "Retrieve file content - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Batch

Retrieve file content

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Retrieve file content

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openai/v1/files/{file_id}/content \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
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

/

content

Try it

Retrieve file content

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/openai/v1/files/{file_id}/content \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

Retrieves the content of a specific file using its file ID. This is commonly used to download batch output files or error files.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content\#path-parameters)  Path Parameters

[​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content#param-file-id)

file\_id

string

required

The unique identifier of the file to retrieve content for.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content\#response)  Response

The response returns the raw file content. For batch output files, this will be in JSONL format where each line contains a batch request result.**Example Response**For batch output files, each line contains a response like this:

Copy

```
{
  "custom_id": "request-2589",
  "error": null,
  "id": "batch_req_task_d2c",
  "response": {
    "body": {
      "id": "29e1432c-edfb-44a4-b531-c23c600abfae",
      "object": "chat.completion",
      "created": 1754902266,
      "model": "deepseek-test",
      "choices": [\
        {\
          "index": 0,\
          "message": {\
            "role": "assistant",\
            "content": "Hello! 👋 How can I assist you today? 😊"\
          },\
          "finish_reason": "stop"\
        }\
      ],
      "usage": {
        "prompt_tokens": 5,
        "completion_tokens": 13,
        "total_tokens": 18
      }
    },
    "request_id": "request-2589",
    "status_code": 200
  }
}
```

Was this page helpful?

YesNo

[Delete file](https://novita.ai/docs/api-reference/model-apis-llm-delete-file) [Webhook](https://novita.ai/docs/api-reference/model-apis-webhook)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.