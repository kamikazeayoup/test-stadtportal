"use client";

import Script from "next/script";

export default function KlaoWidgetLoader() {
  return (
    <Script
      src="https://cdn.klao.eu/widget/latest/klao-widget.js"
      onLoad={() => {
        window.KLAOWidget.init({
          widgetToken: "wgt_eb5a895b067571310b353761bd34b7ea",
           color: '#11652f',        // accent color (any CSS color)
           position: 'bottom-right', // 'bottom-left' | 'top-right' | 'top-left'
        });
      }}
    />
  );
}
