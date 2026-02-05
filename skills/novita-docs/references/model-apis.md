# Model APIs

## Overview

Novita AI deploys state-of-the-art open-source models. Use APIs to access them out of the box!

**Playground**: https://novita.ai/model-api/product/llm-api/playground

## Large Language Models (LLM)

### Model Capabilities

LLMs are built using deep learning and natural language processing techniques. After being trained on massive amounts of text data, they can:

- **Text Generation**: Generate logically coherent content based on context and adjust output style
- **Language Understanding**: Accurately understand input text and support context-aware conversation
- **Text Translation**: Cross-lingual understanding and generation
- **Knowledge-based Q&A**: Answer questions across domains like culture, science, and history
- **Code Understanding & Generation**: Understand and generate code (Python, Java, C++), detect errors, and offer suggestions
- **Text Classification & Summarization**: Understand complex sentences, categorize and extract information, and summarize key points

### Model Selection

Browse supported models on the LLM Service Page: https://novita.ai/models

### API Integration

Novita AI provides fast, reliable APIs for open-source models, combining the ease of top-tier LLM APIs with the flexibility and cost-efficiency of open source LLMs.

**Base URL**: `https://api.novita.ai/openai`

Supported APIs:
- **ChatCompletion**: Supports both streaming and non-streaming modes
- **Completion**: Also supports streaming and non-streaming modes

**OpenAI Compatible**: If using OpenAI's API, simply set base URL to `api.novita.ai/openai`, set your API key, and update the model name.

### Python Example (ChatCompletion)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.novita.ai/openai",
    api_key="<Your API Key>",
)

model = "deepseek/deepseek-r1"
stream = True  # or False
max_tokens = 512

chat_completion_res = client.chat.completions.create(
    model=model,
    messages=[
        {
            "role": "system",
            "content": "you are a professional AI helper.",
        },
        {
            "role": "user",
            "content": "Where can the example of GPU provided by novita ai be adapted?",
        }
    ],
    stream=stream,
    max_tokens=max_tokens,
)

if stream:
    for chunk in chat_completion_res:
        print(chunk.choices[0].delta.content or "", end="")
else:
    print(chat_completion_res.choices[0].message.content)
```

### Curl Example (ChatCompletion)

```bash
export API_KEY="<Your API Key>"

curl "https://api.novita.ai/openai/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "deepseek/deepseek-r1",
    "messages": [
        {
            "role": "system",
            "content": "you are a professional AI helper."
        },
       {
            "role": "user",
            "content": "Where can the example of GPU provided by novita ai be adapted?"
        }
    ],
    "max_tokens": 512
  }'
```

### Key Parameters

#### Base Parameters

- **model**: The target LLM. See full list on LLM Service Page

#### Messages (ChatCompletion Only)

Each message belongs to one character:
- **content**: Message content
- **role**:
  - `system`: Set the AI's role, telling model its role or behavior
  - `user`: The user's input
  - `assistant`: The AI's response (users can give examples of output)
- **name** (optional): Separating message writers with same role

#### Prompt (ChatCompletion Only)

Instruction text for generating a completion, telling the model the task clearly.

#### Output Control

**Diversity of Text** (set only one):
- **temperature**: Controls randomness. Higher = more creative
- **top_p**: Nucleus sampling. Controls cumulative probability
- **top_k**: Limits candidate token count

**Repetition Penalties**:
- **presence_penalty**: Controls repeated tokens
- **frequency_penalty**: Control token frequency
- **repetition_penalty**: Penalizes or encourages repetition

#### Output Limits

- **max_tokens**: Max tokens in one response
- **stream**: Whether to use streaming (true/false)
- **stop**: Strings that will terminate generation when encountered

## Image, Audio and Video Generation Models

Explore the Image, Audio and Video Generation Models in the Playground:
https://novita.ai/model-api/playground

API Reference: https://novita.ai/docs/api-reference/model-apis-introduction

### Key APIs

- **txt2img**: Text to Image generation
- **img2img**: Image to Image generation
- **txt2video**: Text to Video generation
- **txt2speech**: Text to Speech conversion
- And many more specialized models (Flux, Kling, Wan, etc.)

### Rate Limits

The IPM (Images Per Minute) limit controls the number of images that can be generated per minute. Default IPM values vary by model.

## LLM Features

### Function Calling

Function Calling empowers AI models to interact with external tools and APIs, enabling them to perform specific actions and access real-time information.

### Structured Outputs

Structured Outputs enables the model to generate responses that adhere to your supplied JSON Schema.

### Prompt Cache

Lower cost - repeated prompts no longer require full inference. Only minimal cache token fees are charged.

Lower latency - cached results are returned instantly.

### Batch Inference

The Batch API is a cost-effective solution when immediate inference results are unnecessary. It provides higher rate limits than online calls.

### Vision Language Models

Models that can understand and process both text and images.

### Reasoning Models

Models designed for complex problem-solving requiring step-by-step logic.

### Anthropic SDK Compatibility

Novita AI's LLM API is compatible with Anthropic's SDK for easy migration.

## Recommended Models

See the recommended models guide for curated suggestions based on Novita internal testing and community feedback.

## Model List

Browse 200+ models: https://novita.ai/models

## Related Documentation

- **LLM API**: https://novita.ai/docs/guides/llm-api
- **Vision Models**: https://novita.ai/docs/guides/llm-vision
- **Reasoning Models**: https://novita.ai/docs/guides/llm-reasoning
- **Function Calling**: https://novita.ai/docs/guides/llm-function-calling
- **Structured Outputs**: https://novita.ai/docs/guides/llm-structured-outputs
- **Prompt Cache**: https://novita.ai/docs/guides/llm-prompt-cache
- **Batch API**: https://novita.ai/docs/guides/llm-batch-api
- **Rate Limits**: https://novita.ai/docs/guides/llm-rate-limits
- **Recommended Models**: https://novita.ai/docs/guides/llm-recommended
