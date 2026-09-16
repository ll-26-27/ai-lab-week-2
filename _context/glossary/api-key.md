---
term: "API key"
slug: api-key
short: "A long secret string sent with every API request, saying which account to bill and letting that account be revoked if leaked."
aliases: []
category: apis-and-keys
see_also: [api, env-file, environment-variable]
updated: 2026-09-16
---

# API key

**An API key is a long secret string sent with every request to say which account should be billed and permitted for that call.**

## In plain terms

Every request to a model over the [API](api.md) carries a key, whether that request comes from a chat app you never see it in, or from a script in `utils/` where you paste it into an [`.env` file`](env-file.md) yourself. The key is how the provider knows whose account to charge and whether that account is allowed to make the request at all.

The rules for handling one are simple and worth taking literally: never paste a key into a chat, including Claude or ChatGPT, since a model that needs to run a script reads the key from `.env` itself, it never needs you to hand it over in conversation; never commit a key to Git, which `.gitignore` prevents by accident; never put one in a screenshot you share. If a key does leak anyway, say so immediately rather than quietly hoping no one notices, since keys can be revoked and reissued in minutes, and a leaked key that keeps working quietly running up charges is the expensive failure, not the leak itself.

## Why it matters this term

The scripts in `utils/` redact the key from everything they print or save specifically so that following along in a terminal, or sharing your output, never accidentally exposes it.

## See also

[API](api.md) · [.env file](env-file.md) · [Environment variable](environment-variable.md)
