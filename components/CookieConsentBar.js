"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "musterstadt-cookie-consent";

export default function CookieConsentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie-Einstellungen">
      <div className="container">
        <p>
          Wir verwenden Cookies, um diese Website nutzerfreundlich zu gestalten. Details finden Sie in
          unserer <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        <div className="cookie-actions">
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => decide("essential")}>
            Nur essenzielle
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => decide("all")}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
