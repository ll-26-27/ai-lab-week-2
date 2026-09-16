---
term: "SKILL.md"
slug: skill-md
short: "A reusable instruction file for one specific task, kept in a named folder so a model can load it only when that task comes up."
aliases: ["Agent Skills", "Skills", "skill"]
category: agents-and-harnesses
see_also: [claude-md, context-engineering, script]
updated: 2026-09-16
---

# SKILL.md

**A `SKILL.md` is a reusable instruction packet for one specific kind of task, written once so a model can follow it every time that task comes up.**

## In plain terms

[CLAUDE.md](claude-md.md) describes a project ("this folder is X, work this way, always"). A skill describes a task ("here is how to batch a prompt across models and build the comparison page") and is packaged so a model can reach for it whenever that specific job arises, even in a different project. Think of `CLAUDE.md` as the standing note on the office door and a skill as a labeled recipe card in a box, taken out only when that job comes up.

The format is a folder named for the skill (`family-batch/`), holding a required `SKILL.md` with two frontmatter fields, `name` and `description`, plus a Markdown body of instructions, and optional `scripts/`, `references/`, and `assets/` folders for anything the skill needs to run or consult. The description matters most, since it is often the only part visible to the model until the task matches; the rest loads on demand, which is why skills sit in [context](context.md) so lightly. Because Claude Code and Codex both follow this open format, one skill folder works across tools; you invoke one with `/skill-name` in Claude Code or `$skill-name` in Codex.

## Why it matters this term

It is the natural next step after ordinary [context engineering](context-engineering.md): not just curating context for this conversation, but saving good context so it pays off every time the same task returns.

## See also

[CLAUDE.md](claude-md.md) · [Context engineering](context-engineering.md) · [Script](script.md)
