---
term: "Large language model"
slug: llm
short: "The kind of system Claude and ChatGPT are: a program that predicts the next chunk of text from patterns in training data."
aliases: ["LLM"]
category: models
see_also: [token, context, hallucination, model]
updated: 2026-09-16
---

# Large language model (LLM)

**An LLM predicts what text comes next, one token at a time, based on patterns learned from a huge amount of writing.**

## In plain terms

Strip away the jargon and the mechanic is humble: given the text so far, the model predicts what [token](token.md), roughly a chunk of a word, is most likely to come next, then does it again and again until it has built a reply. It learned those predictions from an enormous amount of text, loosely "the average of the internet."

That has two consequences worth feeling early. The model is fluent, because fluent text is what it learned to continue. It can also be confidently wrong, because "what sounds likely" is not the same as "what is true." The classic demo in this course is a long multiplication: ask a model to work it out in text with no tool and it often gets it wrong, not from stupidity but because it is predicting a plausible-looking number rather than calculating one. Hand it a way to write and run code instead and the same model gets it exact, see [tool call](tool-call.md).

This is why [context](context.md) matters so much: a next-text predictor is only as good as the text in front of it.

## Why it matters this term

Understanding "it predicts, it does not look up or calculate" explains both Claude's fluency and its failure modes, and it motivates most of what this course does with code, tools, and context to compensate.

## See also

[Token](token.md) · [Context](context.md) · [Hallucination](hallucination.md) · [Model](model.md)
