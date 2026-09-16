# The two website versions

`nextjs/` is the working Next.js app. `html/` holds plain HTML placeholders that open directly in a browser. Convert the finished Markdown into those HTML pages as the last step; there is no HTML generation script to maintain.

## Run the Next.js app

From the Week 2 repository, enter the app folder:

```sh
cd nextjs
```

Install its dependencies the first time:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open the localhost URL printed in the terminal. To check a production build, run `npm run build` in this same folder. To serve that build, run `npm start`.

## Files become pages

| Markdown file or folder | Website URL |
| --- | --- |
| `_context/docs/` | `/docs` |
| `_context/docs/ai-basics/` | `/docs/ai-basics` |
| `_context/docs/ai-basics/markdown.md` | `/docs/ai-basics/markdown` |
| `_context/example/` | `/example` |
| `_context/example/prompts/change-one-thing.md` | `/example/prompts/change-one-thing` |

The app reads `.md` files at the collection root and one folder deep. Add or edit Markdown, then refresh the page. Folder navigation is discovered automatically; nothing needs registering. Optional YAML frontmatter supplies `title` and `description`. Without a title, the first Markdown heading becomes the title. Relative links to other `.md` files become website links. Standard Markdown, tables, task lists, and fenced code blocks are supported; embedded HTML is not executed.

The app's own `package.json` and lockfile keep its dependencies separate from the generation utilities at the repo root. Inter is bundled locally through a font package. The two content folders are included in Next.js file tracing so a production bundle can include the Markdown outside `nextjs/`.

## Implementation record — September 16, 2026

Added the Next.js app, a full-height landing page, collection and folder indexes, Markdown reading pages, mobile layouts, and three HTML placeholders. Existing docs supplied by the other agents were left untouched. Four explicitly labeled sample pages were added under `example/prompts/` and `example/code/`.
