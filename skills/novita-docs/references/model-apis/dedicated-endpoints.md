---
url: "https://novita.ai/docs/guides/model-apis-dedicated-endpoints"
title: "How to subscribe to Dedicated Endpoints? - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/model-apis-dedicated-endpoints#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image, Audio and Video

How to subscribe to Dedicated Endpoints?

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Applying for Dedicated Endpoints access.](https://novita.ai/docs/guides/model-apis-dedicated-endpoints#1-applying-for-dedicated-endpoints-access)
- [2\. Starting a Dedicated Endpoints subscription.](https://novita.ai/docs/guides/model-apis-dedicated-endpoints#2-starting-a-dedicated-endpoints-subscription)
- [3\. Waiting Dedicated Endpoints to be Actived.](https://novita.ai/docs/guides/model-apis-dedicated-endpoints#3-waiting-dedicated-endpoints-to-be-actived)
- [4\. Make a request with Dedicated Endpoints resources.](https://novita.ai/docs/guides/model-apis-dedicated-endpoints#4-make-a-request-with-dedicated-endpoints-resources)

**Generally, subscribing to Dedicated Endpoints involves the following steps.**

- Applying for **Dedicated Endpoints** access;
- Starting a **Dedicated Endpoints** subscription;
- Waiting for the **Dedicated Endpoints** to be `Actived`.

## [​](https://novita.ai/docs/guides/model-apis-dedicated-endpoints\#1-applying-for-dedicated-endpoints-access)  1\. Applying for Dedicated Endpoints access.

Please skip this step if you already have access.

Go to the [Dedicated Endpoint Pricing Page](https://novita.ai/pricing?utm_source=getstarted#dedicated_endpoints).Choose the plan you want to subscribe to, click **“Contact Sales”**, and fill out the application form. After the Novita AI team reviews your request, you will receive a notification from us confirming that your request has been approved.

## [​](https://novita.ai/docs/guides/model-apis-dedicated-endpoints\#2-starting-a-dedicated-endpoints-subscription)  2\. Starting a Dedicated Endpoints subscription.

Once the request is approved, you can subscribe the **Dedicated Endpoints** on the [Pricing Page](https://novita.ai/pricing?utm_source=getstarted#dedicated_endpoints).

- You need to add a `Payment Method` if you haven’t already done so.
- Don’t forget to input the `Coupon Code` if you have one.

The **Dedicated Endpoints** will be created after the payment is completed.

## [​](https://novita.ai/docs/guides/model-apis-dedicated-endpoints\#3-waiting-dedicated-endpoints-to-be-actived)  3\. Waiting Dedicated Endpoints to be `Actived`.

Once you’ve subscribed the **Dedicated Endpoints**, they will enter the `Deploying` status, and you can access them from the [Dedicated Endpoints Setting Page](https://novita.ai/models-console/dedicated-endpoints).Upon activation of the **Dedicated Endpoints**, you’ll receive an email notification confirming that the service is now `Actived` and ready to use.The billing cycle for **Dedicated Endpoints** is monthly and begins immediately upon the service entering the `Actived` status. And the next monthly billing will be automatically deducted from your credit account.

## [​](https://novita.ai/docs/guides/model-apis-dedicated-endpoints\#4-make-a-request-with-dedicated-endpoints-resources)  4\. Make a request with Dedicated Endpoints resources.

For **Dedicated Endpoints**, we have added a request body parameter `extra.enterprise_plan` to allow you to enable the **Dedicated Endpoints**. Please refer to the code below.

Copy

```
curl --location 'https://api.novita.ai/v3/async/txt2img' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
  "extra": {
    "response_image_type": "jpeg",
    "enterprise_plan": {
      "enabled": true
    }
  },
  "request": {
    "model_name": "sdxlUnstableDiffusers_v11_216694.safetensors",
    "prompt": "Luxury suite design, Spacious suite area, Luxuriously plush large bed, Refined office desk, Carefully selected furniture for the luxurious suite, High-end and opulent decor, Private office and lounge area, Comfortably luxurious office chair, Amenities for luxury travelers, Premium bedding and linens, Uniquely designed lighting fixtures, Luxurious suite curtain design, Private work corner, Luxurious amenities, Lavish lounge area, Sophisticated indoor plant, decorations, Exquisite luxury design, Exclusive services for the luxury suite, Luxury color scheme. Exclusive furniture for the luxury suite, a bedroom with a large bed and a desk",
    "negative_prompt": "(badhandv4:1.2),(worst quality:2),(low quality:2),(normal quality:2),lowres,bad anatomy,bad hands,((monochrome)),((grayscale)) watermark,moles, easynegative ng_deepnegative_v1_75t, (oversized head:2), (big head:2), (deformed face:1.5),( blurry face:2), bad eyes, irregular eyes, asymmetric eyes, ugly, teeth, (navel:0.9), artefact, jpg artefact, blurry face, blurry, blurred, pixelated, bad eyes, crossed eyes, blurry eyes",
    "width": 512,
    "height": 512,
    "image_num": 1,
    "steps": 20,
    "seed": 123,
    "clip_skip": 1,
    "guidance_scale": 7.5,
    "sampler_name": "Euler a"
  }
}'
```

If you encounter any questions, [please reach out to us on Discord](https://discord.gg/YyPRAzwp7P).

Was this page helpful?

YesNo

[SDKs for Model APIs](https://novita.ai/docs/guides/model-apis-sdks) [Configure Custom AWS S3 Bucket](https://novita.ai/docs/guides/model-apis-configure-custom-s3-bucket)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.