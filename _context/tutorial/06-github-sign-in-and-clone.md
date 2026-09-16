# 06. Sign in to GitHub from the terminal, and clone today's repo

Installing was the package manager's job. This page signs the terminal in to your GitHub account, tells Git who you are, and copies this repository to your computer. With that done, every later page runs in a folder you own.

## The short version

Eight commands, one at a time, in Terminal or PowerShell. Each is explained in the sections below; if one fails, find its section.

```bash
gh auth login
```

(GitHub.com · HTTPS · Yes, authenticate Git · Login with a web browser · paste the code.)

```bash
gh auth status
```
```bash
cd ~
```
```bash
mkdir AI
```
```bash
cd AI
```
```bash
gh repo clone tdm155ai/tdm155ai-week-2
```
```bash
cd tdm155ai-week-2
```
```bash
code .
```

"Repository not found" means the organization invitation isn't accepted yet (step 5) or the first command didn't finish. Then come back for 6.2, which tells Git your name; you'll need it the first time you commit.

## 6.1 `gh`: sign the terminal in to GitHub

Back in Terminal or PowerShell:

```bash
gh auth login
```

It asks a short series of questions. Use the arrow keys and Enter:

1. **Where do you use GitHub?** → `GitHub.com`
2. **Preferred protocol for Git operations?** → `HTTPS`
3. **Authenticate Git with your GitHub credentials?** → `Yes`
4. **How would you like to authenticate?** → `Login with a web browser`
5. It shows an eight-character **one-time code**. Copy it, press Enter, and a browser opens. Paste the code, click **Authorize**, and approve with your 2FA if asked.

Back in the terminal it says "Logged in as *your-username*". Check:

```bash
gh auth status
```

Question 3 is the one that matters most today. Answering Yes means Git will use `gh`'s login whenever it talks to GitHub, so cloning this private repo and pushing to your own repos just works, with no passwords or tokens to manage.

## 6.2 Tell Git who you are

Every change you record with Git is stamped with a name and an email. Set them once:

```bash
git config --global user.name "Your Name"
```

For the email, use the **private no-reply address GitHub gives you**, not your real one. Find it at https://github.com/settings/emails under "Keep my email addresses private"; it looks like `12345678+your-username@users.noreply.github.com`. Then:

```bash
git config --global user.email "12345678+your-username@users.noreply.github.com"
```

Why: GitHub hides members' real emails by default and refuses pushes that would expose one (the error is called GH007). Using the no-reply address avoids ever meeting it. Check what you set:

```bash
git config --global --list
```

## 6.3 A place for projects: the `AI` folder

Make one folder, called `AI`, directly in your home folder, and put everything you clone or generate this term inside it. Two reasons.

The practical one: you'll always know where your work is on disk. Agents write files, scripts write files, batches write dozens of files; if they all land in one known place, nothing gets lost in Downloads or scattered across the Desktop.

The other reason is the point of the folder's name. Everything in `AI` is material that a model made, or that you're handing to a model. Keeping it in its own place, separate from your essays, your photos, your mail, means two things at once: the agents you point at it can't wander into the rest of your life by accident, and you can always tell, later, which of your files came out of a machine. Cowork, Code, Work, and Codex all ask you to choose a folder; the answer, this term, is always something inside `AI`.

Mac:

```bash
cd ~
```
```bash
mkdir AI
```
```bash
cd AI
```

Windows:

```powershell
cd ~
```
```powershell
mkdir AI
```
```powershell
cd AI
```

If `mkdir` says the folder already exists, good; just `cd` into it. (On a Mac, `~` and `$HOME` both mean your home folder, the one with Desktop and Documents in it; the terminal starts there.)

## 6.4 Clone

Same command on both:

```bash
gh repo clone tdm155ai/tdm155ai-week-2
```

`gh` knows who you are, so the private repo comes down without a password. It makes a subfolder called `tdm155ai-week-2`. If you get **repository not found**, either the organization invitation isn't accepted yet (step 5.5) or `gh auth status` isn't logged in (6.1).

For a public repo, plain Git works with no login at all; this is what `gh` is running underneath:

```bash
git clone https://github.com/tdm155ai/week-1-image-experiment.git
```

You don't need that one today, but try it if you want a second folder to poke at.

## 6.5 Look at what you got

```bash
cd tdm155ai-week-2
```
```bash
git log --oneline
```

That is the history: every recorded change, newest first, one line each. Right now it's short. By December yours will be long, and it will be the record of what you made and when.

```bash
git status
```

"Nothing to commit, working tree clean" means your copy matches GitHub exactly.

## 6.6 Open it in VS Code

```bash
code .
```

The dot means "this folder." VS Code opens with the repo's files in the left-hand Explorer. If it asks whether you **trust the authors** of the folder, say yes; you know them.

Click into `_context/tutorial/` and open this file. You're reading it from your own disk now.

If this is the first time VS Code has opened, let it finish its first-run setup; you don't need to sign it in to anything today.

## 6.7 Getting later changes

When we add files to this repo during the week, you don't clone again. From inside the folder:

```bash
git pull
```

That fetches whatever changed on GitHub and merges it into your copy.

You're set up. Tick the first five sections of the [checklist](16-checklist.md), then start Part 2 with [a tour of the repo](07-tour-of-the-repo.md).

## 6.8 Optional: Claude Code

Only if you installed it in the optional last step of the Mac or Windows page (3.5 or 4.5). From any folder:

```bash
claude
```

The first run walks you through login: choose the Claude account option, a browser opens, sign in with your Harvard email and SSO, approve. Back in the terminal, type `/exit` to leave.

If the sign-in ends with a message that your plan doesn't include Claude Code, that is the account question we're confirming this week, not something you did wrong. Tell us and carry on; the desktop app is the main surface anyway.
