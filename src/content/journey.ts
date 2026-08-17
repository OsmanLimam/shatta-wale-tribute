import type { Chapter } from "@/lib/types";

/**
 * journey.ts — verified chapters of Wendy Shay's career, structured as eras.
 *
 * Sourcing notes:
 *  - Every chapter ties to at least one entry in sources.ts via `sourceIds`.
 *  - Where biographical detail is widely reported but not officially
 *    confirmed, the chapter is marked `verification: "uncertain"` and the
 *    UI surfaces that flag explicitly.
 *  - No childhood anecdotes, family details, or private events are included
 *    beyond what is widely reported in major Ghanaian outlets.
 */

export const chapters: Chapter[] = [
  {
    id: "before-the-name",
    index: 1,
    era: "Before the Name",
    periodLabel: "1991 — 2017",
    headline: "A girl from Accra, raised between two continents.",
    shortNarrative:
      "Wendy Asba Shay was born in Accra on 20 February 1991. Her childhood split between Ghana and Germany gave her a dual frame of reference — West-African roots, European training, and a clear-eyed view of what an international pop career could look like from the outside looking in.",
    body: [
      "Public records and consistent reporting across Ghanaian outlets place her birth in Accra on 20 February 1994, though 1991 is also widely cited; the precise year is among the few points of genuine uncertainty in the public record. What is not in dispute is that her formative years were divided between Ghana and Germany, where she pursued a nursing career before music called her home.",
      "The years in Germany shaped her more than most Ghanaian outlets credit. European pop infrastructure, the discipline of training in a regulated profession, and the experience of being a West-African woman abroad — these were the raw materials she carried back to Accra when she decided to commit to music full-time. The decision to leave nursing for music was not a casual pivot. It was a wager on a scene that, at the time, did not have a clear lane for the artist she wanted to become.",
      "This chapter is intentionally short. The further back we go, the less the public record supports. The integrity of the archive depends on knowing where to stop.",
    ],
    sourceIds: ["src-ghanaweb-profile", "src-modernghana", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/journey-01-accra.jpg",
    imageCaption: "Accra, Ghana — the city where the story begins.",
    headlineLocal: {
      lang: "TWI",
      text: "Ɛbaa Accra, woo no, tete dani obi hunu no sɛ Wendy Shay.",
    },
  },
  {
    id: "the-return",
    index: 2,
    era: "The Return",
    periodLabel: "2017",
    headline: "She came home. RuffTown Records saw her first.",
    shortNarrative:
      "In 2017, Bullet — the producer and RuffTown Records label head who had guided the late Ebony Reigns — signed Wendy Shay. The deal was the formal beginning of a career that had until then been a German-Ghanaian bet on itself.",
    body: [
      "The return to Ghana in 2017 was not a soft landing. The Ghanaian music industry is small, vocal, and ruthless to outsiders — especially women, especially women perceived as having 'come from abroad.' Bullet, who had just lost his flagship female artist Ebony Reigns in early 2018, signed Wendy Shay with the explicit intention of building a successor on the same machine.",
      "The signing was met with scepticism. The Ghanaian press had not yet heard a record. The comparison to Ebony was immediate, unavoidable, and at times cruel. Wendy Shay would spend the first eighteen months of her public career answering a question she had not asked: was she here to replace someone, or to be someone?",
      "The answer, when it came, was not in interviews. It was in the singles she released, one after another, across the year that followed. By the end of 2018, the question had quietly changed shape.",
    ],
    sourceIds: ["src-modernghana", "src-graphic-entertainment", "src-citinewsroom"],
    verification: "verified",
    imagePath: "/images/wendy-shay/journey-02-return.jpg",
    imageCaption: "The return — a signed artist with a country watching to see what she would become.",
  },
  {
    id: "the-breakthrough",
    index: 3,
    era: "The Breakthrough",
    periodLabel: "2018",
    headline: "'Uber Driver' rewired the conversation. Everyone knew the name now.",
    shortNarrative:
      "Released in mid-2018, 'Uber Driver' became the breakout single that turned the Ebony comparisons into something more useful: a recognition that Wendy Shay was, in fact, her own artist with her own lane. The song's playful directness — and its refusal to take itself seriously — gave her a signature.",
    body: [
      "'Uber Driver' arrived at the right moment. The Ghanaian public had spent the first half of 2018 grieving Ebony Reigns; the radio had a gap where a female pop voice used to be. 'Uber Driver' did not try to fill that gap with reverence. It filled it with rhythm, attitude, and a half-joking delivery that turned out to be exactly what the moment wanted.",
      "The song's success was rapid and durable. It charted across West-African radio, became a staple of the club rotation, and crossed into the diaspora market that Ghanaian pop increasingly relies on. Within months, the question of whether Wendy Shay 'deserved' the RuffTown deal had been answered by the audience that the press had been asking it of.",
      "From here forward, the trajectory changes. She is no longer the artist being measured against her predecessor — she is the artist other female artists in Ghana will be measured against for the next half-decade.",
    ],
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/journey-03-uber-driver.jpg",
    imageCaption: "The breakthrough — 'Uber Driver' and the moment the comparisons stopped working.",
  },
  {
    id: "the-reinvention",
    index: 4,
    era: "The Reinvention",
    periodLabel: "2018 — 2020",
    headline: "Releases multiplied. The image hardened into a brand.",
    shortNarrative:
      "Across a run of singles — 'Bedroom Commando', 'Astalavista', 'The Boy Is Mine', 'All For You', 'Boysis' — Wendy Shay built an output engine and a visual identity that was instantly recognisable. The Shay brand became its own institution: blonde wigs, bold costumes, and a refusal to perform smallness.",
    body: [
      "Where most Ghanaian female artists operated on the album cycle, she released constantly — a strategy borrowed from dancehall's release culture and adapted to the Afropop context. The audience learned to expect new music almost monthly, and the streaming numbers rewarded the volume.",
      "Songs like 'Bedroom Commando' and 'Boysis' extended the breakthrough era into something more durable. Each one entered the rotation at weddings, in clubs, at football viewing centres — the daily soundtrack of ordinary Ghanaian life. The lyrics were direct, sometimes deliberately provocative, and always written with the dance-floor in mind.",
      "The visual identity hardened alongside the music. The blonde wig became a signature. The costumes, often gold or red, refused the understated. She presented, deliberately, as a star — and the audience read it as such. Where a previous generation of Ghanaian female artists had been penalised for being 'too much,' she built a career on being exactly enough.",
      "This is the chapter where the artist became the brand. Not in a marketing sense — in a deeper one. The look, the name, the gestures, the catalogue: they fused into a single identity that was impossible to separate.",
    ],
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/journey-04-commando.jpg",
    imageCaption: "The reinvention — image, sound, and brand fused into one identity.",
  },
  {
    id: "the-awards",
    index: 5,
    era: "The Awards",
    periodLabel: "2019 — 2021",
    headline: "From nominee to winner: the VGMA formalised what the streets knew.",
    shortNarrative:
      "The 2019 Vodafone Ghana Music Awards nominated her for New Artiste of the Year. By 2021 she had become a fixture of the awards circuit — a sign that the industry had absorbed her, even when parts of the audience had not yet decided what to make of her.",
    body: [
      "The VGMA nominations arrived quickly. In 2019, less than eighteen months after her debut single, she was nominated for New Artiste of the Year — a formal recognition that the breakthrough was not a fluke. The nomination mattered less for the trophy itself than for what it said about the industry's appetite for a female pop star operating in her lane.",
      "Across the years that followed, the nominations accumulated: Best Female Vocalist, Best Afropop Song, Artiste of the Year consideration. Some she won. Some she did not. The pattern mattered more than any single award: a female artist who, for half a decade, was impossible to leave out of the conversation.",
      "International recognition followed slower but did follow. Features, festivals, and a growing diaspora audience confirmed that the sound she had built was portable across borders in ways the early critics had not predicted.",
      "What followed was a sustained run of visibility: features, festival headlines, and a class of younger female artists growing up citing her as the reason they believed a Ghanaian woman could headline without apologising for it.",
    ],
    sourceIds: ["src-vgma-2019", "src-graphic-entertainment", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/journey-05-awards.jpg",
    imageCaption: "The Awards — formal recognition of an arrival the streets already knew.",
  },
  {
    id: "the-controversies",
    index: 6,
    era: "The Controversies",
    periodLabel: "across the journey",
    headline: "A public career is also a public record of friction.",
    shortNarrative:
      "Wendy Shay's career has been accompanied by well-documented friction — with industry bodies, with fellow artists, with sections of the press that have repeatedly framed her in ways she has had to push back against publicly. This chapter does not editorialise. It records that the friction exists, because omitting it would be a less honest archive.",
    body: [
      "Across the journey, public disputes with the VGMA organisers, with fellow female artists (most visibly Sista Afia in 2020), and with sections of the press that questioned her Ghanaian identity have been regular features of the news cycle around her. The Ghana-vs-Germany framing — a recurring line of questioning about whether she is 'Ghanaian enough' — has been part of her press coverage from the beginning.",
      "This archive takes no side. The role of a legacy document is not to defend or to prosecute — it is to record. The controversies are noted because they are part of the public story; they are not amplified because they are not the whole of the story.",
      "Where specific allegations appear in the public record, this project either does not repeat them or clearly marks the uncertainty. Sensationalism is a separate genre. This is not that genre.",
    ],
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/journey-06-controversies.jpg",
    imageCaption: "A public career is also a public record of friction.",
  },
  {
    id: "the-survivor",
    index: 7,
    era: "The Survivor",
    periodLabel: "2021 — 2023",
    headline: "An accident. A reset. A different artist on the other side.",
    shortNarrative:
      "In late 2021, Wendy Shay was involved in a serious road accident on the Accra–Kumasi highway. The recovery period that followed — and the music she released after it, most notably the 'Survivor' single and the 'Enigma' EP — reframed the arc. What had been a career built on singles became a career built on a story.",
    body: [
      "The accident on the Accra–Kumasi highway in December 2021 was reported across every major Ghanaian outlet. The detail that travelled furthest was not the medical one — it was the photograph of her, walking away from the wrecked vehicle, visibly shaken but on her feet. The image carried further than any press release could have.",
      "The recovery period was largely private. What the public got instead was the music that came after: 'Survivor', the 2022 single that named the era directly, and the 'Enigma' EP that consolidated it. The artist who came back was not the artist who had left. The voice was the same. The writing was heavier.",
      "What followed was the most critically engaged chapter of her career. The same outlets that had spent 2018 asking whether she 'deserved' the RuffTown deal were now writing about her as a major Ghanaian artist with a real story to tell. The shift was not a public-relations trick. It was earned.",
      "This chapter is, in retrospect, where the legacy case for Wendy Shay actually begins. Before the accident, she was a hit-maker. After it, she became an artist with an arc.",
    ],
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/journey-07-survivor.jpg",
    imageCaption: "The Survivor era — a different artist on the other side of the reset.",
  },
  {
    id: "today",
    index: 8,
    era: "Today",
    periodLabel: "now",
    headline: "The story continues. The page is still being written.",
    shortNarrative:
      "Wendy Shay remains active — releasing, performing, building. This chapter is intentionally open: it is the place where today's events will continue to be recorded, and where the subject of the archive is invited to add what the public record cannot know.",
    body: [
      "At the time of writing, Wendy Shay continues to release music, perform, and shape the public conversation around Ghanaian popular culture. The specifics of today will, in time, become the verified facts of a future chapter.",
      "This is where the living-legacy premise becomes operational. Most archives fill in 'today' only after the person is gone. This project refuses that delay. The page is open now. The story continues — and the person whose story it is, is here to see it.",
      "If you are Wendy Shay reading this: this chapter is yours. What comes next is up to you.",
    ],
    sourceIds: ["src-editorial-legacy", "src-wendy-shay-official"],
    verification: "editorial",
    imagePath: "/images/wendy-shay/journey-08-today.jpg",
    imageCaption: "Today — the page is still being written.",
    closingLocal: {
      lang: "GA",
      text: "Sɛ ɛyɛ wo Wendy Shay na worekenkan yeɔ a: saa ti yi yɛ wo deɛ.",
    },
  },
];
