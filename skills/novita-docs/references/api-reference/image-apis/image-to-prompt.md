---
url: "https://novita.ai/docs/api-reference/model-apis-image-to-prompt"
title: "Image to Prompt - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-image-to-prompt#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Editor

Image to Prompt

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Image to Prompt

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/img2prompt \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "image_file": "<string>"
}
'
```

200

Copy

```
{
  "prompt": "<string>"
}
```

POST

https://api.novita.ai

/

v3

/

img2prompt

Try it

Image to Prompt

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/img2prompt \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "image_file": "<string>"
}
'
```

200

Copy

```
{
  "prompt": "<string>"
}
```

**This API extracts prompts from images.**

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt#param-image-file)

image\_file

string

required

The base64-encoded original image, with a maximum resolution of 2048 x 2048 pixels and a maximum file size of 30 MB.

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt#param-prompt)

prompt

string

The prompt generated from the input image.

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-prompt\#example)  Example

This API retrieves prompts from images.Please set the **`Content-Type`** header to **`application/json`** in your HTTP request to indicate that you are sending JSON data. Currently, **only JSON format is supported**.`Request:`

Copy

```
curl --location 'https://api.novita.ai/v3/img2prompt' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
    "image_file": "{{Base64 encoded image}}"
}'
```

HTTP status codes in the 2xx range indicate that the request has been successfully accepted. A status code of 400 means there is an error with the request parameters, while status codes in the 5xx range indicate internal server errors.You can find the generated prompt in the `prompt` field of the response.`Image`:

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/img2prompt.png)

`Response:`

Copy

```
{
    "prompt": "a man standing on a rock near the ocean, Alejandro Iñárritu, Nadav Kander, Ignacio Fernández Ríos, Ignacio Fernández Ríos, Ignacio Ríos, Navid Negahban, Reza Afshar, Steven Klein, Ignacio Fernández Ríos, Lorenzo Lanfranconi, Peter Palombi, Alberto Mielgo"
}
```

Was this page helpful?

YesNo

[Cleanup](https://novita.ai/docs/api-reference/model-apis-cleanup) [Qwen-Image Edit](https://novita.ai/docs/api-reference/model-apis-qwen-image-edit)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/img2prompt.png)