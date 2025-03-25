# Style Guide

This document outlines the style guide for **Jekwwer/markdown-workspace**.
It covers commit message formatting, coding conventions, repository structure,
and other aspects detailed in [Scope][SCOPE].
Adhering to these guidelines ensures a consistent and readable project.

## Introduction

### Purpose

This guide standardizes coding and documentation practices to ensure consistency, enhance readability,
and support effective collaboration.

### Audience

This style guide is intended for:

- **Developers and Contributors:** Those writing code or documentation for the project.
- **Maintainers:** Individuals responsible for reviewing and merging contributions.
- **Reviewers:** Participants in code reviews to ensure adherence to standards.

### Scope

This document covers:

- **Repository Structure:** Directory layout, file naming conventions, and configuration file details.
- **Naming Conventions:** Standards for variables, constants, functions, and file/directory names.
- **Code Formatting and Style:** Guidelines on indentation, line length, brace styles, comments, EditorConfig settings,
  and linting/formatting tools.
- **Documentation:** Standards for creating and maintaining project documentation.
- **Additional Best Practices:** Other practices to improve overall code quality and project maintainability.

## Project Overview

### Project Goals

This repository provides a ready-to-use development environment for working with Markdown files and documentation.
By leveraging devcontainer technology and GitHub Codespaces with VS Code, it aims to deliver a consistent, streamlined,
and collaborative workspace for documentation projects.

### Technology Stack

The environment is built using:

- **VS Code Configurations & Extensions:**
  Pre-configured settings and essential extensions for enhanced productivity.
- **Devcontainer Setup:**
  Containerized development environment ensuring consistency across setups.
- **npm for Task Management:**

  - Utilizes available npm packages where possible.
  - Falls back to custom JavaScript or Python scripts if an npm package isn’t available.

  Key tasks and workflows are automated via npm scripts.

For a complete list of commands and further details, please refer to our [Contributing Guidelines][CONTRIBUTING].

### Target Audience

This template is designed for developers who require a streamlined,
containerized workspace for managing Markdown documentation and related projects.

## Repository Structure

### Directory Layout

```plaintext
/ (root)                                # repository root
├── .devcontainer                       ├── # devcontainer-related configurations
│   └── devcontainer.json               │   └── # devcontainer setup
├── .github                             ├── # GitHub-related configurations
│   ├── ISSUE_TEMPLATE                  │   ├── # issue templates
│   │   └── *                           │   │   └── # all files in the folder
│   ├── PULL_REQUEST_TEMPLATE           │   ├── # pull request templates
│   │   └── *                           │   │   └── # all files in the folder
│   ├── workflows                       │   ├── # GitHub workflows
│   │   ├── deploy.yml                  │   │   ├── # deployment workflow
│   │   └── release.yml                 │   │   └── # release workflow
│   ├── dependabot.yml                  │   ├── # Dependabot configuration
│   ├── FUNDING.yml                     │   ├── # funding configuration
│   └── PULL_REQUEST_TEMPLATE.md        │   ├── # default pull request template
├── docs                                ├── # documentation files
│   └── index.md                        │   └── # main documentation index
├── .editorconfig                       ├── # editor configuration
├── .gitignore                          ├── # files to ignore in Git and markdown linting
├── .markdownlint.json                  ├── # markdown linting configuration
├── .pre-commit-config.yaml             ├── # pre-commit hook configuration
├── .prettierrc                         ├── # Prettier configuration
├── .releaserc.js                       ├── # semantic release configuration
├── CHANGELOG.md                        ├── # changelog
├── CODE_OF_CONDUCT.md                  ├── # code of conduct
├── CONTRIBUTING.md                     ├── # contributing guidelines
├── cspell.json                         ├── # spell checking configuration
├── deploy.sh                           ├── # deployment script
├── LICENSE                             ├── # main license (e.g., MIT)
├── mkdocs.yml                          ├── # MkDocs configuration
├── package-lock.json                   ├── # npm lock file
├── package.json                        ├── # npm package configuration
├── README.md                           ├── # project README
├── SECURITY.md                         ├── # security information
└── STYLEGUIDE.md                       └── # style guide
```

### File Naming Conventions

- **Documentation Files:**
  Key files (e.g., `CHANGELOG.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `README.md`, `SECURITY.md`) are named using
  **SCREAMING_SNAKE_CASE** (uppercase with underscores). Files within the `docs` directory should be named in lowercase.

- **Configuration Files:**
  Files that configure tools (e.g., `cspell.json`, `.editorconfig`, `mkdocs.yml`, `package.json`, `package-lock.json`,
  `.pre-commit-config.yaml`, `.prettierrc`, `.releaserc.js`) use lowercase names consistently.

- **Scripts:**
  Executable scripts (e.g., files in the `scripts` directory like `generate-toc.js`) use lowercase—often
  in **kebab-case**—to enhance readability.

- **GitHub and Workflow Files:**
  Files in the `.github` directory (e.g., `dependabot.yml`, `FUNDING.yml`, and
  templates under `ISSUE_TEMPLATE`/`PULL_REQUEST_TEMPLATE`) follow their provided naming conventions.
  This may include a mix of uppercase (e.g., `BUG_REPORT.md`) and lowercase (e.g., `config.yml`) names
  to ensure proper GitHub integration.

### Directory Naming Conventions

- **General Naming:**
  Use lowercase letters. For multi-word names, use kebab-case (e.g., `node-modules`, `source-files`).
  Choose names that clearly indicate the directory's content or purpose (e.g., `docs` for documentation,
  `scripts` for executables).

- **Special Directories:**
  Directories prefixed with a dot (e.g., `.github`, `.devcontainer`) have specific roles and should remain unchanged.

### Configuration Files

Key configuration files in the repository include:

- `.devcontainer/devcontainer.json`: Development container setup, including VS Code settings,
  environment variables, and extensions.
- `.gitignore`: Files and directories excluded from version control.
- `.editorconfig`: Coding style settings across different editors.
- `.markdownlint.json`: Markdown linting rules and exclusions.
- `.pre-commit-config.yaml`: Pre-commit hooks.
- `.prettierrc`: Formatting rules.
- `.releaserc.js`: Semantic release process and versioning.
- `cspell.json`: Spelling rules for consistency.
- `mkdocs.yml`: Configures MkDocs for building and deploying documentation.
- `package.json`: Project metadata, scripts, and dependency definitions.
- `package-lock.json`: Locked dependency versions for consistent installations.

## Naming Conventions

### Variables

- **JavaScript:**
  Use **camelCase** (e.g., `myVariable`).

### Constants

- **JavaScript:**
  Use **camelCase** (e.g., `defaultTimeout`).

### Functions/Methods

- **General Guideline:**
  Function and method names should be descriptive verbs that indicate their action.
- **JavaScript:**
  Use **camelCase** (e.g., `initializeApp`).

### Files

- See [File Naming Conventions][FILE_NAMING_CONVENTIONS].

## Code Formatting and Style

These settings are enforced by the `.editorconfig` and `.prettierrc` configurations.

### Indentation and Spacing

- **General:**
  Use **2 spaces** per indentation level throughout the project. Tabs are not permitted.

### Line Length

- **Code Files:**
  Limit lines to a maximum of **88 characters**.
- **Markdown Files:**
  For Markdown (`*.md`), allow up to **120 characters** per line.

### Braces and Control Structures

- **JavaScript:**
  Follow Prettier’s defaults:
  - Place opening braces on the same line as the control statement.
  - Always use braces for control structures (e.g., `if`, `for`, `while`), even if optional.

### Comments and Documentation

- **General Guidance:**
  All comments should enhance clarity and avoid redundancy with well-named functions and variables.
  Comments should not exceed the maximum line length.
- **Inline Comments:**
  Use concise inline comments on the same line or directly above the code they explain.
- **Block Comments:**
  Reserve block comments for describing larger sections of logic or complex code.
  For JavaScript, consider using JSDoc-style comments for documenting functions.
- **File Header Comments:**
  Every file should begin with a header comment (except for files in `.json`, Markdown, and LICENSE files)
  that provides a short, third-person description of the file's purpose. For example:

  ```plaintext
  # .pre-commit-config.yaml: Sets up pre-commit hooks to automate code quality checks.
  ```

  If a file starts with a shebang (e.g., `#!/bin/bash`),
  place the header comment on the line immediately following the shebang.

### EditorConfig

- **Purpose:**
  The `.editorconfig` file ensures consistent coding styles across all editors by specifying:
  - **Indentation:** 2 spaces
  - **Line Endings:** Unix-style (`lf`)
  - **Charset:** UTF-8
  - **Max Line Length:** 88 for code, 120 for Markdown
    _(Note: `.editorconfig` provides these values for reference; enforcement is handled by other tools.)_
  - **Final Newline:** Enforced
  - **Trailing Whitespace:** Trimmed (with specified exceptions)
- **Note:**
  Contributors should use an editor that supports EditorConfig to automatically apply these settings.

### Prettier

- **Purpose:**
  The `.prettierrc` file defines the project's code formatting rules for Prettier-supported files,
  ensuring a consistent style across various file types by specifying:
  - **Semicolons:** Enabled
  - **Quote Style:** Single quotes preferred
  - **Trailing Commas:** Added where possible
  - **Tab Width:** 2 spaces (tabs are not used)
  - **End of Line:** Unix-style (`lf`)
  - **Print Width:** 88 characters
    _(Note: Overrides are applied for Markdown files with a print width of 120, while JSON files have no enforced limit.)_
- **Note:**
  Prettier is integrated as an auto-formatter in VS Code and runs as part of a pre-commit hook
  to automatically format code before commits.

### Additional Linting and Formatting Tools

- **Pre-commit Hooks:**
  The project leverages pre-commit hooks to enforce code quality through automated checks.
  Key tools integrated via pre-commit include:
  - **pre-commit-hooks:**
    Ensures proper AST parsing, fixes line endings and trailing whitespace, manages mixed line endings,
    detects private keys, validates YAML and JSON syntax, checks for merge conflicts, detects case conflicts,
    verifies executable shebangs, fixes formatting, and sorts `requirements.txt`.
  - **markdownlint-cli & markdown-link-check:**
    Enforce the style guide rules for Markdown files and validate links.
  - **yamllint:**
    Enforces style guide rules for YAML files.

## Documentation

### Inline Documentation

See [Comments and Documentation][COMMENTS-AND-DOCUMENTATION] from [Code Formatting and Style][CODE_FORMATTING_AND_STYLE].

### External Documentation

- **Repository Documentation:**
  The root-level `README.md` provides an overview, installation instructions, usage examples,
  and contribution guidelines.
  Additional repository documents such as `CONTRIBUTING.md`, `STYLEGUIDE.md`, `SECURITY.md`,
  and `LICENSE` are also maintained at the repository root.

- **Additional Docs:**
  Other external documentation is maintained in the `docs` directory and is deployed via MkDocs to GitHub Pages.

_Note: File and directory names referenced in Markdown should always be formatted using backticks, for example:_

```markdown
Other external documentation is maintained in the `docs` directory.
```

### Markdown References

- **Reference-Style Links:**
  Use reference-style links for clarity. For example:

  ```markdown
  [info][link]

  [link]: https://example.com
  ```

- **Local References:**
  For links to repository-related documents (e.g., `CONTRIBUTING.md` or `CODE_OF_CONDUCT.md`) or internal sections,
  use **SCREAMING_SNAKE_CASE** for link identifiers and omit the file extension for documents.
  For example:

  ```markdown
  See [Code of Conduct][CODE_OF_CONDUCT].

  [CODE_OF_CONDUCT]: CODE_OF_CONDUCT.md
  ```

  And for internal sections:

  ```markdown
  See [File Naming Conventions][FILE_NAMING_CONVENTIONS].

  [FILE_NAMING_CONVENTIONS]: #file-naming-conventions
  ```

  **Note:** Local references should always appear at the top and be sorted alphabetically. For example:

  ```markdown
  [FILE_NAMING_CONVENTIONS]: #file-naming-conventions
  [SECURITY]: SECURITY.md
  [external-link]: https://example.com
  ```

- **External Links:**
  For links that reference external resources, use **kebab-case** for link identifiers. For example:

  ```markdown
  [info][external-link]

  [external-link]: https://example.com
  ```

  **Note:** External references should be sorted alphabetically and always appear below local references. For example:

  ```markdown
  [SECURITY]: SECURITY.md
  [external-link]: https://example.com
  ```

### Documentation Tools and Best Practices

#### Tools

- **MkDocs:**
  Generates external documentation. The configuration is stored in the root-level `mkdocs.yml`,
  and the content is maintained in the `docs` directory.
- **markdown-link-check:**
  Validates hyperlinks within Markdown files.
- **markdownlint:**
  Enforces consistent style and formatting in Markdown documents.
- **cspell:**
  A spellchecker designed for code and Markdown files.
  It runs as a pre-commit hook and can also be executed via the npm script `npm run spell:check`.
- **Custom TOC Generator:**
  Provided by `scripts/generate-toc.js`, this script automatically replaces `[[toc]]` placeholder with
  a table of contents for Markdown documents.

#### Consistency and Updates

- Update documentation alongside code changes.
- Contributors should update docs when introducing new features or modifying existing functionality.

#### Style and Tone

- Maintain a semi-formal tone appropriate for a tech-oriented audience.
- Use clear, precise language and consistent formatting throughout.

#### Contribution Guidelines

- Documentation contributions follow the same process as code changes—submit pull requests for review
  according to the contribution guidelines.

## Additional Best Practices

### Security and Privacy

- Avoid exposing sensitive information in logs or error messages.
- Regularly review dependencies for security vulnerabilities.

### Error Handling and Logging

- Implement robust error handling (e.g., use try/catch in JavaScript).
- Use structured logging to capture context without exposing sensitive data.

### Code Organization and Maintenance

- Keep the codebase clean and modular to facilitate understanding and future extensions.
- Regularly review and refactor code to eliminate redundancy.
- Use design patterns where appropriate to improve clarity and reusability.

## Conclusion

### Continuous Improvement

This document is a living resource that should evolve with the project.
As new best practices emerge or project requirements change, please update the guide to keep it relevant and effective.

### Feedback and Updates

Your input is valuable. If you have suggestions for improvements, clarifications, or additional guidelines,
please reach out to the maintainers or submit an [issue][issues]. For contributing guidelines,
refer to [`CONTRIBUTING.md`][CONTRIBUTING]; for security concerns, see [`SECURITY.md`][SECURITY];
for discussions, consult the project's [discussion board][discussions]
or contact the project owner at [evgenii.shiliaev@jekwwer.com][evgenii.shiliaev@jekwwer.com].

---

This document is based on a template by [Evgenii Shiliaev][evgenii-shiliaev-github],
licensed under [CC BY 4.0][jekwwer-markdown-docs-kit-license]. All additional content is licensed under [LICENSE][LICENSE].

[CONTRIBUTING]: CONTRIBUTING.md
[CODE_FORMATTING_AND_STYLE]: #code-formatting-and-style
[COMMENTS-AND-DOCUMENTATION]: #comments-and-documentation
[FILE_NAMING_CONVENTIONS]: #file-naming-conventions
[LICENSE]: LICENSE
[SCOPE]: #scope
[SECURITY]: SECURITY.md
[discussions]: https://github.com/Jekwwer/markdown-workspace/discussions
[evgenii-shiliaev-github]: https://github.com/Jekwwer
[evgenii.shiliaev@jekwwer.com]: mailto:evgenii.shiliaev@Jekwwer.com
[issues]: https://github.com/Jekwwer/markdown-workspace/issues
[jekwwer-markdown-docs-kit-license]: https://github.com/Jekwwer/markdown-docs-kit/blob/main/LICENSE
