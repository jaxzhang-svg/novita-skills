---
url: "https://novita.ai/docs/guides/claude-code"
title: "Claude Code - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/claude-code#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

Claude Code

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Quick Start](https://novita.ai/docs/guides/claude-code#quick-start)
- [1\. Install Claude Code](https://novita.ai/docs/guides/claude-code#1-install-claude-code)
- [2\. Start your first session](https://novita.ai/docs/guides/claude-code#2-start-your-first-session)
- [3\. Build a web game from scratch](https://novita.ai/docs/guides/claude-code#3-build-a-web-game-from-scratch)
- [4\. Task Results and Preview](https://novita.ai/docs/guides/claude-code#4-task-results-and-preview)
- [5\. Use Git with Claude Code](https://novita.ai/docs/guides/claude-code#5-use-git-with-claude-code)
- [6\. Improve the game](https://novita.ai/docs/guides/claude-code#6-improve-the-game)
- [Try More Workflows](https://novita.ai/docs/guides/claude-code#try-more-workflows)
- [Common Commands](https://novita.ai/docs/guides/claude-code#common-commands)

Claude Code is an AI-powered coding assistance published by Anthropic that provides a terminal interface, allowing developers to delegate complex programming tasks directly from the terminal to Claude Code for completion.Now, Novita provides [Anthropic SDK compatible LLM API services](https://novita.ai/docs/guides/llm-anthropic-compatibility), enabling you to easily use Novita LLM models in Claude Code to complete tasks. Please refer to the guide below to complete the integration process.

## [​](https://novita.ai/docs/guides/claude-code\#quick-start)  Quick Start

### [​](https://novita.ai/docs/guides/claude-code\#1-install-claude-code)  1\. Install Claude Code

Before installing Claude Code, please ensure your local environment has [Node.js 18 or higher](https://nodejs.org/en/download/) installed.

To install Claude Code, run the following command:

Bash

Copy

```
npm install -g @anthropic-ai/claude-code
```

### [​](https://novita.ai/docs/guides/claude-code\#2-start-your-first-session)  2\. Start your first session

import from ‘/snippets/setup-api-key-guide.mdx’;

Please find the list of models currently available for use in Claude Code [here](https://novita.ai/docs/guides/llm-anthropic-compatibility#supported-models).

Open the terminal and set up environment variables as follows:

Bash

Copy

```
# Set the Anthropic SDK compatible API endpoint provided by Novita.
export ANTHROPIC_BASE_URL="https://api.novita.ai/anthropic"
export ANTHROPIC_AUTH_TOKEN="<Novita API Key>"
# Set the model provided by Novita.
export ANTHROPIC_MODEL="moonshotai/kimi-k2-instruct"
export ANTHROPIC_SMALL_FAST_MODEL="moonshotai/kimi-k2-instruct"
```

Next, navigate to your project directory and start Claude Code. You will see the Claude Code prompt inside a new interactive session:

Bash

Copy

```
cd <your-project-directory>
claude .
```

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/init.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=74dd26e7f32565696fc704eba5408e04)

### [​](https://novita.ai/docs/guides/claude-code\#3-build-a-web-game-from-scratch)  3\. Build a web game from scratch

Input your task description, then press `Enter` to start this task.

Bash

Copy

```
> Create a ping-pong web game. Use only HTML, CSS, and JavaScript, try to create some novel content, and the final output should be a single HTML file.
```

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/first-prompt.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=d614b2db042b9a50aa0ef0e779c0e5c9)

Claude Code will analyze your requirements, create a multi-step plan, and automatically begin executing the tasks.

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-plan.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=fa73a52a4bea60c51c995d74b320a238)

After completing each task, Claude Code will mark it as complete and proceed to plan and explain the details of the next task.

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-plan-checklist.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=90b2767ff1313a6c0eb98582a5f89cf4)

### [​](https://novita.ai/docs/guides/claude-code\#4-task-results-and-preview)  4\. Task Results and Preview

After all tasks are completed, you will see the following messages in the terminal:

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=a0b21887d4ed3838a5862c66eb9f905d)

At this point, you can open the `gravity-pong.html` file in your browser to view and play the game.

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result-preview.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=966b3b2260492d703478fa62ad986025)

### [​](https://novita.ai/docs/guides/claude-code\#5-use-git-with-claude-code)  5\. Use Git with Claude Code

Claude Code makes Git operations conversational:

Bash

Copy

```
> what files have I changed?
```

Bash

Copy

```
> commit my changes with a descriptive message
```

You can also prompt for more complex Git operations:

Bash

Copy

```
> create a new branch called feature/quickstart
```

Bash

Copy

```
> show me the last 5 commits
```

Bash

Copy

```
> help me resolve merge conflicts
```

### [​](https://novita.ai/docs/guides/claude-code\#6-improve-the-game)  6\. Improve the game

As we can see, this game needs improvement: the orbs’ position overlaps with the paddle’s position, which affects the gaming experience. Next, we will reposition the orbs to the top-right corner and add game restart functionality.

Bash

Copy

```
> Position the orbs in the top-right corner and support game restart functionality.
```

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result-improved.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=3de002ac40157b151282f7fdd86c0819)

This is the game preview after the improvement:

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result-improved-preview.png?fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=0d43e2a9f61fbe4425763bca41aa4c7e)

## [​](https://novita.ai/docs/guides/claude-code\#try-more-workflows)  Try More Workflows

For reference, the following provides some prompt examples for different workflows:

- Code Refactoring

Bash

Copy

```
> Please refactor the current project using Next.js framework.
```

- Write Unit Tests

Bash

Copy

```
> Please write some unit tests for the pricing policy in the project.
```

- Update Documentation

Bash

Copy

```
> Please update the installation dependencies section in the README.
```

- Code Review

Bash

Copy

```
> Please review the changes and provide optimization suggestions.
```

## [​](https://novita.ai/docs/guides/claude-code\#common-commands)  Common Commands

| Command | Description | Example |
| --- | --- | --- |
| `claude` | Start interactive mode | `claude` |
| `claude "task description"` | Run a one-time task | `claude "fix the build error"` |
| `claude -p "query"` | Run one-off query, then exit | `claude -p "explain this function"` |
| `claude -c` | Continue most recent conversation | `claude -c` |
| `claude -r` | Resume a previous conversation | `claude -r` |
| `claude commit` | Create a Git commit | `claude commit` |
| `/clear` | Clear conversation history | `> /clear` |
| `/help` | View available commands | `> /help` |
| `exit` or Ctrl+C | Exit Claude Code | `> exit` |

Was this page helpful?

YesNo

[Rate limits](https://novita.ai/docs/guides/model-apis-rate-limits) [OpenAI Agents SDK](https://novita.ai/docs/guides/openai-agents-sdk)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/init.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=cae1f2c64728743dc9465645ab233cbd)

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/first-prompt.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=6e840a5e76bc0e7eda3fcfe03bdd3214)

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-plan.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=24ba37f18156c04f3e9a02f06aabe6c9)

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-plan-checklist.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=51cd7c72dcb48f35fa391befe60d4417)

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=382b056d4c220203a295ba4cac80c844)

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result-preview.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=97fedaab82969f9cf6ffd562550b27e3)

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result-improved.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=46d077704078ce1613763da5afd8ea5e)

![](https://mintcdn.com/novitaai/H3Kjvdvlhgt0Aohj/guides/images/claude-code/task-result-improved-preview.png?w=1100&fit=max&auto=format&n=H3Kjvdvlhgt0Aohj&q=85&s=770c69ea22e72b03de48496e9929cbbb)