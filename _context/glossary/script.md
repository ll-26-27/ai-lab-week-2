---
term: "Script"
slug: script
short: "A short program you run by name from the terminal, doing one job, rather than a full application with windows."
aliases: []
category: tools-and-terminal
see_also: [node, api, tool-call]
updated: 2026-09-16
---

# Script

**A script is a short program, usually one file, that you run from the terminal to do one specific job, generate an image, send a request, process a file, rather than a full application with menus and windows.**

## In plain terms

The files in this course's `utils/` folder, `generate-image.mjs`, `generate-text.mjs`, `batch-images.mjs`, are all scripts. Each does one thing: it takes a prompt and some options from the command line, calls a model's [API](api.md), and saves the result to a new folder so nothing is ever overwritten. You run one by naming it after `node`: `node utils/generate-image.mjs openrouter "a lighthouse in a storm" --model google/gemini-2.5-flash-image`.

Scripts matter past this course because they are the plainest, most inspectable version of "software that does something." Every line is readable text; there is no hidden interface, and you, or Claude Code, or Codex, can read exactly what a script does before running it, which is precisely what happens when you ask an agent to "run `utils/generate-image.mjs` and tell me where the image landed," it reads the script, works out the command, and executes it.

## Why it matters this term

A script is the simplest possible [harness](harness.md), one request, no loop, no tools of its own, and understanding it is the foundation for understanding everything more elaborate built on top.

## See also

[Node](node.md) · [API](api.md) · [Tool call](tool-call.md)
