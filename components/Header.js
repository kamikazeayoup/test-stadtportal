"use client";

import { useState } from "react";
import Link from "next/link";
import { PRIMARY_NAV, MORE_NAV } from "@/lib/nav";

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container">
          <span>Musterstadt an der Elbe · Einwohnerinnen und Einwohner: 84.612</span>
          <div className="a11y-toggles">
            <Link href="/leichte-sprache">Leichte Sprache</Link>
            <button type="button" onClick={() => alert("Gebärdensprachvideo würde hier gestartet.")}>
              Gebärdensprache
            </button>
            <button
              type="button"
              onClick={() => document.documentElement.style.setProperty("font-size", "112%")}
            >
              Schrift vergrößern
            </button>
          </div>
        </div>
      </div>

      <div className="container brand-row">
        <Link href="/" className="brand">
          <span className="brand-crest" aria-hidden="true">
            M
          </span>
          <span className="brand-name">
            <strong>Stadt Musterstadt</strong>
            <span>Offizielles Bürgerportal</span>
          </span>
        </Link>
        <a href="#hauptinhalt" className="skip-link">
          Zum Hauptinhalt springen
        </a>
      </div>

      <nav className="container main-nav" aria-label="Hauptnavigation">
        {PRIMARY_NAV.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <div className="nav-more-wrap">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMoreOpen((v) => !v);
            }}
          >
            Weitere Themen ▾
          </a>
          {moreOpen && (
            <div className="nav-more-panel" onMouseLeave={() => setMoreOpen(false)}>
              {MORE_NAV.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMoreOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
