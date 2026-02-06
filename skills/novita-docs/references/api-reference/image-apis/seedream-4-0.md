---
url: "https://novita.ai/docs/api-reference/model-apis-seedream-4-0"
title: "Novita AI Seedream 4.0 API | Generate image"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Seedream 4.0

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Seedream 4.0 API

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/seedream-4.0 \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "images": [\
    "<string>"\
  ],
  "size": "<string>",
  "sequential_image_generation": "<string>",
  "max_images": 123,
  "watermark": true
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

seedream-4.0

Try it

Seedream 4.0 API

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/seedream-4.0 \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "images": [\
    "<string>"\
  ],
  "size": "<string>",
  "sequential_image_generation": "<string>",
  "max_images": 123,
  "watermark": true
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

Seedream 4.0 is a cutting-edge image generation model that provides flexible image creation features, including 4K resolution support. The Seedream 4.0 API enables image generation from both text and other images.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-prompt)

prompt

string

required

The prompt for image generation.The recommended length is no more than 600 English words. If the prompt is too long, the information may become scattered. The model might ignore details and only concentrate on the main points, resulting in a image with missing elements.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-images)

images

string\[\]

Enter the Base64 encoding or an accessible URL of the image to edit. Supports inputting a single image or multiple images.

- Image URL: Make sure that the image URL is accessible.
- Base64 encoding: The format must be `data:image/<image format>;base64,<Base64 encoding>`.

An input image must meet the following requirements:  - Image format: jpeg, png
  - Aspect ratio (width/height): In the range \[1/3, 3\]
  - Width and height (px): > 14
  - Size: No more than 10 MB
  - The value of total pixels: No more than 6000×6000
  - supports uploading a maximum of 10 reference images.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-size)

size

string

Set the specification for the generated image. Two methods are available but cannot be used together.

- Method 1, specify the resolution.
  - Optional values: `1K`, `2K`, `4K`
- Method 2, specify the width and height of the generated image in pixels.
  - Default: `2048x2048`
  - The value range of total pixels: `[1024x1024, 4096x4096]`
  - The aspect ratio value range: `[1/16, 16]`

Recommended width and height:

| Aspect ratio | Width and Height Pixel Values |
| --- | --- |
| 1:1 | 2048x2048 |
| 4:3 | 2304x1728 |
| 3:4 | 1728x2304 |
| 16:9 | 2560x1440 |
| 9:16 | 1440x2560 |
| 3:2 | 2496x1664 |
| 2:3 | 1664x2496 |
| 21:9 | 3024x1296 |

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-sequential-image-generation)

sequential\_image\_generation

string

default:"disabled"

Controls whether to disable the batch generation feature.

- `auto`: In automatic mode, the model automatically determines whether to return multiple images and how many images it will contain based on the user’s prompt.
- `disabled`: Disables batch generation feature. The model will only generate one image.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-max-images)

max\_images

integer

default:15

Specifies the maximum number of images to generate in this request. This parameter is only effective when `sequential_image_generation` is set to `auto`.Value range: `[1, 15]`

DescriptionThe actual number of generated images is affected by `max_images` and the number of input reference images. Number of input reference images + Number of generated images ≤ 15.

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-watermark)

watermark

boolean

default:true

Adds a watermark to the generated image.

- `false`: Does not add a watermark.
- `true`: Adds a watermark with the text “AI generated” in the bottom-right corner of the image.

## [​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-seedream-4-0#param-images-1)

images

string\[\]

An array containing links to download the generated images.

Was this page helpful?

YesNo

[Seedream 3.0 Text to Image](https://novita.ai/docs/api-reference/model-apis-seedream-3-0-t2i) [Seedream 4.5](https://novita.ai/docs/api-reference/model-apis-seedream-4.5)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.