---
term: "fal video APIs"
slug: fal-video-apis
short: "fal's video endpoints: text-to-video, image-to-video from a first frame, first-and-last-frame, keyframes, and reference-to-video, each with its own field names, none yet wired into our scripts."
aliases: ["fal video", "first frame", "last frame", "first-last-frame"]
category: apis-and-keys
see_also: [fal, fal-image-apis, openrouter-image-apis, ffmpeg]
updated: 2026-09-16
---

# fal video APIs

**fal serves video models the same way it serves image models, one endpoint per model with its own schema, and the video endpoints come in four shapes: text-to-video, image-to-video (your image is the first frame), first-and-last-frame (two images, the model fills the motion between), and reference-to-video (images, clips, and audio as guidance rather than frames). Which shape, and the names of the fields, differ per endpoint.**

## The shapes and their fields

On 2026-09-16 fal listed 156 text-to-video and 236 image-to-video endpoints. The field names below are from the endpoints' OpenAPI schemas.

**Text-to-video.** `prompt` plus `duration`, `resolution`, `aspect_ratio`, and often `generate_audio`. Examples: `fal-ai/veo3.1` (4, 6, or 8 seconds; 720p, 1080p, 4k; 16:9 or 9:16; audio on request), `fal-ai/kling-video/v3/pro/text-to-video` (3 to 15 seconds; native audio), `minimax/h3-max/text-to-video` (480P to 1080P; six aspect ratios), `bytedance/seedance-2.5/text-to-video`.

**Image-to-video, first frame.** One image that becomes frame one. The field is `image_url` on `fal-ai/kling-video/v2.5-turbo/pro/image-to-video`, `fal-ai/veo3.1/image-to-video` (wants 720p or better in 16:9 or 9:16), `bytedance/seedance-2.5/image-to-video` (JPEG, PNG, or WebP up to 30 MB), and `minimax/h3-max/image-to-video`; it is `start_image_url` on `fal-ai/kling-video/v3/pro/image-to-video` and the Kling O1 endpoints.

**First and last frame.** Two images; the clip starts on one and ends on the other. Some endpoints exist only for this, and on some image-to-video endpoints the end frame is optional:

| Endpoint | First | Last | Duration |
| --- | --- | --- | --- |
| `fal-ai/veo3.1/first-last-frame-to-video` (also `/fast/`, `/lite/`) | `first_frame_url` | `last_frame_url` | 4s, 6s, 8s |
| `blackforestlabs/flux-3/first-last-frame-to-video` (also `/draft`) | `start_image_url` | `end_image_url` | 5 to 20 s, required |
| `fal-ai/kling-video/o1/image-to-video` (pro; also `/standard/`) | `start_image_url` | `end_image_url`, optional | 3 to 10 s |
| `fal-ai/kling-video/v3/pro/image-to-video` | `start_image_url` | `end_image_url`, optional | 3 to 15 s |
| `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` | `image_url` | `tail_image_url`, optional | 5 or 10 s |
| `bytedance/seedance-2.5/image-to-video` | `image_url` | `end_image_url`, optional | 4 to 30 s or auto |
| `minimax/h3-max/image-to-video` | `image_url`, optional | `end_image_url`, optional (either alone works) | integer seconds |
| `fal-ai/pixverse/v6/transition` (also v5.6, v5.5, v5, v4.5, v3.5, c1) | `first_image_url` | `end_image_url` | 1 to 15 s |
| `fal-ai/wan-flf2v` (Wan 2.1) | `start_image_url` | `end_image_url` | 81 to 100 frames, 5 to 24 fps |
| `fal-ai/vidu/q1/start-end-to-video` (also `fal-ai/vidu/start-end-to-video`) | `start_image_url` | `end_image_url` | |

Three names for the same idea, then: `end_image_url`, `tail_image_url`, `last_frame_url`. Read the schema.

**Keyframes.** `blackforestlabs/flux-3/keyframes-to-video` generalizes first-and-last: up to 10 images pinned to `frame_index` positions in a clip of a stated duration.

**Reference-to-video.** Images (and clips, and audio) as guidance rather than frames, referred to by number in the prompt:

- `bytedance/seedance-2.5/reference-to-video`: `image_urls` (referred to as `@Image1`, `@Image2`), `video_urls` up to 10, `audio_urls` up to 10; 4 to 30 seconds; optional synchronized audio.
- `minimax/h3-max/reference-to-video`: `reference_image_urls` up to 9 (`Image 1`, `Image 2`), `reference_video_urls` up to 3 clips of 2 to 15 seconds, `reference_audio_urls` up to 3.
- `fal-ai/kling-video/v3/pro/image-to-video`: an `elements` list, each a character or object given as an image set or a video, on top of the start frame.

## Discovery

`node utils/list-fal-models.mjs --category text-to-video` and `--category image-to-video` list the endpoints; `--grep` narrows them (`--grep first`, `--grep transition`, `--grep reference`). For any endpoint the schema is at `https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=<id>`, and the field names, allowed durations, and resolutions above all came from there.

## Calling one

The transport is the same queue as images: `POST https://queue.fal.run/<endpoint-id>` with the JSON body and the `Authorization: Key ...` header, then poll the status URL in the response until it is complete, then fetch the result, which carries `video.url`. Clips take from under a minute to several minutes, and are priced per second, often with a separate rate for audio.

**Our scripts do not do this yet.** `generate-image.mjs` expects images in the result and knows nothing about the frame fields, so a `generate-video.mjs` (prompt, `--first FILE`, `--last FILE`, `--duration`, `--resolution`, polling, receipt and `--resume` like the image script) would be the addition. Until then a request is a `curl` with the key from `.env`, and images passed by URL or as data URLs the same way the image script builds them.

## Why it matters this term

Video is where the reference-image idea grows up: the same image that guided a picture becomes the opening frame of a clip, and two images become a shot. Knowing that the field is `end_image_url` on one endpoint and `tail_image_url` on another is not trivia; it is the difference between a request that works and a 400, and it is why the schema URL is worth more than any list, including this one.

## See also

[fal](fal.md) · [fal image APIs](fal-image-apis.md) · [OpenRouter image APIs](openrouter-image-apis.md) (its Video API has `frame_images` with `first_frame` and `last_frame`) · [ffmpeg](ffmpeg.md) (for pulling a first or last frame out of footage) · Catalogues: https://fal.ai/models?categories=image-to-video and https://fal.ai/models?categories=text-to-video
