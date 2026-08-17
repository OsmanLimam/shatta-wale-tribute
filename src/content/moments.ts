import type { MediaItem } from "@/lib/types";

/**
 * moments.ts — a curated set of major public moments.
 *
 * Each entry carries full metadata (year, context, significance, source).
 * Visuals are rendered as elegant typographic placeholders rather than
 * unauthorised photographs — see component layer.
 */

export const moments: MediaItem[] = [
  {
    id: "mom-bandana-moko-hoo",
    type: "milestone",
    title: "First public release as Bandana",
    year: "mid-2000s",
    location: "Accra, Ghana",
    significance:
      "The earliest widely circulated recorded appearance — 'Moko Hoo' on Ghanaian radio. The first time the public heard a voice that would, after a name change and a decade of work, become unmistakable.",
    sourceIds: ["src-musicinafrica", "src-myjoyonline-biography"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-01.jpg",
  },
  {
    id: "mom-rebrand-shatta-wale",
    type: "milestone",
    title: "Rebrand from Bandana to Shatta Wale",
    year: "2012",
    location: "Accra, Ghana",
    significance:
      "A total reset — new name, new identity, new sound. The single most consequential decision of the career: the moment the trajectory changed direction permanently.",
    sourceIds: ["src-myjoyonline-biography", "src-graphic-entertainment"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-02.jpg",
  },
  {
    id: "mom-dancehall-king-release",
    type: "music",
    title: "'Dancehall King' released",
    year: "2013",
    location: "Ghana",
    significance:
      "The anthem that mapped the rebrand onto the wider national imagination. Within months it became shorthand for an entire era of Ghanaian dancehall.",
    sourceIds: ["src-graphic-entertainment", "src-musicinafrica"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-03.jpg",
  },
  {
    id: "mom-vgma-2014",
    type: "award",
    title: "Named Artiste of the Year — VGMA 2014",
    year: "2014",
    location: "Accra International Conference Centre, Ghana",
    significance:
      "Institutional recognition of the breakthrough era. The most cited single award in his public story.",
    sourceIds: ["src-vgma-2014", "src-myjoyonline-biography"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-04.jpg",
  },
  {
    id: "mom-kakai-ayoo-run",
    type: "music",
    title: "Sustained hit run — 'Kakai', 'Ayoo', 'Baby (Chop Kiss)'",
    year: "2015 — 2016",
    location: "Ghana & West African diaspora",
    significance:
      "The chapter where the breakthrough became a body of work. Each single extended the audience and confirmed the volume-driven release strategy as a sustainable model.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-05.jpg",
  },
  {
    id: "mom-lionking-feature",
    type: "milestone",
    title: "Feature on Beyoncé's 'The Lion King: The Gift'",
    year: "2019",
    location: "International release",
    significance:
      "Ghanaian dancehall placed on a globally marketed Disney-released album. The inflection point for international press coverage of his career.",
    sourceIds: ["src-beyonce-lionking", "src-bbc-africa", "src-complex-2020"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-06.jpg",
  },
  {
    id: "mom-already-visual",
    type: "appearance",
    title: "'Already' visual release",
    year: "2020",
    location: "International release",
    significance:
      "The visual companion to the Beyoncé collaboration extended the reach of the previous year's record and brought additional chart visibility.",
    sourceIds: ["src-billboard-chart-2020", "src-bbc-africa", "src-complex-2020"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-07.jpg",
  },
  {
    id: "mom-shatta-movement-concerts",
    type: "performance",
    title: "Shatta Movement-organised stadium concerts",
    year: "ongoing",
    location: "Accra & across Ghana",
    significance:
      "Fan-organised stadium-scale turnouts, sustained across multiple eras. The visible proof that the Movement is not an audience but a constituency.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-08.jpg",
  },
  {
    id: "mom-shattafest",
    type: "performance",
    title: "ShattaFest — the Movement's flagship concert",
    year: "2014 — ongoing",
    location: "Accra Sports Stadium & venues across Ghana",
    significance:
      "ShattaFest is the recurring concert franchise organised under the Shatta Movement banner — the moment the fan institution stages itself in physical space. Stadium-scale turnouts, recurring editions across years, and a stage design built around the Movement's identity rather than around a tour cycle. It is the closest thing the Ghanaian industry has to a fan-owned festival franchise, and it has run long enough that a generation of attendees has now grown up inside it.",
    sourceIds: ["src-shattafest", "src-graphic-entertainment", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/shatta-wale/shattafest-crowd.png",
  },
];

export const archiveItems: MediaItem[] = [
  ...moments,
  {
    id: "arc-birth-accra",
    type: "milestone",
    title: "Born in Accra",
    year: "1984",
    location: "Accra, Ghana",
    significance:
      "The starting point of the public biographical record. Birth date and place widely reported across Ghanaian outlets; further childhood detail intentionally omitted from this archive.",
    sourceIds: ["src-ghanaweb-profile", "src-musicinafrica"],
    verification: "verified",
    imagePath: "/images/shatta-wale/journey-01-accra.png",
  },
  {
    id: "arc-rebrand",
    type: "cultural",
    title: "Adoption of the name 'Shatta Wale'",
    year: "2012",
    location: "Ghana",
    significance:
      "The rebrand that reset the trajectory and gave the Movement its name. Without this decision, none of the chapters that follow take the shape they took.",
    sourceIds: ["src-myjoyonline-biography", "src-graphic-entertainment"],
    verification: "verified",
    imagePath: "/images/shatta-wale/journey-02-bandana.jpg",
  },
  {
    id: "arc-vgma-artiste-year",
    type: "award",
    title: "VGMA Artiste of the Year",
    year: "2014",
    location: "Accra, Ghana",
    significance:
      "The headline award of the breakthrough era. The institutional moment most often used to date the public arrival.",
    sourceIds: ["src-vgma-2014", "src-graphic-entertainment"],
    verification: "verified",
    imagePath: "/images/shatta-wale/moment-04.jpg",
  },
  {
    id: "arc-already",
    type: "music",
    title: "'Already' — Beyoncé collaboration",
    year: "2019",
    location: "International",
    significance:
      "The international inflection point. The first time the wider world press wrote about him as a known quantity rather than a discovery.",
    sourceIds: ["src-beyonce-lionking", "src-bbc-africa", "src-complex-2020"],
    verification: "verified",
    imagePath: "/images/shatta-wale/beyonce-collab.png",
  },
  {
    id: "arc-shatta-movement",
    type: "cultural",
    title: "Shatta Movement — fan institution",
    year: "ongoing",
    location: "Ghana & diaspora",
    significance:
      "The organised fan base that has accompanied the career across the rebrand era. Functions as a cultural institution with the artist at its centre.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/shatta-wale/concert-crowd.jpg",
  },
  {
    id: "arc-international-press",
    type: "interview",
    title: "International press coverage cycle",
    year: "2019 — 2020",
    location: "International",
    significance:
      "Sustained Western-music press engagement following 'The Lion King: The Gift'. Coverage repeatedly used the Beyoncé collaboration as the entry point for writing about Ghanaian dancehall more broadly.",
    sourceIds: ["src-bbc-africa", "src-complex-2020", "src-billboard-chart-2020"],
    verification: "verified",
    imagePath: "/images/shatta-wale/concert-stage.jpg",
  },
];
