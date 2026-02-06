---
url: "https://novita.ai/docs/api-reference/model-apis-video-merge-face"
title: "Video Merge Face - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-video-merge-face#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Face Editor

Video Merge Face

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Video Merge Face

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/video-merge-face \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "extra": {
    "response_video_type": "<string>"
  },
  "request": {
    "video_assets_id": "<string>",
    "enable_restore": true,
    "face_image_base64": "<string>"
  }
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

video-merge-face

Try it

Video Merge Face

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/video-merge-face \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "extra": {
    "response_video_type": "<string>"
  },
  "request": {
    "video_assets_id": "<string>",
    "enable_restore": true,
    "face_image_base64": "<string>"
  }
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

**This API endpoint seamlessly integrates a face image into a target video, allowing you to replace the face in the video with the face from the image.**

> **Pricing:** $0.0005 / Video Frame

## [​](https://novita.ai/docs/api-reference/model-apis-video-merge-face\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-video-merge-face\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-extra)

extra

object

Optional extra parameters for the request.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-response-video-type)

response\_video\_type

string

The returned video type. Default is mp4.

Enum: `mp4`, `gif`

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-request)

request

object

required

Hide properties

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-video-assets-id)

video\_assets\_id

string

required

Upload your input video to our temporary secure storage following the instructions in the guide [Get video assets id](https://novita.ai/docs/api-reference/model-apis-video-merge-face#_1-get-video-assets-id), and the video\_assets\_id is the identifier for your input video. Supported video formats: MP4, with a maximum resolution of 3840 x 2160 and a maximum file size of 100 Mb.

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-enable-restore)

enable\_restore

boolean

required

Whether to restore the output face image. If enabled, the output face video will be more detailed, but the API latency will be longer.

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-face-image-base64)

face\_image\_base64

string

required

The base64-encoded face image, with a maximum resolution of 2048 x 2048 and a maximum file size of 30 MB.

## [​](https://novita.ai/docs/api-reference/model-apis-video-merge-face\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-video-merge-face#param-task-id)

task\_id

string

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

## [​](https://novita.ai/docs/api-reference/model-apis-video-merge-face\#example)  Example

### [​](https://novita.ai/docs/api-reference/model-apis-video-merge-face\#1-get-video-assets-id)  1\. Get Video Assets ID

`Request:`

Copy

```
curl -X PUT -T "{{video file path}}" 'https://assets.novitai.com/video'
```

`Response:`

Copy

```
{
    "assets_id": "cjIvbm92aXRhLWFpLWFzc2V0L3ZpZGVvL0NLd0N3aHJwS0ZyYVduNWVoejVFV0tleGlzN0toNmRq"
}
```

Was this page helpful?

YesNo

[Merge Face](https://novita.ai/docs/api-reference/model-apis-merge-face) [Get Images URL](https://novita.ai/docs/api-reference/model-apis-get-training-images-url)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.