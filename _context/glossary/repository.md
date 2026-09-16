---
term: "Repository"
slug: repository
short: "A folder tracked by Git, holding the files plus their entire recorded history of changes."
aliases: ["repo"]
category: git-and-github
see_also: [git, github, clone]
updated: 2026-09-16
---

# Repository

**A repository, "repo" for short, is a folder that Git is tracking: the files as they are now, plus every recorded change that got them there.**

## In plain terms

Any folder becomes a repository the moment Git starts tracking it (`git init`), or the moment you copy one down from GitHub (`git clone`). What makes it different from an ordinary folder is the hidden `.git` subfolder inside it, holding the entire history: every saved snapshot, every message describing what changed, and the ability to reconstruct any earlier version on demand. This course's own repo, `tdm155ai/tdm155ai-week-2`, is exactly this: a README, a `tutorial/` folder, a `utils/` folder of scripts, and the full history of how they got assembled.

A repository can be public or private on GitHub, and it can belong to a person or to an organization. Cloning one copies the whole thing, files and history together, not a snapshot; pushing and pulling keep your copy and the one on GitHub in sync.

## Why it matters this term

Nearly everything you touch this term, the course's own materials, any project you start, a shared context pack, lives as a repository, and understanding what that hidden history buys you is worth more than memorizing any one command.

## See also

[Git](git.md) · [GitHub](github.md) · [Clone](clone.md)
