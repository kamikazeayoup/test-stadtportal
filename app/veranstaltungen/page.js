"use client";

import { useMemo, useState } from "react";
import LoadMoreList from "@/components/LoadMoreList";
import { EVENTS, EVENT_CATEGORIES } from "@/lib/data/events";

export default function VeranstaltungenPage() {
  const [category, setCategory] = useState("Alle");

  const filtered = useMemo(() => {
    const sorted = [...EVENTS].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (category === "Alle") return sorted;
    return sorted.filter((e) => e.category === category);
  }, [category]);

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Leben in der Stadt / Veranstaltungen</p>
          <h1>Veranstaltungen</h1>
          <p>Feste, Konzerte, Sitzungen und mehr — gefiltert nach Kategorie.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <div className="chip-row">
            {EVENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`chip${category === cat ? " active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="lede">Keine Veranstaltungen in dieser Kategorie.</p>
          ) : (
            <LoadMoreList
              items={filtered}
              pageSize={3}
              renderItem={(e) => (
                <div className="card" key={e.title}>
                  <span className="tag">{e.category}</span>
                  <h3 style={{ fontSize: "1rem" }}>{e.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    {new Date(e.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>{e.description}</p>
                </div>
              )}
            />
          )}
        </section>
      </div>
    </main>
  );
}
