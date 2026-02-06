---
url: "https://novita.ai/docs/api-reference/model-apis-image-upscaler"
title: "Image Upscaling - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-image-upscaler#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Editor

Image Upscaling

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Image Upscaling

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/image-upscaler \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "image": "<string>",
  "resolution": "<string>",
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

image-upscaler

Image Upscaling

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/image-upscaler \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "image": "<string>",
  "resolution": "<string>",
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

AI-powered image upscaling service that enhances low-resolution images to higher resolutions, providing high-quality image processing: out-of-the-box REST inference API, best performance, no cold start, and affordable pricing.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the video generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-image-upscaler\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-image-upscaler#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-image-upscaler#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-image-upscaler\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-image-upscaler#param-image)

image

string

required

The URL of the original image to be upscaled.

[​](https://novita.ai/docs/api-reference/model-apis-image-upscaler#param-resolution)

resolution

string

default:"4k"

Target resolution after upscaling.Optional values: `2k`, `4k`, `8k`

[​](https://novita.ai/docs/api-reference/model-apis-image-upscaler#param-output-format)

output\_format

string

default:"jpeg"

The output image format.Optional values: `jpeg`, `png`, `webp`

## [​](https://novita.ai/docs/api-reference/model-apis-image-upscaler\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-image-upscaler#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Image Eraser](https://novita.ai/docs/api-reference/model-apis-image-eraser) [Image Remove Background](https://novita.ai/docs/api-reference/model-apis-image-remove-background)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.