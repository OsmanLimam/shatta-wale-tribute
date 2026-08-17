import type { SourceTier } from "@/lib/types";

/**
 * family.ts — the personal side of Wendy Shay's story.
 *
 * Sourcing principles:
 *  - Where the public record names her children (Korkor Shay, Tracy Shay)
 *    through her own social posts, press interviews, or her management's
 *    public statements, the names are used.
 *  - Where information is partial or only partially verified — for example
 *    the biography of her mother — the language is explicitly hedged and
 *    the project does not fabricate quotes, dates, or anecdotes.
 *  - No childhood anecdotes, no private medical detail, no speculation
 *    about her children's fathers or her private relationships.
 */

export interface FamilyMember {
  id: string;
  /** Display name. */
  name: string;
  /** Relationship to Wendy Shay. */
  relation: string;
  /** What the public record supports — written conservatively. */
  significance: string;
  /**
   * Photo path. Optional — when omitted, the section renders a museum-style
   * PortraitPlaceholder instead of a photograph. Used for family members
   * (her daughters) whose privacy the archive declines to violate by
   * publishing fan-sourced social-media collages that depict minors.
   */
  imagePath?: string;
  /** Source IDs from sources.ts. */
  sourceIds: string[];
  /** Verification tier. */
  tier: SourceTier;
}

export const familyMembers: FamilyMember[] = [
  {
    id: "korkor-shay",
    name: "Korkor Shay",
    relation: "Daughter",
    significance:
      "Wendy Shay has, across her social channels and in scattered press coverage, named Korkor Shay as her daughter. The public mentions are intentionally brief — a passing reference in an interview, an appearance in a birthday post, a thank-you to those who have shown her daughter love. The archive honours the boundary she has set: Korkor is named where the public record has named her, and nothing further is invented. The relationship matters to the legacy because it anchors the artist in a life that extends beyond the catalogue — a mother who is also a hit-maker, and who has chosen which parts of motherhood the public is allowed to see.",
    sourceIds: ["src-wendy-shay-official", "src-graphic-entertainment", "src-modernghana"],
    tier: "primary",
  },
  {
    id: "tracy-shay",
    name: "Tracy Shay",
    relation: "Daughter",
    significance:
      "Named in Wendy Shay's own social posts and in subsequent Ghanaian press coverage as her second daughter. Where Korkor's appearances have been sparse, Tracy has surfaced more visibly — in birthday posts, in family collages shared by the artist, and in fan-archive content that traces Wendy Shay's motherhood alongside her career. The significance is not in the detail but in the simple fact of two daughters, named by their mother in the public record, growing up alongside one of the most consistent release cadences in Ghanaian pop. The archive does not editorialise about their childhood. It records that they exist, that they are named, and that their mother has chosen to share only what she has shared.",
    sourceIds: ["src-wendy-shay-official", "src-graphic-entertainment"],
    tier: "primary",
  },
  {
    id: "wendy-shay-mother",
    name: "Her Mother",
    relation: "Mother",
    significance:
      "Across interviews and her own social posts, Wendy Shay has spoken about her mother in tones that carry weight without giving detail. The mother is present in the background of the story — the woman who raised her between Accra and Germany, who supported the decision to leave nursing for music, and whose name the public record has, until recently, mostly declined to publish out of respect. The most consistent detail across the coverage is not a biographical one — it is the relationship itself. A daughter returning from Europe to commit to a difficult career in Ghana, and a mother whose presence in the periphery of the public story suggests a steadiness that the headlines have never quite captured. The archive does not invent a name. It records that she exists, that the artist has spoken of her with affection, and that the woman who raised one of Ghana's most recognizable female voices of the post-2018 era remains — by her daughter's choice — largely outside the public frame. That choice is itself part of the legacy.",
    imagePath: "/images/wendy-shay/wendy-shay-mom-selfie.jpg",
    sourceIds: ["src-wendy-shay-official", "src-modernghana", "src-pulse-africa"],
    tier: "reputable",
  },
];
