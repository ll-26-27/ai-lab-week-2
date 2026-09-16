---
term: "Hallucination"
slug: hallucination
short: "A fluent, confident answer that is wrong, because the model predicted what an answer looks like, not what is true."
aliases: []
category: models
see_also: [llm, context, tool-call, prompt-injection]
updated: 2026-09-16
---

# Hallucination

**A hallucination is text shaped like a correct answer without being one, produced because the model predicts, it does not look up or calculate.**

## In plain terms

The wrong product of a long multiplication has the right number of digits and a plausible last one. A made-up citation has a real-sounding author, a real journal, and a believable year. A summary of a scene that was never pasted in describes a scene that is not in the actual text. All three are the same failure: the model produced the most likely continuation, and the most likely continuation was not the fact.

It shows up worst in the middle of things, the middle of a long document, a list of dates, the details around a real event, and it is best when the answer is already sitting in the [context](context.md). Paste the real passage and the summary is right. Give the model a calculator and the arithmetic is right. The tone never changes when it is wrong, which is the part that catches people: fluency is no evidence of accuracy.

What helps: put the source material in front of the model rather than describing it, give it a tool for anything computed or counted, and ask it to check its own work against the source. For images the same mechanism shows up as an extra finger or text that almost spells a word, the most probable pixels rather than the true ones.

## Why it matters this term

It is the course's core trust lesson: not "AI is unreliable" but knowing when to check, and setting Claude up so it does not have to guess.

## See also

[Large language model](llm.md) · [Context](context.md) · [Tool call](tool-call.md) · [Prompt injection](prompt-injection.md)
