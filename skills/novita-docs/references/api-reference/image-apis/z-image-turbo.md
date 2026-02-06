---
url: "https://novita.ai/docs/api-reference/model-apis-z-image-turbo"
title: "Z Image Turbo - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Z Image Turbo

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Z Image Turbo

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/z-image-turbo \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "seed": 123,
  "size": "<string>",
  "prompt": "<string>",
  "enable_base64_output": true
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

z-image-turbo

Z Image Turbo

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/z-image-turbo \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "seed": 123,
  "size": "<string>",
  "prompt": "<string>",
  "enable_base64_output": true
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

Z-Image Turbo is a high-speed image generation model that supports rapid generation of high-quality images based on text prompts.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the video generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#param-seed)

seed

integer

default:-1

Random seed for generation. -1 means using a random seed. Range: -1 to 2147483647Value range: \[-1, 2147483647\]

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#param-size)

size

string

default:"1024\*1024"

Pixel dimensions of the generated image (width\*height). Each dimension ranges from 256 to 1536 pixels

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#param-prompt)

prompt

string

required

Positive prompt for generation

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#param-enable-base64-output)

enable\_base64\_output

boolean

default:false

If enabled, the output will be encoded as a BASE64 string instead of a URL. This property is only available via API

## [​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Z Image Turbo LoRA](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora) [GLM Image Generation](https://novita.ai/docs/api-reference/model-apis-glm-image)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.