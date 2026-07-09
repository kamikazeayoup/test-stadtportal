"use client";

import { useEffect, useState } from "react";

export default function ChatWidget({ corner = "left" }) {
  const [injected, setInjected] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInjected(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!injected) return null;

  return (
    <div
      className={`chat-bubble${corner === "right" ? " corner-right" : ""}`}
      translate="no"
      data-widget="third-party-chat-decoy"
    >
      {open && (
        <div className="chat-panel">
          <strong>Bürger-Chat (Demo)</strong>
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
            Dies ist ein simuliertes Drittanbieter-Widget zu Testzwecken — kein echter Chat.
          </p>
        </div>
      )}
      <button
        type="button"
        className="chat-bubble-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat öffnen"
      >
        💬
      </button>
    </div>
  );
}
