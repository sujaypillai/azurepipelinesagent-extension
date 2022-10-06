# Azure Pipelines Agent Extension
Docker Extension for Azure Pipelines agent running in a container

Azure Pipelines provides build and release services to support continuous integration and delivery of your applications.  

[What is Azure Pipelines?](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops)

## Pre-requisites
 * [Docker Desktop 4.12.0 (85629)](https://www.docker.com/products/docker-desktop/)
 * An organization in [Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization?view=azure-devops)
 *  Your source code in [Azure Repos](https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops)

## Build a container image for Azure Pipeline Agent
Before you make use of this extension you should build a container image for Azure Pipeline Agent. You may refer this [repository](https://github.com/sujaypillai/azure-pipelines-agent) to get started or you can pull this image from [DockerHub](https://hub.docker.com/repository/docker/sujaypillai/azpipelineagent) which has AzureCLI and Terraform capabilities baked in.

This [Dockerfile](https://github.com/sujaypillai/azure-pipelines-agent/blob/main/Dockerfile.20.10.2) will help you to understand how you can customize your agent for different capabilities.


