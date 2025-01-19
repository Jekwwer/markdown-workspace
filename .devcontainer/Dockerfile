# .devcontainer/Dockerfile: Sets up the development container for the project.

# Use the existing devcontainer image as the base
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# Set environment variable to non-interactive mode for apt-get installations
ENV DEBIAN_FRONTEND=noninteractive

# Set ARGs for the version of each package
ARG PYTHON_PIP_VERSION=23.0.1+dfsg-1
ARG PYTHON_VENV_VERSION=3.11.2-1+b1
ARG HADOLINT_VERSION=v2.12.0

# Install additional packages and hadolint
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3-pip=${PYTHON_PIP_VERSION} python3-venv=${PYTHON_VENV_VERSION} && \
    wget --progress=dot:giga -O /usr/local/bin/hadolint https://github.com/hadolint/hadolint/releases/download/${HADOLINT_VERSION}/hadolint-Linux-x86_64 && \
    chmod +x /usr/local/bin/hadolint && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set up a virtual environment specifically for pre-commit
RUN python3 -m venv /opt/precommit-env && \
    /opt/precommit-env/bin/pip install --upgrade pip && \
    /opt/precommit-env/bin/pip install pre-commit

# Add virtual environment to PATH
ENV PATH="/opt/precommit-env/bin:$PATH"
