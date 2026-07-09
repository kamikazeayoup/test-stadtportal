"use client";

import { useMemo, useState } from "react";

export default function SearchFilterList({ placeholder, items, keys, renderItem, emptyLabel }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => keys.some((key) => String(item[key] ?? "").toLowerCase().includes(q)));
  }, [query, items, keys]);

  return (
    <div>
      <div className="search-input-wrap">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </div>
      {filtered.length === 0 ? (
        <p className="lede">{emptyLabel || "Keine Treffer gefunden."}</p>
      ) : (
        <div className="card-grid">{filtered.map((item, i) => renderItem(item, i))}</div>
      )}
    </div>
  );
}
