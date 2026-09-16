---
term: "Plan mode"
slug: plan-mode
short: "A permission mode where an agent only reads and proposes a step-by-step plan, then waits, instead of touching anything."
aliases: []
category: agents-and-harnesses
see_also: [permission-mode, agent]
updated: 2026-09-16
---

# Plan mode

**Plan mode is a permission mode where an agent researches a task and proposes a step-by-step plan before it touches a single file.**

## In plain terms

Most [permission modes](permission-mode.md) trade speed for safety along one axis: ask before everything, or ask before nothing. Plan mode is a different move entirely: the agent is not allowed to act at all yet. It reads what it needs to, thinks through an approach, and writes out the steps it intends to take, then stops and waits for you to approve, adjust, or reject the plan before anything changes.

The reason this earns its own name rather than sitting quietly inside "Ask" mode is that a plan is itself a deliverable. Reading five proposed steps and catching a wrong assumption before any file changes is much cheaper than reading a diff after the fact and discovering the same wrong assumption baked into five separate edits. A good default for any task you have not done with an agent before: start in plan mode, read the plan carefully, and only switch to a more permissive mode once the plan looks right.

## Why it matters this term

It is the middle path between "ask about everything" and "just do it," and the right default whenever a task is new, unfamiliar, or touches something you would mind losing.

## See also

[Permission mode](permission-mode.md) · [Agent](agent.md)
