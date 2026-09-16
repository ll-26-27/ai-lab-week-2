---
term: "Context"
slug: context
short: "Everything a model can see right now: your messages, its replies, and any files in front of it."
aliases: []
category: context
see_also: [context-window, context-rot, context-engineering, memory]
updated: 2026-09-16
---

# Context

**Context is everything Claude can "see" at this moment; every reply is built only from what is currently in front of it.**

## In plain terms

Claude has no memory of you between conversations unless you deliberately give it one. Each reply is generated only from what is currently in the conversation: your prompts, its own earlier replies in this thread, any files you have shown it, and standing notes like a [CLAUDE.md](claude-md.md) or its auto-[memory](memory.md). That whole pile is the context.

A useful analogy is a character with no long-term memory who survives by writing notes to himself. Each new conversation with Claude is a fresh day for that character: it knows only what is written on the notes handed to it so far. If something is not in the context, Claude does not know it, even if you told it yesterday or it feels obvious. If something unhelpful is in the context, it can drag the answer down, see [context rot](context-rot.md). So the highest leverage skill in this course is choosing what goes in, which is [context engineering](context-engineering.md).

The scripts in `utils/` make this visible in the plainest way possible: each call sends exactly your prompt, and nothing else, unless you add a system prompt yourself.

## Why it matters this term

Almost every "why did it do that" moment traces back to context: something needed was missing, or something unhelpful was present. Get this idea and the rest of the glossary clicks into place.

## See also

[Context window](context-window.md) · [Context rot](context-rot.md) · [Context engineering](context-engineering.md) · [Memory](memory.md)
