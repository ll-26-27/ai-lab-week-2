# 08. Add the folder to the Claude and ChatGPT apps

Both desktop apps can be pointed at a folder on your computer. Once they are, the model reads the files there and, with your permission, writes and runs things. Each app has two ways to do it: a "work" surface for documents and tasks, and a "code" surface for scripts and repos. You'll add `AI/tdm155ai-week-2` to all four, ask the same question in each, and compare.

The question to ask each time, word for word:

```
List the files in this folder and tell me in three sentences what this project is.
```

## 8.1 Claude: Cowork

1. Open Claude and click **Cowork** in the left sidebar.
2. Start a new task. Where it asks what Claude should work with, choose to add a folder on your computer and pick `AI/tdm155ai-week-2`. (The exact label has moved between versions; look for a folder or "connect" control near the prompt box, or the paperclip.)
3. macOS may ask whether Claude can access the folder. Yes.
4. Ask the question.

Cowork runs in a contained space: it sees only the folders you connect, and it shows you a plan and the files it touches as it goes.

## 8.2 Claude: Code

1. Click **Code** in the sidebar.
2. In the prompt area, set **Environment** to **Local**, then **Project folder** → **Select folder** → `AI/tdm155ai-week-2`.
3. Leave the permission mode at its default (it asks before running commands).
4. Ask the question.

Code is Claude Code with a window around it: full access to the folder, the terminal, and Git, which is why it asks before it acts. Each session remembers its own folder; you'll see sessions listed in the sidebar and can filter them by project.

## 8.3 ChatGPT: Work

1. Open ChatGPT. In the **top-left menu**, choose **ChatGPT** (as opposed to Codex).
2. At the top of the page there's a toggle between **Chat** and **Work**. Choose **Work**.
3. Open a local folder: either start a Work chat and add the folder from the prompt area, or make it a project: **Projects** → open or create one → its menu → **Edit project** → **Add folder** → `AI/tdm155ai-week-2`.
4. Ask the question.

Work is ChatGPT's agent for longer tasks and deliverables. The Harvard accounts have it, with low usage limits on the agentic modes, so if it stops after a task or two with a limit message, that's the allowance. If Work isn't in the toggle at all, note that and tell us; it's an account setting, not something you missed.

## 8.4 ChatGPT: Codex

1. In the **top-left menu**, choose **Codex**.
2. Open the folder `AI/tdm155ai-week-2` from the folder control in the new-chat view.
3. macOS may ask Codex for permission to reach folders in your home directory. Yes.
4. Ask the question.

Codex is the coding surface: local folders, terminals, and Git, with its own separate history.

## 8.5 Compare

You asked one question four times. Write down, in a note or out loud:

- Which ones listed the files by name, and which summarized?
- Which ones asked permission for something, and for what?
- Which one showed you *how* it looked (the commands it ran)?
- Which felt like talking and which felt like watching?

Keep the four open. The next page gives the folder a voice that Code and Codex will hear, and the pages after that use them to run the scripts in `utils/`.

## Why the folder is where it is

`AI` sits directly in your home folder on purpose, and everything you point an agent at this term lives inside it. macOS treats Desktop, Documents, and Downloads as protected and asks for extra approval whenever an app reaches into them; a folder at the top of your home directory avoids that dialog. It also keeps the agents inside a fence: whatever they read or write, it's in `AI`, not in the rest of your files.
