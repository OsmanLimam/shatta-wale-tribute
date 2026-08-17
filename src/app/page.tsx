"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/legacy/navigation";
import { ScrollProgress, ChapterIndicator } from "@/components/legacy/scroll-progress";
import { GrainOverlay } from "@/components/legacy/overlays";
import { Hero } from "@/components/legacy/hero";
import { WhyThisExists } from "@/components/legacy/why-this-exists";
import { Journey } from "@/components/legacy/journey";
import { Music } from "@/components/legacy/music";
import { Impact } from "@/components/legacy/impact";
import { Moments } from "@/components/legacy/moments";
import { BeyondHeadlines } from "@/components/legacy/beyond-headlines";
import { Influenced } from "@/components/legacy/influenced";
import { WhatPeopleRemember } from "@/components/legacy/what-people-remember";
import { Archive } from "@/components/legacy/archive";
import { Contribute } from "@/components/legacy/contribute";
import { FutureMessage } from "@/components/legacy/future-message";
import { Letter } from "@/components/legacy/letter";
import { FinalReveal } from "@/components/legacy/final-reveal";
import { AmbientAudio } from "@/components/legacy/ambient-audio";
import { chapters } from "@/content/journey";

export default function Home() {
  const [entered, setEntered] = useState(false);

  // Reveal nav on first scroll past hero, or on explicit enter.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) setEntered(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative bg-ink text-ivory">
      <GrainOverlay />
      <ScrollProgress />
      <ChapterIndicator count={chapters.length} />
      <Navigation entered={entered} />

      <AmbientAudio />

      <Hero onEnter={() => setEntered(true)} />

      <WhyThisExists />

      <Journey />

      <Music />

      <Impact />

      <Moments />

      <BeyondHeadlines />

      <Influenced />

      <WhatPeopleRemember />

      <Archive />

      <Contribute />

      <FutureMessage />

      <Letter />

      <FinalReveal />
    </main>
  );
}
