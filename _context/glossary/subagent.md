---
term: "Subagent"
slug: subagent
short: "A separate agent with its own fresh context, handed a focused job so the main conversation stays clean."
aliases: []
category: agents-and-harnesses
see_also: [agent, agentic-systems, context-window]
updated: 2026-09-16
---

# Subagent

**A subagent is a second, separate model instance with its own fresh context window, given one focused job so the main conversation isn't cluttered with the work of getting there.**

## In plain terms

Say you ask Claude Code to review five hundred lines of code for one bug. It could read all five hundred lines into the main conversation, filling the [context window](context-window.md) with material you never wanted to see, or it can hand that whole search to a subagent: a separate Claude, with an empty context of its own, told exactly "read these files, find this kind of bug, report back." The main conversation only receives the finding, not the reading.

This matters for the same reason [context engineering](context-engineering.md) matters everywhere else: a long, cluttered context degrades answers (see [context rot](context-rot.md)), and a subagent is a way of keeping the mess contained to a disposable side conversation instead of the one you care about. Claude Code supports this natively; you can ask it to delegate a search or a review to a subagent, or a `SKILL.md` can declare that it always runs in one (`context: fork`).

## Why it matters this term

It is the building block of any larger [agentic system](agentic-systems.md): one agent that spawns smaller, focused ones and pulls back only their results is the simplest version of "several agents working together."

## See also

[Agent](agent.md) · [Agentic system](agentic-systems.md) · [Context window](context-window.md)
