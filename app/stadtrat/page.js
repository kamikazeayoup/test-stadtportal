"use client";

import { useMemo, useState } from "react";
import SortableTable from "@/components/SortableTable";
import { COUNCIL_MEMBERS } from "@/lib/data/councilMembers";

export default function StadtratPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNCIL_MEMBERS;
    return COUNCIL_MEMBERS.filter((m) =>
      [m.name, m.fraktion, m.ausschuss].some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Verwaltung / Stadtrat</p>
          <h1>Stadtrat</h1>
          <p>Der Stadtrat besteht aus 32 gewählten Mitgliedern und tagt öffentlich einmal im Monat.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Mitglieder & Ausschüsse</h2>
          <div className="search-input-wrap">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nach Name, Fraktion oder Ausschuss suchen…"
              aria-label="Stadtratsmitglieder durchsuchen"
            />
          </div>
          {filtered.length === 0 ? (
            <p className="lede">Keine Mitglieder gefunden.</p>
          ) : (
            <SortableTable
              caption={`${filtered.length} von ${COUNCIL_MEMBERS.length} Mitgliedern`}
              columns={[
                { key: "name", label: "Name" },
                { key: "fraktion", label: "Fraktion" },
                { key: "ausschuss", label: "Ausschuss" },
                { key: "seit", label: "Mitglied seit" },
              ]}
              rows={filtered}
            />
          )}
        </section>

        <section className="section">
          <h2>Fraktionsstärke</h2>
          <ul className="bullet-list">
            <li>CDU: 11 Sitze</li>
            <li>SPD: 9 Sitze</li>
            <li>Grüne: 6 Sitze</li>
            <li>FDP: 4 Sitze</li>
            <li>Die Linke: 2 Sitze</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
