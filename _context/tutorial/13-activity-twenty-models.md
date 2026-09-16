# 13. Activity: one prompt, twenty models

In step 1 you typed three words into two chat apps and got four pictures. In step 11 you sent the same kind of prompt through a script, one model at a time. Now the same three words go to twenty models at once, and the script builds a web page that puts the results side by side. Nothing about this is a special feature; it is the script from 11.6 with a longer list of models. The list is the point.

You need the keys from step 10 and the folder open in Claude's **Code** tab or in **Codex** (step 8). Everything this page makes lands in `output/`, which `.gitignore` hides (step 7), so none of it can end up in the repository by accident, including the gallery page itself.

## 13.1 Look at the catalogues

Two aggregators, two shop windows. Open both in your browser and spend five minutes scrolling before you run anything.

- **fal**: https://fal.ai/models?categories=text-to-image
- **OpenRouter**: https://openrouter.ai/models?output_modalities=image

Things to notice while you scroll:

- **How many there are.** Count roughly. Then notice how many are versions of the same few families: FLUX, Nano Banana (Google's Gemini image models), GPT Image, Seedream, Recraft, Qwen.
- **The names.** A fal id looks like `fal-ai/flux/schnell`; an OpenRouter id looks like `black-forest-labs/flux.2-klein-4b`. Same company, sometimes the same model, different names on each shelf.
- **The prices.** Each model's page says what one image costs. Find the cheapest and the most expensive on each site. The spread is more than ten times.
- **The dates.** Most of what you see shipped in the last year. Some of it will be gone by December.

Pick three you would like to try, and write their ids down. You'll use them in a moment.

## 13.2 List them from the API

The web page is one view of the catalogue. The API has another, and it is the one the scripts read. Two listers, no key needed for either:

```bash
node utils/list-image-models.mjs
```
```bash
node utils/list-fal-models.mjs
```

OpenRouter returns its whole image roster, sorted by id. fal returns its catalogue in its own order, the same order as the website, a hundred at a time; `--limit 20` stops at twenty, `--all` keeps paging until the end, `--grep flux` filters:

```bash
node utils/list-fal-models.mjs --limit 20
```
```bash
node utils/list-fal-models.mjs --all --grep banana
```

Compare the terminal with the browser tab. The ids match; the prices don't come through (the listing endpoints don't carry them); the count may differ a little from what the page shows, because the page hides some endpoints the API still lists. What you see in the terminal is exactly what a script, or an agent running a script, can see.

## 13.3 Twenty images, one prompt

Now hand the job to the model that runs your tools. In Claude's **Code** tab, or in Codex, with this folder open, type:

```
Run utils/list-fal-models.mjs --limit 20 to get the first twenty text-to-image endpoints in fal's catalogue. Then run utils/batch-images.mjs with --provider fal, the prompt "a happy couple", those twenty models, one image each, and --parallel 4. Do a --dry-run first and show me the plan; if it looks right, run it for real. When it finishes, tell me where the batch landed and open its index.html.
```

Watch what it does: it runs the lister, reads the ids, assembles the batch command, shows you the dry run, asks permission, runs it. Twenty images across four parallel jobs takes a minute or two. Every line it prints is a command you could have typed.

If you'd rather type it yourself, this is the command it ends up running (these were the first twenty on 2026-09-16; yours may differ, because the catalogue moves):

```bash
node utils/batch-images.mjs "a happy couple" --provider fal --models fal-ai/flux/schnell,fal-ai/nano-banana-2,openai/gpt-image-2,fal-ai/nano-banana-pro,fal-ai/flux/dev,openai/gpt-image-2.5/sunburst/text-to-image,fal-ai/flux-2-pro,openai/gpt-image-2.5/flare/text-to-image,fal-ai/nano-banana,fal-ai/flux-pro/v1.1,bytedance/seedream/v5/pro/text-to-image,fal-ai/flux-pro/v1.1-ultra,google/nano-banana-2-lite,fal-ai/flux-2/klein/9b,fal-ai/z-image/turbo,fal-ai/flux-lora,fal-ai/bytedance/seedream/v4.5/text-to-image,fal-ai/bytedance/seedream/v4/text-to-image,fal-ai/flux-2,xai/grok-imagine-image --n 1 --parallel 4
```

Either way it ends with `Batch saved: output/batches/<date>-a-happy-couple` and a path to an `index.html`. Open it. One row per model, the id above each image, and every request and response saved beside its picture as JSON.

Then run `git status`. The folder isn't there. `output/` is in `.gitignore`, so twenty images, a web page, and forty JSON files exist on your disk and are invisible to Git. That is the right place for generated material: keep it, look at it, move the ones you want to a tracked folder on purpose.

The same thing through OpenRouter, if you want a second twenty:

```
Do the same with --provider openrouter and the first twenty ids from utils/list-image-models.mjs.
```

## 13.4 What to look for

Go down the page slowly, one model at a time, then compare across.

- **Who is in the couple.** Ages, heights, who is on the left, who is looking at whom. Across twenty models, how many couples aren't one man and one woman? How many people look older than fifty?
- **Where and when.** Indoors or out. Beach, park, kitchen, city street. Golden hour, every time?
- **The style.** Photo or illustration. Stock-photo smile or something else. Which models look like each other, and are those the ones from the same family?
- **The sizes.** Open a few images and look at their dimensions. Most models returned 1024 wide; the Seedream models returned 2048 and larger; the Nano Banana 2 models returned 1408 by 768. Nobody asked for any of that. Every model has a default, and the default is data.
- **Against your chat images.** Put the ChatGPT and Gemini couples from step 1 next to the batch. Chat added a system prompt you never saw; the script added nothing. Which is closer to the twenty?

Then the other prompt, the same way:

```
Same twenty models, same settings, prompt "a happy family".
```

## The point

A three-word prompt leaves everything unspecified, and each model fills every gap with its most likely guess. Twenty models make twenty sets of guesses, and laying them side by side is the only way to see which guesses are one company's and which are the whole field's. One image tells you almost nothing about a model. A row of twenty tells you something about the moment.

Two things follow. Specificity is yours to add: every detail you don't write, the model writes for you. And the list you fed the script came from the API, not from your memory, which is why a model could assemble it, and why it will still work when the catalogue has changed.

## Variations, if there's time

- Your three ids from 13.1, four images each, to see variation within a model rather than across models.
- The same prompt in another language: `una pareja feliz`, `一对幸福的夫妻`, `un couple heureux`.
- One added word: `a happy couple at dinner`, `a happy couple in Lagos`, `a happy couple in 1974`.
- Twenty models from `--category image-to-image`, with `--ref` pointing at one of your chat images from step 1.

Post your gallery (a screenshot, or a zip of the batch folder) to the course Slack channel with three sentences on what you saw.

## When something fails

- **One model's line says `failed`**: the rest of the batch still finishes and the gallery still builds; open that model's `response.json` to see what it said. A safety filter or a model that wants a setting the script doesn't send are the usual reasons.
- **`API HTTP 402`** or a message about credit: the class key is out of money. Stop and tell us; don't retry.
- **It's slow**: `--parallel 4` is plenty. Higher can trip rate limits.
