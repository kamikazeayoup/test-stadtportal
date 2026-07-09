"use client";

import { useMemo, useState } from "react";
import { WASTE_SCHEDULE } from "@/lib/data/wasteSchedule";

export default function MuellabfuhrPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return WASTE_SCHEDULE;
    return WASTE_SCHEDULE.filter((row) => row.street.toLowerCase().includes(q));
  }, [query]);

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Leben in der Stadt / Müllabfuhr</p>
          <h1>Müllabfuhr & Entsorgung</h1>
          <p>Finden Sie die Abholtermine für Ihre Straße.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Abholtermine nach Straße</h2>
          <div className="search-input-wrap">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Straßennamen eingeben…"
              aria-label="Straße suchen"
            />
          </div>
          {filtered.length === 0 ? (
            <p className="lede">Keine Straße gefunden. Bitte prüfen Sie die Schreibweise.</p>
          ) : (
            <div className="data-table-wrap">
              <table className="data-table">
                <caption>{filtered.length} Straße(n) gefunden</caption>
                <thead>
                  <tr>
                    <th>Straße</th>
                    <th>Restmüll</th>
                    <th>Biomüll</th>
                    <th>Papier</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row) => (
                    <tr key={row.street}>
                      <td>{row.street}</td>
                      <td>{row.restmuell}</td>
                      <td>{row.biomuell}</td>
                      <td>{row.papier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="section">
          <h2>Sonderabfall & Wertstoffhof</h2>
          <ul className="bullet-list">
            <li>Sperrmüll kann viermal jährlich kostenlos abgeholt werden — Anmeldung erforderlich.</li>
            <li>Der Wertstoffhof am Industrieweg 7 ist Mo–Sa 8–17 Uhr geöffnet.</li>
            <li>Elektroschrott und Batterien können ganzjährig am Wertstoffhof abgegeben werden.</li>
            <li>Grünschnitt wird von April bis Oktober monatlich abgeholt (Anmeldung über Formular FORM-620).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
