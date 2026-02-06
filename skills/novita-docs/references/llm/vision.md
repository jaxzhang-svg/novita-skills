---
url: "https://novita.ai/docs/guides/llm-vision"
title: "Vision Language Models - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-vision#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Vision Language Models

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Overview](https://novita.ai/docs/guides/llm-vision#overview)
- [Typical Use Cases](https://novita.ai/docs/guides/llm-vision#typical-use-cases)
- [API Usage Guide](https://novita.ai/docs/guides/llm-vision#api-usage-guide)
- [Image Detail Parameter](https://novita.ai/docs/guides/llm-vision#image-detail-parameter)
- [Example Message Format](https://novita.ai/docs/guides/llm-vision#example-message-format)
- [Image via URL](https://novita.ai/docs/guides/llm-vision#image-via-url)
- [Image via Base64](https://novita.ai/docs/guides/llm-vision#image-via-base64)
- [Python Code: Encode Image to Base64](https://novita.ai/docs/guides/llm-vision#python-code-encode-image-to-base64)
- [Multi-Image Input](https://novita.ai/docs/guides/llm-vision#multi-image-input)
- [Supported Models](https://novita.ai/docs/guides/llm-vision#supported-models)
- [Billing](https://novita.ai/docs/guides/llm-vision#billing)
- [API Call Examples](https://novita.ai/docs/guides/llm-vision#api-call-examples)
- [Single Image Description](https://novita.ai/docs/guides/llm-vision#single-image-description)
- [Multi-Image Comparison](https://novita.ai/docs/guides/llm-vision#multi-image-comparison)
- [Notes & Troubleshooting](https://novita.ai/docs/guides/llm-vision#notes-%26-troubleshooting)

## [​](https://novita.ai/docs/guides/llm-vision\#overview)  Overview

Vision-Language Models (VLMs) are a type of multimodal foundation model capable of processing both image and text inputs. These models understand visual content in conjunction with language instructions, and generate high-quality responses based on the combined context. They are widely used in scenarios involving image recognition, content interpretation, and intelligent visual Q&A.

### [​](https://novita.ai/docs/guides/llm-vision\#typical-use-cases)  Typical Use Cases

- **Image Recognition and Description**: Automatically identifies objects, colors, scenes, and spatial relationships in images, and generates natural language descriptions.
- **Multimodal Understanding**: Combines image input and contextual text for multi-turn dialogue and task completion.
- **Visual Question Answering**: Acts as an advanced OCR tool by recognizing and interpreting text embedded in images.
- **Emerging Applications**: Ideal for use in intelligent vision assistants, robot perception, AR interfaces, and more.

* * *

## [​](https://novita.ai/docs/guides/llm-vision\#api-usage-guide)  API Usage Guide

To invoke a Vision-Language Model, use the `/chat/completions` endpoint with both image and text inputs.

### [​](https://novita.ai/docs/guides/llm-vision\#image-detail-parameter)  Image Detail Parameter

Use the `detail` field to control image resolution. The following modes are available:

- `high`: High resolution, preserves more detail—ideal for precision tasks.
- `low`: Low resolution, faster response—suitable for real-time usage.
- `auto`: Automatically selects the appropriate mode.

* * *

### [​](https://novita.ai/docs/guides/llm-vision\#example-message-format)  Example Message Format

#### [​](https://novita.ai/docs/guides/llm-vision\#image-via-url)  Image via URL

Copy

```
{
  "role": "user",
  "content": [\
    {\
      "type": "image_url",\
      "image_url": {\
        "url": "https://example.com/image.png",\
        "detail": "high"\
      }\
    },\
    {\
      "type": "text",\
      "text": "Please describe the scene in the image."\
    }\
  ]
}
```

#### [​](https://novita.ai/docs/guides/llm-vision\#image-via-base64)  Image via Base64

Copy

```
{
  "role": "user",
  "content": [\
    {\
      "type": "image_url",\
      "image_url": {\
        "url": "data:image/jpeg;base64,{base64_image}",\
        "detail": "low"\
      }\
    },\
    {\
      "type": "text",\
      "text": "What text is present in the image?"\
    }\
  ]
}
```

* * *

### [​](https://novita.ai/docs/guides/llm-vision\#python-code-encode-image-to-base64)  Python Code: Encode Image to Base64

Copy

```
import base64
from PIL import Image
import io

def image_to_base64(image_path):
    with Image.open(image_path) as img:
        buffered = io.BytesIO()
        img.save(buffered, format="JPEG")
        return base64.b64encode(buffered.getvalue()).decode('utf-8')

base64_image = image_to_base64("path/to/your/image.jpg")
```

* * *

## [​](https://novita.ai/docs/guides/llm-vision\#multi-image-input)  Multi-Image Input

The API supports sending multiple images alongside text input. For best results, we recommend sending no more than two images per request.

Copy

```
{
  "role": "user",
  "content": [\
    {\
      "type": "image_url",\
      "image_url": {\
        "url": "https://example.com/image1.png"\
      }\
    },\
    {\
      "type": "image_url",\
      "image_url": {\
        "url": "data:image/jpeg;base64,{base64_image}"\
      }\
    },\
    {\
      "type": "text",\
      "text": "Compare the common features of these two images."\
    }\
  ]
}
```

* * *

## [​](https://novita.ai/docs/guides/llm-vision\#supported-models)  Supported Models

The following Vision-Language Models are currently supported on the Novita platform:

Visit the [Model Hub](https://novita.ai/models-console/library) for a complete and up-to-date list of available models.

* * *

## [​](https://novita.ai/docs/guides/llm-vision\#billing)  Billing

Image input is tokenized and counted toward billing together with text.

- Each model uses a different image-to-token conversion method.
- Refer to each model’s pricing page for detailed billing and token policy.

* * *

## [​](https://novita.ai/docs/guides/llm-vision\#api-call-examples)  API Call Examples

### [​](https://novita.ai/docs/guides/llm-vision\#single-image-description)  Single Image Description

Copy

```
from openai import OpenAI

client = OpenAI(api_key="YOUR_KEY", base_url="https://api.novita.ai/openai")

response = client.chat.completions.create(
    model="qwen/qwen2.5-vl-72b-instruct",
    messages=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "image_url",\
                    "image_url": {\
                        "url": "https://example.com/cityscape.jpg"\
                    }\
                },\
                {\
                    "type": "text",\
                    "text": "Describe the main buildings in the image."\
                }\
            ]\
        }\
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content or "", end="", flush=True)
```

### [​](https://novita.ai/docs/guides/llm-vision\#multi-image-comparison)  Multi-Image Comparison

Copy

```
response = client.chat.completions.create(
    model="qwen/qwen2.5-vl-72b-instruct",
    messages=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "image_url",\
                    "image_url": {\
                        "url": "https://example.com/product1.jpg"\
                    }\
                },\
                {\
                    "type": "image_url",\
                    "image_url": {\
                        "url": "https://example.com/product2.jpg"\
                    }\
                },\
                {\
                    "type": "text",\
                    "text": "Please compare the key differences between these two products."\
                }\
            ]\
        }\
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content or "", end="", flush=True)
```

* * *

## [​](https://novita.ai/docs/guides/llm-vision\#notes-&-troubleshooting)  Notes & Troubleshooting

- Image resolution and clarity significantly affect model performance. Use high-quality sources where possible.
- Base64-encoded images should ideally be under 1MB to avoid timeouts or errors.
- For detailed usage, [book a call with our sales team](https://meet.brevo.com/novita-ai/contact-sales) or contact support if needed.

Was this page helpful?

YesNo

[Large Language Models](https://novita.ai/docs/guides/llm-api) [Recommended Models](https://novita.ai/docs/guides/llm-recommended)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.