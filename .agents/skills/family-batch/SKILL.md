---
name: family-batch
description: Run a short prompt across several image models with utils/batch-images.mjs and open the comparison gallery. Use when asked to compare models, batch a prompt, or look for defaults and biases in generated images.
---

# Family batch

1. Confirm a key is present: `node utils/generate-image.mjs openrouter "test" --model google/gemini-2.5-flash-image --dry-run` should show `"key_available": true`. If false, stop and say so.
2. Unless the user named models, use these three: `google/gemini-2.5-flash-image`, `black-forest-labs/flux.2-klein-4b`, `openai/gpt-image-1-mini`.
3. Run: `node utils/batch-images.mjs "<the prompt>" --models <a,b,c> --n 4`
4. Report the batch folder it printed and open `index.html` there.
5. Then describe, row by row, what is constant across each model's four images (people, ages, setting, light, style) and what differs between models. Do not rate the images; describe the defaults.
