---
url: "https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev"
title: "FLUX.1 Kontext Dev - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

FLUX.1 Kontext Dev

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

FLUX.1 Kontext Dev

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/flux-1-kontext-dev \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "images": [\
    "<string>"\
  ],
  "fast_mode": true,
  "size": "<string>",
  "num_inference_steps": 123,
  "guidance_scale": 123,
  "num_images": 123,
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

flux-1-kontext-dev

Try it

FLUX.1 Kontext Dev

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/flux-1-kontext-dev \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "images": [\
    "<string>"\
  ],
  "fast_mode": true,
  "size": "<string>",
  "num_inference_steps": 123,
  "guidance_scale": 123,
  "num_images": 123,
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

FLUX.1 Kontext dev is a model with greatly improved prompt adherence and typography generation meet premium consistency for editing without compromise on speed.

## [​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-prompt)

prompt

string

required

The prompt to generate an image from.

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-images)

images

string\[\]

The images to generate an image from. Limit to a maximum of 4 images.

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-fast-mode)

fast\_mode

boolean

Whether to enable fast mode, which will generate videos more quickly but may reduce quality and lower the price.Default: `false`.

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-size)

size

string

The size of the generated media in pixels (width\*height). Range \[256 ~ 1536 per dimension\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-num-inference-steps)

num\_inference\_steps

integer

The number of inference steps to perform. Default is 28. Range \[1 ~ 50\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-guidance-scale)

guidance\_scale

number

The guidance scale to use for the generation. Default is 2.5. Range \[1.0 ~ 20.0\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-num-images)

num\_images

integer

The number of images to generate. Default is 1. Range \[1 ~ 4\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-seed)

seed

integer

The random seed to use for the generation. Default is -1. -1 means a random seed will be used. Range \[-1 ~ 2147483647\].

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-output-format)

output\_format

string

The format of the output image. Default is jpeg.

Enum: `jpeg`, `png`, `webp`

## [​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-dev#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[FLUX.1 \[schnell\] Text to Image](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell) [FLUX.1 Kontext Pro](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-pro)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.