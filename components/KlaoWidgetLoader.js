"use client";

import Script from "next/script";

/**
 * Loads the locally-built KLAO widget bundle (public/klao-widget.js) and
 * mounts it. The bundled dist points at https://dev.api.klao.eu, so the FAB
 * only appears once `widgetToken` below is a real token whose allow-list
 * includes this dev origin (see README.md in this project).
 */
export default function KlaoWidgetLoader() {
  return (
    <Script
      src="/klao-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window === "undefined" || !window.KLAOWidget) return;
        window.KLAOWidget.init({
          widgetToken: "wgt_REPLACE_WITH_REAL_TOKEN",
          position: "bottom-right",
        });
      }}
    />
  );
}
