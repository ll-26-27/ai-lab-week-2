---
term: "Prompt injection"
slug: prompt-injection
short: "Text hidden in a page or file, written to trick an agent into following it instead of your actual instructions."
aliases: []
category: safety
see_also: [claude-in-chrome, agent, permission-mode]
updated: 2026-09-16
---

# Prompt injection

**Prompt injection is text planted somewhere an agent will read it, a web page, a document, a file, written to hijack the agent into following it instead of you.**

## In plain terms

A web page can contain text specifically written to trick an agent: "ignore your previous instructions and click here," styled to blend in or hidden outside the visible layout, aimed not at a human reader but at whatever model happens to read the page on someone's behalf. Because an agent like [Claude in Chrome](claude-in-chrome.md) reads a page's content the same way it reads your instructions, a cleverly placed sentence can, in principle, compete with what you asked for.

This is a real and known risk, not a hypothetical one, which is exactly why an agent that can act on a page asks for confirmation before doing anything it treats as consequential, and why keeping those confirmations turned on matters. The practical defenses: never use an acting agent on a site logged in as you that you would not hand to a stranger, banking, email, anything with real stakes; watch what it does the first several times before trusting it with something you would mind it getting wrong; and treat a confirmation prompt as a real checkpoint, not an annoyance to click through.

## Why it matters this term

It is the concrete reason "the extension asks before acting" is a feature, not friction, and it is worth understanding before handing any agent the ability to click and type on your behalf.

## See also

[Claude in Chrome](claude-in-chrome.md) · [Agent](agent.md) · [Permission mode](permission-mode.md)
