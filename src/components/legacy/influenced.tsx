"use client";

import { Section } from "./primitives";
import { Reveal } from "@/lib/legacy/motion";
import { quotes } from "@/content/music";
import { sourcesById } from "@/content/sources";

export function Influenced() {
  return (
    <Section id="influenced" tone="ink">
      <div className="mb-16 md:mb-20">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">09 — Influence</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ivory-fade">
            The reach of the work.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Documented where credible evidence exists. No invented
            relationships, no fabricated testimonials. Short attributed quotes
            only where they appear in the public record.
          </p>
        </Reveal>
      </div>

      {/* Honest framing about scope */}
      <Reveal>
        <div className="border border-hairline bg-charcoal/40 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-ivory sm:text-lg">
            A career of this scale influences more people than any archive can
            enumerate. The most defensible claim this section can make is the
            one the public record supports: across more than a decade of
            consistent output, a generation of younger Ghanaian and West African
            artists has grown up with his work as a reference point &mdash; for
            the sound, for the release cadence, and for the possibility of an
            independent career at scale.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
            Specific named artists are not enumerated here. The verification
            cost of attributing direct influence to a named third party is
            high, and the project&rsquo;s accuracy protocol reserves such claims
            for cases where on-record attribution exists. This is the honest
            version of the section.
          </p>
        </div>
      </Reveal>

      {/* Quotes — clearly labeled editorial or on-record */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {quotes.map((q, i) => (
          <Reveal key={q.id} delay={i * 0.1}>
            <figure className="flex h-full flex-col border border-hairline bg-charcoal p-7">
              <div className="font-mono-caps mb-5 text-gold">
                {q.verification === "editorial" ? "Editorial" : "On record"}
                {q.date ? ` · ${q.date}` : ""}
              </div>
              <blockquote className="flex-1 font-display text-xl italic leading-snug text-ivory sm:text-2xl">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 space-y-2">
                <div className="font-mono-caps text-ivory-dim">{q.attributedTo}</div>
                <div className="text-sm text-ivory-dim/70">Source: {q.source}</div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {q.sourceIds.map((sid) => {
                    const s = sourcesById[sid];
                    return s ? (
                      <span
                        key={sid}
                        className="font-mono-caps text-[0.55rem] text-ivory-dim/70"
                      >
                        ● {s.tier}
                      </span>
                    ) : null;
                  })}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
