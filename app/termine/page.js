"use client";

import { useState } from "react";
import Toast from "@/components/Toast";

const DEPARTMENTS = ["Bürgeramt", "Bauamt", "Standesamt", "Jugendamt"];
const REASONS = {
  Bürgeramt: ["Personalausweis", "Reisepass", "Ummeldung"],
  Bauamt: ["Baugenehmigung", "Bauvoranfrage"],
  Standesamt: ["Eheschließung", "Geburtsurkunde", "Sterbeurkunde"],
  Jugendamt: ["Elterngeld", "Kita-Anmeldung"],
};

export default function TerminePage() {
  const [department, setDepartment] = useState("");
  const [reason, setReason] = useState("");
  const [needsDocuments, setNeedsDocuments] = useState(false);
  const [toast, setToast] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setToast("Ihr Termin wurde angefragt. Sie erhalten in Kürze eine Bestätigung per E-Mail.");
    setDepartment("");
    setReason("");
    setNeedsDocuments(false);
  };

  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Bürgerservice / Termine</p>
          <h1>Termin vereinbaren</h1>
          <p>Wählen Sie ein Amt und einen Anliegen-Typ — verfügbare Felder passen sich automatisch an.</p>
        </div>
      </section>

      <div className="container page-body">
        <form className="form-grid" onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="dept">Amt</label>
            <select
              id="dept"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setReason("");
              }}
              required
            >
              <option value="">Bitte wählen…</option>
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {department && (
            <div className="form-field">
              <label htmlFor="reason">Anliegen</label>
              <select id="reason" value={reason} onChange={(e) => setReason(e.target.value)} required>
                <option value="">Bitte wählen…</option>
                {REASONS[department].map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          )}

          {reason === "Baugenehmigung" && (
            <div className="form-field">
              <label>
                <input
                  type="checkbox"
                  checked={needsDocuments}
                  onChange={(e) => setNeedsDocuments(e.target.checked)}
                />{" "}
                Ich möchte Baupläne vorab hochladen
              </label>
              <span className="form-hint">Dieses Feld erscheint nur bei Baugenehmigungsanfragen.</span>
            </div>
          )}

          {needsDocuments && reason === "Baugenehmigung" && (
            <div className="form-field">
              <label htmlFor="upload">Bauplan hochladen (PDF)</label>
              <input id="upload" type="file" accept="application/pdf" />
            </div>
          )}

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" required placeholder="Vor- und Nachname" />
          </div>

          <div className="form-field">
            <label htmlFor="email">E-Mail</label>
            <input id="email" type="email" required placeholder="name@beispiel.de" />
          </div>

          <div className="form-field">
            <label htmlFor="date">Wunschtermin</label>
            <input id="date" type="date" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={!department || !reason}>
            Termin anfragen
          </button>
        </form>
      </div>

      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
    </main>
  );
}
