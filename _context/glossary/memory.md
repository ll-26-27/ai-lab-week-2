---
term: "Memory"
slug: memory
short: "Notes a model saves between sessions and re-reads at the start of the next one."
aliases: []
category: context
see_also: [context, claude-md, compact]
updated: 2026-09-16
---

# Memory

**Memory is text saved between sessions and re-read at the start of the next one; some of it you write, some the model writes for itself.**

## In plain terms

A [context window](context-window.md) is wiped clean between conversations. Anything that persists is a file loaded again at the start of the next one; that is the entire mechanism, in every product that offers "memory." The differences are only who writes the file and where it lives.

In Claude's chat and desktop apps, an opt-in memory feature keeps a short, running set of notes about you, your preferences, and recurring projects, and places that text near the start of new conversations. In Claude Code specifically there are two layers: [CLAUDE.md](claude-md.md), which you write, and auto memory, which Claude writes when you correct it ("use pnpm, not npm") or tell it something it should keep. Both are plain Markdown files you can open, edit, or delete.

The framing worth keeping: this is not a mind remembering you, it is words being placed at the front of the next conversation automatically. Seeing memory this way is a good first step toward understanding [context](context.md) itself.

## Why it matters this term

Standing facts about a project belong in a CLAUDE.md or AGENTS.md, which is explicit and under your control; memory is a convenience layered on top, not a guarantee.

## See also

[Context](context.md) · [CLAUDE.md](claude-md.md) · [Compact](compact.md)
