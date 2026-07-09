"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { ATTRACTIONS } from "@/lib/data/attractions";

export default function TourismusPage() {
  const [active, setActive] = useState(null);

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Leben in der Stadt / Tourismus</p>
          <h1>Sehenswürdigkeiten & Tourismus</h1>
          <p>Klicken Sie auf ein Bild, um mehr über den jeweiligen Ort zu erfahren.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Highlights der Stadt</h2>
          <div className="gallery-grid">
            {ATTRACTIONS.map((a) => (
              <button
                key={a.name}
                type="button"
                className="gallery-thumb"
                style={{ background: a.color }}
                onClick={() => setActive(a)}
              >
                <span>{a.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Warum Musterstadt einen Besuch wert ist</h2>
          <ul className="bullet-list">
            <li>Historische Altstadt mit über 200 denkmalgeschützten Gebäuden</li>
            <li>Direkte Lage an der Elbe mit Promenade und Hafenflair</li>
            <li>Über 40 Veranstaltungen pro Jahr, vom Weihnachtsmarkt bis zur Museumsnacht</li>
            <li>Gute Anbindung: 35 Minuten mit dem Zug nach Hamburg</li>
          </ul>
          <blockquote className="quote-block">
            „Musterstadt vereint norddeutsche Hafenatmosphäre mit einer lebendigen Kulturszene.“
            <br />— Reiseführer Norddeutschland, Ausgabe 2026
          </blockquote>
        </section>
      </div>

      {active && (
        <Modal title={active.name} onClose={() => setActive(null)}>
          <p>{active.description}</p>
        </Modal>
      )}
    </main>
  );
}
