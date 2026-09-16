---
term: "Node"
slug: node
short: "The program that runs the JavaScript scripts in this course's `utils/` folder, installed through the package manager."
aliases: ["Node.js", "npm"]
category: tools-and-terminal
see_also: [script, package-manager, api]
updated: 2026-09-16
---

# Node

**Node (Node.js) is the program that runs JavaScript outside a web browser, which is how the scripts in `utils/` generate images and text from the terminal.**

## In plain terms

JavaScript was originally a language only browsers understood. Node lets the same language run directly on your computer, as a script you invoke from the [terminal](terminal.md): `node utils/generate-image.mjs openrouter "a red pencil" --model ...`. Installing Node also brings along `npm`, a package manager scoped to JavaScript projects specifically, which is separate from Homebrew or winget and used for a project's own code dependencies rather than system-wide tools.

You need Node v22 or higher for this course's scripts; check with `node --version`. Beyond running the scripts, Node is worth recognizing on sight, since it is the runtime behind an enormous share of command-line tools, small websites, and the JavaScript half of most modern software, including much of what Claude Code and Codex write and run on your behalf.

## Why it matters this term

Every script this course hands you to generate an image or a batch of text runs through Node; without it installed and on your [PATH](path.md), none of `utils/` works.

## See also

[Script](script.md) · [Package manager](package-manager.md) · [API](api.md)
