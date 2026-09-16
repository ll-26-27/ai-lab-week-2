---
term: "Context pack"
slug: context-pack
short: "A reusable folder of scripts, docs, or reference material, packaged once and copied into other projects."
aliases: []
category: context
see_also: [context-engineering, script, claude-md]
updated: 2026-09-16
---

# Context pack

**A context pack is a folder of reusable material, scripts, docs, or reference files, built once so other projects can copy it in rather than rebuild it.**

## In plain terms

The scripts you use this week, `generate-image.mjs`, `generate-text.mjs`, and the shared code behind them, were not written from scratch for this course. They were copied from a maintained pack of image and text tools kept elsewhere by the Learning Lab, and this course's `batch-images.mjs` and `list-image-models.mjs` were added on top for the week 2 activities. That source pack is a context pack: a small, self-contained bundle meant to be copied into a new project rather than reinvented.

The idea generalizes past code. A context pack can be reference documents, a house style, a set of example prompts, or a folder of research notes, anything worth packaging once and reusing across several projects instead of retyping it into each one. The rule that makes it work is discipline about direction: fix a bug or improve a doc in the source pack, then re-copy it outward, rather than patching the copy in place and losing the fix.

## Why it matters this term

It is [context engineering](context-engineering.md) at the scale of a whole project rather than one conversation: deciding what is worth curating once, and where the one true copy lives.

## See also

[Context engineering](context-engineering.md) · [Script](script.md) · [CLAUDE.md](claude-md.md)
