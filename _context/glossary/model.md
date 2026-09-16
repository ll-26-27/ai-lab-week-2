---
term: "Model"
slug: model
short: "The specific version of an AI doing the thinking; companies ship a few, trading depth for speed."
aliases: ["Opus", "Sonnet", "Haiku"]
category: models
see_also: [llm, claude, api, sampling]
updated: 2026-09-16
---

# Model

**The model is the specific set of trained weights answering you; a company ships several, named and priced by size and speed.**

## In plain terms

"Claude" is the assistant; the model is the particular engine behind it on a given task. Anthropic's family is Opus, Sonnet, and Haiku, largest to smallest. OpenAI names by number and suffix (GPT-5 and its mini and pro variants); Google's are Gemini Pro and Flash. The pattern repeats everywhere: a big, slow, careful model, a middle one, and a small, fast, cheap one. "Reasoning" or "thinking" modes trade more time for more careful step by step work.

Image models are a separate roster entirely: GPT Image, Gemini's image models, Flux, Seedream, Recraft, and others, with new ones appearing monthly (`node utils/list-image-models.mjs` prints what is reachable right now).

How to choose, in practice: use small and fast for drafts, bulk runs, and anything you will check anyway; twelve images from a cheap model teach you more than one from an expensive one. Use large for a final pass, a long document, or anything where a subtle error is costly. Use several when the question is what a kind of model does, which is the point of the [batch](batch.md) activity, since defaults differ by model.

The chat apps pick a model for you and offer a switch; the [API](api.md) makes you name one, with no default.

## Why it matters this term

It explains the model picker in every app, and it is why the same prompt can behave differently depending on which model answered it.

## See also

[Large language model](llm.md) · [Claude](claude.md) · [API](api.md) · [Sampling](sampling.md)
