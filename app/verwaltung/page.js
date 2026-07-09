import SortableTable from "@/components/SortableTable";
import { DEPARTMENTS } from "@/lib/data/departments";

export const metadata = { title: "Stadtverwaltung — Stadt Musterstadt" };

export default function VerwaltungPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Verwaltung</p>
          <h1>Stadtverwaltung</h1>
          <p>Übersicht aller Ämter, Ansprechpersonen und Öffnungszeiten der Stadt Musterstadt.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Ämterübersicht</h2>
          <p className="lede">Klicken Sie auf eine Spaltenüberschrift, um die Tabelle zu sortieren.</p>
          <SortableTable
            caption="Ämter der Stadtverwaltung"
            columns={[
              { key: "name", label: "Amt" },
              { key: "head", label: "Leitung" },
              { key: "room", label: "Raum" },
              { key: "phone", label: "Telefon" },
              { key: "hours", label: "Sprechzeiten" },
            ]}
            rows={DEPARTMENTS}
          />
        </section>

        <section className="section">
          <h2>Organisationsstruktur</h2>
          <ul className="bullet-list">
            <li>Die Stadtverwaltung gliedert sich in acht Ämter unter der Leitung der Bürgermeisterin.</li>
            <li>Jedes Amt wird von einer Amtsleitung geführt, die dem Verwaltungsvorstand berichtet.</li>
            <li>Der Stadtrat kontrolliert die Verwaltung im Rahmen der kommunalen Selbstverwaltung.</li>
            <li>Querschnittsthemen wie Digitalisierung werden amtsübergreifend koordiniert.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
