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
    id: "mus-uber-driver",
    type: "music",
    title: "Uber Driver",
    year: "2018",
    significance:
      "The breakout single that ended the Ebony comparisons and gave Wendy Shay her own signature. The song's playful directness — a half-joking delivery over a clean Afropop beat — became the defining texture of her early catalogue.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-modernghana"],
    externalUrl: "https://www.youtube.com/results?search_query=wendy+shay+uber+driver+official",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
  {
    id: "mus-bedroom-commando",
    type: "music",
    title: "Bedroom Commando",
    year: "2018",
    significance:
      "A deliberately provocative follow-up that confirmed 'Uber Driver' was not a one-off. The song became a fan-defining record — the kind of single that arrives with controversy already attached and outlives it within a season.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    externalUrl: "https://www.youtube.com/results?search_query=wendy+shay+bedroom+commando+official",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
  {
    id: "mus-astalavista",
    type: "music",
    title: "Astalavista",
    year: "2019",
    significance:
      "A chart-defining single that extended the breakthrough era into the wider region. 'Astalavista' became a club staple across West Africa and confirmed that her release cadence was a strategy, not a phase.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    externalUrl: "https://www.youtube.com/results?search_query=wendy+shay+astalavista+official",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
  {
    id: "mus-all-for-you",
    type: "music",
    title: "All For You",
    year: "2019",
    significance:
      "A widely shared single that became a generational shorthand — quoted in memes, sung at weddings, and woven into the everyday vocabulary of young Ghanaian listeners across the diaspora.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    externalUrl: "https://www.youtube.com/results?search_query=wendy+shay+all+for+you+official",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
  {
    id: "mus-boysis",
    type: "music",
    title: "Boysis",
    year: "2020",
    significance:
      "The song that confirmed Wendy Shay as the most consistent female hit-maker of her era in Ghana. 'Boysis' sat at the intersection of Afropop, dancehall, and highlife, and refused to commit fully to any of them — a signature sound, finally named.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    externalUrl: "https://www.youtube.com/results?search_query=wendy+shay+boysis+official",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
  {
    id: "mus-survivor",
    type: "music",
    title: "Survivor",
    year: "2022",
    significance:
      "The single that named the era. Released after the December 2021 road accident on the Accra–Kumasi highway, 'Survivor' reframed the public story — from a hit-maker to an artist with a real arc. The most critically engaged single of her career.",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom", "src-pulse-africa"],
    externalUrl: "https://www.youtube.com/results?search_query=wendy+shay+survivor+official",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
  {
    id: "mus-enigma-ep",
    type: "music",
    title: "Enigma (EP)",
    year: "2023",
    significance:
      "The project that consolidated the Survivor era. A multi-track EP that demonstrated her writing had deepened post-accident — heavier subject matter, sharper production, and the first sustained argument that she should be taken seriously as an album artist, not only a singles one.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    externalUrl: "https://www.youtube.com/results?search_query=wendy+shay+enigma+ep",
    attribution: "Search link — official uploads on YouTube",
    verification: "verified",
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-vgma-2019-nominee",
    title: "VGMA Nominee — New Artiste of the Year",
    year: "2019",
    context:
      "The 2019 Vodafone Ghana Music Awards, where Wendy Shay was nominated for New Artiste of the Year less than eighteen months after her debut single.",
    significance:
      "Formal recognition that the breakthrough was not a fluke. The nomination mattered less for the trophy itself than for what it said about the industry's appetite for a female pop star in her lane.",
    sourceIds: ["src-vgma-2019", "src-graphic-entertainment", "src-pulse-africa"],
    verification: "verified",
  },
  {
    id: "ach-streaming-records",
    title: "Sustained streaming records — Ghanaian female pop",
    year: "2018 — 2023",
    context:
      "Across a five-year run, Wendy Shay has consistently appeared among the most-streamed Ghanaian female artists on Boomplay, Audiomack, and Spotify.",
    significance:
      "The streaming numbers confirm what the radio charts suggested: a female artist who, for half a decade, was impossible to leave out of the conversation.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-modernghana"],
    verification: "verified",
  },
  {
    id: "ach-survivor-arc",
    title: "Survivor era — public-framing reset",
    year: "2022",
    context:
      "The Accra–Kumasi highway accident in December 2021, the recovery period that followed, and the music released after it.",
    significance:
      "The chapter where the legacy case actually begins. Before the accident, she was a hit-maker. After it, she became an artist with an arc — and the most critically engaged coverage of her career so far.",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom", "src-pulse-africa"],
    verification: "verified",
  },
];

export const quotes: Quote[] = [
  {
    id: "qto-female-pop-lane",
    source: "Ghanaian entertainment coverage of Wendy Shay",
    date: "various",
    text: "Across more than five years of coverage, the consistency of Wendy Shay's release cadence and her refusal to perform smallness are consistently noted as the throughline of her public career — the case for her as the defining female voice of the post-2018 Ghanaian pop mainstream.",
    attributedTo: "Editorial summary, drawn from Graphic Showbiz & Pulse Africa reporting",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-editorial-legacy"],
    verification: "editorial",
  },
  {
    id: "qto-survivor-framing",
    source: "Press coverage surrounding 'Survivor' and the Enigma EP",
    date: "2022 — 2023",
    text: "The accident and the music that followed reframed the public story. The same outlets that had spent 2018 asking whether she 'deserved' the RuffTown deal were now writing about her as a major Ghanaian artist with a real story to tell — a shift that was earned, not engineered.",
    attributedTo: "Editorial framing, drawn from Citi Newsroom & Graphic Showbiz coverage",
    sourceIds: ["src-citinewsroom", "src-graphic-entertainment", "src-editorial-legacy"],
    verification: "editorial",
  },
];
