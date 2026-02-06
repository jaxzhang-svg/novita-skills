---
url: "https://novita.ai/docs/guides/codecompanion"
title: "CodeCompanion - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/codecompanion#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

CodeCompanion

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Leverage Novita AI with CodeCompanion.nvim](https://novita.ai/docs/guides/codecompanion#how-to-leverage-novita-ai-with-codecompanion-nvim)
- [Step 1: Generate Your Novita AI API Key](https://novita.ai/docs/guides/codecompanion#step-1-generate-your-novita-ai-api-key)
- [Step 2: Select a Model](https://novita.ai/docs/guides/codecompanion#step-2-select-a-model)
- [Step 3: Configure CodeCompanion](https://novita.ai/docs/guides/codecompanion#step-3-configure-codecompanion)
- [Step 4: Verify Integration](https://novita.ai/docs/guides/codecompanion#step-4-verify-integration)
- [Step 5: Test Novita AI Features](https://novita.ai/docs/guides/codecompanion#step-5-test-novita-ai-features)

CodeCompanion.nvim is a lightweight yet powerful Neovim plugin that connects advanced language models (LLMs) directly to your editor, enabling developers to work smarter and faster. With built-in support for Novita AI’s state-of-the-art models, this integration transforms your workflow by offering intelligent code suggestions, automated debugging, and streamlined refactoring tools.In this comprehensive guide, we’ll walk you through the step-by-step process of setting up Novita AI with CodeCompanion.nvim. Learn how to optimize your Neovim setup and unlock the full power of AI-assisted coding for faster, smarter development.

## [​](https://novita.ai/docs/guides/codecompanion\#how-to-leverage-novita-ai-with-codecompanion-nvim)  How to Leverage Novita AI with CodeCompanion.nvim

You can find the GitHub repository of CodeCompanion.nvim here: [olimorris/codecompanion.nvim](https://github.com/olimorris/codecompanion.nvim).

### [​](https://novita.ai/docs/guides/codecompanion\#step-1-generate-your-novita-ai-api-key)  Step 1: Generate Your Novita AI API Key

1. [Log in](https://novita.ai/user/login) to your Novita AI account.
2. Access the [Key Management Page](https://novita.ai/settings/key-management).
3. Create a new API key and copy it for later use.

### [​](https://novita.ai/docs/guides/codecompanion\#step-2-select-a-model)  Step 2: Select a Model

1. Visit the [Novita AI Model Library](https://novita.ai/models).
2. Choose a model that suits your needs (e.g., `meta-llama/llama-3.1-8b-instruct`).
3. Note down the model name.

### [​](https://novita.ai/docs/guides/codecompanion\#step-3-configure-codecompanion)  Step 3: Configure CodeCompanion

We assume you have already installed the Neovim, and if not, you can install it by referring to the [Neovim Installation Guide](https://github.com/neovim/neovim/blob/master/INSTALL.md).

1. Open your [Neovim](https://neovim.io/) configuration file (`init.lua` or equivalent).

The Neovim configuration file is typically located at: `~/.config/nvim/init.lua` (for macOS or Linux). And you can create this directory and file if they don’t exist yet.

2. Install the CodeCompanion plugin.

You can install the plugin by referring to the [CodeCompanion.nvim Installation Guide](https://codecompanion.olimorris.dev/installation.html).

3. Add the following setup for CodeCompanion in your Neovim configuration file:

Copy

```
require("codecompanion").setup({
    adapters = {
        novita = {
            base_url = "https://api.novita.ai/openai",
            api_key = "<YOUR_API_KEY>", -- Replace with your actual API key
            model = "meta-llama/llama-3.1-8b-instruct" -- Replace with your chosen model
        }
    }
})
```

4. Save and reload Neovim.

### [​](https://novita.ai/docs/guides/codecompanion\#step-4-verify-integration)  Step 4: Verify Integration

1. Run the following command in Neovim:

Copy

```
:checkhealth codecompanion
```

2. Ensure all dependencies are installed and configured correctly.

### [​](https://novita.ai/docs/guides/codecompanion\#step-5-test-novita-ai-features)  Step 5: Test Novita AI Features

1. Open a code file in Neovim and start using CodeCompanion.nvim features such as inline suggestions or chat-based assistance.
2. For example:
   - Use shortcuts to trigger intelligent code completions.
   - Start a chat session by invoking `:CodeCompanionChat` for interactive problem-solving.

Was this page helpful?

YesNo

[LoLLMS WebUI](https://novita.ai/docs/guides/lollmswebui) [Page Assist](https://novita.ai/docs/guides/pageassist)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.