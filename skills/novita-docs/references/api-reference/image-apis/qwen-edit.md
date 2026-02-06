---
url: "https://novita.ai/docs/api-reference/model-apis-qwen-image-edit"
title: "Novita AI Qwen Image Edit API"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Editor

Qwen-Image Edit

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Qwen-Image Edit

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/qwen-image-edit \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "image": "<string>",
  "seed": 123,
  "output_format": "<string>"
}
'
```

200

Copy

```
{
  "task_id": "<string>"
}
```

POST

https://api.novita.ai

/

v3

/

async

/

qwen-image-edit

Try it

Qwen-Image Edit

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/qwen-image-edit \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "image": "<string>",
  "seed": 123,
  "output_format": "<string>"
}
'
```

200

Copy

```
{
  "task_id": "<string>"
}
```

Qwen-Image Edit — a 20B MMDiT model for next-gen image edit generation. Built on 20B Qwen-Image, it brings precise bilingual text editing (Chinese & English) while preserving style, and supports both semantic and appearance-level editing.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the image generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#param-prompt)

prompt

string

required

The prompt to generate an image from.

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#param-image)

image

string

required

The image to generate an image from.

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#param-seed)

seed

integer

The random seed to use for the generation. -1 means a random seed will be used. Range: -1 ~ 2147483647. Default is -1.

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#param-output-format)

output\_format

string

The format of the output image. Default is jpeg.

Enum: `jpeg`, `png`, `webp`

## [​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Image to Prompt](https://novita.ai/docs/api-reference/model-apis-image-to-prompt) [Image Eraser](https://novita.ai/docs/api-reference/model-apis-image-eraser)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.