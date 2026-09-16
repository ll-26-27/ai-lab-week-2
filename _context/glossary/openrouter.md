---
term: "OpenRouter"
slug: openrouter
short: "An aggregator that puts many companies' text and image models behind one API key."
aliases: []
category: apis-and-keys
see_also: [openrouter-image-apis, api, model, fal]
updated: 2026-09-16
---

# OpenRouter

**OpenRouter is an aggregator: one API key that reaches dozens of different companies' models, so you are not locked into any single provider's roster.**

## In plain terms

A chat app hands you one company's models. OpenRouter sits between you and many companies at once, Google, OpenAI, Anthropic, Black Forest Labs, and others, letting the scripts in `utils/` name a model by an id like `google/gemini-2.5-flash-image` or `openai/gpt-5-mini` and reach it through a single account and key (`OPENROUTER_API_KEY`). `node utils/list-image-models.mjs` prints every image model it currently offers, with no key needed just to see the list.

The roster changes month to month as new models ship and old ones are retired, which is itself worth noticing: a script that names a specific model id can simply stop working when that id disappears, a small but real lesson in how fast this space moves. Prices vary widely by model and are listed at openrouter.ai/models, not in the listing endpoint the scripts read.

## Why it matters this term

It is the provider this course's activities default to, precisely because comparing several models on one prompt, the point of the [batch](batch.md) activity, is only convenient when they all sit behind one key.

## See also

[OpenRouter image APIs](openrouter-image-apis.md) · [API](api.md) · [Model](model.md) · [fal](fal.md)
