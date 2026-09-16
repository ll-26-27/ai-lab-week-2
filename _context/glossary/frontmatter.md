---
term: "Frontmatter"
slug: frontmatter
short: "A block of key-value fields at the top of a Markdown file, fenced by `---` lines, holding metadata rather than prose."
aliases: []
category: files-and-formats
see_also: [markdown, json]
updated: 2026-09-16
---

# Frontmatter

**Frontmatter is a fenced block of fields at the very top of a Markdown file that holds metadata about the file, not its content.**

## In plain terms

Open almost any doc in this glossary and the first thing you see is a block like this:

```yaml
---
term: "Frontmatter"
updated: 2026-09-16
---
```

Everything between the two `---` lines is frontmatter, written in a simple key-value format called YAML. It never renders as part of the document; it is read by tools instead of by eyes, a title for a page, a category for sorting, a date for knowing what is stale. Below the second `---`, the actual Markdown body begins, headings and paragraphs as usual.

The reason this glossary needs frontmatter on every file is practical: a website reading this folder later needs to know each entry's slug, category, and short description without parsing the whole document, the same way a spreadsheet needs column headers before the data means anything. You will see the identical pattern in the course docs folder and in any `CLAUDE.md` that carries structured settings above its prose.

## Why it matters this term

It is the difference between a file a person reads and a file a program can also sort, filter, and link, without either side having to guess.

## See also

[Markdown](markdown.md) · [JSON](json.md)
