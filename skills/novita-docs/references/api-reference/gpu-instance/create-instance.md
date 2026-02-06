---
url: "https://novita.ai/docs/api-reference/gpu-instance-create-instance"
title: "Create GPU Instance - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/gpu-instance-create-instance#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Instance

Create GPU Instance

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Create GPU Instance

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/gpu-instance/openapi/v1/gpu/instance/create \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "name": "<string>",
  "productId": "<string>",
  "gpuNum": 123,
  "rootfsSize": 123,
  "imageUrl": "<string>",
  "imageAuth": "<string>",
  "imageAuthId": "<string>",
  "ports": "<string>",
  "envs": [\
    {\
      "key": "<string>",\
      "value": "<string>"\
    }\
  ],
  "tools": [\
    {\
      "name": "<string>",\
      "port": "<string>",\
      "type": "<string>"\
    }\
  ],
  "command": "<string>",
  "entrypoint": "<string>",
  "clusterId": "<string>",
  "networkStorages": [\
    {\
      "Id": "<string>",\
      "mountPoint": "<string>"\
    }\
  ],
  "networkId": "<string>",
  "kind": "<string>",
  "month": 123,
  "billingMode": "<string>",
  "autoRenew": true,
  "autoRenewMonth": 123,
  "minCudaVersion": "<string>"
}
'
```

200

Copy

```
{
  "id": "<string>"
}
```

POST

https://api.novita.ai

/

gpu-instance

/

openapi

/

v1

/

gpu

/

instance

/

create

Try it

Create GPU Instance

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/gpu-instance/openapi/v1/gpu/instance/create \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "name": "<string>",
  "productId": "<string>",
  "gpuNum": 123,
  "rootfsSize": 123,
  "imageUrl": "<string>",
  "imageAuth": "<string>",
  "imageAuthId": "<string>",
  "ports": "<string>",
  "envs": [\
    {\
      "key": "<string>",\
      "value": "<string>"\
    }\
  ],
  "tools": [\
    {\
      "name": "<string>",\
      "port": "<string>",\
      "type": "<string>"\
    }\
  ],
  "command": "<string>",
  "entrypoint": "<string>",
  "clusterId": "<string>",
  "networkStorages": [\
    {\
      "Id": "<string>",\
      "mountPoint": "<string>"\
    }\
  ],
  "networkId": "<string>",
  "kind": "<string>",
  "month": 123,
  "billingMode": "<string>",
  "autoRenew": true,
  "autoRenewMonth": 123,
  "minCudaVersion": "<string>"
}
'
```

200

Copy

```
{
  "id": "<string>"
}
```

## [​](https://novita.ai/docs/api-reference/gpu-instance-create-instance\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/gpu-instance-create-instance\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-name)

name

string

Instance name. String, length limit: 0-255 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-product-id)

productId

string

required

GPU product ID. String, length limit: 1-255 characters. You can query this via the [List GPU Products API](https://novita.ai/docs/api-reference/gpu-instance-list-products).

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-gpu-num)

gpuNum

integer

required

Number of GPUs. Integer, valid range: \[1, 8\].

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-rootfs-size)

rootfsSize

integer

required

Root filesystem size. Integer, valid range: \[10, 6144\]. If the minimum value is less than 10 GB, the system will default to 10 GB. The maximum value is dynamically limited by available storage resources and can be queried via the product list API.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-image-url)

imageUrl

string

required

Image URL. String, length limit: 1-500 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-image-auth)

imageAuth

string

Image authentication (username:password). String, length limit: 0-10239 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-image-auth-id)

imageAuthId

string

Image repository authentication ID.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-ports)

ports

string

Instance open ports, e.g.: 80/http, 3306/tcp. Supported port range: \[1-65535\], except for 2222, 2223, 2224 which are reserved for internal use. Supported port types: \[tcp, http\]. The total number of ports used by ports + tools must not exceed 15.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-envs)

envs

object\[\]

Instance environment variables. Up to 100 environment variables can be created.

Show properties

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-key)

key

string

Environment variable name. String, length limit: 0-511 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-value)

value

string

Environment variable value. String, length limit: 0-4095 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-tools)

tools

object\[\]

Enable official image support tools. Currently, some official images only include Jupyter. The total number of ports used by ports + tools must not exceed 15.

Show properties

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-name-1)

name

string

Tool name. Valid values: \[Jupyter\].

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-port)

port

string

Port used by the tool. Supported port range: \[1-65535\], except for 2222, 2223, 2224 which are reserved for internal use.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-type)

type

string

Port type used by the tool. Supported types: \[tcp, http\].

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-command)

command

string

Instance startup command. String, length limit: 0-2047 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-entrypoint)

entrypoint

string

Instance startup entrypoint. This setting will override the Docker image’s ENTRYPOINT. String, length limit: 0-2047 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-cluster-id)

clusterId

string

Specify the cluster ID to create the instance in. If left empty, the instance will be created in a random cluster.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-network-storages)

networkStorages

object\[\]

Cloud storage mount configuration. Up to 30 cloud storages can be mounted.

Show properties

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-id)

Id

string

Network storage ID.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-mount-point)

mountPoint

string

Network storage mount path. Default: “/network”. String, length limit: 1-4095 characters.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-network-id)

networkId

string

VPC network ID. Leave empty if not using a VPC network.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-kind)

kind

string

required

Instance type. Valid values: \[gpu, cpu\].

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-month)

month

integer

Number of months for subscription instance. Set to 0 to create a pay-as-you-go instance. Integer, value must be greater than or equal to 0.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-billing-mode)

billingMode

string

Instance billing mode. Valid values: `onDemand`, `monthly`, `spot`.

Default: `onDemand`.

Note: If month > 0 is set, `monthly` billing mode will be enforced.

- `onDemand`: Pay-as-you-go billing
- `monthly`: Monthly subscription billing
- `spot`: Spot instance billing

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-auto-renew)

autoRenew

boolean

Whether to automatically renew. Boolean, default value: false.

Note: This parameter is only effective when monthly billing is enabled.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-auto-renew-month)

autoRenewMonth

integer

Number of months to automatically renew. Integer, valid range: \[1, 12\].

Note: This parameter is only effective when monthly billing is enabled and auto renew is enabled.

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-min-cuda-version)

minCudaVersion

string

Minimum CUDA version supported for instance creation. Must be specified in the format: 11.8, 12.4, etc. String, length limit: 0-255 characters.

## [​](https://novita.ai/docs/api-reference/gpu-instance-create-instance\#response)  Response

[​](https://novita.ai/docs/api-reference/gpu-instance-create-instance#param-id)

id

string

Created instance ID.

Was this page helpful?

YesNo

[List Clusters](https://novita.ai/docs/api-reference/gpu-instance-list-clusters) [Create CPU Instance](https://novita.ai/docs/api-reference/gpu-instance-create-cpu-instance)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.