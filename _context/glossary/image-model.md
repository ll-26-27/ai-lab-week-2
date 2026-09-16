---
term: "Image model"
slug: image-model
short: "A model that turns a text prompt into a picture, a separate roster from text models like Claude or GPT."
aliases: []
category: media
see_also: [diffusion-model, model, aspect-ratio, batch]
updated: 2026-09-16
---

# Image model

**An image model turns a text prompt into a picture; it is a distinct roster from the text models behind Claude or ChatGPT, even when made by the same company.**

## In plain terms

Anthropic's Claude has no image model of its own, which is why asking it for a picture gets a description, a drawing attempted in code, or a clarifying question instead. Google, OpenAI, and several smaller companies each ship separate image models, GPT Image, Gemini's image models, Flux, Seedream, Recraft, and more, most of them [diffusion models](diffusion-model.md) under the hood, all reachable this term through [OpenRouter](openrouter.md) or [fal](fal.md) with a single script.

Choosing between them is a "several, not one" situation: they differ in price, speed, default style, and how literally they follow a detailed prompt, and the only way to learn those differences is to run the same prompt across a few and compare, which is exactly what the [batch](batch.md) activity is built to make visible. `node utils/list-image-models.mjs` prints what is currently reachable, a list that changes month to month as new ones ship.

## Why it matters this term

Half of this week's hands-on work is generating and comparing images across models, and knowing that "image model" is its own category, not a feature every model has, is the first fact that clears up.

## See also

[Diffusion model](diffusion-model.md) · [Model](model.md) · [Aspect ratio](aspect-ratio.md) · [Batch](batch.md)
