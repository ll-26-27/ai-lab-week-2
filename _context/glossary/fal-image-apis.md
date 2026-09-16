---
term: "fal image APIs"
slug: fal-image-apis
short: "fal's image endpoints, one URL per model, where the reference-image field and its limit differ endpoint by endpoint and the OpenAPI schema is how you find out."
aliases: ["fal images", "image_urls", "image_url"]
category: apis-and-keys
see_also: [fal, fal-video-apis, openrouter-image-apis, image-model, batch]
updated: 2026-09-16
---

# fal image APIs

**On fal every model is its own endpoint with its own input schema. Text-to-image endpoints take a `prompt`; the editing or image-to-image version of the same model is usually a sibling endpoint (`/edit`, `/image-to-image`, `/kontext`) that adds `image_urls` (a list) or `image_url` (one image). The number accepted is in the endpoint's schema, not in any global rule.**

## What our scripts send

`utils/generate-image.mjs fal` posts to `https://queue.fal.run/<endpoint-id>` with `prompt`, plus `--aspect`, `--resolution`, `--format`, and `--n` mapped to `aspect_ratio`, `resolution`, `output_format`, and `num_images`. Each `--ref FILE` (PNG, JPEG, or WebP, at most 50 MB, repeatable) is sent inline as a base64 data URL. By default the references go in `image_urls` as a list; `--ref-field image_url` sends a single reference in `image_url` instead, and the script refuses more than one in that mode. fal queues the job and the script polls; a `fal-request.json` receipt lets `--resume` fetch a result without paying twice. Anything else an endpoint wants (`mask_url`, `strength`, `image_size` as explicit pixels) goes through `--params-file` with a JSON object in that endpoint's own field names.

```bash
node utils/generate-image.mjs fal "put both couples at one dinner table" --model fal-ai/nano-banana/edit --ref a.jpg --ref b.png
```
```bash
node utils/generate-image.mjs fal "the same couple on a beach at sunset" --model fal-ai/flux-pro/kontext --ref a.jpg --ref-field image_url
```

Verified 2026-09-16: both of those returned an image. Sending references to a plain text-to-image endpoint (`fal-ai/flux/dev`, say) does nothing useful; pick the editing sibling.

## Discovery: finding the field and the limit

Two tools. `node utils/list-fal-models.mjs --category image-to-image` lists the editing endpoints in catalogue order (421 of them on 2026-09-16, including upscalers, background removers, and try-on models alongside the prompt-driven editors). For any endpoint, fal publishes an OpenAPI schema:

```
https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/nano-banana-2/edit
```

The input schema's `properties` name every field, and `maxItems` or the description gives the reference limit when there is one. That URL is what an agent should read before building a request for an endpoint it has not used.

What the schemas said on 2026-09-16 for the common editors:

| Endpoint | Field | Limit | Notes |
| --- | --- | --- | --- |
| `fal-ai/nano-banana/edit` | `image_urls` | not stated by fal (Google's limit is 3) | Gemini 2.5 Flash Image |
| `fal-ai/nano-banana-2/edit` | `image_urls` | not stated (Google's limit is 14) | also takes `video_url`, `audio_url`, `pdf_url` as context |
| `fal-ai/nano-banana-pro/edit` | `image_urls` | not stated (Google's limit is 14) | |
| `openai/gpt-image-2/edit`, `gpt-image-2.5/*/edit` | `image_urls` | 16 | plus `mask_url` for inpainting |
| `bytedance/seedream/v5/pro/edit`, `v4.5/edit`, `v4/edit` | `image_urls` | 10 (extra images are dropped, last 10 kept) | |
| `fal-ai/flux-2/edit` | `image_urls` | 4 (first 4 kept) | |
| `fal-ai/flux-2-pro/edit`, `flux-2-max/edit` | `image_urls` | not stated | |
| `fal-ai/flux-pro/kontext`, `kontext/max` | `image_url` | 1 | use `--ref-field image_url` |
| `fal-ai/flux-pro/kontext/max/multi` | `image_urls` | not stated | the multi-image Kontext |
| `xai/grok-imagine-image/edit` | `image_urls` | 3 | |
| `fal-ai/qwen-image-edit-2511`, `alibaba/qwen-image-3/edit` | `image_urls` | not stated | |
| `fal-ai/flux/dev/image-to-image` | `image_url` | 1 | classic img2img with `strength` |

The Google limits in parentheses come from OpenRouter's descriptors for the same models, which match Google's documentation; fal's schema for those endpoints leaves the list unbounded and the model enforces it.

## Two catalogues, one model

Most models sit on both shelves. The same Nano Banana is `google/gemini-2.5-flash-image` on OpenRouter and `fal-ai/nano-banana` (with `/edit` for references) on fal; the same FLUX.2 klein is `black-forest-labs/flux.2-klein-4b` and `fal-ai/flux-2/klein/4b`. OpenRouter gives one request shape and a discovery API that states the reference limit; fal gives each provider's native fields, more endpoints (the editors, upscalers, and video below), and a schema per endpoint. The ids are not interchangeable between providers.

## Why it matters this term

Reference images are where "describe it" turns into "show it," and on fal the answer to "how many" is per endpoint. Reading a schema before calling an endpoint is a habit worth building, because it is exactly what a well-instructed agent does.

## See also

[fal](fal.md) · [fal video APIs](fal-video-apis.md) · [OpenRouter image APIs](openrouter-image-apis.md) · [Image model](image-model.md) · [Batch](batch.md) · Catalogue: https://fal.ai/models?categories=image-to-image
