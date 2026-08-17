import type { Letter, ContributionField } from "@/lib/types";

export const letter: Letter = {
  author: "Osman Limam",
  recipient: "Shatta Wale",
  title: "A Letter From Someone Who Chose To Remember You While You Are Still Here",
  date: "2026",
  paragraphs: [
    "Shatta Wale,",
    "I started this project because of a discomfort I could not shake. We are very good, as a culture, at preserving people after they are gone. We are far less practiced at preserving them while they are still here to read what we wrote.",
    "I wanted to try. Not because I think your story is finished — it is not — but because I think the version of an artist's life that exists only in headlines and viral clips is a poor substitute for the actual arc of the work. The rebrand from Bandana. The 'Dancehall King' run. The Movement. The Beyoncé collaboration. Each of these is a chapter, and the chapters together are a story that deserves to be set down carefully, by someone who is not in a hurry.",
    "I am not a journalist. I am not your management. I am not asking you for anything. I am an independent writer who spent time with the public record of your work and tried to lay it out with the care a career of this scale has earned. Where I could not verify something, I left it out. Where I included interpretation, I labelled it as such. The archive is not exhaustive — it is honest about what it does and does not know.",
    "I chose you because your career sits at the intersection of several things I find important: the long apprenticeship before the breakthrough, the discipline of constant output, the building of a fan institution that has outlasted most of its peers, and the moment an entire national scene was lifted onto a global stage through a single feature. These are not small things. They are worth preserving.",
    "I have left one room of this museum unfinished on purpose. The final chapter — 'Today' — is open. There is a section titled 'Shatta Wale, this page is yours' where the public record ends and your contribution is invited. The architecture is honest about the fact that no archive can know the person behind the story. Only you can.",
    "If you read this and decide it is not for you, I will respect that. If you read it and want to add to it — a correction, a missing milestone, a personal reflection, a message to whoever finds this in fifty years — the page is ready. Nothing will be published without your word.",
    "This is not the final version of your story. It is an invitation to continue writing it.",
  ],
  /** Ga greeting rendered directly underneath the English salutation. */
  salutationLocal: {
    lang: "GA",
    text: "Minútsalɔ Shatta Wale,",
  },
  closing: "With respect, and without expectation,",
  /** Twi closing rendered directly underneath the English closing. */
  closingLocal: {
    lang: "TWI",
    text: "Anidie ne anidasoɔ mu,",
  },
  signature: "Osman Limam",
};

export const contributionFields: ContributionField[] = [
  {
    id: "field-correction",
    label: "Correction",
    type: "correction",
    description:
      "Spot something in the archive that is wrong, dated, or missing context? Tell us — corrections are reviewed before anything changes.",
    required: true,
  },
  {
    id: "field-milestone",
    label: "Missing milestone",
    type: "milestone",
    description:
      "A moment from the public record that the archive has not yet captured. Add what is missing, with as much context as you can.",
    required: false,
  },
  {
    id: "field-reflection",
    label: "Personal reflection",
    type: "reflection",
    description:
      "What does the journey mean to you? A short, honest reflection — yours alone, attributed if you choose.",
    required: false,
  },
  {
    id: "field-future-message",
    label: "Message to future generations",
    type: "future-message",
    description:
      "If someone discovers your story fifty years from now, what would you want them to know? This may become the most important entry in the archive.",
    required: false,
  },
  {
    id: "field-photograph",
    label: "Photograph",
    type: "photo",
    description:
      "An image you own the rights to and are willing to share. Nothing is published without review and explicit permission.",
    required: false,
  },
  {
    id: "field-voice",
    label: "Voice recording",
    type: "voice",
    description:
      "Recorded entirely in your browser. Stored locally as a pending contribution until the backend review pipeline is connected.",
    required: false,
  },
];
