---
term: "Wrapper (\"just a wrapper around the API\")"
slug: wrapper
short: "A product built around an API call: an interface, some memory, a system prompt, and a bill, added on top of the model you could call yourself."
aliases: ["wrapper app", "API wrapper"]
category: apis-and-keys
see_also: [api, api-key, harness, openrouter, script]
updated: 2026-09-17
---

# Wrapper ("just a wrapper around the API")

**A wrapper is a product whose core is an API call to someone else's model, with an interface, memory, a system prompt, and a billing page built around it.**

## In plain terms

You will hear "it's just a wrapper around the API" said about AI products, often dismissively. It is usually accurate, and the useful response is not a sneer but a clear view of what the wrapper adds and what it takes. It adds convenience: a [GUI](gui.md), a place your history lives, a [system prompt](system-prompt.md) that shapes the model's behavior, and some safety rails. It takes three things in return. It owns the record, since your prompts and outputs live in its database in its format. It picks the model, so you get its roster at its pace. And it picks the grammar: someone at that company decided which of the [API](api.md)'s settings you may touch and what they are called.

The scripts in `utils/` are the same API call with the wrapper removed. Each run leaves `request.json` and `response.json` on your disk, the model is whichever id you name, and every setting the API accepts is yours to set. That is not a reason to stop using good products. It is a reason to know that they are optional.

## Why it matters this term

With Claude Code and an [API key](api-key.md) you can build the wrapper you need, for yourself, in an afternoon, and keep your data where you can see it. Knowing that changes how you evaluate every AI product you meet.

## See also

[API](api.md) · [API key](api-key.md) · [Harness](harness.md) · [OpenRouter](openrouter.md) · [Script](script.md)
