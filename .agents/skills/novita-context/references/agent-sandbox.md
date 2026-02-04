# Agent Sandbox

## Overview

Agent Sandbox is a next-generation runtime infrastructure specifically designed for AI Agents, providing a secure and isolated cloud sandbox environment for executing AI-generated code.

**Explore Now**: https://novita.ai/sandbox

## Features

- **Secure**: Sandboxes have system-level isolation capabilities, ensuring security of data and execution environment within sandbox
- **Fast startup**: Startup time is less than 200ms, with support for large-scale concurrent creation, suitable for AI application scenarios with high concurrency requirements
- **Multi-language execution support**: Supports running code in multiple programming languages including Python, JavaScript, TypeScript, C++, and more
- **Quick pause and resume**: Pause sandbox at any time and resume when needed, with filesystem and process state fully restored
- **Background execution**: Supports background task execution and suitable for scenarios that require waiting for results
- **Easy integration**: Seamlessly integrates with popular AI Agent frameworks and tools

## Scenarios

- AI data analysis and visualization
- Code execution environment for Code Agents
- Computer Use Agent

## Pricing

Agent Sandbox provides per-second billing for CPU and RAM. Storage — encompassing templates, sandbox snapshots, and template snapshots — is subject to daily charges.

**Pricing Details**: https://novita.ai/docs/guides/sandbox-pricing

## Getting Started

Start and manage Agent Sandboxes through SDK or CLI.

**Quick Start**: https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox

### Installing SDKs & CLI
https://novita.ai/docs/guides/sandbox-sdk-and-cli

## Key Capabilities

### Sandbox Lifecycle

- **List sandboxes**: Filter by metadata key value pairs
- **Create sandbox**: Specify CPU, RAM, and other resources
- **Connect to running sandbox**: Control with SDK
- **Pause and resume**: Full state restoration
- **Delete sandbox**: Clean up resources

### Sandbox Commands

- **Run commands**: Execute code in sandbox
- **Streaming output**: Real-time command output
- **Background execution**: Long-running tasks
- **Command result retrieval**: Get execution results

### Filesystem

- **Read & write files**: Manipulate sandbox files
- **Upload data**: Upload files to sandbox
- **Download data**: Download files from sandbox
- **Watch directory**: Monitor file changes

### Sandbox Templates

- **Create custom sandbox**: Build from Dockerfile
- **Customize CPU & RAM**: Configure resources
- **Template versioning**: Manage template versions
- **Ready command**: Define readiness check

### Sandbox Persistence

- **Auto persistence**: Automatic state saving
- **Manual pause/resume**: Control state management

### Sandbox Metadata

Attach arbitrary key-value pairs to sandboxes for organization and filtering.

### Sandbox Metrics

Monitor sandbox performance and resource usage.

### Sandbox Quota Limits

- **CPU**: Supported range: 1-8 vCPU
- **RAM**: Configurable memory allocation
- **Idle timeout**: Configurable idle timeout

## Integrations

### Agent Runtime

Novita Agent Runtime is a lightweight framework for deploying AI Agents quickly and cost-effectively.

**Overview**: https://novita.ai/docs/guides/sandbox-agent-runtime-introduction
**Quick Start**: https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start

### Browser Use Integration

BrowserUse is a powerful AI browser agent. Combined with the secure isolated environment provided by Novita Agent Sandbox, you can build high-concurrency, safe browser automation solutions.

https://novita.ai/docs/guides/sandbox-integrations-browser-use

## CLI Commands

### Spawn Sandbox
https://novita.ai/docs/guides/sandbox-cli-spawn-sandbox

### List Sandboxes
https://novita.ai/docs/guides/sandbox-cli-list-sandboxes

### Shutdown Sandboxes
https://novita.ai/docs/guides/sandbox-cli-shutdown-sandboxes

### Authentication
https://novita.ai/docs/guides/sandbox-cli-auth

## Key Benefits

1. **Security**: System-level isolation for safe code execution
2. **Performance**: <200ms startup time, high concurrency
3. **Flexibility**: Support for multiple programming languages
4. **Cost-efficiency**: Per-second billing, pay only for what you use
5. **State management**: Pause/resume with full state preservation
6. **Integration**: Easy integration with AI agent frameworks

## Use Cases

- Code execution for AI agents
- Data analysis and visualization
- Browser automation
- Long-running background tasks
- Multi-language code execution
- Secure file processing

## Related Documentation

- **Sandbox Console**: https://novita.ai/docs/guides/sandbox-console
- **Sandbox Overview**: https://novita.ai/docs/guides/sandbox-overview
- **Sandbox Pricing**: https://novita.ai/docs/guides/sandbox-pricing
- **Sandbox FAQ**: https://novita.ai/docs/guides/faq#agent-sandbox
