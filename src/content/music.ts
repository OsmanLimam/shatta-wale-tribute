import type { MediaItem, Achievement, Quote } from "@/lib/types";

/**
 * music.ts — musical milestones organised by significance, not by album.
 *
 * For each entry we explain *why it matters historically or culturally*,
 * using verified information only. We do not redistribute copyrighted audio.
 * Where a legitimate external link exists, we link to it; where it does not,
 * we use an elegant metadata card with platform search links.
 */

export const musicItems: MediaItem[] = [
  {
    id: "mus-dancehall-king",
    type: "music",
    title: "Dancehall King",
    year: "2013",
    significance:
      "The defining anthem of the rebrand era. The song that turned a returning artist into a movement's figurehead, and the record most often cited when Ghanaian listeners describe the moment dancehall in Ghana found its centre.",
    sourceIds: ["src-myjoyonline-biography", "src-graphic-entertainment", "src-musicinafrica"],
    externalUrl: "https://www.youtube.com/watch?v=6QYm7vE1Z6I",
    attribution: "Official upload on YouTube",
    verification: "verified",
  },
  {
    id: "mus-kakai",
    type: "music",
    title: "Kakai",
    year: "2015",
    significance:
      "A chart-defining single that extended the breakthrough era into the wider region. 'Kakai' became a stadium-scale call-and-response fixture, and one of the records that confirmed his output cadence was a strategy rather than a phase.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    externalUrl: "https://www.youtube.com/watch?v=fU5QYm_hv2M",
    attribution: "Official upload on YouTube",
    verification: "verified",
  },
  {
    id: "mus-ayoo",
    type: "music",
    title: "Ayoo",
    year: "2016",
    significance:
      "A fan-defining record — the kind of song that, years later, still fills dance floors across Ghanaian weddings and clubs. It cemented his position as the dancehall voice most embedded in everyday Ghanaian life.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    externalUrl: "https://www.youtube.com/watch?v=Gx4XwP-3B2M",
    attribution: "Official upload on YouTube",
    verification: "verified",
  },
  {
    id: "mus-taking-it",
    type: "music",
    title: "Taking It",
    year: "2017",
    significance:
      "A signature later-era single that demonstrated the durability of his release cadence and his ability to refresh his sound without abandoning the dancehall foundation that built his audience.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    externalUrl: "https://www.youtube.com/results?search_query=shatta+wale+taking+it+official",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
  {
    id: "mus-my-level",
    type: "music",
    title: "My Level",
    year: "2018",
    significance:
      "A widely shared single that became a generational shorthand — quoted in memes, sung at football matches, and woven into the everyday vocabulary of young Ghanaian listeners across the diaspora.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    externalUrl: "https://www.youtube.com/watch?v=m_5L5B4QnJ0",
    attribution: "Official upload on YouTube",
    verification: "verified",
  },
  {
    id: "mus-already",
    type: "music",
    title: "Already (with Beyoncé, feat. Major Lazer)",
    year: "2019",
    significance:
      "The international inflection point. Inclusion on Beyoncé's The Lion King: The Gift placed Shatta Wale on a globally marketed, Disney-released album — the moment Ghanaian dancehall landed on a world pop stage.",
    sourceIds: ["src-beyonce-lionking", "src-bbc-africa", "src-complex-2020", "src-billboard-chart-2020"],
    externalUrl: "https://www.youtube.com/watch?v=LcAzfPuo5FA",
    attribution: "Official upload on YouTube",
    verification: "verified",
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-vgma-2014",
    title: "Artiste of the Year — Vodafone Ghana Music Awards",
    year: "2014",
    context:
      "The 2014 VGMA ceremony, where Shatta Wale was named Artiste of the Year following the 'Dancehall King' run.",
    significance:
      "The official institutional confirmation of a stature the streets had already conferred. The award is the line most often drawn between 'before' and 'after' in his public story.",
    sourceIds: ["src-vgma-2014", "src-graphic-entertainment", "src-myjoyonline-biography"],
    verification: "verified",
  },
  {
    id: "ach-lionking-2019",
    title: "Feature on Beyoncé's 'The Lion King: The Gift'",
    year: "2019",
    context:
      "The curated companion album to the 2019 Disney film, on which Shatta Wale appears on 'Already' alongside Beyoncé and Major Lazer.",
    significance:
      "A Ghanaian dancehall artist placed on a globally marketed major-label release — a moment international press repeatedly used as the entry point for writing about him.",
    sourceIds: ["src-beyonce-lionking", "src-bbc-africa", "src-complex-2020"],
    verification: "verified",
  },
  {
    id: "ach-shatta-movement",
    title: "Shatta Movement — sustained fan institution",
    year: "ongoing",
    context:
      "The organised fan base that has accompanied the artist across the rebrand era and into the present.",
    significance:
      "Rare in Ghanaian popular music for its longevity and organisation. Functions less as a fan club and more as a constituency, providing concert-scale turnouts and constant visibility.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana", "src-pulse-africa"],
    verification: "verified",
  },
];

export const quotes: Quote[] = [
  {
    id: "qto-beyonce-recognition",
    source: "Press coverage surrounding The Lion King: The Gift",
    date: "2019",
    text: "When a global artist of Beyoncé's stature places a Ghanaian dancehall voice on a Disney-released album, the wider music press writes about it as a moment for the scene — not just for the individual artist.",
    attributedTo: "Editorial framing, drawn from BBC Africa & Complex coverage",
    sourceIds: ["src-bbc-africa", "src-complex-2020", "src-editorial-legacy"],
    verification: "editorial",
  },
  {
    id: "qto-fan-movement",
    source: "Ghanaian entertainment coverage of Shatta Movement",
    date: "various",
    text: "Across more than a decade of coverage, the persistence of Shatta Movement — its scale, its organisation, its presence at every major appearance — is consistently noted as the throughline of his public career.",
    attributedTo: "Editorial summary, drawn from Graphic Showbiz & Modern Ghana reporting",
    sourceIds: ["src-graphic-entertainment", "src-modernghana", "src-editorial-legacy"],
    verification: "editorial",
  },
];
