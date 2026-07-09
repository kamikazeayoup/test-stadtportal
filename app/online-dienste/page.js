import Link from "next/link";

export const metadata = { title: "Online-Dienste — Stadt Musterstadt" };

const SERVICES = [
  { title: "Personalausweis beantragen", href: "/personalausweis", tag: "Bürgeramt" },
  { title: "Termin vereinbaren", href: "/termine", tag: "Alle Ämter" },
  { title: "Ummeldung durchführen", href: "/ummeldung", tag: "Bürgeramt" },
  { title: "Formular herunterladen", href: "/formulare", tag: "Alle Ämter" },
  { title: "Baugenehmigung beantragen", href: "/bauamt", tag: "Bauamt" },
  { title: "Kita-Platz beantragen", href: "/kitas-schulen", tag: "Jugendamt" },
];

export default function OnlineDienstePage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Online-Dienste</p>
          <h1>Online-Dienste</h1>
          <p>Erledigen Sie viele Behördengänge bequem von zu Hause aus.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <div className="card-grid">
            {SERVICES.map((s) => (
              <div className="card" key={s.href}>
                <span className="tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <Link href={s.href} className="btn btn-primary btn-sm">
                  Jetzt starten
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Systemvoraussetzungen</h2>
          <dl className="definition-list">
            <dt>Browser</dt>
            <dd>Aktuelle Version von Chrome, Firefox, Safari oder Edge</dd>
            <dt>Identifikation</dt>
            <dd>Personalausweis mit aktivierter Online-Ausweisfunktion (eID) für manche Dienste</dd>
            <dt>Zahlungsmittel</dt>
            <dd>Giropay, Kreditkarte oder Überweisung, je nach Dienst</dd>
          </dl>
        </section>
      </div>
    </main>
  );
}
