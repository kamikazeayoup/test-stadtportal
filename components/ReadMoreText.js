"use client";

import { useState } from "react";

export default function ReadMoreText({ intro, more }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p>{intro}</p>
      {expanded && more.map((p, i) => <p key={i}>{p}</p>)}
      <button type="button" className="btn btn-secondary btn-sm" onClick={() => setExpanded((v) => !v)}>
        {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
      </button>
    </div>
  );
}
