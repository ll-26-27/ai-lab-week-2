---
term: "Codex"
slug: codex
short: "OpenAI's coding agent in the ChatGPT desktop app: local folders, a terminal, Git, and AGENTS.md, Claude Code's counterpart."
aliases: []
category: apps-and-surfaces
see_also: [claude-code, agents-md, skill-md]
updated: 2026-09-16
---

# Codex

**Codex is OpenAI's counterpart to Claude Code: an agent that works in a local folder with the terminal and Git, and reads your `AGENTS.md`.**

## In plain terms

Where [Claude Code](claude-code.md) is Claude working directly in a folder on your computer, Codex is the same idea built on OpenAI's models, reached from its own tab in the ChatGPT desktop app rather than from Work. Open a local folder, for this course `AI/tdm155ai-week-2`, and Codex reads the terminal, runs commands, and edits files with your permission, the same shape of work as Claude Code even though the details of the interface differ.

What it reads before you type anything: `AGENTS.md` at the repo root and in subfolders, concatenated top down so the closest file wins on anything that conflicts, plus a personal override file in your home directory; and skills from `.agents/skills/`, invoked with `$skill-name`. Codex keeps its own separate history from Chat and Work, and it is desktop-only, though a mobile "Remote" tab can view desktop Codex sessions.

## Why it matters this term

The multiplication and batch activities in this course are meant to be run through either Claude Code or Codex interchangeably; comparing what each one asks you before acting is one of the week's exercises.

## See also

[Claude Code](claude-code.md) · [AGENTS.md](agents-md.md) · [SKILL.md](skill-md.md)
