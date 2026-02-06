---
url: "https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img"
title: "Novita AI Qwen Image Text to Image API | Generate image from text"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Qwen-Image Text to Image

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Qwen-Image Text to Image

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/qwen-image-txt2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "size": "<string>"
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

qwen-image-txt2img

Try it

Qwen-Image Text to Image

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/qwen-image-txt2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "size": "<string>"
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

Qwen-Image — a 20B MMDiT model for next-gen text-to-image generation. Especially strong at creating stunning graphic posters with native text.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the image generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img#param-prompt)

prompt

string

required

Text prompt for image generation.

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img#param-size)

size

string

The size of the generated media in pixels (width\*height). Default is `1024*1024`. Range: 256 ~ 1536 per dimension.

## [​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

## [​](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img\#example)  Example

Here is an example of how to use the Qwen-Image Text to Image API.

1. Generate a task\_id by sending a POST request to the Qwen-Image Text to Image API.

`Request:`

Copy

```
curl --location 'https://api.novita.ai/v3/async/qwen-image-txt2img' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "A cinematic scene of a quiet girl with short brown hair sitting by a misty lake at dawn. She wears an oversized sweater, holding a warm mug. Soft morning light filters through the trees, cool tones, tranquil mood, light fog, 50mm photography style.",
    "size": "1024*1024"
}'
```

`Response:`

Copy

```
{
    "task_id": "{Returned Task ID}"
}
```

2. Use `task_id` to get output images.

HTTP status codes in the 2xx range indicate that the request has been successfully accepted, while status codes in the 5xx range indicate internal server errors.You can get image url in `images` of response.`Request:`

Copy

```
curl --location --request GET 'https://api.novita.ai/v3/async/task-result?task_id={Returned Task ID}' \
--header 'Authorization: Bearer {{API Key}}'
```

`Response:`

Copy

```
{
    "extra": {
        "has_nsfw_contents": []
    },
    "task": {
        "task_id": "0cdee604-7168-4ff4-9b2a-9793c0cc6cdf",
        "task_type": "QWEN_IMAGE_TEXT_TO_IMAGE",
        "status": "TASK_STATUS_SUCCEED",
        "reason": "",
        "eta": 0,
        "progress_percent": 0
    },
    "images": [\
        {\
            "image_url": "https://d2p7pge43lyniu.cloudfront.net/output/9dc2f15a-0dd3-49a3-a121-a352f229c84b-u2_c61a700e-dfec-4c01-81c6-bf890ad68f6c.jpeg",\
            "image_url_ttl": "0",\
            "image_type": "jpeg",\
            "nsfw_detection_result": null\
        }\
    ],
    "videos": [],
    "audios": []
}
```

`Image files:`

![LLM API Providers](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/qwen-txt2img-output.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=a05d9896c7acab16e08f768a94be236e)

Was this page helpful?

YesNo

[Seedream 4.5](https://novita.ai/docs/api-reference/model-apis-seedream-4.5) [Hunyuan Image 3](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![LLM API Providers](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/qwen-txt2img-output.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=db7c8e17ef51773c638975b63192c837)