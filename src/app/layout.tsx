import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://shatta-wale-legacy.example.com";
const SITE_TITLE = "Shatta Wale — A Living Legacy Experience";
const SITE_DESCRIPTION =
  "An independent digital archive of the journey, influence, and moments that shaped one of Ghana's most recognizable musical figures. Created while the story is still being written.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Shatta Wale Living Legacy",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Shatta Wale Living Legacy",
  authors: [{ name: "Osman Limam" }],
  creator: "Osman Limam",
  publisher: "Osman Limam",
  keywords: [
    "Shatta Wale",
    "Ghanaian music",
    "Dancehall",
    "Living legacy",
    "Digital archive",
    "African music",
    "Shatta Movement",
    "Independent documentary",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Shatta Wale — A Living Legacy Experience",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shatta Wale — Before History Writes Your Story",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@osmanlimam",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  category: "arts & entertainment",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shatta Wale — A Living Legacy Experience",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Osman Limam",
  },
  about: {
    "@type": "Person",
    name: "Shatta Wale",
    description:
      "Ghanaian dancehall and afrobeats artist, born Charles Nii Armah Mensah Jr.",
  },
  publisher: {
    "@type": "Person",
    name: "Osman Limam",
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shatta Wale",
  birthName: "Charles Nii Armah Mensah Jr.",
  birthDate: "1984-10-17",
  birthPlace: "Accra, Ghana",
  nationality: "Ghanaian",
  occupation: ["Musician", "Singer", "Songwriter", "Record Producer"],
  genre: ["Dancehall", "Afrobeats", "Reggae"],
  knowsAbout: "Ghanaian popular music, Dancehall in West Africa",
  subjectOf: {
    "@type": "WebSite",
    name: "Shatta Wale — A Living Legacy Experience",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${mono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
