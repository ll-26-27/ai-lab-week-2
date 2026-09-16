import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

// `dir` is the folder relative to the repo root; all three live under _context/.
export const collections = {
  tutorial: { title: "Tutorial", description: "The setup and first-use path, in order, then the checklist and the week's activity.", number: "01", dir: "_context/tutorial" },
  glossary: { title: "Glossary", description: "One short entry per term, with a one-line gist and links to related terms.", number: "02", dir: "_context/glossary" },
  example: { title: "Example", description: "Small experiments. A place to start, change something, and see what happens.", number: "03", dir: "_context/example" },
};

export function label(slug) {
  return slug.replace(/[-_]/g, " ").replace(/^\w/, (letter) => letter.toUpperCase());
}

export function pageHref(collection, segments = []) {
  return "/" + [collection, ...segments].map(encodeURIComponent).join("/");
}

// Only the collections above are exposed, at most one folder deep. Symlinks are skipped.
export async function readCollection(collection) {
  if (!Object.hasOwn(collections, collection)) return [];
  const root = path.join(process.cwd(), "..", collections[collection].dir);
  const documents = [];

  async function visit(directory, segments = []) {
    let entries;
    try {
      entries = await readdir(directory, { withFileTypes: true });
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory() && segments.length === 0) {
        await visit(filename, [entry.name]);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const { data, content } = matter(await readFile(filename, "utf8"));
        const slug = [...segments, entry.name.slice(0, -3)];
        const heading = content.match(/^#\s+(.+)$/m)?.[1];
        documents.push({
          slug,
          group: segments[0] || "",
          title: typeof data.title === "string" ? data.title : heading || label(slug.at(-1)),
          description: typeof data.description === "string" ? data.description : "",
          content,
          href: pageHref(collection, slug),
        });
      }
    }
  }

  await visit(root);
  // Sort by folder, then by filename, so zero-padded names (01-, 02-, …) read in order.
  return documents.sort((a, b) => a.group.localeCompare(b.group) || a.slug.at(-1).localeCompare(b.slug.at(-1)));
}

// Keep sibling and ../ Markdown links useful in the rendered site, including anchors.
export function markdownHref(href, documentHref) {
  if (!href || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) return href;
  const url = new URL(href, `https://content.local${documentHref}`);
  url.pathname = url.pathname.replace(/\.md$/i, "");
  // On disk the collections live under _context/; on the site they are top-level routes.
  url.pathname = url.pathname.replace(/^\/_context\//, "/");
  return url.pathname + url.search + url.hash;
}
