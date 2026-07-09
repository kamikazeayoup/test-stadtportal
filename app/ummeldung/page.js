import Tabs from "@/components/Tabs";
import Accordion from "@/components/Accordion";

export const metadata = { title: "An- & Ummeldung — Stadt Musterstadt" };

const TAB_CONTENT = [
  {
    label: "Anmeldung",
    content: (
      <div>
        <p>Ziehen Sie neu nach Musterstadt, melden Sie sich innerhalb von zwei Wochen im Bürgeramt an.</p>
        <ul className="check-list">
          <li>Gültiger Personalausweis oder Reisepass</li>
          <li>Wohnungsgeberbestätigung des Vermieters</li>
          <li>Bei Familien: Geburtsurkunden der Kinder</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Ummeldung",
    content: (
      <div>
        <p>Bei einem Umzug innerhalb von Musterstadt reicht die Ummeldung Ihres neuen Wohnsitzes.</p>
        <ul className="check-list">
          <li>Gültiger Personalausweis</li>
          <li>Wohnungsgeberbestätigung der neuen Adresse</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Abmeldung",
    content: (
      <div>
        <p>Ziehen Sie ins Ausland, ist eine Abmeldung beim Bürgeramt erforderlich.</p>
        <ul className="check-list">
          <li>Gültiger Personalausweis</li>
          <li>Neue Auslandsadresse, sofern bekannt</li>
        </ul>
      </div>
    ),
  },
];

const FAQ = [
  { question: "Wie lange habe ich Zeit, mich anzumelden?", answer: "Innerhalb von zwei Wochen nach dem Einzug." },
  { question: "Kann ich mich auch online ummelden?", answer: "Ja, die Online-Ummeldung ist über die Online-Dienste möglich, sofern alle Familienmitglieder umziehen." },
  { question: "Was kostet die Ummeldung?", answer: "Die Ummeldung ist kostenfrei." },
];

export default function UmmeldungPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Bürgerservice / An- & Ummeldung</p>
          <h1>An- & Ummeldung</h1>
          <p>Alles zum Melderecht bei Einzug, Umzug und Auszug.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <h2>Meldevorgänge im Überblick</h2>
          <Tabs tabs={TAB_CONTENT} />
        </section>

        <section className="section">
          <h2>Häufige Fragen</h2>
          <Accordion items={FAQ} />
        </section>
      </div>
    </main>
  );
}
