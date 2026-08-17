"use client";

import { Section } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";

export function WhyThisExists() {
  return (
    <Section id="why-this-exists" tone="ink" className="sm-watermark gold-glow">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="font-mono-caps mb-4 text-gold">02 — Philosophy</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="block text-ivory">Why</span>
              <span className="block text-ivory-fade">This Exists.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-7">
            <Reveal>
              <p className="font-display text-2xl leading-snug text-ivory sm:text-3xl md:text-[2rem] md:leading-[1.25]">
                <MaskText text="We are very good, as a culture, at preserving people after they are gone." amount={0.5} />
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                We rebuild them from old photographs. We track down interviews
                nobody watched at the time. We argue about which version of them
                was the real one. We say, with the benefit of distance, what
                their work actually meant. We do all of this carefully, and we
                do all of it too late.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                This project challenges that habit. It is an attempt to preserve
                an artist&rsquo;s journey while the artist is still here to read
                it, correct it, and contribute to it. Not as a tribute. Not as
                a forecast. As an archive that admits, openly, that the story
                is still being written.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                It is built around one premise: legacy should not be something
                reconstructed only from memory. If a career matters, it matters
                now &mdash; while the person whose career it is can still see
                that it matters.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="hairline-gold my-10" />
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-2">
                <p className="font-display text-2xl italic leading-snug text-gold sm:text-3xl">
                  &ldquo;You are here. Your story matters now.&rdquo;
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="space-y-1 pt-8">
                <p className="font-display text-xl italic text-ivory sm:text-2xl">
                  This isn&rsquo;t the final version of your story.
                </p>
                <p className="font-display text-xl italic text-ivory sm:text-2xl">
                  It&rsquo;s an invitation to continue writing it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
