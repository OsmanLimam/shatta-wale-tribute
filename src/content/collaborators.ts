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
    collaboration: "Joint releases and Shatta Movement-affiliated appearances",
    year: "2018 — present",
    significance:
      "The most prominent cross-label exchange of her career. Shatta Wale — the figure Bullet's RuffTown machine sat adjacent to in the post-2018 Ghanaian pop landscape — brought Wendy Shay into the Shatta Movement network and gave her catalogue a dancehall credibility it could not have built alone.",
    imagePath: "/images/collaborators/shatta-wale.jpg",
    sourceIds: ["src-shatta-wale", "src-modernghana", "src-graphic-entertainment"],
    tier: "reputable",
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
    collaboration: "Joint tracks and Shatta Movement-adjacent appearances",
    year: "across the journey",
    significance:
      "The other major name in Ghanaian dancehall. The Stonebwoy–Wendy Shay creative exchange documents a dancehall credibility that anchors her catalogue in the genre's deeper tradition, even when her own sound tilts toward Afropop.",
    imagePath: "/images/collaborators/stonebwoy.jpg",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom"],
    tier: "reputable",
  },
  {
    id: "medikal",
    name: "Medikal",
    origin: "Ghanaian hip-hop artist",
    collaboration: "Joint tracks and AMG-affiliated releases",
    year: "2019 — present",
    significance:
      "Represents the next generation of Ghanaian rap. Their collaborations document a direct handoff between eras — the artist building the scene working with the artist inheriting it.",
    imagePath: "/images/collaborators/medikal.jpg",
    sourceIds: ["src-modernghana", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "burna-boy",
    name: "Burna Boy",
    origin: "Nigerian afrofusion artist, Grammy winner",
    collaboration: "West-African crossover exchanges and joint appearances",
    year: "across the journey",
    significance:
      "The Nigerian giant of the post-2018 afrobeats wave. The creative exchange between Wendy Shay and Burna Boy is part of the broader Accra–Lagos axis that has come to define West-African popular music for a global audience.",
    imagePath: "/images/collaborators/burna-boy.jpg",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "davido",
    name: "Davido",
    origin: "Nigerian afrobeats artist, DMW founder",
    collaboration: "Joint releases and West-African crossover appearances",
    year: "across the journey",
    significance:
      "A defining voice of modern afrobeats and a fixture of the Accra–Lagos circuit. The Davido–Wendy Shay creative exchange is a thread in the broader Ghana–Nigeria popular-music relationship that has shaped West-African mainstream sound for over a decade.",
    imagePath: "/images/collaborators/davido.jpg",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    tier: "reputable",
  },
];
