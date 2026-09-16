---
term: "Claude"
slug: claude
short: "The AI assistant made by Anthropic, reached through chat, the desktop app, the API, and Claude Code."
aliases: []
category: basics
see_also: [anthropic, model, claude-code, llm]
updated: 2026-09-16
---

# Claude

**Claude is the AI assistant made by Anthropic; you meet it through chat, the desktop app, the API, and Claude Code.**

## In plain terms

Claude is a program you talk to in plain English. You type a question or describe a task, and it writes back: an answer, a document, or, through Claude Code, a change to a file on your computer. There is no special command language. If you can write an email, you can talk to Claude; the skill this course teaches is not commands but what you put in front of it and what you ask it to do.

Claude comes in a few sizes, Opus, Sonnet, and Haiku (see [model](model.md)), and reaches you through several different harnesses: a chat window, a desktop app with Cowork and Code tabs, a browser extension, and the raw API the scripts in `utils/` call directly. Same underlying model, different reach, depending on which door you walk through.

One habit worth building early: Claude does not look things up the way a search engine does. It predicts a reply from patterns learned in training plus whatever is in its [context](context.md) right now. That is the whole story behind why it can be fluent and wrong in the same breath, see [hallucination](hallucination.md).

## Why it matters this term

Every other term in this glossary is a way of getting more out of this same assistant: more reach (Cowork, Code, Codex), more reliability (tools, context), or more repeatability (scripts, skills). Start here.

## See also

[Anthropic](anthropic.md) · [Model](model.md) · [Claude Code](claude-code.md) · [Large language model](llm.md)
