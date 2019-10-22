<!-- 

@license BSD-3-Clause

Copyright (c) 2019 Project Jupyter Contributors.
Distributed under the terms of the 3-Clause BSD License.

-->

# Development

> Development guide.

## Introduction

Before we begin, development requires some setup and configuration. What follows is an overview of environment requirements and a sequence of steps for getting up and running. We use [Git][git] for version control, and for most tasks, we use [npm][npm] scripts to help us get things done quickly and effectively. For the most part, the project is able to internally manage dependencies for testing and linting, so, once you follow the steps below, you should be ready to start developing!

So, without further ado, let's get you started!

## Prerequisites

Development requires the following prerequisites:

-   [Git][git]: version control
-   [Python][python]: general purpose language (version `>= 3.6`)
-   [pip][pip]: Python package manager (version `>= 9.0.0`)
-   [Node.js][node-js]: JavaScript runtime (latest stable version is **strongly** recommended)
-   [npm][npm]: package manager (version `> 2.7.0`)
-   [JupyterLab][jupyterlab]: computational environment (version `>= 1.0.0`)

While not required, you are encouraged to create an [Anaconda][anaconda] environment.

```bash
$ conda create -n jupyterlab-metadata-service -c conda-forge python=3.6 jupyterlab nodejs
```

To activate the environment,

```bash
$ conda activate jupyterlab-metadata-service
```

> **NOTE**: for each new terminal window, you'll need to explicitly activate the [Anaconda][anaconda] environment.

## Download

To acquire the source code, first navigate to the parent directory in which you want to place the project [Git][git] repository.

> **NOTE**: avoid directory paths which include spaces or any other shell meta characters such as `$` or `:`, as these characters can be problematic for certain build tools.

```bash
$ cd /path/to/parent/destination/directory
```

Next, clone the repository.

```bash
$ git clone https://github.com/jupyterlab/jupyterlab-metadata-service.git
```

If you are wanting to contribute to this GitHub repository, first [fork][github-fork] the repository and amend the previous command.

```bash
$ git clone https://github.com/<username>/jupyterlab-metadata-service.git
```

where `<username>` is your GitHub username (assuming you are using GitHub to manage public repositories). The repository may have a large commit history, leading to slow download times. If you are not interested in code archeology, you can reduce the download time by limiting the [depth][git-clone-depth].

```bash
$ git clone --depth=<depth> https://github.com/<username>/jupyterlab-metadata-service.git
```

where `<depth>` refers to the number of commits you want to download (as few as 1 and as many as the entire project history).

If you are behind a firewall, you may need to use the `http` protocol, rather than the [`git`][git] protocol.

```bash
$ git config --global url."https://".insteadOf git://
```

Once you have finished cloning the repository into the destination directory, you should see the folder `jupyterlab-metadata-service`. To proceed with configuring your environment, navigate to the project folder.

```bash
$ cd jupyterlab-metadata-service
```

## Installation

To install development dependencies (e.g., [Node.js][node-js] module dependencies),

```bash
$ jlpm install
```

where `jlpm` is the JupyterLab package manager which is bundled with [JupyterLab][jupyterlab].

## Build

To build the metadata extension,

```bash
$ jlpm run build
```

If your environment has been configured correctly, the previous command should complete without errors.

To build the [JupyterLab][jupyterlab] extensions found in this repository and to launch the [JupyterLab][jupyterlab] environment,

```bash
$ jlpm run build:jupyter
```

## Clean

To clean your local environment, including [Node.js][node-js] module dependencies,

```bash
$ jlpm run clean
```

To remove build artifacts, such as compiled JavaScript files, from repository packages,

```bash
$ jlpm run clean:packages
```

To remove [JupyterLab][jupyterlab] extension artifacts, such as linked extensions,

```bash
$ jlpm run clean:jupyter
```

## Reset

To clean and rebuild the metadata extension,

```bash
$ jlpm run all
```

## Watch

During development, you'll likely want the metadata extension to automatically recompile and update. Accordingly, in a separate terminal window,

```bash
$ jlpm run build:watch
```

which will automatically trigger recompilation upon updates to source files.

In another terminal window,

```bash
$ jlpm run build:jupyter:watch
```

which will launch the [JupyterLab][jupyterlab] environment and automatically update the running lab environment upon recompilation changes.

## Update

If you have previously downloaded the repository using `git clone`, you can update an existing source tree from the base project directory using `git pull`.

```bash
$ git pull
```

If you are working with a [forked][github-fork] repository and wish to [sync][github-fork-sync] your local repository with the [upstream][git-remotes] project (i.e., incorporate changes from the main project repository into your local repository), assuming you have [configured a remote][github-remote] which points to the upstream repository,

```bash
$ git fetch upstream
$ git merge upstream/<branch>
```

where `upstream` is the remote name and `<branch>` refers to the branch you want to merge into your local copy.

## Organization

The repository is organized as follows:

```text
binder     Binder configuration
docs       top-level documentation
notebooks  Jupyter notebooks
src        extension source code
```

## Editors

-   This repository uses [EditorConfig][editorconfig] to maintain consistent coding styles between different editors and IDEs, including [browsers][editorconfig-chrome].

<!-- links -->

[git]: http://git-scm.com/

[python]: https://www.python.org/

[pip]: https://github.com/pypa/pip

[node-js]: https://nodejs.org/en/

[npm]: https://www.npmjs.com/

[jupyterlab]: https://github.com/jupyterlab/jupyterlab

[anaconda]: https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html

[github-fork]: https://help.github.com/articles/fork-a-repo/

[github-fork-sync]: https://help.github.com/articles/syncing-a-fork/

[github-remote]: https://help.github.com/articles/configuring-a-remote-for-a-fork/

[git-clone-depth]: https://git-scm.com/docs/git-clone#git-clone---depthltdepthgt

[git-remotes]: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes

[editorconfig]: http://editorconfig.org/

[editorconfig-chrome]: https://chrome.google.com/webstore/detail/github-editorconfig/bppnolhdpdfmmpeefopdbpmabdpoefjh?hl=en-US

<!-- /.links -->
