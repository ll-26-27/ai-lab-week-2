---
term: "Diffusion model"
slug: diffusion-model
short: "The technique behind most image models today: starting from noise and gradually refining it toward a picture matching the prompt."
aliases: []
category: media
see_also: [image-model, model, sampling]
updated: 2026-09-16
---

# Diffusion model

**A diffusion model generates an image by starting from random noise and repeatedly refining it, step by step, toward a picture that matches the prompt.**

## In plain terms

Rather than painting a picture the way a person does, stroke by stroke, most current [image models](image-model.md) work backward from static. The model starts with an image of pure random noise and, guided by your prompt, removes a little of that noise at a time, dozens of small steps, each one nudging the fuzzy shape closer to something recognizable, until a coherent picture emerges at the end. This process, learned during training by watching the reverse (gradually adding noise to real photos), is what "diffusion" refers to.

You do not need the mathematics to use these models well, but the mental picture is useful: a diffusion model is not retrieving or assembling a picture that already exists somewhere, it is constructing one fresh from noise, guided at each step by how well the current fuzzy shape matches the prompt so far. Most named image models this course uses, Gemini's, Flux, and others, are diffusion models under the hood, even though they differ in speed, style, and defaults.

## Why it matters this term

It explains why the same prompt can produce visibly different images every run, see [sampling](sampling.md), and why image generation takes real computation rather than an instant lookup.

## See also

[Image model](image-model.md) · [Model](model.md) · [Sampling](sampling.md)
