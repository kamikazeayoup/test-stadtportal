"use client";

import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className="accordion-item" key={item.question}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.question}</span>
              <span className={`accordion-icon${open ? " open" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            {open && <div className="accordion-panel">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
