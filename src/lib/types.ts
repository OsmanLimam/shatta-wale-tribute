/**
 * Living Legacy — Content Architecture
 * --------------------------------------
 * Reusable, future-proof typed models. The first implementation is
 * Shatta Wale, but the schema is designed so a future "Living Legacies"
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
  verification?: "verified" | "uncertain";
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
