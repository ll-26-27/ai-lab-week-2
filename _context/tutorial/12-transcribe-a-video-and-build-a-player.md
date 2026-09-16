# 12. Transcribe a video, then build a player for it

In 11.4 you turned ten seconds of audio into text. This page does it with a video and then goes one step further: a web page that plays the video with the transcript beside it, where clicking any line jumps to that moment. Three tools you installed today do the work in turn: yt-dlp or your phone gets the video, ffmpeg pulls the sound out, the transcription script turns the sound into timestamped text, and then an agent (or a script) turns that text into a page.

## 12.1 Get a video into `_media/`

Anything with someone talking, two to five minutes long. Two ways:

**From your phone.** AirDrop or email yourself a clip and move it into this repo's `_media/` folder. Git ignores that folder, so nothing you put there can end up in the repository.

**From the web, with yt-dlp.** Pick a short talk or interview you have the right to use for coursework. In the terminal, from the repo folder:

```bash
yt-dlp -o "_media/%(title).60s.%(ext)s" "PASTE_THE_URL_HERE"
```

It downloads the best available version and names the file after the title (cut to sixty characters). Look in `_media/` for what arrived; if the extension is `.webm` or `.mkv`, that's fine for the next step.

## 12.2 Pull the sound out with ffmpeg

The transcription endpoint wants audio, not video, and it caps files at 25 MB. One command makes a small MP3 from any video:

```bash
ffmpeg -i _media/clip.mp4 -vn -codec:a libmp3lame -q:a 6 _media/clip.mp3
```

Use your file's real name in both places. `-vn` means no video; the rest picks the MP3 encoder at a modest quality, which is all speech needs. A five-minute talk comes out around three megabytes.

## 12.3 Transcribe with timestamps

```bash
node utils/transcribe.mjs _media/clip.mp3 --model openai/whisper-1 --verbose
```

`--verbose` is the difference from 11.4: the response now carries segments, each with a start time, an end time, and its text. The words print, the script names the run folder, and `transcript.md` in that folder lists the segments with timestamps. Open it and read it against the video for a minute. Where did it mishear a name or a technical word? Those errors are data too; a model that has never seen "ffmpeg" spelled out will write what it heard.

## 12.4 Build the player

Two ways. Do the first one; the second is the fallback.

**Ask the agent.** In Claude's **Code** tab or in Codex, with this folder open:

```
In output/transcript/, find the newest run folder. Its response.json has a "segments" array with start, end, and text. Using utils/templates/transcript-player.html as the starting point, build player.html in that run folder: a <video> element that plays my file _media/clip.mp4 (write the path relative to where the page lives), and below it the transcript as one line per segment with its timestamp. Clicking a line should seek the video to that segment's start and play; the current line should highlight as the video plays. No external libraries. Then open the page.
```

Watch what it does: reads the JSON, reads the template, writes one file, opens it. The template is a plain HTML file in `utils/templates/`; open it yourself and read the comment at the top. The page it makes is yours to change; ask for a different layout, a search box, bigger type.

**Or run the script.** It fills the same template for you, so you can compare what the agent made with the straight version, or use it when the agent's doesn't work:

```bash
node utils/transcript-player.mjs output/transcript/RUN_FOLDER --media _media/clip.mp4
```

It writes `player.html` into the run folder and prints the path. Open it in a browser: double-click it in the Explorer, or `open` it from the terminal on a Mac. Click a line. Space plays and pauses; the arrow keys step five seconds or a line at a time.

**If the transcript shows but clicking a line doesn't move the video**, the page is being served by something that can't answer range requests (Python's one-line web server and some editor previews are like this), and browsers refuse to seek a video they can't fetch in pieces. Opening the file directly avoids it. So does the repo's own server, which answers ranges:

```bash
node utils/serve.mjs output
```

Then open http://localhost:8787/ and click through to the run folder. Ctrl+C stops it.

## 12.5 What you just made

A media file, a JSON record of what a model heard in it, and a page that ties the two together, all on your own disk, all from three words of prompt and four commands. This is the shape of most of the term's projects: capture something, run it through a model, build a small thing that lets a person see what the model saw. The transcript is searchable text now; the video is navigable by what was said in it. Next week's work with interviews starts exactly here.

Everything on this page lives in `output/` and `_media/`, both ignored by Git. If you want to keep the player, move the page and the video together into a tracked folder; the page points at the video by a relative path, so they have to move as a pair.

Next: [one prompt, twenty models](13-activity-twenty-models.md).
