---
term: "OpenRouter image APIs"
slug: openrouter-image-apis
short: "OpenRouter's dedicated Image API (and its newer Video API): one request shape for fifty-plus image models, with reference images in, and a discovery endpoint that says how many each model takes."
aliases: ["OpenRouter images", "input_references"]
category: apis-and-keys
see_also: [openrouter, fal-image-apis, fal-video-apis, image-model, batch, api]
updated: 2026-09-16
---

# OpenRouter image APIs

**OpenRouter has a dedicated Image API: `POST /api/v1/images` with a model id, a prompt, and optional reference images, returning base64 image bytes. A discovery endpoint lists every model with its limits, including how many reference images it accepts. A parallel, asynchronous Video API adds first-frame and last-frame images.**

## What our scripts send

`utils/generate-image.mjs openrouter` posts to `/api/v1/images` with `model` and `prompt`, plus whichever of `--aspect`, `--resolution`, `--size`, `--quality`, `--format`, and `--n` you gave (they map to `aspect_ratio`, `resolution`, `size`, `quality`, `output_format`, `n`). Each `--ref FILE` (PNG, JPEG, or WebP, at most 50 MB, repeatable) is read from disk and sent inline as a base64 data URL inside `input_references`, which is OpenRouter's field for image-to-image. There is no upload step and no URL to host. `batch-images.mjs` uses the same request across a list of models.

```bash
node utils/generate-image.mjs openrouter "the same couple, now on a beach at sunset" --model google/gemini-2.5-flash-image --ref photo.jpg
```

Verified 2026-09-16: two references into `google/gemini-2.5-flash-image` and one into `black-forest-labs/flux.2-klein-4b` both returned an image. The request, with the image bytes redacted, is saved as `request.json` beside the result.

## Discovery: what each model accepts

`GET /api/v1/images/models` (what `utils/list-image-models.mjs` reads) lists every image model with `architecture.input_modalities` and a `supported_parameters` map. Each key is a request field and the value says what it takes: an enum of values, a range, or a boolean. The one to look at for references is `input_references`, a range whose `max` is the number of images the model accepts. `GET /api/v1/images/models/<id>/endpoints` goes one level down, per provider, with pricing lines (`output_image`, `input_image`, `input_reference`, per image, per megapixel, or per token) and `allowed_passthrough_parameters` for provider-specific knobs under `provider.options`.

Reference limits on 2026-09-16, from that descriptor. All 52 models list image as an input modality.

| Family | Models | Max references | Max `n` |
| --- | --- | --- | --- |
| OpenAI GPT Image | gpt-image-1, 1-mini, 2, 2.5-flare, 2.5-sunburst, gpt-5-image, 5-image-mini, 5.4-image-2 | 16 | 10 |
| ByteDance Seedream | 4.5, 5.0-lite, 5.0-pro | 14 | 10, 4, 1 |
| Google Nano Banana | gemini-3-pro-image (+preview), gemini-3.1-flash-image (+preview, +lite) | 14 | 1 |
| Google Nano Banana 1 | gemini-2.5-flash-image | 3 | 1 |
| Black Forest Labs FLUX.2 | pro, max, flex | 8 | 1 |
| | klein-4b | 4 | 1 |
| Qwen Image 3 | qwen-image-3, 3-pro | 4 | 6 |
| Microsoft MAI-Image | 2.6, 2.6-flash | 5 | 1 |
| | 2.5, 2.5-pro | 1 | 1 |
| xAI Grok Imagine | 2.0, quality | 3 | 1 |
| Sourceful Riverflow | v2-pro, v2.5-pro | 10 | 1 |
| | v2-fast, v2.5-fast | 4 | 1 |
| Recraft | v3, v4, v4.1 and their pro, vector, utility variants | 1 | 6 |
| | v4-styles variants | 1 to 10 (a reference is required) | 6 |
| Krea 2 | large, medium, medium-turbo | 1 | not listed |
| Meta Muse Image | muse-image | not listed | not listed |

Other fields the descriptor covers: `aspect_ratio` (an enum per model, 4 to 18 values), `resolution` (`1K`, `2K`, `4K`, sometimes `512`), `size` as explicit pixels, `quality`, `output_format` (`png`, `jpeg`, `webp`, `svg` for vector models), `background`, `output_compression`, `seed`. Requests with values outside the descriptor get a 400 that lists what is allowed. Provider routing (`provider.only`, `order`, `ignore`, `sort`) and streaming of partial images are also on this endpoint.

## Video

OpenRouter added a Video API on the same pattern, asynchronous because clips take minutes: `POST /api/v1/videos` returns a job id, `GET /api/v1/videos/{id}` is polled until `completed`, and `GET /api/v1/videos/{id}/content` downloads the clip. Two image fields, and they mean different things:

- **`frame_images`**: an array of images each tagged `frame_type: first_frame` or `last_frame`. This is image-to-video, and with both frames it is a first-and-last-frame job.
- **`input_references`**: style or subject references, as in the Image API. This is reference-to-video. If both fields are present, `frame_images` wins.

`GET /api/v1/videos/models` lists 29 models with `supported_frame_images`, `supported_durations`, `supported_resolutions`, `supported_aspect_ratios`, and pricing SKUs. On 2026-09-16, first *and* last frame: Google Veo 3.1 (standard, fast, lite), Kling v3.0 pro and std, Kling Video O1, ByteDance Seedance 2.5, 2.0, 2.0-fast, 2.0-mini, and 1.5-pro, MiniMax Hailuo 3 and 3-max, Alibaba Wan 2.7, and FLUX 3 Video. First frame only: Wan 3.0, 3.0-prime, 2.6, Runway Gen-4.5, Grok Imagine Video 1.0 and 1.5, HappyHorse 1.0 and 1.1, Hailuo 2.3. No frame images: Sora 2 Pro, HeyGen Avatar IV, and the video-in editors (FLUX Video Edit, FLUX Video Upscale, Runway Aleph 2).

**Our scripts do not call the Video API.** `generate-image.mjs` expects image bytes back and has no polling loop for video jobs. A `generate-video.mjs` would be the addition; until then the endpoint is reachable with `curl` and the key from `.env`.

## Why it matters this term

One request shape for the whole shelf is what makes the [batch](batch.md) activity possible, and the discovery endpoint is the honest answer to "how many reference images can I give this model": it changes per model and per month, and the API says so. When a reference-image run fails with a 400, the descriptor is the first place to look.

## See also

[OpenRouter](openrouter.md) · [fal image APIs](fal-image-apis.md) · [fal video APIs](fal-video-apis.md) · [Image model](image-model.md) · [Batch](batch.md) · [API](api.md) · Docs: https://openrouter.ai/docs/features/multimodal/image-generation and https://openrouter.ai/docs/features/multimodal/video-generation
