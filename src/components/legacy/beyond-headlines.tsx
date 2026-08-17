"use client";

import { Section, LegacyImage } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";

export function BeyondHeadlines() {
  return (
    <Section id="beyond-headlines" tone="charcoal" className="grain">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="font-mono-caps mb-5 text-gold">07 — Beyond The Headlines</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.98]">
              <span className="block text-ivory">What gets lost</span>
              <span className="block text-ivory-fade">when a person becomes</span>
              <span className="block text-ivory">a headline?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <LegacyImage
                src="/images/beyond-headlines.jpg"
                alt="Artistic interpretation: a blurred figure behind frosted glass, evoking a person obscured by public noise."
                caption="A person behind the headlines — original artwork, not a photograph."
                className="aspect-[4/5] w-full max-w-md"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-7">
            <Reveal>
              <p className="font-display text-2xl italic leading-snug text-gold sm:text-3xl">
                <MaskText
                  text="People remember celebrities through headlines, controversies, viral moments, and social media. This is the cost of that habit."
                  amount={0.4}
                />
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                A two-decade career is, in the public imagination, frequently
                compressed into a handful of clips &mdash; a stage moment, a
                soundbite, a tweet, a feud. The arc disappears. The choices
                that built the work disappear. The pattern of reinvention,
                release, and renewal that actually defines the career is
                replaced by whatever the algorithm surfaced most recently.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                This section does not defend him. It does not attack him. It
                does not produce propaganda. It simply asks the question that
                any honest archive of a public figure has to ask: when the
                headlines fade, what is left?
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                What is left, in this case, is a documented body of work, a
                sustained fan institution, a rebrand that reset a national
                scene, and a chapter &mdash; the Beyoncé collaboration &mdash;
                that placed Ghanaian dancehall on a global pop stage. The
                headlines are real, but they are not the whole of the record.
                The record is what this project is for.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="hairline-gold my-8" />
            </Reveal>

            <Reveal delay={0.3}>
              <p className="font-display text-xl italic leading-snug text-ivory sm:text-2xl">
                The headlines will continue. The work continues beneath them.
                This archive keeps its eyes on the work.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
