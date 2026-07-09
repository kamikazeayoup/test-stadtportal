import Accordion from "@/components/Accordion";
import { OFFICES_FAQ } from "@/lib/data/officesFaq";

export const metadata = { title: "Ämter & Behörden — Stadt Musterstadt" };

export default function AemterPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Verwaltung / Ämter & Behörden</p>
          <h1>Ämter & Behörden</h1>
          <p>Häufige Fragen zu Zuständigkeiten, Öffnungszeiten und Erreichbarkeit.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Häufig gestellte Fragen</h2>
          <Accordion items={OFFICES_FAQ} />
        </section>

        <section className="section">
          <h2>Weitere Behörden in der Region</h2>
          <dl className="definition-list">
            <dt>Finanzamt Musterstadt</dt>
            <dd>Steuerstraße 12, 21073 Musterstadt — nicht Teil der Stadtverwaltung</dd>
            <dt>Agentur für Arbeit</dt>
            <dd>Marktplatz 5, 21073 Musterstadt</dd>
            <dt>Amtsgericht</dt>
            <dd>Gerichtsweg 2, 21073 Musterstadt</dd>
            <dt>Landkreis-Verwaltung</dt>
            <dd>Kreishaus, 21075 Nordheim</dd>
          </dl>
        </section>
      </div>
    </main>
  );
}
