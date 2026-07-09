import ReadMoreText from "@/components/ReadMoreText";

export const metadata = { title: "Bürgermeisterin — Stadt Musterstadt" };

export default function BuergermeisterPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Verwaltung / Bürgermeisterin</p>
          <h1>Dr. Annette Weinhold — Bürgermeisterin</h1>
          <p>Seit 2019 im Amt, wiedergewählt 2025 mit 61,4 % der Stimmen.</p>
        </div>
      </section>

      <div className="container page-body two-col">
        <section className="section">
          <h2>Werdegang</h2>
          <ReadMoreText
            intro="Dr. Annette Weinhold wurde 1974 in Musterstadt geboren und studierte Verwaltungswissenschaften in Hamburg und Speyer. Vor ihrer Wahl zur Bürgermeisterin leitete sie das Kämmereiamt der Nachbarstadt Nordheim."
            more={[
              "Von 2001 bis 2010 arbeitete sie als Referentin im Landesministerium für Inneres, bevor sie 2011 als Amtsleiterin nach Nordheim wechselte.",
              "2019 wurde sie erstmals zur Bürgermeisterin von Musterstadt gewählt; 2025 folgte die Wiederwahl mit deutlicher Mehrheit.",
              "Ihre politischen Schwerpunkte liegen auf Digitalisierung der Verwaltung, bezahlbarem Wohnraum und Klimaschutz.",
            ]}
          />

          <h3>Amtszeit im Überblick</h3>
          <ul className="steps-list">
            <li>
              <strong>2019</strong>
              Erste Wahl zur Bürgermeisterin mit 54,2 % der Stimmen
            </li>
            <li>
              <strong>2021</strong>
              Start des Mobilitätskonzepts 2030
            </li>
            <li>
              <strong>2023</strong>
              Eröffnung des sanierten Stadtmuseums
            </li>
            <li>
              <strong>2025</strong>
              Wiederwahl mit 61,4 % der Stimmen
            </li>
            <li>
              <strong>2026</strong>
              Verabschiedung des Haushalts mit Rekordinvestitionen in Schulen
            </li>
          </ul>
        </section>

        <aside>
          <div className="sidebar-card">
            <h4>Sprechstunde</h4>
            <p style={{ fontSize: "0.9rem" }}>
              Jeden ersten Mittwoch im Monat, 16–18 Uhr, nach Anmeldung im Bürgeramt.
            </p>
          </div>
          <div className="sidebar-card">
            <h4>Zuständigkeiten</h4>
            <ul className="check-list" style={{ fontSize: "0.9rem" }}>
              <li>Repräsentation der Stadt</li>
              <li>Vorsitz im Stadtrat</li>
              <li>Dienstherrin der Verwaltung</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
