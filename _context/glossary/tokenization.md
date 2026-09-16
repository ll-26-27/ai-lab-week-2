---
term: "Tokenization"
slug: tokenization
short: "The step that splits your text into tokens before a model sees it, and turns the model's output tokens back into text."
aliases: ["tokenizer"]
category: models
see_also: [token, byte-pair-encoding, llm, context-window]
updated: 2026-09-16
---

# Tokenization

**Tokenization is the step that chops text into [tokens](token.md) before a model reads it, and glues the model's output tokens back into text afterward. The model never sees your letters, only the numbered pieces the tokenizer hands it.**

## In plain terms

A tokenizer has a fixed vocabulary, typically 50,000 to 200,000 pieces, decided once when the model was built. Given your text, it finds the longest pieces in that vocabulary that cover it, in order, and replaces each with its number. "a happy family" might become three tokens; "unhappily" might become three as well ("un," "happ," "ily"); a rare name or a URL might become a dozen. Spaces usually ride along with the word that follows them, so " family" and "family" are different tokens. Numbers get split in ways that have nothing to do with arithmetic: "82,345" might be "82," "," "345."

The clearest way to see it is to watch it happen. Paste some text into **Tiktokenizer** (https://tiktokenizer.vercel.app/), pick a model, and it colors each token. Try a sentence of English, then the same sentence in another language, then a line of code, then a long number. Watch the token count change and the pieces move.

Two consequences follow. Everything you are charged for, and everything a [context window](context-window.md) holds, is counted in these pieces, so the same idea costs more in some languages than others. And the model's blind spots line up with the pieces: it struggles to count the letters in a word it saw as two tokens, and it predicts digits as text rather than as quantities.

## Why it matters this term

It is why the multiplication went wrong in week 2, why non-English prompts run out of room sooner, and why "how many tokens is this" is a real question with a checkable answer rather than a guess. When something a model does looks inexplicably clumsy, the tokenizer is a good first suspect.

## See also

[Token](token.md) · [Byte pair encoding](byte-pair-encoding.md) · [Large language model](llm.md) · [Context window](context-window.md) · Tiktokenizer: https://tiktokenizer.vercel.app/
