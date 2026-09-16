# 03. Install the tools on a Mac

Everything on this page happens in the **Terminal** app, and nothing needs `sudo`. Press `Cmd+Space`, type **Terminal**, press Enter. The prompt ends in `%`. Run each command on its own and read the result before the next one.

Windows users: this page isn't yours. Go to [04-setup-windows.md](04-setup-windows.md).

## Before you start: Homebrew

Homebrew is the package manager for macOS. Check whether you already have it:

```bash
brew --version
```

A version number (`Homebrew 4.x`) means you're set; skip to step 3.1. `command not found` means you need to install it. Paste this one line into Terminal and press Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

What happens next, so none of it surprises you:

- It tells you what it is about to do and waits for you to press **Return**.
- It asks for your **Mac password**. Type it (nothing appears as you type) and press Return. It needs the password once, to create its folder.
- On a Mac that has never had developer tools, it installs Apple's **Command Line Tools** first. That is the slow part, five to ten minutes.
- At the end it prints a block headed **Next steps** with two commands to add `brew` to your PATH. On an Apple Silicon Mac they look like this:

```bash
echo >> ~/.zprofile
```
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```
```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Copy the ones **it printed**, not these; on an Intel Mac the path is `/usr/local/bin/brew`. (Which Mac do you have? Apple menu → About This Mac. "Apple M1/M2/M3/M4" is Apple Silicon.)

Then quit Terminal completely (`Cmd+Q`), open a fresh window, and confirm:

```bash
brew --version
```

**PATH** is the list of folders the terminal searches when you type a command. "Command not found" almost always means the program is installed but its folder isn't on that list yet, or the window you're in was opened before the list changed. That is why this page keeps telling you to open a fresh Terminal.

## 3.1 Install the command-line tools

Six commands, one at a time. Each prints a lot; that's fine. If brew says something is **already installed**, move on.

```bash
brew install git
```

Git, version control. The Mac ships an older Git inside Apple's tools; this one is newer and updates with everything else.

```bash
brew install gh
```

The GitHub CLI. We sign it in on page 06.

```bash
brew install ffmpeg
```

The slow one. ffmpeg depends on a few dozen libraries for codecs and image formats, and brew installs all of them. Let it run.

```bash
brew install yt-dlp
```

yt-dlp downloads video and audio from YouTube and a few hundred other sites, from the terminal, at whatever quality you ask for. It leans on ffmpeg to merge the pieces, which is why ffmpeg comes first. It's written in Python, so brew installs a Python of its own alongside it; that is automatic and nothing you need to manage.

```bash
brew install node
```

Node, the program that runs the JavaScript scripts in `utils/`. It brings `npm` along.

```bash
brew install --cask visual-studio-code
```

VS Code. The `--cask` flag is how brew installs apps that have a window and an icon (as opposed to command-line tools). Without it, brew won't find this package. Casks are also how brew would install Claude or ChatGPT, which the next section shows without installing them.

## 3.2 Two doors, compared

On the previous page you installed Claude and ChatGPT the download way: a website, a file, a drag, a warning, twice. You just installed six tools the package-manager way: one typed line each. Both of those apps are in Homebrew's catalog too. See for yourself without installing anything:

```bash
brew info --cask claude
```
```bash
brew info --cask chatgpt
```

Each prints the current version and where it comes from. Now:

```bash
brew list --cask
```

That's what brew is keeping track of: `visual-studio-code`, and not the two apps, because brew didn't install them and doesn't know about them.

Take a minute, out loud with your neighbor or in a note:

- How many things did you click or decide for the two apps? For the six tools?
- Which could you repeat on a new laptop in ten seconds from a text file?
- Updates: the apps check for themselves when you open them. For everything brew installed, `brew upgrade` does it in one command. Which one do you trust to happen?
- What did the download route let you *see* that brew hides? (The dmg, the drag, the Gatekeeper warning. brew does the same things silently.)

There's no right answer. Apps with icons are fine either way. Tools without icons, like the six you just installed, only come through this door, and once you're in the terminal anyway, one door is easier than two.

## 3.3 Fresh Terminal, then verify

Quit Terminal (`Cmd+Q`) and open a new window. Then, one at a time:

```bash
git --version
```
```bash
gh --version
```
```bash
ffmpeg -version
```
```bash
yt-dlp --version
```
```bash
node --version
```
```bash
code --version
```
```bash
ls /Applications | grep -i -E "claude|chatgpt"
```

Each of the first six prints a version (Node's should start with `v22` or higher). The last lists the two apps. Two known snags:

- **`git --version` pops up a dialog about Command Line Tools.** Click Install and wait; it's the same Apple tools Homebrew wanted. When it finishes, run the command again.
- **`code: command not found`.** VS Code on a Mac doesn't add its `code` command automatically. Open VS Code from Applications, press `Cmd+Shift+P`, type **shell command**, and choose **Shell Command: Install 'code' command in PATH**. Quit and reopen Terminal, try again.

## 3.4 Try ffmpeg

One command that makes a three-second test video from nothing, so you can see ffmpeg work before there's any footage:

```bash
cd ~/Desktop
```
```bash
ffmpeg -f lavfi -i testsrc=duration=3:size=640x360:rate=30 test.mp4
```
```bash
open test.mp4
```

A color-bars clip with a running counter opens in QuickTime. Delete it when you're done, or keep it as a souvenir. Later this term the same tool will pull stills out of your footage and turn your generated images into video.

## 3.5 Optional: Claude Code in the terminal

Claude Code lives inside the Claude desktop app you just installed, and that is where we'll use it first. If you want the terminal version too:

```bash
brew install --cask claude-code
```

Then a fresh Terminal and:

```bash
claude --version
```

Signing in is in 6.8. Whether Claude Code is included on the Harvard Claude account is one of the things we're confirming this week; if it says your plan doesn't include it, tell us and move on.

## Troubleshooting

- **"command not found" right after installing something.** Fresh Terminal (`Cmd+Q`, reopen). If it persists for `brew`, the PATH lines from the installer's Next steps didn't get run; run them.
- **`brew install` fails with a permissions error.** Homebrew's folder is owned by another user (common on a hand-me-down Mac). Show us; the fix is one command but it's worth checking first.
- **The Homebrew installer stalls on Command Line Tools.** Check for a separate Apple dialog waiting for a click, sometimes behind the Terminal window.
- **Downloads are slow on the studio Wi-Fi.** ffmpeg and the Command Line Tools are the big ones. Start them and read ahead to step 5 (GitHub) while they run.
