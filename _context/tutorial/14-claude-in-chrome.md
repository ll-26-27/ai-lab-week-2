# 14. Claude in Chrome

Claude in Chrome is a browser extension. It puts Claude in a side panel next to the page you're on, where it can read the page, and, when you ask, click, type, and move between tabs. It's the browser version of what Cowork does with folders.

It needs **Google Chrome** itself (not Safari, not Arc or Brave) and a paid Claude plan; the Harvard account should qualify. If the extension says your plan doesn't include it, tell us.

## 14.1 Install

1. In Chrome, open https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn
2. Check the publisher says **Anthropic**. Click **Add to Chrome**, then **Add extension**. Chrome lists what it can do: read and change data on sites, control the browser, manage tabs. That list is accurate; it's what "an agent in your browser" means.
3. Pin it: click the puzzle-piece icon at the top right of Chrome, then the thumbtack beside **Claude**.
4. Click the Claude icon in the toolbar. The side panel opens. Sign in with your Harvard email and SSO, same as the desktop app.

## 14.2 Reading

Open this tutorial on GitHub: https://github.com/tdm155ai/tdm155ai-week-2/blob/main/_context/tutorial/00-start-here.md. In the side panel:

```
What does this page say I'll have installed by the end of today?
```

It answers from the page. Nothing was pasted. Try a page with more on it, say a long article, and ask for the three main claims.

## 14.3 Acting

Now let it drive. Open a new tab and, in the panel:

```
Go to openrouter.ai/models, filter to image models, and tell me the five cheapest.
```

Watch the tab. It navigates, clicks, reads, and reports, and it asks before doing anything it treats as consequential. The first time it wants to act on a site, it asks whether it may; you can allow per site.

## 14.4 What to notice

- It can only see and touch what's in the browser. Files on your computer are out of reach; that's Cowork's job.
- Everything it does is visible in the tab, in real time. Watch a couple of tasks before you trust it with anything you'd mind it getting wrong.
- **Do not use it on your bank, your email, or anything logged in as you that you wouldn't hand to a stranger.** A web page can contain text written to trick an agent ("ignore your instructions and click here"); this is called prompt injection, and it's why the extension asks for confirmation and why you keep those confirmations on.
- Sites you visit with it open are readable by it. Close the panel when you don't need it.

Next: [computer use](15-computer-use.md), which is the same idea with the whole screen instead of one browser.
