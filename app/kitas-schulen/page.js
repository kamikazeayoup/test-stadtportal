import { SCHOOLS } from "@/lib/data/schools";

export const metadata = { title: "Kitas & Schulen — Stadt Musterstadt" };

export default function KitasSchulenPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Familie / Kitas & Schulen</p>
          <h1>Kitas & Schulen</h1>
          <p>Übersicht der städtischen Kindertagesstätten und Schulen mit Kapazitäten.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Einrichtungen</h2>
          <div className="data-table-wrap">
            <table className="data-table">
              <caption>Städtische Einrichtungen</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Art</th>
                  <th>Plätze</th>
                  <th>Adresse</th>
                </tr>
              </thead>
              <tbody>
                {SCHOOLS.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td>{s.art}</td>
                    <td>{s.plaetze}</td>
                    <td>{s.adresse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <h2>Anmeldeverfahren</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Kita-Anmeldung</h3>
              <p>Anmeldungen sind ganzjährig über das Jugendamt möglich, Plätze werden nach Dringlichkeit vergeben.</p>
            </div>
            <div className="card">
              <h3>Grundschule</h3>
              <p>Die Zuweisung erfolgt automatisch nach Schulbezirk, Anschreiben erhalten Familien im Frühjahr.</p>
            </div>
            <div className="card">
              <h3>Weiterführende Schule</h3>
              <p>Die Anmeldung erfolgt nach Grundschulempfehlung direkt bei der gewünschten Schule.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
