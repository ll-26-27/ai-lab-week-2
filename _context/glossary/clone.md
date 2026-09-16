---
term: "Clone"
slug: clone
short: "Copying a repository from GitHub to your computer, files and full history together, not just a snapshot."
aliases: []
category: git-and-github
see_also: [repository, git, commit]
updated: 2026-09-16
---

# Clone

**Cloning copies a repository from GitHub to your computer: every file and the entire history of changes, not a one-time snapshot.**

## In plain terms

`git clone` (or `gh repo clone`, which handles the login for a private repo automatically) makes a new folder on your machine that is a full, working copy of the [repository](repository.md): the current files, and the complete history behind them, so `git log` works locally without any internet connection. That is the crucial difference from downloading a zip: a clone knows where it came from, so it can later fetch new changes or send your own changes back.

For a private repo, cloning only works once you are a member of the organization that owns it and your terminal is signed in through [`gh`](gh-cli.md); otherwise the command fails with "repository not found," which is not a bug, it is the access check doing its job. A public repository, by contrast, clones for anyone with no login at all.

## Why it matters this term

It is the one command that turns "a repository somewhere on GitHub" into "files on my own computer I can open in VS Code and hand to Claude Code," and it is the first real Git command every student in this course runs.

## See also

[Repository](repository.md) · [Git](git.md) · [Commit](commit.md)
