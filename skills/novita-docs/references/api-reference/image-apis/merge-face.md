---
url: "https://novita.ai/docs/api-reference/model-apis-merge-face"
title: "Novita AI Merge Face API: Combine Features from Two Faces into One Image"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-merge-face#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Face Editor

Merge Face

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Merge Face

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/merge-face \
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
  "face_image_file": "<string>",
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

merge-face

Merge Face

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/merge-face \
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
  "face_image_file": "<string>",
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

**This API endpoint seamlessly merges the characteristics of two faces, enabling the creation of a composite image that integrates features from both inputs.**

## [​](https://novita.ai/docs/api-reference/model-apis-merge-face\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-merge-face\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-extra)

extra

object

Optional extra parameters for the request.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-response-image-type)

response\_image\_type

string

The returned image type. Default is png.

Enum: `png`, `webp`, `jpeg`

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-enterprise-plan)

enterprise\_plan

object

Dedicated Endpoints settings, which only take effect for users who have already subscribed to the [Dedicated Endpoints Documentation](https://novita.ai/docs/guides/model-apis-dedicated-endpoints).

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-enabled)

enabled

boolean

Set to true to schedule this task to use your Dedicated Endpoints’s dedicated resources. Default is false.

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-face-image-file)

face\_image\_file

string

required

The base64-encoded face image, with a maximum resolution of 2048 x 2048 and a maximum file size of 30 MB.

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-image-file)

image\_file

string

required

The base64-encoded original image, with a maximum resolution of 2048 x 2048 and a maximum file size of 30 MB.

## [​](https://novita.ai/docs/api-reference/model-apis-merge-face\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-image-file-1)

image\_file

string

The Base64-encoded content of the returned image.

[​](https://novita.ai/docs/api-reference/model-apis-merge-face#param-image-type)

image\_type

string

The returned image type.

## [​](https://novita.ai/docs/api-reference/model-apis-merge-face\#example)  Example

This feature helps blend the details of two faces.**Try it in the [playground](https://novita.ai/playground#merge-face).**`Request:`

Copy

```
curl --location --request POST 'https://api.novita.ai/v3/merge-face' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "face_image_file": "{{Base64 encoded image}}",
    "image_file": "{{Base64 encoded image}}"
}'
```

HTTP status codes in the 2xx range indicate that the request has been successfully accepted. Code 400 means there is an error with the request parameters, while status codes in the 5xx range indicate internal server errors.You can obtain the image URL in the `image_file` field of the response in base64 format.`Response:`

Copy

```
{
    "image_file": "{{Base64 encoded image}}",
    "image_type": "png"
}
```

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/mergeface01.png)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/mergeface02.png)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/mergeface03.png)

Was this page helpful?

YesNo

[GLM Voice Clone](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone) [Video Merge Face](https://novita.ai/docs/api-reference/model-apis-video-merge-face)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/mergeface01.png)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/mergeface02.png)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/mergeface03.png)