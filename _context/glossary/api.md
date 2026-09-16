---
term: "API"
slug: api
short: "A way for a program, not a person in a chat window, to send a request to a model and get a result back as data."
aliases: []
category: apis-and-keys
see_also: [api-key, json, script, environment-variable]
updated: 2026-09-16
---

# API

**An API (application programming interface) is the door a program uses to talk to a service; for models it means sending a request with a prompt and a key, and getting the result back as data instead of a chat bubble.**

## In plain terms

Every chat app is built on an API underneath. Using the API yourself means skipping the app entirely: no [system prompt](system-prompt.md) unless you write one, no memory, no hidden tool calls, just your prompt in and the model's raw output back. The scripts in `utils/` are API calls with a thin wrapper; `request.json` in each output folder is exactly what was sent, `response.json` is exactly what came back.

Why bother, when a chat window already exists: repetition, since twelve images from three models is one command instead of thirty-six clicks; choice of model, since aggregators like [OpenRouter](openrouter.md) and [fal](fal.md) put dozens of models behind one key, including ones no chat app offers; full control over every setting, [aspect ratio](aspect-ratio.md), [seed](seed.md), [temperature](temperature.md); and a record, files on disk with the exact prompt that made them. Anything you build later that uses a model, a website, a bot, talks to an API somewhere underneath.

## Why it matters this term

It is the foundation everything more elaborate in this course sits on top of: scripts, batches, and eventually agentic systems are all, at bottom, API calls in a loop.

## See also

[API key](api-key.md) · [JSON](json.md) · [Script](script.md) · [Environment variable](environment-variable.md)
