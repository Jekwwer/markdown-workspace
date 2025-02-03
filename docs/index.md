# Markdown Template Repository

A comprehensive template for working with Markdown files, equipped with tools for formatting, linting, spell checking,
link validation, and more. Ideal for documentation projects, blogs, or any Markdown-heavy projects.

> **Note:** This is an example for MkDocs.

## Setup Instructions

This setup is designed for **GitHub Codespaces**.
Running locally has **not been tested** and may require additional configuration.

## Usage

Here are the key scripts for working with Markdown files:

- **Format Markdown Files**:

  ```bash
  npm run format:code
  ```

- **Lint Markdown Files**:

  ```bash
  npm run lint:markdown
  ```

- **Check Links**:

  ```bash
  npm run check:links
  ```

- **Spell Check**:

  ```bash
  npm run check:spelling
  ```

- **Generate Table of Contents**:

  Add a `[[toc]]` placeholder and run:

  ```bash
  npm run generate:toc
  ```

- **Live Preview with MkDocs**:

  ```bash
  npm run docs:serve
  ```

- **Build Static Site**:

  ```bash
  npm run docs:build
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

- **`.markdownlint.jsonc`**: Configure Markdown linting rules.
- **`.markdownlintignore`**: Specify files and directories to ignore during Markdown linting.
- **`cspell.json`**: Custom spell checking dictionary.
- **`package.json`**: Dependency and script management.

## Contributing

We welcome contributions! Please open an issue or submit a pull request to suggest improvements or add features.

## License

This project is licensed under the MIT License.
See the [LICENSE](https://github.com/Jekwwer/markdown-template/blob/main/LICENSE) file for more details.
