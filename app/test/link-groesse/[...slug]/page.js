import Link from "next/link";
import { notFound } from "next/navigation";
import TestNote from "@/components/TestNote";
import { LINK_SIZE_PAGES, getLinkSizePage } from "@/lib/data/linkSizePages";

export function generateStaticParams() {
  return LINK_SIZE_PAGES.map((p) => ({ slug: p.segments }));
}

export function generateMetadata({ params }) {
  const page = getLinkSizePage(params.slug);
  return { title: page ? `${page.title} — Stadt Musterstadt` : "Testseite — Stadt Musterstadt" };
}

export default function LinkSizeTestPage({ params }) {
  const page = getLinkSizePage(params.slug);
  if (!page) notFound();

  const path = `/test/link-groesse/${params.slug.join("/")}`;

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 60 }}>
      <TestNote>
        Diese Seite ist eine von 10 QA-Fixtures mit unterschiedlich langen/tiefen URL-Pfaden. Sie testet, wie
        Links dieser Größe (Segmente, Zeichenlänge) dargestellt bzw. verarbeitet werden.
      </TestNote>

      <p className="breadcrumbs">
        <Link href="/test/link-groesse">Testseiten: Link-Größe</Link> / {page.title}
      </p>
      <h1>{page.title}</h1>
      <dl className="definition-list">
        <dt>Pfad</dt>
        <dd translate="no">{path}</dd>
        <dt>Segmente</dt>
        <dd>{params.slug.length}</dd>
        <dt>Zeichenlänge</dt>
        <dd>{path.length}</dd>
      </dl>
    </div>
  );
}
