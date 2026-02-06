---
url: "https://novita.ai/docs/api-reference/model-apis-get-training-images-url"
title: "Get Images URL - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Training

Get Images URL

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Get Images URL

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/assets/training_dataset \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "file_extension": "<string>"
}
'
```

200

Copy

```
{
  "assets_id": 123,
  "upload_url": "<string>",
  "method": "<string>",
  "headers": {
    "Host": {
      "values": [\
        "<string>"\
      ]
    }
  }
}
```

POST

https://api.novita.ai

/

v3

/

assets

/

training\_dataset

Try it

Get Images URL

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/assets/training_dataset \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "file_extension": "<string>"
}
'
```

200

Copy

```
{
  "assets_id": 123,
  "upload_url": "<string>",
  "method": "<string>",
  "headers": {
    "Host": {
      "values": [\
        "<string>"\
      ]
    }
  }
}
```

**This API provides an S3 pre-signed uploading URL for training images.**

## [​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-file-extension)

file\_extension

string

required

Enum: `png`, `webp`, `jpeg`

## [​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-assets-id)

assets\_id

integer

The asset ID.

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-upload-url)

upload\_url

string

The S3 pre-signed uploading URL.

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-method)

method

string

The method for uploading.

Enum: `PUT`

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-headers)

headers

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-host)

Host

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url#param-values)

values

string\[\]

The host value.

## [​](https://novita.ai/docs/api-reference/model-apis-get-training-images-url\#example)  Example

request

Copy

```
curl --location 'https://api.novita.ai/v3/assets/training_dataset' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
  "file_extension": "png"
}'
```

response

Copy

```
{
  "assets_id": 100024,
  "upload_url": "https://faas-training-dataset.s3.ap-southeast-1.amazonaws.com/test/743567e210ff505ce5502cfb46659c8e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASVPYCN6LRCW3SOUV%2F20231102%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20231102T060519Z&X-Amz-Expires=120&X-Amz-SignedHeaders=host&x-id=PutObject&X-Amz-Signature=781d2156b707b7cfa87d94fb2836838e114c3afe4588368b9503c618ac125a67",
  "method": "PUT",
  "headers": {
    "Host": {
      "values": ["faas-training-dataset.s3.ap-southeast-1.amazonaws.com"]
    }
  }
}
```

Was this page helpful?

YesNo

[Video Merge Face](https://novita.ai/docs/api-reference/model-apis-video-merge-face) [LoRA for Subject Training](https://novita.ai/docs/api-reference/model-apis-create-subject-training)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.