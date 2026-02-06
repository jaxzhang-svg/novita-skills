---
url: "https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated"
title: "Image to Image V2 - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Deprecated

Image to Image V2

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Image to Image V2

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v2/img2img \
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
  "prompt": {},
  "negative_prompt": {},
  "sampler_name": {},
  "batch_size": {},
  "n_iter": {},
  "steps": {},
  "cfg_scale": {},
  "seed": {},
  "height": 123,
  "width": 123,
  "model_name": "<string>",
  "init_images": [\
    "<string>"\
  ],
  "denoising_strength": {},
  "restore_faces": {},
  "sd_vae": {},
  "clip_skip": {},
  "mask": "<string>",
  "mask_blur": 123,
  "resize_mode": {},
  "image_cfg_scale": {},
  "inpainting_fill": {},
  "inpaint_full_res": {},
  "inpaint_full_res_padding": {},
  "inpainting_mask_invert": 123,
  "initial_noise_multiplier": 123,
  "img_expire_ttl": 123,
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
    "processor_res": {},
    "threshold_a": {},
    "threshold_b": {},
    "guidance_start": {},
    "guidance_end": {},
    "pixel_perfect": {}
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

img2img

Try it

Image to Image V2

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v2/img2img \
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
  "prompt": {},
  "negative_prompt": {},
  "sampler_name": {},
  "batch_size": {},
  "n_iter": {},
  "steps": {},
  "cfg_scale": {},
  "seed": {},
  "height": 123,
  "width": 123,
  "model_name": "<string>",
  "init_images": [\
    "<string>"\
  ],
  "denoising_strength": {},
  "restore_faces": {},
  "sd_vae": {},
  "clip_skip": {},
  "mask": "<string>",
  "mask_blur": 123,
  "resize_mode": {},
  "image_cfg_scale": {},
  "inpainting_fill": {},
  "inpaint_full_res": {},
  "inpaint_full_res_padding": {},
  "inpainting_mask_invert": 123,
  "initial_noise_multiplier": 123,
  "img_expire_ttl": 123,
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
    "processor_res": {},
    "threshold_a": {},
    "threshold_b": {},
    "guidance_start": {},
    "guidance_end": {},
    "pixel_perfect": {}
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

**The Image-to-Image V2 API is deprecated and will be removed in the future. Please migrate to [Image-to-Image V3](https://novita.ai/docs/api-reference/model-apis-img2img).**

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated\#post-image-to-image-v2)  POST Image to Image V2

This is the image-to-image endpoint. Only a `task_id` will be returned. You should use the `task_id` to call the `/v2/progress` API endpoint in order to retrieve the image generation results. The output is provided in the format of “image/png”. We will gradually phase out the V2 endpoints, and it is recommended to use the V3 endpoints to generate images.

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-authorization)

Authorization

string

required

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-extra)

extra

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-enable-nsfw-detection)

enable\_nsfw\_detection

boolean

When set to true, NSFW detection will be enabled, incurring an additional cost of $0.0015 for each generated image.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-nsfw-detection-level)

nsfw\_detection\_level

integer

\\*\\*\\* 0 - Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols. \*\*\* 1 - Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols; Non-Explicit Nudity, Obstructed Intimate Parts, Kissing on the Lips. \*\*\* 2 - Explicit Nudity, Explicit Sexual Activity, Sex Toys; Hate Symbols; Non-Explicit Nudity, Obstructed Intimate Parts, Kissing on the Lips; Female Swimwear or Underwear, Male Swimwear or Underwear.

Enum: `0`, `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-enable-progress-info)

enable\_progress\_info

boolean¦null

You will receive empty preview images after setting enable\_progress\_info to false.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-response-image-type)

response\_image\_type

string

The format of returned images, default: `png`

Enum: `png`, `jpeg`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-prompt)

prompt

string¦null

required

Positive prompt words, separated by commas. If you want to use LoRA, you can call the `/v3/model` endpoint with the parameter filter.types=lora to retrieve the `sd_name_in_api` field as the `model_name`. Remember that the format for LoRA models is `<lora:$sd_name:$weight>`.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-negative-prompt)

negative\_prompt

string¦null

Negative prompt words, separated by commas.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-sampler-name)

sampler\_name

string¦null

required

This denoising process is called sampling because Stable Diffusion generates a new sample image at each step.

Enum: `DPM++ 2M Karras`, `DPM++ SDE Karras`, `DPM++ 2M SDE Exponential`, `DPM++ 2M SDE Karras`, `Euler a`, `Euler`, `LMS`, `Heun`, `DPM2`, `DPM2 a`, `DPM++ 2S a`, `DPM++ 2M`, `DPM++ SDE`, `DPM++ 2M SDE`, `DPM++ 2M SDE Heun`, `DPM++ 2M SDE Heun Karras`, `DPM++ 2M SDE Heun Exponential`, `DPM++ 3M SDE`, `DPM++ 3M SDE Karras`, `DPM++ 3M SDE Exponential`, `DPM fast`, `DPM adaptive`, `LMS Karras`, `DPM2 Karras`, `DPM2 a Karras`, `DPM++ 2S a Karras`, `Restart`, `DDIM`, `PLMS`, `UniPC`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-batch-size)

batch\_size

integer¦null

required

Number of images generated in a single generation. Range: \[0, 8\]

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-n-iter)

n\_iter

integer¦null

required

Number of generations. Range: \[0, 8\]

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-steps)

steps

integer¦null

required

Think of steps as iterations of the image creation process. Range: (0, 50\]

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-cfg-scale)

cfg\_scale

number¦null

required

This setting indicates how closely Stable Diffusion will adhere to your prompt. Range: (0, 30\]

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-seed)

seed

integer¦null

A seed is a number from which Stable Diffusion generates noise.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-height)

height

integer

required

Height of the image. Range: (0, 2048\]

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-width)

width

integer

required

Width of the image. Range: (0, 2048\]

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-model-name)

model\_name

string

required

Name of the stable diffusion model. You can call the `/v3/model` endpoint with the parameter filter.types=checkpoint to retrieve the `sd_name_in_api` field as the `model_name`.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-init-images)

init\_images

string\[\]

required

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-denoising-strength)

denoising\_strength

number¦null

Indicates how much to transform the reference init\_images. Must be between 0 and 1. init\_images will be used as a starting point, with more noise added as the strength increases. The number of denoising steps depends on the amount of noise initially added. When denoising\_strength is 1, added noise will be maximum, and the denoising process will run for the full number of iterations specified in steps. A value of 1, therefore, essentially ignores init\_images.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-restore-faces)

restore\_faces

boolean¦null

Enable Stable Diffusion restore faces plugin.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-sd-vae)

sd\_vae

string¦null

VAE(Variational Auto Encoder),sd\_vae can be access in api /v3/model with query params filter.types=vae to retrieve the `sd_name` field as the `sd_vae`.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-clip-skip)

clip\_skip

integer¦null

This parameter indicates the number of layers to stop from the bottom during optimization, so clip\_skip on 2 would mean, that in SD1.x model where the CLIP has 12 layers, you would stop at 10th layer.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-mask)

mask

string

Base64 of png, mask of inpaintings.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-mask-blur)

mask\_blur

integer

Sets the degree of blurring of the border of the filled area.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-resize-mode)

resize\_mode

integer¦null

Resize mode, while, 0 represent Just resize, 1 represent Crop and resize, 2 represent Resize and fill, 3 represent Just resize(latent upscale)

Enum: `0`, `1`, `2`, `3`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-image-cfg-scale)

image\_cfg\_scale

integer¦null

Image cfg scale

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-inpainting-fill)

inpainting\_fill

integer¦null

How to redraw the filled areas. 0: fill, Redraw based on the surrounding color 1: original, Redraw based on the original image 2: latent noise, Change back to noise and redraw 3: latent nothing, based on the color of the filled area

Enum: `0`, `1`, `2`, `3`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-inpaint-full-res)

inpaint\_full\_res

integer¦null

Specify whether to apply or protect the filled area. 0: Whole picture the entire illustration and change the filled parts. 1: Only masked Draws only the filled area and then restores the original image.

Enum: `0`, `1`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-inpaint-full-res-padding)

inpaint\_full\_res\_padding

integer¦null

This settings controls how many additional pixels can be used as a reference point for only masked mode. You can increase the amount if you are having trouble with producing a proper image. This is a numerical value for how much margin to set when Only masked is selected. The downside of increasing this value is that it will decrease the quality of output. Guidance: [https://civitai.com/articles/161/basic-inpainting-guide](https://civitai.com/articles/161/basic-inpainting-guide)

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-inpainting-mask-invert)

inpainting\_mask\_invert

integer

Specify whether to invert the mask. 0 - Inpaint Masked 1 - Inpaint Not Masked

Enum: `0`, `1`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-initial-noise-multiplier)

initial\_noise\_multiplier

number

Noise multiplier for img2img in settings. This scaling factor is applied to the random latent tensor for img2img. Lowering it reduces flickering.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-img-expire-ttl)

img\_expire\_ttl

integer

Image storage time (seconds). Range \[0, 604800\]

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-sd-refiner)

sd\_refiner

object

Refiner infos to enhances the image details.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-checkpoint)

checkpoint

string

required

Refiner checkpoint name. Currently only `sd_xl_refiner_1.0.safetensors` supported.

Enum: `sd_xl_refiner_1.0.safetensors`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-switch-at)

switch\_at

number

required

Weight of refiner. From 0 to 1

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-controlnet-units)

controlnet\_units

object\[\]¦null

ControlNet.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-model)

model

string

required

Model to use on the image passed to this unit before using it for conditioning. \*\*\*Controlnets for SD 1.5: control\_v11e\_sd15\_ip2p, control\_v11e\_sd15\_shuffle, control\_v11f1e\_sd15\_tile, control\_v11f1p\_sd15\_depth, control\_v11p\_sd15\_canny, control\_v11p\_sd15\_inpaint, control\_v11p\_sd15\_lineart, control\_v11p\_sd15\_mlsd, control\_v11p\_sd15\_normalbae, control\_v11p\_sd15\_openpose, control\_v11p\_sd15\_scribble, control\_v11p\_sd15\_seg, control\_v11p\_sd15\_softedge, control\_v11p\_sd15s2\_lineart\_anime, ip-adapter-plus-face\_sd15, ip-adapter\_sd15\_plus, ip-adapter\_sd15; \*\*\*Controlnets for SDXL: t2i-adapter\_diffusers\_xl\_canny, t2i-adapter\_diffusers\_xl\_depth\_midas, t2i-adapter\_diffusers\_xl\_depth\_zoe, t2i-adapter\_diffusers\_xl\_lineart, t2i-adapter\_diffusers\_xl\_openpose, t2i-adapter\_diffusers\_xl\_sketch, t2i-adapter\_xl\_canny, t2i-adapter\_xl\_openpose, t2i-adapter\_xl\_sketch, ip-adapter\_xl

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-weight)

weight

number¦null

required

weight of this unit. defaults to 1

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-input-image)

input\_image

string

required

base64 of input image

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-module)

module

string

required

preprocessor to use on the image passed to this unit before using it for conditioning.

Enum: `none`, `canny`, `depth`, `depth_leres`, `depth_leres++`, `hed`, `hed_safe`, `mediapipe_face`, `mlsd`, `normal_map`, `openpose`, `openpose_hand`, `openpose_face`, `openpose_faceonly`, `openpose_full`, `clip_vision`, `color`, `pidinet`, `pidinet_safe`, `pidinet_sketch`, `pidinet_scribble`, `scribble_xdog`, `scribble_hed`, `segmentation`, `threshold`, `depth_zoe`, `normal_bae`, `oneformer_coco`, `oneformer_ade20k`, `lineart`, `lineart_coarse`, `lineart_anime`, `lineart_standard`, `shuffle`, `tile_resample`, `invert`, `lineart_anime_denoise`, `reference_only`, `reference_adain`, `reference_adain+attn`, `inpaint`, `inpaint_only`, `inpaint_only+lama`, `tile_colorfix`, `tile_colorfix+sharp`, `depth_anything`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-control-mode)

control\_mode

integer¦null

required

0 for Balanced,1 for My prompt is more important 2 for ControlNet is more important

Enum: `0`, `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-mask-1)

mask

string¦null

Base64 of mask images, support jpg, jpeg and png format images. Only take effect when controlnet\_units.model set to control\_v11p\_sd15\_inpaint.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-resize-mode-1)

resize\_mode

integer¦null

How to resize the input image so as to fit the output resolution of the generation.

Enum: `0`, `1`, `2`

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-processor-res)

processor\_res

integer¦null

Resolution of the preprocessor.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-threshold-a)

threshold\_a

integer¦null

First parameter of the preprocessor, only takes effect when preprocessor accepts arguments.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-threshold-b)

threshold\_b

integer¦null

Second parameter of the preprocessor, only takes effect when preprocessor accepts arguments.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-guidance-start)

guidance\_start

number¦null

ratio of generation where this unit starts to have an effect.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-guidance-end)

guidance\_end

number¦null

ratio of generation where this unit stops to have an effect.

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-pixel-perfect)

pixel\_perfect

boolean¦null

Enable pixel-perfect preprocessor, when set to false, it means not to resize images.

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-code)

code

integer

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-msg)

msg

string

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-data)

data

object

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-task-id)

task\_id

string

[​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated#param-warn)

warn

string

## [​](https://novita.ai/docs/api-reference/model-apis-image-to-image-v2-deprecated\#example)  Example

request

Copy

```
curl --location 'https://api.novita.ai/v2/img2img' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
  'extra': {
    'enable_nsfw_detection': false,
    'nsfw_detection_level': 0,
    'enable_progress_info': false
  },
  'prompt': 'Photographic of a woman sitting at a cafe. 35mm photograph, film, bokeh, professional, 4k, highly detailed',
  'negative_prompt': 'ng_deepnegative_v1_75t, badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres, ((monochrome)), ((grayscale)), watermark',
  'sampler_name': 'Euler a',
  'batch_size': 1,
  'n_iter': 1,
  'steps': 20,
  'cfg_scale': 7,
  'seed': -1,
  'height': 1024,
  'width': 1024,
  'model_name': 'sd_xl_base_1.0.safetensors',
  'init_images': [\
    '{{base64 encoded image}}'\
  ],
  'denoising_strength': 0.5,
  'restore_faces': false,
  'sd_vae': 'sdxl_vae.safetensors',
  'clip_skip': 1,
  'mask': '',
  'mask_blur': null,
  'resize_mode': 0,
  'image_cfg_scale': null,
  'inpainting_fill': 0,
  'inpaint_full_res': 0,
  'inpaint_full_res_padding': null,
  'inpainting_mask_invert': 0,
  'initial_noise_multiplier': null,
  'img_expire_ttl': null,
  'sd_refiner': {
    'checkpoint': 'sd_xl_refiner_1.0.safetensors',
    'switch_at': 1
  },
  'controlnet_units': [\
    {\
      'model': 't2i-adapter_xl_sketch',\
      'weight': 0.5,\
      'input_image': '{{base64 encoded image}}',\
      'module': 'none',\
      'control_mode': 0,\
      'mask': '',\
      'resize_mode': 0,\
      'processor_res': null,\
      'threshold_a': null,\
      'threshold_b': null,\
      'guidance_start': null,\
      'guidance_end': null,\
      'pixel_perfect': false,\
      'lowvram': true\
    }\
  ],
  'controlnet_no_detectmap': true
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

[Text to Image V2](https://novita.ai/docs/api-reference/model-apis-text-to-image-v2-deprecated) [Progress](https://novita.ai/docs/api-reference/model-apis-progress-deprecated)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.