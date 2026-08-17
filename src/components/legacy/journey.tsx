"use client";

import { Section, LegacyImage, SourceChip, PortraitPlaceholder } from "./primitives";
import { Reveal, MaskText, usePrefersReducedMotion } from "@/lib/legacy/motion";
import { chapters } from "@/content/journey";
import { sourcesById } from "@/content/sources";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Journey() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="journey" tone="charcoal" className="grain">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">03 — The Journey</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            <span className="block text-ivory-fade">A career, told in eras.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Structured as chapters &mdash; not a year list. Each era earns its
            place in the public record. Where the record is thin, the chapter
            says so.
          </p>
        </Reveal>
      </div>

      {/* Timeline rail */}
      <div className="relative">
        {/* Vertical line — the recurring "time" motif */}
        <div
          className="absolute left-[14px] top-0 h-full w-px bg-ivory/10 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="h-full w-full bg-gradient-to-b from-gold via-gold/60 to-transparent"
          />
        </div>

        <div className="space-y-20 md:space-y-32">
          {chapters.map((chapter, i) => (
            <ChapterBlock
              key={chapter.id}
              chapter={chapter}
              index={i}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface ChapterBlockProps {
  chapter: (typeof chapters)[number];
  index: number;
  reversed: boolean;
}

function ChapterBlock({ chapter, index, reversed }: ChapterBlockProps) {
  const isEditorial = chapter.verification === "editorial";

  return (
    <article
      data-chapter-index={chapter.index}
      className="relative pl-12 md:grid md:grid-cols-2 md:items-center md:gap-16 md:pl-0"
      id={`journey-${chapter.id}`}
    >
      {/* Chapter node on the rail */}
      <div
        className="absolute left-[7px] top-2 z-10 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <span className="block h-[15px] w-[15px] rotate-45 border border-gold bg-ink" />
      </div>

      {/* Visual / index side */}
      <div className={cn("mb-8 md:mb-0", reversed ? "md:order-2" : "md:order-1")}>
        <Reveal variants={{
          hidden: { opacity: 0, x: reversed ? 30 : -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
        }}>
          <div className="space-y-5">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-gold/30">
                {String(chapter.index).padStart(2, "0")}
              </span>
              <span className="font-mono-caps text-gold">{chapter.periodLabel}</span>
            </div>

            {chapter.imagePath ? (
              <LegacyImage
                src={chapter.imagePath}
                alt={`Shatta Wale — ${chapter.era} era (${chapter.periodLabel})`}
                caption={chapter.imageCaption}
                className="aspect-[4/5] w-full max-w-sm"
              />
            ) : (
              <PortraitPlaceholder
                label={chapter.era}
                sublabel={`Chapter ${chapter.index}`}
                className="aspect-[4/5] w-full max-w-sm"
              />
            )}
          </div>
        </Reveal>
      </div>

      {/* Text side */}
      <div className={cn(reversed ? "md:order-1" : "md:order-2")}>
        <Reveal variants={{
          hidden: { opacity: 0, x: reversed ? -30 : 30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
        }}>
          <div className="space-y-5">
            <div className="font-mono-caps text-ivory-dim">
              {chapter.era}
            </div>
            <h3 className="font-display text-3xl leading-[1.1] text-ivory sm:text-4xl md:text-[2.5rem]">
              <MaskText text={chapter.headline} amount={0.4} />
            </h3>
            <p className="text-base leading-relaxed text-ivory sm:text-lg">
              {chapter.shortNarrative}
            </p>

            <div className="space-y-4 pt-2">
              {chapter.body.map((para, pi) => (
                <p
                  key={pi}
                  className="text-[0.95rem] leading-relaxed text-ivory-dim sm:text-base"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Verification flag */}
            {isEditorial && (
              <div className="pt-3">
                <span className="inline-flex items-center gap-2 border border-hairline px-3 py-1 font-mono-caps text-clay">
                  ● Editorial interpretation
                </span>
              </div>
            )}

            {/* Sources */}
            <div className="flex flex-wrap gap-2 pt-4">
              {chapter.sourceIds.map((sid) => {
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
        </Reveal>
      </div>
    </article>
  );
}
