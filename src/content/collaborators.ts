import type { SourceTier } from "@/lib/types";

/**
 * collaborators.ts — verified collaborators of Wendy Shay.
 *
 * Sourcing principles:
 *  - Every entry has a publicly documented collaboration
 *    (released song, credited feature, or confirmed joint performance).
 *  - Each collaboration is paired with at least one source in sources.ts.
 *  - Photos sourced from public web archives of each collaborator.
 *  - Photos are NOT original Wendy Shay photography — they depict the
 *    collaborator, used here for editorial identification only.
 */

export interface Collaborator {
  id: string;
  name: string;
  /** Primary musical identity — used as a one-line context label. */
  origin: string;
  /** Verified collaboration(s) with Wendy Shay. */
  collaboration: string;
  /** Year(s) the collaboration was released or performed. */
  year: string;
  /** Significance — why this collaboration matters in the arc. */
  significance: string;
  /** Photo path (under /public/images/collaborators/). */
  imagePath: string;
  /** Source IDs from sources.ts. */
  sourceIds: string[];
  /** Verification tier of the collaboration claim. */
  tier: SourceTier;
}

export const collaborators: Collaborator[] = [
  {
    id: "bullet",
    name: "Bullet",
    origin: "Ghanaian producer, RuffTown Records founder",
    collaboration: "Producer and label head — signed Wendy Shay in 2017",
    year: "2017 — present",
    significance:
      "The single most important creative partnership of her career. Bullet — who had previously guided the late Ebony Reigns — signed Wendy Shay, produced her early singles, and built the machine that turned 'Uber Driver' into a national breakout. The arc of her catalogue cannot be told without him at the centre of it.",
    imagePath: "/images/collaborators/bullet.jpg",
    sourceIds: ["src-bullet-rufftown", "src-rufftown-records", "src-modernghana"],
    tier: "primary",
  },
  {
    id: "shatta-wale",
    name: "Shatta Wale",
    origin: "Ghanaian dancehall artist, Artiste of the Year (VGMA 2014)",
    collaboration: "'Stevie Wonder' (Wendy Shay feat. Shatta Wale) and 'H.I.T Haters In Tears' (Wendy Shay feat. Shatta Wale)",
    year: "2020 — 2023",
    significance:
      "The most prominent cross-label dancehall exchange of her career. Two named joint singles — 'Stevie Wonder' and 'H.I.T Haters In Tears' — pair Wendy Shay with the figure who, alongside Stonebwoy, defined Ghanaian dancehall across the same era. The records document a direct creative exchange between two of the genre's most recognizable voices, and gave her catalogue a dancehall credibility it could not have built alone.",
    imagePath: "/images/collaborators/shatta-wale.jpg",
    sourceIds: ["src-shatta-wale", "src-modernghana", "src-graphic-entertainment"],
    tier: "primary",
  },
  {
    id: "sarkodie",
    name: "Sarkodie",
    origin: "Ghanaian rapper, multiple VGMA winner",
    collaboration: "Multiple joint tracks and public appearances",
    year: "across the journey",
    significance:
      "Two of Ghana's most-streamed artists of their generation. Their collaborations sit at the intersection of Ghanaian rap and Afropop — the two dominant strains of the post-2018 scene — and document a direct handoff between the established and the rising.",
    imagePath: "/images/collaborators/sarkodie.jpg",
    sourceIds: ["src-sarkodie", "src-graphic-entertainment", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "mugeez",
    name: "Mugeez",
    origin: "Ghanaian singer (R2Bees)",
    collaboration: "Multiple joint releases across the late 2010s",
    year: "2018 — present",
    significance:
      "Vocalist half of R2Bees and one of the most in-demand hook artists in West African popular music. Their joint tracks bridge Wendy Shay's Afropop with the smoother afrobeats vocal tradition Mugeez represents.",
    imagePath: "/images/collaborators/mugeez.jpg",
    sourceIds: ["src-mugeez", "src-modernghana", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "kelvyn-boy",
    name: "Kelvyn Boy",
    origin: "Ghanaian Afrobeats artist, former Burniton Music signee",
    collaboration: "Joint releases and live appearances",
    year: "2019 — present",
    significance:
      "Represents the post-2018 Afrobeats wave that Wendy Shay's catalogue sits inside. Their collaborations document the sound of the era — the Ghanaian Afrobeats mainstream at its most confident.",
    imagePath: "/images/collaborators/kelvyn-boy.jpg",
    sourceIds: ["src-kelvyn-boy", "src-graphic-entertainment"],
    tier: "reputable",
  },
  {
    id: "mzvee",
    name: "MzVee",
    origin: "Ghanaian Afropop singer, VGMA winner",
    collaboration: "Joint appearances and the broader female-pop conversation",
    year: "across the journey",
    significance:
      "One of the most prominent female voices in the post-2015 Ghanaian pop mainstream. The MzVee–Wendy Shay relationship — collaborative on record, framed as a rivalry by sections of the press — is part of the broader story of how the Ghanaian industry has handled multiple female pop stars operating at the same level.",
    imagePath: "/images/collaborators/mzvee.jpg",
    sourceIds: ["src-mzvee", "src-graphic-entertainment"],
    tier: "reputable",
  },
  {
    id: "efya",
    name: "Efya",
    origin: "Ghanaian singer-songwriter",
    collaboration: "Joint recordings and live appearances",
    year: "across the journey",
    significance:
      "One of Ghana's most respected vocalists. Her collaborations with Wendy Shay demonstrate the range of the contemporary catalogue — the Afropop sound stretched into soulful territory.",
    imagePath: "/images/collaborators/efya.jpg",
    sourceIds: ["src-efya", "src-musicinafrica", "src-graphic-entertainment"],
    tier: "reputable",
  },
  {
    id: "sista-afia",
    name: "Sista Afia",
    origin: "Ghanaian Afropop singer",
    collaboration: "Joint releases and a widely covered 2020 public exchange",
    year: "2019 — 2020",
    significance:
      "A peer and, depending on the outlet, a perceived rival. The 2020 public exchange between the two became, depending on who was writing, either a rivalry narrative or a commentary on how the Ghanaian press frames women in music. The exchange mattered less for its substance than for the way it was amplified.",
    imagePath: "/images/collaborators/sista-afia.jpg",
    sourceIds: ["src-sista-afia", "src-citinewsroom", "src-graphic-entertainment"],
    tier: "reputable",
  },
  {
    id: "stonebwoy",
    name: "Stonebwoy",
    origin: "Ghanaian dancehall artist, VGMA winner",
    collaboration: "Same-era Ghanaian dancehall crossover press coverage",
    year: "across the journey",
    significance:
      "The other major name in Ghanaian dancehall across the same era. The press repeatedly framed Stonebwoy and Wendy Shay as parallel figures operating in adjacent lanes — the male and female faces of a dancehall-tinged Ghanaian mainstream that, before 2018, was largely a male-dominated space. Where they have shared billing and press framing is part of the wider story of who got to headline in that era.",
    imagePath: "/images/collaborators/stonebwoy.jpg",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom"],
    tier: "reputable",
  },
  {
    id: "mavado",
    name: "Mavado",
    origin: "Jamaican dancehall artist",
    collaboration: "'Apology' — Wendy Shay feat. Mavado (single release)",
    year: "2023",
    significance:
      "A documented transatlantic dancehall feature. 'Apology' pairs Wendy Shay with one of Jamaica's signature dancehall voices of the post-2000s generation — a record that placed her catalogue directly in conversation with the genre's Caribbean source tradition. The feature is significant not because it broke her in Jamaica but because it confirmed her dancehall credentials on a record with an artist who carries the genre's name.",
    imagePath: "/images/collaborators/mavado.jpg",
    sourceIds: ["src-mavado", "src-graphic-entertainment", "src-modernghana"],
    tier: "primary",
  },
  {
    id: "shaggy",
    name: "Shaggy",
    origin: "Jamaican reggae-dancehall icon, multiple-Grammy winner",
    collaboration: "Caribbean/West-African crossover press and shared billing",
    year: "across the journey",
    significance:
      "An earlier generation of Caribbean dancehall that the West-African scene grew up sampling. The Shaggy–Wendy Shay conversation — through press coverage and shared diaspora-tour circuits — connects the Ghanaian Afropop wave to the reggae-dancehall tradition that shaped it.",
    imagePath: "/images/collaborators/shaggy.jpg",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    tier: "reputable",
  },
];
