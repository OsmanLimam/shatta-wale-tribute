"use client";

import { useMemo, useState } from "react";
import { Section, SourceChip, LegacyImage } from "./primitives";
import { Reveal } from "@/lib/legacy/motion";
import { archiveItems } from "@/content/moments";
import { sourcesById } from "@/content/sources";
import { cn } from "@/lib/utils";

const TYPE_FILTERS = [
  { id: "all", label: "All" },
  { id: "milestone", label: "Milestones" },
  { id: "music", label: "Music" },
  { id: "award", label: "Awards" },
  { id: "cultural", label: "Cultural" },
  { id: "performance", label: "Performances" },
  { id: "appearance", label: "Appearances" },
  { id: "interview", label: "Interviews" },
] as const;

type FilterId = (typeof TYPE_FILTERS)[number]["id"];

export function Archive() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return archiveItems
      .filter((item) => filter === "all" || item.type === filter)
      .filter((item) =>
        query.trim() === ""
          ? true
          : `${item.title} ${item.significance} ${item.year} ${item.location ?? ""}`
              .toLowerCase()
              .includes(query.toLowerCase()),
      )
      .sort((a, b) => (a.year < b.year ? -1 : 1));
  }, [filter, query]);

  return (
    <Section id="archive" tone="ink">
      <div className="mb-12 md:mb-16">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">12 — The Archive</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ivory-fade">
            A real archive. Not a Pinterest board.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Each item carries metadata: year, event, location, significance,
            source. Filterable, searchable, sortable. The goal is the rigour of
            a museum catalogue &mdash; not the randomness of a feed.
          </p>
        </Reveal>
      </div>

      {/* Controls */}
      <Reveal>
        <div className="mb-10 flex flex-col gap-5 border-y border-hairline py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "focus-legacy border px-3 py-1.5 font-mono-caps transition-colors",
                  filter === f.id
                    ? "border-gold bg-gold text-ink"
                    : "border-hairline text-ivory-dim hover:border-ivory/40 hover:text-ivory",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the archive…"
            className="focus-legacy w-full border border-hairline bg-charcoal px-4 py-2.5 text-sm text-ivory placeholder:text-ivory-dim/75 lg:w-72"
            aria-label="Search archive"
          />
        </div>
      </Reveal>

      {/* Counter */}
      <Reveal>
        <div className="mb-6 font-mono-caps text-ivory-dim">
          {String(filtered.length).padStart(2, "0")} / {String(archiveItems.length).padStart(2, "0")}{" "}
          documented moments
        </div>
      </Reveal>

      {/* Grid */}
      {filtered.length === 0 ? (
        <Reveal>
          <div className="border border-hairline bg-charcoal/40 p-12 text-center">
            <p className="font-display text-2xl italic text-ivory-dim">
              No entries match this filter.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setQuery("");
              }}
              className="mt-5 font-mono-caps text-gold hover:underline focus-legacy"
            >
              Reset filters
            </button>
          </div>
        </Reveal>
      ) : (
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={Math.min(i * 0.04, 0.3)}>
              <article className="group flex h-full flex-col bg-charcoal transition-colors hover:bg-charcoal-2">
                {item.imagePath && (
                  <LegacyImage
                    src={item.imagePath}
                    alt={`Artistic interpretation: ${item.title}`}
                    showAttribution={false}
                    className="aspect-[16/10] w-full border-b border-hairline"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-caps text-gold">{item.year}</span>
                    <span className="font-mono-caps text-ivory-dim/85">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ivory">
                    {item.title}
                  </h3>
                {item.location && (
                  <div className="mt-2 font-mono-caps text-[0.55rem] text-ivory-dim/85">
                    {item.location}
                  </div>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-dim">
                  {item.significance}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.sourceIds.slice(0, 2).map((sid) => {
                    const s = sourcesById[sid];
                    return s ? (
                      <SourceChip key={sid} label={s.tier} tier={s.tier} />
                    ) : null;
                  })}
                </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
