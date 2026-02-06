---
url: "https://novita.ai/docs/guides/model-apis-v2-to-v3-migration"
title: "API V2 to V3 Migration Guide - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image, Audio and Video

API V2 to V3 Migration Guide

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Text to Image](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#text-to-image)
- [Request Body Parameter Mapping](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#request-body-parameter-mapping)
- [Response Parameter Mapping](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#response-parameter-mapping)
- [Example](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#example)
- [Image to Image](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#image-to-image)
- [Request Body Parameter Mapping](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#request-body-parameter-mapping-2)
- [Response Parameter Mapping](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#response-parameter-mapping-2)
- [Example](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration#example-2)

## [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#text-to-image)  Text to Image

### [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#request-body-parameter-mapping)  Request Body Parameter Mapping

| V2 | V3 | Description |
| --- | --- | --- |
| **extra** object | **extra** object |  |
| enable\_nsfw\_detection<br>boolean | enable\_nsfw\_detection<br>boolean |  |
| nsfw\_detection\_level<br>Enum: `0, 1, 2` | nsfw\_detection\_level<br>Enum: `0, 1, 2` |  |
| enable\_progress\_info |  | Deprecated |
| response\_image\_type<br>Enum: `png`, `jpeg` | response\_image\_type<br>Enum: `png, webp, jpeg` | V3 adds support for `webp`image format |
|  | **request** object | New Field<br>All image generation parameters must be passed via the `request`in V3 |
| **prompt** string<br><lora:$sd\_name:$weight> | promptstring | Moved Inside |
|  | lorasobject\[\] | Moved Inside<br>**Migrate LoRA usage: From `prompt` to `request.loras` parameter** |
|  | model\_namestring | New Field<br>Name of lora, retrieve the corresponding sd\_name\_in\_api value by invoking the [Get Model API](https://novita.ai/docs/api-reference/model-apis-get-model) endpoint with filter.types=lora as the query parameter. |
|  | strengthnumber(float32) | New Field<br>The strength value of lora. The larger the value, the more biased the effect is towards lora, Range \[0, 1\] |
| **negative\_prompt** string | negative\_promptstring | Moved Inside |
| **sampler\_name** string | sampler\_namestring | Moved Inside |
| **batch\_size** integer | image\_numinteger | Changed<br>`num_images` **→**`request.image_num` |
| **n\_iter** |  | Deprecated |
| **steps** string | stepsstring | Moved Inside |
| **cfg\_scale** integer | guidance\_scale<br>number(float32) | Changed<br>`cfg_scale` **→**`request.guidance_scale` |
| **seed** integer | seedinteger | Moved Inside |
| **height** integer | heightinteger | Moved Inside<br>Range Change: \[128, 2048\]. |
| **width** integer | widthinteger | Moved Inside<br>Range Change: \[128, 2048\]. |
| **model\_name** string | model\_namestring | Moved Inside<br>This parameter specifies the name of the model checkpoint. Retrieve the corresponding sd\_name value by invoking the [Query Model](https://novita.ai/docs/api-reference/model-apis-get-model) API with filter.types=checkpoint as the query parameter. |
| **restore\_faces** bool | restore\_facesbool | Moved Inside |
| **restore\_faces\_model** |  | Deprecated |
| **sd\_vae** string | sd\_vaestring | Moved Inside |
| **clip\_skip** integer | clip\_skipinteger | Moved Inside |
| **enable\_hr** boolean | hires\_fixobject | Changed<br>`enable_hr` **→**`request.hires_fix` |
| **hr\_upscaler**<br>Enum:<br>`Latent`, `ESRGAN_4x`, `R-ESRGAN 4x+`, `R-ESRGAN 4x+ Anime6B` | upscaler<br>Enum: `RealESRGAN_x4plus_anime_6B`, `RealESRNet_x4plus,Latent` | Changed<br>`hr_upscaler` **→**`request.hires_fix.upscaler` |
| **hr\_scale** number |  | Deprecated |
| **hr\_resize\_x** integer | target\_widthinteger | Changed<br>`hr_resize_x` **→**`request.hires_fix.target_width` |
| **hr\_resize\_y** integer | target\_heightinteger | Changed<br>`hr_resize_y` **→**`request.hires_fix.target_height` |
| **img\_expire\_ttl** integer |  | Deprecated<br>Default 3600s |
| **sd\_refiner** object | refinerobject | Changed<br>`sd_refiner` **→**`request.refiner` |
| checkpointstring |  | Deprecated |
| switch\_at<br>number(float32) | switch\_at<br>number(float32) | Changed<br>`sd_refiner.switch_at` **→**`request.refiner.switch_at` |
| **controlnet\_units** object\[\] |  | Deprecated<br>`img2img` Only |

### [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#response-parameter-mapping)  Response Parameter Mapping

| V2 | V3 | Description |
| --- | --- | --- |
| **code** |  | Deprecated |
| **msg** |  | Deprecated |
| **data** |  | Deprecated |
| task\_id | **task\_id** | Changed<br>`data.task_id` **→**`task_id` |
| warn |  | Deprecated |

### [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#example)  Example

## Text to Image V2

- Request

Copy

```
curl --location "https://api.novita.ai/v2/txt2img" \
--header "Authorization: Bearer {{API Key}}" \
--header "Content-Type: application/json" \
--data '{
  "extra": {
    "enable_nsfw_detection": false,
    "nsfw_detection_level": 0,
    "response_image_type": "jpeg"
  },
  "prompt": "(masterpiece, best quality, ultra-detailed:1.3), <lora:AnimeStyle_XL_v1_AutoRunMech_103883:0.8>, 1girl, mecha armor, futuristic city background, glowing neon lights, dynamic pose, cyberpunk style, intricate mechanical details, (floating holographic interface:1.2), sparkling blue eyes, wind-blown hair, (steam and energy particles:1.1), cinematic lighting",
  "negative_prompt":"(worst quality, low quality:1.4), (deformed, distorted:1.3), disfigured, blurry, bad anatomy, extra limbs, (mutated hands:1.2), (text, watermark:1.5),
overexposed, underexposed, (cartoonish:1.2), (simplistic background:1.3),
grainy, (traditional drawing:1.2), (realistic:1.4), (noisy:1.3)",
  "sampler_name":"DPM++ 2M Karras",
  "batch_size": 1,
  "n_iter": 1,
  "steps": 25,
  "cfg_scale": 7,
  "seed": 65531,
  "height": 512,
  "width": 512,
  "model_name": "sd_xl_base_1.0.safetensors",
  "restore_faces": false,
  "restore_faces_model": "",
  "sd_vae": "",
  "clip_skip": 1,
  "enable_hr": true,
  "hr_upscaler": "Latent",
  "hr_scale": 2,
  "hr_resize_x": 1024,
  "hr_resize_y": 1024,
  "img_expire_ttl": 3600
}'
```

- Response

Copy

```
{
  "code": 0,
  "msg": "",
  "data": {
    "task_id": "12905b6a-d436-4010-b199-d800130c0aab"
  }
}
```

## Text to Image V3

- Reqeust

Copy

```
curl --location 'https://api.novita.ai/v3/async/txt2img' \
--header 'Authorization: Bearer {{API Key}}' \
--header 'Content-Type: application/json' \
--data '{
    "extra": {
        "enable_nsfw_detection": false,
        "nsfw_detection_level": 0,
        "response_image_type": "jpeg"
    },
    "request": {
      "prompt": "(masterpiece, best quality, ultra-detailed:1.3), 1girl, mecha armor, futuristic city background, glowing neon lights, dynamic pose, cyberpunk style, intricate mechanical details,(floating holographic interface:1.2), sparkling blue eyes, wind-blown hair, (steam and energy particles:1.1), cinematic lighting",
      "negative_prompt": "(worst quality, low quality:1.4), (deformed, distorted:1.3), disfigured,blurry, bad anatomy, extra limbs, (mutated hands:1.2), (text, watermark:1.5),overexposed, underexposed,(cartoonish:1.2), (simplistic background:1.3), grainy, (traditional drawing:1.2),(realistic:1.4), (noisy:1.3)",
        "model_name": "sd_xl_base_1.0.safetensors",
        "width": 512,
        "height": 512,
        "image_num": 1,
        "steps": 25,
        "seed": 65531,
        "restore_faces": false,
        "clip_skip": 1,
        "sampler_name":"DPM++ 2M Karras",
        "guidance_scale": 7,
        "hires_fix": {
            "target_width": 1024,
            "target_height": 1024,
            "strength": 0.8,
            "upscaler": "Latent"
        },
        "loras": [\
          {\
            "model_name": "AnimeStyle_XL_v1_AutoRunMech_103883",\
            "strength": 0.8\
          }\
        ]
    }
}'
```

- Repspone

Copy

```
{
  "task_id":"0696ce57-22df-4a89-9efc-80c386a82dbd"
}
```

## [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#image-to-image)  Image to Image

### [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#request-body-parameter-mapping-2)  Request Body Parameter Mapping

| V2 | V3 | Description |
| --- | --- | --- |
| **extra** object | **extra** object |  |
| enable\_nsfw\_detection<br>boolean | enable\_nsfw\_detection<br>boolean |  |
| nsfw\_detection\_level<br>Enum: `0, 1, 2` | nsfw\_detection\_level<br>Enum: `0, 1, 2` |  |
| enable\_progress\_info |  | Deprecated |
| response\_image\_type<br>Enum: `png`, `jpeg` | response\_image\_type<br>Enum: `png, webp, jpeg` | V3 adds support for `webp`image format |
|  | **request** object | New field<br>All image generation parameters must be passed via the `request`in V3 |
| **prompt** string<br><lora:$sd\_name:$weight> | promptstring | Moved Inside |
|  | lorasobject\[\] | Moved Inside<br>**Migrate LoRA usage: From `prompt` to `request.loras` parameter** |
|  | model\_namestring | New Field<br>Name of lora, retrieve the corresponding sd\_name\_in\_api value by invoking the [Get Model API](https://novita.ai/docs/api-reference/model-apis-get-model) endpoint with filter.types=lora as the query parameter. |
|  | strength<br>number(float32) | New Field<br>The strength value of lora. The larger the value, the more biased the effect is towards lora, Range \[0, 1\] |
| **negative\_prompt** string | negative\_prompt<br>string | Moved Inside |
| **sampler\_name** string | sampler\_namestring | Moved Inside |
| **batch\_size** integer | image\_numinteger | Changed<br>`batch_size` **→**`request.image_num` |
| **n\_iter** integer |  | Deprecated |
| **steps** string | stepsstring | Moved Inside |
| **cfg\_scale** integer | guidance\_scale<br>number(float32) | Changed<br>`cfg_scale` **→**`request.guidance_scale` |
| **seed** integer | seedinteger | Moved Inside |
| **height** integer | heightinteger | Moved Inside<br>Range Change: \[128, 2048\]. |
| **width** integer | widthinteger | Moved Inside<br>Range Change: \[128, 2048\]. |
| **model\_name** string | model\_namestring | Moved Inside<br>This parameter specifies the name of the model checkpoint. Retrieve the corresponding sd\_name value by invoking the [Query Model](https://novita.ai/docs/api-reference/model-apis-get-model) API with filter.types=checkpoint as the query parameter. |
| **init\_images** string\[\] | image\_base64string | Changed<br>`init_images` **→**`request.image_base64` |
| **denoising\_strength**<br>number(float) | strength<br>number(float) | Changed<br>`denoising_strength` **→**`request.strength` |
| **restore\_faces** bool |  | Deprecated |
| **sd\_vae** string | sd\_vaestring | Moved Inside |
| **clip\_skip** integer | clip\_skipinteger | Moved Inside |
| **mask** string |  | Deprecated<br>Recommendation: Use V3 Inpainting API |
| **mask\_blur** integer |  | Deprecated<br>Recommendation: Use V3 Inpainting API |
| **resize\_mode** integer |  | Deprecated |
| **image\_cfg\_scale** integer |  | Deprecated |
| **inpainting\_fill** integer |  | Deprecated<br>Recommendation: Use V3 Inpainting API |
| **inpaint\_full\_res** integer |  | Deprecated<br>Recommendation: Use V3 Inpainting API |
| **inpaint\_full\_res\_padding**<br>integer |  | Deprecated<br>Recommendation: Use V3 Inpainting API |
| **inpainting\_mask\_invert**<br>integer |  | Deprecated<br>Recommendation: Use V3 Inpainting API |
| **initial\_noise\_multiplier**<br>number(float32) |  | Deprecated |
| **img\_expire\_ttl** integer |  | Deprecated<br>Default 3600s |
| **sd\_refiner** object | refinerobject | Changed<br>`sd_refiner` **→**`request.refiner` |
| checkpoint |  | Deprecated |
| switch\_at<br>number(float32) | switch\_at<br>number(float32) | Moved Inside |
|  | controlnetobject | New Field |
| **controlnet\_units** object\[\] | unitsobject\[\] | Changed<br>`controlnet_units` **→**`request.controlnet.units` |
| modelstring | model\_name<br>string | Changed<br>`controlnet_units.model` **→**<br>`request.controlnet.units.model_name` |
| weightnumber | strength<br>number(float32) | Changed<br>`controlnet_units.weight` **→**<br>`request.controlnet.units.strength` |
| input\_imagestring | image\_base64<br>string | Changed<br>`controlnet_units.input_image` **→**<br>`request.controlnet.units.image_base64` |
| modulestring,Enum | preprocessor<br>string,Enum | Changed<br>`controlnet_units.module` **→**<br>`request.controlnet.units.preprocessor` |
| control\_mode |  | Deprecated |
| mask |  | Deprecated<br>Recommendation: Use V3 Inpainting API |
| resize\_mode |  | Deprecated |
| processor\_res |  | Deprecated |
| threshold\_a |  | Deprecated |
| threshold\_b |  | Deprecated |
| guidance\_start<br>number(float32) | guidance\_start<br>number(float32) | Moved Inside |
| guidance\_end<br>number(float32) | guidance\_end<br>number(float32) | Moved Inside |
| pixel\_perfect |  | Deprecated |

### [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#response-parameter-mapping-2)  Response Parameter Mapping

| V2 | V3 | Description |
| --- | --- | --- |
| code |  | Deprecated |
| msg |  | Deprecated |
| data |  | Deprecated |
| task\_id | **task\_id** | Changed<br>`data.task_id` **→**`task_id` |
| warn |  | Deprecated |

### [​](https://novita.ai/docs/guides/model-apis-v2-to-v3-migration\#example-2)  Example

## Image to Image V2

- Request

Copy

```
curl --request POST \
  --url https://api.novita.ai/v2/img2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: application/json' \
  --data '{
  "extra": {
    "enable_nsfw_detection": false,
    "nsfw_detection_level": 0,
    "response_image_type": "png"
  },
  "prompt": "realistic, photograph, (masterpiece), 8k quality, (detailed eyes:1.2), (highest quality:1.1), highly detailed, majestic, top quality, best quality, newest, ai-generated, (intricate details:1.1), extremely beautiful, elegant, majestic, immersive background+, (detailed face, perfect face), In the heart of a vibrant garden, a girl with red hair and brown eyes sits in contemplation of the nature around her.",
  "negative_prompt": "(worst quality:1.5), (low quality:1.5), (normal quality:1.5), anime, cartoon, painting, drawing, illustration, manga, sketch, nudity, young, child, hairband, headband, horns, lowres, bad anatomy, bad hands, multiple eyebrow, (cropped), extra limb, missing limbs, deformed hands, long neck, long body, long torso, (bad hands), signature, username, artist name, conjoined fingers, deformed fingers, ugly eyes, imperfect eyes, skewed eyes, unnatural face, unnatural body, error, grain, jpeg artifacts",
  "sampler_name":"DPM++ 2M Karras",
  "batch_size": 1,
  "n_iter": 1,
  "steps": 25,
  "cfg_scale": 7.5,
  "seed": 765824,
  "height": 768,
  "width": 512,
  "model_name": "cyberrealistic_v31_62396.safetensors",
  "init_images": [\
    "<IMAGE_BASE64>"\
  ],
  "denoising_strength": 0.8,
  "restore_faces": false,
  "clip_skip": 1,
  "img_expire_ttl": 3600,
  "controlnet_units": {
    "model": "control_v11p_sd15_lineart",
    "weight": 1,
    "input_image": "<IMAGE_BASE64>",
    "module": "lineart",
    "guidance_start": 0,
    "guidance_end": 1
  }
}'
```

- Response

Copy

```
{
  "code": 0,
  "msg": "",
  "data": {
    "task_id": "a1b0d99b-2ef0-4b20-8eeb-c641ae84ed45"
  }
}
```

## Image to Image V3

- Request

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/async/img2img \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '{
  "extra": {
    "enable_nsfw_detection": false,
    "nsfw_detection_level": 0,
    "response_image_type": "png"
  },
  "request": {
    "prompt": "realistic, photograph, (masterpiece), 8k quality, (detailed eyes:1.2), (highest quality:1.1), highly detailed, majestic, top quality, best quality, newest, ai-generated, (intricate details:1.1), extremely beautiful, elegant, majestic, immersive background+, (detailed face, perfect face), In the heart of a vibrant garden, a girl with red hair and brown eyes sits in contemplation of the nature around her.",
    "negative_prompt": "(worst quality:1.5), (low quality:1.5), (normal quality:1.5), anime, cartoon, painting, drawing, illustration, manga, sketch, nudity, young, child, hairband, headband, horns, lowres, bad anatomy, bad hands, multiple eyebrow, (cropped), extra limb, missing limbs, deformed hands, long neck, long body, long torso, (bad hands), signature, username, artist name, conjoined fingers, deformed fingers, ugly eyes, imperfect eyes, skewed eyes, unnatural face, unnatural body, error, grain, jpeg artifacts",
    "sampler_name": "DPM++ 2M Karras",
    "image_num": 1,
    "steps": 25,
    "guidance_scale": 7.5,
    "seed": 765824,
    "height": 768,
    "width": 512,
    "model_name": "cyberrealistic_v31_62396.safetensors",
        "image_base64": "<IMAGE_BASE64>",
    "strength": 0.8,
    "clip_skip": 1,
    "controlnet": {
      "units": [\
        {\
          "model_name": "control_v11p_sd15_lineart",\
          "strength": 1,\
          "image_base64": "<IMAGE_BASE64>",\
          "preprocessor": "lineart",\
          "guidance_start": 0,\
          "guidance_end": 1\
        }\
      ]
    }
  }
}'
```

- Response

Copy

```
{
  "task_id": "9490dde7-cd28-493e-9db0-8a38a65bf5e6"
}
```

Was this page helpful?

YesNo

[Training Image Caption Guidance](https://novita.ai/docs/guides/model-apis-training-guidance) [Rate limits](https://novita.ai/docs/guides/model-apis-rate-limits)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.