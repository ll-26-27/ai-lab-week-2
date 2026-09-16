---
term: "Token"
slug: token
short: "A small chunk of text, between a letter and a word, that a model reads and writes in."
aliases: []
category: models
see_also: [tokenization, byte-pair-encoding, llm, context-window, hallucination]
updated: 2026-09-16
---

# Token

**A token is a chunk of text, often a word or part of one, and it is the unit a model reads and writes in.**

## In plain terms

Before a model sees your text, a tokenizer splits it into pieces (see [tokenization](tokenization.md) for how, and [byte pair encoding](byte-pair-encoding.md) for where the pieces come from). Common words are one token ("the," "family"); longer or rarer words get split ("unhappily" might become "un," "happ," "ily"); punctuation and spaces count too. English runs about three quarters of a word per token, so a page of prose is a few hundred tokens; code and non-English text usually run more tokens per word.

The model then works entirely in token numbers, in order. It does not see letters the way you do, which is why it can be bad at counting the r's in "strawberry" or reversing a word, and it does not see digits as quantities, which is why a long multiplication goes wrong without a tool (see [hallucination](hallucination.md)).

Tokens are also the unit everything measurable is counted in: the [context window](context-window.md) is a token count, API prices are quoted per million tokens, and a "long" reply is a token budget.

## Why it matters this term

It demystifies a class of "why can't it do something that simple" moments, and it gives context window limits a concrete unit instead of a hand-wave.

## See also

[Tokenization](tokenization.md) · [Byte pair encoding](byte-pair-encoding.md) · [Large language model](llm.md) · [Context window](context-window.md) · [Hallucination](hallucination.md)
