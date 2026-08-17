"use client";

import { Section, PortraitPlaceholder } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";
import { achievements } from "@/content/music";
import { sourcesById } from "@/content/sources";

const impactAreas = [
  {
    title: "Ghanaian popular music",
    body: "The breakout era reset the reference point for what a Ghanaian female pop star could sound like, how consistently she could release, and how directly she could speak to women&rsquo;s everyday lives without softening the message for national reach. Younger female artists now operate inside a landscape she helped re-shape.",
    sourceIds: ["src-musicinafrica", "src-graphic-entertainment"],
  },
  {
    title: "Afropop &amp; Afrobeats crossover",
    body: "Her run of singles normalised a dancehall-tinged but locally voiced Afropop as a viable commercial mode for female artists across the region &mdash; a positioning that, before the breakthrough era, was largely occupied by male voices. She made the lane not only visible but commercially sustainable.",
    sourceIds: ["src-musicinafrica", "src-pulse-africa"],
  },
  {
    title: "Female-artist independence",
    body: "The volume-driven release cadence and the unapologetically bold visual identity modelled a path that did not depend on male-co-signed credibility. The blueprint is visible across a generation of Ghanaian and West-African female artists who now release, market, and headline on their own terms &mdash; citing her as the reason they believed it was possible.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
  },
  {
    title: "International visibility",
    body: "Sustained diaspora-facing features and tour dates across Europe, the UK, and North America have placed Ghanaian female pop on international stages that, before her, were rarely accessed by Ghanaian women without a male-led co-sign. The chapter is significant not because it created her stature, but because it confirmed it on a wider stage.",
    sourceIds: ["src-pulse-africa", "src-modernghana"],
  },
  {
    title: "Youth culture & everyday life",
    body: "Across weddings, football viewing centres, clubs, and the everyday vocabulary of young Ghanaian listeners, the music of the breakthrough and reinvention eras became woven into daily life. The cultural footprint is not measured in chart positions alone &mdash; it is measured in how often the songs appear in the background of ordinary days, especially for the women who grew up hearing themselves represented in them.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
  },
];

export function Impact() {
  return (
    <Section id="impact" tone="charcoal" className="grain gold-glow">
      <div className="mb-16 md:mb-24">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">05 — The Impact</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            <span className="block text-ivory">What changed</span>
            <span className="block text-ivory-fade">because she existed?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            The strongest analytical section of this archive. Powerful because
            it is specific &mdash; not because it is exaggerated. No claim
            larger than the evidence that supports it.
          </p>
        </Reveal>
      </div>

      {/* Achievement anchors */}
      <div className="mb-20 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3">
        {achievements.map((ach, i) => (
          <Reveal key={ach.id} delay={i * 0.08}>
            <div className="bg-charcoal p-7 transition-colors hover:bg-charcoal-2">
              <div className="font-mono-caps mb-4 text-gold">{ach.year}</div>
              <h3 className="font-display text-xl leading-snug text-ivory">
                {ach.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
                {ach.significance}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Impact areas */}
      <div className="space-y-12">
        {impactAreas.map((area, i) => (
          <Reveal key={area.title}>
            <article className="grid grid-cols-1 gap-6 border-t border-hairline pt-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-1">
                <span className="font-mono-caps text-gold/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl leading-snug text-ivory sm:text-3xl">
                  <MaskText text={area.title} amount={0.5} />
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                  {area.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.sourceIds.map((sid) => {
                    const s = sourcesById[sid];
                    return s ? (
                      <span
                        key={sid}
                        className="font-mono-caps text-[0.55rem] text-ivory-dim/85"
                      >
                        ● {s.tier}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Honest disclaimer */}
      <Reveal>
        <div className="mt-16 flex items-center gap-6 border border-hairline bg-charcoal/40 p-6">
          <PortraitPlaceholder
            label="Editorial"
            className="hidden h-24 w-24 sm:block"
          />
          <p className="text-sm leading-relaxed text-ivory-dim">
            <span className="font-mono-caps text-gold">On what we did not write:</span>{" "}
            This section resists the temptation to claim that any single artist
            &ldquo;changed Africa forever.&rdquo; The impact documented here is
            specific and traceable. Where evidence is thin, the section is
            silent. Where it is strong, it is plain.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
