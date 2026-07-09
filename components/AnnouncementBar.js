"use client";

import { useEffect, useState } from "react";

export default function AnnouncementBar() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/announcements")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setItems(data.announcements || []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (items.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items]);

  if (dismissed || items.length === 0) return null;

  const current = items[index];

  return (
    <div className="announcement-bar">
      <div className="container">
        <strong>{current.tag}:</strong>
        <span>{current.text}</span>
        <button className="close-btn" onClick={() => setDismissed(true)} aria-label="Hinweis schließen">
          ×
        </button>
      </div>
    </div>
  );
}
