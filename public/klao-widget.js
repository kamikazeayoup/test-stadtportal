var KLAOWidgetBundle=function(h){"use strict";const i={fabTooltip:"Sprache vereinfachen",disclaimer:"Hinweis: Dieser Text wurde mithilfe von Künstlicher Intelligenz automatisch vereinfacht. Der Inhalt wurde nicht von einem Menschen überprüft.",panelTitle:"Text vereinfachen",leichteSprache:"Leichte Sprache",einfacheSprache:"Einfache Sprache",transform:"Umwandeln",revert:"Zurück zur Originalversion",close:"Schließen",loading:"Laden…",success:"Text wurde erfolgreich umgewandelt.",successIn:a=>`Text wurde erfolgreich in ${a} umgewandelt`,error:"Fehler",retry:"Erneut versuchen",noContent:"Kein Text zum Umwandeln gefunden.",poweredBy:"Powered by"},p=["leichte_sprache","einfache_sprache"],m=["einfache_sprache","leichte_sprache"],g={einfache_sprache:i.einfacheSprache,leichte_sprache:i.leichteSprache},f={position:"bottom-right",theme:{primaryColor:"#1165ef",fontFamily:"'Inter', system-ui, -apple-system, sans-serif",borderRadius:"12px"},apiBaseUrl:"https://dev.api.klao.eu"};function x(a){if(!a.widgetToken)throw new Error("[KLAOWidget] widgetToken is required");return{widgetToken:a.widgetToken,position:a.position??f.position,theme:{...f.theme,...a.theme},apiBaseUrl:f.apiBaseUrl}}class d extends Error{constructor(e,t,o){super(o),this.status=e,this.code=t,this.name="WidgetApiError"}}class v{constructor(e,t){this.widgetToken=e,this.baseUrl=t.replace(/\/+$/,"")}async getInfo(){const e=`${this.baseUrl}/api/v1/widget/info`;let t;try{t=await fetch(e,{method:"GET",headers:{"x-widget-token":this.widgetToken},credentials:"omit"})}catch{throw new d(0,"NETWORK_ERROR","Netzwerkfehler.")}if(!t.ok)throw new d(t.status,"UNKNOWN_ERROR","");return t.json()}async precache(e){const t=`${this.baseUrl}/api/v1/widget/precache`;try{const o=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json","x-widget-token":this.widgetToken},credentials:"omit",keepalive:!0,signal:AbortSignal.timeout(5e3),body:JSON.stringify({url:e})});return o.status!==401&&o.status!==403}catch{return!0}}async transform(e,t){var c;const o=`${this.baseUrl}/api/v1/widget/transform`,s={url:e,mode:t};let n;try{n=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","x-widget-token":this.widgetToken},credentials:"omit",body:JSON.stringify(s)})}catch{throw new d(0,"NETWORK_ERROR","Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.")}if(!n.ok){let u="UNKNOWN_ERROR";try{const k=await n.json();u=k.code||((c=k.error)==null?void 0:c.code)||"UNKNOWN_ERROR"}catch{}throw new d(n.status,u,this.getErrorMessage(u,n.status))}return n.json()}getErrorMessage(e,t){switch(e){case"MISSING_WIDGET_TOKEN":case"INVALID_WIDGET_TOKEN":return"Ungültiges Widget. Bitte wenden Sie sich an den Betreiber.";case"INACTIVE_WIDGET_TOKEN":return"Das Widget ist derzeit deaktiviert.";case"ORIGIN_NOT_ALLOWED":return"Diese Website ist nicht für die Nutzung freigegeben.";case"INACTIVE_USER":return"Das Widget ist derzeit nicht verfügbar.";case"RATE_LIMIT_EXCEEDED":return"Zu viele Anfragen. Bitte versuchen Sie es in Kürze erneut.";case"PAGE_LIMIT_EXCEEDED":return"Das Seitenkontingent dieser Website ist aufgebraucht. Bitte kontaktieren Sie KLAO.";case"SCRAPING_FAILED":return"Der Seiteninhalt konnte nicht geladen werden.";case"INVALID_REQUEST":return"Ungültige Anfrage.";case"NETWORK_ERROR":return"Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.";default:return`Fehler (${t}). Bitte versuchen Sie es erneut.`}}}function w(a){const e=a.primaryColor??"#1165ef",t=a.fontFamily??"'Inter', system-ui, -apple-system, sans-serif",o=a.borderRadius??"12px";return`
    :host {
      all: initial;
      font-family: ${t};
      font-size: 14px;
      line-height: 1.5;
      color: #090b21;
      --klao-primary: ${e};
      --klao-primary-hover: color-mix(in srgb, ${e} 88%, black);
      --klao-radius: ${o};
      --klao-text: #090b21;
      --klao-text-muted: #475569;
      --klao-muted: #99a1af;
      /* Subtle 1px hairline ring + soft drop used on the panel and cards */
      --klao-card-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 0px 0px 1px #f5f5f4;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    /* FAB button */
    .klao-fab {
      position: fixed;
      bottom: 24px;
      z-index: 2147483647;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--klao-primary);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .klao-fab:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
    .klao-fab.bottom-right { right: 24px; }
    .klao-fab.bottom-left { left: 24px; }
    .klao-fab-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* FAB status badge (top-right corner) */
    .klao-fab-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid #fff;
      box-sizing: border-box;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .klao-fab-badge.visible {
      display: flex;
    }
    .klao-fab-badge.success {
      background: #16a34a;
      color: #fff;
    }
    .klao-fab-badge.success svg {
      width: 12px;
      height: 12px;
    }
    .klao-fab-badge.loading {
      background: #fff;
      color: var(--klao-primary);
    }
    .klao-fab-badge.loading svg {
      width: 14px;
      height: 14px;
    }

    /* FAB hover tooltip (AI disclaimer) — sits to the side of the button */
    .klao-fab-tooltip {
      position: absolute;
      top: 50%;
      width: 250px;
      max-width: min(250px, calc(100vw - 96px));
      padding: 10px 12px;
      background: #0e1e2f;
      color: #fff;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.45;
      text-align: left;
      white-space: normal;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s ease, transform 0.15s ease;
      pointer-events: none;
    }
    /* bottom-right FAB → tooltip to the LEFT of the button */
    .klao-fab.bottom-right .klao-fab-tooltip {
      right: calc(100% + 12px);
      transform: translateY(-50%) translateX(4px);
    }
    /* bottom-left FAB → tooltip to the RIGHT (so it stays on screen) */
    .klao-fab.bottom-left .klao-fab-tooltip {
      left: calc(100% + 12px);
      transform: translateY(-50%) translateX(-4px);
    }
    /* Caret pointing toward the button */
    .klao-fab-tooltip::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 10px;
      height: 10px;
      background: #0e1e2f;
      transform: translateY(-50%) rotate(45deg);
    }
    .klao-fab.bottom-right .klao-fab-tooltip::after { left: 100%; margin-left: -5px; }
    .klao-fab.bottom-left .klao-fab-tooltip::after { right: 100%; margin-right: -5px; }
    .klao-fab:hover .klao-fab-tooltip,
    .klao-fab:focus-visible .klao-fab-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateY(-50%) translateX(0);
    }

    /* Panel overlay */
    .klao-panel-overlay {
      position: fixed;
      inset: 0;
      z-index: 2147483646;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.2s ease;
      pointer-events: none;
    }
    .klao-panel-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    /* Panel — single rounded card; sections separated by gap, not borders */
    .klao-panel {
      position: fixed;
      bottom: 96px;
      z-index: 2147483647;
      width: 357px;
      max-width: calc(100vw - 32px);
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 8px;
      background: #fff;
      border-radius: var(--klao-radius);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px #f5f5f4;
      transform: translateY(16px) scale(0.95);
      opacity: 0;
      transition: transform 0.25s ease, opacity 0.25s ease;
      pointer-events: none;
      overflow: hidden;
    }
    .klao-panel.open {
      transform: translateY(0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }
    .klao-panel.bottom-right { right: 24px; }
    .klao-panel.bottom-left { left: 24px; }

    /* Header */
    .klao-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
    }
    .klao-header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .klao-header-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .klao-header-icon svg {
      display: block;
      width: 32px;
      height: 32px;
    }
    .klao-header-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--klao-text);
    }
    .klao-close-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #fff;
      border: 0.8px solid rgba(213, 213, 213, 0.25);
      box-shadow: var(--klao-card-shadow);
      cursor: pointer;
      color: var(--klao-text);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s ease;
    }
    .klao-close-btn:hover {
      background: #f5f5f4;
    }
    .klao-close-btn svg {
      width: 15px;
      height: 15px;
    }

    /* Body — direct child of the panel; states swap inside it */
    .klao-panel-body {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Mode selector cards */
    .klao-mode-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .klao-mode-option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px;
      border: 1px solid transparent;
      border-radius: 12px;
      background: #fff;
      box-shadow: var(--klao-card-shadow);
      cursor: pointer;
      transition: background 0.15s ease, border-color 0.15s ease;
    }
    .klao-mode-option:hover:not(.selected) {
      background: #fafafa;
    }
    .klao-mode-option.selected {
      background: rgba(17, 101, 239, 0.08);
      border-color: var(--klao-primary);
      box-shadow: none;
    }
    .klao-mode-option input[type="radio"] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
    /* Custom radio dot */
    .klao-radio {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1.5px solid #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: border-color 0.15s ease;
    }
    .klao-mode-option.selected .klao-radio {
      border-color: var(--klao-primary);
    }
    .klao-mode-option.selected .klao-radio::after {
      content: '';
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--klao-primary);
    }
    .klao-mode-label {
      font-size: 16px;
      font-weight: 500;
      color: var(--klao-text-muted);
    }
    .klao-mode-option.selected .klao-mode-label {
      color: #0070ff;
      font-weight: 600;
    }

    /* Action area (button wrapper) — inset 8px to match the design */
    .klao-action {
      padding: 8px;
    }

    /* Buttons */
    .klao-btn {
      width: 100%;
      padding: 12px 24px;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background 0.15s ease, opacity 0.15s ease;
    }
    .klao-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .klao-btn-primary {
      background: var(--klao-primary);
      color: #fff;
    }
    .klao-btn-primary:hover:not(:disabled) {
      background: var(--klao-primary-hover);
    }
    .klao-btn-secondary {
      background: #fff;
      color: var(--klao-text-muted);
      box-shadow: var(--klao-card-shadow);
    }
    .klao-btn-secondary:hover:not(:disabled) {
      background: #fafafa;
    }
    .klao-btn-secondary svg {
      width: 15px;
      height: 15px;
    }

    /* Result states (loading / success / error) */
    .klao-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 32px 16px;
      text-align: center;
    }
    .klao-state-text {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: var(--klao-text-muted);
      max-width: 280px;
    }

    /* Success check badge */
    .klao-success-icon {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #e7f8ec;
      color: #008a2e;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .klao-success-icon svg {
      width: 28px;
      height: 28px;
    }

    /* Error badge */
    .klao-error-icon {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #fdecec;
      color: #c62828;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .klao-error-icon svg {
      width: 28px;
      height: 28px;
    }

    /* Loading skeleton */
    .klao-skeleton {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
    .klao-skel-row {
      display: flex;
      gap: 10px;
      width: 100%;
      justify-content: center;
    }
    .klao-skel-bar {
      height: 12px;
      border-radius: 6px;
      background: #f0f0f0;
      overflow: hidden;
      position: relative;
    }
    .klao-skel-bar.accent {
      background: var(--klao-primary);
    }
    .klao-skel-bar:not(.accent)::after {
      content: '';
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
      animation: klao-shimmer 1.4s infinite;
    }
    @keyframes klao-shimmer {
      100% { transform: translateX(100%); }
    }

    /* Footer */
    .klao-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      padding: 8px;
    }
    .klao-footer-text {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.23px;
      color: var(--klao-muted);
    }
    .klao-footer-logo {
      display: flex;
      align-items: center;
    }
    .klao-footer-logo svg {
      display: block;
      height: 12px;
      width: auto;
    }

    /* Spinner animation */
    .klao-spinner {
      animation: klao-spin 0.8s linear infinite;
    }
    @keyframes klao-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}class y{constructor(e){this.host=document.createElement("div"),this.host.id="klao-widget-host",this.shadow=this.host.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=w(e),this.shadow.appendChild(t),this.container=document.createElement("div"),this.container.id="klao-widget-container",this.shadow.appendChild(this.container)}mount(){document.body.appendChild(this.host)}ensureMounted(){document.body.contains(this.host)||(document.querySelectorAll("#klao-widget-host").forEach(e=>{e!==this.host&&e.remove()}),document.body.appendChild(this.host))}destroy(){this.host.remove()}getContainer(){return this.container}}const r={bookReader:'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.4" r="2.6"/><path d="M12 8.6 3.5 6.6v11l8.5 4.4 8.5-4.4v-11L12 8.6Z"/><path d="M12 8.6V22"/><path d="m6.8 12.4 3 1.5"/><path d="m6.8 15.4 3 1.5"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',spinner:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',warning:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',book:'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#EBF5FF"/><path d="M12.7103 10.7148L12.6753 10.7081C12.2319 10.6224 11.8446 10.5476 11.5189 10.5455C11.1554 10.543 10.8305 10.6293 10.5352 10.8858C10.2316 11.1495 10.1003 11.4888 10.0408 11.8765C9.98531 12.2376 9.98533 12.6919 9.98535 13.2321L9.98536 17.3792C9.98535 17.8783 9.98534 18.2877 10.0202 18.6115C10.0561 18.9455 10.1342 19.2521 10.3374 19.507C10.5488 19.7723 10.8582 19.9117 11.198 20.0141C11.5356 20.1158 11.98 20.2016 12.5299 20.3077L12.5533 20.3122C13.5284 20.5005 14.2803 20.7986 14.815 21.0912L14.8254 21.0969C15.0989 21.2465 15.3176 21.3662 15.4849 21.4477C15.5291 21.4693 15.5798 21.4366 15.5798 21.3872V12.1047C15.5798 11.9525 15.5798 11.8764 15.5419 11.8111C15.504 11.7457 15.4422 11.7103 15.3185 11.6395C14.6909 11.2805 13.8202 10.9291 12.7103 10.7148Z" fill="url(#klao_book_a)"/><path d="M16.6802 11.6395C16.5565 11.7103 16.4946 11.7457 16.4568 11.8111C16.4189 11.8764 16.4189 11.9525 16.4189 12.1047V21.3872C16.4189 21.4366 16.4696 21.4693 16.5138 21.4477C16.6811 21.3662 16.8998 21.2465 17.1732 21.0969L17.1837 21.0912C17.7184 20.7986 18.4703 20.5005 19.4453 20.3122L19.4687 20.3077C20.0186 20.2016 20.4631 20.1158 20.8007 20.0141C21.1405 19.9117 21.4499 19.7723 21.6613 19.507C21.8645 19.2521 21.9426 18.9455 21.9785 18.6115C22.0133 18.2877 22.0133 17.8783 22.0133 17.3792V13.2321C22.0133 12.6919 22.0134 12.2376 21.9579 11.8765C21.8984 11.4888 21.7671 11.1495 21.4635 10.8858C21.1682 10.6293 20.8433 10.543 20.4798 10.5455C20.1541 10.5476 19.7668 10.6224 19.3234 10.7081L19.2884 10.7148C18.1784 10.9291 17.3078 11.2805 16.6802 11.6395Z" fill="url(#klao_book_b)"/><defs><linearGradient id="klao_book_a" x1="15.9993" y1="10.5454" x2="15.9993" y2="21.4545" gradientUnits="userSpaceOnUse"><stop stop-color="#3A7FED"/><stop offset="1" stop-color="#78CEFF"/></linearGradient><linearGradient id="klao_book_b" x1="15.9993" y1="10.5454" x2="15.9993" y2="21.4545" gradientUnits="userSpaceOnUse"><stop stop-color="#3A7FED"/><stop offset="1" stop-color="#78CEFF"/></linearGradient></defs></svg>',reload:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>',klaoLogo:'<svg width="46" height="12" viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73929 5.9994V10.999H0V0.254868H3.73929V5.18972L7.68439 0.250488H11.6174L7.56708 5.38172L11.6174 10.9935H7.16137L3.73929 5.9994Z" fill="#0E1E2F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5147 0.250488H30.3875L34.985 10.9935H31.0673L28.4599 3.92145L25.8283 10.9935H21.9062L26.5147 0.250488Z" fill="#0E1E2F"/><path d="M28.4419 10.9994C29.3536 10.9994 30.0927 10.2599 30.0927 9.34762C30.0927 8.43535 29.3536 7.6958 28.4419 7.6958C27.5301 7.6958 26.791 8.43535 26.791 9.34762C26.791 10.2599 27.5301 10.9994 28.4419 10.9994Z" fill="#1165EF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40.4151 0C43.4967 0 45.9987 2.50351 45.9987 5.58536C45.9987 8.6688 43.4967 11.1723 40.4151 11.1723C37.335 11.1723 34.833 8.6688 34.833 5.58536C34.833 2.50351 37.335 0 40.4151 0ZM40.4151 3.21811C39.1102 3.21811 38.0492 4.27973 38.0492 5.58536C38.0492 6.89257 39.1102 7.95259 40.4151 7.95259C41.7215 7.95259 42.7809 6.89257 42.7809 5.58536C42.7809 4.27973 41.7215 3.21811 40.4151 3.21811Z" fill="#0E1E2F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.6515 10.9902H12.8838V0.246094H16.6231V8.30335H20.6515V10.9902Z" fill="#0E1E2F"/></svg>'};class E{constructor(e,t){this.onClick=t,this.button=document.createElement("button"),this.button.className=`klao-fab ${e}`,this.button.setAttribute("aria-label",i.fabTooltip);const o=document.createElement("span");o.className="klao-fab-icon",o.innerHTML=r.bookReader,this.button.appendChild(o);const s=document.createElement("span");s.className="klao-fab-tooltip",s.setAttribute("role","tooltip"),s.textContent=i.disclaimer,this.button.appendChild(s),this.badge=document.createElement("span"),this.badge.className="klao-fab-badge",this.button.appendChild(this.badge),this.button.addEventListener("click",this.onClick)}setStatus(e){this.badge.classList.remove("visible","loading","success"),e==="loading"?(this.badge.classList.add("visible","loading"),this.badge.innerHTML=`<span class="klao-spinner">${r.spinner}</span>`):e==="success"?(this.badge.classList.add("visible","success"),this.badge.innerHTML=r.check):this.badge.innerHTML=""}getElement(){return this.button}destroy(){this.button.removeEventListener("click",this.onClick)}}class C{constructor(e){this.state="idle",this.statusMessage="",this.hasTransformed=!1,this.transformedMode=null,this.callbacks=e,this.availableModes=e.availableModes,this.selectedMode=this.availableModes[0],this.element=document.createElement("div"),this.element.className="klao-panel",this.render()}getElement(){return this.element}getState(){return this.state}open(e){this.element.classList.add(e,"open")}close(){this.element.classList.remove("open")}setState(e,t){this.state=e,this.statusMessage=t??"",e==="loading"&&(this.transformedMode=this.selectedMode),e==="success"&&(this.hasTransformed=!0),e==="reverted"&&(this.hasTransformed=!1),this.render()}setAvailableModes(e){this.availableModes=e,this.selectedMode=e.includes(this.selectedMode)?this.selectedMode:e[0],this.render()}orderedModes(){return m.filter(e=>this.availableModes.includes(e))}renderModeGroup(){const e=this.orderedModes();return e.length<2?"":`<div class="klao-mode-group">${e.map(o=>{const s=this.selectedMode===o;return`
        <label class="klao-mode-option ${s?"selected":""}">
          <input type="radio" name="klao-mode" value="${o}" ${s?"checked":""}>
          <span class="klao-radio"></span>
          <span class="klao-mode-label">${g[o]}</span>
        </label>`}).join("")}</div>`}renderBody(){switch(this.state){case"loading":return this.renderLoading();case"success":return this.renderSuccess();case"error":return this.renderError();default:return this.renderIdle()}}renderIdle(){return`
      ${this.renderModeGroup()}
      <div class="klao-action">
        <button class="klao-btn klao-btn-primary klao-transform-btn">${i.transform}</button>
      </div>
    `}renderLoading(){return`
      <div class="klao-state">
        <div class="klao-skeleton">
          <div class="klao-skel-row">
            <span class="klao-skel-bar" style="width:70px"></span>
            <span class="klao-skel-bar" style="width:120px"></span>
          </div>
          <div class="klao-skel-row">
            <span class="klao-skel-bar accent" style="width:90px"></span>
            <span class="klao-skel-bar" style="width:60px"></span>
          </div>
          <div class="klao-skel-row">
            <span class="klao-skel-bar" style="width:150px"></span>
          </div>
        </div>
        <p class="klao-state-text">${i.loading}</p>
      </div>
    `}renderSuccess(){const e=this.transformedMode??this.selectedMode,t=i.successIn(g[e]);return`
      <div class="klao-state">
        <div class="klao-success-icon">${r.check}</div>
        <p class="klao-state-text">${t}</p>
      </div>
      <div class="klao-action">
        <button class="klao-btn klao-btn-secondary klao-revert-btn">
          ${r.reload} ${i.revert}
        </button>
      </div>
    `}renderError(){return`
      <div class="klao-state">
        <div class="klao-error-icon">${r.warning}</div>
        <p class="klao-state-text">${this.statusMessage||i.error}</p>
      </div>
      <div class="klao-action">
        <button class="klao-btn klao-btn-primary klao-retry-btn">${i.retry}</button>
      </div>
    `}render(){this.element.innerHTML=`
      <div class="klao-panel-header">
        <div class="klao-header-left">
          <span class="klao-header-icon">${r.book}</span>
          <span class="klao-header-title">${i.panelTitle}</span>
        </div>
        <button class="klao-close-btn" aria-label="${i.close}">${r.close}</button>
      </div>
      <div class="klao-panel-body">
        ${this.renderBody()}
      </div>
      <div class="klao-footer">
        <span class="klao-footer-text">${i.poweredBy}</span>
        <span class="klao-footer-logo">${r.klaoLogo}</span>
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.element.querySelector(".klao-close-btn");e==null||e.addEventListener("click",()=>this.callbacks.onClose()),this.element.querySelectorAll('input[name="klao-mode"]').forEach(c=>{c.addEventListener("change",()=>{this.selectedMode=c.value,this.render()})});const o=this.element.querySelector(".klao-transform-btn");o==null||o.addEventListener("click",()=>{this.callbacks.onTransform(this.selectedMode)});const s=this.element.querySelector(".klao-revert-btn");s==null||s.addEventListener("click",()=>{this.callbacks.onRevert()});const n=this.element.querySelector(".klao-retry-btn");n==null||n.addEventListener("click",()=>{this.callbacks.onTransform(this.selectedMode)})}}class M{constructor(){this.snapshots=new Map}save(e){this.snapshots.clear();for(const t of e)this.snapshots.set(t,t.cloneNode(!0))}restore(){if(this.snapshots.size===0)return!1;for(const[e,t]of this.snapshots){const o=e.parentNode;o&&o.replaceChild(t,e)}return this.snapshots.clear(),!0}hasSnapshot(){return this.snapshots.size>0}clear(){this.snapshots.clear()}}function L(){return document.querySelector("main")??document.querySelector("article")??document.body}function S(a){return a.replace(/>\s+</g,"><").replace(/\n+/g,"<br>")}class T{constructor(e){this.availableModes=null,this.hasAutoClosed=!1,this.config=x(e),this.client=new v(this.config.widgetToken,this.config.apiBaseUrl),this.renderer=new y(this.config.theme),this.snapshot=new M}mount(){this.renderer.mount();const e=this.renderer.getContainer();this.overlay=document.createElement("div"),this.overlay.className="klao-panel-overlay",this.overlay.addEventListener("click",()=>this.closePanel()),e.appendChild(this.overlay),this.panel=new C({availableModes:p,onTransform:t=>this.handleTransform(t),onRevert:()=>this.handleRevert(),onClose:()=>this.closePanel()}),e.appendChild(this.panel.getElement()),this.client.precache(window.location.href).then(t=>{t&&(this.fab=new E(this.config.position,()=>this.handleFabClick()),e.appendChild(this.fab.getElement()))})}destroy(){var e;(e=this.fab)==null||e.destroy(),this.renderer.destroy(),this.snapshot.clear()}async handleFabClick(){const e=await this.ensureModesLoaded();if(e.length===1){this.snapshot.hasSnapshot()?this.handleRevert():await this.handleTransform(e[0]);return}this.panel.open(this.config.position),this.overlay.classList.add("open")}async ensureModesLoaded(){if(this.availableModes===null){try{const e=await this.client.getInfo();this.availableModes=e.availableModes.length>0?e.availableModes:p}catch{this.availableModes=p}this.panel.setAvailableModes(this.availableModes)}return this.availableModes}closePanel(){this.panel.close(),this.overlay.classList.remove("open")}async handleTransform(e){this.panel.setState("loading"),this.fab.setStatus("loading");const t=L();if(!t){this.panel.setState("error",i.noContent),this.fab.setStatus("idle");return}try{const s=(await this.client.transform(window.location.href,e)).data.output_html;if(!s||!s.trim()){this.panel.setState("error",i.noContent),this.fab.setStatus("idle");return}const n=e==="leichte_sprache"?S(s):s;this.snapshot.hasSnapshot()||this.snapshot.save([t]),t.innerHTML=n,this.renderer.ensureMounted(),this.panel.setState("success"),this.fab.setStatus("success"),this.hasAutoClosed||(this.hasAutoClosed=!0,window.setTimeout(()=>{this.panel.getState()==="success"&&this.closePanel()},1500))}catch(o){const s=o instanceof d?o.message:i.error;this.panel.setState("error",s),this.fab.setStatus("idle")}}handleRevert(){this.snapshot.restore()&&(this.renderer.ensureMounted(),this.panel.setState("reverted"),this.fab.setStatus("idle"))}}let l=null;const b={init(a){l&&l.destroy(),l=new T(a),l.mount()},destroy(){l&&(l.destroy(),l=null)}};return window.KLAOWidget=b,h.KLAOWidget=b,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),h}({});
