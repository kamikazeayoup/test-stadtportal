export const metadata = { title: "Datenschutz — Stadt Musterstadt" };

export default function DatenschutzPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Rechtliches / Datenschutz</p>
          <h1>Datenschutzerklärung</h1>
          <p>Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>1. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (<span translate="no">DSGVO</span>) ist
            die Stadt Musterstadt, Rathausplatz 1, 21073 Musterstadt.
          </p>

          <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
          <h3>2.1 Beim Besuch der Website</h3>
          <p>
            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
            automatisch Informationen an unseren Server gesendet. Diese Informationen werden temporär in
            einem sogenannten Logfile gespeichert.
          </p>
          <h3>2.2 Bei Nutzung unseres Kontaktformulars</h3>
          <p>
            Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website
            bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse
            erforderlich.
          </p>

          <h2>3. Cookies</h2>
          <p>Wir setzen auf unserer Seite Cookies ein. Details finden Sie in der folgenden Übersicht.</p>
          <div className="data-table-wrap">
            <table className="data-table">
              <caption>Verwendete Cookies</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Zweck</th>
                  <th>Speicherdauer</th>
                  <th>Kategorie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td translate="no">musterstadt-cookie-consent</td>
                  <td>Speichert Ihre Cookie-Auswahl</td>
                  <td>12 Monate</td>
                  <td>Essenziell</td>
                </tr>
                <tr>
                  <td translate="no">session_id</td>
                  <td>Technisch notwendige Sitzungserkennung</td>
                  <td>Sitzungsende</td>
                  <td>Essenziell</td>
                </tr>
                <tr>
                  <td translate="no">_analytics</td>
                  <td>Anonymisierte Nutzungsstatistik (nur mit Einwilligung)</td>
                  <td>6 Monate</td>
                  <td>Statistik</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>4. Ihre Rechte</h2>
          <ul className="check-list">
            <li>Recht auf Auskunft nach Art. 15 DSGVO</li>
            <li>Recht auf Berichtigung nach Art. 16 DSGVO</li>
            <li>Recht auf Löschung nach Art. 17 DSGVO</li>
            <li>Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
            <li>Recht auf Datenübertragbarkeit nach Art. 20 DSGVO</li>
            <li>Recht auf Widerspruch nach Art. 21 DSGVO</li>
          </ul>

          <h2>5. Beschwerderecht</h2>
          <p>
            Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
            das Recht auf Beschwerde bei einer Aufsichtsbehörde.
          </p>
        </section>
      </div>
    </main>
  );
}
