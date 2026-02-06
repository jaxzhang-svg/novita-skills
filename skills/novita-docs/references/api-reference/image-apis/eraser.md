---
url: "https://novita.ai/docs/api-reference/model-apis-image-eraser"
title: "Image Eraser - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-image-eraser#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Editor

Image Eraser

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Image Eraser

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/image-eraser \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "mask": "<string>",
  "image": "<string>",
  "prompt": "<string>",
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

image-eraser

Image Eraser

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/image-eraser \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "mask": "<string>",
  "image": "<string>",
  "prompt": "<string>",
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

AI-powered image erasing service. Supports object removal from images via mask and text prompts. Offers high-quality image processing: out-of-the-box REST inference API, top performance, no cold start, affordable pricing.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the video generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-image-eraser\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-image-eraser#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-image-eraser#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-image-eraser\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-image-eraser#param-mask)

mask

string

Mask image indicating the area to be erased. Areas to erase should be white; areas to keep should be black.

[​](https://novita.ai/docs/api-reference/model-apis-image-eraser#param-image)

image

string

required

The original image to be processed.

[​](https://novita.ai/docs/api-reference/model-apis-image-eraser#param-prompt)

prompt

string

Text prompt specifying the object or region to remove from the image, e.g., ‘dog’ or ‘hat’.

[​](https://novita.ai/docs/api-reference/model-apis-image-eraser#param-output-format)

output\_format

string

default:"jpeg"

Output image format.Optional values: `jpeg`, `png`, `webp`

## [​](https://novita.ai/docs/api-reference/model-apis-image-eraser\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-image-eraser#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Qwen-Image Edit](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit) [Image Upscaling](https://novita.ai/docs/api-reference/model-apis-image-upscaler)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.