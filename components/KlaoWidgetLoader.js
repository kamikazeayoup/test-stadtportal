"use client";

import Script from "next/script";

export default function KlaoWidgetLoader() {
  return (
    <Script
      src="https://cdn.klao.eu/widget/latest/klao-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window === "undefined" || !window.KLAOWidget) return;
        window.KLAOWidget.init({
          widgetToken: "wgt_a7169a23aed83d3c8303b0754fb9d2b0",
          mode: "fab",
        });
      }}
    />
  );
}
