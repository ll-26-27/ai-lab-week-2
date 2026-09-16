---
term: "Homebrew"
slug: homebrew
short: "The package manager for macOS, installed once from a single terminal command, run as `brew`."
aliases: ["brew"]
category: tools-and-terminal
see_also: [package-manager, path, terminal]
updated: 2026-09-16
---

# Homebrew

**Homebrew is the standard [package manager](package-manager.md) for macOS, run from the terminal as `brew`.**

## In plain terms

Check whether you already have it with `brew --version`; a version number means you are set, and `command not found` means you install it with a single line pasted into Terminal from Homebrew's own site. The installer asks for your Mac password once, to create its folder, and on a Mac that has never had developer tools, it installs Apple's Command Line Tools first, the slow part, five to ten minutes.

The one step people miss: at the end, Homebrew prints a block telling you to add it to your [PATH](path.md), a couple of lines appended to a shell profile file. Copy the exact lines it printed, since they differ between Apple Silicon and Intel Macs, then quit Terminal completely and open a fresh window before checking `brew --version` again. From there, installing anything is one line: `brew install git`, `brew install gh`, `brew install ffmpeg`.

## Why it matters this term

Every command-line tool this course has you install on a Mac, Git, `gh`, ffmpeg, Node, goes through this one tool, and the PATH step is the single most common place setup gets stuck.

## See also

[Package manager](package-manager.md) · [PATH](path.md) · [Terminal / shell](terminal.md)
