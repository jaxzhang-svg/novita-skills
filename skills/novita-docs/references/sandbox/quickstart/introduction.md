---
url: "https://novita.ai/docs/guides/sandbox-agent-runtime-introduction"
title: "Overview - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Agent Runtime

Overview

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [What is Novita Agent Runtime?](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#what-is-novita-agent-runtime)
- [Core Components](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#core-components)
- [Deployment Workflow](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#deployment-workflow)
- [Step 1: Develop and Integrate Your Agent](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#step-1-develop-and-integrate-your-agent)
- [Step 2: Configure and Deploy](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#step-2-configure-and-deploy)
- [Step 3: Invoke Agent](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#step-3-invoke-agent)
- [Key Benefits](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction#key-benefits)

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction\#what-is-novita-agent-runtime)  What is Novita Agent Runtime?

Novita Agent Runtime is a lightweight framework for deploying AI Agents that enables you to **deploy AI Agents quickly and cost-effectively**.No need to worry about infrastructure configuration, container orchestration, service exposure, or other complex details—just focus on developing your Agent’s business logic.

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction\#core-components)  Core Components

Novita Agent Runtime is included in the Novita Sandbox SDK and CLI tools:

| Component | Description |
| --- | --- |
| **Novita Sandbox SDK** | Provides decorator-based APIs to expose your Agent as a standard HTTP service, and methods to invoke Agents |
| **Novita Sandbox CLI** | One-click configuration and deployment of Agents to the Novita Agent Sandbox ecosystem |

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction\#deployment-workflow)  Deployment Workflow

The complete deployment and usage workflow consists of three steps:

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction\#step-1-develop-and-integrate-your-agent)  Step 1: Develop and Integrate Your Agent

Integrate the SDK into your Agent code by adding decorators:

Copy

```
from novita_sandbox.agent_runtime import AgentRuntimeApp

app = AgentRuntimeApp()

@app.entrypoint
def my_agent(request: dict):
    # Agent business logic
    return {"result": "..."}
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction\#step-2-configure-and-deploy)  Step 2: Configure and Deploy

Use the CLI tool to configure and deploy to the cloud:

Copy

```
# Configure Agent
novita-sandbox-cli agent configure

# Deploy to cloud
novita-sandbox-cli agent launch
```

- Generates `Dockerfile` and `.novita-agent.yaml` configuration files
- Builds sandbox template and uploads it
- Generates Agent ID (format: `agent_<name>_v<version>`)

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction\#step-3-invoke-agent)  Step 3: Invoke Agent

After successful deployment, you can invoke your Agent via CLI or SDK:**Option 1: Quick test with CLI**

Copy

```
novita-sandbox-cli agent invoke "Hello, Agent!"
```

**Option 2: Invoke via SDK in your application**

Copy

```
import json
from novita_sandbox.agent_runtime import AgentRuntimeClient

client = AgentRuntimeClient(api_key="your-api-key")

# Prepare request data (converted to a JSON string and encoded as bytes)
payload = json.dumps({"prompt": "Hello, Agent!"}).encode()

response = await client.invoke_agent_runtime(
    agentId="agent-xxxxx",
    payload=payload
)
```

**Agent invocation execution flow**:

- Creates an isolated sandbox instance from the sandbox template
- Executes the Agent in an isolated environment
- Returns the processed result

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction\#key-benefits)  Key Benefits

SDK:

- ✅ **Minimal Changes**: Just modify a few lines of code with decorators
- ✅ **Framework Agnostic**: Supports LangChain, LangGraph, CrewAI, and other popular AI frameworks
- ✅ **Streaming Support**: Native streaming responses for real-time LLM generation scenarios
- ✅ **Health Checks**: Built-in health check endpoint with customizable health status

CLI:

- ✅ **Smart Detection**: Auto-detects project structure, entry files, and dependency management files
- ✅ **Auto Build**: Automatically generates Dockerfile and project configuration
- ✅ **Version Management**: Supports multiple versions coexisting with independent deployments
- ✅ **Quick Testing**: Built-in invoke command for rapid deployment verification

Runtime:

- ✅ **Environment Isolation**: Each sandbox instance runs independently without interference
- ✅ **Session Persistence**: Multiple invocations to the same sandbox instance, supporting multi-turn interactive Agents
- ✅ **Secure Sandbox**: Securely isolated sandbox environment with restricted filesystem access

Was this page helpful?

YesNo

[BrowserUse](https://novita.ai/docs/guides/sandbox-integrations-browser-use) [Installation](https://novita.ai/docs/guides/sandbox-agent-runtime-installation)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.