---
term: "Byte pair encoding"
slug: byte-pair-encoding
short: "The algorithm most tokenizers use to build their vocabulary: start from single characters and repeatedly merge the most frequent neighboring pair."
aliases: ["BPE"]
category: models
see_also: [tokenization, token, llm]
updated: 2026-09-16
---

# Byte pair encoding

**Byte pair encoding (BPE) is the recipe most modern tokenizers use to decide what the [tokens](token.md) are. It starts with single characters and repeatedly merges the pair that appears together most often, until the vocabulary is the size you asked for.**

## In plain terms

Imagine a huge pile of text broken into single characters. Count every pair of neighbors. The most common pair, say "t" followed by "h," becomes one new piece, "th," and every "t h" in the pile is replaced by it. Count again. Now maybe "th" followed by "e" is the most common pair, so "the" becomes a piece. Repeat tens of thousands of times. Common words end up as one piece, common word-parts ("ing," "un," "tion") as their own pieces, and anything rare stays as a handful of small pieces that can spell anything. The list of merges, in order, is the tokenizer; running them on new text is [tokenization](tokenization.md).

The "byte" in the name is a detail that matters: modern versions start from the 256 possible bytes rather than from characters, so any text in any script, plus emoji and code, can always be broken down and never hits an "unknown" piece.

The result is a vocabulary shaped by the training text. English is well covered, so it tokenizes into few pieces; a language that was rarer in the pile gets more pieces per word, and costs more to say the same thing. The pieces are chosen by frequency, not by meaning, which is why a token boundary can land in the middle of a word or between two digits of a number.

For the full walk-through, with the merge steps done by hand on a tiny example and then in code, the Hugging Face LLM course has a chapter on it: https://huggingface.co/learn/llm-course/en/chapter6/5

## Why it matters this term

It explains where the tokens come from, and so why the counts and blind spots in [tokenization](tokenization.md) look the way they do: nobody designed those pieces, the text did. Knowing that the vocabulary was learned by counting, once, before the model ever saw your prompt, is most of what you need to reason about it.

## See also

[Tokenization](tokenization.md) · [Token](token.md) · [Large language model](llm.md) · Hugging Face LLM course, byte-pair tokenization: https://huggingface.co/learn/llm-course/en/chapter6/5
