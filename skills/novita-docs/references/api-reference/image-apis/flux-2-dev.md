---
url: "https://novita.ai/docs/api-reference/model-apis-flux-2-dev"
title: "Flux 2 Dev Image Gen - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Flux 2 Dev Image Gen

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Flux 2 Dev Image Gen

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/flux-2-dev \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "seed": 123,
  "size": "<string>",
  "loras": [\
    {}\
  ],
  "images": [\
    {}\
  ],
  "prompt": "<string>"
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

flux-2-dev

Flux 2 Dev Image Gen

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/flux-2-dev \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "seed": 123,
  "size": "<string>",
  "loras": [\
    {}\
  ],
  "images": [\
    {}\
  ],
  "prompt": "<string>"
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

FLUX.2 \[dev\] from Black Forest Labs delivers fast, studio-quality text-to-image generation with enhanced realism, crisper text rendering, and native editing for rapid iteration. Ready-to-use REST inference API, best performance, no cold starts, affordable pricing.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the video generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-seed)

seed

integer

default:-1

Random seed for generation. -1 means use a random seed. Range: -1 to 2147483647Value range: \[-1, 2147483647\]

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-size)

size

string

Pixel size (width\*height) of the output media. Each dimension ranges from 256 to 1536 pixels

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-loras)

loras

array

List of LoRAs to apply, up to 3 are supportedArray length: 0 - 3

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-images)

images

array

A list of input image URLs for editing. Up to 3 images are supportedArray length: 1 - 3

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-prompt)

prompt

string

required

A text prompt describing the expected editing effect for the image

## [​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-flux-2-dev#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Hunyuan Image 3](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3) [Flux 2 Flex Image Gen](https://novita.ai/docs/api-reference/model-apis-flux-2-flex)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.