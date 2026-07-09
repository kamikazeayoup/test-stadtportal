"use client";

import SearchFilterList from "@/components/SearchFilterList";
import { FORMS } from "@/lib/data/forms";

export default function FormularePage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Bürgerservice / Formulare & Anträge</p>
          <h1>Formulare & Anträge</h1>
          <p>Alle Formulare der Stadtverwaltung an einem Ort — durchsuchbar nach Name oder Amt.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Formulare durchsuchen</h2>
          <SearchFilterList
            placeholder="Formular oder Amt suchen…"
            items={FORMS}
            keys={["name", "category", "ref"]}
            emptyLabel="Kein Formular gefunden — versuchen Sie einen anderen Suchbegriff."
            renderItem={(form) => (
              <div className="card" key={form.ref}>
                <span className="tag">{form.category}</span>
                <h3 style={{ fontSize: "1rem" }}>{form.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Referenz: {form.ref}</p>
                <a href="#" className="btn btn-secondary btn-sm">
                  PDF herunterladen
                </a>
              </div>
            )}
          />
        </section>

        <section className="section">
          <h2>Hinweise zur Antragstellung</h2>
          <ul className="check-list">
            <li>Formulare können handschriftlich oder digital ausgefüllt werden.</li>
            <li>Für die Bearbeitung wird in vielen Fällen ein gültiger Lichtbildausweis benötigt.</li>
            <li>Digitale Anträge werden innerhalb von 5 Werktagen bearbeitet.</li>
            <li>Bei Rückfragen hilft Ihnen das jeweils zuständige Amt gerne weiter.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
