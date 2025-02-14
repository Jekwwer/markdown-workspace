<!-- Template by Evgenii Shiliaev - Licensed under CC BY 4.0 -->

# Markdown Workspace

![GitHub Release](https://img.shields.io/github/v/release/Jekwwer/markdown-workspace?logo=github&link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fmarkdown-workspace%2Freleases%2Flatest)
![GitHub Release Date](https://img.shields.io/github/release-date/Jekwwer/markdown-workspace?link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fmarkdown-workspace%2Freleases%2Flatest)
![GitHub commits since latest release](https://img.shields.io/github/commits-since/Jekwwer/markdown-workspace/latest?link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fmarkdown-workspace%2Freleases%2Flatest)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/Jekwwer/markdown-workspace?logo=librariesdotio&logoColor=%23FFFFFF)
![Issues](https://img.shields.io/github/issues/Jekwwer/markdown-workspace?logo=github&link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fmarkdown-workspace%2Fissues)
![Maintained](https://img.shields.io/maintenance/yes/2025)
![GitHub License](https://img.shields.io/github/license/Jekwwer/markdown-workspace?link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fmarkdown-workspace%2Fblob%2Fmain%2FLICENSE)

## Project Overview 🚀

This repository is a comprehensive template for working with Markdown files, equipped with tools for formatting,
linting, spell checking, link validation, and more. Ideal for documentation projects, blogs,
or any Markdown-heavy projects.

## Features ✨

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

## Installation 📦

This setup is designed for **GitHub Codespaces**.
Running locally has **not been tested** and may require additional configuration.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][open-in-codespaces]

## Usage 🛠️

The following scripts are available for managing and checking Markdown files:

### Formatting

- **Run Prettier** to format Markdown files:

  ```bash
  npm run format:code
  ```

### Linting

- **Lint Markdown** files with `markdownlint-cli`:

  ```bash
  npm run lint:markdown
  ```

### Link Checking

- **Check Links** in Markdown files to prevent broken URLs:

  ```bash
  npm run check:links
  ```

### Spell Checking

- **Run Spell Check** on Markdown files:

  ```bash
  npm run check:spelling
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
  npm run docs:serve
  ```

  - Visit `http://localhost:8000` in your browser to see the documentation.

### Build Documentation with MkDocs

- **Build static site** from Markdown files using MkDocs:

  To create a static website from your documentation, run the following command:

  ```bash
  npm run docs:build
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
     npm run docs:deploy
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

## Contributing 👥

Contributions are welcome! Please read the [Contributing Guidelines][CONTRIBUTING] and check the [issues][issues] page.

## License 🛡️

This project is licensed under the [MIT License][LICENSE].

## Contact 📬

For questions, reach out via [evgenii.shiliaev@jekwwer.com][evgenii.shiliaev@jekwwer.com] or open an [issue][issues].

---

This document is based on a template by [Evgenii Shiliaev][evgenii-shiliaev-github],
licensed under [CC BY 4.0][jekwwer-markdown-docs-kit-license]. All additional content is licensed under [LICENSE][LICENSE].

[CONTRIBUTING]: CONTRIBUTING.md
[LICENSE]: LICENSE
[evgenii-shiliaev-github]: https://github.com/Jekwwer
[evgenii.shiliaev@jekwwer.com]: mailto:evgenii.shiliaev@jekwwer.com
[issues]: https://github.com/Jekwwer/markdown-workspace/issues
[jekwwer-markdown-docs-kit-license]: https://github.com/Jekwwer/markdown-docs-kit/blob/main/LICENSE
[open-in-codespaces]: https://codespaces.new/Jekwwer/markdown-workspace
