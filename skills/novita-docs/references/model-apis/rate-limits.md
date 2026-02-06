---
url: "https://novita.ai/docs/guides/model-apis-rate-limits"
title: "Rate limits - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/model-apis-rate-limits#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image, Audio and Video

Rate limits

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Understanding Rate Limits](https://novita.ai/docs/guides/model-apis-rate-limits#1-understanding-rate-limits)
- [2\. Rate Limiting Metrics](https://novita.ai/docs/guides/model-apis-rate-limits#2-rate-limiting-metrics)
- [3\. Default Rate Limits](https://novita.ai/docs/guides/model-apis-rate-limits#3-default-rate-limits)
- [IPM](https://novita.ai/docs/guides/model-apis-rate-limits#ipm)
- [RPM](https://novita.ai/docs/guides/model-apis-rate-limits#rpm)
- [4\. Handling Rate Limits](https://novita.ai/docs/guides/model-apis-rate-limits#4-handling-rate-limits)
- [How to Monitor Rate Limits?](https://novita.ai/docs/guides/model-apis-rate-limits#how-to-monitor-rate-limits)
- [Best Practices](https://novita.ai/docs/guides/model-apis-rate-limits#best-practices)
- [When You Hit Rate Limits](https://novita.ai/docs/guides/model-apis-rate-limits#when-you-hit-rate-limits)

## [​](https://novita.ai/docs/guides/model-apis-rate-limits\#1-understanding-rate-limits)  1\. Understanding Rate Limits

Rate limiting refers to the rules that govern how frequently a user’s API may access our platform services within a given time window. Its goals are:

- **Prevent API abuse and misuse:** By setting an upper bound on request frequency, we limit abnormal or unintended traffic.
- **Ensure fair resource allocation:** We prevent a small number of users from monopolizing system resources, so everyone can access the service on equal terms.
- **Maintain API performance and reliability:** By smoothing out traffic spikes, we stabilize response times and reduce failure rates due to overload, improving overall service quality.
- **Protect system stability:** Rate limits help absorb sudden bursts of traffic, preventing high-concurrency spikes from overwhelming our infrastructure.

## [​](https://novita.ai/docs/guides/model-apis-rate-limits\#2-rate-limiting-metrics)  2\. Rate Limiting Metrics

For our image and video models, we use two primary rate-limiting metrics:

- **IPM (Images Per Minute):** The number of images an image model is allowed to generate per minute.
- **RPM (Requests Per Minute):** The number of API requests a video model is allowed to handle per minute.

## [​](https://novita.ai/docs/guides/model-apis-rate-limits\#3-default-rate-limits)  3\. Default Rate Limits

For different models, our platform applies differentiated rate-limiting strategies based on each model’s computational resource consumption.

### [​](https://novita.ai/docs/guides/model-apis-rate-limits\#ipm)  **IPM**

The IPM (Images Per Minute) limit controls the number of images that can be generated per minute. The default IPM values for each model are listed in the table below.

| Resource/Service | Model API | User Default Settings |
| --- | --- | --- |
| Text to Image | `txt2img_v3` | 20 |
| Image to Image | `img2img_v3` | 10 |
| Remove Background | `remove_background` | 10 |
| Replace Background | `replace_background` | 10 |
| Remove Text | `remove_text` | 10 |
| Inpainting | `inpainting` | 10 |
| Cleanup | `cleanup` | 10 |
| Merge Face | `merge_face` | 10 |
| FLUX.1 \[schnell\] Text to Image | `flux-1-schnell` | 10 |
| Upscale | `upscale_v3` | 20 |

### [​](https://novita.ai/docs/guides/model-apis-rate-limits\#rpm)  **RPM**

The RPM (Requests Per Minute) limit controls the number of API requests allowed per minute. The default RPM values for each model are provided in the table below.

| Resource/Service | Model API | User Default Settings |
| --- | --- | --- |
| Video Merge Face | `video_merge_face` | 10 |
| Text to Video | `txt2video` | 2 |
| Image to Video | `img2video` | 2 |
| Wan 2.1 Text to Video | `wan_txt_to_video` | 20 |
| Wan 2.1 Image to Video | `wan i2v` | 20 |
| Hunyuan Video Fast | `hunyuan_video_fast` | 20 |
| KLING V1.6 Image to Video | `Kling i2v` | 20 |
| KLING V1.6 Text to Video | `Kling t2v` | 20 |
| Minimax Video-01 | `Minimax` | 20 |

## [​](https://novita.ai/docs/guides/model-apis-rate-limits\#4-handling-rate-limits)  4\. Handling Rate Limits

### [​](https://novita.ai/docs/guides/model-apis-rate-limits\#how-to-monitor-rate-limits)  How to Monitor Rate Limits?

If your API requests exceed the allowed rate, the API will return:

- **HTTP Status Code:** 429 Too Many Requests
- **Response Body:** A message indicating that the rate limit has been exceeded.

### [​](https://novita.ai/docs/guides/model-apis-rate-limits\#best-practices)  Best Practices

**To avoid triggering rate limits, you can:**

- **Implement client-side request throttling:** Respect the platform’s rate limits by controlling your application’s request rate, ensuring you don’t send too many calls in a short period.
- **Use exponential backoff on retries:** When you receive a rate-limit response (e.g., HTTP 429), wait progressively longer between retry attempts instead of retrying immediately, reducing load on the service.
- **Monitor your API usage:** Continuously track and log your request counts, frequencies, and any error responses so you can adjust your usage patterns proactively.

### [​](https://novita.ai/docs/guides/model-apis-rate-limits\#when-you-hit-rate-limits)  When You Hit Rate Limits

**If you receive an HTTP 429 (“Too Many Requests”) response, you can:**

- **Retry later:** Wait a short period before sending your request again.
- **Optimize your requests:** Reduce the frequency of calls to stay within the platform’s rate limits.
- **Request a higher rate limit:** If you require a higher rate limit, please fill out the contact form at the [Quotas&Limits](https://novita.ai/quota-limits/image) to get in touch with us.

Was this page helpful?

YesNo

[API V2 to V3 Migration Guide](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration) [Claude Code Integration Guide](https://novita.ai/docs/guides/claude-code)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.