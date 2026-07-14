"use client";

import Script from "next/script";

export default function KlaoWidgetLoader() {
  return (
    <Script
      src="https://cdn.klao.eu/widget/development/latest/klao-widget.js"
      onLoad={() => {
        window.KLAOWidget.init({
          widgetToken: "wgt_a7169a23aed83d3c8303b0754fb9d2b0",
           color: '#11652f',        // accent color (any CSS color)
           position: 'bottom-right', // 'bottom-left' | 'top-right' | 'top-left'
        });
      }}
    />
  );
}
