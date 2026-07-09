"use client";

import Link from "next/link";
import LoadMoreList from "@/components/LoadMoreList";
import { BLOG_POSTS } from "@/lib/data/blogPosts";

export default function BlogIndexPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Blog</p>
          <h1>Blog der Stadtverwaltung</h1>
          <p>Hintergrundberichte, Interviews und ausführliche Meldungen aus Musterstadt.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <LoadMoreList
            items={BLOG_POSTS}
            pageSize={3}
            renderItem={(post) => (
              <div className="card" key={post.slug}>
                <span className="tag">{post.author}</span>
                <h3 style={{ fontSize: "1.05rem" }}>{post.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                  {new Date(post.date).toLocaleDateString("de-DE")}
                </p>
                <p style={{ fontSize: "0.92rem" }}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn btn-secondary btn-sm">
                  Weiterlesen
                </Link>
              </div>
            )}
          />
        </section>
      </div>
    </main>
  );
}
