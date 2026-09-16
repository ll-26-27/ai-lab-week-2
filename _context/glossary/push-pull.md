---
term: "Push / pull"
slug: push-pull
short: "Sending your commits to GitHub (push) and fetching new ones from it (pull), keeping your copy and the shared one in sync."
aliases: ["push", "pull"]
category: git-and-github
see_also: [commit, github, clone]
updated: 2026-09-16
---

# Push / pull

**Push sends your local commits up to GitHub; pull brings down commits made there by someone else, keeping your copy and the shared one in sync.**

## In plain terms

Cloning a repository copies it once; push and pull are how the two copies, yours and GitHub's, stay in agreement afterward. `git push` sends any commits you have made locally up to the repository on GitHub, so others (and you, from another machine) can see them. `git pull` does the reverse: it fetches commits that exist on GitHub but not yet in your local copy, and merges them in.

The pattern that avoids most headaches is pull before you push: get the latest version first, so your new commits build on top of the current state rather than colliding with changes you did not know about. Working "inside-out" on a project with submodules follows the same logic at a larger scale, pushing the inner pieces before updating the pointer that refers to them.

## Why it matters this term

Once more than one person, or one person on more than one machine, touches the same repository, push and pull are what keeps everyone's copy honest.

## See also

[Commit](commit.md) · [GitHub](github.md) · [Clone](clone.md)
