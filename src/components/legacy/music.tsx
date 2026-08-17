"use client";

import { Section, SourceChip } from "./primitives";
import { Reveal } from "@/lib/legacy/motion";
import { musicItems } from "@/content/music";
import { sourcesById } from "@/content/sources";
import { ExternalLink } from "lucide-react";

export function Music() {
  return (
    <Section id="music" tone="ink" className="sm-watermark gold-glow">
      <div className="mb-16 md:mb-20">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">04 — The Music</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ivory-fade">
            Tracks that earned their place.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Organised by significance, not by album. For each entry: why it
            matters historically or culturally, with verified context. Audio is
            not redistributed; tracks link to legitimate platforms.
          </p>
        </Reveal>
      </div>

      <ol className="divide-y divide-hairline border-y border-hairline">
        {musicItems.map((item, i) => {
          const primarySrc = sourcesById[item.sourceIds[0]];
          return (
            <li key={item.id} className="group">
              <Reveal>
                <article className="grid grid-cols-1 gap-6 py-10 transition-colors hover:bg-charcoal/40 md:grid-cols-12 md:gap-10 md:py-12">
                  {/* Index + year */}
                  <div className="md:col-span-3">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-gold/65 sm:text-4xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono-caps text-gold">{item.year}</span>
                    </div>
                  </div>

                  {/* Title + significance */}
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl leading-snug text-ivory sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory-dim">
                      {item.significance}
                    </p>
                  </div>

                  {/* Source + link */}
                  <div className="md:col-span-3 md:text-right">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.sourceIds.slice(0, 2).map((sid) => {
                        const s = sourcesById[sid];
                        return s ? (
                          <SourceChip key={sid} label={s.tier} tier={s.tier} />
                        ) : null;
                      })}
                    </div>
                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-mono-caps text-ivory transition-colors hover:text-gold focus-legacy md:mt-6"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Listen on official platforms
                      </a>
                    )}
                    {primarySrc?.attribution && (
                      <p className="mt-2 font-mono-caps text-[0.55rem] text-ivory-dim/85">
                        {primarySrc.attribution}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
