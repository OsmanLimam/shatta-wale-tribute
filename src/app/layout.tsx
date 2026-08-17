import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://wendy-shay-legacy.example.com";
const SITE_TITLE = "Wendy Shay — A Living Legacy Experience";
const SITE_DESCRIPTION =
  "An independent digital archive of the journey, influence, and moments that shaped one of Ghana's most recognizable female musical figures. Created while the story is still being written.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Wendy Shay Living Legacy",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Wendy Shay Living Legacy",
  authors: [{ name: "Osman Limam" }],
  creator: "Osman Limam",
  publisher: "Osman Limam",
  keywords: [
    "Wendy Shay",
    "Ghanaian music",
    "Afrobeats",
    "Afropop",
    "Living legacy",
    "Digital archive",
    "African music",
    "RuffTown Records",
    "Independent documentary",
    "Female artist Ghana",
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
    siteName: "Wendy Shay — A Living Legacy Experience",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wendy Shay — Before The Crown Decides Her Place In The Story.",
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
      { url: "/sm-symbol.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  category: "arts & entertainment",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wendy Shay — A Living Legacy Experience",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Osman Limam",
  },
  about: {
    "@type": "Person",
    name: "Wendy Shay",
    description:
      "Ghanaian Afropop and Afrobeats singer, born Wendy Asba Shay, signed to RuffTown Records in 2017.",
  },
  publisher: {
    "@type": "Person",
    name: "Osman Limam",
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wendy Shay",
  birthName: "Wendy Asba Shay",
  birthDate: "1991-02-20",
  birthPlace: "Accra, Ghana",
  nationality: "Ghanaian",
  occupation: ["Singer", "Songwriter", "Performer"],
  genre: ["Afrobeats", "Afropop", "Dancehall", "Highlife"],
  knowsAbout: "Ghanaian popular music, Afropop, female artists in West Africa",
  subjectOf: {
    "@type": "WebSite",
    name: "Wendy Shay — A Living Legacy Experience",
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
        {/* Skip-to-content link — first focusable element for screen-reader / keyboard users */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-gold focus:bg-ink focus:px-4 focus:py-2 focus:font-mono-caps focus:text-xs focus:text-gold"
        >
          Skip to content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
