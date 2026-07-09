import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/data/blogPosts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return { title: post ? `${post.title} — Blog Musterstadt` : "Blogbeitrag — Stadt Musterstadt" };
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul className="bullet-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="steps-list">
          {block.items.map((item, i) => (
            <li key={i}>
              <strong>Schritt {i + 1}</strong>
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="quote-block">
          {block.text}
          {block.cite && (
            <>
              <br />— {block.cite}
            </>
          )}
        </blockquote>
      );
    case "table":
      return (
        <div className="data-table-wrap">
          <table className="data-table">
            {block.caption && <caption>{block.caption}</caption>}
            <thead>
              <tr>
                {block.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">
            <Link href="/blog">Blog</Link> / {post.title}
          </p>
          <h1>{post.title}</h1>
          <p>
            {new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })} ·{" "}
            {post.author}
          </p>
        </div>
      </section>

      <div className="container page-body">
        <article style={{ maxWidth: 760 }}>
          {post.blocks.map((block, i) => (
            <Block block={block} key={i} />
          ))}
        </article>
        <p style={{ marginTop: 24 }}>
          <Link href="/blog">← Zurück zur Blogübersicht</Link>
        </p>
      </div>
    </main>
  );
}
