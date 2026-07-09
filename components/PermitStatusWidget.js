"use client";

import { useEffect, useState } from "react";

export default function PermitStatusWidget() {
  const [pending, setPending] = useState(46);
  const [avgDays, setAvgDays] = useState(18);

  useEffect(() => {
    const t = setInterval(() => {
      setPending((v) => Math.max(0, v + Math.floor(Math.random() * 5) - 2));
      setAvgDays((v) => Math.max(1, v + (Math.random() > 0.5 ? 1 : -1)));
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="live-ticker" aria-live="polite">
      <div className="stat">
        <div className="value">
          <span className="live-dot" aria-hidden="true" />
          {pending}
        </div>
        <div className="label">Offene Bauanträge</div>
      </div>
      <div className="stat">
        <div className="value">{avgDays} Tage</div>
        <div className="label">Ø Bearbeitungszeit</div>
      </div>
    </div>
  );
}
