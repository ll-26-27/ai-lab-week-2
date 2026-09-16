---
term: "Agentic system"
slug: agentic-systems
short: "The whole arrangement around one or more agents: what tools they have, how they're organized, how they hand off work."
aliases: []
category: agents-and-harnesses
see_also: [agent, subagent, harness]
updated: 2026-09-16
---

# Agentic system

**An agentic system is the bigger picture around one or more agents: what tools each has, how they are organized, and how they hand work between each other.**

## In plain terms

A single [agent](agent.md) is a model pursuing a goal across several steps. An agentic system is everything around it: maybe one agent that spawns smaller [subagents](subagent.md) for focused jobs, one to search, one to summarize, one to check; maybe several agents coordinating; maybe just one agent given a carefully chosen set of tools and instructions. The term describes the setup as much as any one model inside it.

A useful comparison: a single agent is a researcher working through a task alone; an agentic system is the whole research group, who does what, who hands off to whom, what tools each person has. The intelligence still sits in the individual workers; the system is how they are organized. Two patterns worth knowing: subagents, where a main agent delegates a narrow job and pulls back only the result, keeping the main thread's context clean, and pipelines, a sequence of agents or [prompt chains](prompt-chaining.md) where each stage refines the previous one's output.

## Why it matters this term

You will not build a multi-agent system in week two, but the November project in this course points there, and the workflow gets cleaner the moment work is split across focused pieces instead of crammed into one long thread.

## See also

[Agent](agent.md) · [Subagent](subagent.md) · [Harness](harness.md)
