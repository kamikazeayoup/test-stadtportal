export const metadata = { title: "Barrierefreiheit — Stadt Musterstadt" };

export default function BarrierefreiheitPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Rechtliches / Barrierefreiheit</p>
          <h1>Erklärung zur Barrierefreiheit</h1>
          <p>Diese Erklärung gilt für das Bürgerportal der Stadt Musterstadt unter musterstadt.de.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Stand der Vereinbarkeit mit den Anforderungen</h2>
          <p>
            Diese Website ist mit der Barrierefreie-Informationstechnik-Verordnung (
            <span translate="no">BITV 2.0</span>) teilweise vereinbar. Die Nichtübereinstimmungen und
            Ausnahmen sind nachfolgend aufgeführt.
          </p>

          <h3>Nicht barrierefreie Inhalte</h3>
          <ul className="bullet-list">
            <li>Einige ältere PDF-Formulare sind nicht vollständig für Screenreader zugänglich.</li>
            <li>Die interaktive Stadtplan-Karte bietet aktuell keine Tastaturnavigation.</li>
            <li>Einige eingebettete Videos verfügen noch nicht über Untertitel.</li>
          </ul>

          <h3>Erstellung dieser Erklärung</h3>
          <p>
            Diese Erklärung wurde am 3. Januar 2026 erstellt und beruht auf einer Selbstbewertung durch die
            Stadtverwaltung.
          </p>

          <h2>Barrierefreiheit: Feedback und Kontaktangaben</h2>
          <dl className="definition-list">
            <dt>Feedback-Möglichkeit</dt>
            <dd>Bitte teilen Sie uns Barrieren über das Kontaktformular mit.</dd>
            <dt>Zuständige Stelle</dt>
            <dd>Presseamt Musterstadt, Rathausplatz 1, 21073 Musterstadt</dd>
            <dt>Schlichtungsverfahren</dt>
            <dd>
              Bei Beschwerden können Sie sich an die Schlichtungsstelle nach § 16 BGG des Bundes wenden.
            </dd>
          </dl>
        </section>
      </div>
    </main>
  );
}
