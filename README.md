# Markdown Template Repository

A comprehensive template for working with Markdown files, equipped with tools for formatting, linting, spell checking,
link validation, and more. Ideal for documentation projects, blogs, or any Markdown-heavy projects.

- [Markdown Template Repository](#markdown-template-repository)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup Instructions](#setup-instructions)
  - [Usage](#usage)
    - [Formatting](#formatting)
    - [Linting](#linting)
    - [Link Checking](#link-checking)
    - [Spell Checking](#spell-checking)
    - [Table of Contents Generation](#table-of-contents-generation)
    - [Live Preview with MkDocs](#live-preview-with-mkdocs)
    - [Build Documentation with MkDocs](#build-documentation-with-mkdocs)
    - [Deployment to GitHub Pages](#deployment-to-github-pages)
  - [Automated Checks](#automated-checks)
  - [Configuration Files](#configuration-files)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Formatting**: Maintains consistent style across Markdown files using **Prettier**.
- **Linting**: Enforces Markdown standards and best practices with **markdownlint**.
- **Link Checking**: Validates internal and external links to prevent broken URLs.
- **Spell Checking**: Detects and highlights spelling errors in Markdown files.
- **Table of Contents (TOC)**: Automatically generates and updates TOCs for large files.
  _(Note: Redundant if using MkDocs, as it generates TOCs automatically.)_
- **Live Preview**: Provides a local preview of documentation as a website using **MkDocs**.
- **Static Site Generation**: Converts Markdown files into a fully functional static website with **MkDocs**.
- **Automated Deployment**: Deploys documentation to GitHub Pages via GitHub Actions or the `mkdocs gh-deploy` command.
- **Pre-commit Hooks**: Automates quality assurance checks before each commit with **pre-commit**.

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
   npm install
   ```

## Usage

The following scripts are available for managing and checking Markdown files:

### Formatting

- **Run Prettier** to format Markdown files:

  ```bash
  npm run format
  ```

### Linting

- **Lint Markdown** files with `markdownlint-cli2`:

  ```bash
  npm run lint:md
  ```

### Link Checking

- **Check Links** in Markdown files to prevent broken URLs:

  ```bash
  npm run check:links
  ```

### Spell Checking

- **Run Spell Check** on Markdown files:

  ```bash
  npm run check:spell
  ```

### Table of Contents Generation

- **Generate or Update TOC** in Markdown files containing the `[[toc]]` placeholder:

  Add the `[[toc]]` placeholder where you want the TOC to appear in your Markdown files. For example:

  ```markdown
  # My Project

  ## Table of Contents

  [[toc]]

  ## Section 1

  Content for section 1.

  ### Subsection 1.1

  Content for subsection 1.1.

  ## Section 2

  Content for section 2.
  ```

  Then run the following command to generate or update the TOC:

  ```bash
  npm run generate:toc
  ```

- After running the command, the `[[toc]]` placeholder will be replaced with a dynamically generated Table of Contents:

  ```markdown
  # My Project

  ## Table of Contents

  - [Section 1](#section-1)
    - [Subsection 1.1](#subsection-11)
  - [Section 2](#section-2)

  ## Section 1

  Content for section 1.

  ### Subsection 1.1

  Content for subsection 1.1.

  ## Section 2

  Content for section 2.
  ```

### Live Preview with MkDocs

- **Preview Markdown files** as a website using MkDocs:

  ```bash
  npm run serve:docs
  ```

  - Visit `http://localhost:8000` in your browser to see the documentation.

### Build Documentation with MkDocs

- **Build static site** from Markdown files using MkDocs:

  To create a static website from your documentation, run the following command:

  ```bash
  npm run build:docs
  ```

  This command will generate a `site` directory containing the built static files.
  You can serve these files with any web server or use them for deployment.

### Deployment to GitHub Pages

- **Deploy your documentation** to GitHub Pages with MkDocs:

  1. Ensure your repository is set up with a `mkdocs.yml` configuration file and the documentation source files.

  2. Deploy your documentation using one of the following methods:

     **a. Manual Deployment:**
     Run the following command to manually deploy the documentation:

     ```bash
     npm run deploy:docs
     ```

     This command will:

     - Build the static site.
     - Push the `site` directory to the `gh-pages` branch of your repository.

     After deployment, your documentation will be available at:

     ```plaintext
     https://<username>.github.io/<repository-name>/
     ```

     **b. Automated Deployment with GitHub Actions:**
     The project includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
     that automatically deploys the documentation to GitHub Pages whenever changes are pushed to the `main` branch.

     After deployment, your documentation will be available at the `gh-pages` branch of your repository:

     ```plaintext
     https://<username>.github.io/<repository-name>/
     ```

  **Note:** Ensure your repository settings have GitHub Pages enabled, and the source is set to the `gh-pages` branch.

## Automated Checks

Using **Pre-commit** this template will run all relevant checks on files before every commit,
including formatting, linting, spell checking, link checking, and metadata validation.

## Configuration Files

- **`.markdownlint.json`**: Configure Markdown linting rules.
- **`cspell.json`**: Customize spell checking dictionary.
- **`package.json`**: Manage dependencies and scripts.

## Contributing

If you'd like to contribute or suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
