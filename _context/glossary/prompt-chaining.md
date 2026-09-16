---
term: "Prompt chaining"
slug: prompt-chaining
short: "Breaking one big request into a sequence of smaller prompts, where each step's output feeds the next."
aliases: []
category: prompting
see_also: [prompt, agent, context]
updated: 2026-09-16
---

# Prompt chaining

**Prompt chaining is staging a big task as several small prompts, each one built on the last, instead of asking for everything at once.**

## In plain terms

Instead of asking a model to do everything in one shot, read a script, decide the command, run it, and report back, you can stage it: one prompt reads the script, the next decides the command, a third runs it and checks the result. Each step is small, focused, and easy to check before you move on, the way you might ask a colleague for an outline before the full draft.

This matters for two reasons. Quality: smaller, well-scoped prompts tend to produce sharper results than one prompt asking for too much at once. Control: you can inspect each step and fix what looks wrong without redoing the whole chain. You will often do this informally inside one conversation ("good, now using that, draft the next part"), or more formally by saving each step as its own file.

When the model chains the steps itself, deciding what to do next based on what just happened rather than waiting for you to ask, you have crossed into [agent](agent.md) territory. The line between the two is not always sharp.

## Why it matters this term

It is the bridge from one-off requests to repeatable workflows, and the shape most of the useful automation later in the course will take.

## See also

[Prompt](prompt.md) · [Agent](agent.md) · [Context](context.md)
