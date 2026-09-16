---
term: "HUIT API portal"
slug: huit-api-portal
short: "Harvard's own gateway to models like OpenAI's and Google's, reached with an HUIT-issued key instead of a personal account."
aliases: ["HUIT", "huit-openai", "huit-gemini", "huit-bedrock"]
category: apis-and-keys
see_also: [api-key, api, data-sensitivity]
updated: 2026-09-16
---

# HUIT API portal

**The HUIT API portal is Harvard's own gateway to outside model providers, OpenAI, Google, and Amazon Bedrock, reached with a Harvard-issued key rather than a personal account with each company.**

## In plain terms

Where [OpenRouter](openrouter.md) and [fal](fal.md) are commercial aggregators you pay directly, the HUIT (Harvard University Information Technology) gateway is Harvard's version of the same idea for its own community: one key (`HUIT_API_KEY`), billed and governed through the university rather than a personal card, reaching several providers under names like `huit-openai`, `huit-gemini`, and `huit-bedrock` in the scripts' provider list.

The practical reason it exists is the same reason any institutional gateway does: it lets Harvard track usage, apply its own data-handling terms, and extend model access to students and staff without everyone signing up individually with outside companies. The portal itself is at https://portal.apis.huit.harvard.edu, where keys are issued and the available services are listed. Using it does not remove the ordinary [data sensitivity](data-sensitivity.md) questions about what you send to any model, but it does mean the account itself sits inside Harvard's own agreements rather than a personal one.

## Why it matters this term

It is the option in `.env` most tied to your Harvard identity rather than a class-distributed key, worth knowing about even in weeks where the class key covers what you need.

## See also

[API key](api-key.md) · [API](api.md) · [Data sensitivity](data-sensitivity.md)
