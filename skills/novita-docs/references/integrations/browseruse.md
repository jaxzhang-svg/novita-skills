---
url: "https://novita.ai/docs/guides/browseruse"
title: "Browser Use - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/browseruse#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Browser Use

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Use Browser Use with Novita AI](https://novita.ai/docs/guides/browseruse#how-to-use-browser-use-with-novita-ai)
- [Prerequisites](https://novita.ai/docs/guides/browseruse#prerequisites)
- [Installation](https://novita.ai/docs/guides/browseruse#installation)
- [Obtaining Novita AI LLM API Key](https://novita.ai/docs/guides/browseruse#obtaining-novita-ai-llm-api-key)
- [Environment Setup](https://novita.ai/docs/guides/browseruse#environment-setup)
- [Basic Implementation](https://novita.ai/docs/guides/browseruse#basic-implementation)
- [Creating Your Own Tasks](https://novita.ai/docs/guides/browseruse#creating-your-own-tasks)

Browser Use is an open-source library that empowers LLMs to directly control web browsers, revolutionizing web interaction with advanced automation. By integrating Novita AI’s powerful LLMs and tools, Browser Use enables seamless browsing, content generation, and task automation for an optimized user experience.This tutorial will show you how to integrate the Novita AI API with Browser Use to automate browser interactions.

## [​](https://novita.ai/docs/guides/browseruse\#how-to-use-browser-use-with-novita-ai)  **How to Use Browser Use with Novita AI**

### [​](https://novita.ai/docs/guides/browseruse\#prerequisites)  **Prerequisites**

- Python 3.11 or higher
- A Novita AI API key

### [​](https://novita.ai/docs/guides/browseruse\#installation)  **Installation**

Step 1: Install Browser Use using pip:

Copy

```
pip install browser-use
```

Step 2: Install Playwright (required for browser automation):

Copy

```
playwright install chromium
```

### [​](https://novita.ai/docs/guides/browseruse\#obtaining-novita-ai-llm-api-key)  **Obtaining Novita AI LLM API Key**

- Create an account: Visit [Novita AI’s website](https://novita.ai/) and sign up for an account.
- Generate your API Key: After logging in, navigate to the [Key Management](https://novita.ai/settings/key-management) page to generate your API key. This key is essential to connect Novita AI’s models to Cursor.








![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)


### [​](https://novita.ai/docs/guides/browseruse\#environment-setup)  **Environment Setup**

Create a `.env` file in your project root and add your Novita API key:

Copy

```
NOVITA_API_KEY=your_api_key_here
```

### [​](https://novita.ai/docs/guides/browseruse\#basic-implementation)  Basic Implementation

- Here’s a complete example of using Browser Use with Novita AI’s API:

Copy

```
"""
Web automation using Novita AI and Browser Use
"""

import asyncio
import os

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from pydantic import SecretStr

from browser_use import Agent

# Load environment variables
load_dotenv()

api_key = os.getenv('NOVITA_API_KEY', '')
if not api_key:
    raise ValueError('NOVITA_API_KEY is not set')

async def run_search():
    agent = Agent(
        task=(
            '1. Go to https://www.reddit.com/r/LocalLLaMA '
            "2. Search for 'browser use' in the search bar "
            '3. Click on first result '
            '4. Return the first comment'
        ),
        llm=ChatOpenAI(
            base_url='https://api.novita.ai/openai',
            model='deepseek/deepseek-v3-0324',
            api_key=SecretStr(api_key),
        ),
        use_vision=False,
    )

    await agent.run()

if __name__ == '__main__':
    asyncio.run(run_search())
```

### [​](https://novita.ai/docs/guides/browseruse\#creating-your-own-tasks)  **Creating Your Own Tasks**

- You can customize the `task` parameter to perform a wide variety of web tasks:

Copy

```
task="Compare the price of gpt-4o and DeepSeek-V3"
```

- For more complex tasks, you might want to enable vision capabilities:

Copy

```
agent = Agent(
    task="Find and summarize the latest news about AI on TechCrunch",
    llm=ChatOpenAI(
        base_url='https://api.novita.ai/openai',
        model='deepseek/deepseek-v3-0324',
        api_key=SecretStr(api_key),
    ),
    use_vision=True,
)
```

Was this page helpful?

YesNo

[DeepSearcher](https://novita.ai/docs/guides/deepsearcher) [OWL](https://novita.ai/docs/guides/owl)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Novita AI key management](https://mintlify.s3.us-west-1.amazonaws.com/novitaai/images/third-party/dify-1.png)