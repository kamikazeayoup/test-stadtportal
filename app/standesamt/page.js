import Tabs from "@/components/Tabs";

export const metadata = { title: "Standesamt — Stadt Musterstadt" };

const TABS = [
  {
    label: "Geburt",
    content: (
      <div>
        <p>Eine Geburt muss innerhalb einer Woche beim Standesamt angezeigt werden.</p>
        <ul className="bullet-list">
          <li>Geburtsbescheinigung der Klinik oder Hebamme</li>
          <li>Personalausweise beider Elternteile</li>
          <li>Heiratsurkunde, sofern verheiratet</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Heirat",
    content: (
      <div>
        <p>Die Anmeldung zur Eheschließung erfolgt persönlich, mindestens 6 Monate im Voraus empfohlen.</p>
        <ul className="bullet-list">
          <li>Gültige Personalausweise</li>
          <li>Aktuelle Meldebescheinigungen</li>
          <li>Ggf. Nachweis über frühere Ehen</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Sterbefall",
    content: (
      <div>
        <p>Ein Sterbefall muss innerhalb von drei Werktagen beim Standesamt angezeigt werden.</p>
        <ul className="bullet-list">
          <li>Todesbescheinigung des Arztes</li>
          <li>Personalausweis der verstorbenen Person</li>
          <li>Geburtsurkunde oder Familienstammbuch</li>
        </ul>
        <p className="form-hint">
          Außerhalb der Öffnungszeiten erreichen Sie den Bereitschaftsdienst unter{" "}
          <span translate="no">040 123456-99</span>.
        </p>
      </div>
    ),
  },
];

export default function StandesamtPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Verwaltung / Standesamt</p>
          <h1>Standesamt</h1>
          <p>Geburten, Eheschließungen und Sterbefälle — zuständig für alle Personenstandsangelegenheiten.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <Tabs tabs={TABS} />
        </section>
      </div>
    </main>
  );
}
