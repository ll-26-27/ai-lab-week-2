---
term: "Agent"
slug: agent
short: "A model taking a step, checking the result, and deciding the next one, looping until a goal is done rather than answering once."
aliases: []
category: agents-and-harnesses
see_also: [tool-call, harness, agentic-systems, permission-mode]
updated: 2026-09-16
---

# Agent

**An agent is a model allowed to take a step, look at the result, and decide the next step, repeating until it judges the task done.**

## In plain terms

A chat reply is one turn: prompt in, text out. An agent is a loop. Ask it to "make a gallery comparing three image models," and it reads the folder, finds the script, runs it, checks the output, notices something failed, retries, builds the page, and reports back. Each of those actions is a [tool call](tool-call.md); the loop of doing one, checking it, and choosing the next is what makes it an agent rather than a single reply.

Everything past plain chat in this course is agentic in some degree: Cowork and ChatGPT Work, Claude Code and Codex, Claude in Chrome, computer use. What differs between them is what tools the loop may use and how often it has to stop and ask you. Two things an agent needs from you: a clear goal, and the right amount of leash, which is what [permission modes](permission-mode.md) exist for. Agents can also stack, one agent handing a focused subtask to another with its own fresh context (Claude Code calls these [subagents](subagent.md)), which is the start of an [agentic system](agentic-systems.md).

## Why it matters this term

It reframes Claude Code and Codex from "a chat that can touch files" to "an assistant that can carry out a piece of work," and the skill of steering that well is still context engineering.

## See also

[Tool call](tool-call.md) · [Harness](harness.md) · [Agentic system](agentic-systems.md) · [Permission mode](permission-mode.md)
