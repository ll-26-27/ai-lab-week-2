# utils/

Scripts that call image and text models directly, from the terminal or from Claude Code / Codex. They use only what ships with Node 22 or newer; there is nothing to install. Keys go in the repo-root `.env` (copy `.env.example`); see `tutorial/08-keys-and-the-env-file.md`.

| Script | What it does |
| --- | --- |
| `generate-image.mjs PROVIDER "prompt" --model ID` | One image from one model. Saves `image-01.*`, `request.json`, `response.json` in a new `output/image/<run>/`. |
| `generate-text.mjs PROVIDER "prompt" --model ID` | One text reply. Prints it and saves `text.md` in `output/text/<run>/`. |
| `batch-images.mjs "prompt" --models A,B --n 4` | The same prompt across several models, several runs each, plus `index.html` to compare. |
| `batch-text.mjs "prompt" --models A,B --n 3` | The same prompt across several text models, several runs each, plus `results.md` (a table) to compare; `--expect TEXT` adds a correct? column. |
| `list-openrouter-models.mjs` | The models OpenRouter offers right now, with an output column (no key needed). `--type image`, `--type text`, or `--type audio` narrows to one kind; `--grep TEXT` filters. |
| `list-image-models.mjs` | Shortcut for `list-openrouter-models.mjs --type image`. |
| `transcribe.mjs AUDIO --model ID` | Speech to text through OpenRouter's transcription endpoint (Whisper and others). Saves `transcript.md`, with timestamped segments under `--verbose`. |
| `list-text-models.mjs` | Shortcut for `list-openrouter-models.mjs --type text`. |
| `list-fal-models.mjs` | The image endpoints fal offers right now, in fal's own catalogue order (no key needed). `--limit 20` for the first twenty, `--all` to page through everything, `--grep TEXT` filters, `--category text-to-video` for other kinds. |
| `stills.mjs VIDEO --n 12` | Evenly spaced still frames from a video, plus a `contact-sheet.jpg`, via ffmpeg. `--every SECONDS` or `--at HH:MM:SS` are the other two modes. |

Providers: `openrouter` (`OPENROUTER_API_KEY`), `fal` (`FAL_API_KEY`), `huit-openai` / `huit-gemini` / `huit-bedrock` (`HUIT_API_KEY`). `--help` on any script lists its options; `--dry-run` shows the request or the ffmpeg commands without sending or running anything. `examples.md` is a sheet of commands verified against every route, with the models and dates that worked.

```bash
node utils/list-openrouter-models.mjs --type image
node utils/list-image-models.mjs
node utils/list-text-models.mjs --grep gpt
node utils/list-fal-models.mjs --limit 20
node utils/generate-image.mjs openrouter "a red pencil astronaut" --model google/gemini-2.5-flash-image
node utils/generate-text.mjs openrouter "Reply with HELLO." --model openai/gpt-5-mini
node utils/batch-images.mjs "a happy family" --models google/gemini-2.5-flash-image,black-forest-labs/flux.2-klein-4b --n 4
node utils/batch-images.mjs "a happy couple" --provider fal --models fal-ai/flux/schnell,fal-ai/nano-banana-2,fal-ai/flux/dev --n 1
node utils/batch-text.mjs "What is the capital of France?" --models openai/gpt-5-mini,google/gemini-2.5-flash-lite --expect Paris
node utils/stills.mjs interview.mp4 --n 12
node --test utils/test/*.test.mjs
```

`package.json` has the same as shortcuts: `pnpm image`, `pnpm text`, `pnpm batch`, `pnpm batch-text`, `pnpm models`, `pnpm openrouter-models`, `pnpm text-models`, `pnpm fal-models`, `pnpm stills`, `pnpm test`.

Every run reserves a new folder before sending anything; nothing is overwritten. Keys are redacted from everything printed or saved. fal requests save a receipt (`fal-request.json`) so an interrupted job can be resumed with `--resume` instead of resubmitted. Outputs live in `output/`, which Git ignores; move keepers into a tracked folder. `stills.mjs` needs `ffmpeg` and `ffprobe` on PATH; it writes beside the video by default (`<name>-stills/`), not into `output/`.

**Lineage.** `generate-image.mjs`, `generate-text.mjs`, `lib/providers.mjs`, `lib/runtime.mjs`, `lib/cli.mjs`, and the original test were copied on 2026-09-16 from the Learning Lab's `ai-lab-context-pack/utils/` (bok-learning-lab), where the fuller README and the comic tools live. That pack is the source; fix bugs there and re-copy. `batch-images.mjs`, `list-openrouter-models.mjs` (with its `list-image-models.mjs` and `list-text-models.mjs` shortcuts), `batch-text.mjs`, `list-fal-models.mjs`, `stills.mjs`, `lib/batch.mjs`, and `lib/stills.mjs` were written here for the week 2 activities.

**The `family-batch` skill.** `.agents/skills/family-batch/SKILL.md` (symlinked from `.claude/skills/family-batch`) runs `batch-images.mjs` across a default trio of models and reports what stayed constant versus what varied. See `_context/docs/instructions-and-skills/skill-md-anatomy.md` for the format this follows.
