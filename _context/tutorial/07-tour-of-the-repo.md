# 07. A tour of the repo, in VS Code

You cloned the folder in step 6. Before handing it to any AI, look at it yourself. Open it in VS Code (`code .` from inside the folder, or File → Open Folder) and click through the Explorer on the left. Everything here is a plain text file; there is nothing you can't read.

## What's in the folder

```text
tdm155ai-week-2/
  README.md              what this repo is; points here
  _context/
    tutorial/            these pages
    glossary/            one short file per term
    example/             small experiments
  utils/                 scripts that talk to models from the terminal
    generate-image.mjs       one image from one model
    generate-text.mjs        one text reply from one model
    batch-images.mjs         one prompt, several models, several runs, plus a gallery page
    batch-text.mjs           the same for text, with a results table
    transcribe.mjs           speech to text
    stills.mjs               frames from a video, plus a contact sheet
    list-image-models.mjs    which image models OpenRouter offers right now
    list-text-models.mjs     which text models
    list-fal-models.mjs      fal's catalogue
    examples.md              commands verified to work, with dates
    lib/                     the shared code the scripts use
    test/                    checks that the scripts behave (no network needed)
  .agents/skills/        a skill (a recipe an agent can follow); .claude/skills/ points at it
  .env.example           the shape of the secrets file, with the values blank
  .gitignore             what Git is told to ignore
  package.json           a name for the project and shortcuts for the scripts
  nextjs/                the small website that renders _context/; leave it alone today
```

Two more folders matter and are ignored by Git: `_media/`, empty for now, where any video, audio, or images you bring in go, and `output/`, which appears the first time you run a script and holds everything generated, one folder per run.

## Read `.gitignore`

Click `.gitignore`. It's a list of patterns Git should never track. Three lines matter today:

```text
.env
.env.*
!.env.example
```

The first two say: ignore the secrets file and any variant of it. The third, with the `!`, says: except the example. So the blank template travels with the repo, and the real keys never do. Further down you'll find `node_modules/`, `output/`, and `_media/`: things that are either huge, regenerable, or private.

This is how a public or shared repo stays safe. Not by remembering to be careful, but by telling the tool once.

## See it work

In the terminal inside VS Code (Terminal → New Terminal), make a secrets file from the template:

```bash
cp .env.example .env
```

Now ask Git what changed:

```bash
git status
```

Nothing. You just created a file and Git can't see it. That's the ignore rule doing its job. Compare with a file Git does care about:

```bash
echo "hello" > note.md
```
```bash
git status
```

Now `note.md` shows up as untracked, in red. Delete it:

```bash
rm note.md
```

Three states to know: **tracked** (Git has it and watches it), **untracked** (Git sees it but you haven't added it), **ignored** (Git looks away on purpose).

## Read `package.json`

This file names the project and lists shortcuts under `scripts`. `pnpm image` and `node utils/generate-image.mjs` are the same thing; the shortcut just saves typing. There are no dependencies to install: the scripts use only what ships with Node.

## Read a script

Open `utils/generate-image.mjs`. It's three lines. It imports one function from `lib/cli.mjs` and runs it. Open `lib/cli.mjs` and skim: argument parsing, a help message, the request. You don't have to understand it. The point is that you *can* read it, and so can Claude or ChatGPT when you ask them to change it. That's the difference between a script in a folder and a button in an app.

Next: [add this folder to the Claude and ChatGPT apps](08-add-the-folder-to-the-apps.md).
