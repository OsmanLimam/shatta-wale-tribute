/**
 * Living Legacy — Content Architecture
 * --------------------------------------
 * Reusable, future-proof typed models. The first implementation is
 * Wendy Shay, but the schema is designed so a future "Living Legacies"
 * platform can preserve other extraordinary living Africans without
 * rewriting the component layer.
 */

export type SourceTier = "primary" | "reputable" | "interview" | "editorial";

export interface Source {
  id: string;
  label: string;
  tier: SourceTier;
  publisher?: string;
  url?: string;
  /** Year the source was published, if known. */
  year?: number;
  /** Short note about what this source corroborates. */
  corroborates?: string;
}

export interface Person {
  id: string;
  fullName: string;
  birthName: string;
  /** Stage names / monikers across eras. */
  knownAs: string[];
  birthDate?: string; // ISO
  birthPlace?: string;
  nationality?: string;
  occupations: string[];
  genres: string[];
  tagline: string;
  summary: string;
  /** Independent-project disclosure. */
  disclosure: string;
  createdBy: string;
}

export interface Chapter {
  id: string;
  index: number;
  era: string; // e.g., "THE BREAKTHROUGH"
  periodLabel: string; // e.g., "2012 — 2014"
  headline: string;
  shortNarrative: string;
  body: string[]; // paragraphs
  /** IDs from sources.json that corroborate this chapter. */
  sourceIds: string[];
  /** Optional uncertain/verified flags. */
  verification?: "verified" | "uncertain" | "editorial";
  /** Optional atmospheric image (path under /public) evoking the chapter mood.
   *  Always artistic interpretation — never a photo of a real person. */
  imagePath?: string;
  /** Caption displayed as image attribution. */
  imageCaption?: string;
  /** Optional Ghanaian local-language translation of the headline.
   *  Rendered as a small italic gold line beneath the English headline. */
  headlineLocal?: {
    lang: "GA" | "TWI" | "PIDGIN";
    text: string;
  };
  /** Optional local-language translation of the final body paragraph
   *  (used for the chapter's closing line, where present). */
  closingLocal?: {
    lang: "GA" | "TWI" | "PIDGIN";
    text: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  context: string;
  significance: string;
  sourceIds: string[];
  verification?: "verified" | "uncertain";
}

export interface MediaItem {
  id: string;
  type: "photo" | "performance" | "interview" | "music" | "award" | "milestone" | "appearance" | "cultural";
  title: string;
  year: string;
  location?: string;
  significance: string;
  sourceIds: string[];
  /** Optional embed URL — only official/legal sources. */
  embedUrl?: string;
  /** Optional external link to a legitimate platform. */
  externalUrl?: string;
  attribution?: string;
  /** Optional atmospheric image (path under /public). */
  imagePath?: string;
}

export interface Quote {
  id: string;
  /** Where the quote appeared (publication, broadcast, etc.). */
  source: string;
  date?: string;
  /** Verbatim short quote, used where legally & ethically appropriate. */
  text: string;
  /** Attribution — who said it. */
  attributedTo: string;
  sourceIds: string[];
  verification?: "verified" | "uncertain";
}

export interface ContributionField {
  id: string;
  label: string;
  type: "text" | "voice" | "video" | "photo" | "correction" | "milestone" | "reflection" | "future-message";
  description: string;
  required: boolean;
}

export interface Letter {
  author: string;
  recipient: string;
  title: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  date: string;
  /** Optional local-language greeting rendered under the English salutation. */
  salutationLocal?: {
    lang: "GA" | "TWI" | "PIDGIN";
    text: string;
  };
  /** Optional local-language closing rendered under the English closing. */
  closingLocal?: {
    lang: "GA" | "TWI" | "PIDGIN";
    text: string;
  };
}

export interface LegacyData {
  person: Person;
  sources: Source[];
  chapters: Chapter[];
  achievements: Achievement[];
  mediaItems: MediaItem[];
  quotes: Quote[];
  letter: Letter;
  contributionFields: ContributionField[];
  /** Counter of documented moments for the "time" motif. */
  documentedMomentsCount: number;
}
