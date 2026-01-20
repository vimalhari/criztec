# Criztec Technologies Website

Professional website for Criztec Technologies, built with **Astro 5.0** and **Tailwind CSS**. Fast, modern, and responsive.

## 🚀 Quick Start

This project uses **pnpm** as the package manager. Make sure you have pnpm installed:

```bash
npm install -g pnpm
```

### Development

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   pnpm dev
   ```

3. **Open your browser and visit:**
   `http://localhost:4321`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run all checks (Astro, ESLint, Prettier)
- `pnpm fix` - Fix ESLint and Prettier issues

### Quality Assurance

- `pnpm run check:astro` - Check Astro files
- `pnpm run check:eslint` - Check with ESLint
- `pnpm run check:prettier` - Check Prettier formatting
- `pnpm run fix:eslint` - Fix ESLint issues
- `pnpm run fix:prettier` - Fix Prettier formatting

## 📦 Package Management

This project is configured to use **pnpm** exclusively:

- Fast, efficient, and disk space optimized
- Strict dependency resolution
- Better monorepo support
- Faster installations compared to npm/yarn

### Adding Dependencies

```bash
# Production dependencies
pnpm add <package-name>

# Development dependencies
pnpm add -D <package-name>

# Remove dependencies
pnpm remove <package-name>
```

## 🔧 Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.ts
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.js
```

## 🤖 AI-Native Development

This project is optimized for AI-native development. We leverage the **Model Context Protocol (MCP)** and specific context files to improve the experience for AI agents and developers.

- **[AI Documentation](docs/AI.md)**: Guide on configuring MCP servers and using AI best practices.
- **[GEMINI.md](GEMINI.md)**: Rules and project context for Gemini-powered agents.
- **[.clinerules](.clinerules)**: General context for AI tools like Claude and Cursor.
- **[llms.txt](public/llms.txt)**: Machine-readable summary for AI discovery.

## 🚀 Deployment

This project is configured for **Cloudflare Workers**:

- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Node Version:** 18+
- **Platform:** `@astrojs/cloudflare`

Configure your Cloudflare Workers setup using `wrangler.jsonc`.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Build with AI Guide](https://docs.astro.build/en/guides/build-with-ai/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [pnpm Documentation](https://pnpm.io/)

## 🤝 Contributing

When contributing to this project, please use pnpm for all package management tasks and refer to the [AI Documentation](docs/AI.md) if using assistant tools.
