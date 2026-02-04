# novita-skills

User-defined skills for the novita team, published to [skills.sh](https://skills.sh).

## Project Structure

```
novita-skills/
├── .agents/
│   └── skills/           # Skill definitions
│       └── find-skills/
│           └── SKILL.md  # Skill documentation
├── .opencode/
│   ├── skills/           # Symlinks to skills
│   │   └── find-skills -> ../../.agents/skills/find-skills
│   └── package.json      # Project dependencies
└── README.md
```

## Adding a New Skill

1. Create a new skill directory in `.agents/skills/`:
```bash
mkdir -p .agents/skills/my-skill
```

2. Create a `SKILL.md` file in the skill directory with:
   - Frontmatter with `name` and `description`
   - Detailed documentation of the skill

3. Create a symlink in `.opencode/skills/`:
```bash
ln -s ../../.agents/skills/my-skill .opencode/skills/my-skill
```

## Publishing to skills.sh

This repository is configured to publish skills to [skills.sh](https://skills.sh).

To publish your skills:

1. Commit and push your changes to this repository
2. The skills will be available at: `novita-skills/skill-name`

## Using Skills

Install a skill from this repository:

```bash
npx skills add novita-skills/skill-name
```

## Current Skills

- `find-skills` - Helps users discover and install agent skills

## Resources

- [skills.sh Documentation](https://skills.sh)
- [Skills CLI](https://github.com/your-org/skills-cli)
