---
url: "https://novita.ai/docs/api-reference/model-apis-webhook"
title: "Webhook - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-webhook#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image, Audio and Video

Webhook

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Get Started](https://novita.ai/docs/api-reference/model-apis-webhook#get-started)
- [Enable Webhook in Request](https://novita.ai/docs/api-reference/model-apis-webhook#enable-webhook-in-request)
- [Use Test Mode to Test Your Integration](https://novita.ai/docs/api-reference/model-apis-webhook#use-test-mode-to-test-your-integration)
- [Retry Policy](https://novita.ai/docs/api-reference/model-apis-webhook#retry-policy)
- [Best Practices](https://novita.ai/docs/api-reference/model-apis-webhook#best-practices)

**For the asynchronous V3 APIs, in addition to polling the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result), you can now also listen for the `ASYNC_TASK_RESULT` event on your webhook endpoint.**

## [​](https://novita.ai/docs/api-reference/model-apis-webhook\#get-started)  Get Started

### [​](https://novita.ai/docs/api-reference/model-apis-webhook\#enable-webhook-in-request)  Enable Webhook in Request

For the asynchronous V3 APIs that support webhooks, the webhook parameters are provided in the `extra.webhook` field. (For more details, please refer to the individual documentation pages for each API.) For example:

Copy

```
{
    "extra": {
        "webhook": {
            "url": "https://your-webhook-endpoint-url"
        }
        //...
    },
    // ...
}
```

When the task is finished, Novita AI will send the `ASYNC_TASK_RESULT` event to your webhook endpoint. For example:

Copy

```
// The webhook event content with API /v3/async/txt2image.
{
  "event_type": "ASYNC_TASK_RESULT",
  "payload": {
    "task": {
      "eta": 0,
      "progress_percent": 0,
      "reason": "",
      "status": "TASK_STATUS_SUCCEED",
      "task_id": "f6aec953-2e81-4e8b-938e-2ceab54d6df9",
      "task_type": "TXT_TO_IMG"
    },
    "extra": {
      "enable_nsfw_detection": false,
      "webhook": {
        "url": "https://your-webhook-endpoint-url"
      }
    },
    "images": [\
      {\
        "image_type": "jpeg",\
        "image_url": "https://faas-output-image.s3.ap-southeast-1.amazonaws.com/test_data/image_01.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASVPYCN6LRCW3SOUV%2F20240602%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240602T150041Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=f22b3a2f93587e8f7e80ba88842ddf7d80d6481bbec6f94eedd241bb15718629",\
        "image_url_ttl": "3600",\
        "nsfw_detection_result": null\
      }\
    ],
    "videos": [],
    "audios": []
  }
}
```

**The schema of the `payload` fields is exactly the same as the response from the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result).**

### [​](https://novita.ai/docs/api-reference/model-apis-webhook\#use-test-mode-to-test-your-integration)  Use Test Mode to Test Your Integration

You can test your integration without making actual API calls by enabling `Test Mode`. For example:

Copy

```
{
    "extra": {
        "webhook": {
            "url": "https://your-webhook-endpoint-url",
            "test_mode": {
                "enabled": true,
                // Set return_task_status to TASK_STATUS_SUCCEED to test the success response.
                // Set return_task_status to TASK_STATUS_FAILED to test the error response.
                "return_task_status": 'TASK_STATUS_SUCCEED'
            }
        },
        //...
    },
    // ...
}
```

Your webhook endpoint will receive **a simulated mock event**, which you can use to ensure that your integration works correctly.

### [​](https://novita.ai/docs/api-reference/model-apis-webhook\#retry-policy)  Retry Policy

Novita AI will retry up to five times if it fails to send the event to your webhook endpoint. This includes the following situations:

- The request to your endpoint times out (currently set to 5 seconds).
- Your endpoint returns a non-2xx status code.

## [​](https://novita.ai/docs/api-reference/model-apis-webhook\#best-practices)  Best Practices

1. Your webhook endpoint must quickly return a successful status code **2xx** before executing any complex logic that could cause a timeout.
2. After receiving a webhook event, filter out any events other than `ASYNC_TASK_RESULT` to continue with your logic.
3. Before releasing features that rely on the webhook event, use `Test Mode` to thoroughly test your logic.
4. Use HTTPS for your webhook endpoint.

Was this page helpful?

YesNo

[Retrieve file content](https://novita.ai/docs/api-reference/model-apis-llm-retrieve-file-content) [Get Model](https://novita.ai/docs/api-reference/model-apis-get-model)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.