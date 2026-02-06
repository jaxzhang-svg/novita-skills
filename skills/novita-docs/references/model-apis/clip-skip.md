---
url: "https://novita.ai/docs/guides/model-apis-clip-skip"
title: "A Brief Introduction to Clip Skip - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/model-apis-clip-skip#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image, Audio and Video

A Brief Introduction to Clip Skip

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [But why would anyone want to skip a part of the diffusion process?](https://novita.ai/docs/guides/model-apis-clip-skip#but-why-would-anyone-want-to-skip-a-part-of-the-diffusion-process)
- [Do I need it?](https://novita.ai/docs/guides/model-apis-clip-skip#do-i-need-it)
- [Limitations](https://novita.ai/docs/guides/model-apis-clip-skip#limitations)

Clip Skip is a feature that literally skips part of the image generation process, resulting in slightly different outputs. This also leads to faster image rendering.

### [​](https://novita.ai/docs/guides/model-apis-clip-skip\#but-why-would-anyone-want-to-skip-a-part-of-the-diffusion-process)  But why would anyone want to skip a part of the diffusion process?

A typical Stable Diffusion 1.5 base model image goes through 12 “clip” layers, which represent levels of refinement. The early layers are very broad, while the later layers produce images that are clearer and more specific. In the case of some base models, especially those based on Danbooru tags, trial and error has shown that skipping certain layers can lead to better images, as the broad clip layers may introduce unwanted noise. You can literally skip layers, saving GPU time and achieving better art.If you want a picture of “a cow”, you might not care about the subcategories of “cow” that the text model might have. Especially since these can vary in quality. So if you want “a cow”, you might not want “an Aberdeen Angus bull”. (The full post is at the bottom of this page.)You can think of CLIP Skip as a setting for “how accurate you want the text model to be”. You can test it out and see that each clip stage adds more definition in terms of description. For example, if you have a detailed prompt about a young man standing in a field, with lower clip stages you’d get an image of “a man standing”, while deeper stages would yield “a young man standing” or “a young man standing in a forest”, and so on. CLIP Skip becomes particularly effective when using models that are structured in a specific way, where the “1girl” tag can break down into many sub-tags connected to that main tag.

### [​](https://novita.ai/docs/guides/model-apis-clip-skip\#do-i-need-it)  Do I need it?

It’s a minor optimization recommended only for hardcore, quality-obsessed enthusiasts. If you’re working on anime or semi-realism, it’s worth a try.

### [​](https://novita.ai/docs/guides/model-apis-clip-skip\#limitations)  Limitations

**How many layers to skip**Generally speaking, skipping 1 or 2 layers can yield good results. However, skipping more than 2 layers may produce images that appear to have low guidance.**Inconsistent compatibility**Clip Skip has become one of those “wear your seatbelt” kinds of safe defaults, where many people prefer to set it and forget it. This approach isn’t wise. The feature can also yield unpredictable results when used with other technologies, such as LoRAs and Textual Inversions. Missing layers where layers are expected can degrade the image quality or have no effect at all.It’s often faster to simply try it out than to compare results. Just make sure you also lock the seed, guidance, concept, and sampler to accurately assess the differences.

Was this page helpful?

YesNo

[A Brief Introduction to Sampler](https://novita.ai/docs/guides/model-apis-sampler) [What's the Variational Autoencoder VAE?](https://novita.ai/docs/guides/model-apis-vae)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.