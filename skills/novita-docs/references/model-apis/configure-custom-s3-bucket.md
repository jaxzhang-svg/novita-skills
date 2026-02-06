---
url: "https://novita.ai/docs/guides/model-apis-configure-custom-s3-bucket"
title: "Configure Custom AWS S3 Bucket - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/model-apis-configure-custom-s3-bucket#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image, Audio and Video

Configure Custom AWS S3 Bucket

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Configure S3 Bucket Policy](https://novita.ai/docs/guides/model-apis-configure-custom-s3-bucket#1-configure-s3-bucket-policy)
- [2\. Enable Custom Storage in V3 APIs](https://novita.ai/docs/guides/model-apis-configure-custom-s3-bucket#2-enable-custom-storage-in-v3-apis)

By default, Novita AI temporarily stores output results in our private S3 bucket and returns the results to the user through a temporary authorized S3 link.However, you can set up a **Custom S3 Bucket** to allow us to save the results in your own bucket. Please follow the steps below to enable this.

## [​](https://novita.ai/docs/guides/model-apis-configure-custom-s3-bucket\#1-configure-s3-bucket-policy)  1\. Configure S3 Bucket Policy

First, change your S3 Bucket Policy configuration to the following format (replace `${BucketName}` with your bucket name):

Copy

```
{
  "Version": "2012-10-17",
  "Statement": [\
    {\
      "Effect": "Allow",\
      "Principal": {\
        "CanonicalUser": "e98cde8d11ec7c03ac08688f1a933b08b0f0f7746b21c4f2e7b2c8202cc0532f"\
      },\
      "Action": [\
        "s3:PutObject",\
        "s3:PutObjectAcl"\
      ],\
      "Resource": "arn:aws:s3:::${BucketName}/*"\
    }\
  ]
}
```

## [​](https://novita.ai/docs/guides/model-apis-configure-custom-s3-bucket\#2-enable-custom-storage-in-v3-apis)  2\. Enable Custom Storage in V3 APIs

For V3 API endpoints, Novita AI provides the `custom_storage` parameter in the request body, allowing you to configure your custom S3 bucket for storing generated images.Here’s an example using the `txt2img` API endpoint:

Copy

```
curl --location 'https://api.novita.ai/v3/async/txt2img' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
  "extra": {
    "response_image_type": "jpeg",
    "custom_storage": {
      "aws_s3": {
        "region": "us-east-2",
        "bucket": "test_bucket",
        "path": "/"
      }
    }
  },
  "request": {
    "prompt": "a cute dog",
    "model_name": "realisticVisionV51_v51VAE_94301.safetensors",
    "negative_prompt": "",
    "width": 512,
    "height": 384,
    "image_num": 2,
    "steps": 20,
    "seed": 123,
    "clip_skip": 1,
    "sampler_name": "Euler a",
    "guidance_scale": 7.5
  }
}'
```

Was this page helpful?

YesNo

[How to subscribe to Dedicated Endpoints?](https://novita.ai/docs/guides/model-apis-dedicated-endpoints) [Upload Custom LoRA Models](https://novita.ai/docs/guides/model-apis-custom-model)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.