---
url: "https://novita.ai/docs/guides/ai-gradio"
title: "AI Gradio  - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/ai-gradio#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

AI Gradio

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Install ai-gradio](https://novita.ai/docs/guides/ai-gradio#how-to-install-ai-gradio)
- [How to use Novita AI’s LLMs in ai-gradio](https://novita.ai/docs/guides/ai-gradio#how-to-use-novita-ai%E2%80%99s-llms-in-ai-gradio)
- [Step 1: Set up environment variables.](https://novita.ai/docs/guides/ai-gradio#step-1-set-up-environment-variables)
- [Step 2: Modify the app.py entry file.](https://novita.ai/docs/guides/ai-gradio#step-2-modify-the-app-py-entry-file)
- [Step 3: Run the app.py file with python.​](https://novita.ai/docs/guides/ai-gradio#step-3-run-the-app-py-file-with-python-%E2%80%8B)

AI-gradio simplifies AI development with its intuitive Python package, built on Gradio’s framework. Pairing it with Novita AI unlocks powerful capabilities through cutting-edge large language models, which deliver exceptional value through Novita AI’s reliable APIs, optimized performance, and cost-effective pricing—all within AI-gradio’s user-friendly interface.This step-by-step guide will access Novita AI’s LLMs API on ai-gradio including methods to install ai-gradio and use Novita AI’s LLMs in ai-gradio.

## [​](https://novita.ai/docs/guides/ai-gradio\#how-to-install-ai-gradio)  How to Install ai-gradio

Copy

```
# Install core package
pip install ai-gradio

# Install with specific provider support
pip install 'ai-gradio[openai]'     # OpenAI support
pip install 'ai-gradio[gemini]'     # Google Gemini support
pip install 'ai-gradio[anthropic]'  # Anthropic Claude support
pip install 'ai-gradio[groq]'       # Groq support

# Install all providers
pip install 'ai-gradio[all]'
```

## [​](https://novita.ai/docs/guides/ai-gradio\#how-to-use-novita-ai%E2%80%99s-llms-in-ai-gradio)  How to use Novita AI’s LLMs in ai-gradio

### [​](https://novita.ai/docs/guides/ai-gradio\#step-1-set-up-environment-variables)  Step 1: Set up environment variables.

- Set NOVITA\_API\_KEY to your Novita API key.

Copy

```
export NOVITA_API_KEY=<your api key>
```

### [​](https://novita.ai/docs/guides/ai-gradio\#step-2-modify-the-app-py-entry-file)  Step 2: Modify the app.py entry file.

Copy

```
import gradio as gr
import ai_gradio
gr.load(
    name='novita:deepseek/deepseek-r1',
    src=ai_gradio.registry,
).launch()
```

### [​](https://novita.ai/docs/guides/ai-gradio\#step-3-run-the-app-py-file-with-python-%E2%80%8B)  Step 3: Run the app.py file with python. [​](https://novita.ai/docs/guides/third-party-langflow-guide\#accessing-novita-ai-llm-api-on-langflow)

Was this page helpful?

YesNo

[LobeChat](https://novita.ai/docs/guides/lobechat) [Langfuse](https://novita.ai/docs/guides/langfuse)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.