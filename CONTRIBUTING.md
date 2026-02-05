# Contributing Guide

Welcome to contribute to the Novita Skills repository!

## Quick Start

### 1. Create a Skill

Use Anthropic's skill-creator to help you create:

```bash
npx skills add https://github.com/anthropics/skills --skill skill-creator
```

Then ask the AI agent "Help me create a new skill".

### 2. Skill Location

**Important**: All skills must be created in the `skills/` directory:

```
skills/
├── your-skill-name/
│   ├── SKILL.md          # Required
│   ├── references/       # Optional
│   └── assets/          # Optional
```

### 3. Submission Process

```bash
# 1. Fork and clone the repository
git clone https://github.com/<your-username>/novita-skills.git

# 2. Create a new branch
git checkout -b skill/your-skill-name

# 3. Add your skill to the skills/ directory

# 4. Commit and push
git add skills/your-skill-name/
git commit -m "feat: add your-skill-name skill"
git push origin skill/your-skill-name

# 5. Create a Pull Request on GitHub
```

## Basic Skill Requirements

- ✅ Must have a `SKILL.md` file
- ✅ YAML frontmatter contains `name` and `description`
- ✅ Description clearly explains use cases
- ✅ Includes a "When to Use" section
- ✅ Code examples are complete and runnable

## Get Help

- 💬 Open an issue in the repository
- 📖 Refer to existing skills as examples
- 🤝 Contact team members

---

Thank you for your contribution! 🎉
