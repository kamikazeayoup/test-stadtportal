import PermitStatusWidget from "@/components/PermitStatusWidget";

export const metadata = { title: "Bauamt — Stadt Musterstadt" };

export default function BauamtPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Verwaltung / Bauamt</p>
          <h1>Bauamt</h1>
          <p>Baugenehmigungen, Bauvoranfragen und Auskünfte zum Bebauungsplan.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Aktueller Bearbeitungsstand</h2>
          <PermitStatusWidget />
        </section>

        <section className="section">
          <h2>Ablauf einer Baugenehmigung</h2>
          <ol className="steps-list">
            <li>
              <strong>Bauvoranfrage stellen (optional)</strong>
              Klärt vorab die grundsätzliche Bebaubarkeit eines Grundstücks.
            </li>
            <li>
              <strong>Bauantrag einreichen</strong>
              Vollständige Bauunterlagen inkl. Statik und Lageplan einreichen.
            </li>
            <li>
              <strong>Prüfung durch das Bauamt</strong>
              Prüfung auf Übereinstimmung mit Bebauungsplan und Bauordnung.
            </li>
            <li>
              <strong>Beteiligung Nachbarn</strong>
              Angrenzende Grundstückseigentümer werden bei Bedarf angehört.
            </li>
            <li>
              <strong>Erteilung der Genehmigung</strong>
              Nach positiver Prüfung erhalten Sie die Baugenehmigung schriftlich.
            </li>
          </ol>
        </section>

        <section className="section">
          <h2>Benötigte Unterlagen</h2>
          <ul className="bullet-list">
            <li>Amtlicher Lageplan (nicht älter als 1 Jahr)</li>
            <li>Bauzeichnungen im Maßstab 1:100</li>
            <li>Statische Berechnung durch einen Prüfstatiker</li>
            <li>Energieeffizienznachweis nach GEG</li>
            <li>Baubeschreibung</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
