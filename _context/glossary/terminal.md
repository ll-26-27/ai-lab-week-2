---
term: "Terminal / shell"
slug: terminal
short: "A text window where you type commands to your computer instead of clicking: Terminal on a Mac, PowerShell on Windows."
aliases: ["shell", "PowerShell", "Terminal"]
category: tools-and-terminal
see_also: [path, package-manager, script]
updated: 2026-09-16
---

# Terminal / shell

**The terminal is a text window where you type commands directly to your computer, instead of clicking icons and menus; the program running inside it, interpreting what you type, is the shell.**

## In plain terms

On a Mac, this is the Terminal app; on Windows, it is PowerShell. Both give you a prompt, a short line ending in `%` or starting with `PS`, where you type a command and press Enter, and the computer runs it and prints a result. Everything in this course's setup tutorial that is not a website happens here: installing tools, cloning a repository, running the scripts in `utils/`.

It can feel unfamiliar if you have only ever clicked, but the commands you need this term are short and repeatable: `cd` to move between folders, `mkdir` to make one, `git clone` to copy a repository, `node script.mjs` to run a script. The shell is the program reading and interpreting each line you type; different shells (`zsh` on newer Macs, `bash` on some setups, PowerShell on Windows) accept slightly different syntax for the same idea.

## Why it matters this term

Nearly every install step, script run, and Git command in this course happens in the terminal, and comfort here is the single most useful habit to build in week two.

## See also

[PATH](path.md) · [Package manager](package-manager.md) · [Script](script.md)
