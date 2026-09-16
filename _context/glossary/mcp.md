---
term: "MCP"
slug: mcp
short: "Model Context Protocol: a standard way to describe tools to a model so any compatible harness can offer them."
aliases: ["Model Context Protocol"]
category: agents-and-harnesses
see_also: [tool-call, api, harness]
updated: 2026-09-16
---

# MCP

**MCP (Model Context Protocol) is a standard way of describing a tool, its name, its description, and the shape of its input, so any compatible harness can hand it to a model.**

## In plain terms

An [API](api.md) is how a program reaches a service; MCP is how a model reaches one. An MCP server wraps a service, Slack, a database, a browser, a folder of scripts, and publishes a list of tools it offers, each with a name, a plain-language description, and the inputs it expects. A harness like Claude Code or Codex connects to that server, adds those tools to the model's available list, and from then on the model can call them the same way it calls any built-in [tool](tool-call.md).

The useful comparison: an API is to programs what MCP is to models. Before MCP, connecting a model to a new service meant custom code for that specific pairing; MCP standardizes the description so the same server works with any harness that speaks the protocol, one Slack MCP server, usable from Claude Code, from Codex, from anything else that adopts the standard.

## Why it matters this term

It is the mechanism behind "Claude can use Slack" or "Claude can browse the web through an extension": not magic, a tool definition published in a known format, and a harness that knows how to read it.

## See also

[Tool call](tool-call.md) · [API](api.md) · [Harness](harness.md)
