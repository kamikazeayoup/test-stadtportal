import Link from "next/link";
import LiveTicker from "@/components/LiveTicker";
import { NEWS_ITEMS } from "@/lib/data/newsItems";
import { EVENTS } from "@/lib/data/events";

export default function HomePage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <h1>Willkommen im Bürgerportal Musterstadt</h1>
          <p>
            Ihr zentraler Anlaufpunkt für Anträge, Termine und Informationen rund um die Stadtverwaltung
            Musterstadt.
          </p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Live-Auslastung im Bürgeramt</h2>
          <p className="lede">
            Die folgenden Werte aktualisieren sich automatisch alle vier Sekunden und simulieren eine
            Live-Anzeige.
          </p>
          <LiveTicker />
        </section>

        <section className="section">
          <h2>Schnellzugriff</h2>
          <div className="card-grid">
            <div className="card">
              <span className="tag">Beliebt</span>
              <h3>Termin vereinbaren</h3>
              <p>Buchen Sie online einen Termin im Bürgeramt, Bauamt oder Standesamt.</p>
              <Link href="/termine" className="btn btn-primary btn-sm">
                Termin buchen
              </Link>
            </div>
            <div className="card">
              <span className="tag">Online</span>
              <h3>Formulare & Anträge</h3>
              <p>Über 30 Formulare stehen zum Download oder zur Online-Einreichung bereit.</p>
              <Link href="/formulare" className="btn btn-secondary btn-sm">
                Formulare ansehen
              </Link>
            </div>
            <div className="card">
              <span className="tag">Neu</span>
              <h3>Personalausweis online beantragen</h3>
              <p>Beantragen Sie Ihren Personalausweis in wenigen Schritten vollständig digital.</p>
              <Link href="/personalausweis" className="btn btn-secondary btn-sm">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </section>

        <div className="two-col">
          <section className="section">
            <h2>Aktuelles aus der Stadt</h2>
            <ul className="bullet-list">
              {NEWS_ITEMS.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  {item.isNew && <span className="badge-new">Neu</span>}
                  <br />
                  <span style={{ color: "var(--color-text-muted)", fontSize: "0.88rem" }}>{item.summary}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 14 }}>
              <Link href="/aktuelles">Alle Meldungen ansehen →</Link>
            </p>
          </section>

          <aside>
            <div className="sidebar-card">
              <h4>Nächste Veranstaltungen</h4>
              <ul className="bullet-list">
                {EVENTS.slice(0, 3).map((e) => (
                  <li key={e.title}>
                    {new Date(e.date).toLocaleDateString("de-DE")} — {e.title}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 10 }}>
                <Link href="/veranstaltungen">Alle Termine →</Link>
              </p>
            </div>
            <div className="sidebar-card">
              <h4>Kontakt</h4>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                Rathausplatz 1, 21073 Musterstadt
                <br />
                Tel. 040 123456-0
                <br />
                <Link href="/kontakt">Alle Kontaktdaten →</Link>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
