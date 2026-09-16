---
term: "System prompt"
slug: system-prompt
short: "Background instructions a model has before you type anything, set by the app rather than by you."
aliases: []
category: prompting
see_also: [prompt, context-window, harness]
updated: 2026-09-16
---

# System prompt

**The system prompt is text placed at the top of the context window before your conversation starts, telling the model who it is and how to behave.**

## In plain terms

Every time you open a chat app, it has already sent the model several thousand words you never see: the date, the tools available, formatting habits, safety rules, house style. Your first message lands after all of that. This is why the same underlying model behaves differently in different apps, and why "ChatGPT" is a product while "GPT-5" is a model underneath it, see [harness](harness.md).

You can add to it, but you do not usually write the whole thing yourself. In the chat apps, "instructions for Claude" or ChatGPT's custom instructions get added to every conversation; project instructions get added to every conversation in that project. In Claude Code or Codex, a [CLAUDE.md or AGENTS.md](claude-md.md) in your folder is read at the start of every session, the same idea with a different filename. Through the API, you write the system prompt yourself, or you send none at all: `utils/generate-text.mjs` sends your prompt with no coaching unless you pass `--system`, which is the most honest version of the model you will meet this term.

## Why it matters this term

It makes "instructions live in the context" concrete, and it is the bridge from ordinary prompting to CLAUDE.md, AGENTS.md, and skills.

## See also

[Prompt](prompt.md) · [Context window](context-window.md) · [Harness](harness.md)
