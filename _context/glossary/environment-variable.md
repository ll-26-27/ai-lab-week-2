---
term: "Environment variable"
slug: environment-variable
short: "A named value a program can read from its surroundings, instead of having it typed directly into the code."
aliases: []
category: apis-and-keys
see_also: [env-file, api-key]
updated: 2026-09-16
---

# Environment variable

**An environment variable is a named value a program reads from its surroundings at startup, rather than from a value written directly into the code.**

## In plain terms

`OPENROUTER_API_KEY` is an environment variable: a name and a value, set somewhere outside the script itself, that the script asks for by name when it runs. The scripts in `utils/` check two places for one, first your terminal session's own environment, then a [`.env` file](env-file.md) at the top of the repository, which is just a plain-text list of `NAME=value` lines that gets loaded the same way.

The reason this indirection exists is separation: the same script can run with a different key, a different account, a different setting, depending only on what is in the environment at the time, with no code changes needed. It is also the standard way to keep a secret out of code that gets shared or committed to Git: the variable's name can appear in a public script, while its value lives only in a private, git-ignored file.

## Why it matters this term

Every key this course hands you, OpenRouter and fal, reaches the scripts as an environment variable, read from `.env`; understanding that mechanism is what makes `key_available: true` in a `--dry-run` output make sense rather than feel like magic.

## See also

[.env file](env-file.md) · [API key](api-key.md)
