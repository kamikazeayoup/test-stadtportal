import Link from "next/link";
import { FOOTER_NAV } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {Object.entries(FOOTER_NAV).map(([group, links]) => (
          <div key={group}>
            <h4>{group}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>Rathausplatz 1, 21073 Musterstadt</li>
            <li>Tel. 040 123456-0</li>
            <li>buergerbuero@musterstadt.de</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Stadt Musterstadt</span>
        <span>Ein Test-Bürgerportal für QA-Zwecke — keine echte Behörde.</span>
      </div>
    </footer>
  );
}
