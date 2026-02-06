---
url: "https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora"
title: "Z Image Turbo LoRA - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Z Image Turbo LoRA

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Z Image Turbo LoRA

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/z-image-turbo-lora \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "seed": 123,
  "size": "<string>",
  "loras": [\
    {\
      "path": "<string>",\
      "scale": 123\
    }\
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

z-image-turbo-lora

Z Image Turbo LoRA

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/z-image-turbo-lora \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "seed": 123,
  "size": "<string>",
  "loras": [\
    {\
      "path": "<string>",\
      "scale": 123\
    }\
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

Z-Image Turbo LoRA is a high-speed image generation model that supports rapid generation of high-quality images based on text prompts, with support for applying custom LoRA weights.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the video generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-seed)

seed

integer

default:-1

Random seed for generation. -1 means using a random seedValue range: \[-1, 2147483647\]

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-size)

size

string

default:"1024\*1024"

Pixel dimensions of the generated image (width\*height)

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-loras)

loras

array

default:"\[\]"

List of LoRAs to apply (maximum 3)Array length: 0 - 3

Hide properties

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-path)

path

string

required

URL or path to the LoRA weights

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-scale)

scale

number

default:1

Scale factor for the LoRA weights. Used to scale the LoRA weights before merging with the base modelValue range: \[0, 4\]

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-prompt)

prompt

string

required

Positive prompt for generation

## [​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-z-image-turbo-lora#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Flux 2 Pro Image Gen](https://novita.ai/docs/api-reference/model-apis-flux-2-pro) [Z Image Turbo](https://novita.ai/docs/api-reference/model-apis-z-image-turbo)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.