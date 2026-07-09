import Link from "next/link";
import { NEWS_ITEMS } from "@/lib/data/newsItems";

export const metadata = { title: "Aktuelles — Stadt Musterstadt" };

export default function AktuellesPage() {
  return (
    <main id="hauptinhalt">
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Startseite / Aktuelles</p>
          <h1>Aktuelles</h1>
          <p>Kurzmeldungen aus der Stadtverwaltung. Ausführliche Berichte finden Sie im Blog.</p>
        </div>
      </section>

      <div className="container page-body">
        <section className="section">
          <ul className="bullet-list">
            {NEWS_ITEMS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                {item.isNew && <span className="badge-new">Neu</span>}
                <br />
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                  {new Date(item.date).toLocaleDateString("de-DE")}
                </span>
                <p style={{ margin: "6px 0 0" }}>{item.summary}</p>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 20 }}>
            <Link href="/blog">Ausführliche Berichte im Blog lesen →</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
