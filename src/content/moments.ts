import type { MediaItem } from "@/lib/types";

/**
 * moments.ts — a curated set of major public moments in Wendy Shay's career.
 *
 * Each entry carries full metadata (year, context, significance, source).
 * Visuals are sourced from public web archives — see component layer for
 * rendering.
 */

export const moments: MediaItem[] = [
  {
    id: "mom-rufftown-signing",
    type: "milestone",
    title: "Signed to RuffTown Records by Bullet",
    year: "2017",
    location: "Accra, Ghana",
    significance:
      "The formal beginning of her public career. Bullet — the producer and label head who had guided the late Ebony Reigns — signed her with the explicit intention of building a successor on the same machine. The deal was met with scepticism that would take eighteen months to dissolve.",
    sourceIds: ["src-modernghana", "src-graphic-entertainment"],
    verification: "verified",
    imagePath: "/images/wendy-shay/portrait-green-dress.jpg",
  },
  {
    id: "mom-uber-driver-release",
    type: "music",
    title: "'Uber Driver' released",
    year: "2018",
    location: "Ghana",
    significance:
      "The breakout single. The song's playful directness ended the Ebony comparisons and gave Wendy Shay her own signature. The defining texture of her early catalogue.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/stage-red-jumpsuit.jpg",
  },
  {
    id: "mom-bedroom-commando",
    type: "music",
    title: "'Bedroom Commando' released",
    year: "2018",
    location: "Ghana",
    significance:
      "A deliberately provocative follow-up that confirmed 'Uber Driver' was not a one-off. The song arrived with controversy already attached and outlived it within a season.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/portrait-pink-gown.jpg",
  },
  {
    id: "mom-vgma-2019-nominee",
    type: "award",
    title: "VGMA 2019 — New Artiste of the Year nominee",
    year: "2019",
    location: "Accra International Conference Centre, Ghana",
    significance:
      "Formal recognition that the breakthrough was not a fluke. The nomination mattered less for the trophy itself than for what it said about the industry's appetite for a female pop star in her lane.",
    sourceIds: ["src-vgma-2019", "src-graphic-entertainment"],
    verification: "verified",
    imagePath: "/images/wendy-shay/redcarpet-golden-veil.jpg",
  },
  {
    id: "mom-astalavista-run",
    type: "music",
    title: "Sustained hit run — 'Astalavista', 'All For You', 'Boysis'",
    year: "2019 — 2020",
    location: "Ghana & West African diaspora",
    significance:
      "The chapter where the breakthrough became a body of work. Each single extended the audience and confirmed the volume-driven release strategy as a sustainable model for a female artist in Ghanaian pop.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/portrait-yellow-blouse.jpg",
  },
  {
    id: "mom-sista-afia-exchange",
    type: "milestone",
    title: "Public exchange with Sista Afia",
    year: "2020",
    location: "Ghana",
    significance:
      "A widely covered public exchange between two of Ghana's most prominent female pop voices that became, depending on the outlet, either a rivalry narrative or a commentary on how the Ghanaian press frames women in music. The exchange mattered less for its substance than for the way it was amplified.",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom"],
    verification: "verified",
    imagePath: "/images/wendy-shay/portrait-gold-gown-window.jpg",
  },
  {
    id: "mom-shay-on-you",
    type: "performance",
    title: "Shay On You — headline concerts",
    year: "2019 — ongoing",
    location: "Accra & across Ghana",
    significance:
      "Sustained headline billing across multiple editions — visible proof that the audience had grown large enough to support a self-billed concert franchise, not only a feature slot on someone else's stage.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/shay-concert-2023-collage.webp",
  },
  {
    id: "mom-shay-concert",
    type: "performance",
    title: "Shay Concert — annual headline franchise",
    year: "2023 — ongoing",
    location: "Westhills Mall, Weija & venues across Accra",
    significance:
      "The flagship self-billed concert franchise of her career. Launched in 2023 under the 'Shay Concert' banner — Wendy Shay headlining her own arena-scale show rather than featuring on someone else's bill — the franchise has since run for multiple editions, including the documented 2023 edition at Westhills Mall (Weija) and the announced Shay Concert 2025 on November 22nd, again at Westhills, sponsored by Hisense and backed by RuffTown Records. For a Ghanaian female artist to anchor a recurring ticketed headline franchise is rare; that she has done it across multiple years is the most concrete commercial proof that the audience is hers, not borrowed.",
    sourceIds: ["src-shay-concert", "src-graphic-entertainment", "src-modernghana", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/shay-concert-2025-poster.jpg",
  },
  {
    id: "mom-accra-kumasi-accident",
    type: "milestone",
    title: "Accra–Kumasi highway accident",
    year: "2021",
    location: "Accra–Kumasi highway, Ghana",
    significance:
      "A serious road accident reported across every major Ghanaian outlet. The detail that travelled furthest was not the medical one — it was the photograph of her, walking away from the wrecked vehicle, visibly shaken but on her feet. The image carried further than any press release could have.",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/stage-perf-collage.jpg",
  },
  {
    id: "mom-survivor-single",
    type: "music",
    title: "'Survivor' released",
    year: "2022",
    location: "Ghana",
    significance:
      "The single that named the era. 'Survivor' reframed the public story — from a hit-maker to an artist with a real arc. The most critically engaged single of her career.",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom"],
    verification: "verified",
    imagePath: "/images/wendy-shay/cover-survivor.jpg",
  },
  {
    id: "mom-enigma-ep",
    type: "music",
    title: "'Enigma' EP released",
    year: "2023",
    location: "Ghana",
    significance:
      "The project that consolidated the Survivor era. A multi-track EP that demonstrated her writing had deepened post-accident — heavier subject matter, sharper production, and the first sustained argument that she should be taken seriously as an album artist.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/cover-enigma.jpg",
  },
  {
    id: "mom-streaming-records",
    type: "milestone",
    title: "Sustained streaming records — Ghanaian female pop",
    year: "2018 — ongoing",
    location: "Boomplay, Audiomack, Spotify",
    significance:
      "Across a five-year run, Wendy Shay has consistently appeared among the most-streamed Ghanaian female artists across major streaming platforms. The numbers confirm what the radio charts suggested: a female artist who, for half a decade, was impossible to leave out of the conversation.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/stage-sparkly-dress.jpg",
  },
  {
    id: "mom-international-features",
    type: "appearance",
    title: "International features & diaspora tour circuit",
    year: "2019 — ongoing",
    location: "Europe, UK, North America",
    significance:
      "A sustained run of diaspora-facing features and tour dates — confirmation that the sound she had built was portable across borders in ways the early critics had not predicted.",
    sourceIds: ["src-pulse-africa", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/stage-gold-outfit-dancers.jpg",
  },
  {
    id: "mom-brand-endorsements",
    type: "milestone",
    title: "Brand endorsements & influencer work",
    year: "2018 — ongoing",
    location: "Ghana & West Africa",
    significance:
      "A sustained run of brand partnerships that confirmed her commercial value beyond the music itself. The endorsements matter less for the income than for what they signal about her reach: a female Ghanaian artist whose audience is large and consistent enough to anchor a campaign.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/stage-sequined-dress.jpg",
  },
  {
    id: "mom-today",
    type: "milestone",
    title: "Today — the page is still being written",
    year: "now",
    location: "Accra & international",
    significance:
      "At the time of writing, Wendy Shay continues to release, perform, and shape the public conversation around Ghanaian popular culture. The specifics of today will, in time, become the verified facts of a future chapter.",
    sourceIds: ["src-editorial-legacy", "src-wendy-shay-official"],
    verification: "editorial",
    imagePath: "/images/wendy-shay/moment-14.jpg",
  },
];

export const archiveItems: MediaItem[] = [
  ...moments,
  {
    id: "arc-birth-accra",
    type: "milestone",
    title: "Born in Accra",
    year: "1991",
    location: "Accra, Ghana",
    significance:
      "The starting point of the public biographical record. Birth place widely reported across Ghanaian outlets; further childhood detail intentionally omitted from this archive.",
    sourceIds: ["src-ghanaweb-profile", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/portrait-bw-bucket-hat.jpg",
  },
  {
    id: "arc-germany-years",
    type: "cultural",
    title: "Formative years in Germany",
    year: "1990s — 2017",
    location: "Germany",
    significance:
      "The European chapter that shaped her — training as a nurse, immersion in European pop infrastructure, and the experience of being a West-African woman abroad. The raw materials she carried back to Accra when she decided to commit to music full-time.",
    sourceIds: ["src-modernghana", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/portrait-blonde-dreads-brown.jpg",
  },
  {
    id: "arc-ebony-succession",
    type: "cultural",
    title: "The Ebony succession question",
    year: "2018",
    location: "Ghana",
    significance:
      "The framing that followed her for the first eighteen months of her public career — the question of whether she was here to replace the late Ebony Reigns or to be someone of her own. The question, when it was finally answered, was answered by the audience, not the press.",
    sourceIds: ["src-graphic-entertainment", "src-modernghana"],
    verification: "verified",
    imagePath: "/images/wendy-shay/uber-driver-driving.jpg",
  },
  {
    id: "arc-vgma-new-artiste-nom",
    type: "award",
    title: "VGMA New Artiste of the Year nominee",
    year: "2019",
    location: "Accra, Ghana",
    significance:
      "The institutional moment most often used to date her public arrival. The nomination mattered less for the trophy itself than for what it said about the industry's appetite for her lane.",
    sourceIds: ["src-vgma-2019", "src-graphic-entertainment"],
    verification: "verified",
    imagePath: "/images/wendy-shay/redcarpet-golden-veil.jpg",
  },
  {
    id: "arc-survivor",
    type: "music",
    title: "'Survivor' — the era-naming single",
    year: "2022",
    location: "Ghana",
    significance:
      "The single that reframed the public story. The first time the wider press wrote about her as a major Ghanaian artist with an arc, rather than a hit-maker with a catalogue.",
    sourceIds: ["src-graphic-entertainment", "src-citinewsroom"],
    verification: "verified",
    imagePath: "/images/wendy-shay/cover-survivor.jpg",
  },
  {
    id: "arc-brand",
    type: "cultural",
    title: "The Shay brand — visual identity",
    year: "ongoing",
    location: "Ghana & diaspora",
    significance:
      "The visual identity that hardened alongside the music: blonde wigs, bold costumes, and a refusal to perform smallness. A brand that, where previous generations of Ghanaian female artists were penalised for being 'too much,' was built on being exactly enough.",
    sourceIds: ["src-graphic-entertainment", "src-pulse-africa"],
    verification: "verified",
    imagePath: "/images/wendy-shay/portrait-pink-gown.jpg",
  },
  {
    id: "arc-international-press",
    type: "interview",
    title: "International press coverage cycle",
    year: "2019 — ongoing",
    location: "International",
    significance:
      "Sustained Western and diaspora press engagement following her breakout. Coverage repeatedly framed her as the defining female voice of the post-2018 Ghanaian pop mainstream — a position the archive records, while noting that the framing has evolved across the Survivor era.",
    sourceIds: ["src-pulse-africa", "src-modernghana", "src-editorial-legacy"],
    verification: "verified",
    imagePath: "/images/wendy-shay/stage-sparkly-dress.jpg",
  },
];
