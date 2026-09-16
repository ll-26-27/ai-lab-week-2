# 04. Install the tools on Windows

Everything on this page happens in **PowerShell**, as your normal user, not as Administrator. Press the Windows key, type **PowerShell**, press Enter. The prompt starts with `PS`. Run each command on its own and read the result before the next one.

Mac users: this page isn't yours. Go to [03-setup-mac.md](03-setup-mac.md).

## Before you start: winget

winget is the package manager built into Windows 11 (and recent Windows 10). Check it:

```powershell
winget --version
```

A version number means you're set. If it's "not recognized":

1. Open the **Microsoft Store**, search for **App Installer**, and install or update it. winget is part of that package.
2. If it's installed but still not recognized, its folder isn't on your PATH. Run this once, then close PowerShell and open a fresh window:

```powershell
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$env:LOCALAPPDATA\Microsoft\WindowsApps", "User")
```

**PATH** is the list of folders Windows searches when you type a command. "Not recognized" almost always means the program is installed but its folder isn't on the list yet, or the window you're in was opened before the list changed. That is why this page keeps telling you to open a fresh PowerShell.

The first time you run winget it may ask you to accept the source agreement. Type `Y`.

## 4.1 Install the command-line tools

Six commands, one at a time. `-e` means "exact match on this ID," so you get the right package and not a lookalike. The two `--accept` flags just pre-answer the license prompts. If winget says something is **already installed**, move on.

```powershell
winget install --id Git.Git -e --accept-source-agreements --accept-package-agreements
```

Git, version control. The installer's defaults are right; in particular it puts Git on your PATH.

```powershell
winget install --id GitHub.cli -e --accept-source-agreements --accept-package-agreements
```

The GitHub CLI. We sign it in on page 06.

```powershell
winget install --id Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements
```

ffmpeg, from the builds maintained by Gyan Doshi, which is the standard Windows build.

```powershell
winget install --id yt-dlp.yt-dlp -e --accept-source-agreements --accept-package-agreements
```

yt-dlp downloads video and audio from YouTube and a few hundred other sites, from the terminal, at whatever quality you ask for. It leans on ffmpeg to merge the pieces, which is why ffmpeg comes first.

```powershell
winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements
```

Node, the program that runs the JavaScript scripts in `utils/`. It brings `npm` along.

```powershell
winget install --id Microsoft.VisualStudioCode -e --accept-source-agreements --accept-package-agreements
```

VS Code.

## 4.2 Two doors, compared

On the previous page you installed Claude and ChatGPT the download way: a website, a file, an installer wizard, a warning, twice. You just installed six tools the package-manager way: one typed line each. Both of those apps are in winget's reach too. See for yourself without installing anything:

```powershell
winget show --id Anthropic.Claude -e
```
```powershell
winget show --id 9PLM9XGG6VKS -s msstore
```

Each prints the current version and its source (`9PLM9XGG6VKS` is the Microsoft Store's ID for the ChatGPT app; an older ID you'll see in guides, `9NT1R1C2HH7J`, is "ChatGPT Classic"). Now:

```powershell
winget list --source winget
```

That's everything winget installed from its catalog. The two apps aren't in its records because you didn't install them that way.

Take a minute, out loud with your neighbor or in a note:

- How many things did you click or decide for the two apps? For the six tools?
- Which could you repeat on a new laptop from a text file?
- Updates: the apps check for themselves. For everything winget installed, `winget upgrade --all` does it in one go. Which one do you trust to happen?
- What did the download route let you *see* that winget hides? (The wizard, the SmartScreen warning. winget does the same things silently.)

There's no right answer. Apps with icons are fine either way. Tools without icons, like the six you just installed, only come through this door, and once you're in the terminal anyway, one door is easier than two.

## 4.3 Fresh PowerShell, then verify

Close PowerShell completely and open a new window. Then, one at a time:

```powershell
git --version
```
```powershell
gh --version
```
```powershell
ffmpeg -version
```
```powershell
yt-dlp --version
```
```powershell
node --version
```
```powershell
code --version
```

Each prints a version (Node's should start with `v22` or higher). Then check the two apps are in the Start menu: **Claude** and **ChatGPT**. Two known snags:

- **`ffmpeg` is not recognized** in a window you're sure is fresh. Sign out of Windows and back in; the ffmpeg package sometimes needs that for its PATH entry to take. If it still fails, tell us.
- **`code` is not recognized.** Usually the same stale-window problem; one more fresh PowerShell. If not, open VS Code from the Start menu, press `Ctrl+Shift+P`, type **shell command**, choose **Shell Command: Install 'code' command in PATH**, then a fresh PowerShell.

## 4.4 Try ffmpeg

One command that makes a three-second test video from nothing, so you can see ffmpeg work before there's any footage:

```powershell
cd ~\Desktop
```
```powershell
ffmpeg -f lavfi -i testsrc=duration=3:size=640x360:rate=30 test.mp4
```
```powershell
start test.mp4
```

A color-bars clip with a running counter opens in your video player. Delete it when you're done, or keep it as a souvenir. Later this term the same tool will pull stills out of your footage and turn your generated images into video.

## 4.5 Optional: Claude Code in the terminal

Claude Code lives inside the Claude desktop app you just installed, and that is where we'll use it first. If you want the terminal version too, use Anthropic's installer, which keeps itself updated:

```powershell
irm https://claude.ai/install.ps1 | iex
```

(`winget install --id Anthropic.ClaudeCode -e` also works; then updates are on you, via `winget upgrade`.) Fresh PowerShell, then:

```powershell
claude --version
```

If that says not recognized, the installer's folder didn't make it onto PATH. Run this once, then a fresh PowerShell:

```powershell
$new = "$env:USERPROFILE\.local\bin"
$current = [Environment]::GetEnvironmentVariable("Path", "User")
[Environment]::SetEnvironmentVariable("Path", "$current;$new", "User")
```

Signing in is in 6.8. Whether Claude Code is included on the Harvard Claude account is one of the things we're confirming this week; if it says your plan doesn't include it, tell us and move on.

## Troubleshooting

- **"not recognized" right after installing something.** Fresh PowerShell. For ffmpeg, sign out and in.
- **Windows asks "Do you want to allow this app to make changes?"** during the Git, gh, Node, or VS Code installs. Those are machine-wide installers; click Yes. (ffmpeg and yt-dlp install into your own profile and don't ask.)
- **ffmpeg fails with an extraction error.** The `Gyan.FFmpeg` package is a zip that winget unpacks, and unpacking has failed for some people. Use the other maintained build instead:

  ```powershell
  winget install --id BtbN.FFmpeg.GPL -e --accept-source-agreements --accept-package-agreements
  ```

  Then a fresh PowerShell and `ffmpeg -version` again. Both builds are x64; on an ARM laptop they run under emulation, which is fine.
- **"running scripts is disabled on this system."** PowerShell's default policy blocks scripts, and some tools are scripts. Run this once, type `Y`, and reopen PowerShell:

  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

- **`npm` says "running scripts is disabled"** even though `node` works: the execution-policy fix two bullets up.
- **A `python` command opens the Microsoft Store.** Not needed today, but if you hit it: Settings → Apps → Advanced app settings → App execution aliases, turn off the `python.exe` and `python3.exe` toggles.
- **Downloads are slow on the studio Wi-Fi.** Git and ffmpeg are the big ones. Start them and read ahead to step 5 (GitHub) while they run.
