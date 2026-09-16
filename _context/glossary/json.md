---
term: "JSON"
slug: json
short: "A plain-text format for structured data, the shape of every request and response the scripts save."
aliases: []
category: files-and-formats
see_also: [csv, api, script]
updated: 2026-09-16
---

# JSON

**JSON is a plain-text way of writing structured data, nested lists and named fields, that both people and programs can read.**

## In plain terms

JSON (JavaScript Object Notation) looks like this: curly braces hold named fields, square brackets hold lists, and everything is quoted text, a number, `true`/`false`, or nested JSON. It has no formatting, no styling, and no ambiguity, which is exactly why programs use it to talk to each other: an API sends a request as JSON and gets a response back the same way.

You will meet it directly in this course. Every run of `generate-image.mjs` or `generate-text.mjs` writes a `request.json` (exactly what was sent) and a `response.json` (exactly what came back) into its output folder. Reading these once, even without changing anything, is the fastest way to stop finding the [API](api.md) mysterious: it is just JSON in, JSON out. Where Markdown is for people and prose, JSON is for programs and precise data; a model can read and write both, but JSON is the format you reach for when structure has to survive being passed between tools exactly.

## Why it matters this term

The scripts in `utils/` are, underneath, JSON going out over the network and JSON coming back, saved to disk so you have a record of exactly what was asked and exactly what was returned.

## See also

[CSV](csv.md) · [API](api.md) · [Script](script.md)
