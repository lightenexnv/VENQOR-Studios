import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost, type Block } from "@/content/posts";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/cursor/Cursor";
import styles from "../blog.module.css";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image], type: "article" },
  };
}

function Render({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className={`t-28 ph-24 ${styles.h2}`}>{block.text}</h2>;
    case "p":
      return <p className="t-body">{block.text}</p>;
    case "list":
      return (
        <ul className={styles.list}>
          {block.items.map((i) => (
            <li key={i} className="t-body">
              {i}
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className={styles.steps}>
          {block.items.map((s, i) => (
            <li key={s.title}>
              <span className={`t-13 ${styles.stepN}`}>[{String(i + 1).padStart(2, "0")}]</span>
              <div>
                <h3 className="t-20">{s.title}</h3>
                <p className="t-body">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className={styles.callout}>
          <span className="t-caps">{block.label}</span>
          <p className="t-body">{block.text}</p>
        </aside>
      );
    case "compare":
      return (
        <div className={styles.compare}>
          {block.columns.map((c) => (
            <div key={c.title} className={styles.compareCol}>
              <h3 className="t-20">{c.title}</h3>
              <ul>
                {c.points.map((p) => (
                  <li key={p} className="t-body">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "quiz":
      return (
        <section className={styles.quiz} aria-label="Quick check">
          <span className="t-caps">Quick check — tap to reveal</span>
          {block.items.map((q) => (
            <details key={q.q} className={styles.qa}>
              <summary className="t-20">{q.q}</summary>
              <p className="t-body">{q.a}</p>
            </details>
          ))}
        </section>
      );
    case "takeaways":
      return (
        <section className={styles.takeaways}>
          <span className="t-caps">Key takeaways</span>
          <ul>
            {block.items.map((t) => (
              <li key={t} className="t-20">
                {t}
              </li>
            ))}
          </ul>
        </section>
      );
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const i = POSTS.findIndex((p) => p.slug === post.slug);
  const next = POSTS[(i + 1) % POSTS.length];

  return (
    <>
      <Nav />
      <main className={styles.page}>
        <article className={styles.article}>
          <a href="/blog" className={`t-13 ${styles.back}`}>
            &larr; All insights
          </a>
          <p className={`t-13 ${styles.meta}`}>
            {post.lesson} · {post.category} · {post.readTime}
          </p>
          <h1 className={`t-53 tb-38 ph-28 ${styles.title}`}>{post.title}</h1>
          <p className={`t-body20 ph-body ${styles.lead}`}>{post.excerpt}</p>
          <img src={post.image} alt="" className={styles.cover} />
          <div className={styles.body}>
            {post.body.map((b, k) => (
              <Render key={k} block={b} />
            ))}
          </div>
          <div className={styles.cta}>
            <p className="t-20">Want this done for your business?</p>
            <a href="/#contact" className={`t-btn ${styles.ctaBtn}`}>
              Start a project
            </a>
          </div>
          <a href={`/blog/${next.slug}`} className={styles.next}>
            <span className="t-13">Next lesson</span>
            <span className="t-28 ph-24">{next.title} &rarr;</span>
          </a>
        </article>
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
