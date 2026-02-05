# Novita Skills 🚀

A collaborative AI Agent Skills repository where team members can share and reuse domain knowledge and best practices.

## Quick Start

### Install Team Skills

Use our installer to quickly browse and install all team skills:

```bash
npx skills add jaxzhang-svg/novita-skills --skill novita-skills-installer
```

After installation, the AI agent will automatically know all available team skills and can recommend and install other skills as needed.

### Install Individual Skills

If you already know which skill to install:

```bash
# Install Novita AI documentation (product docs, APIs, design system, etc.)
npx skills add jaxzhang-svg/novita-skills --skill novita-docs
```

### View Available Skills

```bash
# List all skills in the repository
npx skills add jaxzhang-svg/novita-skills -l

# Or install the installer skill and ask the AI agent directly
```

## Team Skills Directory

| Skill | Description | Use Cases |
|-------|-------------|-----------|
| [novita-skills-installer](skills/novita-skills-installer/SKILL.md) | 🔧 Skills Installer | Browse, recommend, and install team skills |
| [novita-docs](skills/novita-docs/SKILL.md) | 🤖 Comprehensive Novita AI Reference | All questions about Novita products, APIs, design systems, etc. |
| [x-crisis-monitor](skills/x-crisis-monitor/SKILL.md) | 🚨 X (Twitter) Crisis Monitoring | Social media crisis monitoring, sentiment management, PR response |

## Create Your Own Skill

Want to create a new skill? Use Anthropic's skill-creator to help you:

```bash
npx skills add https://github.com/anthropics/skills --skill skill-creator
```

After installation, simply ask the AI agent "Help me create a new skill" and it will guide you through the process.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## Discover More Skills

Use Vercel's find-skills to discover excellent skills in the community:

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

After installation, you can ask the AI agent:
- "What React-related skills are available?"
- "Recommend some frontend development skills"
- "Help me find database optimization skills"

## Contributing

Team members are welcome to contribute new skills or improve existing ones!

1. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines
2. Create new skills or improve existing skills
3. Submit a PR and describe your changes
4. Wait for team review