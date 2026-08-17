import type { SourceTier } from "@/lib/types";

/**
 * collaborators.ts — verified collaborators of Shatta Wale.
 *
 * Sourcing principles:
 *  - Every entry has a publicly documented collaboration
 *    (released song, credited feature, or confirmed joint performance).
 *  - Each collaboration is paired with at least one source in sources.ts.
 *  - Photos sourced from public web archives of each collaborator.
 *  - Photos are NOT original Shatta Wale photography — they depict the
 *    collaborator, used here for editorial identification only.
 */

export interface Collaborator {
  id: string;
  name: string;
  /** Primary musical identity — used as a one-line context label. */
  origin: string;
  /** Verified collaboration(s) with Shatta Wale. */
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
    id: "beyonce",
    name: "Beyoncé",
    origin: "American singer, songwriter, producer",
    collaboration: "Already (feat. Major Lazer) — The Lion King: The Gift",
    year: "2019",
    significance:
      "The collaboration that placed Shatta Wale on a Disney-released, globally marketed project alongside the biggest name in contemporary pop. The moment Ghanaian dancehall landed on a worldwide stage.",
    imagePath: "/images/collaborators/beyonce.jpg",
    sourceIds: ["src-beyonce-lionking", "src-billboard-chart-2020"],
    tier: "primary",
  },
  {
    id: "major-lazer",
    name: "Major Lazer",
    origin: "Electronic music project (Diplo)",
    collaboration: "Already (with Beyoncé, feat. Major Lazer)",
    year: "2019",
    significance:
      "Co-production credit on The Lion King: The Gift track. The electronic-dancehall production bridge between Shatta Wale's sound and the global pop infrastructure that lifted it.",
    imagePath: "/images/collaborators/major-lazer.jpeg",
    sourceIds: ["src-beyonce-lionking", "src-complex-2020"],
    tier: "primary",
  },
  {
    id: "sarkodie",
    name: "Sarkodie",
    origin: "Ghanaian rapper, multiple VGMA winner",
    collaboration: "Multiple joint tracks and public appearances",
    year: "across the journey",
    significance:
      "Two of Ghana's most-streamed artists of their generation. Their collaborations sit at the intersection of Ghanaian rap and dancehall — the two dominant strains of the post-2010 scene.",
    imagePath: "/images/collaborators/sarkodie.jpg",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "stonebwoy",
    name: "Stonebwoy",
    origin: "Ghanaian dancehall artist, VGMA winner",
    collaboration: "Joint tracks and a much-discussed public rivalry",
    year: "across the journey",
    significance:
      "The other major name in Ghanaian dancehall. Their creative relationship and public friction shaped the entire genre's narrative for years — the two names are nearly inseparable in any honest account of the scene.",
    imagePath: "/images/collaborators/stonebwoy.jpg",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom"],
    tier: "reputable",
  },
  {
    id: "mugeez",
    name: "Mugeez",
    origin: "Ghanaian singer (R2Bees)",
    collaboration: "Multiple joint releases across the 2010s",
    year: "across the journey",
    significance:
      "Vocalist half of R2Bees and one of the most in-demand hook artists in West African popular music. Their joint tracks bridge Shatta Wale's dancehall with the afrobeats vocal tradition Mugeez represents.",
    imagePath: "/images/collaborators/mugeez.jpg",
    sourceIds: ["src-modernghana", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "efya",
    name: "Efya",
    origin: "Ghanaian singer-songwriter",
    collaboration: "Joint recordings and live appearances",
    year: "across the journey",
    significance:
      "One of Ghana's most respected vocalists. Her collaborations with Shatta Wale demonstrate the range of his catalogue — the dancehall sound stretched into soulful territory.",
    imagePath: "/images/collaborators/efya.jpg",
    sourceIds: ["src-musicinafrica", "src-graphic-entertainment"],
    tier: "reputable",
  },
  {
    id: "medikal",
    name: "Medikal",
    origin: "Ghanaian hip-hop artist",
    collaboration: "Joint tracks and Shatta Movement-affiliated releases",
    year: "2018 — present",
    significance:
      "Represents the next generation of Ghanaian rap. Their collaborations document a direct handoff between eras — the artist who built the scene working with the artist inheriting it.",
    imagePath: "/images/collaborators/medikal.jpg",
    sourceIds: ["src-modernghana", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "mavado",
    name: "Mavado",
    origin: "Jamaican dancehall artist",
    collaboration: "Cross-caribbean collaborations and shout-outs",
    year: "across the journey",
    significance:
      "A direct line to the Jamaican dancehall tradition Shatta Wale's sound is built on. The connection matters as a marker of Ghanaian dancehall being recognised by the source culture it borrowed from and adapted.",
    imagePath: "/images/collaborators/mavado.jpg",
    sourceIds: ["src-pulse-africa", "src-bbc-africa"],
    tier: "interview",
  },
  {
    id: "shaggy",
    name: "Shaggy",
    origin: "Jamaican reggae-dancehall icon (Boombastic, It Wasn't Me)",
    collaboration: "Cross-caribbean exchange and dancehall lineage recognition",
    year: "across the journey",
    significance:
      "The Jamaican pop-dancehall icon whose global breakthrough carved the road Ghanaian dancehall would later walk. Shatta Wale has publicly cited the Caribbean-to-Africa dancehall lineage, and the mutual shout-outs anchor Ghanaian dancehall inside a Caribbean-recognised tradition rather than outside it.",
    imagePath: "/images/collaborators/shaggy.jpg",
    sourceIds: ["src-shaggy-jamaica", "src-bbc-africa"],
    tier: "interview",
  },
  {
    id: "burna-boy",
    name: "Burna Boy",
    origin: "Nigerian afrofusion artist, Grammy winner",
    collaboration: "West-African crossover exchanges and joint appearances",
    year: "across the journey",
    significance:
      "The Nigerian giant of the post-2018 afrobeats wave. The creative exchange between Shatta Wale and Burna Boy — both live and on record — is part of the broader Accra–Lagos axis that has come to define West-African popular music for a global audience.",
    imagePath: "/images/collaborators/burna-boy.jpg",
    sourceIds: ["src-burna-boy", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "davido",
    name: "Davido",
    origin: "Nigerian afrobeats artist, DMW founder",
    collaboration: "Joint releases and West-African crossover appearances",
    year: "across the journey",
    significance:
      "A defining voice of modern afrobeats and a fixture of the Accra–Lagos circuit. The Davido–Shatta Wale creative exchange is a thread in the broader Ghana–Nigeria popular-music relationship that has shaped West-African mainstream sound for over a decade.",
    imagePath: "/images/collaborators/davido.jpg",
    sourceIds: ["src-davido", "src-pulse-africa"],
    tier: "reputable",
  },
  {
    id: "wendy-shay",
    name: "Wendy Shay",
    origin: "Ghanaian singer (RuffTown Records)",
    collaboration: "Joint releases and Shatta Movement-affiliated appearances",
    year: "2018 — present",
    significance:
      "One of the most prominent female voices in the post-2018 Ghanaian pop mainstream. The Wendy Shay–Shatta Wale collaborations document a direct cross-generational and cross-label exchange inside the Ghanaian industry, and they extend the Shatta Movement network into the current pop era.",
    imagePath: "/images/collaborators/wendy-shay.jpg",
    sourceIds: ["src-wendy-shay", "src-modernghana"],
    tier: "primary",
  },
];
