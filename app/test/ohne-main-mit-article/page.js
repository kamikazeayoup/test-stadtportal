import TestNote from "@/components/TestNote";

export const metadata = { title: "Testseite: Artikel ohne Main — Stadt Musterstadt" };

export default function OhneMainMitArticlePage() {
  return (
    <>
      <div className="container" style={{ paddingTop: 20 }}>
        <TestNote>
          Diese Seite besitzt bewusst <strong>kein</strong> <code>&lt;main&gt;</code>-Element, dafür aber ein{" "}
          <code>&lt;article&gt;</code>-Element. Sie testet die zweite Prioritätsstufe der Ziel-Elementauflösung
          des KLAO-Widgets (<code>main → article → body</code>). Dieser Hinweis liegt außerhalb des
          <code>&lt;article&gt;</code> und sollte daher eine Umwandlung unverändert überstehen.
        </TestNote>
      </div>

      <article className="container" style={{ paddingBottom: 60 }}>
        <h1>Bezirksamt Altstadt — Sonderseite ohne Hauptnavigation-Wrapper</h1>
        <p>
          Diese Unterseite wurde technisch älter angebunden und verzichtet auf das sonst übliche
          <code>&lt;main&gt;</code>-Element. Der komplette sichtbare Inhalt liegt direkt in einem{" "}
          <code>&lt;article&gt;</code>-Tag.
        </p>

        <h2>Zuständigkeitsbereich</h2>
        <ul className="bullet-list">
          <li>Baugenehmigungen im Bezirk Altstadt</li>
          <li>Denkmalschutzauskünfte für die historische Innenstadt</li>
          <li>Sondernutzungserlaubnisse für den Marktplatz</li>
        </ul>

        <h2>Öffnungszeiten</h2>
        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tag</th>
                <th>Uhrzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Montag, Mittwoch</td>
                <td>8:00–13:00 Uhr</td>
              </tr>
              <tr>
                <td>Donnerstag</td>
                <td>14:00–18:00 Uhr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Referenznummer für Anfragen zu diesem Bezirk: <span translate="no">BEZ-ALT-07</span>
        </p>
      </article>
    </>
  );
}
