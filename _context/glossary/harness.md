---
term: "Harness"
slug: harness
short: "The program wrapped around a model that runs the loop, holds its tools, and enforces its permission rules."
aliases: []
category: agents-and-harnesses
see_also: [agent, tool-call, permission-mode]
updated: 2026-09-16
---

# Harness

**The harness is everything around the model: the loop that calls it, the tools it may use, its system prompt, the permission checks, and the interface you see.**

## In plain terms

The model itself is a function: tokens in, tokens out. By itself it cannot open a file or run code. The harness is the surrounding software that makes the rest happen: it assembles what goes into context, notices when the model asks to use a tool, performs that action, and hands the result back so the model can continue. A useful image: the model is the engine, the harness is the rest of the car, wheels, pedals, dashboard. The engine supplies the intelligence, but you only get anywhere because the harness connects it to the road.

Claude Code, Codex, Cowork, ChatGPT Work, and the plain scripts in `utils/` are all harnesses around the same kind of model, and each decides something different: what the model sees, what it can do, when it stops to ask you, and what you see of the process. The `utils/` scripts are the thinnest possible harness, one request, no loop, no tools; Claude Code is a thick one, with a full toolbox and a permission system.

## Why it matters this term

It explains why the same underlying model feels different in a chat window versus in Claude Code, same engine, different harness, and it is where most of the interesting engineering in this field happens right now.

## See also

[Agent](agent.md) · [Tool call](tool-call.md) · [Permission mode](permission-mode.md)
