import type { Source } from "@/lib/types";

/**
 * sources.ts — corroboration registry for every factual claim in the project.
 *
 * Tier hierarchy (per Master Build Prompt A3):
 *   1. primary     — official artist channels, management statements, award-org records, label releases, verified social posts.
 *   2. reputable   — major reputable media (BBC, Joy FM, Citi FM, Graphic.com.gh, MyJoyOnline, Ghanaweb, Music In Africa, Billboard, etc.)
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
    id: "src-shatta-official",
    label: "Shatta Wale — official channels & verified social",
    tier: "primary",
    publisher: "Shatta Wale (verified accounts)",
    corroborates:
      "Career announcements, release cadence, public statements attributed to the artist.",
  },
  {
    id: "src-vgma-2014",
    label: "Vodafone Ghana Music Awards (VGMA) — 2014 results",
    tier: "primary",
    publisher: "Charterhouse Ghana / VGMA",
    year: 2014,
    corroborates:
      "Artiste of the Year and related 2014 VGMA wins attributed to Shatta Wale.",
  },
  {
    id: "src-beyonce-lionking",
    label: "Beyoncé — The Lion King: The Gift (2019) tracklist",
    tier: "primary",
    publisher: "Parkwood / Columbia Records",
    year: 2019,
    corroborates:
      "Inclusion of 'Already' featuring Shatta Wale and Major Lazer on the official album.",
  },
  {
    id: "src-billboard-chart-2020",
    label: "Billboard — chart listing for 'Already'",
    tier: "primary",
    publisher: "Billboard",
    year: 2020,
    corroborates:
      "Chart presence of Beyoncé's 'Already' (featuring Shatta Wale) on Billboard rankings.",
  },

  // ── Reputable media ───────────────────────────────────────────────────
  {
    id: "src-myjoyonline-biography",
    label: "MyJoyOnline — profile coverage of Shatta Wale",
    tier: "reputable",
    publisher: "MyJoyOnline (Multimedia Group)",
    corroborates:
      "Background, rebranding from Bandana to Shatta Wale, and major career milestones.",
  },
  {
    id: "src-graphic-entertainment",
    label: "Graphic Showbiz — entertainment reporting",
    tier: "reputable",
    publisher: "Graphic Communications Group",
    corroborates:
      "Long-running entertainment coverage of Shatta Wale's releases, performances, and public activity in Ghana.",
  },
  {
    id: "src-citinewsroom",
    label: "Citi Newsroom — entertainment desk",
    tier: "reputable",
    publisher: "Citi FM / Citi Newsroom",
    corroborates:
      "Concerts, VGMA-related reporting, and statements by or about the artist.",
  },
  {
    id: "src-ghanaweb-profile",
    label: "GhanaWeb — artist profile",
    tier: "reputable",
    publisher: "GhanaWeb",
    corroborates:
      "Background information, birth name, and career summary for Shatta Wale.",
  },
  {
    id: "src-musicinafrica",
    label: "Music In Africa — Shatta Wale biography",
    tier: "reputable",
    publisher: "Music In Africa",
    corroborates:
      "Career overview, genre positioning, and the dancehall-in-Ghana context.",
  },
  {
    id: "src-bbc-africa",
    label: "BBC News — Africa entertainment coverage",
    tier: "reputable",
    publisher: "BBC",
    corroborates:
      "Beyoncé collaboration, cultural impact on Ghanaian and African popular music.",
  },
  {
    id: "src-complex-2020",
    label: "Complex — coverage of 'Already' release",
    tier: "reputable",
    publisher: "Complex",
    year: 2019,
    corroborates:
      "Western-music press coverage of Beyoncé's 'Already' featuring Shatta Wale.",
  },
  {
    id: "src-pulse-africa",
    label: "Pulse Ghana / Pulse Africa — artist coverage",
    tier: "reputable",
    publisher: "Pulse",
    corroborates:
      "Concerts, awards coverage, and cultural-impact framing.",
  },
  {
    id: "src-modernghana",
    label: "Modern Ghana — entertainment coverage",
    tier: "reputable",
    publisher: "Modern Ghana",
    corroborates:
      "Concerts, Shatta Movement fan-activity, and domestic news items.",
  },

  // ── Interviews ────────────────────────────────────────────────────────
  {
    id: "src-interview-citifm",
    label: "On-air interview — Citi FM",
    tier: "interview",
    publisher: "Citi FM",
    corroborates:
      "On-record statements by Shatta Wale regarding his rebrand and creative direction.",
  },
  {
    id: "src-interview-joyfm",
    label: "On-air interview — Joy FM",
    tier: "interview",
    publisher: "Joy FM",
    corroborates:
      "On-record statements about his career trajectory, the Ghanaian industry, and his fan base.",
  },

  // ── Editorial ─────────────────────────────────────────────────────────
  {
    id: "src-editorial-legacy",
    label: "Editorial interpretation — Living Legacy project",
    tier: "editorial",
    publisher: "Osman Limam (independent)",
    year: 2026,
    corroborates:
      "Reflective framing of Shatta Wale's cultural meaning. Explicitly labeled as interpretation, not as fact.",
  },
];

export const sourcesById: Record<string, Source> = Object.fromEntries(
  sources.map((s) => [s.id, s]),
);
