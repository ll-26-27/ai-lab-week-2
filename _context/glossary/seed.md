---
term: "Seed"
slug: seed
short: "A number that fixes a model's randomness, so the same prompt and seed reproduce nearly the same result."
aliases: []
category: media
see_also: [sampling, temperature]
updated: 2026-09-16
---

# Seed

**A seed is a number fed into a model's random draw; the same prompt and the same seed reproduce nearly the same output, instead of a fresh random one each time.**

## In plain terms

[Sampling](sampling.md) means a model's output normally varies run to run, even with the exact same prompt. Some image models let you pin that randomness down with a seed: hand it the same number twice, alongside the same prompt, and you get the same (or nearly the same) image back both times, rather than a new draw. Leave the seed unset and most tools pick a random one for you automatically, which is why two runs of "a happy family" with no seed specified look different.

A seed is useful whenever you want repeatability rather than variety: reproducing a result to show someone exactly what you saw, generating a consistent set of variations by changing only one detail while holding the seed fixed, or debugging whether a change to your prompt, rather than ordinary randomness, caused a different result.

## Why it matters this term

It is one of the settings the [API](api.md) exposes that a chat app usually hides entirely, and noticing it is available is part of what "control" means when this course says the API gives you more of it than a chat window does.

## See also

[Sampling](sampling.md) · [Temperature](temperature.md)
