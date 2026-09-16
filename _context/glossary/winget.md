---
term: "winget"
slug: winget
short: "The package manager built into Windows 11 (and recent Windows 10), run as `winget` from PowerShell."
aliases: []
category: tools-and-terminal
see_also: [package-manager, path, terminal]
updated: 2026-09-16
---

# winget

**winget is the [package manager](package-manager.md) built into Windows 11 and recent Windows 10, run from PowerShell.**

## In plain terms

Check whether it is available with `winget --version`; a version number means you are set. If PowerShell says "not recognized," open the Microsoft Store, search for App Installer, and install or update it, since winget ships as part of that package; if it is installed but still not recognized, its folder is not on your [PATH](path.md) yet, which a one-time environment variable command fixes, followed by opening a fresh PowerShell window.

Installing something looks like this: `winget install --id Git.Git -e --accept-source-agreements --accept-package-agreements`. The `-e` means exact match on that package ID, so you get precisely the right program rather than a similarly named lookalike, and the two `--accept` flags pre-answer license prompts you would otherwise have to click through by hand.

## Why it matters this term

It is the Windows half of the download-versus-package-manager comparison this course builds early, and it is how you install Git, the GitHub CLI, ffmpeg, Node, and VS Code on a Windows machine.

## See also

[Package manager](package-manager.md) · [PATH](path.md) · [Terminal / shell](terminal.md)
