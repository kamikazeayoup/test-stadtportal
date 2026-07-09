export const metadata = { title: "Stadtplan & Anfahrt — Stadt Musterstadt" };

export default function StadtplanPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Leben in der Stadt / Stadtplan & Anfahrt</p>
          <h1>Stadtplan & Anfahrt</h1>
          <p>So finden Sie zu den wichtigsten Verwaltungsgebäuden.</p>
        </div>
      </section>

      <div className="container page-body two-col">
        <section className="section">
          <h2>Lageplan</h2>
          <div
            style={{
              background: "#dfe7f0",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              height: 320,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text-muted)",
            }}
            aria-label="Kartenplatzhalter"
          >
            [ Karten-Widget würde hier eingebettet — Platzhalter für Testzwecke ]
          </div>
        </section>

        <aside>
          <h2>Anfahrt zum Rathaus</h2>
          <dl className="definition-list">
            <dt>Mit dem Auto</dt>
            <dd>A250 Ausfahrt Musterstadt-Mitte, dann 5 Minuten Richtung Zentrum.</dd>
            <dt>Mit dem ÖPNV</dt>
            <dd>Buslinie 12 und 45, Haltestelle „Rathausplatz“.</dd>
            <dt>Parkplätze</dt>
            <dd>Tiefgarage Rathausplatz, 90 Stellplätze, erste Stunde kostenlos.</dd>
          </dl>
        </aside>
      </div>

      <div className="container">
        <section className="section">
          <h2>Adressen der Verwaltungsgebäude</h2>
          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Gebäude</th>
                  <th>Adresse</th>
                  <th>Zuständigkeit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rathaus</td>
                  <td>Rathausplatz 1</td>
                  <td>Bürgeramt, Verwaltungsspitze</td>
                </tr>
                <tr>
                  <td>Nebengebäude</td>
                  <td>Rathausplatz 3</td>
                  <td>Jugendamt, Bauamt</td>
                </tr>
                <tr>
                  <td>Standesamt</td>
                  <td>Kirchgasse 2</td>
                  <td>Personenstandsangelegenheiten</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
