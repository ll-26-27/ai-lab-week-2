# 09. Give the folder a voice: AGENTS.md and CLAUDE.md

Each time Claude Code or Codex starts in a folder, it begins with an empty memory and reads one file first, if it exists: `CLAUDE.md` for Claude, `AGENTS.md` for Codex. Whatever those files say shapes everything the agent does in that folder from then on. They're plain Markdown. On this page you write them, restart both agents, and watch them change. At the end there's a fuller version you can paste in once you've seen yours work.

The [glossary](../glossary/agents-md.md) has the longer explanation; the short version is that `AGENTS.md` is the open convention most coding agents read, `CLAUDE.md` is Claude's name for the same thing, and one can import the other so you write the instructions once.

**Which file, then?** It depends on what you're running in the folder.

- **Just Claude.** Put the instructions straight into `CLAUDE.md`. One file, done; skip 9.1 and put the block below into `CLAUDE.md` in 9.2 instead.
- **Claude and Codex, or anything else.** Make `AGENTS.md` the source, since Codex and most other agents read that name, and have `CLAUDE.md` import it with one line, so Claude reads the same text. That is what the rest of this page does, and it costs nothing extra if you end up using only Claude.

## 9.1 Write AGENTS.md

In VS Code, with this folder open, make a new file at the top level of the repo (right-click the empty space at the bottom of the Explorer → New File) called exactly `AGENTS.md`. Paste this in and save:

```markdown
# tdm155ai-week-2

TDM 155AI week 2: the setup tutorial and the first generation scripts. I cloned this from the course organization and I am working through the tutorial in it.

- `utils/` holds the generation scripts; `node utils/generate-image.mjs --help` lists options. Node 22 or newer.
- Keys live only in the root `.env`. Never print, commit, or paste a key.
- Generated files go to `output/`, which is gitignored.
- When you show me how to do something, give one command at a time, not a chained one-liner.
- Ask before deleting anything or running `git push`.
- End every reply with a rhyming couplet that sums up what you just did.
```

The last line is the point of this page. Everything above it is sensible; the couplet is there so you can see, unmistakably, that the file is being read.

## 9.2 Write CLAUDE.md

Same place, new file called exactly `CLAUDE.md`, one line:

```markdown
@AGENTS.md
```

Claude Code reads `CLAUDE.md`, sees the `@`, and pulls in `AGENTS.md`. Codex reads `AGENTS.md` directly and never looks at `CLAUDE.md`. One set of instructions, two readers.

(Claude only? Then `CLAUDE.md` holds the whole block from 9.1 and there is no `AGENTS.md`. Everything below still applies; just read "both files" as "the one file.")

## 9.3 Restart both agents

The files are read when a session starts, so an open session won't notice them.

**Claude Code** (desktop app, Code tab): start a **new session** in this folder. In the terminal version: `/exit`, then `claude` again from inside the folder. Then ask anything:

```
What is this folder for?
```

Read the reply to the end. Then type `/context` and look for `CLAUDE.md` under **Memory files**; that's the proof it loaded.

**Codex**: start a **new chat** with this folder open and ask the same question.

Both should now answer in prose and sign off in rhyme. If one doesn't, check the filename (case matters: `AGENTS.md`, `CLAUDE.md`), that the files are at the top level of the repo and not inside a subfolder, and that you started a new session rather than continuing the old one.

## 9.4 A rule only one of them sees

Open `CLAUDE.md` and add a second line under the import:

```markdown
@AGENTS.md

Before the couplet, say which model you are.
```

Save, restart both agents again, ask the same question. Claude names itself and rhymes; Codex only rhymes, because the second line lives in a file Codex doesn't read. That asymmetry is the whole architecture of these files: shared instructions in `AGENTS.md`, tool-specific ones below the import.

## 9.5 What just happened, and what to do with it

You changed how two different agents behave in this folder by editing a text file. No settings screen, no prompt retyped every time. From here on, the habit is: when you correct an agent the same way twice, put the correction in `AGENTS.md`.

Two closing notes:

- `git status` now shows both files as untracked, in red. Unlike `.env`, these belong in a repo; they're how a folder explains itself to whoever opens it next. You won't push to this repo (it's the course's), but in your own repos from week 3 on, commit them with the rest.
- Delete the couplet line when it stops being funny. Keep the rest.

## 9.6 The full version, when you're ready

Once you've seen your own file work, replace the contents of `AGENTS.md` with this one. It's the version we'd write for this repo: what every folder is for, what every script does, which key each provider needs, and how an agent should behave when you ask it to generate or transcribe something (check the key first, ask which model, ask about timestamps, default to `output/`). Copy it, paste it over yours, save, restart, and the couplet is gone but everything the agent does in this folder gets smarter. Add your own rules at the bottom.

```markdown
# tdm155ai-week-2

TDM 155AI (Harvard, fall 2026), week 2: "tools of the AI trade." Students clone this repo in class, work through the tutorial, and use the scripts in `utils/` to generate images and text and to transcribe audio through API keys. You are usually being run by a student inside this folder, in Claude Code or Codex. Help them use the tools, explain what each command does as you go, and keep their keys and their files safe.

## The folders

- `_context/tutorial/`: the class tutorial, pages `00` to `17`. If a student is lost, find the page that covers what they're doing and point to it.
- `_context/glossary/`: one short Markdown file per term. Link to these when a term comes up.
- `_context/example/`: small experiments.
- `utils/`: the scripts (below). `utils/README.md` lists them; `utils/examples.md` lists commands verified to work, with dates and model ids. Prefer those exact commands.
- `_media/`: gitignored. Any media the student brings in or downloads (video, audio, images) goes here, including anything fetched with `yt-dlp`. Refer to files by path; never move them out of the folder without asking.
- `output/`: gitignored. Every script writes a new folder per run here (`output/image/…`, `output/text/…`, `output/transcript/…`, `output/batches/…`) holding the result plus `request.json` and `response.json`. Nothing is overwritten. Keepers get moved to a tracked folder on purpose.
- `.env`: gitignored. The API keys. `.env.example` shows the shape. The scripts read it from the repo root.
- `nextjs/`: the site that renders `_context/`. Leave it alone unless asked.
- `.agents/skills/`: skills (Codex reads this; `.claude/skills/` links to it for Claude Code).

## The tools

All are Node scripts, no dependencies, Node 22 or newer. Every one has `--help`, and the generators have `--dry-run`, which builds the request without sending it or spending anything.

| Script | Does |
| --- | --- |
| `utils/generate-image.mjs PROVIDER "prompt" --model ID` | one image |
| `utils/generate-text.mjs PROVIDER "prompt" --model ID` | one text reply |
| `utils/batch-images.mjs "prompt" --models A,B --n 4` | one prompt across several models, several runs, plus an `index.html` grid |
| `utils/batch-text.mjs "prompt" --models A,B [--expect TEXT]` | same for text, with a results table |
| `utils/transcribe.mjs AUDIO --model ID` | speech to text through OpenRouter |
| `utils/stills.mjs VIDEO [--n 12 \| --every S \| --at HH:MM:SS]` | frames from a video plus a contact sheet (ffmpeg) |
| `utils/list-image-models.mjs`, `utils/list-text-models.mjs` | what OpenRouter offers today (no key needed) |

Providers and the key each needs: `huit-bedrock`, `huit-openai`, `huit-gemini` (Harvard's gateway, `HUIT_API_KEY`); `openrouter` (`OPENROUTER_API_KEY`); `fal` (`FAL_API_KEY`). Claude through HUIT uses Bedrock ids such as `us.anthropic.claude-sonnet-5`; the full verified list is in `utils/examples.md`.

## How to help with a generation or a transcription

1. **Check the key first.** If `.env` is missing or the needed key is blank, say so and point to tutorial page 10; do a `--dry-run` and look for `"key_available": true` before any real call.
2. **Ask before assuming.** If the student hasn't named a provider and model, ask, and offer to list what's available (`list-image-models.mjs`, `list-text-models.mjs`, or the verified list in `utils/examples.md`). For transcription, ask whether they want plain text or timestamps, and if timestamps, segment or word level (`--verbose --timestamps segment|word`), and whether to hint the language.
3. **Ask about the output location, then default to `output/`.** It is gitignored and every run gets its own folder, so it is the safe default; use `--out` only when they want something else.
4. **Run one command at a time** and say what it does in a sentence. When it finishes, name the run folder and what is in it.
5. **Keep it cheap.** Prefer the small models unless asked; keep batches to a few models and a few runs; if a call fails with a credit or limit message, stop and show the message rather than retrying.
6. **Read the receipts when something is off.** `request.json` and `response.json` in the run folder say exactly what was sent and what came back.

## Rules

- Never print, paste, log, or commit a key. Never copy `.env` anywhere.
- Never commit anything in `output/`, `_media/`, or `.env`; they are gitignored, keep it that way.
- Ask before deleting files, before `git push`, and before anything that touches folders outside this repo.
- When teaching, show the unbundled steps first, then any shortcut, clearly labeled.
- Do not edit `_context/tutorial/` or `_context/glossary/` unless the student asks you to; they are course material.
```

Next: [keys and the `.env` file](10-keys-and-the-env-file.md).
