---
term: "Compact"
slug: compact
short: "A command that summarizes a long conversation and continues in a fresh thread, so a filling context window doesn't degrade the work."
aliases: ["/compact"]
category: context
see_also: [context-window, context-rot, memory]
updated: 2026-09-16
---

# Compact

**Compact is a command (`/compact`) that crushes a long conversation into a summary and starts a new thread carrying that summary forward.**

## In plain terms

A conversation can only get so long before it hits the edge of the [context window](context-window.md), and well before that a cluttered window starts to drag answers down, see [context rot](context-rot.md). Compact is the deliberate fix: it summarizes the conversation so far and continues from that summary, alongside the system prompt and [memory](memory.md), which are always carried forward regardless.

It is worth remembering that compact is not magic. It is a Markdown instruction telling the model how to summarize a long conversation, which means you can customize it: a compact written for a coding session should keep different things than one written for research notes.

You type `/compact` yourself, mid-conversation, rather than waiting to run out of room; a related move, forking or branching a conversation, keeps the original intact while you try something risky in a copy.

## Why it matters this term

It is the first concrete, type-it-now tool for managing the context story instead of just understanding it, and a clean proof that even a model's "smart" features are, underneath, just text.

## See also

[Context window](context-window.md) · [Context rot](context-rot.md) · [Memory](memory.md)
