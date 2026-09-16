import Link from "next/link";
import { collections } from "../lib/content.mjs";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="course-title">
        <div className="hero-meta"><span>Harvard · Fall 2026</span><span>Tools of the AI trade</span></div>
        <h1 id="course-title"><span>tdm155ai</span><span>week <span className="accent">2</span></span></h1>
        <div className="hero-foot"><span>A working collection</span><span aria-hidden="true">↓</span><span>September 16, 2026</span></div>
      </section>
      <nav className="home-links" aria-label="Explore the collection">
        {Object.entries(collections).map(([slug, collection]) => (
          <Link className="home-link" href={`/${slug}`} key={slug}>
            <span className="eyebrow">{collection.number} / Explore</span>
            <div className="home-link-title"><h2>{collection.title}</h2><span aria-hidden="true">↗</span></div>
            <p>{collection.description}</p>
          </Link>
        ))}
      </nav>
      <footer className="site-footer"><span>TDM155AI</span><span>Make something. See what happens.</span></footer>
    </main>
  );
}
