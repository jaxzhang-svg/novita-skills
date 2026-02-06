---
url: "https://novita.ai/docs/api-reference/model-apis-seedream-4.5"
title: "Seedream 4.5 - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Seedream 4.5

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Seedream 4.5

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/seedream-4.5 \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "size": "<string>",
  "image": [\
    {}\
  ],
  "prompt": "<string>",
  "watermark": true,
  "optimize_prompt_options": {
    "mode": "<string>"
  },
  "sequential_image_generation": "<string>",
  "sequential_image_generation_options": {
    "max_images": 123
  }
}
'
```

200

Copy

```
{
  "images": [\
    "<string>"\
  ]
}
```

POST

https://api.novita.ai

/

v3

/

seedream-4.5

Seedream 4.5

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/seedream-4.5 \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "size": "<string>",
  "image": [\
    {}\
  ],
  "prompt": "<string>",
  "watermark": true,
  "optimize_prompt_options": {
    "mode": "<string>"
  },
  "sequential_image_generation": "<string>",
  "sequential_image_generation_options": {
    "max_images": 123
  }
}
'
```

200

Copy

```
{
  "images": [\
    "<string>"\
  ]
}
```

API for the Seedream 4.5 image generation model, supporting text-to-image, single image-to-image, multi-image-to-image, and sequential image generation features.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-size)

size

string

default:"2048x2048"

Specifies the size of the generated image. Method 1: Specify resolution (2K, 4K); Method 2: Specify width and height in pixels (e.g., 2048x2048). Total pixel range: \[3686400, 16777216\], aspect ratio range: \[1/16, 16\].

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-image)

image

array

Array of input image information, supporting URL or Base64 encoding. Up to 14 reference images can be provided. Supported image formats: jpeg, png, webp, bmp, tiff, gif.Array length: 1 - 14

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-prompt)

prompt

string

required

The prompt used to generate images, supporting both Chinese and English. Recommended not to exceed 300 Chinese characters or 600 English words.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-watermark)

watermark

boolean

default:true

Whether to add a watermark to the generated images.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-optimize-prompt-options)

optimize\_prompt\_options

object

Configuration for the prompt optimization feature.

Hide properties

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-mode)

mode

string

default:"standard"

Sets the mode for the prompt optimization feature. standard: Standard mode, higher quality but longer processing time; fast: Fast mode, shorter processing time but average quality. Currently only standard mode is supported.Optional values: `standard`

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-sequential-image-generation)

sequential\_image\_generation

string

default:"disabled"

Controls whether to disable the sequential image generation feature. auto: Automatic mode, the model determines whether to return sequential images based on the prompt; disabled: Disables sequential image generation, only generates one image.Optional values: `auto`, `disabled`

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-sequential-image-generation-options)

sequential\_image\_generation\_options

object

Configuration for the sequential image generation feature. Only effective when sequential\_image\_generation is set to auto.

Hide properties

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-max-images)

max\_images

integer

default:15

Specifies the maximum number of images that can be generated in this request. Number of input reference images + number of generated images ≤ 15.Value range: \[1, 15\]

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4.5#param-images)

images

string\[\]

Array of generated image information.

Was this page helpful?

YesNo

[Seedream 4.0](https://novita.ai/docs/api-reference/model-apis-seedream-4-0) [Qwen-Image Text to Image](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.