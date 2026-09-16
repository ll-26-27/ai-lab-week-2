---
term: "PATH"
slug: path
short: "The list of folders your terminal searches when you type a command's name."
aliases: []
category: tools-and-terminal
see_also: [terminal, package-manager]
updated: 2026-09-16
---

# PATH

**PATH is the list of folders the terminal searches, in order, when you type a command name, to find the program that name refers to.**

## In plain terms

When you type `git` and press Enter, the terminal does not magically know where the Git program lives on disk. It checks each folder on a list called PATH, in order, until it finds a program with that name, and runs it. "Command not found" (Mac) or "not recognized" (Windows) almost always means the program is installed somewhere, but its folder is not yet on that list, or the terminal window you are in was opened before the list changed.

That second case explains a pattern you will hit repeatedly in setup: a tool tells you it added itself to your PATH, but the fix only takes effect in a new terminal window, since the one already open loaded its PATH when it started. Quitting and reopening the terminal, not just closing a tab, is usually the actual fix.

## Why it matters this term

Both Homebrew and winget print PATH-related instructions right after installing themselves, and "quit and reopen the terminal" resolves more setup confusion this week than any other single step.

## See also

[Terminal / shell](terminal.md) · [Package manager](package-manager.md)
