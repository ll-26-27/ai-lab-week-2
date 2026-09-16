---
term: "Git"
slug: git
short: "Version control: a tool that records every change to a folder of files, so you can see history, go back, and share it."
aliases: []
category: git-and-github
see_also: [github, repository, commit, clone]
updated: 2026-09-16
---

# Git

**Git is version control software that records every change made to a folder of files, so you can see its history, go back to an earlier point, and share it without emailing zip files.**

## In plain terms

Without Git, sharing a project usually means "final_v3_FOR_REAL_final.zip." With it, a folder becomes a [repository](repository.md): a record of every saved change, who made it, and when, that you can inspect, undo, or send to a collaborator as itself, not a copy. The core moves are small and repeat constantly: edit files, stage the ones you want to save (`git add`), save a snapshot with a message (`git commit`), and look at what changed (`git status`, `git log`).

Git runs entirely on your own machine, no internet required, which is part of why it feels different from a cloud document: you can commit, branch, and inspect history offline, and only need a connection when you want to send changes somewhere else, which is [GitHub's](github.md) job. This course installs a newer Git than the one built into macOS through the package manager, since Apple's version lags behind.

## Why it matters this term

Git is the record-keeping layer under nearly everything in this course: cloning a repo, seeing what changed, and later, sharing your own work, all depend on it.

## See also

[GitHub](github.md) · [Repository](repository.md) · [Commit](commit.md) · [Clone](clone.md)
