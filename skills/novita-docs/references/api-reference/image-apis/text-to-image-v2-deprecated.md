---
url: "https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated"
title: "Text to Image V2 - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Deprecated

Text to Image V2

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Text to Image V2

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v2/txt2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "extra": {
    "enable_nsfw_detection": true,
    "nsfw_detection_level": 123,
    "enable_progress_info": {},
    "response_image_type": "<string>"
  },
  "prompt": "<string>",
  "negative_prompt": "<string>",
  "sampler_name": "<string>",
  "batch_size": 123,
  "n_iter": 123,
  "steps": 123,
  "cfg_scale": 123,
  "seed": 123,
  "height": 123,
  "width": 123,
  "model_name": "<string>",
  "restore_faces": true,
  "restore_faces_model": null,
  "sd_vae": {},
  "clip_skip": 123,
  "enable_hr": {},
  "hr_upscaler": {},
  "hr_scale": {},
  "hr_resize_x": {},
  "hr_resize_y": {},
  "img_expire_ttl": {},
  "sd_refiner": {
    "checkpoint": "<string>",
    "switch_at": 123
  },
  "controlnet_units": {
    "model": "<string>",
    "weight": {},
    "input_image": "<string>",
    "module": "<string>",
    "control_mode": {},
    "mask": {},
    "resize_mode": {},
    "processor_res": 123,
    "threshold_a": 123,
    "threshold_b": 123,
    "guidance_start": 123,
    "guidance_end": 123,
    "pixel_perfect": true
  }
}
'
```

200

Copy

```
{
  "code": 123,
  "msg": "<string>",
  "data": {
    "task_id": "<string>",
    "warn": "<string>"
  }
}
```

POST

https://api.novita.ai

/

v2

/

txt2img

Try it

Text to Image V2

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v2/txt2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: application/json' \
  --data '
{
  "extra": {
    "enable_nsfw_detection": true,
    "nsfw_detection_level": 123,
    "enable_progress_info": {},
    "response_image_type": "<string>"
  },
  "prompt": "<string>",
  "negative_prompt": "<string>",
  "sampler_name": "<string>",
  "batch_size": 123,
  "n_iter": 123,
  "steps": 123,
  "cfg_scale": 123,
  "seed": 123,
  "height": 123,
  "width": 123,
  "model_name": "<string>",
  "restore_faces": true,
  "restore_faces_model": null,
  "sd_vae": {},
  "clip_skip": 123,
  "enable_hr": {},
  "hr_upscaler": {},
  "hr_scale": {},
  "hr_resize_x": {},
  "hr_resize_y": {},
  "img_expire_ttl": {},
  "sd_refiner": {
    "checkpoint": "<string>",
    "switch_at": 123
  },
  "controlnet_units": {
    "model": "<string>",
    "weight": {},
    "input_image": "<string>",
    "module": "<string>",
    "control_mode": {},
    "mask": {},
    "resize_mode": {},
    "processor_res": 123,
    "threshold_a": 123,
    "threshold_b": 123,
    "guidance_start": 123,
    "guidance_end": 123,
    "pixel_perfect": true
  }
}
'
```

200

Copy

```
{
  "code": 123,
  "msg": "<string>",
  "data": {
    "task_id": "<string>",
    "warn": "<string>"
  }
}
```

**The Text-to-Image V2 API is deprecated and will be removed in the future. Please migrate to [Text-to-Image V3](https://novita.ai/docs/api-reference/model-apis-txt2img).**

## [​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated\#post-text-to-image-v2)  POST Text to Image V2

The text-to-image endpoint will return only a `task_id`. You should use the `task_id` to call the /v2/progress API endpoint to retrieve the image generation results. We will gradually phase out the V2 endpoints. It is recommended to use the V3 endpoints to generate images.

## [​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-authorization)

Authorization

string

required

## [​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-extra)

extra

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-enable-nsfw-detection)

enable\_nsfw\_detection

boolean

When set to true, NSFW detection will be enabled, incurring an additional cost of $0.0015 for each generated image.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-nsfw-detection-level)

nsfw\_detection\_level

integer

\\*\\*\\* 0 - Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols.\*\*\* 1 - Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols; Non-Explicit Nudity, Obstructed Intimate Parts, Kissing on the Lips.\*\*\* 2 - Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols; Non-Explicit Nudity, Obstructed Intimate Parts, Kissing on the Lips; Female Swimwear or Underwear, Male Swimwear or Underwear.

Enum: `0`, `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-enable-progress-info)

enable\_progress\_info

boolean¦null

You will receive empty preview images if `enable_progress_info` is set to false.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-response-image-type)

response\_image\_type

string

The format of the returned images; default: png

Enum: `png`, `jpeg`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-prompt)

prompt

string

required

Positive prompt words, separated by `,`. If you want to use LoRA, you can call the `/v3/model` endpoint with the parameter `filter.types=lora` to retrieve the `sd_name_in_api` field as the `model_name`. Remember that the format for LoRA models is `<lora:$sd_name:$weight>`.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-negative-prompt)

negative\_prompt

string

required

Negative prompt words, separated by `,`.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-sampler-name)

sampler\_name

string

required

This denoising process is called sampling because Stable Diffusion generates a new sample image at each step.

Enum: `DPM++ 2M Karras`, `DPM++ SDE Karras`, `DPM++ 2M SDE Exponential`, `DPM++ 2M SDE Karras`, `Euler a`, `Euler`, `LMS`, `Heun`, `DPM2`, `DPM2 a`, `DPM++ 2S a`, `DPM++ 2M`, `DPM++ SDE`, `DPM++ 2M SDE`, `DPM++ 2M SDE Heun`, `DPM++ 2M SDE Heun Karras`, `DPM++ 2M SDE Heun Exponential`, `DPM++ 3M SDE`, `DPM++ 3M SDE Karras`, `DPM++ 3M SDE Exponential`, `DPM fast`, `DPM adaptive`, `LMS Karras`, `DPM2 Karras`, `DPM2 a Karras`, `DPM++ 2S a Karras`, `Restart`, `DDIM`, `PLMS`, `UniPC`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-batch-size)

batch\_size

integer

required

The number of images generated in one single generation. Range: \[0, 8\]

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-n-iter)

n\_iter

integer

required

The number of generations. Range: \[0, 8\]

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-steps)

steps

integer

required

Think of steps as iterations in the image creation process. Range: (0, 50\]

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-cfg-scale)

cfg\_scale

integer

required

This setting determines how closely Stable Diffusion will adhere to your prompt. Range: (0, 30\]

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-seed)

seed

integer

required

A seed is a number from which Stable Diffusion generates noise.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-height)

height

integer

required

Height of the image. Range: (0, 2048\]

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-width)

width

integer

required

Width of the image. Range: (0, 2048\]

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-model-name)

model\_name

string

required

Name of the Stable Diffusion model. You can call the `/v3/model` endpoint with the parameter `filter.types=checkpoint` to retrieve the `sd_name_in_api` field as the `model_name`.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-restore-faces)

restore\_faces

boolean

required

Enable the Stable Diffusion face restoration plugin.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-restore-faces-model)

restore\_faces\_model

null

required

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-sd-vae)

sd\_vae

string¦null

VAE (Variational Auto Encoder). `sd_vae` can be accessed in the API /v3/model with query parameters `filter.types=vae` to retrieve the `sd_name` field as the `sd_vae`.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-clip-skip)

clip\_skip

integer

This parameter indicates the number of layers to stop from the bottom during optimization, so clip\_skip on 2 would mean, that in SD1.x model where the CLIP has 12 layers, you would stop at 10th layer.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-enable-hr)

enable\_hr

boolean¦null

Hires.fix function switch.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-hr-upscaler)

hr\_upscaler

string¦null

Upscalers model names. AI upscalers are models trained with massive amounts of data.

Enum: `Latent`, `ESRGAN_4x`, `R-ESRGAN 4x+`, `R-ESRGAN 4x+ Anime6B`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-hr-scale)

hr\_scale

number¦null

The magnification factor of the image, if params hr\_resize\_x and hr\_resize\_y are set, this parameter will be ignored.

Enum: `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-hr-resize-x)

hr\_resize\_x

integer¦null

The target image width, the maximum image size is 2048, only take effect when parameters hr\_scale=1.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-hr-resize-y)

hr\_resize\_y

integer¦null

The target image hight, the maximum image size is 2048, only take effect when parameters hr\_scale=1.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-img-expire-ttl)

img\_expire\_ttl

integer¦null

Image storage time (seconds). Range \[0, 604800\]

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-sd-refiner)

sd\_refiner

object¦null

Refiner infos to enhances the image details.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-checkpoint)

checkpoint

string

required

Refiner checkpoint name. Currently only `sd_xl_refiner_1.0.safetensors` supported.

Enum: `sd_xl_refiner_1.0.safetensors`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-switch-at)

switch\_at

number

required

weight of refiner, from 0 to 1.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-controlnet-units)

controlnet\_units

object\[\]¦null

ControlNet.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-model)

model

string

required

Model to use on the image passed to this unit before using it for conditioning. \*\*\*Controlnets for SD 1.5: control\_v11e\_sd15\_ip2p, control\_v11e\_sd15\_shuffle, control\_v11f1e\_sd15\_tile, control\_v11f1p\_sd15\_depth, control\_v11p\_sd15\_canny, control\_v11p\_sd15\_inpaint, control\_v11p\_sd15\_lineart, control\_v11p\_sd15\_mlsd, control\_v11p\_sd15\_normalbae, control\_v11p\_sd15\_openpose, control\_v11p\_sd15\_scribble, control\_v11p\_sd15\_seg, control\_v11p\_sd15\_softedge, control\_v11p\_sd15s2\_lineart\_anime, ip-adapter-plus-face\_sd15, ip-adapter\_sd15\_plus, ip-adapter\_sd15; \*\*\*Controlnets for SDXL: t2i-adapter\_diffusers\_xl\_canny, t2i-adapter\_diffusers\_xl\_depth\_midas, t2i-adapter\_diffusers\_xl\_depth\_zoe, t2i-adapter\_diffusers\_xl\_lineart, t2i-adapter\_diffusers\_xl\_openpose, t2i-adapter\_diffusers\_xl\_sketch, t2i-adapter\_xl\_canny, t2i-adapter\_xl\_openpose, t2i-adapter\_xl\_sketch, ip-adapter\_xl

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-weight)

weight

number¦null

required

weight of this unit. defaults to 1

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-input-image)

input\_image

string

required

base64 of input image

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-module)

module

string

required

preprocessor to use on the image passed to this unit before using it for conditioning.

Enum: `none`, `canny`, `depth`, `depth_leres`, `depth_leres++`, `hed`, `hed_safe`, `mediapipe_face`, `mlsd`, `normal_map`, `openpose`, `openpose_hand`, `openpose_face`, `openpose_faceonly`, `openpose_full`, `clip_vision`, `color`, `pidinet`, `pidinet_safe`, `pidinet_sketch`, `pidinet_scribble`, `scribble_xdog`, `scribble_hed`, `segmentation`, `threshold`, `depth_zoe`, `normal_bae`, `oneformer_coco`, `oneformer_ade20k`, `lineart`, `lineart_coarse`, `lineart_anime`, `lineart_standard`, `shuffle`, `tile_resample`, `invert`, `lineart_anime_denoise`, `reference_only`, `reference_adain`, `reference_adain+attn`, `inpaint`, `inpaint_only`, `inpaint_only+lama`, `tile_colorfix`, `tile_colorfix+sharp`, `depth_anything`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-control-mode)

control\_mode

integer¦null

required

0 for Balanced,1 for My prompt is more important 2 for ControlNet is more important

Enum: `0`, `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-mask)

mask

string¦null

Base64 of mask images, support jpg, jpeg and png format images. Only take effect when controlnet\_units.model set to control\_v11p\_sd15\_inpaint.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-resize-mode)

resize\_mode

integer¦null

How to resize the input image so as to fit the output resolution of the generation. 0 represent JUST\_RESIZE, 1 represent RESIZE\_OR\_CORP, 2 represent RESIZE\_AND\_FILL

Enum: `0`, `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-processor-res)

processor\_res

integer

Resolution of the preprocessor.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-threshold-a)

threshold\_a

integer

First parameter of the preprocessor, only takes effect when preprocessor accepts arguments.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-threshold-b)

threshold\_b

integer

Second parameter of the preprocessor, only takes effect when preprocessor accepts arguments.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-guidance-start)

guidance\_start

number

ratio of generation where this unit starts to have an effect.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-guidance-end)

guidance\_end

number

ratio of generation where this unit stops to have an effect.

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-pixel-perfect)

pixel\_perfect

boolean

Enable pixel-perfect preprocessor, when set to false, it means not to resize images.

## [​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-code)

code

integer

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-msg)

msg

string

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-data)

data

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-task-id)

task\_id

string

[​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated#param-warn)

warn

string

## [​](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated\#example)  Example

request

Copy

```
curl --location 'https://api.novita.ai/v2/txt2img' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
  'extra': {
    'enable_nsfw_detection': false,
    'nsfw_detection_level': 0,
    'enable_progress_info': false
  },
  'prompt': 'Luxury suite design, Spacious suite area, Luxuriously plush large bed, Refined office desk, Carefully selected furniture for the luxurious suite, High-end and opulent decor, Private office and lounge area, Comfortably luxurious office chair, Amenities for luxury travelers, Premium bedding and linens, Uniquely designed lighting fixtures, Luxurious suite curtain design, Private work corner, Luxurious amenities, Lavish lounge area, Sophisticated indoor plant, decorations, Exquisite luxury design, Exclusive services for the luxury suite, Luxury color scheme. Exclusive furniture for the luxury suite, a bedroom with a large bed and a desk',
  'negative_prompt': '(badhandv4:1.2),(worst quality:2),(low quality:2),(normal quality:2),lowres,bad anatomy,bad hands,((monochrome)),((grayscale)) watermark,moles, easynegative ng_deepnegative_v1_75t, (oversized head:2), (big head:2), (deformed face:1.5),( blurry face:2), bad eyes, irregular eyes, asymmetric eyes, ugly, teeth, (navel:0.9), artefact, jpg artefact, blurry face, blurry, blurred, pixelated, bad eyes, crossed eyes, blurry eyes',
  'sampler_name': 'DPM++ 2M Karras',
  'batch_size': 1,
  'n_iter': 1,
  'steps': 25,
  'cfg_scale': 7,
  'seed': -1,
  'height': 512,
  'width': 512,
  'model_name': 'sd_xl_base_0.9.safetensors',
  'restore_faces': false,
  'restore_faces_model': '',
  'sd_vae': '',
  'clip_skip': 1,
  'enable_hr': false,
  'hr_upscaler': 'Latent',
  'hr_scale': 1,
  'hr_resize_x': null,
  'hr_resize_y': null,
  'img_expire_ttl': null,
  'sd_refiner': {
    'checkpoint': 'sd_xl_refiner_1.0.safetensors',
    'switch_at': null
  },
  'controlnet_units': [\
    {\
      'model': '',\
      'weight': null,\
      'input_image': '',\
      'module': 'none',\
      'control_mode': 0,\
      'mask': '',\
      'resize_mode': 0,\
      'processor_res': null,\
      'threshold_a': null,\
      'threshold_b': null,\
      'guidance_start': null,\
      'guidance_end': null,\
      'pixel_perfect': false\
    }\
  ]
}'
```

response

Copy

```
{
  "code": 0,
  "msg": "",
  "data": {
    "task_id": "d4cf3973-8414-4a5e-aa6f-ef54caf73662"
  }
}
```

Was this page helpful?

YesNo

[List LoRA Training Task](https://novita.ai/docs/api-reference/model-apis-list-training-task) [Image to Image V2](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.