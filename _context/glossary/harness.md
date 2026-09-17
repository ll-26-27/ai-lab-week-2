---
term: "Harness"
slug: harness
short: "The program wrapped around a model that runs the loop, holds its tools, and enforces its permission rules."
aliases: []
category: agents-and-harnesses
see_also: [agent, tool-call, permission-mode, wrapper, claude-interfaces]
updated: 2026-09-17
---

# Harness

**The harness is everything around the model: the loop that calls it, the tools it may use, its system prompt, the permission checks, and the interface you see.**

## In plain terms

The model itself is a function: tokens in, tokens out. By itself it cannot open a file or run code. The harness is the surrounding software that makes the rest happen: it assembles what goes into context, notices when the model asks to use a tool, performs that action, and hands the result back so the model can continue. A useful image: the model is the engine, the harness is the rest of the car, wheels, pedals, dashboard. The engine supplies the intelligence, but you only get anywhere because the harness connects it to the road.

Claude Code, Codex, Cowork, ChatGPT Work, and the plain scripts in `utils/` are all harnesses around the same kind of model, and each decides something different: what the model sees, what it can do, when it stops to ask you, and what you see of the process. The `utils/` scripts are the thinnest possible harness, one request, no loop, no tools; Claude Code is a thick one, with a full toolbox and a permission system.

The definition the field settled on in 2026, as the word moved from jargon to a named discipline ("harness engineering"): an agent harness is the software infrastructure surrounding a large language model that lets it operate as an agent, covering tool dispatch, memory and state, a workspace or sandbox, context management, and guardrails such as scoped permissions and approvals. The shorthand is *agent = model + harness*. Anthropic's own engineering notes add the caveat that a harness encodes assumptions about what the model cannot do on its own, and those assumptions go stale as models improve. (Sources: https://en.wikipedia.org/wiki/Agent_harness · https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents · https://claude.com/blog/harnessing-claudes-intelligence)

## Why it matters this term

It explains why the same underlying model feels different in a chat window versus in Claude Code, same engine, different harness, and it is where most of the interesting engineering in this field happens right now.

## See also

[Agent](agent.md) · [Tool call](tool-call.md) · [Permission mode](permission-mode.md) · [Wrapper](wrapper.md) · [Claude: web, desktop, command line](claude-interfaces.md)
