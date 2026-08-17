"use client";

import { Section, LegacyImage, SourceChip } from "./primitives";
import { Reveal } from "@/lib/legacy/motion";
import { collaborators } from "@/content/collaborators";
import { sourcesById } from "@/content/sources";

/**
 * Collaborators — verified collaborations with other artists.
 *
 * Layout: editorial grid of cards. Each card has the collaborator's portrait
 * (gold crosshair framed, like the Journey images), name, origin label,
 * the verified collaboration, year, and a significance paragraph.
 *
 * Sources are surfaced as chips under each entry.
 */
export function Collaborators() {
  return (
    <Section id="collaborators" tone="charcoal" className="grain">
      {/* Section header */}
      <div className="mb-16 md:mb-20">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">
            08 — The Collaborators
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ivory-fade">
            The reach of the work.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            A career is partly the people who choose to work with you. These
            are the artists whose credits intersect with Wendy Shay&rsquo;s
            &mdash; documented collaborations across Ghanaian popular music,
            West African crossover, and the post-2018 Afropop mainstream.
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {collaborators.map((c, i) => (
          <Reveal
            key={c.id}
            delay={Math.min(i * 0.04, 0.2)}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <article className="group flex h-full flex-col">
              {/* Portrait — landscape-friendly aspect so we don't crop heads off */}
              <LegacyImage
                src={c.imagePath}
                alt={`${c.name} — ${c.origin}.`}
                caption={`${c.name} — ${c.year}.`}
                className="aspect-[4/3] w-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Text block */}
              <div className="mt-6 flex flex-1 flex-col space-y-3">
                <div>
                  <h3 className="font-display text-2xl leading-tight text-ivory sm:text-3xl">
                    {c.name}
                  </h3>
                  <p className="mt-1 font-mono-caps text-[0.6rem] text-gold">
                    {c.origin}
                  </p>
                </div>

                <div className="border-l-2 border-gold/40 pl-4">
                  <p className="text-sm leading-relaxed text-ivory">
                    <span className="font-mono-caps text-[0.55rem] text-gold/70">
                      COLLABORATION · {c.year}
                    </span>
                    <br />
                    {c.collaboration}
                  </p>
                </div>

                <p className="text-[0.9rem] leading-relaxed text-ivory-dim">
                  {c.significance}
                </p>

                {/* Sources */}
                <div className="mt-auto flex flex-wrap items-start gap-2 pt-4">
                  {c.sourceIds.map((sid) => {
                    const src = sourcesById[sid];
                    if (!src) return null;
                    return (
                      <SourceChip
                        key={sid}
                        label={src.tier}
                        tier={src.tier}
                      />
                    );
                  })}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Closing line */}
      <Reveal delay={0.2}>
        <div className="mt-20 border-t border-hairline pt-10">
          <p className="font-display text-xl italic leading-snug text-gold sm:text-2xl">
            Each credit is a thread. The threads together form the texture of
            the work &mdash; across Accra, Lagos, Kingston, and beyond.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
