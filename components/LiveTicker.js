"use client";

import { useEffect, useState } from "react";

const BASE_STATS = [
  { label: "Aktuelle Wartezeit Bürgeramt", key: "wait", value: 12, unit: "Min.", jitter: 6 },
  { label: "Wartende Besucher", key: "queue", value: 8, unit: "Personen", jitter: 4 },
  { label: "Offene Anliegen heute", key: "tickets", value: 143, unit: "", jitter: 10 },
  { label: "Freie Termine diese Woche", key: "slots", value: 27, unit: "", jitter: 5 },
];

export default function LiveTicker() {
  const [stats, setStats] = useState(BASE_STATS);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((s) => {
          const delta = Math.floor(Math.random() * s.jitter) - Math.floor(s.jitter / 2);
          const next = Math.max(0, s.value + delta);
          return { ...s, value: next };
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-ticker" aria-live="polite">
      {stats.map((s) => (
        <div className="stat" key={s.key}>
          <div className="value">
            <span className="live-dot" aria-hidden="true" />
            {s.value}
            {s.unit ? ` ${s.unit}` : ""}
          </div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
