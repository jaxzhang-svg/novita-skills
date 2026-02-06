---
url: "https://novita.ai/docs/guides/sandbox-agent-runtime-installation"
title: "Installation - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-agent-runtime-installation#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Agent Runtime

Installation

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Install Python SDK with pip](https://novita.ai/docs/guides/sandbox-agent-runtime-installation#install-python-sdk-with-pip)
- [Install Node.js CLI](https://novita.ai/docs/guides/sandbox-agent-runtime-installation#install-node-js-cli)
- [Option 1: Run with npx (Recommended)](https://novita.ai/docs/guides/sandbox-agent-runtime-installation#option-1-run-with-npx-recommended)
- [Option 2: Global Installation](https://novita.ai/docs/guides/sandbox-agent-runtime-installation#option-2-global-installation)

This feature is currently in **beta**. You need to install the beta versions of both the Novita Sandbox Python SDK and the CLI tool:

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-installation\#install-python-sdk-with-pip)  Install Python SDK with pip

Use the `--pre` flag to install the latest beta version:

Copy

```
pip install --pre novita-sandbox
```

* * *

## [​](https://novita.ai/docs/guides/sandbox-agent-runtime-installation\#install-node-js-cli)  Install Node.js CLI

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-installation\#option-1-run-with-npx-recommended)  Option 1: Run with npx (Recommended)

Install the beta CLI locally in your project directory using `npm`, then run it with `npx`. This avoids polluting your global environment with the beta version.

Copy

```
# Install the latest beta version CLI
npm install novita-sandbox-cli@beta

# First, complete authentication
npx novita-sandbox-cli auth login

# Run agent configure command to configure your Agent
npx novita-sandbox-cli agent configure
```

### [​](https://novita.ai/docs/guides/sandbox-agent-runtime-installation\#option-2-global-installation)  Option 2: Global Installation

If you use the CLI frequently, you can install it globally:

Copy

```
# Install the latest beta version
npm install -g novita-sandbox-cli@beta
```

After installation, you can use the command directly:

Copy

```
novita-sandbox-cli agent configure
```

Was this page helpful?

YesNo

[Overview](https://novita.ai/docs/guides/sandbox-agent-runtime-introduction) [Quick Start](https://novita.ai/docs/guides/sandbox-agent-runtime-quick-start)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.