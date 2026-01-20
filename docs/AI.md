# AI-Native Development with Criztec

This project is optimized for AI-native development. We use the **Model Context Protocol (MCP)** to ensure AI agents have access to the latest Astro documentation and project context.

## 1. Astro Docs MCP Server

To give your AI tools (Cursor, Claude Code, Copilot) the best knowledge of Astro, add the official Astro Docs MCP server.

- **Name**: Astro Docs
- **URL**: `https://mcp.docs.astro.build/mcp`
- **Type**: Streamable HTTP

### Cursor Setup

1. Open Cursor Settings -> Models -> MCP.
2. Click **+ Add New MCP Server**.
3. Name: `Astro Docs`, Type: `http`, URL: `https://mcp.docs.astro.build/mcp`.

### Claude Code Setup

Run the following command in your terminal:

```bash
claude mcp add --transport http astro-docs https://mcp.docs.astro.build/mcp
```

## 2. Project Context Files

We have included several files to help AI agents understand this project:

- **[GEMINI.md](../GEMINI.md)**: Rules and context specifically for Gemini-powered agents.
- **[.clinerules](../.clinerules)**: General rules for various AI coding assistants.
- **[public/llms.txt](../public/llms.txt)**: A summary for AI crawlers and external tools.

## 3. Best Practices for AI

- **Use `astro add`**: Ask AI to use official integrations via `astro add`.
- **Verify APIs**: Encourage AI to check the latest docs for Astro 5+ features (like Actions and Sessions).
- **Proactive Checks**: Ask AI to run `pnpm astro check` after making structural changes.
