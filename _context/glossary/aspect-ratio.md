---
term: "Aspect ratio"
slug: aspect-ratio
short: "The width-to-height shape of a generated image, a setting most chat apps hide but the API exposes directly."
aliases: []
category: media
see_also: [image-model, api]
updated: 2026-09-16
---

# Aspect ratio

**Aspect ratio is the width-to-height shape of an image, square, portrait, widescreen, and it is a setting an [image model](image-model.md) usually accepts directly.**

## In plain terms

A square image (1:1), a portrait phone-shaped one (9:16), and a widescreen landscape one (16:9) are all the same content laid out into different shapes, and most image models let you specify which shape you want as part of the request, rather than generating a default shape and cropping it after the fact. A chat app usually picks a default aspect ratio for you and hides the option; the [API](api.md), through the scripts in `utils/`, lets you set it explicitly as one of the flags on a request.

It is worth specifying deliberately whenever the image has a destination that constrains its shape, a phone wallpaper, a slide, a banner, a book cover, rather than leaving it to whatever the model assumes by default and cropping afterward, which usually loses part of the composition the model intended.

## Why it matters this term

It is one more example of a setting this course keeps pointing to as proof that the API hands you control a chat window quietly withholds.

## See also

[Image model](image-model.md) · [API](api.md)
