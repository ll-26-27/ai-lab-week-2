---
term: "gh (GitHub CLI)"
slug: gh-cli
short: "GitHub's own command-line tool: sign in, clone private repos, and manage GitHub without leaving the terminal."
aliases: ["gh", "GitHub CLI"]
category: git-and-github
see_also: [github, git, clone]
updated: 2026-09-16
---

# gh (GitHub CLI)

**`gh` is GitHub's own command-line tool, letting you sign in, clone repositories, and manage GitHub actions without leaving the terminal.**

## In plain terms

`gh auth login` walks through a short series of questions, GitHub.com, HTTPS, "authenticate Git with your GitHub credentials," then a one-time code you paste into a browser window that opens automatically. Answering yes to that middle question is what matters most: it means plain Git commands will use `gh`'s login whenever they talk to GitHub, so `git clone`, `git push`, and `git pull` on a private repo just work afterward, no separate password or token to manage.

Once signed in, `gh repo clone tdm155ai/tdm155ai-week-2` is the command this course uses to get the private course repository onto your machine; it is running plain Git underneath, just with the login already handled. `gh auth status` confirms who you are signed in as.

## Why it matters this term

Without `gh` signed in, cloning this course's private repository fails with "repository not found," which looks like an access problem but is usually a sign-in problem instead.

## See also

[GitHub](github.md) · [Git](git.md) · [Clone](clone.md)
