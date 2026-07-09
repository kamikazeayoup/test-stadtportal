// QA-Fixtures: Testseiten mit unterschiedlich langen/tiefen URL-Pfaden ("Link-Größe").
export const LINK_SIZE_PAGES = [
  { segments: ["a"], title: "Kürzestmöglicher Pfad" },
  { segments: ["museum"], title: "Ein Segment, kurzes Wort" },
  { segments: ["orte", "museum"], title: "Zwei Segmente" },
  { segments: ["orte", "museen", "heimatmuseum"], title: "Drei Segmente, mittellanges Wort" },
  {
    segments: ["orte", "museen", "regionalmuseum-musterstadt"],
    title: "Drei Segmente, langer letzter Abschnitt",
  },
  {
    segments: ["orte", "sehenswuerdigkeiten", "museen", "kunst-und-kulturhistorisches-museum"],
    title: "Vier Segmente, langer letzter Abschnitt",
  },
  { segments: ["a", "b", "c", "d", "e", "f", "g", "h"], title: "Acht Segmente, jeweils sehr kurz" },
  {
    segments: [
      "orte",
      "sehenswuerdigkeiten",
      "museen",
      "heimat-und-stadtgeschichtliches-museum-musterstadt",
    ],
    title: "Vier Segmente, sehr langer letzter Abschnitt",
  },
  {
    segments: [
      "orte",
      "sehenswuerdigkeiten",
      "kultur",
      "museen",
      "dauerausstellungen",
      "geschichte-der-schifffahrt-und-des-hafens-von-musterstadt",
    ],
    title: "Sechs Segmente, langer letzter Abschnitt",
  },
  {
    segments: [
      "orte",
      "sehenswuerdigkeiten",
      "kultur",
      "museen",
      "dauerausstellungen",
      "sonderausstellungen",
      "veranstaltungen",
      "museumspaedagogik-fuehrungen-workshops-und-ferienprogramme-fuer-schulklassen-kitas-und-erwachsenengruppen",
    ],
    title: "Acht Segmente, sehr langer letzter Abschnitt (Extremfall)",
  },
];

export function getLinkSizePage(slug) {
  const key = slug.join("/");
  return LINK_SIZE_PAGES.find((p) => p.segments.join("/") === key);
}
