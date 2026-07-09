"use client";

import { useState } from "react";

export default function LoadMoreList({ items, pageSize = 3, renderItem, className = "card-grid" }) {
  const [visible, setVisible] = useState(pageSize);
  const shown = items.slice(0, visible);
  const hasMore = visible < items.length;

  return (
    <div>
      <div className={className}>{shown.map((item, i) => renderItem(item, i))}</div>
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button type="button" className="btn btn-secondary" onClick={() => setVisible((v) => v + pageSize)}>
            Mehr laden ({items.length - visible} weitere)
          </button>
        </div>
      )}
    </div>
  );
}
