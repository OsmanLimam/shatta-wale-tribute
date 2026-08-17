import type { LegacyData } from "@/lib/types";
import { person } from "./person";
import { sources } from "./sources";
import { chapters } from "./journey";
import { musicItems, achievements, quotes } from "./music";
import { moments, archiveItems } from "./moments";
import { letter, contributionFields } from "./letter";

/**
 * legacy.ts — single source of truth for the entire archive.
 * Future profiles (Living Legacies platform) would replace this export
 * with a per-person loader.
 */
export const legacy: LegacyData = {
  person,
  sources,
  chapters,
  achievements,
  mediaItems: [...musicItems, ...archiveItems],
  quotes,
  letter,
  contributionFields,
  documentedMomentsCount: archiveItems.length,
};

export { person, sources, chapters, musicItems, achievements, quotes, moments, archiveItems, letter, contributionFields };
