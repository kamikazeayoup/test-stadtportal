"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SEARCH_INDEX } from "@/lib/data/searchIndex";

export default function SuchePage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Suche</p>
          <h1>Suche</h1>
          <p>Durchsuchen Sie das gesamte Bürgerportal nach Themen, Formularen und Seiten.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <div className="search-input-wrap" style={{ maxWidth: 560 }}>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="z. B. Personalausweis, Termin, Müllabfuhr…"
              aria-label="Bürgerportal durchsuchen"
              autoFocus
            />
          </div>

          {query.trim() === "" ? (
            <p className="lede">Geben Sie einen Suchbegriff ein, um Ergebnisse zu sehen.</p>
          ) : results.length === 0 ? (
            <p className="lede">Keine Ergebnisse für „{query}“.</p>
          ) : (
            <ul className="bullet-list">
              {results.map((r) => (
                <li key={r.href + r.title}>
                  <Link href={r.href}>
                    <strong>{r.title}</strong>
                  </Link>{" "}
                  <span className="tag" style={{ marginLeft: 6 }}>
                    {r.section}
                  </span>
                  <br />
                  <span style={{ fontSize: "0.88rem", color: "var(--color-text-muted)" }}>{r.snippet}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
