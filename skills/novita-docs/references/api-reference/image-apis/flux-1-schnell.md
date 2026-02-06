---
url: "https://novita.ai/docs/api-reference/model-apis-flux-1-schnell"
title: "FLUX.1 [schnell] Text to Image - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

FLUX.1 \[schnell\] Text to Image

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

FLUX.1 \[schnell\] Text to Image

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3beta/flux-1-schnell \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "response_image_format": "<string>",
  "prompt": "<string>",
  "seed": 123,
  "steps": 123,
  "width": 123,
  "height": 123,
  "image_num": 123
}
'
```

200

Copy

```
{
  "task": {
    "task_id": "<string>"
  },
  "images": [\
    {\
      "image_url": "<string>",\
      "image_url_ttl": 123,\
      "image_type": "<string>"\
    }\
  ]
}
```

POST

https://api.novita.ai

/

v3beta

/

flux-1-schnell

Try it

FLUX.1 \[schnell\] Text to Image

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3beta/flux-1-schnell \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "response_image_format": "<string>",
  "prompt": "<string>",
  "seed": 123,
  "steps": 123,
  "width": 123,
  "height": 123,
  "image_num": 123
}
'
```

200

Copy

```
{
  "task": {
    "task_id": "<string>"
  },
  "images": [\
    {\
      "image_url": "<string>",\
      "image_url_ttl": 123,\
      "image_type": "<string>"\
    }\
  ]
}
```

**Generate images from text prompts using FLUX.1 \[schnell\].**

> **Pricing:** $0.003 \* (Width \* Height \* Steps) / (1024\*1024\*4)

## [​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-response-image-format)

response\_image\_format

string

The returned image type. Default is png.

Enum: `png``webp``jpeg`

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-prompt)

prompt

string

required

Text input required to guide the image generation, divided by `,` . Range \[1, 1024\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-seed)

seed

integer

required

A seed is a number from which Stable Diffusion generates noise, which, makes generation deterministic. Using the same seed and set of parameters will produce identical image each time. Range \[0, 4294967295\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-steps)

steps

integer

required

The number of denoising steps. More steps usually can produce higher quality images, but take more time to generate, Range \[1, 100\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-width)

width

integer

required

Width of image. Range \[64, 2048\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-height)

height

integer

required

Height of image. Range \[64, 2048\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-image-num)

image\_num

integer

required

Images numbers generated in one single generation. Range \[1, 8\].

## [​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-task)

task

object

Task information.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-task-id)

task\_id

string

Task ID.

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-images)

images

object\[\]

Contains information about images associated with image-type tasks. This parameter provides detailed data on each image processed or generated during the task, such as file paths, metadata, or any image-specific attributes. It is returned only for tasks that involve image operations, facilitating enhanced tracking and management of image data.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-image-url)

image\_url

string

Image URL.

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-image-url-ttl)

image\_url\_ttl

integer

Image expiration time in seconds.

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell#param-image-type)

image\_type

string

Image type.

Enum: `jpeg`, `png`, `webp`

## [​](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell\#example)  Example

request

Copy

```
curl --location 'https://api.novita.ai/v3beta/flux-1-schnell' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
  "prompt": "Extreme close-up of a single tiger eye, direct frontal view. Detailed iris and pupil. Sharp focus on eye texture and color. Natural lighting to capture authentic eye shine and depth. The word \"Novita AI\" is painted over it in big, white brush strokes with visible texture",
  "width": 512,
  "height": 512,
  "seed": 2024,
  "steps": 4,
  "image_num": 1
}'
```

response

Copy

```
{
  "images": [\
    {\
      "image_url": "https://model-api-output.5e61b0cbce9f453eb9db49fdd85c7cac.r2.cloudflarestorage.com/xxx",\
      "image_url_ttl": 604800,\
      "image_type": "png"\
    }\
  ],
  "task": {
    "task_id": "xxx"
  }
}
```

Was this page helpful?

YesNo

[Reimagine](https://novita.ai/docs/api-reference/model-apis-reimagine) [FLUX.1 Kontext Dev](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.