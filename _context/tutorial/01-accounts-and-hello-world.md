# 01. Accounts, and two "hello world" prompts

Nothing gets installed on this page. It happens in the browser, and it does two things: confirms that the three accounts you'll use all term work, and shows you, with your own eyes, two ways a model goes wrong. Everything after this page is about building tools to catch exactly those two things.

**One email for everything.** Use your Harvard College email address for every account today: Gemini, ChatGPT, Claude, and later GitHub. It's the address the course's invitations go to, and for ChatGPT and Claude it's what unlocks Harvard's plan rather than a personal free one. Wherever a sign-in page offers a **single sign-on** (SSO) option, take it; HarvardKey opens, and you're in.

## Part A: the accounts

### 1.1 Gemini

1. Go to https://gemini.google.com.
2. Sign in with your **Harvard Google account** (your College email). If the browser is signed into a personal Google account, switch accounts from the avatar at the top right.
3. Send `hello`. If a reply comes back, you're set.

### 1.2 ChatGPT

1. Go to https://chatgpt.com and click **Log in**.
2. Enter your Harvard email. When the page offers **single sign-on**, choose it. HarvardKey opens; sign in the usual way.
3. Check the account menu (bottom left): it should show the Harvard workspace, not a personal free account. If it's the free one, log out and try again choosing SSO.

### 1.3 Claude

1. Go to https://claude.ai and click to log in.
2. Enter your Harvard email and choose **single sign-on** when it appears. HarvardKey again.
3. You should land in an account with a model picker near the prompt box. If it looks like a bare free account, log out and back in with SSO.

Tick the three accounts on the [checklist](16-checklist.md). If any of them fails, tell us now rather than later; the fix is on the account side, and the rest of the day needs all three.

## Part B: hello world, two ways

Every programming tutorial starts with "hello world," a first program whose only job is to prove the thing runs. Ours are two prompts whose job is to prove the thing runs *and* to show where it doesn't. The first goes wrong on facts. The second goes wrong on assumptions.

### 1.4 Multiplication (the model is confidently wrong)

Start in Claude.

1. Open a new chat. In the **model picker**, choose **Haiku**, the smallest and fastest model. If Haiku isn't offered, take the smallest one listed and note its name.
2. Paste this exactly and send it:

```
What is 82,345 × 67,890? Answer right away with just the number. Don't think about it or work it out.
```

3. Write the number down. The correct answer is **5,592,495,050**. Was it right? Right shape, wrong digits? Off by a lot?
4. In the same chat:

```
Now work it out carefully, step by step, in text. No code.
```

Did the answer change? Does the working look convincing? Is it right now?

5. One more:

```
Use code to calculate 82,345 × 67,890 and show the result.
```

If the account has the code tool on, Claude writes one line of Python, runs it, and the answer is exact. If it says it can't run code, note that.

6. Now the first prompt again, word for word, in a new chat in **ChatGPT** and in **Gemini**. Three models, three instant answers. Write all three down.

What you're looking at: a language model predicts what an answer looks like; it doesn't calculate. The wrong answers have the right number of digits and plausible endings, which is exactly what prediction produces. Give it a calculator (the code tool) and its job changes to writing the request, which it's good at. Step 11 repeats this from the terminal, where there is no tool unless you build one.

### 1.5 A happy family, a happy couple (the model has defaults)

Now in ChatGPT.

1. New chat. Send exactly this, three words, nothing else:

```
a happy family
```

2. An image appears. Download it (hover the image for the control) into a folder you'll find again; `week-2` on your Desktop is fine for now.
3. New chat:

```
a happy couple
```

4. Download that one too.
5. Same two prompts in **Gemini**, one per chat, downloaded. Four images.

Claude gets no image prompt because Claude has no image model. Ask it anyway if you're curious, and watch what it does instead: describe one, draw one in code, or ask what you meant. That's its own small lesson.

What you're looking at: three words leave everything unspecified, and the model filled every gap with its most probable guess. Put your four images next to your neighbor's before anyone says anything, and just count: how many people, roughly what ages, where they are, what the light is doing, whether anything in the picture is from the last ten years. Those guesses came from training data and from choices the company made afterward. One image is an anecdote; step 13 sends the same three words to twenty models so the pattern is visible.

## What the rest of the day is for

Two failure modes, one morning: confidently wrong facts, and confidently narrow defaults. The tools you install next exist to catch both. Code catches the first, because the model stops guessing and starts writing a request a computer can check. Batches catch the second, because twenty samples show a distribution where one shows a picture. By the end of the day you'll have run both from your own terminal.

Next: [download the Claude and ChatGPT desktop apps](02-desktop-apps.md).
