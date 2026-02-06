---
url: "https://novita.ai/docs/api-reference/model-apis-progress-deprecated"
title: "Progress - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Deprecated

Progress

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Progress

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v2/progress \
  --header 'Authorization: <authorization>'
```

200

Copy

```
{
  "code": 123,
  "msg": "<string>",
  "data": {
    "status": 123,
    "progress": 123,
    "eta_relative": 123,
    "imgs": {},
    "failed_reason": "<string>",
    "current_images": [\
      "<string>"\
    ],
    "submit_time": "<string>",
    "execution_time": "<string>",
    "txt2img_time": "<string>",
    "finish_time": "<string>",
    "info": "<string>",
    "enable_nsfw_detection": true,
    "nsfw_detection_result": [\
      {\
        "valid": true,\
        "confidence": 123\
      }\
    ]
  }
}
```

GET

https://api.novita.ai

/

v2

/

progress

Try it

Progress

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v2/progress \
  --header 'Authorization: <authorization>'
```

200

Copy

```
{
  "code": 123,
  "msg": "<string>",
  "data": {
    "status": 123,
    "progress": 123,
    "eta_relative": 123,
    "imgs": {},
    "failed_reason": "<string>",
    "current_images": [\
      "<string>"\
    ],
    "submit_time": "<string>",
    "execution_time": "<string>",
    "txt2img_time": "<string>",
    "finish_time": "<string>",
    "info": "<string>",
    "enable_nsfw_detection": true,
    "nsfw_detection_result": [\
      {\
        "valid": true,\
        "confidence": 123\
      }\
    ]
  }
}
```

## [​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated\#get-progress)  GET Progress

This API provides a query for the result of image generation, which can be in progress, failed, or successful. If successful, it will return the S3 URL of the generated image.

## [​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-authorization)

Authorization

string

required

## [​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated\#query-parameters)  Query Parameters

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-task-id)

task\_id

arraystring\[\]

required

The ID of the task being queried.

## [​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-code)

code

integer

CodeNormal=0, CodeInternalError=-1, CodeInvalidJSON=1, CodeModelNotExist=2, CodeTaskIdNotExist=3, CodeInvalidAuth=4, CodeHostUnavailable=5, CodeParamRangeOutOfLimit=6, CodeCostBalanceFailure=7, CodeSamplerNotExist=8, CodeTimeout=9, CodeNotSupport=10

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-msg)

msg

string

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-data)

data

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-status)

status

integer

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-progress)

progress

number

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-eta-relative)

eta\_relative

number

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-imgs)

imgs

string\[\]¦null

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-failed-reason)

failed\_reason

string

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-current-images)

current\_images

string\[\]

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-submit-time)

submit\_time

string

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-execution-time)

execution\_time

string

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-txt2img-time)

txt2img\_time

string

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-finish-time)

finish\_time

string

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-info)

info

string

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-enable-nsfw-detection)

enable\_nsfw\_detection

boolean

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-nsfw-detection-result)

nsfw\_detection\_result

object\[\]

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-valid)

valid

boolean

[​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated#param-confidence)

confidence

number

## [​](https://novita.ai/docs/api-reference/model-apis-progress-deprecated\#example)  Example

request

Copy

```
curl --location 'https://api.novita.ai/v2/progress?task_id=' \
--header 'Authorization: Bearer {{API Key}}'
```

response

Copy

```
{
  "code": 0,
  "msg": "",
  "data": {
    "status": 2,
    "progress": 1,
    "eta_relative": 0,
    "imgs": [\
      "https://stars-test.s3.amazonaws.com/free/859d452b-f682-45fc-b0e7-5bd7b61a107d-0.png",\
      "https://stars-test.s3.amazonaws.com/free/859d452b-f682-45fc-b0e7-5bd7b61a107d-1.png",\
      "https://stars-test.s3.amazonaws.com/free/859d452b-f682-45fc-b0e7-5bd7b61a107d-2.png",\
      "https://stars-test.s3.amazonaws.com/free/859d452b-f682-45fc-b0e7-5bd7b61a107d-3.png"\
    ],
    "failed_reason": "",
    "current_images": [""],
    "submit_time": "2024-01-24 15:08:17",
    "execution_time": "2024-01-24 15:08:17",
    "txt2img_time": "2024-01-24 15:08:22",
    "finish_time": "2024-01-24 15:08:22",
    "info": "",
    "enable_nsfw_detection": true,
    "nsfw_detection_result": [\
      {\
        "valid": true,\
        "confidence": 57.62467\
      },\
      {\
        "valid": true,\
        "confidence": 3.908125\
      },\
      {\
        "valid": true,\
        "confidence": 99.84468\
      },\
      {\
        "valid": true,\
        "confidence": 2.440833\
      }\
    ],
    "debug_info": {
      "submit_time_ms": 1706080097101,
      "execution_time_ms": 1706080097369,
      "txt2img_time_ms": 1706080102333,
      "finish_time_ms": 1706080102479
    }
  }
}
```

Was this page helpful?

YesNo

[Image to Image V2](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated) [Upscale V2](https://novita.ai/docs/api-reference/model-apis-upscale-v2-deprecated)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.