---
term: "Package manager"
slug: package-manager
short: "A terminal tool that installs and updates programs by name, remembering what it put on your machine."
aliases: []
category: tools-and-terminal
see_also: [homebrew, winget, terminal, path]
updated: 2026-09-16
---

# Package manager

**A package manager is a terminal tool that fetches, installs, and remembers programs by name, instead of you downloading and dragging installers by hand.**

## In plain terms

There are two ways to get a program onto a computer. The download: you visit a website, click Download, open what arrives, and drag it into Applications or run an installer, the way you have probably installed everything in your life so far. The package manager: you type one line in the [terminal](terminal.md) naming the program, `brew install git` or `winget install --id Git.Git`, and a tool fetches it, installs it, and keeps a record that it did.

On a Mac that tool is [Homebrew](homebrew.md); on Windows it is [winget](winget.md), which ships with Windows 11. The advantage compounds over time: the package manager can list everything it installed, update all of it with one command, and let you set up a brand new machine by pasting a short list of lines. It is also the only practical way to install tools with no icon and no window, Git, `gh`, ffmpeg, Node, which is why this course uses it for nearly everything except the Claude and ChatGPT desktop apps.

## Why it matters this term

Almost every command-line tool you install this term, Git, the GitHub CLI, ffmpeg, Node, VS Code, comes through the package manager, and understanding what it is doing removes the mystery from "paste this line into Terminal."

## See also

[Homebrew](homebrew.md) · [winget](winget.md) · [Terminal / shell](terminal.md) · [PATH](path.md)
