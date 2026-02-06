---
url: "https://novita.ai/docs/api-reference/model-apis-llm-create-batch"
title: "Create batch - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Batch

Create batch

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Create batch

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/batches \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "input_file_id": "<string>",
  "endpoint": "<string>",
  "completion_window": "<string>"
}
'
```

200

Copy

```
{
  "id": "<string>",
  "object": "<string>",
  "endpoint": "<string>",
  "input_file_id": "<string>",
  "output_file_id": "<string>",
  "error_file_id": "<string>",
  "completion_window": "<string>",
  "in_progress_at": {},
  "expires_at": {},
  "finalizing_at": {},
  "completed_at": {},
  "failed_at": {},
  "expired_at": {},
  "cancelling_at": {},
  "cancelled_at": {},
  "status": "<string>",
  "errors": "<string>",
  "version": 123,
  "created_at": "<string>",
  "updated_at": {},
  "created_by": "<string>",
  "created_by_key_id": "<string>",
  "remark": "<string>",
  "total": 123,
  "completed": 123,
  "failed": 123,
  "metadata": {},
  "request_counts": {
    "total": 123,
    "completed": 123,
    "failed": 123
  }
}
```

POST

https://api.novita.ai

/

openai

/

v1

/

batches

Try it

Create batch

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/batches \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "input_file_id": "<string>",
  "endpoint": "<string>",
  "completion_window": "<string>"
}
'
```

200

Copy

```
{
  "id": "<string>",
  "object": "<string>",
  "endpoint": "<string>",
  "input_file_id": "<string>",
  "output_file_id": "<string>",
  "error_file_id": "<string>",
  "completion_window": "<string>",
  "in_progress_at": {},
  "expires_at": {},
  "finalizing_at": {},
  "completed_at": {},
  "failed_at": {},
  "expired_at": {},
  "cancelling_at": {},
  "cancelled_at": {},
  "status": "<string>",
  "errors": "<string>",
  "version": 123,
  "created_at": "<string>",
  "updated_at": {},
  "created_by": "<string>",
  "created_by_key_id": "<string>",
  "remark": "<string>",
  "total": 123,
  "completed": 123,
  "failed": 123,
  "metadata": {},
  "request_counts": {
    "total": 123,
    "completed": 123,
    "failed": 123
  }
}
```

After successfully [uploading the input file](https://novita.ai/docs/api-reference/model-apis-llm-upload-batch-input-file), initiate a batch by using the ID of the uploaded file. Note that the completion window is set to a fixed duration of 48 hours and cannot be modified.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-input-file-id)

input\_file\_id

string

required

ID of the uploaded input file containing batch requests

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-endpoint)

endpoint

string

required

The endpoint to use for batch processing. Available endpoints are `/v1/chat/completions` and `/v1/completions`.

Set the `endpoint` parameter to `/v1/chat/completions` or `/v1/completions` for OpenAI API compatibility.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-completion-window)

completion\_window

string

Time window for batch completion. The completion window is fixed at `48h` and is currently non-adjustable.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-id)

id

string

required

A unique identifier for the batch job.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-object)

object

string

required

The object type, which is always `batch`.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-endpoint-1)

endpoint

string

required

The API endpoint that the batch job is using for processing requests.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-input-file-id-1)

input\_file\_id

string

required

The ID of the input file containing the batch requests.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-output-file-id)

output\_file\_id

string

required

The ID of the output file containing the batch results. Empty until the batch is completed.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-error-file-id)

error\_file\_id

string

required

The ID of the error file containing any errors that occurred during batch processing. Empty until errors occur.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-completion-window-1)

completion\_window

string

required

The time window for batch completion. Currently fixed at `48h`.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-in-progress-at)

in\_progress\_at

string \| null

The timestamp when the batch started processing. Null if not yet started.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-expires-at)

expires\_at

string \| null

The timestamp when the batch will expire. Null if not set.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-finalizing-at)

finalizing\_at

string \| null

The timestamp when the batch started finalizing. Null if not yet finalizing.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-completed-at)

completed\_at

string \| null

The timestamp when the batch was completed. Null if not yet completed.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-failed-at)

failed\_at

string \| null

The timestamp when the batch failed. Null if not failed.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-expired-at)

expired\_at

string \| null

The timestamp when the batch expired. Null if not expired.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-cancelling-at)

cancelling\_at

string \| null

The timestamp when the batch started cancelling. Null if not cancelling.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-cancelled-at)

cancelled\_at

string \| null

The timestamp when the batch was cancelled. Null if not cancelled.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-status)

status

string

required

The current status of the batch job.Available statuses:

- `VALIDATING` \- The input file is being validated before the batch can begin
- `PROGRESS` \- Batch is in progress
- `COMPLETED` \- Batch processing completed successfully
- `FAILED` \- Batch processing failed
- `EXPIRED` \- Batch exceeded deadline
- `CANCELLING` \- Batch is being cancelled
- `CANCELLED` \- Batch was cancelled

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-errors)

errors

string

Error messages if any errors occurred during batch processing.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-version)

version

integer

required

The version number of the batch job.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-created-at)

created\_at

string

required

The timestamp when the batch job was created.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-updated-at)

updated\_at

string \| null

The timestamp when the batch job was last updated. Null if never updated.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-created-by)

created\_by

string

required

The unique identifier of the user who created the batch job.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-created-by-key-id)

created\_by\_key\_id

string

required

The API key ID used to create the batch job.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-remark)

remark

string

Optional remark or note for the batch job.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-total)

total

integer

required

The total number of requests in the batch.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-completed)

completed

integer

required

The number of completed requests in the batch.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-failed)

failed

integer

required

The number of failed requests in the batch.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-metadata)

metadata

object \| null

Additional metadata associated with the batch job. Null if no metadata is provided.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-request-counts)

request\_counts

object

required

Detailed request count information.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-total-1)

total

integer

required

The total number of requests in the batch.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-completed-1)

completed

integer

required

The number of successfully completed requests.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-batch#param-failed-1)

failed

integer

required

The number of failed requests.

Was this page helpful?

YesNo

[Retrieve model](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-model) [Retrieve batch](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-batch)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.