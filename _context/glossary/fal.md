---
term: "fal"
slug: fal
short: "Another model aggregator, alongside OpenRouter, offering a different roster of image and video models through one key."
aliases: []
category: apis-and-keys
see_also: [openrouter, api, image-model]
updated: 2026-09-16
---

# fal

**fal is an aggregator like [OpenRouter](openrouter.md), putting a different roster of image and video models behind one API key (`FAL_API_KEY`).**

## In plain terms

The scripts in `utils/` support fal as a second provider alongside OpenRouter, chosen with `fal` as the provider argument instead of `openrouter`. The two exist because no single aggregator carries every [image model](image-model.md) worth trying; some models are only reachable through one or the other, so having both means more of the field is within reach of the same small set of scripts.

One detail specific to fal worth knowing: its requests save a receipt file (`fal-request.json`) as they go, so if a job gets interrupted partway through, it can be resumed with `--resume` instead of resubmitted and paid for twice. That is a small but real example of a script author anticipating a real failure mode, a slow or flaky request, rather than assuming everything always finishes cleanly.

## Why it matters this term

Week two's twenty-models activity runs on fal, because its image catalogue is the longer one (over two hundred text-to-image endpoints in September 2026). `node utils/list-fal-models.mjs` prints that catalogue in fal's own order, no key needed, which is how the script, or an agent running the script, gets the list of ids to feed `batch-images.mjs --provider fal`.

## See also

[OpenRouter](openrouter.md) · [API](api.md) · [Image model](image-model.md)
