---
url: "https://novita.ai/docs/guides/sandbox-agent-runtime-advanced"
title: "Advanced Features - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Agent Runtime

Advanced Features

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Table of Contents](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#table-of-contents)
- [Configuration File Reference](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#configuration-file-reference)
- [.novita-agent.yaml Structure](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#novita-agent-yaml-structure)
- [Modifying Configuration](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#modifying-configuration)
- [Modifying CPU and Memory Settings](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#modifying-cpu-and-memory-settings)
- [Modifying Environment Variables](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#modifying-environment-variables)
- [Redeploy to Apply Configuration Changes](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#redeploy-to-apply-configuration-changes)
- [Environment Variables Management](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#environment-variables-management)
- [Method 1: Define in Configuration File (CLI invocation only)](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#method-1-define-in-configuration-file-cli-invocation-only)
- [Method 2: Pass Dynamically via SDK](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#method-2-pass-dynamically-via-sdk)
- [Streaming Responses](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#streaming-responses)
- [Implementing Streaming with Synchronous Generators](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#implementing-streaming-with-synchronous-generators)
- [Implementing Streaming with Async Generators](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#implementing-streaming-with-async-generators)
- [LangChain Streaming Response Example](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#langchain-streaming-response-example)
- [Invoking a Streaming Agent](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#invoking-a-streaming-agent)
- [Version Management](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#version-management)
- [Deploying a New Agent Version](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#deploying-a-new-agent-version)
- [Health Checks](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#health-checks)
- [Default Health Check Endpoint](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#default-health-check-endpoint)
- [Custom Health Checks](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#custom-health-checks)
- [Supported Health Check Statuses](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#supported-health-check-statuses)
- [Multi-turn Conversations](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#multi-turn-conversations)
- [Using Session ID for Multi-turn Conversations](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#using-session-id-for-multi-turn-conversations)
- [Example Projects](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#example-projects)
- [Project Repository](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#project-repository)

This document covers advanced features and best practices for Novita Agent Runtime.

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#table-of-contents)  Table of Contents

- [Configuration File Reference](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#configuration-file-reference)
- [Environment Variables Management](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#environment-variables-management)
- [Streaming Responses](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#streaming-responses)
- [Version Management](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#version-management)
- [Health Checks](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#health-checks)
- [Multi-turn Conversations](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#multi-turn-conversations)
- [Example Projects](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced#example-projects)

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#configuration-file-reference)  Configuration File Reference

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#novita-agent-yaml-structure)  .novita-agent.yaml Structure

The `.novita-agent.yaml` configuration file uses Kubernetes-style YAML format:

Copy

```
apiVersion: v1
kind: Agent
metadata:
  name: my-agent              # Agent name (must consist of lowercase letters, numbers, and hyphens only)
  version: 1.0.0              # Agent version (semantic versioning)
  author: dev@example.com     # Author email (required)
  description: My AI Agent    # Agent description (optional)
  created: '2025-10-23T10:30:00Z'  # Creation time (auto-generated)

spec:
  entrypoint: app.py          # Python entry file (must be .py file)

  # Environment variables configuration (optional)
  envVars:
    MODEL_NAME: deepseek/deepseek-v3-0324
    TEMPERATURE: '0.7'

  # Runtime configuration (optional, applied to the built sandbox template)
  runtime:
    timeout: 300              # Startup timeout in seconds (1-3600, default 300)
    memory_limit: 1Gi         # Memory limit (supports "512Mi", "1Gi", etc.)
    cpu_limit: '1'            # CPU limit (supports "1", "1000m", etc.)

# Status field (maintained by the system, should not be modified manually by users)
status:
  phase: deployed             # Current phase: pending/building/deployed/failed
  agent_id: agent-xxxxx       # Agent ID (auto-generated after deployment)
  last_deployed: '2025-10-23T10:35:00Z'  # Last deployment time
  build_id: build_xyz789      # Build ID (auto-generated after deployment)
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#modifying-configuration)  Modifying Configuration

#### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#modifying-cpu-and-memory-settings)  Modifying CPU and Memory Settings

Modify resource configuration under `spec.runtime` in `.novita-agent.yaml`:

Copy

```
spec:
  runtime:
    # CPU configuration
    cpu_limit: '2'        # 2 CPU cores
    # Memory configuration
    memory_limit: 2Gi     # 2 GB memory
```

#### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#modifying-environment-variables)  Modifying Environment Variables

The `spec.envVars` in `.novita-agent.yaml` is only used for the CLI’s `agent invoke` command and will not be passed to the deployed sandbox template.Modify environment variables under `spec.envVars` in `.novita-agent.yaml`:

Copy

```
spec:
  envVars:
    # LLM configuration
    MODEL_NAME: deepseek/deepseek-v3-0324
    TEMPERATURE: '0.7'
```

**Note**:

- ⚠️ **Do not store sensitive information** (such as API Keys) in `.novita-agent.yaml`
- You can also pass environment variables via the `--env` parameter when running the `agent invoke` command

#### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#redeploy-to-apply-configuration-changes)  Redeploy to Apply Configuration Changes

After modifying resource specifications in `.novita-agent.yaml`, redeploy is required:

Copy

```
# Redeploy (creates a new version)
npx novita-sandbox-cli agent launch
```

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#environment-variables-management)  Environment Variables Management

There are several ways to pass environment variables to Agents running in sandbox instances:

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#method-1-define-in-configuration-file-cli-invocation-only)  Method 1: Define in Configuration File (CLI invocation only)

Define environment variables under `spec.envVars` in `.novita-agent.yaml`:

Copy

```
spec:
  envVars:
    MODEL_NAME: deepseek/deepseek-v3-0324
    TEMPERATURE: '0.7'
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#method-2-pass-dynamically-via-sdk)  Method 2: Pass Dynamically via SDK

When invoking an Agent using the SDK’s `invoke_agent_runtime` method, pass them dynamically via the `envVars` parameter:

Copy

```
import os
from novita_sandbox.agent_runtime import AgentRuntimeClient

client = AgentRuntimeClient(api_key=os.getenv("NOVITA_API_KEY"))

response = await client.invoke_agent_runtime(
    agentId="agent-xxxxx",
    payload=payload,
    envVars={
        # Read sensitive information from environment variables
        "NOVITA_API_KEY": os.getenv("NOVITA_API_KEY"),
        "DATABASE_PASSWORD": os.getenv("DATABASE_PASSWORD"),

        # Or pass directly
        "MODEL_NAME": "deepseek/deepseek-v3-0324",
        "TEMPERATURE": "0.7"
    }
)
```

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#streaming-responses)  Streaming Responses

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#implementing-streaming-with-synchronous-generators)  Implementing Streaming with Synchronous Generators

Use Python generators to implement streaming responses:

Copy

```
from novita_sandbox.agent_runtime import AgentRuntimeApp

app = AgentRuntimeApp()

@app.entrypoint
def streaming_agent(request: dict):
    """Synchronous streaming response"""
    prompt = request.get("prompt", "")

    # Use generator to return chunks
    for i, chunk in enumerate(generate_response(prompt)):
        yield {
            "chunk": chunk,
            "type": "content",
            "index": i
        }
    # Send end marker
    yield {"chunk": "", "type": "end"}
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#implementing-streaming-with-async-generators)  Implementing Streaming with Async Generators

Use Python async generators:

Copy

```
import asyncio

@app.entrypoint
async def async_streaming_agent(request: dict):
    """Async streaming response"""
    prompt = request.get("prompt", "")

    async for chunk in async_generate_response(prompt):
        yield {
            "chunk": chunk,
            "type": "content"
        }
    yield {"chunk": "", "type": "end"}
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#langchain-streaming-response-example)  LangChain Streaming Response Example

Complete example using LangChain for streaming responses:

Copy

```
import os
from langchain_openai import ChatOpenAI
from langchain.callbacks.base import BaseCallbackHandler
from novita_sandbox.agent_runtime import AgentRuntimeApp

app = AgentRuntimeApp()

class StreamingHandler(BaseCallbackHandler):
    """Streaming callback handler"""
    def __init__(self):
        self.tokens = []

    def on_llm_new_token(self, token: str, **kwargs):
        self.tokens.append(token)

@app.entrypoint
def langchain_streaming_agent(request: dict):
    """LangChain streaming response"""
    prompt = request.get("prompt", "")

    # Create streaming-enabled LLM
    llm = ChatOpenAI(
        api_key=os.getenv("NOVITA_API_KEY"),
        streaming=True
    )

    # Stream invocation
    for chunk in llm.stream(prompt):
        if chunk.content:
            yield {
                "chunk": chunk.content,
                "type": "content"
            }
    yield {"chunk": "", "type": "end"}
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#invoking-a-streaming-agent)  Invoking a Streaming Agent

Invoke a streaming Agent using the SDK:

Copy

```
import asyncio
import json
import os
from novita_sandbox.agent_runtime import AgentRuntimeClient

async def call_streaming_agent():
    client = AgentRuntimeClient(api_key=os.getenv("NOVITA_API_KEY"))

    payload = json.dumps({
        "prompt": "Tell me a story"
    }).encode()

    response = await client.invoke_agent_runtime(
        agentId="agent-xxxxx",
        payload=payload
    )

    # Process streaming response
    print("Streaming response:")
    print(response)
```

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#version-management)  Version Management

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#deploying-a-new-agent-version)  Deploying a New Agent Version

Modify the version number and deploy a new version:

Copy

```
# Modify version number
npx novita-sandbox-cli agent configure --agent-version 1.1.0

# Deploy new version
npx novita-sandbox-cli agent launch
```

After successful deployment, a new `agent_id` is generated. Each deployment generates a unique `agent_id` that corresponds to a specific version.

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#health-checks)  Health Checks

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#default-health-check-endpoint)  Default Health Check Endpoint

AgentRuntimeApp automatically provides a `/ping` health check endpoint:

Copy

```
from novita_sandbox.agent_runtime import AgentRuntimeApp

app = AgentRuntimeApp()

# Default health check automatically responds with {"status": "Healthy"}
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#custom-health-checks)  Custom Health Checks

Use the `@app.ping` decorator to customize health check logic:

Copy

```
@app.ping
def custom_health_check():
    """Custom health check"""
    # Check dependent services
    db_ok = check_database_connection()
    llm_ok = check_llm_service()

    if db_ok and llm_ok:
        return {"status": "Healthy"}
    elif db_ok or llm_ok:
        return {"status": "HealthyBusy"}  # Partially available
    else:
        return {"status": "Unhealthy"}  # Unavailable

def check_database_connection():
    """Check database connection"""
    try:
        # Simulate database check
        return True
    except:
        return False

def check_llm_service():
    """Check LLM service"""
    try:
        # Simulate LLM service check
        return True
    except:
        return False
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#supported-health-check-statuses)  Supported Health Check Statuses

Agents can return the following health statuses:

| Status | Description | HTTP Status Code |
| --- | --- | --- |
| `Healthy` | Agent is fully available | 200 |
| `HealthyBusy` | Agent is partially available (e.g., processing heavy load) | 200 |
| `Unhealthy` | Agent is unavailable | 503 |

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#multi-turn-conversations)  Multi-turn Conversations

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#using-session-id-for-multi-turn-conversations)  Using Session ID for Multi-turn Conversations

Use the `runtimeSessionId` parameter to route multiple requests to the same sandbox instance:

Copy

```
import uuid
import json
import os
from novita_sandbox.agent_runtime import AgentRuntimeClient

async def multi_turn_conversation():
    runtime_session_id = str(uuid.uuid4())
    client = AgentRuntimeClient(api_key=os.getenv("NOVITA_API_KEY"))
    agent_id = "agent-xxxxx"

    # First turn
    response1 = await client.invoke_agent_runtime(
        agentId=agent_id,
        payload=json.dumps({"prompt": "Hello, my name is John"}).encode(),
        runtimeSessionId=runtime_session_id,
    )
    print(f"AI: {response1}")

    # Second turn (sent to the same sandbox instance, Agent remembers the context)
    response2 = await client.invoke_agent_runtime(
        agentId=agent_id,
        payload=json.dumps({"prompt": "What's my name?"}).encode(),
        runtimeSessionId=runtime_session_id,
    )
    print(f"AI: {response2}")  # Should answer "John"
```

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#example-projects)  Example Projects

We provide a complete example project based on LangGraph, demonstrating how to build real AI applications with Novita Agent Runtime.

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-advanced\#project-repository)  Project Repository

🔗 [https://github.com/novitalabs/Novita-CollabHub/tree/main/examples/agent-runtime/agentic-frameworks/langgraph](https://github.com/novitalabs/Novita-CollabHub/tree/main/examples/agent-runtime/agentic-frameworks/langgraph)

Was this page helpful?

YesNo

[Quick Start](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start) [Agent Framework Integration Guide](https://novita.ai/docs/guides/sandbox-agent-runtime-frameworks)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.