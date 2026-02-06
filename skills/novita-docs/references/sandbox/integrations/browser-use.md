---
url: "https://novita.ai/docs/guides/sandbox-integrations-browser-use"
title: "BrowserUse Integration with Novita Agent Sandbox - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-integrations-browser-use#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

BrowserUse Integration with Novita Agent Sandbox

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Get Novita API Key](https://novita.ai/docs/guides/sandbox-integrations-browser-use#1-get-novita-api-key)
- [2\. Configure Environment Variables](https://novita.ai/docs/guides/sandbox-integrations-browser-use#2-configure-environment-variables)
- [3\. Install Dependencies](https://novita.ai/docs/guides/sandbox-integrations-browser-use#3-install-dependencies)
- [4\. Example Code](https://novita.ai/docs/guides/sandbox-integrations-browser-use#4-example-code)
- [5\. Run the Agent](https://novita.ai/docs/guides/sandbox-integrations-browser-use#5-run-the-agent)

[BrowserUse](https://github.com/browser-use/browser-use) is a powerful AI browser agent. Combined with the secure isolated environment provided by Novita Agent Sandbox, you can build high-concurrency, multi-task browser AI agents.This document provides detailed instructions on how to run BrowserUse projects based on Novita Agent Sandbox service.The document uses the `browser-chromium` sandbox template released by Novita. If you want to create your own template based on this or view more complete example code, please refer to [here](https://github.com/novitalabs/Novita-CollabHub/tree/main/examples/browser-use).

### [​](https://novita.ai/docs/guides/sandbox-integrations-browser-use\#1-get-novita-api-key)  1\. Get Novita API Key

If you don't have a Novita account, you need to [sign up](https://novita.ai/user/register) first. For details, please refer to [Quick Start](https://novita.ai/docs/guides/quickstart). After signing up, you can create an API key through the [Key Management](https://novita.ai/settings/key-management) page and save it for subsequent steps.

### [​](https://novita.ai/docs/guides/sandbox-integrations-browser-use\#2-configure-environment-variables)  2\. Configure Environment Variables

Before getting started, you need to configure the necessary environment variables:

Bash

Copy

```
export E2B_DOMAIN=sandbox.novita.ai
export NOVITA_API_KEY="<Your Novita AI API Key>"
export LLM_API_KEY="<Your Novita AI API Key>"
export LLM_BASE_URL=https://api.novita.ai/openai
export LLM_MODEL="<Your LLM Model ID>"
```

### [​](https://novita.ai/docs/guides/sandbox-integrations-browser-use\#3-install-dependencies)  3\. Install Dependencies

Install the required Python packages:

Python

Copy

```
pip install browser-use
pip install e2b-code-interpreter
```

### [​](https://novita.ai/docs/guides/sandbox-integrations-browser-use\#4-example-code)  4\. Example Code

agent.py

Copy

```
import asyncio
import os
import time

from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI
from novita_sandbox.code_interpreter import Sandbox

async def screenshot(agent: Agent):
  # Screenshot function
  print("Taking screenshot...")
  page = await agent.browser_session.get_current_page()
  screenshot_bytes = await page.screenshot(full_page=True, type='png')
  # screenshot method returns the binary data of the image, we should save it as a PNG file
  screenshots_dir = os.path.join(".", "screenshots")
  os.makedirs(screenshots_dir, exist_ok=True)
  screenshot_path = os.path.join(screenshots_dir, f"{time.time()}.png")
  with open(screenshot_path, "wb") as f:
    f.write(screenshot_bytes)
  print(f"Screenshot saved to {screenshot_path}")

async def main():
    # Create E2B sandbox instance
    sandbox = Sandbox(
        timeout=600,  # Timeout in seconds
        template="browser-chromium",  # This template contains chromium browser and exposes port 9223 for remote connection
    )

    try:
        # Get Chrome debug port address from sandbox
        host = sandbox.get_host(9223) # Get sandbox port 9223 address
        cdp_url = f"https://{host}"
        print(f"Chrome Debug Protocol URL: {cdp_url}")

        # Create BrowserUse session
        browser_session = BrowserSession(cdp_url=cdp_url)
        await browser_session.start()
        print("BrowserUse session created successfully")

        # Create AI Agent
        agent = Agent(
            task="Go to hackernews and find the top 3 stories",
            llm=ChatOpenAI(
                api_key=os.getenv("LLM_API_KEY"),
                base_url=os.getenv("LLM_BASE_URL"),
                model=os.getenv("LLM_MODEL"),
                temperature=1
            ),
            browser_session=browser_session,
        )

        # Run Agent task
        print("Starting Agent task execution...")
        await agent.run(
            on_step_end=screenshot, # Take screenshot after each step
        )

        # Close browser session
        await browser_session.close()
        print("Task execution completed")

    finally:
        # Clean up sandbox resources
        sandbox.kill()
        print("Sandbox resources cleaned up")

if __name__ == "__main__":
    asyncio.run(main())
```

### [​](https://novita.ai/docs/guides/sandbox-integrations-browser-use\#5-run-the-agent)  5\. Run the Agent

After Installing the dependencies and setting up the environment variables, you can run the example code. You can see the output in the terminal as below if everything goes well. Browser-use is running tasks in the remote browser inside your sandbox.![Output](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/sandbox-browser-use-output.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=e866f446b0c533c1c83885eea9fd09d7)It will generate screenshots like below:![screenshot1](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/sandbox-browser-use-screenshots/1.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=c215fa999969f36f1efba63a680171eb)![screenshot2](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/sandbox-browser-use-screenshots/2.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=ad077beb8faed53288d936f46c2190cc)To run a more complete demo, please refer to [here](https://github.com/novitalabs/Novita-CollabHub/tree/main/examples/browser-use).

Was this page helpful?

YesNo

[Computer use with E2B Desktop](https://novita.ai/docs/guides/sandbox-integrations-e2b-desktop) [Overview](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Output](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/sandbox-browser-use-output.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=732478c29a698d292efbf14b935cd12b)

![screenshot1](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/sandbox-browser-use-screenshots/1.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=d991c497689b22c53e2708ae5da0bb31)

![screenshot2](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/sandbox-browser-use-screenshots/2.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=660972f28f9c686554d0417336136415)