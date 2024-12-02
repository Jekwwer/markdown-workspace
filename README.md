# Markdown Template Repository

A comprehensive template for working with Markdown files,
equipped with tools for formatting, linting, spell checking, link validation, and more.
Ideal for documentation projects, blogs, or any Markdown-heavy projects.

<!-- toc -->

- [Markdown Template Repository](#markdown-template-repository)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup Instructions](#setup-instructions)
  - [Scripts and Usage](#scripts-and-usage)
    - [Formatting](#formatting)
    - [Linting](#linting)
    - [Link Checking](#link-checking)
    - [Spell Checking](#spell-checking)
    - [Table of Contents Generation](#table-of-contents-generation)
    - [Metadata Validation](#metadata-validation)
    - [Live Preview with Docsify](#live-preview-with-docsify)
    - [Deployment](#deployment)
  - [Automated Checks](#automated-checks)
  - [Configuration Files](#configuration-files)
  - [Contributing](#contributing)
  - [License](#license)

<!-- tocstop -->

## Features

- **Formatting**: Ensures consistent style across Markdown files using Prettier.
- **Linting**: Enforces Markdown standards with `markdownlint`.
- **Link Checking**: Validates links to avoid broken URLs.
- **Spell Checking**: Catches spelling errors in Markdown files.
- **Table of Contents**: Automatically generates and updates TOCs for large files.
- **Metadata Validation**: Ensures required front matter fields are present.
- **Live Preview**: Local preview of documentation as a website using `docsify`.
- **Pre-commit Hooks**: Automates checks for quality assurance before each commit using `husky`.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) (for Devcontainer)
- [Visual Studio Code](https://code.visualstudio.com/) with Devcontainer extension

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jekwwer/markdown-template.git
   cd markdown-template
   ```

2. **Open in Devcontainer**:

   - Open the project in VSCode.
   - Run `Reopen in Container` to initialize the Devcontainer with all tools.

3. **Install Dependencies**:

   ```bash
   yarn
   ```

## Scripts and Usage

The following scripts are available for managing and checking Markdown files:

### Formatting

- **Run Prettier** to format Markdown files:

  ```bash
  yarn format
  ```

### Linting

- **Lint Markdown** files with `markdownlint-cli2`:

  ```bash
  yarn lint:md
  ```

### Link Checking

- **Check Links** in Markdown files to prevent broken URLs:

  ```bash
  yarn check:links
  ```

### Spell Checking

- **Run Spell Check** on Markdown files:

  ```bash
  yarn check:spell
  ```

### Table of Contents Generation

- **Generate or Update TOC** in Markdown files:

  ```bash
  yarn generate:toc
  ```

### Metadata Validation

- **Check Metadata** in Markdown front matter for required fields:

  ```bash
  yarn check:frontmatter
  ```

### Live Preview with Docsify

- **Preview Markdown files** as a website using Docsify:

  ```bash
  yarn preview:docs:init
  yarn preview:docs
  ```

  - Visit `http://localhost:3000` in your browser to see the documentation.

### Deployment

- **Deploy to GitHub Pages** using the provided GitHub Actions workflow:

  The project includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
  that automatically deploys the documentation to GitHub Pages whenever changes are pushed to the `main` branch.

  To view the deployed documentation, visit the `gh-pages` branch of your repository at `https://jekwwer.github.io/markdown-template/`.

## Automated Checks

Using **Husky** and **Lint-staged**, this template will run all relevant checks on staged Markdown files before every commit,
including formatting, linting, spell checking, link checking, and metadata validation.

## Configuration Files

- **`.markdownlint.json`**: Configure Markdown linting rules.
- **`cspell.json`**: Customize spell checking dictionary.
- **`package.json`**: Manage dependencies and scripts.

## Contributing

If you'd like to contribute or suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
