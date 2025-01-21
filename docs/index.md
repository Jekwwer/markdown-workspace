# Markdown Template Repository

A comprehensive template for working with Markdown files, equipped with tools for formatting, linting, spell checking,
link validation, and more. This repository is ideal for documentation projects, blogs, or any Markdown-heavy projects.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) (for Devcontainer)
- [Visual Studio Code](https://code.visualstudio.com/) with Devcontainer extension

### Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/jekwwer/markdown-template.git
   cd markdown-template
   ```

2. **Open in Devcontainer**:

   - Open the project in VSCode.
   - Run `Reopen in Container` to initialize the Devcontainer with all tools.

3. **Install Dependencies**:

   ```bash
   npm install
   ```

## Scripts and Usage

The following scripts are available for managing and checking Markdown files:

### **Formatting**

```bash
npm run format
```

### **Linting**

```bash
npm run lint:md
```

### **Link Checking**

```bash
npm run check:links
```

### **Spell Checking**

```bash
npm run check:spell
```

### **Table of Contents Generation**

Add a `[[toc]]` placeholder where you want the TOC to appear and run:

```bash
npm run generate:toc
```

### **Metadata Validation**

```bash
npm run check:frontmatter
```

### **Live Preview**

```bash
npm run serve:docs
```

### **Build Static Site**

```bash
npm run build:docs
```

## Deployment

Deploy to GitHub Pages using the provided GitHub Actions workflow:

- The workflow (`.github/workflows/deploy.yml`) deploys the documentation to GitHub Pages automatically
  when changes are pushed to the `main` branch.
- Access the deployed documentation at
  [`https://jekwwer.github.io/markdown-template/`](https://jekwwer.github.io/markdown-template/).

## Automated Checks

This template runs checks (formatting, linting, spell checking, link checking, and metadata validation)
on staged files before every commit using **pre-commit hooks**.

## Configuration Files

- **`.markdownlint.json`**: Markdown linting rules.
- **`cspell.json`**: Custom spell checking dictionary.
- **`package.json`**: Dependency and script management.

## Contributing

We welcome contributions! Please open an issue or submit a pull request to suggest improvements or add features.

## License

This project is licensed under the MIT License.
See the [LICENSE](https://github.com/Jekwwer/markdown-template/blob/main/LICENSE) file for more details.
