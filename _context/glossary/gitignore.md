---
term: ".gitignore"
slug: gitignore
short: "A file listing patterns Git should never track, keeping secrets, huge folders, and junk out of a repository."
aliases: []
category: git-and-github
see_also: [git, env-file, repository]
updated: 2026-09-16
---

# .gitignore

**`.gitignore` is a plain-text file listing patterns for Git to never track, so those files stay out of every commit, on purpose, forever.**

## In plain terms

Some files in a project should never end up in its history: a secrets file like `.env`, a huge generated `node_modules/` folder, or an `output/` folder full of images you are only going to regenerate. `.gitignore` lists patterns for exactly these, one per line:

```text
.env
.env.*
!.env.example
```

The first two lines tell Git to ignore the secrets file and any variant of it; the third, with the `!`, is an exception, so the blank example template still travels with the repository while the real keys never do. Once a pattern is listed, `git status` simply stops mentioning matching files, as if Git cannot see them at all, which is the whole mechanism: not a promise to be careful, a rule the tool enforces automatically.

## Why it matters this term

It is how a public or shared repository stays safe by default: `cp .env.example .env`, paste in a real key, and `git status` shows nothing changed, because `.gitignore` already told Git to look away.

## See also

[Git](git.md) · [.env file](env-file.md) · [Repository](repository.md)
