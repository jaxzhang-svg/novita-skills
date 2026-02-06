---
url: "https://novita.ai/docs/api-reference/model-apis-image-remove-background"
title: "Image Remove Background - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-image-remove-background#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Editor

Image Remove Background

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Image Remove Background

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/image-remove-background \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "image": "<string>"
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

image-remove-background

Image Remove Background

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/image-remove-background \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "image": "<string>"
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

AI-powered image background removal service. Supports intelligent recognition and removal of image backgrounds, delivering high-quality image processing: out-of-the-box REST inference API, best performance, no cold starts, and affordable pricing.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the video generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-image-remove-background\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-image-remove-background#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-image-remove-background#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-image-remove-background\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-image-remove-background#param-image)

image

string

required

URL of the image whose background will be removed.

## [​](https://novita.ai/docs/api-reference/model-apis-image-remove-background\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-image-remove-background#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Image Upscaling](https://novita.ai/docs/api-reference/model-apis-image-upscaler) [Unified Video Generation API](https://novita.ai/docs/api-reference/reference-unified-video-generation)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.