"use client";

import { Section, LegacyImage } from "./primitives";
import { Reveal, MaskText } from "@/lib/legacy/motion";
import { familyMembers } from "@/content/family";
import { sourcesById } from "@/content/sources";

/**
 * ShayFamily — the personal side of the legacy.
 *
 * Renders the family members (Korkor Shay, Tracy Shay, and her mother) with
 * the same editorial care as the rest of the archive: gold-crosshair framing,
 * attribution overlay, conservative sourcing language.
 *
 * The section is intentionally placed between The Moments and The
 * Collaborators so that the personal anchors the public.
 */
export function ShayFamily() {
  return (
    <Section id="shay-family" tone="ink" className="grain sm-watermark gold-glow">
      <div className="mb-16 md:mb-20">
        <Reveal>
          <div className="font-mono-caps mb-5 text-gold">07 — The Family</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ivory-fade">
            Behind the catalogue,
            <br />
            <span className="text-gold/90">a life.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            <MaskText
              text="An archive is incomplete if it records only the public work. Wendy Shay is also a daughter, and a mother of two. This section records what the public record supports — and nothing it does not."
              amount={0.3}
            />
          </p>
        </Reveal>
      </div>

      {/* Intro narrative */}
      <Reveal>
        <div className="mb-16 border-l-2 border-gold/40 pl-6 sm:pl-10">
          <p className="max-w-3xl font-display text-xl italic leading-snug text-ivory sm:text-2xl md:text-[1.7rem] md:leading-[1.3]">
            The career that produced &lsquo;Uber Driver&rsquo;, &lsquo;Survivor&rsquo;,
            the Shay Concert franchise, and an Enigma EP was built in parallel
            with motherhood &mdash; not before it, not after it. Two daughters
            grew up alongside the catalogue. A mother, mostly outside the
            public frame, held the line that made the work possible.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim">
            The project&rsquo;s accuracy protocol reserves this section for
            what the public record has named and what Wendy Shay herself has
            chosen to share. Where the record is silent, this section is
            silent. Where it speaks, it speaks with care.
          </p>
        </div>
      </Reveal>

      {/* Family member cards */}
      <div className="space-y-20 md:space-y-28">
        {familyMembers.map((member, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={member.id}>
              <article className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
                {/* Image side */}
                <div
                  className={
                    reversed
                      ? "md:col-span-5 md:col-start-8 md:order-2"
                      : "md:col-span-5 md:col-start-1 md:order-1"
                  }
                >
                  <LegacyImage
                    src={member.imagePath}
                    alt={`Wendy Shay — ${member.relation} (${member.name}).`}
                    caption={`${member.name} — ${member.relation}.`}
                    className="aspect-[4/5] w-full max-w-md"
                  />
                </div>

                {/* Text side */}
                <div
                  className={
                    reversed
                      ? "md:col-span-6 md:col-start-1 md:row-start-1 md:order-1"
                      : "md:col-span-6 md:col-start-7 md:order-2"
                  }
                >
                  <div className="space-y-6">
                    <div>
                      <div className="font-mono-caps text-gold">
                        {member.relation.toUpperCase()}
                      </div>
                      <h3 className="mt-3 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                        {member.name}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
                      {member.significance}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {member.sourceIds.map((sid) => {
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
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Closing — about her mother (extended story) */}
      <Reveal>
        <div className="mt-24 border-t border-hairline pt-12">
          <div className="mb-6 font-mono-caps text-gold/80">
            A NOTE ON HER MOTHER
          </div>
          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-ivory sm:text-lg">
              Of every figure in Wendy Shay&rsquo;s public story, her mother is
              the one the record approaches most carefully. Across a five-year
              run of interviews, social posts, and Ghanaian press coverage, the
              artist has spoken about her mother in affectionate terms &mdash;
              as the woman who raised her between Accra and Germany, as the
              parent who did not stand in the way of a daughter leaving a
              regulated nursing career for an unregulated music one, as the
              steady presence behind a career that has rarely been described
              as steady.
            </p>
            <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
              The most consistent detail across the coverage is not a
              biographical one &mdash; it is the shape of the relationship
              itself. A daughter returning from Europe to commit to a difficult
              career in Accra. A mother whose presence in the periphery of
              the public story suggests a steadiness the headlines have never
              quite captured. And, perhaps most tellingly, a daughter who has
              chosen, with rare consistency across half a decade of coverage,
              which parts of her mother&rsquo;s life the public is allowed to
              see.
            </p>
            <p className="text-base leading-relaxed text-ivory-dim sm:text-lg">
              The woman who raised one of Ghana&rsquo;s most recognizable
              female voices of the post-2018 era remains, by her
              daughter&rsquo;s choice, largely outside the frame. That choice
              &mdash; in a career built on visibility &mdash; is itself part of
              the legacy. It says something about what the artist has decided
              the public deserves to know, and what she has decided it does
              not. An honest archive records that boundary as a fact, not as a
              gap.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
