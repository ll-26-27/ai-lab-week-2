---
term: ".env file"
slug: env-file
short: "A local, git-ignored file holding secret keys as NAME=value lines, read by scripts instead of typed into code."
aliases: [".env", "dotenv"]
category: files-and-formats
see_also: [environment-variable, api-key, gitignore]
updated: 2026-09-16
---

# .env file

**A `.env` file holds secret values, one `NAME=value` per line, that scripts read from disk instead of having typed into the code itself.**

## In plain terms

The scripts in `utils/` need an API key to talk to a model, but a key should never be typed directly into a script, since anyone who reads or shares that script would read the key too. Instead, the key lives in a file named `.env` at the top of the repo:

```text
OPENROUTER_API_KEY=your-key-here
FAL_API_KEY=
```

The script reads that file as [environment variables](environment-variable.md) at startup, fills only the keys it finds, and leaves the rest blank. This repo ships a `.env.example` with the same shape and no real values, so the pattern travels with the code while the secrets never do; `.gitignore` makes sure Git never tracks the real `.env`, only the example.

The habit this file teaches generalizes past this course: code and configuration are shareable, secrets are not, and separating them into two files is how professional projects keep both true at once.

## Why it matters this term

`cp .env.example .env`, then pasting in the class key, is the exact step that turns the scripts in `utils/` from inert to working, and it is the same pattern behind every real project's secrets.

## See also

[Environment variable](environment-variable.md) · [API key](api-key.md) · [.gitignore](gitignore.md)
