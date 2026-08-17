import type { Source } from "@/lib/types";

/**
 * sources.ts — corroboration registry for every factual claim in the project.
 *
 * Tier hierarchy:
 *   1. primary     — official artist channels, management statements, award-org records, label releases, verified social posts.
 *   2. reputable   — major reputable media (BBC, Joy FM, Citi FM, Graphic.com.gh, MyJoyOnline, GhanaWeb, Music In Africa, etc.)
 *   3. interview   — on-record, attributable, dated.
 *   4. editorial   — clearly labeled interpretation by the project author.
 *
 * Notes:
 *  - Where a specific URL is unstable or was a long-running news item, we cite the
 *    outlet + year rather than fabricating a permalink.
 *  - All entries below are publicly documented. Where the precise date of an
 *    article or broadcast is uncertain, the year is given and `corroborates`
 *    describes exactly what the source supports.
 */

export const sources: Source[] = [
  // ── Primary ────────────────────────────────────────────────────────────
  {
    id: "src-wendy-shay-official",
    label: "Wendy Shay — official channels & verified social",
    tier: "primary",
    publisher: "Wendy Shay (verified accounts)",
    corroborates:
      "Career announcements, release cadence, public statements attributed to the artist.",
  },
  {
    id: "src-rufftown-records",
    label: "RuffTown Records — official releases & label credits",
    tier: "primary",
    publisher: "RuffTown Records / Bullet",
    corroborates:
      "Wendy Shay's signing, single-release credits, and label-level statements regarding her catalogue.",
  },
  {
    id: "src-vgma-2019",
    label: "Vodafone Ghana Music Awards (VGMA) — 2019 nominations",
    tier: "primary",
    publisher: "Charterhouse Ghana / VGMA",
    year: 2019,
    corroborates:
      "VGMA 2019 New Artiste of the Year nomination attributed to Wendy Shay.",
  },

  // ── Reputable media ───────────────────────────────────────────────────
  {
    id: "src-ghanaweb-profile",
    label: "GhanaWeb — artist profile",
    tier: "reputable",
    publisher: "GhanaWeb",
    corroborates:
      "Background information, birth name, and career summary for Wendy Shay.",
  },
  {
    id: "src-graphic-entertainment",
    label: "Graphic Showbiz — entertainment reporting",
    tier: "reputable",
    publisher: "Graphic Communications Group",
    corroborates:
      "Long-running entertainment coverage of Wendy Shay's releases, performances, and public activity in Ghana.",
  },
  {
    id: "src-citinewsroom",
    label: "Citi Newsroom — entertainment desk",
    tier: "reputable",
    publisher: "Citi FM / Citi Newsroom",
    corroborates:
      "Concerts, VGMA-related reporting, the 2021 highway accident, and statements by or about the artist.",
  },
  {
    id: "src-modernghana",
    label: "Modern Ghana — entertainment coverage",
    tier: "reputable",
    publisher: "Modern Ghana",
    corroborates:
      "Concerts, fan activity, brand endorsements, and domestic news items.",
  },
  {
    id: "src-pulse-africa",
    label: "Pulse Ghana / Pulse Africa — artist coverage",
    tier: "reputable",
    publisher: "Pulse",
    corroborates:
      "Concerts, awards coverage, streaming-records reporting, and cultural-impact framing.",
  },
  {
    id: "src-myjoyonline-biography",
    label: "MyJoyOnline — profile coverage",
    tier: "reputable",
    publisher: "MyJoyOnline (Multimedia Group)",
    corroborates:
      "Background, career summary, and major milestones for Wendy Shay.",
  },
  {
    id: "src-musicinafrica",
    label: "Music In Africa — artist biography",
    tier: "reputable",
    publisher: "Music In Africa",
    corroborates:
      "Career overview, genre positioning, and the Afropop-in-Ghana context.",
  },

  // ── Collaborator cross-references ─────────────────────────────────────
  {
    id: "src-bullet-rufftown",
    label: "Bullet — RuffTown Records founder, producer",
    tier: "primary",
    publisher: "RuffTown Records / Bullet (verified accounts)",
    corroborates:
      "Signing of Wendy Shay to RuffTown Records in 2017; production credits on early singles; on-record statements about her trajectory.",
  },
  {
    id: "src-shatta-wale",
    label: "Shatta Wale — joint releases & cross-label appearances",
    tier: "reputable",
    publisher: "Pulse Africa / Modern Ghana",
    corroborates:
      "West-African press coverage of the Wendy Shay–Shatta Wale creative exchange and joint appearances.",
  },
  {
    id: "src-sarkodie",
    label: "Sarkodie — joint releases & press coverage",
    tier: "reputable",
    publisher: "Pulse Africa / Graphic Showbiz",
    corroborates:
      "Press coverage of Sarkodie–Wendy Shay studio exchanges and joint appearances.",
  },
  {
    id: "src-mugeez",
    label: "Mugeez (R2Bees) — joint releases & press coverage",
    tier: "reputable",
    publisher: "Modern Ghana / Pulse Africa",
    corroborates:
      "Press coverage of Mugeez–Wendy Shay joint releases and live appearances.",
  },
  {
    id: "src-kelvyn-boy",
    label: "Kelvyn Boy — joint releases & press coverage",
    tier: "reputable",
    publisher: "Graphic Showbiz / Pulse Africa",
    corroborates:
      "Press coverage of Kelvyn Boy–Wendy Shay studio exchanges and joint appearances.",
  },
  {
    id: "src-mzvee",
    label: "MzVee — joint appearances & press coverage",
    tier: "reputable",
    publisher: "Graphic Showbiz / Modern Ghana",
    corroborates:
      "Press coverage of MzVee–Wendy Shay joint appearances and the broader female-pop conversation in Ghana.",
  },
  {
    id: "src-sista-afia",
    label: "Sista Afia — public exchange coverage",
    tier: "reputable",
    publisher: "Graphic Showbiz / Citi Newsroom",
    corroborates:
      "Press coverage of the 2020 public exchange between Wendy Shay and Sista Afia.",
  },
  {
    id: "src-efya",
    label: "Efya — joint appearances & press coverage",
    tier: "reputable",
    publisher: "Music In Africa / Graphic Showbiz",
    corroborates:
      "Press coverage of Efya–Wendy Shay joint appearances and the broader Ghanaian female-vocalist conversation.",
  },

  {
    id: "src-shay-concert",
    label: "Shay Concert — Westhills Mall franchise (RuffTown / Hisense)",
    tier: "primary",
    publisher: "RuffTown Records / Hisense Ghana / Westhills Mall",
    year: 2023,
    corroborates:
      "Shay Concert franchise: 2023 edition at Westhills Mall, Weija, and the announced Shay Concert 2025 on Nov 22nd at the same venue. Sponsored by Hisense, backed by RuffTown Records. Documented via official concert posters and HypeLens Africa photo coverage.",
  },

  // ── Interviews ────────────────────────────────────────────────────────
  {
    id: "src-interview-citifm",
    label: "On-air interview — Citi FM",
    tier: "interview",
    publisher: "Citi FM",
    corroborates:
      "On-record statements by Wendy Shay regarding her signing, her sound, and her creative direction.",
  },
  {
    id: "src-interview-joyfm",
    label: "On-air interview — Joy FM",
    tier: "interview",
    publisher: "Joy FM",
    corroborates:
      "On-record statements about her career trajectory, the Ghanaian industry, and her experience as a female pop artist in Ghana.",
  },

  // ── Editorial ─────────────────────────────────────────────────────────
  {
    id: "src-editorial-legacy",
    label: "Editorial interpretation — Living Legacy project",
    tier: "editorial",
    publisher: "Osman Limam (independent)",
    year: 2026,
    corroborates:
      "Reflective framing of Wendy Shay's cultural meaning. Explicitly labeled as interpretation, not as fact.",
  },
];

export const sourcesById: Record<string, Source> = Object.fromEntries(
  sources.map((s) => [s.id, s]),
);
