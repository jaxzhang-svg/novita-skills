---
url: "https://novita.ai/docs/api-reference/model-apis-task-result"
title: "Novita AI Task Result API | Retrieve Asynchronous Task Results"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-task-result#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Task

Task Result

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Task Result

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v3/async/task-result \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "extra": {
    "seed": "<string>",
    "enable_nsfw_detection": true,
    "debug_info": {
      "request_info": "<string>",
      "submit_time_ms": "<string>",
      "execute_time_ms": "<string>",
      "complete_time_ms": "<string>"
    }
  },
  "task": {
    "task_id": "<string>",
    "status": "<string>",
    "reason": "<string>",
    "task_type": "<string>",
    "eta": 123,
    "progress_percent": 123
  },
  "images": [\
    {\
      "image_url": "<string>",\
      "image_url_ttl": 123,\
      "image_type": "<string>"\
    }\
  ],
  "videos": [\
    {\
      "video_url": "<string>",\
      "video_url_ttl": "<string>",\
      "video_type": "<string>"\
    }\
  ],
  "audios": [\
    {\
      "audio_url": "<string>",\
      "audio_url_ttl": "<string>",\
      "audio_type": "<string>",\
      "audio_metadata": {\
        "text": "<string>",\
        "start_time": {},\
        "end_time": {}\
      }\
    }\
  ]
}
```

GET

https://api.novita.ai

/

v3

/

async

/

task-result

Try it

Task Result

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v3/async/task-result \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "extra": {
    "seed": "<string>",
    "enable_nsfw_detection": true,
    "debug_info": {
      "request_info": "<string>",
      "submit_time_ms": "<string>",
      "execute_time_ms": "<string>",
      "complete_time_ms": "<string>"
    }
  },
  "task": {
    "task_id": "<string>",
    "status": "<string>",
    "reason": "<string>",
    "task_type": "<string>",
    "eta": 123,
    "progress_percent": 123
  },
  "images": [\
    {\
      "image_url": "<string>",\
      "image_url_ttl": 123,\
      "image_type": "<string>"\
    }\
  ],
  "videos": [\
    {\
      "video_url": "<string>",\
      "video_url_ttl": "<string>",\
      "video_type": "<string>"\
    }\
  ],
  "audios": [\
    {\
      "audio_url": "<string>",\
      "audio_url_ttl": "<string>",\
      "audio_type": "<string>",\
      "audio_metadata": {\
        "text": "<string>",\
        "start_time": {},\
        "end_time": {}\
      }\
    }\
  ]
}
```

**This API is used to retrieve images, audio, or video results from v3 asynchronous tasks using the `task_id`.**

## [​](https://novita.ai/docs/api-reference/model-apis-task-result\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-task-result\#query-parameters)  Query Parameters

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-task-id)

task\_id

string

required

Returned in the 200 response of v3 asynchronous APIs.

## [​](https://novita.ai/docs/api-reference/model-apis-task-result\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-extra)

extra

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-seed)

seed

string

A seed is a number from which Stable Diffusion generates noise, making generation deterministic. Using the same seed and set of parameters will produce identical images each time, minimum -1.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-enable-nsfw-detection)

enable\_nsfw\_detection

boolean

When set to true, NSFW detection will be enabled, incurring an additional cost of $0.0015 for each generated image.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-debug-info)

debug\_info

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-request-info)

request\_info

string

Records request parameters for debugging purposes.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-submit-time-ms)

submit\_time\_ms

string

The timestamp (in milliseconds) of when the task was submitted.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-execute-time-ms)

execute\_time\_ms

string

The timestamp (in milliseconds) of when the task started execution.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-complete-time-ms)

complete\_time\_ms

string

The timestamp (in milliseconds) of when the task was completed.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-task)

task

object

Task information.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-task-id-1)

task\_id

string

Task ID.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-status)

status

string

Indicates the current status of a task. This parameter allows you to filter results based on the following status categories: `TASK_STATUS_QUEUED`: The task is queued and awaiting processing. `TASK_STATUS_SUCCEED`: The task has been processed successfully. `TASK_STATUS_FAILED`: The task failed during processing. `TASK_STATUS_PROCESSING`: The task is currently being processed.

Enum: `TASK_STATUS_QUEUED`, `TASK_STATUS_SUCCEED`, `TASK_STATUS_FAILED`, `TASK_STATUS_PROCESSING`

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-reason)

reason

string

Provides the reason for a task’s failure. This parameter specifies the explanation or error message associated with tasks that did not succeed. Utilizing this filter can aid in diagnosing issues and implementing corrective actions for failed processes.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-task-type)

task\_type

string

Specifies the type of task.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-eta)

eta

number

Specifies the estimated time of completion for tasks, measured in seconds. This parameter is particularly relevant for video-type tasks, providing a forecast of how long it will take to complete the task based on current processing parameters and system load. This information can be vital for planning and resource management in environments with time-sensitive video processing requirements.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-progress-percent)

progress\_percent

number

Progress of task completion in percentage. This feature is currently available only for:

1\. Video Generator APIs;

2\. Text-to-Image API and Image-to-Image API.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-images)

images

object\[\]

Contains information about images associated with image-type tasks. This parameter provides detailed data on each image processed or generated during the task, such as file paths, metadata, or any image-specific attributes. It is returned only for tasks that involve image operations, facilitating enhanced tracking and management of image data.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-image-url)

image\_url

string

Image URL.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-image-url-ttl)

image\_url\_ttl

integer

Image expiration time in seconds.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-image-type)

image\_type

string

Image type.

Enum: `jpeg`, `png`, `webp`

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-videos)

videos

object\[\]

Contains information about videos associated with video-type tasks. This parameter provides detailed data on each video processed or generated during the task, such as file paths, metadata, or any video-specific attributes. It is returned only for tasks that involve video operations, facilitating enhanced tracking and management of video data.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-video-url)

video\_url

string

Video URL.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-video-url-ttl)

video\_url\_ttl

string

Video expiration time in seconds.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-video-type)

video\_type

string

Video type.

Enum: `mp4`, `gif`

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-audios)

audios

object\[\]

Contains information about audios associated with audio type tasks. This parameter provides detailed data on each audio processed or generated during the task, such as file paths, metadata, or any image-specific attributes. It is returned only for tasks that involve audio operations, facilitating enhanced tracking and management of audio data.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-audio-url)

audio\_url

string

Audio url.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-audio-url-ttl)

audio\_url\_ttl

string

Audio url expire time in seconds.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-audio-type)

audio\_type

string

Audio type.

Enum: `wav`

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-audio-metadata)

audio\_metadata

object

Contains detailed metadata about audio files processed or generated during audio-related tasks.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-text)

text

string

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-start-time)

start\_time

float32

the start\_time of the text in seconds.

[​](https://novita.ai/docs/api-reference/model-apis-task-result#param-end-time)

end\_time

float32

the end\_time of the text in seconds.

## [​](https://novita.ai/docs/api-reference/model-apis-task-result\#example)  Example

request

Copy

```
curl --location --globoff 'https://api.novita.ai/v3/async/task-result?task_id={{Novita-TaskID}}' \
--header 'Authorization: Bearer {{API Key}}'
```

response

Copy

```
{
  "extra": {
    "seed": "158881667",
    "enable_nsfw_detection": false,
    "debug_info": {
      "request_info": "",
      "submit_time_ms": "",
      "execute_time_ms": "",
      "complete_time_ms": ""
    }
  },
  "task": {
    "task_id": "830d9c90-d53f-4c5a-8009-xxx",
    "status": "TASK_STATUS_SUCCEED",
    "reason": "",
    "task_type": "TXT_TO_IMG",
    "eta": 0,
    "progress_percent": 0
  },
  "images": [\
    {\
      "image_url": "https://faas-output-image.s3.ap-southeast-1.amazonaws.com/prod/xxx",\
      "image_url_ttl": 3600,\
      "image_type": "jpeg",\
      "nsfw_detection_result": {}\
    }\
  ],
  "videos": [],
  "audios": []
}
```

Was this page helpful?

YesNo

[Get Model](https://novita.ai/docs/api-reference/model-apis-get-model) [Text to Image](https://novita.ai/docs/api-reference/model-apis-txt2img)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.