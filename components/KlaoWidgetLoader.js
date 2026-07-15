"use client";

import Script from "next/script";

export default function KlaoWidgetLoader() {
  return (
    <Script
      src="https://cdn.klao.eu/widget/staging/latest/klao-widget.js"
      onLoad={() => {
        window.KLAOWidget.init({
          widgetToken: "wgt_880932875edd4fd5695d306f18160e42",
           color: '#11652f',        // accent color (any CSS color)
           position: 'bottom-right', // 'bottom-left' | 'top-right' | 'top-left'
        });
      }}
    />
  );
}
