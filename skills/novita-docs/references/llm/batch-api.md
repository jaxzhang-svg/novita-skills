---
url: "https://novita.ai/docs/guides/llm-batch-api"
title: "Batch Inference - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-batch-api#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Batch Inference

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Quick Start](https://novita.ai/docs/guides/llm-batch-api#quick-start)
- [1\. Preparing Batch Files](https://novita.ai/docs/guides/llm-batch-api#1-preparing-batch-files)
- [2\. Upload Batch Input File](https://novita.ai/docs/guides/llm-batch-api#2-upload-batch-input-file)
- [3\. Creating a Batch](https://novita.ai/docs/guides/llm-batch-api#3-creating-a-batch)
- [4\. Check the Status of a Batch](https://novita.ai/docs/guides/llm-batch-api#4-check-the-status-of-a-batch)
- [5\. Retrieve the Results](https://novita.ai/docs/guides/llm-batch-api#5-retrieve-the-results)
- [Instructions](https://novita.ai/docs/guides/llm-batch-api#instructions)
- [Limitations](https://novita.ai/docs/guides/llm-batch-api#limitations)
- [Error Handling](https://novita.ai/docs/guides/llm-batch-api#error-handling)
- [Batch Expiration](https://novita.ai/docs/guides/llm-batch-api#batch-expiration)
- [All Batch API](https://novita.ai/docs/guides/llm-batch-api#all-batch-api)

The Batch API for Large Language Models enables asynchronous processing of numerous inference requests and is fully compatible with the OpenAI API standard.The Batch API is a cost-effective solution when immediate inference results are unnecessary. It provides a higher rate limits than online calls, ensuring results are delivered within a reasonable timeframe of 48 hours.This API is ideal for:

- Conducting evaluations and data analysis.
- Classifying extensive datasets.
- Generating document summaries in an offline mode.

Supported Models:

- qwen/qwen3-vl-235b-a22b-instruct
- openai/gpt-oss-120b
- deepseek/deepseek-r1-0528

View More

## [​](https://novita.ai/docs/guides/llm-batch-api\#quick-start)  Quick Start

### [​](https://novita.ai/docs/guides/llm-batch-api\#1-preparing-batch-files)  1\. Preparing Batch Files

The Batch API uses .jsonl format files as input, with each line representing the details of an API inference request. Available endpoints include `/v1/chat/completions` and `/v1/completions`.

Set the `endpoint` parameter to `/v1/chat/completions` or `/v1/completions` for OpenAI API compatibility.

Each request must include a unique `custom_id` to locate inference results in the output file after batch completion. Parameters in the `body` field of each line are sent as actual inference request parameters to the endpoint.

All requests within a single batch JSONL file must target the same model. Do not mix requests for different models in one batch.

Below is an example input file containing 2 requests:

Copy

```
{"custom_id": "request-1", "body": {"model": "deepseek/deepseek-v3-0324", "messages": [{"role": "user", "content": "Hello, world!"}], "max_tokens": 400}}
{"custom_id": "request-2", "body": {"model": "deepseek/deepseek-v3-0324", "messages": [{"role": "system", "content": "You are a helpful assistant."},{"role": "user", "content": "Hello world!"}],"max_tokens": 1000}}
```

### [​](https://novita.ai/docs/guides/llm-batch-api\#2-upload-batch-input-file)  2\. Upload Batch Input File

Upload the batch input file to ensure it can be accurately referenced when creating a batch. Use the Files API to upload your .jsonl file and set the purpose to `batch`. Note that the file will be retained for 15 days.

For how to get API key, refer to the [API Key Management](https://novita.ai/docs/api-reference/basic-authentication).

Code Example**Python**

Copy

```
from openai import OpenAI

client = OpenAI(
    base_url="https://api.novita.ai/openai/v1",
    api_key="<Your API Key>",
)

batch_input_file = client.files.create(
    file=open("batch_input.jsonl", "rb"),
    purpose="batch",
)

print(batch_input_file)
```

**Curl**

Copy

```
export API_KEY="<Your API Key>"

curl --request POST \
  --url https://api.novita.ai/openai/v1/files \
  --header 'Authorization: Bearer ${API_KEY}' \
  --form 'file=@"/your/batch_input.jsonl"' \
  --form 'purpose="batch"'
```

Sample response upon successful file upload:

Copy

```
{
    "id": "file_d2co***as73c0cjd0",
    "object": "file",
    "bytes": 238,
    "filename": "batch_input.jsonl",
    "created_at": 1754894162,
    "purpose": "batch",
    "metadata": {
        "total_requests": 2
    }
}
```

### [​](https://novita.ai/docs/guides/llm-batch-api\#3-creating-a-batch)  3\. Creating a Batch

Once the input file is successfully uploaded, you can initiate a batch using the ID of the uploaded File object. The completion window is fixed at `48h` and is currently non-adjustable.Code Example**Python**

Copy

```
from openai import OpenAI

client = OpenAI(
    base_url="https://api.novita.ai/openai/v1",
    api_key="<Your API Key>",
)

batch = client.batches.create(
  input_file_id="file_d2cor0es1cas73c0cj60",
  endpoint="/v1/chat/completions",
  completion_window="48h"
)
print(batch)
```

**Curl**

Copy

```
export API_KEY="<Your API Key>"

curl --request POST \
  --url https://api.novita.ai/openai/v1/batches \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer ${API_KEY}' \
  --data '{
      "input_file_id": "file_d2co***as73c0cjd0",
      "endpoint": "/v1/chat/completions",
      "completion_window": "48h"
  }'
```

This request will yield a Batch object that includes metadata about your batch, as illustrated in the example below:

Copy

```
{
    "id": "batch_d2cq***73a68lu0",
    "object": "batch",
    "endpoint": "/v1/chat/completions",
    "input_file_id": "file_d2co***as73c0cjd0",
    "output_file_id": "",
    "error_file_id": "",
    "completion_window": "48h",
    "in_progress_at": null,
    "expires_at": null,
    "finalizing_at": null,
    "completed_at": null,
    "failed_at": null,
    "expired_at": null,
    "cancelling_at": null,
    "cancelled_at": null,
    "status": "validating",
    "errors": "",
    "version": 0,
    "created_at": "2025-08-11T16:31:52.949816948+08:00",
    "updated_at": null,
    "created_by": "8f242aa1-f725-4a67-8***9-cb68025e0976",
    "created_by_key_id": "key_cc19f96c***e7390644a37da21",
    "remark": "",
    "total": 0,
    "completed": 0,
    "failed": 0,
    "metadata": null,
    "request_counts": {
        "total": 0,
        "completed": 0,
        "failed": 0
    }
}
```

### [​](https://novita.ai/docs/guides/llm-batch-api\#4-check-the-status-of-a-batch)  4\. Check the Status of a Batch

You can check a batch’s status at any time to receive the latest batch information.The status enumeration values of the Batch object are as follows:

| Status | Description |
| --- | --- |
| VALIDATING | The input file is being validated before the batch can begin |
| PROGRESS | Batch is in progress |
| COMPLETED | Batch processing completed successfully |
| FAILED | Batch processing failed |
| EXPIRED | Batch exceeded deadline |
| CANCELLING | Batch is being cancelled |
| CANCELLED | Batch was cancelled |

Code Example**Python**

Copy

```
from openai import OpenAI

client = OpenAI(
    base_url="https://api.novita.ai/openai/v1",
    api_key="<Your API Key>",
)
batch = client.batches.retrieve("batch_d2cq***73a68lu0")
print(batch)
```

**Curl**

Copy

```
export API_KEY="<Your API Key>"

curl --request GET \
  --url https://api.novita.ai/openai/v1/batches/{batch_id} \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer ${API_KEY}'
```

### [​](https://novita.ai/docs/guides/llm-batch-api\#5-retrieve-the-results)  5\. Retrieve the Results

Once the batch inference is complete, you can download the result output file using the `output_file_id` field from the Batch object.The result output file will be deleted 30 days after the batch inference concludes, so please retrieve it promptly via the interface.Code Example**Python**

Copy

```
from openai import OpenAI

client = OpenAI(
    base_url="https://api.novita.ai/openai/v1",
    api_key="<Your API Key>",
)

content = client.files.content("example-250811-1")
print(content.read())
```

**Curl**

Copy

```
export API_KEY="<Your API Key>"

curl --request GET \
  --url https://api.novita.ai/openai/v1/files/{file_id}/content \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer ${API_KEY}'
```

The response returns the raw file content. For batch output files, each line contains a response like this:

Copy

```
{
  "custom_id": "request-2589",
  "error": null,
  "id": "batch_req_task_d2c",
  "response": {
    "body": {
      "id": "29e1432c-edfb-44a4-b531-c23c600abfae",
      "object": "chat.completion",
      "created": 1754902266,
      "model": "deepseek-test",
      "choices": [\
        {\
          "index": 0,\
          "message": {\
            "role": "assistant",\
            "content": "Hello! 👋 How can I assist you today? 😊"\
          },\
          "finish_reason": "stop"\
        }\
      ],
      "usage": {
        "prompt_tokens": 5,
        "completion_tokens": 13,
        "total_tokens": 18
      }
    },
    "request_id": "request-2589",
    "status_code": 200
  }
}
```

## [​](https://novita.ai/docs/guides/llm-batch-api\#instructions)  Instructions

### [​](https://novita.ai/docs/guides/llm-batch-api\#limitations)  Limitations

1. Each batch can contain up to 50,000 requests.

2. The maximum input file size per batch is 100MB.

### [​](https://novita.ai/docs/guides/llm-batch-api\#error-handling)  Error Handling

Errors encountered during batch processing are recorded in a separate error file, accessible via the error\_file\_id field. Common error codes include:

| Error Code | Description | Solution |
| --- | --- | --- |
| 400 | Invalid request format | Check JSONL syntax and required fields |
| 401 | Authentication failed | Verify API key |
| 404 | Batch not found | Check batch ID |
| 429 | Rate limit exceeded | Reduce request frequency |
| 500 | Server error | Contact us |

### [​](https://novita.ai/docs/guides/llm-batch-api\#batch-expiration)  Batch Expiration

Batches not completed within 48 hours will transition to an EXPIRED state. Unfinished requests will be canceled, while completed requests will be provided through an output file. You only pay for tokens consumed by completed requests. The batch makes every effort to complete within 48 hours.

## [​](https://novita.ai/docs/guides/llm-batch-api\#all-batch-api)  All Batch API

1. [Create batch](https://novita.ai/docs/api-reference/model-apis-llm-create-batch)
2. [Retrieve batch](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-batch)
3. [Cancel batch](https://novita.ai/docs/api-reference/model-apis-llm-cancel-batch)
4. [List batch](https://novita.ai/docs/api-reference/model-apis-llm-list-batches)
5. [Upload file](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file)
6. [List files](https://novita.ai/docs/api-reference/model-apis-llm-list-files)
7. [Retrieve file](https://novita.ai/docs/api-reference/model-apis-llm-query-file)
8. [Delete file](https://novita.ai/docs/api-reference/model-apis-llm-delete-file)
9. [Retrieve file content](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content)

Was this page helpful?

YesNo

[Dedicated Endpoint User Manual](https://novita.ai/docs/guides/llm-dedicated-endpoint) [Rate limits](https://novita.ai/docs/guides/llm-rate-limits)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.