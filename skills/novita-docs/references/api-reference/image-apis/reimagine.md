---
url: "https://novita.ai/docs/api-reference/model-apis-reimagine"
title: "Reimagine - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-reimagine#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Generator

Reimagine

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Reimagine

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/reimagine \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "extra": {
    "response_image_type": "<string>",
    "enterprise_plan": {
      "enabled": true
    }
  },
  "image_file": "<string>"
}
'
```

200

Copy

```
{
  "image_file": "<string>",
  "image_type": "<string>"
}
```

POST

https://api.novita.ai

/

v3

/

reimagine

Reimagine

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/reimagine \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "extra": {
    "response_image_type": "<string>",
    "enterprise_plan": {
      "enabled": true
    }
  },
  "image_file": "<string>"
}
'
```

200

Copy

```
{
  "image_file": "<string>",
  "image_type": "<string>"
}
```

**This feature allows you to automatically generate variations of a single image.**

## [​](https://novita.ai/docs/api-reference/model-apis-reimagine\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-reimagine\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-extra)

extra

object

Optional extra parameters for the request.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-response-image-type)

response\_image\_type

string

The returned image type. Default is png.Enum: `png, webp, jpeg`

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-enterprise-plan)

enterprise\_plan

object

Dedicated Endpoints settings, which only take effect for users who have already subscribed to the [Dedicated Endpoints Documentation](https://novita.ai/docs/guides/model-apis-dedicated-endpoints).

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-enabled)

enabled

boolean

Set to true to schedule this task to use your Dedicated Endpoints’s dedicated resources. Default is false.

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-image-file)

image\_file

string

required

The base64 of original image, with a maximum resolution of 1024 x 1024 and a maximum file size of 30 Mb.

## [​](https://novita.ai/docs/api-reference/model-apis-reimagine\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-image-file-1)

image\_file

string

The Base64-encoded content of the returned image.

[​](https://novita.ai/docs/api-reference/model-apis-reimagine#param-image-type)

image\_type

string

The returned image type.

Enum: `png`, `webp`, `jpeg`

## [​](https://novita.ai/docs/api-reference/model-apis-reimagine\#example)  Example

This API allows you to automatically generate multiple variations of a single image.**Try it in [playground](https://novita.ai/playground#reimagine).**`Request:`

Copy

```
curl --location --request POST 'https://api.novita.ai/v3/reimagine' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
"image_file":"{{Base64 encoded image}}"
}'
```

HTTP status codes in the 2xx range indicate that the request has been successfully accepted. A code of 400 signifies a request parameter error, while status codes in the 5xx range indicate internal server errors.You can retrieve the image URL in the `image_file` field of the response in base64 format.`Response:`

Copy

```
{
    "image_file": "{{Base64 encoded image}}",
    "image_type": "png"
}
```

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/reimagine_01.png)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/reimagine_02.png)

Was this page helpful?

YesNo

[Image to Image](https://novita.ai/docs/api-reference/model-apis-img2img) [FLUX.1 \[schnell\] Text to Image](https://novita.ai/docs/api-reference/model-apis-flux-1-schnell)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/reimagine_01.png)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/reimagine_02.png)