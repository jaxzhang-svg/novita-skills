---
url: "https://novita.ai/docs/guides/model-apis-vae"
title: "What's the Variational Autoencoder VAE? - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/model-apis-vae#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Image, Audio and Video

What's the Variational Autoencoder VAE?

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Introduction to Autoencoders](https://novita.ai/docs/guides/model-apis-vae#introduction-to-autoencoders)
- [Variational Autoencoders (VAEs) Overview](https://novita.ai/docs/guides/model-apis-vae#variational-autoencoders-vaes-overview)

### [​](https://novita.ai/docs/guides/model-apis-vae\#introduction-to-autoencoders)  Introduction to Autoencoders

Autoencoders are a class of neural networks primarily used for unsupervised learning and dimensionality reduction. The fundamental idea behind autoencoders is to encode input data into a lower-dimensional representation and then decode it back to the original data, aiming to minimize the reconstruction error. The basic architecture of an autoencoder consists of two main components: the encoder and the decoder.

- **Encoder**: The encoder is responsible for transforming the input data into a compressed or latent representation. It typically consists of one or more layers of neurons that progressively reduce the dimensions of the input.
- **Decoder**: The decoder, on the other hand, takes the compressed representation produced by the encoder and attempts to reconstruct the original input data. Like the encoder, it often consists of one or more layers, but in reverse order, gradually increasing the dimensions.

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/misc_01.png)

### [​](https://novita.ai/docs/guides/model-apis-vae\#variational-autoencoders-vaes-overview)  Variational Autoencoders (VAEs) Overview

Variational Autoencoders (VAEs) address some of the limitations of traditional autoencoders by introducing a probabilistic approach to encoding and decoding. The motivation behind VAEs lies in their ability to generate new data samples by sampling from a learned distribution in the latent space, rather than from a fixed latent vector as was the case with vanilla autoencoders. This makes them suitable for generative tasks.

- **Probabilistic Nature**: Unlike deterministic autoencoders, VAEs model the latent space as a probability distribution. This produces a probability distribution function over the input encodings instead of just a single fixed vector, allowing for a more nuanced representation of uncertainty in the data. The decoder then samples from this probability distribution.
- **Role of Latent Space**: The latent space in VAEs serves as a continuous, structured representation of the input data. Since it is continuous by design, this allows for easy interpolation. Each point in the latent space corresponds to a potential output, enabling smooth transitions between different data points and ensuring that points closer in the latent space lead to similar generations.

The concept can be elucidated through a straightforward example, as presented below. Encoders within a neural network are tasked with acquiring a representation of input images in the form of a vector. This vector encapsulates various features such as a subject’s smile, hair color, gender, age, etc., denoted as a vector similar to \[0.4, 0.03, 0.032, …\]. In this illustration, the focus is narrowed to a singular latent representation, specifically the attribute of a “smile”.Autoencoders vs VAEs - Sciforce MediumIn the context of Vanilla Autoencoders (AE), the smile feature is encapsulated as a fixed, deterministic value. In contrast, Variational Autoencoders (VAEs) are deliberately crafted to encapsulate this feature as a probabilistic distribution. This design choice facilitates the introduction of variability in generated images by enabling the sampling of values from the specified probability distribution.

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/misc_02.png)

In summary, VAEs go beyond mere data reconstruction; they generate new samples and provide a probabilistic framework for understanding latent representations. The inclusion of probabilistic elements in the model’s architecture sets VAEs apart from traditional autoencoders. Compared to traditional autoencoders, VAEs offer a richer understanding of the data distribution, making them particularly powerful for generative tasks.

Was this page helpful?

YesNo

[A Brief Introduction to Clip Skip](https://novita.ai/docs/guides/model-apis-clip-skip) [Training Image Caption Guidance](https://novita.ai/docs/guides/model-apis-training-guidance)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/misc_01.png)

![](https://next-app-static.s3.ap-southeast-1.amazonaws.com/get-started/misc_02.png)