export const metadata = { title: "Leichte Sprache — Stadt Musterstadt" };

export default function LeichteSprachePage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Leichte Sprache</p>
          <h1>Willkommen in Leichter Sprache</h1>
          <p>Diese Seite erklärt das Bürgerportal in einfachen Worten.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Was ist das Bürgerportal?</h2>
          <p>
            Das Bürgerportal ist eine Internet-Seite.
            <br />
            Die Stadt Musterstadt macht diese Seite.
            <br />
            Hier finden Sie viele Informationen.
            <br />
            Zum Beispiel: Wie bekomme ich einen neuen Ausweis?
          </p>

          <h2>Was können Sie hier machen?</h2>
          <ul className="check-list">
            <li>Sie können einen Termin machen.</li>
            <li>Sie können Formulare herunterladen.</li>
            <li>Sie können Neuigkeiten lesen.</li>
            <li>Sie können uns eine Nachricht schreiben.</li>
          </ul>

          <h2>Wer hilft mir?</h2>
          <p>
            Das Bürgeramt hilft Ihnen gerne.
            <br />
            Sie erreichen das Bürgeramt unter der Telefon-Nummer 040 123456-10.
            <br />
            Das Bürgeramt ist von Montag bis Freitag geöffnet.
          </p>

          <h2>Zeichen-Erklärung</h2>
          <p>Manche Wörter sind schwer. Wir erklären sie hier:</p>
          <dl className="definition-list">
            <dt>Bürgeramt</dt>
            <dd>Ein Amt. Dort bekommen Sie zum Beispiel einen Ausweis.</dd>
            <dt>Formular</dt>
            <dd>Ein Blatt Papier zum Ausfüllen.</dd>
            <dt>Termin</dt>
            <dd>Ein fester Zeitpunkt für einen Besuch.</dd>
          </dl>
        </section>
      </div>
    </main>
  );
}
