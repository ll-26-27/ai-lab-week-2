# 11. Generate with the API keys: HUIT first, then OpenRouter and fal

In the chat apps you type a prompt and an answer appears. Behind that is a request to a model with a name, a price, and a handful of settings. The scripts in `utils/` make that request directly, through three doors: Harvard's own **HUIT** gateway, and two commercial aggregators, **OpenRouter** and **fal**. Same models, no button, and everything that comes back is saved as files you can open.

You need Node (installed in step 3 or 4; `node --version` should say v22 or higher) and the keys from step 10. Every command below was run for real on 2026-09-16; `utils/examples.md` keeps that list current.

## 11.1 First generation: Claude through HUIT

HUIT is Harvard's gateway to outside models. One key, billed to the university, no personal account with any company. Start here, with Claude Sonnet:

```bash
node utils/generate-text.mjs huit-bedrock "Reply with the single word HELLO." --model us.anthropic.claude-sonnet-5
```

`HELLO` prints, and the script says `Saved output/text/<timestamp>-<id>`. Open that folder in the Explorer:

- `text.md`: the reply.
- `request.json`: exactly what was sent, model and prompt included.
- `response.json`: what came back, with whatever usage the provider reports.

That is the whole transaction, on disk. Now the multiplication, through the same Haiku you asked this morning, only with no chat app around it:

```bash
node utils/generate-text.mjs huit-bedrock "What is 82,345 × 67,890? Answer with the number only." --model us.anthropic.claude-haiku-4-5-20251001-v1:0
```

No system prompt, no tools, no model picker. Compare the number with what Haiku said in step 1. Then the same prompt through Opus:

```bash
node utils/generate-text.mjs huit-bedrock "What is 82,345 × 67,890? Answer with the number only." --model us.anthropic.claude-opus-5
```

The Claude ids on this gateway are Bedrock's: `us.anthropic.claude-sonnet-5`, `us.anthropic.claude-opus-5`, the dated Haiku id above, and `claude-fable-5` as a shortcut. `utils/examples.md` has the verified list.

The same key reaches OpenAI and Gemini through HUIT too, text and images:

```bash
node utils/generate-text.mjs huit-openai "Reply with the single word HELLO." --model gpt-5-mini
```
```bash
node utils/generate-image.mjs huit-gemini "a red pencil astronaut, comic-book inks" --model gemini-2.5-flash-image
```

The image lands as `image-01.png` in a new `output/image/<run>/` folder. Open it.

## 11.2 OpenRouter: one key, many models

OpenRouter puts dozens of companies' models behind one key and one request shape. First see what's there today:

```bash
node utils/list-image-models.mjs
```
```bash
node utils/list-text-models.mjs --grep mini
```

Both print ids on the left; that id is what `--model` wants. The lists change month to month, which is itself worth noticing. Then one text and one image:

```bash
node utils/generate-text.mjs openrouter "Reply with the single word HELLO." --model openai/gpt-5-mini
```
```bash
node utils/generate-image.mjs openrouter "a red pencil astronaut, comic-book inks" --model black-forest-labs/flux.2-klein-4b
```

Look in `response.json` for the image run: OpenRouter reports the cost. Then the same image prompt through a second model:

```bash
node utils/generate-image.mjs openrouter "a red pencil astronaut, comic-book inks" --model google/gemini-2.5-flash-image
```

Two images, same words, different models. Hold that thought for step 13.

## 11.3 fal: image endpoints

fal specializes in image and video models, each an endpoint with its own settings. Text goes through its any-LLM endpoint, where `--model` names the language model inside:

```bash
node utils/generate-text.mjs fal "Reply with the single word HELLO." --model google/gemini-2.5-flash-lite
```

For images `--model` is the endpoint id:

```bash
node utils/generate-image.mjs fal "a red pencil astronaut, comic-book inks" --model fal-ai/flux/dev
```

fal queues the job and the script polls until it's done; if you interrupt it, the run folder holds a `fal-request.json` receipt and `--resume` fetches the result without paying twice.

## 11.4 Speech to text, through the same key

OpenRouter also fronts transcription models. Record ten seconds on your phone (a voice memo is fine), get the file onto your machine as `.m4a` or `.mp3`, drop it in this repo's `_media/` folder (that's where anything you bring in goes; Git ignores it), and:

```bash
node utils/transcribe.mjs _media/memo.m4a --model openai/whisper-large-v3
```

The words print, and `output/transcript/<run>/transcript.md` holds them with the model and duration on top. Add `--verbose` for timestamped segments, or `--language es` to tell it what to expect. The endpoint accepts WAV, MP3, FLAC, M4A, OGG, WebM, and AAC, up to 25 MB; ffmpeg can convert or split anything bigger. Page 12 does this with a whole video and builds a player for it; here it's a ten-second proof that audio is text too.

## 11.5 Let Claude or Codex run it

This is where the folder you added in step 8 pays off. In Claude's **Code** tab or in **Codex**, with this folder open, type:

```
Run utils/generate-image.mjs through openrouter with the prompt "a lighthouse in a storm" and the model google/gemini-2.5-flash-image, then tell me where the image landed and open it.
```

It reads the script, works out the command, asks permission to run it, runs it, and reports. Go further:

```
Read utils/generate-image.mjs --help and list the options I could use.
```
```
Make five variations of that lighthouse prompt, run all five through huit-gemini, and put the results in one folder.
```

The model is now operating the same tool you just operated by hand. Because it's a script in your folder, you can see every command it ran and every file it made, and you can ask it to change the script itself.

## 11.6 Many at once

`batch-images.mjs` runs one prompt across several models, several times each, and builds a web page to compare them:

```bash
node utils/batch-images.mjs "a red pencil astronaut" --models google/gemini-2.5-flash-image,black-forest-labs/flux.2-klein-4b --n 2
```

It prints a line per run, then `Batch saved: output/batches/<timestamp>-a-red-pencil-astronaut`. Open the `index.html` inside in a browser. `batch-text.mjs` does the same for text, with `--expect` to mark answers right or wrong. `batch-images.mjs` is the tool for step 13, where the model list gets long.

## When something fails

- **`Missing HUIT_API_KEY`** (or another key): step 10.
- **`API HTTP 401` or `403`**: the key is wrong or not yet active. Check for stray spaces in `.env`.
- **`API HTTP 402`** or a message about credit: that key's account is out of money. Tell us.
- **`API HTTP 400`**: the model didn't like a setting, or the id is wrong. Copy ids from the lists above or from `utils/examples.md`.
- **`Provider returned no images`**: usually a safety filter on the prompt. Open `response.json` in the run folder to see what it said.
- **HUIT Bedrock rejects a model id**: it wants the exact Bedrock profile id. Copy one from `utils/examples.md`; older Claude ids need their date and `-v1:0` suffix, the Claude 5 ids do not.
