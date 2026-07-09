import TestNote from "@/components/TestNote";

export const metadata = { title: "Testseite: Body-Fallback — Stadt Musterstadt" };

export default function OhneMainOhneArticlePage() {
  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 60 }}>
      <TestNote>
        Diese Seite besitzt weder <code>&lt;main&gt;</code> noch <code>&lt;article&gt;</code>. Sie testet den
        letzten Fallback der KLAO-Widget-Zielauflösung: das Ersetzen von <code>document.body</code>. Da
        Kopfzeile, Fußzeile, Cookie-Banner und Chat-Widget auf dieser Seite ebenfalls direkte Body-Kinder
        sind, würde eine Umwandlung hier theoretisch <strong>die gesamte Seite</strong> einschließen — ein
        bewusster Grenzfalltest, kein Darstellungsfehler.
      </TestNote>

      <section>
        <h1>Sonderdienst: Fundbüro</h1>
        <p>
          Das Fundbüro der Stadt Musterstadt nimmt Fundsachen aus dem gesamten Stadtgebiet entgegen und
          vermittelt sie an die rechtmäßigen Eigentümerinnen und Eigentümer.
        </p>

        <h2>Häufig abgegebene Gegenstände</h2>
        <ol className="steps-list">
          <li>
            <strong>Schlüssel</strong>
            Werden 6 Monate aufbewahrt, danach vernichtet.
          </li>
          <li>
            <strong>Fahrräder</strong>
            Werden 3 Monate aufbewahrt, danach versteigert.
          </li>
          <li>
            <strong>Wertgegenstände</strong>
            Werden 6 Monate aufbewahrt, danach dem Finder angeboten.
          </li>
        </ol>

        <h2>Kontaktdaten</h2>
        <dl className="definition-list">
          <dt>Adresse</dt>
          <dd>Ordnungsamt, Rathausplatz 1, Raum 5</dd>
          <dt>Telefon</dt>
          <dd>040 123456-05</dd>
          <dt>Öffnungszeiten</dt>
          <dd>Mo–Fr 9–15 Uhr</dd>
        </dl>
      </section>
    </div>
  );
}
