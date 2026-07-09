"use client";

import { useState } from "react";
import Toast from "@/components/Toast";
import ChatWidget from "@/components/ChatWidget";
import TestNote from "@/components/TestNote";
import { DEPARTMENTS } from "@/lib/data/departments";

export default function KontaktPage() {
  const [toast, setToast] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setToast("Ihre Nachricht wurde gesendet. Wir melden uns innerhalb von 2 Werktagen.");
  };

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Kontakt</p>
          <h1>Kontakt</h1>
          <p>Schreiben Sie uns oder wenden Sie sich direkt an das zuständige Amt.</p>
        </div>
      </section>

      <div className="container page-body">
        <TestNote>
          Diese Seite platziert bewusst ein zweites schwebendes Widget unten rechts — in derselben Ecke wie
          der KLAO-FAB (Standardposition „bottom-right“) — um Positions-/Z-Index-Konflikte zwischen mehreren
          Seiten-Widgets zu testen.
        </TestNote>

        <div className="two-col">
          <section className="section">
            <h2>Kontaktformular</h2>
            <form className="form-grid" onSubmit={onSubmit}>
              <div className="form-field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="c-email">E-Mail</label>
                <input id="c-email" type="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="c-subject">Betreff</label>
                <select id="c-subject" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen…
                  </option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="c-message">Nachricht</label>
                <textarea id="c-message" rows={5} required />
              </div>
              <button type="submit" className="btn btn-primary">
                Nachricht senden
              </button>
            </form>
          </section>

          <aside>
            <h2>Direktkontakt nach Amt</h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Amt</th>
                    <th>Telefon</th>
                  </tr>
                </thead>
                <tbody>
                  {DEPARTMENTS.map((d) => (
                    <tr key={d.name}>
                      <td>{d.name}</td>
                      <td>{d.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </div>

      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
      <ChatWidget corner="right" />
    </main>
  );
}
