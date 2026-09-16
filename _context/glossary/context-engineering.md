---
term: "Context engineering"
slug: context-engineering
short: "The deliberate practice of choosing what a model can see, and what it can't, so it does its best work."
aliases: []
category: context
see_also: [context, context-window, context-rot, claude-md]
updated: 2026-09-16
---

# Context engineering

**Context engineering is deciding, on purpose, what goes in front of the model, rather than leaving it to chance.**

## In plain terms

Once you know that every answer comes only from [context](context.md), that the [context window](context-window.md) is finite, and that clutter causes [context rot](context-rot.md), one skill follows from all three: deciding on purpose what to put in front of Claude. That is context engineering, and it looks less like programming and more like preparing a good briefing for a sharp assistant.

In practice it means giving the model the material that matters, the real reading or the real spreadsheet, not a vague description of it; leaving out old drafts and unrelated tangents; writing standing instructions once, in a place the model will reliably see them, which is exactly what [CLAUDE.md or AGENTS.md](claude-md.md) files and skills are for; and starting fresh when the task changes instead of dragging old context along.

This course treats it as the single highest-leverage move for good output, ahead of clever wording in any one prompt.

## Why it matters this term

It is the through-line behind almost every tool in this course: the folder you connect to Cowork, the file you attach in chat, the CLAUDE.md or AGENTS.md a repo carries, the skill that loads only when needed. Each is context engineering in a different shape.

## See also

[Context](context.md) · [Context window](context-window.md) · [Context rot](context-rot.md) · [CLAUDE.md](claude-md.md)
