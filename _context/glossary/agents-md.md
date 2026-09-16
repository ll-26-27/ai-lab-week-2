---
term: "AGENTS.md"
slug: agents-md
short: "The cross-tool version of CLAUDE.md: a Markdown file at a repo's root that Codex and other coding agents read for project instructions."
aliases: []
category: agents-and-harnesses
see_also: [claude-md, codex, agent]
updated: 2026-09-16
---

# AGENTS.md

**`AGENTS.md` is the open-convention sibling of [CLAUDE.md](claude-md.md): a Markdown file at a repo's root that Codex and several other coding agents read for project instructions.**

## In plain terms

Same idea as `CLAUDE.md`, different filename, and this one is not one company's format but an open convention (agents.md) that Codex, Cursor, GitHub Copilot, and others share. Put in it what a new collaborator, human or agent, would need on day one: what the project is, how to run it, the conventions, the rules to follow. It is plain Markdown; there is no required schema.

Codex reads it in a specific order and concatenates what it finds, from a global file in your home directory down to the current folder, so the file closest to where you are working is read last and wins on anything that conflicts. Because two tools might want the same instructions, a common layout writes the real content once in `AGENTS.md` and makes `CLAUDE.md` a one-line file that imports it (`@AGENTS.md`), so Claude Code and Codex both work from a single source.

## Why it matters this term

You will use Codex in this course, and it never reads `CLAUDE.md`; a repo meant to work with both tools needs this file, or the import trick that keeps one from going stale.

## See also

[CLAUDE.md](claude-md.md) · [Codex](codex.md) · [Agent](agent.md)
