---
url: "https://novita.ai/docs/api-reference/model-apis-inpainting"
title: "Inpainting - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-inpainting#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image Editor

Inpainting

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Inpainting

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/inpainting \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "extra": {
    "response_image_type": "<string>",
    "webhook": {
      "url": "<string>",
      "test_mode": {
        "enabled": true,
        "return_task_status": "<string>"
      }
    },
    "custom_storage": {
      "aws_s3": {
        "region": "<string>",
        "bucket": "<string>",
        "path": "<string>",
        "save_to_path_directly": true
      }
    },
    "enterprise_plan": {
      "enabled": true
    },
    "enable_nsfw_detection": true,
    "nsfw_detection_level": 123
  },
  "request": {
    "model_name": "<string>",
    "image_base64": "<string>",
    "mask_image_base64": "<string>",
    "prompt": "<string>",
    "image_num": 123,
    "steps": 123,
    "guidance_scale": 123,
    "sampler_name": "<string>",
    "mask_blur": 123,
    "negative_prompt": "<string>",
    "sd_vae": "<string>",
    "seed": 123,
    "loras": [\
      {\
        "model_name": "<string>",\
        "strength": 123\
      }\
    ],
    "embeddings": [\
      {\
        "model_name": "<string>"\
      }\
    ],
    "clip_skip": 123,
    "strength": {},
    "inpainting_full_res": 123,
    "inpainting_full_res_padding": 123,
    "inpainting_mask_invert": 123,
    "initial_noise_multiplier": 123
  }
}
'
```

200

Copy

```
{
  "task_id": "<string>"
}
```

POST

https://api.novita.ai

/

v3

/

async

/

inpainting

Try it

Inpainting

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/inpainting \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "extra": {
    "response_image_type": "<string>",
    "webhook": {
      "url": "<string>",
      "test_mode": {
        "enabled": true,
        "return_task_status": "<string>"
      }
    },
    "custom_storage": {
      "aws_s3": {
        "region": "<string>",
        "bucket": "<string>",
        "path": "<string>",
        "save_to_path_directly": true
      }
    },
    "enterprise_plan": {
      "enabled": true
    },
    "enable_nsfw_detection": true,
    "nsfw_detection_level": 123
  },
  "request": {
    "model_name": "<string>",
    "image_base64": "<string>",
    "mask_image_base64": "<string>",
    "prompt": "<string>",
    "image_num": 123,
    "steps": 123,
    "guidance_scale": 123,
    "sampler_name": "<string>",
    "mask_blur": 123,
    "negative_prompt": "<string>",
    "sd_vae": "<string>",
    "seed": 123,
    "loras": [\
      {\
        "model_name": "<string>",\
        "strength": 123\
      }\
    ],
    "embeddings": [\
      {\
        "model_name": "<string>"\
      }\
    ],
    "clip_skip": 123,
    "strength": {},
    "inpainting_full_res": 123,
    "inpainting_full_res_padding": 123,
    "inpainting_mask_invert": 123,
    "initial_noise_multiplier": 123
  }
}
'
```

200

Copy

```
{
  "task_id": "<string>"
}
```

**Inpainting is a conservation process in which damaged, deteriorated, or missing parts of an artwork are filled in to present a complete image.**

> This is an **asynchronous** API; only the **task\_id** will be returned. You should use the **task\_id** to request the [**Task Result API**](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the image generation results.

## [​](https://novita.ai/docs/api-reference/model-apis-inpainting\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-inpainting\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-extra)

extra

object

Optional extra parameters for the request.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-response-image-type)

response\_image\_type

string

The returned image type. Default is png.

Enum: `png`, `webp`, `jpeg`

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-webhook)

webhook

object

Webhook settings. More details can be found at [Webhook Documentation](https://novita.ai/docs/api-reference/model-apis-webhook).

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-url)

url

string

required

The URL of the webhook endpoint. Novita AI will send the task generated outputs to your specified webhook endpoint.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-test-mode)

test\_mode

object

By specifying Test Mode, a mock event will be sent to the webhook endpoint.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-enabled)

enabled

boolean

required

Set to true to enable Test Mode, or false to disable it. The default is false.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-return-task-status)

return\_task\_status

string

required

Control the data content of the mock event. When set to TASK\_STATUS\_SUCCEED, you’ll receive a normal response; when set to TASK\_STATUS\_FAILED, you’ll receive an error response.

Enum: `TASK_STATUS_SUCCEED`, `TASK_STATUS_FAILED`

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-custom-storage)

custom\_storage

object

Customer storage settings for saving the generated outputs.

By default, the generated outputs will be saved to Novita AI Storage temporarily and privately.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-aws-s3)

aws\_s3

object

AWS S3 Bucket settings.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-region)

region

string

required

AWS S3 regions, [more details](https://docs.aws.amazon.com/general/latest/gr/rande.html).

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-bucket)

bucket

string

required

AWS S3 bucket name.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-path)

path

string

required

AWS S3 bucket path for saving generated outputs.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-save-to-path-directly)

save\_to\_path\_directly

boolean

Set this option to True to save the generated outputs directly to the specified path without creating any additional directory hierarchy.

If set to False, Novita AI will create an additional directory in the path to save the generated outputs. The default is False.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-enterprise-plan)

enterprise\_plan

object

Dedicated Endpoints settings, which only take effect for users who have already subscribed to the [Dedicated Endpoints Documentation](https://novita.ai/docs/guides/model-apis-dedicated-endpoints).

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-enabled-1)

enabled

boolean

Set to true to schedule this task to use your Dedicated Endpoints’s dedicated resources. Default is false.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-enable-nsfw-detection)

enable\_nsfw\_detection

boolean

When set to true, NSFW detection will be enabled, incurring an additional cost of $0.0015 for each generated image.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-nsfw-detection-level)

nsfw\_detection\_level

integer

0: Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols.

1: Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols; Non-Explicit Nudity, Obstructed Intimate Parts, Kissing on the Lips.

2: Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols; Non-Explicit Nudity, Obstructed Intimate Parts, Kissing on the Lips; Female Swimwear or Underwear, Male Swimwear or Underwear.

Enum: `0`, `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-request)

request

object

required

Hide properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-model-name)

model\_name

string

required

This parameter specifies the name of the model checkpoint. Retrieve the corresponding sd\_name value by invoking the [Query Model](https://novita.ai/api-reference/model-apis-get-model) API with filter.types=checkpoint&filter.is\_inpainting=true as the query parameter.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-image-base64)

image\_base64

string

required

The base64 representation of the original image, with a maximum resolution of 16 megapixels and a maximum file size of 30 Mb.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-mask-image-base64)

mask\_image\_base64

string

required

The base64 representation of the mask image, with a maximum resolution of 16 megapixels and a maximum file size of 30 Mb. The mask image should have the same resolution as the original image.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-prompt)

prompt

string

required

Text input required to guide the image generation, divided by `,` . Range \[1, 1024\].

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-image-num)

image\_num

integer

required

Images numbers generated in one single generation. Range \[1, 8\].

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-steps)

steps

integer

required

The number of denoising steps. More steps usually can produce higher quality images, but take more time to generate, Range \[1, 100\].

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-guidance-scale)

guidance\_scale

number

required

This setting says how close the Stable Diffusion will listen to your prompt, higer guidance forces the model to better follow the prompt, but result in lower quality output. Range \[1, 30\].

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-sampler-name)

sampler\_name

string

required

This parameter determines the denoising algorithm employed during the sampling phase of Stable Diffusion. Each option represents a distinct method by which the model incrementally generates new images. These algorithms differ significantly in their processing speed, output quality, and the specific characteristics of the images they generate, allowing users to tailor the image generation process to meet precise requirements. Get reference at [A brief introduction to Sampler](https://novita.ai/docs/guides/model-apis-sampler).

Enum: `Euler a`, `Euler`, `LMS`, `Heun`, `DPM2`, `DPM2 a`, `DPM++ 2S a`, `DPM++ 2M`, `DPM++ SDE`, `DPM fast`, `DPM adaptive`, `LMS Karras`, `DPM2 Karras`, `DPM2 a Karras`, `DPM++ 2S a Karras`, `DPM++ 2M Karras`, `DPM++ SDE Karras`, `DDIM`, `PLMS`, `UniPC`

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-mask-blur)

mask\_blur

integer

Defines the degree of border blurring for the filled area. A lower value results in a sharper border, maintaining clear delineation between masked and unmasked areas. Conversely, a higher value increases the blur effect, creating a smoother, more blended transition at the borders. This adjustment allows for greater control over the visual integration of the mask with the original image. Range \[0, 64\].

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-negative-prompt)

negative\_prompt

string

Text input that specifies what to exclude from the generated images, divided by `,` . Range \[1, 1024\].

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-sd-vae)

sd\_vae

string

VAE (Variational Auto Encoder). The sd\_vae can be accessed in the API /v3/models with query parameters type=vae, such as sd\_name: customVAE.safetensors. Get reference at [A brief introduction to VAE](https://novita.ai/docs/guides/model-apis-vae).

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-seed)

seed

integer

A seed is a number from which Stable Diffusion generates noise, which, makes generation deterministic. Using the same seed and set of parameters will produce identical image each time, minimum -1. Defaults to -1.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-loras)

loras

object\[\]

LoRA is a fast and lightweight training method that inserts and trains a significantly smaller number of parameters instead of all the model parameters. Currently supports up to 5 LoRAs.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-model-name-1)

model\_name

string

required

Name of lora, retrieve the corresponding sd\_name\_in\_api value by invoking the [Get Model API](https://novita.ai/api-reference/model-apis-get-model) endpoint with filter.types=lora as the query parameter.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-strength)

strength

number

required

The strength value of lora. The larger the value, the more biased the effect is towards lora, Range \[0, 1\]

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-embeddings)

embeddings

object\[\]

Textual Inversion is a training method for personalizing models by learning new text embeddings from a few example images, currently supports up to 5 embeddings.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-model-name-2)

model\_name

string

required

Name of textual Inversion model, you can call the [Get Model API](https://novita.ai/api-reference/model-apis-get-model) endpoint with parameter filter.types=textualinversion to retrieve the sd\_name\_in\_api field as the model\_name.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-clip-skip)

clip\_skip

integer

This parameter indicates the number of layers to stop from the bottom during optimization, so clip\_skip on 2 would mean, that in SD1.x model where the CLIP has 12 layers, you would stop at 10th layer, Range \[1, 12\], get reference at [A brief introduction to Clip Skip](https://novita.ai/docs/guides/model-apis-clip-skip).

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-strength-1)

strength

number(float)¦null

Conceptually, the `strength` indicates the degree to which the reference `image_base64` should be transformed. Must be between 0 and 1. `image_base64` will be used as a starting point, with increasing levels of noise added as the strength value increases. The number of denoising steps depends on the amount of noise initially added. When `strength` is 1, added noise will be maximum and the denoising process will run for the full number of iterations specified in `steps`. A value of 1, therefore, essentially ignores `image_base64`.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-inpainting-full-res)

inpainting\_full\_res

integer

Specifies whether to apply or protect the filled area. When set to 0, the inpainting process considers the entire image, which may result in the mask area failing to present the correct details, but the mask area will look more natural or blend better with the whole image. When set to 1, only the masked area is inpainted, ignoring the unmasked areas, which can produce more detailed and natural results within the mask but may appear strange or incompatible with the original background. Default is 0.

Enum: `0`, `1`

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-inpainting-full-res-padding)

inpainting\_full\_res\_padding

integer

This setting controls how many additional pixels can be used as a reference point for only masked mode. You can increase this amount if you are having trouble producing a proper image. This is a numerical value for how much margin to set when Only masked is selected. The downside of increasing this value is that it may decrease the quality of the output. Guidance: [https://civitai.com/articles/161/basic-inpainting-guide](https://civitai.com/articles/161/basic-inpainting-guide), Range \[0, 256\]. Default is 8.

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-inpainting-mask-invert)

inpainting\_mask\_invert

integer

Specifies whether to invert the mask. Set to 1 to invert the mask. Default is 0.

Enum: `0`, `1`

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-initial-noise-multiplier)

initial\_noise\_multiplier

number

Noise multiplier for img2img settings. This scaling factor is applied to the random latent tensor for img2img. Lowering the value of this multiplier reduces the amount of noise introduced into the image transformation process, which can help reduce flickering or instability in the output image. Range \[0, 1.5\]. Default is 0.5.

## [​](https://novita.ai/docs/api-reference/model-apis-inpainting\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-inpainting#param-task-id)

task\_id

string

Use the task\_id to request the [Task Result API](https://novita.ai/docs/api-reference/model-apis-task-result) to retrieve the generated outputs.

## [​](https://novita.ai/docs/api-reference/model-apis-inpainting\#example)  Example

### [​](https://novita.ai/docs/api-reference/model-apis-inpainting\#i-have-no-mask-images-how-do-i-generate-mask-parameters-in-the-body)  I have no `mask` images. How do I generate `mask` parameters in the body?

You can use our playground to get the mask base64 information. Please be aware that mask images should have the same resolution as the input images. Guidance can be found here: [Click Here](https://novita.ai/playground#inpainting)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/inpainting-01.jpg)

### [​](https://novita.ai/docs/api-reference/model-apis-inpainting\#i-already-have-mask-images-how-do-i-convert-mask-images-to-base64)  I already have mask images. How do I convert `mask` images to base64?

You can use the following code to convert mask images to base64.

Copy

```
import base64
# mask files path
filename_input = "mask_edited.png"

# read mask file
with open(filename_input, "rb") as f:
    base64_pic = base64.b64encode(f.read()).decode("utf-8")

# write mask file
with open("input.txt", "w") as f:
    f.write(base64_pic)
```

### [​](https://novita.ai/docs/api-reference/model-apis-inpainting\#start-requesting-inpainting)  Start requesting inpainting.

Please set the **`Content-Type`** header to **`application/json`** in your HTTP request to indicate that you are sending JSON data. Currently, **only JSON format is supported**.`"model_name":"realisticVisionV40_v40VAE-inpainting_81543.safetensors"` in body represent inpainting models, which, can be accessed in API /v3/model with `sd_name` like %inpainting%.`Request:`

Copy

```
curl --location --request POST 'http://api.novita.ai/v3/async/inpainting' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API Key}}' \
--data-raw '{
    "extra": {
        "response_image_type": "jpeg"
    },
    "request": {
        "model_name": "realisticVisionV40_v40VAE-inpainting_81543.safetensors",
        "prompt": "Leonardo DiCaprio",
        "negative_prompt": "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime), text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, BadDream, UnrealisticDream",
        "image_num": 1,
        "steps": 25,
        "seed": -1,
        "clip_skip": 1,
        "guidance_scale": 7.5,
        "sampler_name": "Euler a",
        "mask_blur": 1,
        "inpainting_full_res": 1,
        "inpainting_full_res_padding": 32,
        "inpainting_mask_invert": 0,
        "initial_noise_multiplier": 1,
        "strength": 0.85,
        "image_base64": "{{base64 encoded image}}",
        "mask_image_base64": "{{base64 encoded mask image}}"
    }
}'
```

`Response:`

Copy

`````
{
    "code": 0,
    "msg": "",
    "data": {
        "task_id": "270f4fba-2cb0-4a56-8b82-xxxx"
    }
}
````"model_name":"realisticVisionV40_v40VAE-inpainting_81543.safetensors"` in body represent inpainting models, which, can be accessed in API /v3/model with `sd_name` like %inpainting%.

`Request:`
```bash
curl --location --request POST 'http://api.novita.ai/v3/async/inpainting' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API Key}}' \
--data-raw '{
    "extra": {
        "response_image_type": "jpeg"
    },
    "request": {
        "model_name": "realisticVisionV40_v40VAE-inpainting_81543.safetensors",
        "prompt": "Leonardo DiCaprio",
        "negative_prompt": "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime), text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, BadDream, UnrealisticDream",
        "image_num": 1,
        "steps": 25,
        "seed": -1,
        "clip_skip": 1,
        "guidance_scale": 7.5,
        "sampler_name": "Euler a",
        "mask_blur": 1,
        "inpainting_full_res": 1,
        "inpainting_full_res_padding": 32,
        "inpainting_mask_invert": 0,
        "initial_noise_multiplier": 1,
        "strength": 0.85,
        "image_base64": "{{base64 encoded image}}",
        "mask_image_base64": "{{base64 encoded mask image}}"
    }
}'
`````

`Response:`

Copy

```
{
    "code": 0,
    "msg": "",
    "data": {
        "task_id": "270f4fba-2cb0-4a56-8b82-xxxx"
    }
}
```

Was this page helpful?

YesNo

[Replace Background](https://novita.ai/docs/api-reference/model-apis-replace-background) [Remove Text](https://novita.ai/docs/api-reference/model-apis-remove-text)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/inpainting-01.jpg)