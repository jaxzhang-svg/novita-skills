---
url: "https://novita.ai/docs/api-reference/model-apis-list-training-task"
title: "List LoRA Training Task - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-list-training-task#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Training

List LoRA Training Task

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

List LoRA Training Task

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v3/training \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "tasks": [\
    {\
      "task_name": "<string>",\
      "task_id": "<string>",\
      "task_type": "<string>",\
      "task_status": "<string>",\
      "created_at": 123,\
      "models": [\
        {\
          "model_name": "<string>",\
          "model_status": "<string>"\
        }\
      ]\
    }\
  ],
  "pagination": {
    "next_cursor": "<string>"
  }
}
```

GET

https://api.novita.ai

/

v3

/

training

Try it

List LoRA Training Task

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v3/training \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "tasks": [\
    {\
      "task_name": "<string>",\
      "task_id": "<string>",\
      "task_type": "<string>",\
      "task_status": "<string>",\
      "created_at": 123,\
      "models": [\
        {\
          "model_name": "<string>",\
          "model_status": "<string>"\
        }\
      ]\
    }\
  ],
  "pagination": {
    "next_cursor": "<string>"
  }
}
```

**This API retrieves information about all the user’s training tasks.**

## [​](https://novita.ai/docs/api-reference/model-apis-list-training-task\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-list-training-task\#query-parameters)  Query Parameters

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-pagination-limit)

pagination.limit

integer

The number of model records to query per request, within the range (0, 100\].

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-pagination-cursor)

pagination.cursor

string

The pagination.cursor parameter specifies the record from which to start returning results. If it is empty, the results will start from the beginning. Generally, the content of the next page is obtained by passing the next\_cursor field value from the response packet.

## [​](https://novita.ai/docs/api-reference/model-apis-list-training-task\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-tasks)

tasks

object\[\]

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-task-name)

task\_name

string

The name of the training task.

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-task-id)

task\_id

string

The unique identifier of the training task, which can be used to query the training status and results.

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-task-type)

task\_type

string

The type of the training task.

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-task-status)

task\_status

string

Represents the current status of a task, which is particularly useful for monitoring and managing the progress of training tasks. Each status indicates a specific phase in the task’s lifecycle: UNKNOWN - The status of the task is not known or has not been updated yet; QUEUING - The task is in the queue waiting to be processed; TRAINING - The task is currently undergoing training processes; SUCCESS - The task has been completed successfully; CANCELED - The task was canceled before completion; FAILED - The task failed to complete successfully due to an error or issue.

Enum: `UNKNOWN`, `QUEUING`, `TRAINING`, `SUCCESS`, `CANCELED`, `FAILED`

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-created-at)

created\_at

integer

The timestamp of when the task was created.

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-models)

models

object\[\]

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-model-name)

model\_name

string

The name of the model.

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-model-status)

model\_status

string

The status of the model. When the model is being deployed, the status will be `DEPLOYING`, and when the model is serving, the status will be `SERVING`.

Enum: `DEPLOYING`, `SERVING`

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-pagination)

pagination

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-list-training-task#param-next-cursor)

next\_cursor

string

## [​](https://novita.ai/docs/api-reference/model-apis-list-training-task\#example)  Example

In this step, we can obtain all the information about trained models.

Copy

```
curl --location --request GET 'https://api.novita.ai/v3/training?pagination.limit=10&pagination.cursor=c_0' \
--header 'Authorization: Bearer {{API Key}}'
```

`Response:`

Copy

```
{
    "tasks": [\
        {\
            "task_name": "test_01",\
            "task_id": "a0c4cc90-0296-4972-a1d8-e6e227daf094",\
            "task_type": "subject",\
            "task_status": "SUCCESS",\
            "created_at": 1699325415,\
            "models": [\
                {\
                    "model_name": "model_1699325939_E83A88DAC5.safetensors",\
                    "model_status": "SERVING"\
                }\
            ]\
        },\
        {\
            "task_name": "test_02",\
            "task_id": "51e9bf41-8f7a-464d-b5ad-2fa217a1ec93",\
            "task_type": "subject",\
            "task_status": "SUCCESS",\
            "created_at": 1699267268,\
            "models": [\
                {\
                    "model_name": "model_1699267603_27F0D9C81C.safetensors",\
                    "model_status": "SERVING"\
                }\
            ]\
        },\
        {\
            "task_name": "test_03",\
            "task_id": "7bd205ab-63e9-452b-9a66-39c597000eaa",\
            "task_type": "subject",\
            "task_status": "FAILED",\
            "created_at": 1699264338,\
            "models": []\
        }\
    ],
    "pagination": {
        "next_cursor": "c_10"
    }
}
```

- `task_name`: The name of the training task.
- `task_id`: The unique identifier of the training task, which can be used to query the training status and results.
- `task_type`: The type of the training task.
- `task_status`: The status of the training task. Enum: `UNKNOWN`, `QUEUING`, `TRAINING`, `SUCCESS`, `CANCELED`, `FAILED`.
- `created_at`: The timestamp of when the training task was created.
- `models`: The trained models.
- `model_name`: The name of the model.
- `model_status`: The status of the model. Enum: `DEPLOYING`, `SERVING`.

Was this page helpful?

YesNo

[LoRA for Style Training](https://novita.ai/docs/api-reference/model-apis-create-style-training) [Text to Image V2](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.