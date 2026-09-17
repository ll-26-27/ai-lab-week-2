# 00. Start here: tools of the trade

Week 2 is the setup week. Week 1 was a sprint through everything the course does; this week we slow down and put the tools on your own machine, one at a time, understanding what each one is as it goes in. This tutorial is written so you can follow it in class with us on hand, or on your own later. Nothing here is a one-off: what you install today stays installed for the term.

## What you'll have at the end

- All three chat accounts confirmed working in the browser with your Harvard College email (Gemini, ChatGPT, Claude), and two "hello world" prompts behind you: a model confidently wrong about arithmetic, and a model's default family.
- A GitHub account that is a member of the course's GitHub organization, `tdm155ai`, so you can see this repository and the ones we make later.
- A package manager: Homebrew on a Mac, winget on Windows.
- Installed through it: Git, the GitHub CLI (`gh`), ffmpeg, yt-dlp, Node, and Visual Studio Code.
- The Claude and ChatGPT desktop apps, downloaded and signed in.
- All of it signed in: Claude and ChatGPT with your Harvard account, `gh` with your GitHub account.
- This repository cloned into an `AI` folder in your home directory and open in VS Code.
- The folder connected to both desktop apps, in their work and code modes, and your first images and text generated from scripts in `utils/` with a class API key in a `.env` file.
- One three-word prompt run across twenty image models, with a gallery page to compare them, all in the gitignored `output/` folder.
- A video transcribed with timestamps and a web page that plays it with a clickable transcript.
- The Claude Chrome extension installed, and a first try at computer use in both apps.

Part 1 takes about an hour and a quarter, fifteen minutes in the browser and the rest mostly waiting on downloads; part 2 fills the rest of the session, with pages 14 and 15 as the ones to drop if time runs short. Expect one or two snags. That is normal, and it is why we do this in class. If you don't finish today, the Thursday AI Lab and Madeleine's Thursday open studio (5:00 to 7:00 PM) are the catch-up.

## The order, and why

**Part 1: accounts, apps, tools, repo** (steps 1 to 6, about an hour)

| Step | Page | Why it comes here |
| --- | --- | --- |
| 1 | [Accounts, and two "hello world" prompts](01-accounts-and-hello-world.md) | In the browser, before anything is installed. Confirm Gemini, ChatGPT, and Claude with your Harvard email, then two prompts that show how a model goes wrong: multiplication in Claude Haiku, a happy family and couple in ChatGPT and Gemini. |
| 2 | [Download the desktop apps](02-desktop-apps.md) | Claude and ChatGPT, the download way, signed in with SSO. The first of two doors. |
| 3 | [Install the tools on a Mac](03-setup-mac.md) or [on Windows](04-setup-windows.md) | The second door: a package manager, then Git, gh, ffmpeg, yt-dlp, Node, and VS Code, one typed line each. Pick the page for your machine. |
| 5 | [GitHub account and the course organization](05-github-account-and-org.md) | This repository is private. Post your username early in this step; the invitation needs one of us to send it. |
| 6 | [Sign in to GitHub and clone today's repo](06-github-sign-in-and-clone.md) | `gh` signs the terminal in, Git learns your name, one command copies the repo, VS Code opens it. |
| – | [The checklist](16-checklist.md) | Tick the accounts, apps, tools, and GitHub sections before moving on; the rest at the end of the day. |

**Part 2: use the tools** (steps 7 to 15, the rest of the session)

| Step | Page | What you do |
| --- | --- | --- |
| 7 | [A tour of the repo](07-tour-of-the-repo.md) | Read the files in VS Code. Learn what `.gitignore` does by watching it hide your `.env`. |
| 8 | [Add the folder to the apps](08-add-the-folder-to-the-apps.md) | Point Claude (Cowork and Code) and ChatGPT (Work and Codex) at the folder. Ask each the same question. |
| 9 | [Give the folder a voice: AGENTS.md and CLAUDE.md](09-claude-md-and-agents-md.md) | Write the two instruction files, add a rule that ends every reply with a rhyming couplet, restart Claude Code and Codex, and watch. |
| 10 | [Keys and the `.env` file](10-keys-and-the-env-file.md) | Put the class API key where the scripts find it and nobody else does. |
| 11 | [Generate with the API keys](11-generate-images-with-scripts.md) | A first generation with Claude through OpenRouter, then more text and images through OpenRouter and fal, by hand and then with Claude Code or Codex running the script for you. |
| 12 | [Transcribe a video, then build a player](12-transcribe-a-video-and-build-a-player.md) | yt-dlp or your phone, ffmpeg for the audio, the transcription script with timestamps, then an agent builds a page where clicking a line jumps the video there. |
| 13 | [Activity: one prompt, twenty models](13-activity-twenty-models.md) | Browse the fal and OpenRouter catalogues, list them from the API, then have Claude Code run one prompt across twenty models into a gallery in `output/`. |
| 14 | [Claude in Chrome](14-claude-in-chrome.md) | The browser extension: reading pages, then driving them. |
| 15 | [Computer use](15-computer-use.md) | The screen itself, in Claude and in ChatGPT, where your account allows. |

**At the end**

| | Page | What it is |
| --- | --- | --- |
| 16 | [Checklist](16-checklist.md) | Everything you should have by the time you leave. |
| 17 | [This week's activity](17-weekly-activity.md) | Thirty-plus minutes continuing one of today's activities, and the five-minute reflection. |

## Two ways to install an app

There are two ways to get a program onto your computer, and you'll do both today so you can compare them.

**The download.** You go to the maker's website, click Download, open what arrives, and drag it into Applications or run the installer. This is how you have installed everything so far in your life. You'll install the **Claude** and **ChatGPT** desktop apps this way, on page 02.

**The package manager.** You type one line in the terminal naming the program, and a tool called a package manager fetches it, installs it, and remembers that it did. On a Mac that tool is **Homebrew** (the command is `brew`); on Windows it is **winget**, which ships with Windows 11. You'll install the command-line tools this way on page 03 or 04, and see that both apps were available there too.

The point of doing both: the package manager keeps a list of what it installed, updates all of it with one command, and lets you set up a new machine by pasting a few lines. It is also the only way to install tools like Git and ffmpeg, which have no icon and no window. That is why programmers and, from this week, you use it. The download route still works, and for an app with an icon there is nothing wrong with it. After both, the Mac and Windows pages ask you to compare what you saw.

## What each tool is

Short definitions; the course glossary carries the longer ones.

- **Terminal** (Mac) / **PowerShell** (Windows): a text window where you type commands to your computer instead of clicking. Everything in this tutorial that isn't a website happens here.
- **Package manager** (Homebrew, winget): installs and updates programs from the terminal. See above.
- **Git**: version control. It records every change to a folder of files, so you can see history, go back, and share the folder with others without emailing zips. Runs on your machine.
- **GitHub**: the website where Git folders (repositories, "repos") live online so people can share them. An **organization** is a shared account that owns repos; ours is `tdm155ai`.
- **`gh`, the GitHub CLI**: lets you talk to GitHub from the terminal (clone, create repos, open pull requests) and, importantly today, signs Git in to your GitHub account so private repos work.
- **yt-dlp**: downloads video and audio from YouTube and hundreds of other sites, from the terminal. Source material for the term, fetched at the quality you choose.
- **ffmpeg**: the command-line tool underneath almost every video app. It converts, trims, resizes, pulls stills out of footage, and stitches images into video. You'll use it all term.
- **Node**: runs JavaScript outside a browser. The scripts in this repo's `utils/` folder are JavaScript, so Node is what runs them.
- **Visual Studio Code** (VS Code): the editor where you'll look at files, including the ones Claude writes.
- **Claude** (desktop app) and **ChatGPT** (desktop app): the same chat you use in the browser, as an app on your machine, with the extras that need a machine (Claude's Cowork and Claude Code live in the Claude app).
- **Claude Code** (optional today): Claude working in your terminal on a folder of files. It also lives inside the Claude desktop app, which is where we'll mostly use it.

## How to work through this

- Run commands **one at a time** and read what comes back before running the next one. The output is the lesson.
- When a command "is not recognized" or "not found" right after you installed it, the terminal window you have open predates the install. **Quit the terminal completely and open a fresh one.** This one fix accounts for most of the trouble people hit.
- Don't add `sudo` to anything here. None of these steps need it, and it makes later problems worse.
- When something else goes wrong, paste the whole error into Slack or show one of us. Don't guess.
