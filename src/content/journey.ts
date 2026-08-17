import type { Chapter } from "@/lib/types";

/**
 * journey.ts — verified chapters of Shatta Wale's career, structured as eras.
 *
 * Sourcing notes:
 *  - Every chapter ties to at least one entry in sources.ts via `sourceIds`.
 *  - Where biographical detail is widely reported but not officially
 *    confirmed, the chapter is marked `verification: "uncertain"` and the
 *    UI surfaces that flag explicitly.
 *  - No childhood anecdotes, family details, or private events are included.
 */

export const chapters: Chapter[] = [
  {
    id: "before-the-name",
    index: 1,
    era: "Before the Name",
    periodLabel: "1984 — early 2000s",
    headline: "A boy from Accra, before the world knew the name.",
    shortNarrative:
      "Charles Nii Armah Mensah Jr. was born in Accra on 17 October 1984. Long before the rebrand, before the stadium crowds and the gold chains, there was a young man trying to find a way into music.",
    body: [
      "Public records and consistent reporting across Ghanaian outlets place his birth in Accra on 17 October 1984. Beyond that, the verified record of his early years is thin — and this project will not invent what is not known.",
      "What is documented is that he spent years attempting to break into Ghana's music industry before reaching public recognition. Early musical development was a long apprenticeship: writing, recording, performing wherever possible, and learning the unforgiving economics of the Ghanaian industry from the inside.",
      "This chapter is intentionally short. The further back we go, the less the public record supports. The integrity of the archive depends on knowing where to stop.",
    ],
    sourceIds: ["src-ghanaweb-profile", "src-musicinafrica", "src-myjoyonline-biography"],
    verification: "verified",
  },
  {
    id: "the-first-dream",
    index: 2,
    era: "The First Dream",
    periodLabel: "mid-2000s",
    headline: "The first name he gave the world was Bandana.",
    shortNarrative:
      "Under the name Bandana, he released his first widely circulated single. The song found regional traction — but the first dream stalled, and for a time the public presence went quiet.",
    body: [
      "Under the stage name Bandana, he released 'Moko Hoo' — a track that gained airplay on Ghanaian radio and introduced his voice to listeners for the first time. For a brief moment, the door to the industry appeared to be opening.",
      "Then it closed. The early career stalled: disputes with the label, a disappearing single, a quiet period during which most of the public forgot the name entirely. Many artists do not survive this chapter.",
      "What matters, in retrospect, is what happened during the silence. The work continued. The plan widened. The next name he chose would not be forgotten.",
    ],
    sourceIds: ["src-myjoyonline-biography", "src-musicinafrica", "src-graphic-entertainment"],
    verification: "verified",
  },
  {
    id: "the-breakthrough",
    index: 3,
    era: "The Breakthrough",
    periodLabel: "2012 — 2014",
    headline: "He returned as Shatta Wale. Everything changed.",
    shortNarrative:
      "The rebrand from Bandana to Shatta Wale coincided with a run of dancehall singles that rewired the Ghanaian scene. 'Dancehall King' became a defining anthem and, in 2014, the Vodafone Ghana Music Awards named him Artiste of the Year.",
    body: [
      "The rebrand was total. New name, new visual identity, new sonic direction — a harder, more direct dancehall built for Ghanaian streets, patois-inflected but unmistakably local in its references and language.",
      "'Dancehall King' became the song people point to when they describe the moment he arrived. It was the right record at the right time, and it became an anthem that mapped directly onto a generation's sense of itself.",
      "The 2014 Vodafone Ghana Music Awards formalised what the streets already knew: he was named Artiste of the Year. It was the official confirmation of an unofficial coronation that had been underway for months.",
      "From here forward, the trajectory changes. He is no longer the artist trying to break in — he is the artist other artists are measured against.",
    ],
    sourceIds: ["src-vgma-2014", "src-myjoyonline-biography", "src-graphic-entertainment", "src-citinewsroom"],
    verification: "verified",
  },
  {
    id: "the-reinvention",
    index: 4,
    era: "The Reinvention",
    periodLabel: "2015 — 2017",
    headline: "Releases multiplied. The image hardened into an institution.",
    shortNarrative:
      "Across a run of singles, EPs, and full projects, Shatta Wale built an output engine and a visual identity that was instantly recognisable. The Shatta Movement fan base solidified into something closer to a movement than a fan club.",
    body: [
      "Where most Ghanaian artists operated on the album cycle, he released constantly — a strategy borrowed from dancehall's release culture and adapted to the local context. The audience learned to expect new music almost monthly, and the algorithm rewarded the volume.",
      "Songs like 'Kakai', 'Ayoo', and 'Baby (Chop Kiss)' extended the reach of the breakthrough era into something more durable. Each one entered the rotation at weddings, in clubs, at football viewing centres — the daily soundtrack of ordinary Ghanaian life.",
      "The Shatta Movement, his fan base, became its own phenomenon. Organised, vocally loyal, and present at every public appearance, the Movement operated less like a fan club and more like a cultural institution with the artist at its centre.",
      "This is the chapter where the artist became the brand. Not in a marketing sense — in a deeper one. The look, the name, the gestures, the Movement: they fused into a single identity that was impossible to separate.",
    ],
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-modernghana", "src-musicinafrica"],
    verification: "verified",
  },
  {
    id: "the-rise",
    index: 5,
    era: "The Rise",
    periodLabel: "2018 — 2020",
    headline: "From Accra to the world: the Beyoncé collaboration.",
    shortNarrative:
      "In 2019, Beyoncé's The Lion King: The Gift featured Shatta Wale alongside Major Lazer on 'Already'. It was the moment Ghanaian dancehall landed on a global pop stage.",
    body: [
      "The call from Beyoncé's team was, by any measure, an inflection point. 'Already' — a track on The Lion King: The Gift, the curated album that brought African artists onto a Disney-released, globally marketed project — placed Shatta Wale alongside the biggest name in contemporary pop.",
      "When the visual component was released in 2020, the imagery travelled further. The song charted. Western press that had never previously engaged with Ghanaian dancehall now had a reason to write about it.",
      "This was not, however, the beginning of his importance — it was the moment the rest of the world noticed what Ghana already knew. The chapter is significant not because it created his stature, but because it confirmed it on a wider stage.",
      "What followed was a sustained run of international visibility: features, festival headlines, and a class of younger artists growing up citing him as the reason they believed a Ghanaian dancehall act could travel.",
    ],
    sourceIds: ["src-beyonce-lionking", "src-billboard-chart-2020", "src-bbc-africa", "src-complex-2020", "src-pulse-africa"],
    verification: "verified",
  },
  {
    id: "the-controversies",
    index: 6,
    era: "The Controversies",
    periodLabel: "across the journey",
    headline: "A public career is also a public record of friction.",
    shortNarrative:
      "Shatta Wale's career has been accompanied by well-documented friction with industry bodies, fellow artists, and the press. This chapter does not editorialise. It records that the friction exists, because omitting it would be a less honest archive.",
    body: [
      "Across the journey, public disputes with the VGMA organisers, with fellow artists, and with sections of the press have been regular features of the news cycle around him. These are part of the record and are documented in the major Ghanaian outlets cited throughout this project.",
      "This archive takes no side. The role of a legacy document is not to defend or to prosecute — it is to record. The controversies are noted because they are part of the public story; they are not amplified because they are not the whole of the story.",
      "Where specific allegations appear in the public record, this project either does not repeat them or clearly marks the uncertainty. Sensationalism is a separate genre. This is not that genre.",
    ],
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom", "src-myjoyonline-biography"],
    verification: "verified",
  },
  {
    id: "the-movement",
    index: 7,
    era: "The Movement",
    periodLabel: "ongoing",
    headline: "More than a fan base — Shatta Movement as a cultural institution.",
    shortNarrative:
      "The Shatta Movement is the throughline of the entire career. It is not an audience that arrived with a hit and left with the next — it is a constituency that has stayed, organised, and grown for over a decade.",
    body: [
      "Shatta Movement is rare in Ghanaian popular music: a fan base organised enough to function as an institution. It has its own visual language, its own rituals, its own internal hierarchies — and it has persisted across multiple eras of the artist's work.",
      "The Movement has filled stadiums for self-organised concerts, mobilised for charity, defended the artist in public disputes, and provided the daily visibility that has allowed him to release at the volume he does.",
      "Most fan bases are an effect. Shatta Movement is closer to a cause. Understanding the career without understanding the Movement is not possible.",
    ],
    sourceIds: ["src-graphic-entertainment", "src-modernghana", "src-pulse-africa"],
    verification: "verified",
  },
  {
    id: "today",
    index: 8,
    era: "Today",
    periodLabel: "now",
    headline: "The story continues. The page is still being written.",
    shortNarrative:
      "Shatta Wale remains active — releasing, performing, building. This chapter is intentionally open: it is the place where today's events will continue to be recorded, and where the subject of the archive is invited to add what the public record cannot know.",
    body: [
      "At the time of writing, Shatta Wale continues to release music, perform, and shape the public conversation around Ghanaian popular culture. The specifics of today will, in time, become the verified facts of a future chapter.",
      "This is where the living-legacy premise becomes operational. Most archives fill in 'today' only after the person is gone. This project refuses that delay. The page is open now. The story continues — and the person whose story it is, is here to see it.",
      "If you are Shatta Wale reading this: this chapter is yours. What comes next is up to you.",
    ],
    sourceIds: ["src-editorial-legacy", "src-shatta-official"],
    verification: "editorial",
  },
];
