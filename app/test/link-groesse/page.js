import Link from "next/link";
import TestNote from "@/components/TestNote";
import { LINK_SIZE_PAGES } from "@/lib/data/linkSizePages";

export const metadata = { title: "Testseiten: Link-Größe — Stadt Musterstadt" };

export default function LinkSizeIndexPage() {
  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 60 }}>
      <TestNote>10 QA-Fixtures mit unterschiedlich langen/tiefen URL-Pfaden, sortiert nach Zeichenlänge.</TestNote>
      <h1>Testseiten: Link-Größe</h1>
      <ul className="bullet-list">
        {LINK_SIZE_PAGES.map((p) => {
          const path = `/test/link-groesse/${p.segments.join("/")}`;
          return (
            <li key={path}>
              <Link href={path} translate="no">
                {path}
              </Link>{" "}
              — {p.title} ({path.length} Zeichen, {p.segments.length} Segmente)
            </li>
          );
        })}
      </ul>
    </div>
  );
}
