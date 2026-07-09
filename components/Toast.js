"use client";

import { useEffect } from "react";

export default function Toast({ message, onDone, duration = 3200 }) {
  useEffect(() => {
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [onDone, duration]);

  return (
    <div className="toast" role="status">
      {message}
    </div>
  );
}
