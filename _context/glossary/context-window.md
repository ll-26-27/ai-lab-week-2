---
term: "Context window"
slug: context-window
short: "The fixed amount of text a model can hold in view at once, measured in tokens."
aliases: ["context length"]
category: context
see_also: [context, token, context-rot, compact]
updated: 2026-09-16
---

# Context window

**The context window is the fixed amount of text a model can hold in view at one time; when it fills up, something has to give.**

## In plain terms

[Context](context.md) is what a model can see; the context window is how much of it fits. It is measured in [tokens](token.md), and the limit is large but real, a very big desk, not an infinite one. Every message you send and every reply Claude gives takes up part of it, and things placed on the desk early (memory, a CLAUDE.md, a system prompt) sit there from the start.

Windows today run from roughly two hundred thousand to a million tokens, which sounds like a lot until you drop in a transcript, three PDFs, and an afternoon of back and forth. As the window fills, two things happen: it runs out, at which point the app refuses, drops old turns, or summarizes (Claude Code calls this compacting, see [compact](compact.md)); and it gets worse before it runs out, since a long, cluttered window pulls attention toward the wrong material, see [context rot](context-rot.md).

You never need to count tokens yourself. The instinct to build is simpler: space is limited, so spend it on what matters.

## Why it matters this term

It is the reason [context engineering](context-engineering.md) is a skill and not an afterthought. If the window were infinite you could dump everything in; because it is finite, choosing is the work.

## See also

[Context](context.md) · [Token](token.md) · [Context rot](context-rot.md) · [Compact](compact.md)
