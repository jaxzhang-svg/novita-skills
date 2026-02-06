---
url: "https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start"
title: "Quick Start - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Agent Runtime

Quick Start

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Table of Contents](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#table-of-contents)
- [Overview](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#overview)
- [Prerequisites](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#prerequisites)
- [Step 1: Integrate SDK into Your Agent](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-1-integrate-sdk-into-your-agent)
- [1.1 Create Agent Code](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#1-1-create-agent-code)
- [1.2 Prepare Dependencies File](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#1-2-prepare-dependencies-file)
- [1.3 Local Testing](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#1-3-local-testing)
- [Step 2: Generate Configuration Files with CLI](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-2-generate-configuration-files-with-cli)
- [Step 3: Deploy to Novita AI with One-click](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-3-deploy-to-novita-ai-with-one-click)
- [3.1 Deploy Command](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#3-1-deploy-command)
- [3.2 View Deployment Results](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#3-2-view-deployment-results)
- [Step 4: Invoke Agent via CLI or SDK](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-4-invoke-agent-via-cli-or-sdk)
- [Option 1: Quick Test with CLI](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#option-1-quick-test-with-cli)
- [Option 2: SDK Invocation (Recommended for Production)](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#option-2-sdk-invocation-recommended-for-production)
- [Example Code](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#example-code)
- [FAQ](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#faq)
- [Q1: How do I get the Agent ID?](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#q1-how-do-i-get-the-agent-id)
- [Q2: What if deployment fails?](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#q2-what-if-deployment-fails)
- [Q3: How do I update a deployed Agent?](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#q3-how-do-i-update-a-deployed-agent)
- [Q4: Works locally but fails after deployment?](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#q4-works-locally-but-fails-after-deployment)

This guide will help you **develop, deploy, and invoke your first Agent in 5 minutes**.

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#table-of-contents)  Table of Contents

- [Overview](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#overview)
- [Prerequisites](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#prerequisites)
- [Step 1: Integrate SDK into Your Agent](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-1-integrate-sdk-into-your-agent)
- [Step 2: Generate Configuration Files with CLI](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-2-generate-configuration-files-with-cli)
- [Step 3: Deploy to Novita with One-Click](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-3-deploy-to-novita-with-one-click)
- [Step 4: Invoke Agent via CLI or SDK](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#step-4-invoke-agent-via-cli-or-sdk)
- [FAQ](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start#faq)

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#overview)  Overview

The complete workflow consists of 4 steps:

1. ✅ **Integrate SDK** \- Add decorators to your Agent code
2. ✅ **Configure Agent** \- Generate configuration files using CLI
3. ✅ **Deploy Agent** \- One-click deployment to the cloud
4. ✅ **Invoke Agent** \- Call your Agent using SDK or CLI

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#prerequisites)  Prerequisites

Ensure you have the following prerequisites:

- ✅ Python 3.9+ and Node.js 20+ installed
- ✅ Beta version Python SDK and Node.js CLI installed (see [Installation Guide](https://novita.ai/docs/guides/sandbox-agent-runtime-installation))
- ✅ Novita AI API Key obtained (from the [Console](https://novita.ai/settings/key-management))
- ✅ [Docker](https://www.docker.com/products/docker-desktop/) installed

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#step-1-integrate-sdk-into-your-agent)  Step 1: Integrate SDK into Your Agent

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#1-1-create-agent-code)  1.1 Create Agent Code

Create `app.py` in your project directory:

Copy

```
from novita_sandbox.agent_runtime import AgentRuntimeApp

# Create Agent Runtime application instance
app = AgentRuntimeApp()

# Define Agent entry point with decorator
@app.entrypoint
def my_agent(request: dict) -> dict:
    """
    Agent entry function

    Args:
        request: Request data, which typically contains fields like prompt

    Returns:
        Response data dictionary
    """
    prompt = request.get("prompt", "")

    # Agent business logic
    # You can call LLMs, use Agent frameworks, or implement any custom logic here
    result = f"Received message: {prompt}"

    return {"result": result}

# Local run entry point
if __name__ == "__main__":
    app.run()
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#1-2-prepare-dependencies-file)  1.2 Prepare Dependencies File

Ensure your project root has a `requirements.txt` file with the required dependencies:

Copy

```
novita-sandbox>=1.1.0b1
# Your other dependencies...
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#1-3-local-testing)  1.3 Local Testing

Test locally before deployment:

Copy

```
# Start the Agent service
python app.py
```

In another terminal, test the endpoints:

Copy

```
# Test health check
curl http://localhost:8080/ping

# Test Agent invocation
curl -X POST http://localhost:8080/invocations \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello, Agent!"}'
```

**Expected output**:Health check should return:

Copy

```
{"status": "Healthy"}
```

Agent invocation should return:

Copy

```
{"result": "Received message: Hello, Agent!"}
```

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#step-2-generate-configuration-files-with-cli)  Step 2: Generate Configuration Files with CLI

Use CLI to interactively configure your Agent:

Copy

```
# Make sure environment variables are configured
export NOVITA_API_KEY=your-novita-api-key

# Run configuration command
npx novita-sandbox-cli agent configure
```

Follow the CLI prompts to configure the required information. When complete, the CLI will generate the following files in your project directory:

- `novita.Dockerfile` \- Docker build file
- `.dockerignore` \- Docker ignore file
- `.novita-agent.yaml` \- Agent configuration file

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#step-3-deploy-to-novita-ai-with-one-click)  Step 3: Deploy to Novita AI with One-click

> ⚠️ **Important**: After successful deployment, an `agent_id` will be generated. This is the unique identifier for invoking your Agent—make sure to save it.

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#3-1-deploy-command)  3.1 Deploy Command

Deploy with one-click using CLI:

Copy

```
npx novita-sandbox-cli agent launch
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#3-2-view-deployment-results)  3.2 View Deployment Results

After successful deployment, the `.novita-agent.yaml` file will update the `status` field:

Copy

```
status:
  phase: deployed
  agent_id: agent-xxxx  # ⭐ This is your Agent's unique identifier
  last_deployed: '2025-10-23T10:35:00Z'
  build_id: build_xyz789
```

**Record the `agent_id`—you’ll need it for subsequent invocations.**

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#step-4-invoke-agent-via-cli-or-sdk)  Step 4: Invoke Agent via CLI or SDK

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#option-1-quick-test-with-cli)  Option 1: Quick Test with CLI

Quickly test your Agent using CLI:

Copy

```
npx novita-sandbox-cli agent invoke "Hello, Agent!"
```

**Note**: The CLI automatically reads the Agent ID from the `status.agent_id` field in `.novita-agent.yaml`.**Expected output**:

Copy

```
{"result": "Received message: Hello, Agent!"}
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#option-2-sdk-invocation-recommended-for-production)  Option 2: SDK Invocation (Recommended for Production)

Use the SDK to invoke your Agent in backend services:

#### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#example-code)  Example Code

Copy

```
import asyncio
import json
import os
from novita_sandbox.agent_runtime import AgentRuntimeClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create Agent Runtime client
client = AgentRuntimeClient(
    api_key=os.getenv("NOVITA_API_KEY")
)

async def main():
    # Get from status.agent_id in .novita-agent.yaml after deployment
    agent_id = "agent-xxxx"

    # Prepare request data
    payload = json.dumps({
        "prompt": "Hello, Agent! Tell me something about AI."
    }).encode()

    # Invoke Agent
    print(f"🚀 Invoking agent: {agent_id}")
    response = await client.invoke_agent_runtime(
        agentId=agent_id,
        payload=payload,
        timeout=300
    )

    print(f"✅ Response: {response}")

if __name__ == "__main__":
    asyncio.run(main())
```

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#faq)  FAQ

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#q1-how-do-i-get-the-agent-id)  Q1: How do I get the Agent ID?

After successful deployment, the Agent ID is saved in the `status.agent_id` field of the `.novita-agent.yaml` file:

Copy

```
status:
  agent_id: agent-xxxxx  # Here
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#q2-what-if-deployment-fails)  Q2: What if deployment fails?

1. **Check dependencies file**: Ensure `requirements.txt` contains all dependencies
2. **View detailed logs**: Use the `--verbose` flag
3. **Check network connection**: Ensure you can access the Novita AI Sandbox domain (e.g., `sandbox.novita.ai`)
4. **Verify API Key**: Confirm `NOVITA_API_KEY` is correct

Copy

```
# Show detailed logs
npx novita-sandbox-cli agent launch --verbose
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#q3-how-do-i-update-a-deployed-agent)  Q3: How do I update a deployed Agent?

Modify your code and redeploy:

Copy

```
# Option 1: Create new version (Recommended)
npx novita-sandbox-cli agent configure --agent-version 1.1.0
npx novita-sandbox-cli agent launch

# Option 2: Update existing version
npx novita-sandbox-cli agent launch --update-existing
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start\#q4-works-locally-but-fails-after-deployment)  Q4: Works locally but fails after deployment?

**Possible causes**:

1. Environment variables not passed to sandbox instance
2. Dependency package version inconsistencies
3. File path issues

**Solution**:Pass environment variables to the sandbox instance via the `envVars` parameter:

Copy

```
response = await client.invoke_agent_runtime(
    agentId=agent_id,
    payload=payload,
    envVars={
        "NOVITA_API_KEY": os.getenv("NOVITA_API_KEY"),
        "MODEL_NAME": "deepseek/deepseek-v3-0324"
    }
)
```

Was this page helpful?

YesNo

[Installation](https://novita.ai/docs/guides/sandbox-agent-runtime-installation) [Advanced Features](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.