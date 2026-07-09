export const metadata = { title: "Impressum — Stadt Musterstadt" };

export default function ImpressumPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Rechtliches / Impressum</p>
          <h1>Impressum</h1>
          <p>
            Angaben gemäß <span translate="no">§ 5 TMG</span>
          </p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Herausgeber</h2>
          <dl className="definition-list">
            <dt>Herausgeberin</dt>
            <dd>Stadt Musterstadt, vertreten durch Bürgermeisterin Dr. Annette Weinhold</dd>
            <dt>Anschrift</dt>
            <dd>Rathausplatz 1, 21073 Musterstadt</dd>
            <dt>Telefon</dt>
            <dd>040 123456-0</dd>
            <dt>E-Mail</dt>
            <dd>info@musterstadt.de</dd>
            <dt>Umsatzsteuer-ID</dt>
            <dd translate="no">DE123456789</dd>
          </dl>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Verantwortlich nach <span translate="no">§ 18 Abs. 2 MStV</span>: Presseamt Musterstadt, Anschrift
            wie oben.
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Wir sind
            nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieterin sind wir gemäß <span translate="no">§ 7 Abs. 1 TMG</span> für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach{" "}
            <span translate="no">§§ 8 bis 10 TMG</span> sind wir als Diensteanbieterin jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </section>
      </div>
    </main>
  );
}
