# 10. Keys and the `.env` file

The scripts in `utils/` talk to image and text models over the internet, through OpenRouter and fal, using an **API** (application programming interface): a way for a program, rather than a person in a chat window, to send a request and get a result. Every API request carries a **key**, a long secret string that says which account to bill. This page is about handling that key without leaking it.

## 10.1 What an environment variable is

Programs can read named values from their surroundings instead of having them typed into the code. Those are environment variables. `OPENROUTER_API_KEY` is one. The scripts look for it, first in your terminal's environment, then in a file called `.env` at the top of the repo. Keeping the key in a file that Git ignores means the code can be shared and the secret can't.

## 10.2 Make the file

If you didn't already in step 7:

```bash
cp .env.example .env
```

Open `.env` in VS Code. It looks like the example, with blank values:

```text
OPENROUTER_API_KEY=
FAL_API_KEY=
```

Paste each key you were given in class after its `=`, no spaces, no quotes. Save. Fill only the lines you have keys for; today that should be both.

## 10.3 Confirm without spending anything

```bash
node utils/generate-text.mjs openrouter "Reply with HELLO." --model anthropic/claude-sonnet-5 --dry-run
```

`--dry-run` builds the request and prints it, but makes no network call. Two lines to look for in the output:

```text
"env_file": ".../tdm155ai-week-2/.env",
"key_available": true,
```

If `key_available` is `false`, the script found the file but not the key on the line it expected. Check the variable name and that there's no space around the `=`.

Notice the key itself never appears in that output. The scripts redact it everywhere they print or save.

## 10.4 The rules

- **Never paste a key into a chat**, including Claude, ChatGPT, or Slack. If a model needs to run the script, it reads the key from `.env` itself; you don't hand it over.
- **Never commit `.env`.** You can't by accident, thanks to `.gitignore`. Check with `git status` if you're unsure.
- **Never put a key in a screenshot** you share.
- If a key does leak, say so right away. Keys can be revoked and reissued in a minute; a leaked key that keeps working is the expensive case.

Next: [generate with the API keys](11-generate-images-with-scripts.md).
