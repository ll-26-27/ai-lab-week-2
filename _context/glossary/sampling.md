---
term: "Sampling"
slug: sampling
short: "A model's output is one draw from a distribution of likely outputs; run it many times and you start to see the shape of that distribution."
aliases: ["sampling and defaults"]
category: media
see_also: [batch, seed, temperature, model]
updated: 2026-09-16
---

# Sampling

**Sampling is the randomness inside a model's output: run the same prompt twice and you get two different, but similarly shaped, results, because the model draws among probable options rather than always picking the single most likely one.**

## In plain terms

Ask for "a happy family" once and you get a picture. Ask twelve times and you get twelve pictures that vary, different faces, different parks, and yet agree, two parents, two children, golden light, everyone around thirty-five. The variation is sampling; the agreement is the model's default, whatever the training data and the company's later tuning made most probable. Neither is a bug: sampling is why asking again gets you something different, and defaults are why three bare words are enough to get a picture at all.

What you can control: how specific your prompt is, since every detail you write is a decision taken back from the default; how many times you run it, more runs make the shape clearer; which model you use, since defaults differ model to model, which is itself a finding; and, for some models, [temperature](temperature.md) or a fixed [seed](seed.md), which narrow the variation when you want closer to the same result twice.

## Why it matters this term

The habit worth building: when a result surprises you, do not argue with one sample, run ten and look at the pattern instead.

## See also

[Batch](batch.md) · [Seed](seed.md) · [Temperature](temperature.md) · [Model](model.md)
