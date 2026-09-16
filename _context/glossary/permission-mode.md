---
term: "Permission mode"
slug: permission-mode
short: "The setting that decides how much an agent may do without asking you first."
aliases: []
category: agents-and-harnesses
see_also: [plan-mode, agent, harness]
updated: 2026-09-16
---

# Permission mode

**A permission mode is the leash on an agent: whether it asks before every edit and command, only before commands, or not at all.**

## In plain terms

Once a model can act, run code, edit a file, click a button, someone has to decide how much it may do before checking with you. That is the permission mode. Claude Code offers roughly this range: Ask, the default, where every edit and command needs your approval; Auto-edit, where it edits files freely but still asks before running commands; [Plan mode](plan-mode.md), where it only reads and proposes a step-by-step plan without touching anything, then waits; and Bypass, where it does everything with no questions at all.

The trade-off is the same one behind every leash: asking before each step is safe and slow, doing everything with no questions is fast and occasionally alarming. A reasonable default is to start any new kind of task in Plan mode, read the plan, and only then loosen the leash once you trust what it is about to do. In the terminal, Shift+Tab cycles the mode; in a desktop app it is a selector near the prompt box.

## Why it matters this term

Every agentic surface in this course, Cowork, Code, Codex, computer use, has some version of this setting, and it is the one control you should always know the current value of before handing over a task.

## See also

[Plan mode](plan-mode.md) · [Agent](agent.md) · [Harness](harness.md)
