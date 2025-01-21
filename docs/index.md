# Markdown Template Repository

A comprehensive template for working with Markdown files, equipped with tools for formatting, linting, spell checking,
link validation, and more. Ideal for documentation projects, blogs, or any Markdown-heavy projects.

> **Note:** This is an example for MkDocs.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) (for Devcontainer)
- [Visual Studio Code](https://code.visualstudio.com/) with the Devcontainer extension

### Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/jekwwer/markdown-template.git
   cd markdown-template
   ```

2. **Open in Devcontainer**:

   - Open the project in VSCode.
   - Run `Reopen in Container` to initialize the Devcontainer.

3. **Install Dependencies**:

   ```bash
   npm install
   ```

## Usage

Here are the key scripts for working with Markdown files:

- **Format Markdown Files**:

  ```bash
  npm run format
  ```

- **Lint Markdown Files**:

  ```bash
  npm run lint:md
  ```

- **Check Links**:

  ```bash
  npm run check:links
  ```

- **Spell Check**:

  ```bash
  npm run check:spell
  ```

- **Generate Table of Contents**:

  Add a `[[toc]]` placeholder and run:

  ```bash
  npm run generate:toc
  ```

- **Validate Metadata**:

  ```bash
  npm run check:frontmatter
  ```

- **Live Preview with MkDocs**:

  ```bash
  npm run serve:docs
  ```

- **Build Static Site**:

  ```bash
  npm run build:docs
  ```

## Deployment

Easily deploy your documentation to GitHub Pages:

- Use the included GitHub Actions workflow (`.github/workflows/deploy.yml`) to automate deployment when pushing changes
  to the `main` branch.
- Access the site at `https://<username>.github.io/<repository>`.

## Automated Checks

This template uses **pre-commit hooks** to run quality checks (formatting, linting, spell checking, and link validation)
on files before each commit.

## Configuration Files

- **`.markdownlint.json`**: Markdown linting rules.
- **`cspell.json`**: Custom spell checking dictionary.
- **`package.json`**: Dependency and script management.

## Contributing

We welcome contributions! Please open an issue or submit a pull request to suggest improvements or add features.

## License

This project is licensed under the MIT License.
See the [LICENSE](https://github.com/Jekwwer/markdown-template/blob/main/LICENSE) file for more details.
