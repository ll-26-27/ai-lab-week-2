---
term: "Prompt"
slug: prompt
short: "The text you send a model; its reply is the most likely continuation of everything in context, including this."
aliases: []
category: prompting
see_also: [system-prompt, context, prompt-chaining, sampling]
updated: 2026-09-16
---

# Prompt

**A prompt is simply what you send the model: your message, your question, your instruction.**

## In plain terms

There is less mystique here than the word suggests. A prompt is your input, the part you just added; the model reads everything in [context](context.md) and writes a reply. "Prompt engineering" sounds like a craft of secret phrasing, but this course takes a plainer line: the model fills in whatever you leave out, so the biggest gains come from saying what you want, not from clever wording.

The [sampling and defaults](sampling.md) activity shows this exactly: "a happy family" hands the model every decision, and it fills each blank with its most probable guess. Thirty words hand back the decisions you care about. Habits that hold up: give the model the actual material rather than a description of it, say what form the answer should take (a table, three bullets, JSON), show an example when you have a style in mind, and push back on the first answer, since "shorter" or "check that against the source" are prompts too.

A prompt you will reuse belongs in a file rather than retyped each time, a [skill](skill-md.md) if it is a task, a [CLAUDE.md](claude-md.md) if it is a standing rule.

## Why it matters this term

It right-sizes expectations. Prompting is closer to clear writing than incantation, and the real leverage is in context, not phrasing.

## See also

[System prompt](system-prompt.md) · [Context](context.md) · [Prompt chaining](prompt-chaining.md) · [Sampling](sampling.md)
