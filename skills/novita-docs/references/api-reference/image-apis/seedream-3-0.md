---
url: "https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i"
title: "Novita AI Seedream 3.0 Text to Image API | Generate image from text"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Seedream 3.0 Text to Image

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Seedream 3.0 Text to Image

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/seedream-3-0-txt2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "model": "<string>",
  "response_format": "<string>",
  "size": "<string>",
  "seed": 123,
  "guidance_scale": 123,
  "watermark": true
}
'
```

200

Copy

```
{
  "image_urls": [\
    "<string>"\
  ],
  "binary_data_base64": [\
    "<string>"\
  ]
}
```

POST

https://api.novita.ai

/

v3

/

seedream-3-0-txt2img

Try it

Seedream 3.0 Text to Image

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/seedream-3-0-txt2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "model": "<string>",
  "response_format": "<string>",
  "size": "<string>",
  "seed": 123,
  "guidance_scale": 123,
  "watermark": true
}
'
```

200

Copy

```
{
  "image_urls": [\
    "<string>"\
  ],
  "binary_data_base64": [\
    "<string>"\
  ]
}
```

Experience fast and efficient image generation with Seedream 3.0, a state-of-the-art text-to-image model that produces high-quality images from textual prompts.

Currently, only the model version `seedream-3-0-t2i-250415` is supported for Seedream 3.0.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-prompt)

prompt

string

required

The text prompt used to generate the image.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-model)

model

string

The Model ID or inference endpoint (Endpoint ID) to be used for this request. Currently, only `seedream-3-0-t2i-250415` for seedream 3.0 is supported.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-response-format)

response\_format

string

Specifies the format of the generated image returned in the response. Default is `url`.

Supported values:

- `"url"`: Returns a downloadable JPEG image link.
- `"b64_json"`: Returns the image data as a Base64-encoded JSON string.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-size)

size

string

Specifies the dimensions (width x height in pixels) of the generated image. Must be between \[512x512, 2048x2048\]. Default is `1024x1024`.

Recommended aspect ratios and resolutions:

- `1024x1024` (1:1)
- `864x1152` (3:4)
- `1152x864` (4:3)
- `1280x720` (16:9)
- `720x1280` (9:16)
- `832x1248` (2:3)
- `1248x832` (3:2)
- `1512x648` (21:9)

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-seed)

seed

integer

Random seed to control the stochasticity of image generation. Range: \[-1, 2147483647\]. If not specified, a seed will be automatically generated. To reproduce the same output, use the same seed value. Default is `-1`.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-guidance-scale)

guidance\_scale

number

Controls how closely the output image aligns with the input prompt. The higher the value, the less freedom the model has, and the stronger the prompt correlation. Range: \[1, 10\]. Default is `2.5`.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-watermark)

watermark

boolean

Specifies whether to add a watermark to the generated image. Default is `true`.

- `false`: No watermark.
- `true`: Adds a watermark with the label “AI generated” in the bottom-right corner.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-image-urls)

image\_urls

string\[\]

Array of generated image URLs. When `response_format` is set to `"url"`, this array contains the downloadable image links for the generated images.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i#param-binary-data-base64)

binary\_data\_base64

string\[\]

Array of Base64-encoded image data. When `response_format` is set to `"b64_json"`, this array contains the generated images as Base64-encoded JSON strings.

Was this page helpful?

YesNo

[FLUX.1 Kontext Max](https://novita.ai/docs/api-reference/model-apis-flux-1-kontext-max) [Seedream 4.0](https://novita.ai/docs/api-reference/model-apis-seedream-4-0)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.