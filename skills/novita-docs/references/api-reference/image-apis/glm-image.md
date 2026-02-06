---
url: "https://novita.ai/docs/api-reference/model-apis-glm-image"
title: "GLM Image Generation - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-glm-image#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

GLM Image Generation

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

GLM Image Generation

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/glm-image \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "size": "<string>",
  "prompt": "<string>",
  "quality": "<string>",
  "watermark_enabled": true
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

glm-image

GLM Image Generation

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/glm-image \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "size": "<string>",
  "prompt": "<string>",
  "quality": "<string>",
  "watermark_enabled": true
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

GLM Image text-to-image generation tool creates high-quality images from text prompts, producing HD images with fine details and high consistency.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the video generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-glm-image\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-glm-image#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-glm-image#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-glm-image\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-glm-image#param-size)

size

string

default:"1280x1280"

Image size. Recommended values: 1280x1280 (default), 1568x1056, 1056x1568, 1472x1088, 1088x1472, 1728x960, 960x1728. Custom sizes: dimensions should be 1024-2048px, max total pixels 4194304, both must be multiples of 32.

[​](https://novita.ai/docs/api-reference/model-apis-glm-image#param-prompt)

prompt

string

required

Text description of desired image. Describe the scene, subject, style, and details you want in the generated image.

[​](https://novita.ai/docs/api-reference/model-apis-glm-image#param-quality)

quality

string

default:"hd"

Image quality. HD produces finer details with higher consistency.Optional values: `hd`

[​](https://novita.ai/docs/api-reference/model-apis-glm-image#param-watermark-enabled)

watermark\_enabled

boolean

default:true

Control AI watermark on generated images. true: Enable watermark (default). false: Disable watermark

## [​](https://novita.ai/docs/api-reference/model-apis-glm-image\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-glm-image#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Z Image Turbo](https://novita.ai/docs/api-reference/model-apis-z-image-turbo) [Upscale](https://novita.ai/docs/api-reference/model-apis-upscale)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.