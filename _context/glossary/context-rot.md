---
term: "Context rot"
slug: context-rot
short: "The way a model's answers get worse as its context window fills with stale or contradictory material."
aliases: []
category: context
see_also: [context-window, context, context-engineering]
updated: 2026-09-16
---

# Context rot

**Context rot is the drift where answers get worse as the context window fills with clutter, not because it is full, but because it is messy.**

## In plain terms

More context is not automatically better. As a conversation gets long, with abandoned tangents, an early draft you have since rejected, or two contradictory instructions sitting in the same thread, the model has a harder time telling what currently matters. The quality of its answers can quietly slide even before the window is technically full.

A desk analogy holds up well: a clear desk with the one document you need beats a desk buried under every draft from the past hour. The buried desk is context rot. Signs you may be seeing it: Claude reverts to an instruction you already corrected, it blends two different tasks together, or its replies get vaguer the longer the thread runs.

The fixes are simple and mostly about discipline rather than tools: start a fresh conversation for a new task, restate what matters now instead of trusting the model to sort it out, or remove the clutter rather than stacking more on top of it.

## Why it matters this term

It is the counter-intuitive half of [context engineering](context-engineering.md): the goal is not to give the model everything, it is to give it the right things and keep the rest out.

## See also

[Context window](context-window.md) · [Context](context.md) · [Context engineering](context-engineering.md)
