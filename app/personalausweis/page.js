export const metadata = { title: "Personalausweis & Reisepass — Stadt Musterstadt" };

export default function PersonalausweisPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Bürgerservice / Personalausweis & Reisepass</p>
          <h1>Personalausweis & Reisepass</h1>
          <p>Beantragen Sie Ihren Ausweis online oder vor Ort im Bürgeramt.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>So beantragen Sie Ihren Personalausweis</h2>
          <ol className="steps-list">
            <li>
              <strong>Termin buchen</strong>
              Vereinbaren Sie online oder telefonisch einen Termin im Bürgeramt.
            </li>
            <li>
              <strong>Unterlagen vorbereiten</strong>
              Bringen Sie ein biometrisches Passfoto und Ihren alten Ausweis mit.
            </li>
            <li>
              <strong>Vor Ort erscheinen</strong>
              Ihre Fingerabdrücke und Unterschrift werden digital erfasst.
            </li>
            <li>
              <strong>Gebühr bezahlen</strong>
              Die Gebühr wird direkt vor Ort per Karte oder bar beglichen.
            </li>
            <li>
              <strong>Ausweis abholen</strong>
              Nach ca. 3–4 Wochen liegt der neue Ausweis zur Abholung bereit.
            </li>
          </ol>
        </section>

        <section className="section">
          <h2>Gebührenübersicht</h2>
          <div className="data-table-wrap">
            <table className="data-table">
              <caption>Aktuelle Gebühren (Stand 2026)</caption>
              <thead>
                <tr>
                  <th>Dokument</th>
                  <th>Alter</th>
                  <th>Gebühr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Personalausweis</td>
                  <td>24 Jahre und älter</td>
                  <td>37,00 €</td>
                </tr>
                <tr>
                  <td>Personalausweis</td>
                  <td>unter 24 Jahre</td>
                  <td>22,80 €</td>
                </tr>
                <tr>
                  <td>Reisepass (10 Jahre gültig)</td>
                  <td>24 Jahre und älter</td>
                  <td>70,00 €</td>
                </tr>
                <tr>
                  <td>Reisepass (6 Jahre gültig)</td>
                  <td>unter 24 Jahre</td>
                  <td>37,50 €</td>
                </tr>
                <tr>
                  <td>Express-Zuschlag</td>
                  <td>alle</td>
                  <td>32,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <h2>Rechtsgrundlage</h2>
          <p>
            Die Ausstellung erfolgt nach dem Personalausweisgesetz (
            <span translate="no">§ 6 PAuswG</span>) sowie der Passverordnung (
            <span translate="no">§ 1 PassV</span>).
          </p>
        </section>
      </div>
    </main>
  );
}
