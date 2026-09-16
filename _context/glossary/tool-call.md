---
term: "Tool call"
slug: tool-call
short: "When a model stops talking and does something instead: runs code, reads a file, searches the web."
aliases: []
category: agents-and-harnesses
see_also: [agent, hallucination, harness]
updated: 2026-09-16
---

# Tool call

**A tool call is the model writing a structured request, run this code, read this file, that the surrounding program executes, feeding the result back into context.**

## In plain terms

A model on its own only produces text; it cannot reliably multiply large numbers or know what is in your folder by prediction alone. A tool call is how it steps outside pure prediction: the harness gives it a list of tools it may ask for, the model writes a request in the agreed format, the harness runs it, and the model reads the answer and keeps going.

The multiplication activity in this course is the cleanest example: "no code" forces a prediction and the answer is often wrong; "write Python and run it" turns the job into a tool call, and the answer is exact every time. The model did not get smarter; its job changed from guessing the answer to writing the request for a tool that calculates it correctly. Every surface in this course is defined by which tools it grants: chat has search, Cowork and Work add files in a folder, Code and Codex add the terminal and Git, Claude in Chrome adds a browser, computer use adds the whole screen.

## Why it matters this term

It resolves the tension the multiplication activity sets up: the model is unreliable at some things until it can use a tool, which is exactly why folder and terminal access make it trustworthy for real work.

## See also

[Agent](agent.md) · [Hallucination](hallucination.md) · [Harness](harness.md)
