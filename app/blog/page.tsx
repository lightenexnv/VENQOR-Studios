import type { Metadata } from "next";
import { POSTS } from "@/content/posts";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/cursor/Cursor";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description: "Plain-language lessons on 3D websites, choosing the right stack, and getting found on Google and AI search.",
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <div className={styles.index}>
          <a href="/" className={`t-13 ${styles.back}`}>
            &larr; Back to home
          </a>
          <h1 className={`t-84 tb-53 ph-38 ${styles.indexTitle}`}>Insights</h1>
          <p className={`t-body20 ph-body ${styles.lead}`}>Short lessons that explain the web in plain language — no jargon, just what you need to make good decisions.</p>
          <ul className={styles.grid}>
            {POSTS.map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}`} className={styles.card}>
                  <img src={p.image} alt="" loading="lazy" />
                  <div className={styles.cardText}>
                    <span className="t-13">
                      {p.lesson} · {p.readTime}
                    </span>
                    <h2 className="t-28 ph-24">{p.title}</h2>
                    <p className="t-body">{p.excerpt}</p>
                    <span className={`t-caps ${styles.read}`}>[Read more]</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
