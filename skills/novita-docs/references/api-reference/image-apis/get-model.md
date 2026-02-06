---
url: "https://novita.ai/docs/api-reference/model-apis-get-model"
title: "Novita AI Query Model API | Access Public & Private Model Details"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-get-model#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Model

Get Model

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Get Model

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v3/model \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "models": [\
    {\
      "id": 123,\
      "name": "<string>",\
      "hash_sha256": "<string>",\
      "sd_name": "<string>",\
      "type": {\
        "name": "<string>",\
        "display_name": "<string>"\
      },\
      "categories": [\
        "<string>"\
      ],\
      "status": 123,\
      "download_url": "<string>",\
      "tags": [\
        "<string>"\
      ],\
      "cover_url": "<string>",\
      "source": "<string>",\
      "base_model": "<string>",\
      "base_model_type": "<string>",\
      "download_url_ttl": 123,\
      "sd_name_in_api": "<string>"\
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

model

Try it

Get Model

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/v3/model \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "models": [\
    {\
      "id": 123,\
      "name": "<string>",\
      "hash_sha256": "<string>",\
      "sd_name": "<string>",\
      "type": {\
        "name": "<string>",\
        "display_name": "<string>"\
      },\
      "categories": [\
        "<string>"\
      ],\
      "status": 123,\
      "download_url": "<string>",\
      "tags": [\
        "<string>"\
      ],\
      "cover_url": "<string>",\
      "source": "<string>",\
      "base_model": "<string>",\
      "base_model_type": "<string>",\
      "download_url_ttl": 123,\
      "sd_name_in_api": "<string>"\
    }\
  ],
  "pagination": {
    "next_cursor": "<string>"
  }
}
```

**This API endpoint is designed to retrieve information on both public and private models. It allows users to access details such as model specifications, status, and usage guidelines, ensuring comprehensive insights into the available modeling resources.**

## [​](https://novita.ai/docs/api-reference/model-apis-get-model\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-get-model\#query-parameters)  Query Parameters

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-filter-visibility)

filter.visibility

string

Model types: `public` or `private`. If not set, the interface will query all types of models.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-filter-source)

filter.source

string

Source of the model.

Enum: `civitai`, `training`, `uploading`

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-filter-types)

filter.types

string

Specifies the types of models to include in the query.

Enum: `checkpoint`, `lora`, `vae`, `controlnet`, `upscaler`, `textualinversion`

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-filter-is-sdxl)

filter.is\_sdxl

boolean

Whether the model is SDXL or not. Setting this parameter to `true` includes only SDXL models in the query results, which are typically large-scale, high-performance models designed for extensive data processing tasks. Conversely, setting it to `false` excludes these models from the results. If left unspecified, the filter will not discriminate based on the SDXL classification, including all model types in the search results.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-filter-query)

filter.query

string

Searches the content of sd\_name, name, and tags.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-filter-is-inpainting)

filter.is\_inpainting

boolean

If set to true, it will filter out the checkpoints used for inpainting. The default is false.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-pagination-limit)

pagination.limit

string

Number of models to query per request, range (0, 100\].

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-pagination-cursor)

pagination.cursor

string

pagination.cursor is used to specify which record to start returning from. If it is empty, it means to get it from the beginning. Generally, the content of the next page is obtained by passing in the next\_cursor field value from the response packet.

## [​](https://novita.ai/docs/api-reference/model-apis-get-model\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-models)

models

object\[\]

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-id)

id

integer

ID of the model.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-name)

name

string

Model name.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-hash-sha256)

hash\_sha256

string

Hash of the model file.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-sd-name)

sd\_name

string

Model file name.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-type)

type

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-name-1)

name

string

Model type name.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-display-name)

display\_name

string

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-categories)

categories

string\[\]

Model categories.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-status)

status

integer

Model status: 0 for unavailable, 1 for available.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-download-url)

download\_url

string

Model download URL.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-tags)

tags

string\[\]

Model tags, such as photorealistic, anatomical, base model, CGI, realistic, semi-realistic.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-cover-url)

cover\_url

string

Model cover image URL.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-source)

source

string

The source of the model, such as civitai, training, uploading.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-base-model)

base\_model

string

Base model of the model, such as SD 1.5 or SDXL 1.0.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-base-model-type)

base\_model\_type

string

Base model type of the model, such as Inpainting or Standard.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-download-url-ttl)

download\_url\_ttl

integer

The expiration time of the download URL in seconds, default is 1 day.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-sd-name-in-api)

sd\_name\_in\_api

string

The name users can add in the interface.

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-pagination)

pagination

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-get-model#param-next-cursor)

next\_cursor

string

Next request starting cursor.

## [​](https://novita.ai/docs/api-reference/model-apis-get-model\#example)  Example

request

Copy

```
curl --location 'https://api.novita.ai/v3/model?filter.visibility=public&pagination.limit=2&pagination.cursor=c_0' \
--header 'Authorization: Bearer {{API Key}}'
```

response

Copy

```
{
  "models": [\
    {\
      "id": 114600,\
      "name": "V4.0-inpainting (VAE)",\
      "hash_sha256": "1A805277C8",\
      "sd_name": "realisticVisionV40_v40VAE-inpainting_81543.safetensors",\
      "type": {\
        "name": "checkpoint",\
        "display_name": "Checkpoint"\
      },\
      "categories": [],\
      "status": 1,\
      "tags": [\
        "photorealistic",\
        "anatomical",\
        "base model",\
        "cgi",\
        "realistic",\
        "semi-realistic"\
      ],\
      "cover_url": "https://next-app-static.s3.amazonaws.com/images-prod/xG1nkqKTMzGDvpLrqFT7WA/f291a219-4a86-45ab-96eb-c53446b3e4df/width=450/1495044.jpeg",\
      "base_model": "SD 1.5",\
      "base_model_type": "Inpainting",\
      "download_url_ttl": 2592000,\
      "sd_name_in_api": "realisticVisionV40_v40VAE-inpainting_81543.safetensors",\
      "is_sdxl": false\
    },\
    {\
      "id": 55199,\
      "name": "beta2",\
      "hash_sha256": "BA43B0EFEE",\
      "sd_name": "GoodHands-beta2_39807.safetensors",\
      "type": {\
        "name": "locon",\
        "display_name": "locon"\
      },\
      "categories": [],\
      "status": 1,\
      "tags": ["photorealistic", "concept", "hands"],\
      "cover_url": "https://next-app-static.s3.amazonaws.com/images-prod/xG1nkqKTMzGDvpLrqFT7WA/031a378c-3d66-45da-5d67-966c47cd4800/width=450/599083.jpeg",\
      "base_model": "SD 1.5",\
      "base_model_type": "Standard",\
      "download_url_ttl": 2592000,\
      "sd_name_in_api": "GoodHands-beta2_39807",\
      "is_sdxl": false\
    }\
  ],
  "pagination": {
    "next_cursor": "c_WzgwNDY2NiwiNTUxOTkiXQ=="
  }
}
```

Was this page helpful?

YesNo

[Webhook](https://novita.ai/docs/api-reference/model-apis-webhook) [Task Result](https://novita.ai/docs/api-reference/model-apis-task-result)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.