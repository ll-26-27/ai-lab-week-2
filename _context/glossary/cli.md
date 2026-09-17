---
term: "CLI (command-line interface)"
slug: cli
short: "Typed commands in the terminal that a program answers with text: harder to start than clicking, easy to save, repeat, and hand to an agent."
aliases: ["command-line interface", "command line", "command-line tool"]
category: tools-and-terminal
see_also: [terminal, gui, api, script, claude-code, gh-cli]
updated: 2026-09-17
---

# CLI (command-line interface)

**A CLI is a program you use by typing a command in the terminal; it does the job and prints text back.**

## In plain terms

`git`, `gh`, `ffmpeg`, `node utils/generate-image.mjs`, and `claude` itself are all CLIs. Where a [GUI](gui.md) shows you buttons, a CLI waits for a line of text and answers in text. That makes it harder to start (you have to know what to type) and much easier to repeat: a command can be copied into a note, edited, run again tomorrow, and put inside a [script](script.md) that runs it fifty times. It also makes it something an agent can operate. Claude Code runs CLIs on your behalf all day; it cannot click a button in a GUI without special tooling, but it can type a command and read what comes back.

The [terminal](terminal.md) is the window; the CLI is the program you run inside it. In this course you meet CLIs two ways: typing them yourself, and asking Claude Code, mostly in the desktop app's Code tab, to run them for you.

## Why it matters this term

Every tool of the trade in this course has a CLI, and the reason is not nostalgia. Text commands are the shared language between you, your notes, your scripts, and the agents you work with.

## See also

[Terminal / shell](terminal.md) · [GUI](gui.md) · [API](api.md) · [Script](script.md) · [Claude Code](claude-code.md) · [gh (GitHub CLI)](gh-cli.md)
