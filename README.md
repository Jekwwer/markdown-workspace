# Markdown Template Repository

A comprehensive template for working with Markdown files,
equipped with tools for formatting, linting, spell checking, link validation, and more.
Ideal for documentation projects, blogs, or any Markdown-heavy projects.

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

## Features

- **Formatting**: Ensures consistent style across Markdown files using Prettier.
- **Linting**: Enforces Markdown standards with `markdownlint`.
- **Link Checking**: Validates links to avoid broken URLs.
- **Spell Checking**: Catches spelling errors in Markdown files.
- **Table of Contents**: Automatically generates and updates TOCs for large files.
- **Metadata Validation**: Ensures required front matter fields are present.
- **Live Preview**: Local preview of documentation as a website using `docsify`.
- **Pre-commit Hooks**: Automates checks for quality assurance before each commit using `pre-commit`.

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

## Scripts and Usage

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

### Metadata Validation

- **Check Metadata** in Markdown front matter for required fields:

  ```bash
  npm run check:frontmatter
  ```

### Live Preview with Docsify

- **Preview Markdown files** as a website using Docsify:

  ```bash
  npm run preview:docs:init
  npm run preview:docs
  ```

  - Visit `http://localhost:3000` in your browser to see the documentation.

### Deployment

- **Deploy to GitHub Pages** using the provided GitHub Actions workflow:

  The project includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
  that automatically deploys the documentation to GitHub Pages whenever changes are pushed to the `main` branch.

  To view the deployed documentation, visit the `gh-pages` branch of your repository at [`https://jekwwer.github.io/markdown-template/`](https://jekwwer.github.io/markdown-template/).

## Automated Checks

Using **Pre-commit** this template will run all relevant checks on staged Markdown files before every commit,
including formatting, linting, spell checking, link checking, and metadata validation.

## Configuration Files

- **`.markdownlint.json`**: Configure Markdown linting rules.
- **`cspell.json`**: Customize spell checking dictionary.
- **`package.json`**: Manage dependencies and scripts.

## Contributing

If you'd like to contribute or suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
