# 15. Computer use

The last step up the ladder. Claude in Chrome sees one browser; computer use sees the screen. The model takes screenshots, decides where to click, clicks, types, and looks again, in any app. Both Claude and ChatGPT have a version of this in their desktop apps. Try each, then compare.

Two things before you start. Close anything on screen you wouldn't want photographed: email, banking, a friend's messages. And expect this to be gated by account type on at least one of the two apps; if it is, watch the demo on a studio machine and note what you saw.

## 15.1 Claude

Computer use in Claude is available on Pro and Max plans and, as of today, **not on Team or Enterprise plans**. Harvard's account is one of the latter, so this may simply not appear for you. Check:

1. Open Claude → **Settings** → **General**, and look under **Desktop app** for **Enable computer use**. If it isn't there, that's the plan gate. Skip to 15.2.
2. Turn it on. On a Mac, two system permissions are needed and the settings page shows their status: **Accessibility** (so Claude can click and type) and **Screen Recording** (so it can see the screen). Click each badge to open System Settings and allow Claude.
3. Open **Cowork** or **Code** and give it a task that needs another app. The test clip from the setup page is handy:

```
Open the file test.mp4 on my Desktop in QuickTime Player and tell me how long it is.
```

On macOS 15 and later Claude works in a background window by default and keeps your pointer and keyboard free; it asks before taking over the screen. It also asks per app the first time it wants to use one. Some apps, like banking and crypto, are blocked outright.

## 15.2 ChatGPT

ChatGPT's **Work** mode in the desktop app can use local files and desktop apps. Confirmed 2026-09-16: the Harvard ChatGPT accounts do have it, but the usage limits on the agentic modes are very low, so one or two tasks may be all you get before it stops. We'll try it on the Learning Lab computers rather than burn everyone's allowance.

1. Open ChatGPT → top-left menu → **ChatGPT** → toggle **Work**.
2. Give it a task in another app:

```
Open the Notes app and create a note titled "TDM 155AI week 2" listing the tools I installed today.
```

3. It asks for the system permissions it needs (Screen Recording, Accessibility) the first time. Then watch.

If it stops with a limit message after a task or two, that's the allowance, not a mistake. Note what it did before it stopped.

## 15.3 Compare

Same shape as step 8. For each app, what did it ask you before acting, what did it show you while acting, and what did it do when it wasn't sure? Which one would you leave alone with your desktop for a minute? Why?

## The ladder, top to bottom

You've now used the same models through six doors, each with more reach than the last:

1. **Chat** in the browser: it sees what you paste.
2. **Desktop chat**: the same, plus screenshots and the folder features below.
3. **Cowork / Work**: it sees a folder you connect.
4. **Code / Codex**: it sees a folder, the terminal, and Git, and runs your scripts.
5. **Claude in Chrome**: it sees and drives a browser.
6. **Computer use**: it sees and drives the screen.

The further down, the more it can do and the more you must watch. Every week from here picks a rung on purpose.
