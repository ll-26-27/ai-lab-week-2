---
term: "Batch"
slug: batch
short: "Running the same prompt many times, across models or repetitions, to see a pattern instead of one anecdote."
aliases: []
category: media
see_also: [sampling, image-model, model]
updated: 2026-09-16
---

# Batch

**A batch is running the same prompt many times, across several models or several repetitions, so you see a distribution of results instead of one anecdote.**

## In plain terms

One image from one prompt tells you almost nothing about a model; a batch tells you a great deal. `batch-images.mjs` in this course runs one prompt across the models you name, several times each, and builds a comparison page: `node utils/batch-images.mjs "a happy family" --models google/gemini-2.5-flash-image,black-forest-labs/flux.2-klein-4b --n 4` produces eight images, four from each model, laid out in a grid you can scan row by row and column by column.

The point is what a batch reveals that one sample cannot: whether a model has a strong default (every "happy family" looking suspiciously alike), how much a model varies between runs of the exact same words, and whether two models disagree about what a three-word prompt should mean. That comparison, sampling twelve times rather than trusting one draw, is the whole method behind the [sampling and defaults](sampling.md) activity.

## Why it matters this term

Cheap, fast models run in a batch of twelve teach you more about a model's behavior than one expensive image from a single run, and this course leans on that trade deliberately.

## See also

[Sampling](sampling.md) · [Image model](image-model.md) · [Model](model.md)
