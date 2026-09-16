---
term: "CLAUDE.md"
slug: claude-md
short: "A Markdown file in a project folder that Claude Code reads before doing anything, so it starts already knowing the basics."
aliases: []
category: agents-and-harnesses
see_also: [agents-md, context-engineering, memory, skill-md]
updated: 2026-09-16
---

# CLAUDE.md

**`CLAUDE.md` is a plain Markdown file at the top of a project that Claude Code reads first, before you type anything, so it starts every session already knowing the folder's basics.**

## In plain terms

Each session starts with an empty [context window](context-window.md); a fresh conversation, no memory of the last one. `CLAUDE.md` is the note you leave for next time, pinned to the front of the folder. Whatever you would otherwise retype every session, "this is a course repo, keep summaries short, never touch `originals/`, use pnpm not npm," goes in this file once, and Claude Code reads it as the first thing in the conversation.

It can live at a few scopes: `~/.claude/CLAUDE.md` for you, everywhere; `./CLAUDE.md` in the project, seen by everyone who clones the repo; `./CLAUDE.local.md` for you, this project only, kept out of Git. Claude loads the file in your working directory and every folder above it, closest one read last, so it wins on anything that conflicts. It is not enforced like code; it is context, so specific and short works better than long and vague.

## Why it matters this term

It is [context engineering](context-engineering.md) made concrete and durable: the standing part of the briefing, written once instead of retyped every session. This course's own repo has one, worth opening as a real example.

## See also

[AGENTS.md](agents-md.md) · [Context engineering](context-engineering.md) · [Memory](memory.md) · [SKILL.md](skill-md.md)
