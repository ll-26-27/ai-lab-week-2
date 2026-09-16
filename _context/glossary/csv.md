---
term: "CSV"
slug: csv
short: "A plain-text table format, one row per line, values separated by commas, for anything you'd otherwise put in a spreadsheet."
aliases: []
category: files-and-formats
see_also: [json, markdown]
updated: 2026-09-16
---

# CSV

**CSV (comma-separated values) is a plain-text table: one line per row, values separated by commas, no formatting.**

## In plain terms

Open a CSV file in a plain text editor and you see exactly its data, nothing hidden: a header row naming the columns, then one line per record, values separated by commas. Open the same file in Excel, Google Sheets, or a script, and it becomes a table. That double life, readable as text and useful as data, is the whole appeal, the same trade Markdown makes for prose.

Where JSON is the shape a program prefers for nested or irregular data, CSV is the shape everyone prefers for a flat table: a list of the models you tried and their prices, a roll call of who is in the course organization, a log of every image a batch run produced. You will not need to write CSV by hand this term; you will ask a model to produce one from messier material, or read one it exports, and knowing what you are looking at (rows and commas, not magic) keeps you from being surprised by it.

## Why it matters this term

When an assignment asks for "a table of results," CSV is often the plainest, most portable answer, and it is worth recognizing on sight in a folder listing.

## See also

[JSON](json.md) · [Markdown](markdown.md)
