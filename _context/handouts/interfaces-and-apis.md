---
title: "Interfaces, APIs, and the harness"
date: 2026-09-17
status: "AI Lab week 2 takeaway"
---

# Interfaces, APIs, and the harness

*What you touched today, and why it means you can do this yourself.*

Today's session used command-line tools, mostly from inside the Claude desktop app, and then called models directly with an API key. This page names the layers you passed through and explains the one new term we want you to leave with: **API**.

## Three ways to meet Claude

Same model, three doors. What changes is what Claude can reach and how much of its work you can see.

| | Web (claude.ai) | Desktop app | Command line (`claude`) |
| --- | --- | --- | --- |
| Where it runs | in the browser, on Anthropic's servers | a Mac or Windows app: chat, plus the Cowork and Code tabs | inside the terminal, in whatever folder you open it |
| What it can reach | what you paste or upload | a folder you connect (Cowork) or work in (Code) | everything in the folder, plus every command-line tool on your machine |
| What you see | the conversation | the conversation, or a task with files changing | every command it runs and every file it edits, as text |
| Use it for | questions, drafts, thinking out loud | working on your files with a window around it | building, batching, and repeating things with scripts |

The desktop app's **Code** tab and the terminal's `claude` command are the same program, Claude Code, with a window around one of them. That is why we mostly used the desktop app today: same hands, friendlier front.

## GUI, CLI, API: three ways to talk to any program

- **GUI, graphical user interface.** Buttons, menus, windows. You click, the program acts. Nearly everything you have done on a computer was through a GUI. Easy to start, hard to repeat: twenty images means twenty clicks.
- **CLI, command-line interface.** You type a command in the terminal, the program acts and prints text back. `git`, `gh`, `ffmpeg`, `node utils/generate-image.mjs`, and `claude` itself are CLIs. Harder to start, easy to repeat: a command can be saved, edited, and run again, and an agent can run it for you.
- **API, application programming interface.** No person at all. One program sends a request to another, usually over the internet, and gets data back. Every chat app, every image generator, every "AI feature" inside some other product is talking to an API underneath.

Today's order was deliberate: the GUI you already knew, then CLIs (mostly run by Claude Code inside the desktop app), then the API those CLIs call.

## API: the key new term

An API call to a model is a small package of data: which model, your prompt, a handful of settings, and a **key** that says whose account to bill. What comes back is data too: the text or the image bytes, plus what it cost. Nothing else. No system prompt unless you wrote one, no memory, no hidden tools, no interface.

You saw the whole transaction on disk today. Every run of a script in `utils/` leaves a folder holding `request.json` (exactly what was sent) and `response.json` (exactly what came back). That folder is the API, made visible.

Two things follow. **The model is a service you can call directly**, priced per request, usually in fractions of a cent. **The key is a secret**: it lives in `.env`, never in a chat, never in Git, never in a screenshot. If it leaks, say so at once; keys are revoked and reissued in minutes.

## "It's just a wrapper around the API"

You will hear this said about AI products, sometimes dismissively. It is usually true, and worth understanding rather than sneering at. A wrapper is a GUI, some memory, a system prompt, and a billing page, built around an API call like the one you made today. The wrapper adds convenience and some safety, and charges for it.

What the wrapper costs you, beyond the subscription:

- **It owns the record.** Your prompts, outputs, and history live in their database, in their format, exportable on their terms. Today's runs live in a folder on your disk.
- **It picks the model.** You get their roster, at their pace. With a key to an aggregator you choose from hundreds and swap with one word.
- **It picks the grammar.** Someone at that company decided which of the API's settings you may touch, in what order, under what names. The raw API has a small vocabulary (model, prompt, temperature, aspect ratio, seed, reference images); the wrapper's opinion about it is a product decision, not a law.

None of this makes wrappers bad. It makes them optional, and knowing the difference is the point of this session.

## What you can do yourself

With Claude Code and an API key you did the following today, and can keep doing it:

1. Call any model on OpenRouter or fal from a script, with the settings you choose, and keep the request and result as files.
2. Ask Claude Code to write, change, or run those scripts for you. The scripts are readable text, and so is everything Claude Code does to them.
3. Batch: one prompt across twenty models, or twenty prompts through one model, into a gallery page, with one command.
4. Own the output. Move a folder and everything you made moves with it.

The bill is per use, not per month, and it is yours to watch. The trade is that you do more of the assembly yourself, or ask an agent to do it.

## Harness

The word for "everything around the model." A model on its own is tokens in, tokens out; it cannot open a file or run a command. The **harness** is the software wrapped around it that runs the loop, holds the tools, manages what the model sees, and enforces the permission rules. The definition the field settled on in 2026:

> An agent harness is the software infrastructure surrounding a large language model that lets it operate as an agent: tool dispatch, memory and state, a workspace or sandbox, context management, and guardrails such as scoped permissions and approvals. Agent = model + harness.

A useful image: the model is the engine, the harness is the rest of the car. The scripts in `utils/` are the thinnest possible harness: one request, no loop, no tools. Claude Code is a thick one: a full toolbox and a permission system. A chat app is a harness too. Same engine, different car, and most of the interesting engineering right now is in the car.

## OpenRouter and fal: what they are and why you have keys

**OpenRouter** (openrouter.ai) is an aggregator: one account, one key, one request shape, reaching several hundred models from dozens of companies (Anthropic, OpenAI, Google, Black Forest Labs, Meta, and more). You pay each provider's published price plus a small platform fee. The list changes monthly; `node utils/list-text-models.mjs` prints it.

**fal** (fal.ai) is a generative-media platform: more than a thousand image, video, audio, and 3D models behind one key, run on fal's own GPUs, priced per image or per second of video. Its image catalogue is the longer one; today's twenty-model run used it.

Why we hand you these instead of one company's app:

- **Comparison is the lesson.** The point of this week is to see that "the model" is many models with different defaults, prices, and blind spots. That is only practical when they sit behind one key.
- **No lock-in, on purpose.** A key to an aggregator is a key to the field, not to a vendor. When a better model ships, you change one word.
- **The class pays, and sees the bill.** Text calls cost fractions of a cent; a big image batch, tens of cents. Watching the price of each run is part of learning what these things cost.
- **It is the same door professionals use.** The scripts you ran are small versions of what any product with an "AI feature" does. There is no other door.

## Quick reference

| Term | In one line |
| --- | --- |
| GUI | Buttons and windows; you click, it acts. |
| CLI | Text commands in the terminal: typed, saved, repeated, and runnable by an agent. |
| API | Program to program: request in, data out, a key to bill. |
| API key | The secret string that names the account to charge. Lives in `.env`, nowhere else. |
| Wrapper | A product built around an API call: an interface, memory, a system prompt, a bill. |
| Harness | Everything around the model: the loop, tools, context, permissions. Agent = model + harness. |
| Claude Code | Claude with hands, in the terminal or the desktop app's Code tab. |
| OpenRouter | One key, hundreds of text and image models from many companies. |
| fal | One key, a thousand-plus media models: image, video, audio, 3D. |
| Script | A short, readable program that does one job from the command line. |

Sources for the harness definition and the provider facts: https://en.wikipedia.org/wiki/Agent_harness · https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents · https://openrouter.ai/docs/guides/overview/models · https://docs.fal.ai/model-apis/introduction
