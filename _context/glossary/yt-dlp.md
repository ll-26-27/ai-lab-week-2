---
term: "yt-dlp"
slug: yt-dlp
short: "A command-line downloader that fetches video and audio from YouTube and hundreds of other sites at the quality you choose."
aliases: ["youtube-dl"]
category: media
see_also: [ffmpeg, terminal, package-manager]
updated: 2026-09-16
---

# yt-dlp

**yt-dlp is a terminal program that downloads video and audio from YouTube and a few hundred other sites, letting you pick the format and quality instead of taking what the site's player gives you.**

## In plain terms

A video on a website is a stream the page assembles on the fly; there's no file to save. yt-dlp asks the site for the pieces directly, picks the ones you asked for (best quality, audio only, a particular resolution), and writes a real file to your disk. It's the successor to youtube-dl, kept current as sites change.

It goes hand in hand with [ffmpeg](ffmpeg.md): yt-dlp fetches, ffmpeg merges the video and audio tracks into one file and converts formats. That's why the setup installs ffmpeg first. Both are tools without icons, so both come through the [package manager](package-manager.md).

One command is enough for most days: `yt-dlp URL` for the best available video, `yt-dlp -x URL` for audio only.

## Why it matters this term

Much of what you'll analyze, cut, and feed to models this term starts as something online: a talk, a music video, a scene, a clip someone posted. yt-dlp is how that becomes a file in your `AI` folder that ffmpeg can pull stills from and a model can look at. Respect the usual limits: material you have the right to use, for course work.

## See also

[ffmpeg](ffmpeg.md) · [Terminal](terminal.md) · [Package manager](package-manager.md)
