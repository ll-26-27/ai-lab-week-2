---
term: "Commit"
slug: commit
short: "A saved snapshot of a repository at one point in time, with a message describing what changed and why."
aliases: []
category: git-and-github
see_also: [git, push-pull, repository]
updated: 2026-09-16
---

# Commit

**A commit is a saved snapshot of a repository's files at one moment, stamped with a message, an author, and a timestamp.**

## In plain terms

Editing a file does not by itself create any Git history; a commit is the deliberate act of saying "save this state, with this note explaining it." The usual sequence is: change some files, stage the ones you want included (`git add`), then commit with a short message describing what changed and, ideally, why (`git commit -m "add the batch script"`). Every commit is stamped with a name and an email, set once with `git config --global user.name` and `user.email`, so history records who did what.

Because each commit is a complete snapshot, `git log` shows the whole sequence of them, and you can compare any two, or return to an earlier one, at will. Good commit messages describe the reasoning, not just the mechanics, "fix the seed not being passed to the batch script" is more useful later than "fix bug."

## Why it matters this term

Commits are the actual unit of history that everything else, cloning, pushing, pulling, reviewing changes, is built out of; a repository without commits is just a folder.

## See also

[Git](git.md) · [Push / pull](push-pull.md) · [Repository](repository.md)
