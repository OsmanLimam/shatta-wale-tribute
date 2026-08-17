"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, LegacyImage, SourceChip, PortraitPlaceholder } from "./primitives";
import { Reveal, usePrefersReducedMotion } from "@/lib/legacy/motion";
import { moments } from "@/content/moments";
import { sourcesById } from "@/content/sources";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Moments() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();
  const moment = moments[active];
  const primarySrc = sourcesById[moment.sourceIds[0]];

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + moments.length) % moments.length);
  };

  return (
    <Section id="moments" tone="ink" className="sm-watermark-bl">
      <div className="mb-14 md:mb-20">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">06 — The Moments</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ivory-fade">
            An exhibition of public moments.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Move through the archive like a museum. Each moment carries its
            date, its context, why it mattered, and the source that anchors it.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Visual stage */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-charcoal sm:aspect-[16/10] lg:aspect-[4/5]">
            <AnimatePresence mode="wait">
              <motion.div
                key={moment.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {moment.imagePath ? (
                  <LegacyImage
                    src={moment.imagePath}
                    alt={`Wendy Shay — ${moment.title} (${moment.year})`}
                    caption={moment.title}
                    className="h-full w-full"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                ) : (
                  <PortraitPlaceholder
                    label={moment.type.toUpperCase()}
                    sublabel={moment.year}
                    className="h-full w-full"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Counter */}
            <div className="absolute bottom-4 left-4 z-10 font-mono-caps text-ivory">
              <span className="text-gold">{String(active + 1).padStart(2, "0")}</span>
              <span className="text-ivory-dim"> / {String(moments.length).padStart(2, "0")}</span>
            </div>

            {/* Nav arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={() => go(-1)}
                className="focus-legacy ml-2 flex h-10 w-10 items-center justify-center border border-hairline bg-ink/60 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
                aria-label="Previous moment"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={() => go(1)}
                className="focus-legacy mr-2 flex h-10 w-10 items-center justify-center border border-hairline bg-ink/60 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
                aria-label="Next moment"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Text panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={moment.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col"
            >
              <div className="font-mono-caps mb-3 text-gold">{moment.year}</div>
              <h3 className="font-display text-3xl leading-snug text-ivory sm:text-4xl">
                {moment.title}
              </h3>
              {moment.location && (
                <div className="mt-3 font-mono-caps text-ivory-dim">
                  {moment.location}
                </div>
              )}
              <p className="mt-5 text-base leading-relaxed text-ivory-dim sm:text-lg">
                {moment.significance}
              </p>

              <div className="mt-auto pt-8">
                <div className="hairline mb-4" />
                <div className="flex flex-wrap gap-2">
                  {moment.sourceIds.map((sid) => {
                    const s = sourcesById[sid];
                    return s ? (
                      <SourceChip key={sid} label={s.tier} tier={s.tier} />
                    ) : null;
                  })}
                </div>
                {primarySrc && (
                  <p className="mt-3 font-mono-caps text-[0.55rem] text-ivory-dim/85">
                    Anchored by: {primarySrc.label}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Thumb strip */}
      <div className="mt-12 flex gap-2 overflow-x-auto pb-4 scrollbar-legacy">
        {moments.map((m, i) => (
          <button
            key={m.id}
            onClick={() => setActive(i)}
            className={cn(
              "focus-legacy flex min-w-[180px] flex-col gap-1 border p-3 text-left transition-colors",
              i === active
                ? "border-gold bg-charcoal"
                : "border-hairline hover:border-ivory/30",
            )}
          >
            <span className="font-mono-caps text-[0.55rem] text-gold">{m.year}</span>
            <span className="font-display text-sm text-ivory line-clamp-2">
              {m.title}
            </span>
          </button>
        ))}
      </div>
    </Section>
  );
}
