---
title: "Glossary"
description: "Plain-language definitions of the tools and ideas from week 2, tools of the AI trade."
updated: 2026-09-16
---

# Glossary

Plain-language definitions for TDM 155AI, built from week 2's setup tutorial: the package manager, Git and GitHub, the `.env` file and API keys, the scripts in `utils/`, and the Claude and ChatGPT desktop apps, plus the ideas behind how a model reads, remembers, and acts. Each entry is one short file: a one-line definition, an in-plain-terms explanation with an analogy, why it matters this term, and links to related entries. Start anywhere, the see-also links carry you to what's next.

## By category

### Basics, who and what

| Term | Gist |
| --- | --- |
| [Anthropic](anthropic.md) | The company that builds Claude and the API this course's scripts call. |
| [Claude](claude.md) | The AI assistant made by Anthropic, reached through chat, the desktop app, the API, and Claude Code. |

### Models and how they behave

| Term | Gist |
| --- | --- |
| [Hallucination](hallucination.md) | A fluent, confident answer that is wrong, because the model predicted what an answer looks like, not what is true. |
| [Large language model](llm.md) | The kind of system Claude and ChatGPT are: a program that predicts the next chunk of text from patterns in training data. |
| [Model](model.md) | The specific version of an AI doing the thinking; companies ship a few, trading depth for speed. |
| [Byte pair encoding](byte-pair-encoding.md) | The algorithm most tokenizers use to build their vocabulary: start from single characters and repeatedly merge the most frequent neighboring pair. |
| [Token](token.md) | A small chunk of text, between a letter and a word, that a model reads and writes in. |
| [Tokenization](tokenization.md) | The step that splits your text into tokens before a model sees it, and turns the model's output tokens back into text. |

### Context

| Term | Gist |
| --- | --- |
| [Compact](compact.md) | A command that summarizes a long conversation and continues in a fresh thread, so a filling context window doesn't degrade the work. |
| [Context](context.md) | Everything a model can see right now: your messages, its replies, and any files in front of it. |
| [Context engineering](context-engineering.md) | The deliberate practice of choosing what a model can see, and what it can't, so it does its best work. |
| [Context pack](context-pack.md) | A reusable folder of scripts, docs, or reference material, packaged once and copied into other projects. |
| [Context rot](context-rot.md) | The way a model's answers get worse as its context window fills with stale or contradictory material. |
| [Context window](context-window.md) | The fixed amount of text a model can hold in view at once, measured in tokens. |
| [Memory](memory.md) | Notes a model saves between sessions and re-reads at the start of the next one. |

### Prompting

| Term | Gist |
| --- | --- |
| [Prompt](prompt.md) | The text you send a model; its reply is the most likely continuation of everything in context, including this. |
| [Prompt chaining](prompt-chaining.md) | Breaking one big request into a sequence of smaller prompts, where each step's output feeds the next. |
| [System prompt](system-prompt.md) | Background instructions a model has before you type anything, set by the app rather than by you. |

### Files and formats

| Term | Gist |
| --- | --- |
| [.env file](env-file.md) | A local, git-ignored file holding secret keys as NAME=value lines, read by scripts instead of typed into code. |
| [Artifact](artifact.md) | A finished thing a model produces alongside the conversation, a document, chart, or small web page, shown in its own panel. |
| [CSV](csv.md) | A plain-text table format, one row per line, values separated by commas, for anything you'd otherwise put in a spreadsheet. |
| [Frontmatter](frontmatter.md) | A block of key-value fields at the top of a Markdown file, fenced by `---` lines, holding metadata rather than prose. |
| [HTML](html.md) | The language web pages are written in, one step up from Markdown when a document needs real layout and interaction. |
| [JSON](json.md) | A plain-text format for structured data, the shape of every request and response the scripts save. |
| [Markdown](markdown.md) | Plain text where a few symbols become headings, lists, and bold when rendered, and stay readable when not. |

### Tools and the terminal

| Term | Gist |
| --- | --- |
| [ffmpeg](ffmpeg.md) | A command-line tool for converting, trimming, and inspecting audio and video files, installed through the package manager. |
| [yt-dlp](yt-dlp.md) | A command-line downloader that fetches video and audio from YouTube and hundreds of other sites at the quality you choose. |
| [Homebrew](homebrew.md) | The package manager for macOS, installed once from a single terminal command, run as `brew`. |
| [Node](node.md) | The program that runs the JavaScript scripts in this course's `utils/` folder, installed through the package manager. |
| [Package manager](package-manager.md) | A terminal tool that installs and updates programs by name, remembering what it put on your machine. |
| [PATH](path.md) | The list of folders your terminal searches when you type a command's name. |
| [Script](script.md) | A short program you run by name from the terminal, doing one job, rather than a full application with windows. |
| [Terminal / shell](terminal.md) | A text window where you type commands to your computer instead of clicking: Terminal on a Mac, PowerShell on Windows. |
| [winget](winget.md) | The package manager built into Windows 11 (and recent Windows 10), run as `winget` from PowerShell. |

### Git and GitHub

| Term | Gist |
| --- | --- |
| [.gitignore](gitignore.md) | A file listing patterns Git should never track, keeping secrets, huge folders, and junk out of a repository. |
| [Clone](clone.md) | Copying a repository from GitHub to your computer, files and full history together, not just a snapshot. |
| [Commit](commit.md) | A saved snapshot of a repository at one point in time, with a message describing what changed and why. |
| [gh (GitHub CLI)](gh-cli.md) | GitHub's own command-line tool: sign in, clone private repos, and manage GitHub without leaving the terminal. |
| [Git](git.md) | Version control: a tool that records every change to a folder of files, so you can see history, go back, and share it. |
| [GitHub](github.md) | The website where Git repositories live online, so people and organizations can share and collaborate on them. |
| [Push / pull](push-pull.md) | Sending your commits to GitHub (push) and fetching new ones from it (pull), keeping your copy and the shared one in sync. |
| [Repository](repository.md) | A folder tracked by Git, holding the files plus their entire recorded history of changes. |

### APIs and keys

| Term | Gist |
| --- | --- |
| [API](api.md) | A way for a program, not a person in a chat window, to send a request to a model and get a result back as data. |
| [API key](api-key.md) | A long secret string sent with every API request, saying which account to bill and letting that account be revoked if leaked. |
| [Environment variable](environment-variable.md) | A named value a program can read from its surroundings, instead of having it typed directly into the code. |
| [fal](fal.md) | Another model aggregator, alongside OpenRouter, offering a different roster of image and video models through one key. |
| [fal image APIs](fal-image-apis.md) | fal's image endpoints, one URL per model, where the reference-image field and its limit differ endpoint by endpoint and the OpenAPI schema is how you find out. |
| [fal video APIs](fal-video-apis.md) | fal's video endpoints: text-to-video, image-to-video from a first frame, first-and-last-frame, keyframes, and reference-to-video, each with its own field names. |
| [HUIT API portal](huit-api-portal.md) | Harvard's own gateway to models like OpenAI's and Google's, reached with an HUIT-issued key instead of a personal account. |
| [OpenRouter](openrouter.md) | An aggregator that puts many companies' text and image models behind one API key. |
| [OpenRouter image APIs](openrouter-image-apis.md) | OpenRouter's dedicated Image API (and its Video API): one request shape for fifty-plus models, reference images in, and a discovery endpoint that says how many each model takes. |

### Agents and harnesses

| Term | Gist |
| --- | --- |
| [Agent](agent.md) | A model taking a step, checking the result, and deciding the next one, looping until a goal is done rather than answering once. |
| [Agentic system](agentic-systems.md) | The whole arrangement around one or more agents: what tools they have, how they're organized, how they hand off work. |
| [AGENTS.md](agents-md.md) | The cross-tool version of CLAUDE.md: a Markdown file at a repo's root that Codex and other coding agents read for project instructions. |
| [CLAUDE.md](claude-md.md) | A Markdown file in a project folder that Claude Code reads before doing anything, so it starts already knowing the basics. |
| [Harness](harness.md) | The program wrapped around a model that runs the loop, holds its tools, and enforces its permission rules. |
| [MCP](mcp.md) | Model Context Protocol: a standard way to describe tools to a model so any compatible harness can offer them. |
| [Permission mode](permission-mode.md) | The setting that decides how much an agent may do without asking you first. |
| [Plan mode](plan-mode.md) | A permission mode where an agent only reads and proposes a step-by-step plan, then waits, instead of touching anything. |
| [SKILL.md](skill-md.md) | A reusable instruction file for one specific task, kept in a named folder so a model can load it only when that task comes up. |
| [Subagent](subagent.md) | A separate agent with its own fresh context, handed a focused job so the main conversation stays clean. |
| [Tool call](tool-call.md) | When a model stops talking and does something instead: runs code, reads a file, searches the web. |
| [Vibe coding](vibe-coding.md) | Building software by describing what you want to an AI agent and checking results, without reading every line it writes. |

### Apps and surfaces

| Term | Gist |
| --- | --- |
| [ChatGPT Work](chatgpt-work.md) | ChatGPT's agent mode for longer tasks with a finished deliverable, which can read local folders when your plan allows. |
| [Claude Code](claude-code.md) | The version of Claude that reads, edits, and runs files and commands in a folder on your computer, in the terminal or a window. |
| [Claude Cowork](claude-cowork.md) | The desktop-app mode where Claude reads and changes files in a folder you connect, shown as tasks rather than chats. |
| [Claude in Chrome](claude-in-chrome.md) | A Chrome extension that puts Claude beside the page you're on, able to read it and, on request, click, type, and act. |
| [Codex](codex.md) | OpenAI's coding agent in the ChatGPT desktop app: local folders, a terminal, Git, and AGENTS.md, Claude Code's counterpart. |
| [Computer use](computer-use.md) | An agent driving the whole screen, taking screenshots, clicking, and typing in any app, not just a browser or a folder. |
| [Project](project.md) | A saved workspace that bundles related chats and, in Cowork, a connected folder, keeping context separated by task. |

### Generating media

| Term | Gist |
| --- | --- |
| [Aspect ratio](aspect-ratio.md) | The width-to-height shape of a generated image, a setting most chat apps hide but the API exposes directly. |
| [Batch](batch.md) | Running the same prompt many times, across models or repetitions, to see a pattern instead of one anecdote. |
| [Diffusion model](diffusion-model.md) | The technique behind most image models today: starting from noise and gradually refining it toward a picture matching the prompt. |
| [Image model](image-model.md) | A model that turns a text prompt into a picture, a separate roster from text models like Claude or GPT. |
| [Sampling](sampling.md) | A model's output is one draw from a distribution of likely outputs; run it many times and you start to see the shape of that distribution. |
| [Seed](seed.md) | A number that fixes a model's randomness, so the same prompt and seed reproduce nearly the same result. |
| [Temperature](temperature.md) | A setting that controls how much randomness a text model uses when choosing its next word. |

### Safety

| Term | Gist |
| --- | --- |
| [Data sensitivity](data-sensitivity.md) | How sensitive the material you paste, upload, or point a folder at is, and which tools are safe for it. |
| [Prompt injection](prompt-injection.md) | Text hidden in a page or file, written to trick an agent into following it instead of your actual instructions. |

## A to Z

- **[.env file](env-file.md)**: A local, git-ignored file holding secret keys as NAME=value lines, read by scripts instead of typed into code.
- **[.gitignore](gitignore.md)**: A file listing patterns Git should never track, keeping secrets, huge folders, and junk out of a repository.
- **[Agent](agent.md)**: A model taking a step, checking the result, and deciding the next one, looping until a goal is done rather than answering once.
- **[Agentic system](agentic-systems.md)**: The whole arrangement around one or more agents: what tools they have, how they're organized, how they hand off work.
- **[AGENTS.md](agents-md.md)**: The cross-tool version of CLAUDE.md: a Markdown file at a repo's root that Codex and other coding agents read for project instructions.
- **[Anthropic](anthropic.md)**: The company that builds Claude and the API this course's scripts call.
- **[API](api.md)**: A way for a program, not a person in a chat window, to send a request to a model and get a result back as data.
- **[API key](api-key.md)**: A long secret string sent with every API request, saying which account to bill and letting that account be revoked if leaked.
- **[Artifact](artifact.md)**: A finished thing a model produces alongside the conversation, a document, chart, or small web page, shown in its own panel.
- **[Aspect ratio](aspect-ratio.md)**: The width-to-height shape of a generated image, a setting most chat apps hide but the API exposes directly.
- **[Batch](batch.md)**: Running the same prompt many times, across models or repetitions, to see a pattern instead of one anecdote.
- **[Byte pair encoding](byte-pair-encoding.md)**: The algorithm most tokenizers use to build their vocabulary: start from single characters and repeatedly merge the most frequent neighboring pair.
- **[ChatGPT Work](chatgpt-work.md)**: ChatGPT's agent mode for longer tasks with a finished deliverable, which can read local folders when your plan allows.
- **[Claude](claude.md)**: The AI assistant made by Anthropic, reached through chat, the desktop app, the API, and Claude Code.
- **[Claude Code](claude-code.md)**: The version of Claude that reads, edits, and runs files and commands in a folder on your computer, in the terminal or a window.
- **[Claude Cowork](claude-cowork.md)**: The desktop-app mode where Claude reads and changes files in a folder you connect, shown as tasks rather than chats.
- **[Claude in Chrome](claude-in-chrome.md)**: A Chrome extension that puts Claude beside the page you're on, able to read it and, on request, click, type, and act.
- **[CLAUDE.md](claude-md.md)**: A Markdown file in a project folder that Claude Code reads before doing anything, so it starts already knowing the basics.
- **[Clone](clone.md)**: Copying a repository from GitHub to your computer, files and full history together, not just a snapshot.
- **[Codex](codex.md)**: OpenAI's coding agent in the ChatGPT desktop app: local folders, a terminal, Git, and AGENTS.md, Claude Code's counterpart.
- **[Commit](commit.md)**: A saved snapshot of a repository at one point in time, with a message describing what changed and why.
- **[Compact](compact.md)**: A command that summarizes a long conversation and continues in a fresh thread, so a filling context window doesn't degrade the work.
- **[Computer use](computer-use.md)**: An agent driving the whole screen, taking screenshots, clicking, and typing in any app, not just a browser or a folder.
- **[Context](context.md)**: Everything a model can see right now: your messages, its replies, and any files in front of it.
- **[Context engineering](context-engineering.md)**: The deliberate practice of choosing what a model can see, and what it can't, so it does its best work.
- **[Context pack](context-pack.md)**: A reusable folder of scripts, docs, or reference material, packaged once and copied into other projects.
- **[Context rot](context-rot.md)**: The way a model's answers get worse as its context window fills with stale or contradictory material.
- **[Context window](context-window.md)**: The fixed amount of text a model can hold in view at once, measured in tokens.
- **[CSV](csv.md)**: A plain-text table format, one row per line, values separated by commas, for anything you'd otherwise put in a spreadsheet.
- **[Data sensitivity](data-sensitivity.md)**: How sensitive the material you paste, upload, or point a folder at is, and which tools are safe for it.
- **[Diffusion model](diffusion-model.md)**: The technique behind most image models today: starting from noise and gradually refining it toward a picture matching the prompt.
- **[Environment variable](environment-variable.md)**: A named value a program can read from its surroundings, instead of having it typed directly into the code.
- **[fal](fal.md)**: Another model aggregator, alongside OpenRouter, offering a different roster of image and video models through one key.
- **[fal image APIs](fal-image-apis.md)**: fal's image endpoints, one URL per model, where the reference-image field and its limit differ endpoint by endpoint.
- **[fal video APIs](fal-video-apis.md)**: fal's video endpoints: text-to-video, first frame, first-and-last-frame, keyframes, and reference-to-video, each with its own field names.
- **[ffmpeg](ffmpeg.md)**: A command-line tool for converting, trimming, and inspecting audio and video files, installed through the package manager.
- **[Frontmatter](frontmatter.md)**: A block of key-value fields at the top of a Markdown file, fenced by `---` lines, holding metadata rather than prose.
- **[gh (GitHub CLI)](gh-cli.md)**: GitHub's own command-line tool: sign in, clone private repos, and manage GitHub without leaving the terminal.
- **[Git](git.md)**: Version control: a tool that records every change to a folder of files, so you can see history, go back, and share it.
- **[GitHub](github.md)**: The website where Git repositories live online, so people and organizations can share and collaborate on them.
- **[Hallucination](hallucination.md)**: A fluent, confident answer that is wrong, because the model predicted what an answer looks like, not what is true.
- **[Harness](harness.md)**: The program wrapped around a model that runs the loop, holds its tools, and enforces its permission rules.
- **[Homebrew](homebrew.md)**: The package manager for macOS, installed once from a single terminal command, run as `brew`.
- **[HTML](html.md)**: The language web pages are written in, one step up from Markdown when a document needs real layout and interaction.
- **[HUIT API portal](huit-api-portal.md)**: Harvard's own gateway to models like OpenAI's and Google's, reached with an HUIT-issued key instead of a personal account.
- **[Image model](image-model.md)**: A model that turns a text prompt into a picture, a separate roster from text models like Claude or GPT.
- **[JSON](json.md)**: A plain-text format for structured data, the shape of every request and response the scripts save.
- **[Large language model](llm.md)**: The kind of system Claude and ChatGPT are: a program that predicts the next chunk of text from patterns in training data.
- **[Markdown](markdown.md)**: Plain text where a few symbols become headings, lists, and bold when rendered, and stay readable when not.
- **[MCP](mcp.md)**: Model Context Protocol: a standard way to describe tools to a model so any compatible harness can offer them.
- **[Memory](memory.md)**: Notes a model saves between sessions and re-reads at the start of the next one.
- **[Model](model.md)**: The specific version of an AI doing the thinking; companies ship a few, trading depth for speed.
- **[Node](node.md)**: The program that runs the JavaScript scripts in this course's `utils/` folder, installed through the package manager.
- **[OpenRouter](openrouter.md)**: An aggregator that puts many companies' text and image models behind one API key.
- **[OpenRouter image APIs](openrouter-image-apis.md)**: OpenRouter's Image and Video APIs: one request shape, reference images in, and a discovery endpoint that states each model's limits.
- **[Package manager](package-manager.md)**: A terminal tool that installs and updates programs by name, remembering what it put on your machine.
- **[PATH](path.md)**: The list of folders your terminal searches when you type a command's name.
- **[Permission mode](permission-mode.md)**: The setting that decides how much an agent may do without asking you first.
- **[Plan mode](plan-mode.md)**: A permission mode where an agent only reads and proposes a step-by-step plan, then waits, instead of touching anything.
- **[Project](project.md)**: A saved workspace that bundles related chats and, in Cowork, a connected folder, keeping context separated by task.
- **[Prompt](prompt.md)**: The text you send a model; its reply is the most likely continuation of everything in context, including this.
- **[Prompt chaining](prompt-chaining.md)**: Breaking one big request into a sequence of smaller prompts, where each step's output feeds the next.
- **[Prompt injection](prompt-injection.md)**: Text hidden in a page or file, written to trick an agent into following it instead of your actual instructions.
- **[Push / pull](push-pull.md)**: Sending your commits to GitHub (push) and fetching new ones from it (pull), keeping your copy and the shared one in sync.
- **[Repository](repository.md)**: A folder tracked by Git, holding the files plus their entire recorded history of changes.
- **[Sampling](sampling.md)**: A model's output is one draw from a distribution of likely outputs; run it many times and you start to see the shape of that distribution.
- **[Script](script.md)**: A short program you run by name from the terminal, doing one job, rather than a full application with windows.
- **[Seed](seed.md)**: A number that fixes a model's randomness, so the same prompt and seed reproduce nearly the same result.
- **[SKILL.md](skill-md.md)**: A reusable instruction file for one specific task, kept in a named folder so a model can load it only when that task comes up.
- **[Subagent](subagent.md)**: A separate agent with its own fresh context, handed a focused job so the main conversation stays clean.
- **[System prompt](system-prompt.md)**: Background instructions a model has before you type anything, set by the app rather than by you.
- **[Temperature](temperature.md)**: A setting that controls how much randomness a text model uses when choosing its next word.
- **[Terminal / shell](terminal.md)**: A text window where you type commands to your computer instead of clicking: Terminal on a Mac, PowerShell on Windows.
- **[Token](token.md)**: A small chunk of text, between a letter and a word, that a model reads and writes in.
- **[Tokenization](tokenization.md)**: The step that splits your text into tokens before a model sees it, and turns the model's output tokens back into text.
- **[Tool call](tool-call.md)**: When a model stops talking and does something instead: runs code, reads a file, searches the web.
- **[Vibe coding](vibe-coding.md)**: Building software by describing what you want to an AI agent and checking results, without reading every line it writes.
- **[winget](winget.md)**: The package manager built into Windows 11 (and recent Windows 10), run as `winget` from PowerShell.
