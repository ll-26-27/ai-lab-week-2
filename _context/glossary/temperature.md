---
term: "Temperature"
slug: temperature
short: "A setting that controls how much randomness a text model uses when choosing its next word."
aliases: []
category: media
see_also: [sampling, seed, model]
updated: 2026-09-16
---

# Temperature

**Temperature is a setting, usually a number from zero to two, that controls how much randomness a text model uses when picking its next token.**

## In plain terms

At every step, a model has a ranked list of possible next tokens with different likelihoods; temperature decides how strictly it sticks to the top of that list. A low temperature (near zero) makes the model almost always choose the single most likely next word, producing steadier, more predictable, sometimes repetitive text. A higher temperature lets it wander further down the list more often, producing more varied, more surprising, occasionally less coherent text. This is the text-model cousin of [sampling](sampling.md) in image generation; some image models expose a [seed](seed.md) instead, or in addition.

Most chat apps set a sensible default temperature for you and hide the control entirely. Through the [API](api.md), the scripts in `utils/` let you pass it explicitly, which is the difference between "the model's default level of variety" and a level you chose on purpose for the task at hand, low for a factual answer you want consistent, higher for brainstorming where variety is the point.

## Why it matters this term

It is one of the concrete knobs this course points to when it says the API gives you settings a chat window keeps invisible.

## See also

[Sampling](sampling.md) · [Seed](seed.md) · [Model](model.md)
