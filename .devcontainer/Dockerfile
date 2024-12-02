# .devcontainer/Dockerfile: Sets up the development container for the project.

# Use the existing devcontainer image as the base
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# Set environment variable to non-interactive mode for apt-get installations
ENV DEBIAN_FRONTEND=noninteractive

ARG HADOLINT_VERSION=v2.12.0
ARG YARN_VERSION=1.22.22

# Install additional packages and hadolint
RUN apt-get update && \
    wget --progress=dot:giga -O /usr/local/bin/hadolint https://github.com/hadolint/hadolint/releases/download/${HADOLINT_VERSION}/hadolint-Linux-x86_64 && \
    chmod +x /usr/local/bin/hadolint && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install yarn globally
RUN npm install -g yarn@${YARN_VERSION}
