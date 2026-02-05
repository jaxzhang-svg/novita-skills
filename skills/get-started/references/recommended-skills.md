# Recommended Community Skills

## Anthropic Official Skills

High-quality skills officially provided by Anthropic. These are widely used and well-maintained.

### 🎨 Design-Related

| Skill | Description | Downloads |
|-------|-------------|-----------|
| **frontend-design** | Frontend design systems and UI component development | 40.4K |
| **canvas-design** | Canvas design | 4.8K |
| **theme-factory** | Theme design and customization | 4.0K |
| **brand-guidelines** | Brand guidelines and visual standards | 3.6K |
| **algorithmic-art** | Algorithmic art and generative design | 3.6K |

### 🛠️ Development Tools

| Skill | Description | Downloads |
|-------|-------------|-----------|
| **skill-creator** | Create new skills | 20.7K |
| **mcp-builder** | Model Context Protocol builder | 5.5K |
| **webapp-testing** | Web application testing | 5.9K |
| **web-artifacts-builder** | Web component builder | 3.9K |

### 📄 Document Processing

| Skill | Description | Downloads |
|-------|-------------|-----------|
| **pdf** | PDF document processing | 8.8K |
| **pptx** | PowerPoint presentations | 7.3K |
| **xlsx** | Excel spreadsheets | 6.9K |
| **docx** | Word documents | 6.8K |
| **doc-coauthoring** | Collaborative document writing | 4.0K |

### 💬 Communication & Other Utilities

| Skill | Description | Downloads |
|-------|-------------|-----------|
| **internal-comms** | Internal communications | 3.4K |
| **slack-gif-creator** | Slack GIF creation | 3.2K |
| **template-skill** | Skill templates | 3.5K |

## Installation

```bash
# Install a single skill
npx skills add anthropics/skills --skill frontend-design

# Install multiple skills
npx skills add anthropics/skills --skill pdf pptx xlsx docx

# Install all Anthropic skills (not recommended - may be too many)
npx skills add anthropics/skills --skill '*'
```

## Tips for Choosing Skills

- **Start small**: Install only what you need right now
- **Performance**: Keep total installed skills under 50 for optimal performance
- **Categories**: Choose by your work focus:
  - Frontend developers → frontend-design, canvas-design
  - Backend developers → mcp-builder, webapp-testing
  - Content creators → pdf, pptx, docx, xlsx
  - Designers → brand-guidelines, theme-factory, algorithmic-art

## Discover More

Browse [skills.sh](https://skills.sh/) to discover more community skills, or use:

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

Then ask your AI agent to help you find skills relevant to your needs.
