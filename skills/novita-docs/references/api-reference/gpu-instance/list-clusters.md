---
url: "https://novita.ai/docs/api-reference/gpu-instance-list-clusters"
title: "List Clusters - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Cluster

List Clusters

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

List Clusters

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/gpu-instance/openapi/v1/clusters \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "data": [\
    {\
      "id": "<string>",\
      "name": "<string>",\
      "availableGpuType": {},\
      "supportNetworkStorage": true,\
      "supportInstanceNetwork": true\
    }\
  ]
}
```

GET

https://api.novita.ai

/

gpu-instance

/

openapi

/

v1

/

clusters

Try it

List Clusters

cURL

Copy

```
curl --request GET \
  --url https://api.novita.ai/gpu-instance/openapi/v1/clusters \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>'
```

200

Copy

```
{
  "data": [\
    {\
      "id": "<string>",\
      "name": "<string>",\
      "availableGpuType": {},\
      "supportNetworkStorage": true,\
      "supportInstanceNetwork": true\
    }\
  ]
}
```

## [​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters\#response)  Response

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-data)

data

object\[\]

required

Hide properties

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-id)

id

string

required

Cluster ID.

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-name)

name

string

required

Cluster name.

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-available-gpu-type)

availableGpuType

\[string\]

required

Supported GPU types in the cluster.

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-support-network-storage)

supportNetworkStorage

boolean

required

Whether the cluster supports creating cloud storage.

[​](https://novita.ai/docs/api-reference/gpu-instance-list-clusters#param-support-instance-network)

supportInstanceNetwork

boolean

required

Whether the cluster supports creating VPC networks.

Was this page helpful?

YesNo

[Upscale V2](https://novita.ai/docs/api-reference/model-apis-upscale-v2-deprecated) [Create GPU Instance](https://novita.ai/docs/api-reference/gpu-instance-create-instance)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.