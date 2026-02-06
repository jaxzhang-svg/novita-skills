---
url: "https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3"
title: "Novita AI Hunyuan Image 3 | Generate image"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Hunyuan Image 3

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Hunyuan Image 3

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/hunyuan-image-3 \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "size": "<string>",
  "seed": 123
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

hunyuan-image-3

Try it

Hunyuan Image 3

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/hunyuan-image-3 \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "prompt": "<string>",
  "size": "<string>",
  "seed": 123
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

Hunyuan Image 3.0 is a state-of-the-art text-to-image generation model. By simply providing a written prompt, you can create high-quality images that capture the essence of your story, resonate emotionally, and elevate your creative output.

This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3#param-prompt)

prompt

string

required

The positive prompt for the generation.

[​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3#param-size)

size

string

The size of the generated media in pixels (width\*height). Range \[256 ~ 1536 per dimension\]. Default is `1024*1024`.

[​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3#param-seed)

seed

integer

The random seed to use for the generation. -1 means a random seed will be used. Range \[-1 ~ 2147483647\]. Default is `-1`.

## [​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-hunyuan-image-3#param-task-id)

task\_id

string

required

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

Was this page helpful?

YesNo

[Qwen-Image Text to Image](https://novita.ai/docs/api-reference/model-apis-qwen-image-txt2img) [Flux 2 Dev Image Gen](https://novita.ai/docs/api-reference/model-apis-flux-2-dev)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.