---
url: "https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone"
title: "GLM Voice Clone - Documentation"
---

[Skip to main content](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Audio

GLM Voice Clone

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

GLM Voice Clone

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/glm-tts-voice-clone \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "text": "<string>",
  "input": "<string>",
  "audio_url": "<string>",
  "voice_name": "<string>"
}
'
```

200

Copy

```
{
  "voice": "<string>",
  "audio_url": "<string>"
}
```

POST

https://api.novita.ai

/

v3

/

glm-tts-voice-clone

GLM Voice Clone

cURL

Copy

```
curl --request POST \
  --url https://api.novita.ai/v3/glm-tts-voice-clone \
  --header 'Authorization: <authorization>' \
  --header 'Content-Type: <content-type>' \
  --data '
{
  "text": "<string>",
  "input": "<string>",
  "audio_url": "<string>",
  "voice_name": "<string>"
}
'
```

200

Copy

```
{
  "voice": "<string>",
  "audio_url": "<string>"
}
```

Using voice cloning technology to generate speech synthesis with specified voice timbre and text content based on sample audio.

## [​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone\#request-headers)  Request Headers

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-content-type)

Content-Type

string

required

Supports: `application/json`

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-authorization)

Authorization

string

required

Bearer authentication format, for example: Bearer {{API Key}}.

## [​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone\#request-body)  Request Body

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-text)

text

string

Text content of the sample audio, optional

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-input)

input

string

required

Target text content for generating preview audio

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-audio-url)

audio\_url

string

required

URL of the sample audio. Size limit is 10MB, recommended audio duration is between 3 to 30 seconds.

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-voice-name)

voice\_name

string

required

Specify a unique voice name

## [​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone\#response)  Response

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-voice)

voice

string

Voice timbre

[​](https://novita.ai/docs/api-reference/model-apis-glm-tts-voice-clone#param-audio-url-1)

audio\_url

string

URL of the generated preview audio file

Was this page helpful?

YesNo

[GLM Audio to Text](https://novita.ai/docs/api-reference/model-apis-glm-asr) [Merge Face](https://novita.ai/docs/api-reference/model-apis-merge-face)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.