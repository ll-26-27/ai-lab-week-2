# Instructor notes for the week 2 setup tutorial

For Marlon and Madeleine. Students can read this too; nothing here is secret, it's just the other side of the desk.

## Inviting students to the organization

Students post `github: username` in Slack (channel to be decided; the tutorial says "the course Slack channel"). Invite by either route:

**Web.** https://github.com/orgs/tdm155ai/people → **Invite member** → paste the username → Member → Send invitation.

**CLI.** `gh` needs the `admin:org` scope, which the default login doesn't have. Once:

```bash
gh auth refresh -h github.com -s admin:org
```

Then, per student, look up the numeric user ID and send the invitation:

```bash
gh api /users/USERNAME --jq .id
```
```bash
gh api --method POST /orgs/tdm155ai/invitations -F invitee_id=ID -f role=direct_member
```

Or by email, which skips the lookup:

```bash
gh api --method POST /orgs/tdm155ai/invitations -f email=STUDENT@college.harvard.edu -f role=direct_member
```

Pending invitations: https://github.com/orgs/tdm155ai/people/pending_invitations, or `gh api /orgs/tdm155ai/invitations`.

## Make sure members can see the repo

Membership alone doesn't grant access to a private repo unless the org's **base permission** is at least Read. Check https://github.com/organizations/tdm155ai/settings/member_privileges → Base permissions. If it's "No permission," either set it to Read (every member reads every private repo in the org) or add students as collaborators on `tdm155ai-week-2` individually. Read is the simpler choice for a course org. The API field is `default_repository_permission` on `GET /orgs/tdm155ai`; it wasn't visible with the current token, so check it in the web UI before class.

Members as of 2026-09-16: `mkuzmick`, `process-black`, `ll-catacomb`. Repos: `tdm155ai-week-2` (private), `tdm155ai-bot-ensemble` (private), `week-1-image-experiment` (public).

## Open questions the tutorial defers

1. **Slack channel** for the username roll-call (tutorial step 5.3). Fill in the name and update the page.
2. **Claude Code on the Harvard SSO account.** Steps 3.5, 4.5, and 6.8 are marked optional and tell students to report a "plan doesn't include" message rather than fight it. If Harvard's plan includes Claude Code, drop the hedge.
3. **Whether to require the terminal Claude Code at all this week**, given the desktop app's Code tab is the intended first surface.
4. **Intel Macs and ARM Windows laptops.** The download steps say how to tell; the ffmpeg winget package is x64-only builds, which run under emulation on ARM Windows. Fine for now.

## The warm-up (added 2026-09-16, afternoon)

Page 01 runs before any install: the three accounts with the Harvard College email (SSO for ChatGPT and Claude), then the two "hello world" prompts framed as how AI goes wrong: Haiku's instant multiplication (facts), and "a happy family" / "a happy couple" in ChatGPT and Gemini (defaults). Page 02 downloads both desktop apps; the terminal pages now install tools only. Marlon plans to mirror pages 00 to 06 on HackMD. Two things to confirm on a Harvard SSO account beforehand: that the claude.ai model picker offers Haiku (the page says take the smallest model listed if not), and whether the code-execution tool is on, since 1.1 step 6 asks Claude to compute with code. Have students keep their downloaded images; page 13 compares them with the batch.

## Page 12 dropped, page 13 rewritten (2026-09-16, afternoon)

The separate multiplication activity page is gone: the chat version lives in page 01 (1.4) and the terminal version in 11.1, and doing it a third time was a step too many. The run sheet with the five-model sample output is parked in the workbook (`plan/weeks/02-20260914-ai-tools/parked-20260916/activities/multiplication.md`) with the rest of the retired activities and docs. Page 13 is now "one prompt, twenty models": browse the fal and OpenRouter image catalogues in the browser, list them from the API (`list-image-models.mjs`, and the new `list-fal-models.mjs`, no key for either), then ask Claude Code or Codex to run `batch-images.mjs` with `--provider fal` across the first twenty endpoints, one image each, into a gallery under `output/batches/`. The whole thing, gallery included, is gitignored, and the page makes students check `git status` to see that.

Verified 2026-09-16: the twenty-model fal run for "a happy couple" finished with no failures in about two minutes at `--parallel 4`. fal does not report cost in its responses, so budget from the model pages; the first twenty include some of the priciest endpoints on the site (GPT Image 2 and 2.5, Seedream 5 Pro, FLUX 1.1 Pro Ultra, Nano Banana Pro), and at one image each that is a few tens of cents per student per run, more if they re-run for the family prompt. Cut the list with `--limit 10` if the key is tight. The lister exists because fal has no equivalent of OpenRouter's public models page in the scripts; its `/v1/models` endpoint needs no key and pages a hundred at a time (221 text-to-image endpoints on 2026-09-16).

## Part 2 (added 2026-09-16, midday): gates to check before class

- **Computer use in Claude is Pro/Max only, not Team or Enterprise** (support.claude.com, read 2026-09-16). If the Harvard SSO accounts are Team/Enterprise, page 15 dead-ends for students; plan the demo on a studio machine whose color account is Pro or Max, and check that machine's Accessibility and Screen Recording permissions beforehand.
- **ChatGPT Work with local files**: Marlon confirmed 2026-09-16 that the Harvard accounts have it, with very low usage limits on the agentic modes (Work, Codex). Run the hands-on part on the Learning Lab computers; students' own accounts will hit a limit after a task or two. The permission model (Work Cloud, Work Local, Codex Local as separate switches) still applies.
- **Claude in Chrome** needs a paid plan and Chrome proper. Students on Safari or Arc need Chrome installed first (`brew install --cask google-chrome` / `winget install --id Google.Chrome -e`); not in the setup pages, add it if you want it done in class.
- **Claude chat does not generate images.** Page 01 uses that as a data point (see what it does instead). If a Claude image feature has shipped by class time, update the page.
- **Cowork's add-folder label.** The docs I could reach describe the capability but not the button; page 8.1 says "look for the folder or connect control." Check the current build and put the real label in.
- **API keys.** The tutorial assumes a class OpenRouter key handed out in the room and never committed. The page 13 batch is twenty models × one image × two prompts, 40 images per student, spread across cheap and expensive endpoints; see the page 13 note above. Set `--limit` accordingly. Prices are on each model's page at openrouter.ai/models; the listing endpoint the script reads does not include them.
- **The utils were tested** on 2026-09-16: 27 offline tests pass, every provider route and the transcription endpoint were hit for real (see `utils/examples.md`), and the twenty-model fal batch ran clean.

## Package names verified 2026-09-16

| Tool | Homebrew | winget |
| --- | --- | --- |
| Git | `git` | `Git.Git` |
| GitHub CLI | `gh` | `GitHub.cli` |
| ffmpeg | `ffmpeg` (9.0.1) | `Gyan.FFmpeg` |
| yt-dlp | `yt-dlp` (2026.8.19) | `yt-dlp.yt-dlp` |
| Node | `node` | `OpenJS.NodeJS.LTS` |
| VS Code | `--cask visual-studio-code` (1.138) | `Microsoft.VisualStudioCode` |
| Claude desktop | `--cask claude` (2.110) | `Anthropic.Claude` |
| ChatGPT desktop | `--cask chatgpt` (26.908) | `9PLM9XGG6VKS` with `-s msstore` (the older `9NT1R1C2HH7J` is ChatGPT Classic) |
| Claude Code | `--cask claude-code` (2.1.267) | `Anthropic.ClaudeCode`, or `irm https://claude.ai/install.ps1 \| iex` |

Homebrew names and versions were read from `brew info` on Marlon's machine; `brew deps` confirms yt-dlp pulls in its own Python automatically and ffmpeg pulls about ninety libraries (the slow install). winget IDs were checked against the official manifest repository (`microsoft/winget-pkgs`) on 2026-09-16: every id on the list exists. Installer types matter for what students see: Git, gh, Node, and VS Code are machine-wide MSI installers and raise a permission prompt; ffmpeg (`Gyan.FFmpeg`, x64 only, zip) and yt-dlp (single self-contained exe, ARM64 available) install into the user profile with no prompt. `Gyan.FFmpeg` has an open package issue about extraction and uninstall failures; the Windows page gives `BtbN.FFmpeg.GPL` as the fallback. Nobody has run the Windows page end to end on a fresh machine yet. Worth doing on a studio PC before class if there's time.

## Known snags, from the May and September workshops

- Stale terminal after install ("command not found"). The tutorial repeats the fix on every page.
- Mac `code` command needs the Command Palette step.
- Windows PowerShell execution policy blocks `npm`-style script shims; the fix is in the Windows troubleshooting section.
- Windows Store stub for `python` (not needed this week; noted anyway).
- Browser login loops for Claude: try another browser.
- Students who signed up for GitHub with a Harvard email and no 2FA get nagged at the worst moment; step 5.2 front-loads it.

## Lineage

Adapted from the Learning Lab's May 2026 Claude Code setup guides (`claude-code-mac-setup.md`, `claude-code-windows-setup.md`) and the September 14 workshop repo `ll-26-27/claude-workshop-exercise`. New here: the GitHub-org-first ordering, `gh` as the login path for private repos, ffmpeg, the two desktop apps, and the download-versus-package-manager comparison.
