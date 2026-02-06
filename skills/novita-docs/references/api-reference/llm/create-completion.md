---
url: "https://novita.ai/docs/api-reference/model-apis-llm-create-completion"
title: "Create completion - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM API

Create completion

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

Create completion

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/completions \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "model": "<string>",
  "prompt": "<string>",
  "max_tokens": 123,
  "stream": {},
  "stream_options": {
    "include_usage": true
  },
  "n": {},
  "seed": {},
  "frequency_penalty": {},
  "presence_penalty": {},
  "repetition_penalty": {},
  "stop": {},
  "temperature": {},
  "top_p": {},
  "top_k": {},
  "min_p": {},
  "logit_bias": {},
  "logprobs": {},
  "best_of": 123
}
'
```

200

Copy

```
{
  "choices": [\
    {\
      "finish_reason": "<string>",\
      "index": 123,\
      "logprobs": {\
        "text_offset": [\
          {}\
        ],\
        "token_logprobs": [\
          {}\
        ],\
        "tokens": [\
          {}\
        ],\
        "top_logprobs": [\
          {\
            "{key}": 123\
          }\
        ]\
      },\
      "text": "<string>"\
    }\
  ],
  "created": 123,
  "id": "<string>",
  "model": "<string>",
  "object": "<string>",
  "usage": {
    "completion_tokens": 123,
    "prompt_tokens": 123,
    "total_tokens": 123
  }
}
```

POST

https://api.novita.ai

/

openai

/

v1

/

completions

Try it

Create completion

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/openai/v1/completions \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "model": "<string>",
  "prompt": "<string>",
  "max_tokens": 123,
  "stream": {},
  "stream_options": {
    "include_usage": true
  },
  "n": {},
  "seed": {},
  "frequency_penalty": {},
  "presence_penalty": {},
  "repetition_penalty": {},
  "stop": {},
  "temperature": {},
  "top_p": {},
  "top_k": {},
  "min_p": {},
  "logit_bias": {},
  "logprobs": {},
  "best_of": 123
}
'
```

200

Copy

```
{
  "choices": [\
    {\
      "finish_reason": "<string>",\
      "index": 123,\
      "logprobs": {\
        "text_offset": [\
          {}\
        ],\
        "token_logprobs": [\
          {}\
        ],\
        "tokens": [\
          {}\
        ],\
        "top_logprobs": [\
          {\
            "{key}": 123\
          }\
        ]\
      },\
      "text": "<string>"\
    }\
  ],
  "created": 123,
  "id": "<string>",
  "model": "<string>",
  "object": "<string>",
  "usage": {
    "completion_tokens": 123,
    "prompt_tokens": 123,
    "total_tokens": 123
  }
}
```

Creates a completion for the provided prompt and parameters.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-content-type)

Content-Type

string

required

Enum: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-model)

model

string

required

The name of the model to use.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-prompt)

prompt

string

required

The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-max-tokens)

max\_tokens

integer

The maximum number of tokens that can be generated in the completion.The token count of your prompt plus max\_tokens cannot exceed the model’s context length.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-stream)

stream

boolean \| null

default:false

Whether to stream back partial progress. If set, tokens will be sent as data-only server-sent events (SSE) as they become available, with the stream terminated by a `data: [DONE]` message.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-stream-options)

stream\_options

object \| null

Options for streaming response. Only set this when you set stream: true.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-include-usage)

include\_usage

boolean

If set, an additional chunk will be streamed before the data: \[DONE\] message. The usage field on this chunk shows the token usage statistics for the entire request, and the choices field will always be an empty array. All other chunks will also include a usage field, but with a null value.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-n)

n

integer \| null

default:1

How many completions to generate for each prompt.Note: Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for max\_tokens and stop.Required range: `1 < x < 128`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-seed)

seed

integer \| null

If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-frequency-penalty)

frequency\_penalty

number \| null

default:0

Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model’s likelihood to repeat the same line verbatim.Reasonable value is around 0.1 to 1 if the aim is to just reduce repetitive samples somewhat. If the aim is to strongly suppress repetition, then one can increase the coefficients up to 2, but this can noticeably degrade the quality of samples. Negative values can be used to increase the likelihood of repetition.See also presence\_penalty for penalizing tokens that have at least one appearance at a fixed rate.Required range: `-2 < x < 2`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-presence-penalty)

presence\_penalty

number \| null

default:0

Positive values penalize new tokens based on whether they appear in the text so far, increasing the model’s likelihood to talk about new topics.Reasonable value is around 0.1 to 1 if the aim is to just reduce repetitive samples somewhat. If the aim is to strongly suppress repetition, then one can increase the coefficients up to 2, but this can noticeably degrade the quality of samples. Negative values can be used to increase the likelihood of repetition.See also `frequency_penalty` for penalizing tokens at an increasing rate depending on how often they appear.Required range: `-2 < x < 2`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-repetition-penalty)

repetition\_penalty

number \| null

Applies a penalty to repeated tokens to discourage or encourage repetition. A value of 1.0 means no penalty, allowing free repetition. Values above 1.0 penalize repetition, reducing the likelihood of repeating tokens. Values between 0.0 and 1.0 reward repetition, increasing the chance of repeated tokens. For a good balance, a value of 1.2 is often recommended. Note that the penalty is applied to both the generated output and the prompt in decoder-only models.Required range: `0 < x < 2`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-stop)

stop

string \| null

Up to 4 sequences where the API will stop generating further tokens. The returned text will contain the stop sequence.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-temperature)

temperature

number \| null

default:1

What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or `top_p` but not both.Required range: `0 < x < 2`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-top-p)

top\_p

number \| null

An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top\_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.Required range: `0 < x <= 1`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-top-k)

top\_k

integer \| null

Top-k sampling is another sampling method where the k most probable next tokens are filtered and the probability mass is redistributed among only those k next tokens. The value of k controls the number of candidates for the next token at each step during text generation.Required range: `1 < x < 128`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-min-p)

min\_p

number \| null

float that represents the minimum probability for a token to be considered, relative to the probability of the most likely token.Required range: `0 <= x <= 1`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-logit-bias)

logit\_bias

map\[string, integer\] \| null

Modify the likelihood of specified tokens appearing in the completion.Accepts a JSON object that maps tokens to an associated bias value from -100 to 100.
Mathematically, the bias is added to the logits generated by the model prior to
sampling. The exact effect will vary per model.For example, by setting `"logit_bias":{"1639": 6}` will increase the likelihood of the token with token ID 1639.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-logprobs)

logprobs

integer \| null

Include the log probabilities on the logprobs most likely output tokens, as well the chosen tokens. For example, if logprobs is 5, the API will return a list of the 5 most likely tokens.The maximum value for logprobs is 5.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-best-of)

best\_of

integer

Defaults to 1. Generates best\_of completions server-side and returns the “best” (the one with the highest log probability per token). Results cannot be streamed.When used with n, best\_of controls the number of candidate completions and n specifies how many to return – best\_of must be greater than n.Note: Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for max\_tokens and stop.

## [​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-choices)

choices

array

required

The list of generated completion choices.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-finish-reason)

finish\_reason

string

required

The reason the model stopped generating tokens. This will be “stop” if the model hit a natural stop point or a provided stop sequence, or “length” if the maximum number of tokens specified in the request was reached.Enum: `stop`, `length`

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-index)

index

integer

required

The index of the completion choice.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-logprobs-1)

logprobs

object

required

The log probabilities of the most likely tokens.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-text-offset)

text\_offset

array

Array of integers representing text offsets.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-token-logprobs)

token\_logprobs

array

Array of numbers representing token log probabilities.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-tokens)

tokens

array

Array of strings representing tokens.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-top-logprobs)

top\_logprobs

array

Array of objects containing top log probabilities.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-key)

{key}

integer

required

Log probability value for the given key.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-text)

text

string

required

The completion response.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-created)

created

integer

required

The Unix time in seconds when the response was generated.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-id)

id

string

required

A unique identifier of the response.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-model-1)

model

string

required

The model used for the completion.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-object)

object

string

required

The object type, which is always `text_completion`.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-usage)

usage

object

required

Usage statistics.For streaming responses, usage field is included in the very last response chunk returned.

Show properties

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-completion-tokens)

completion\_tokens

integer

required

The number of tokens in the generated completion.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-prompt-tokens)

prompt\_tokens

integer

required

The number of tokens in the prompt.

[​](https://novita.ai/docs/api-reference/model-apis-llm-create-completion#param-total-tokens)

total\_tokens

integer

required

The total number of tokens used in the request (prompt + completion).

Was this page helpful?

YesNo

[Create chat completion](https://novita.ai/docs/api-reference/model-apis-llm-create-chat-completion) [Create embeddings](https://novita.ai/docs/api-reference/model-apis-llm-create-embeddings)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.