import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import "./globals.css";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
// Next.js App Router reads this export and injects it into <head> automatically.
// No need for react-helmet or manual <meta> tags.
export const metadata: Metadata = {
  // ── Basic ──────────────────────────────────────────────────────────────────
  // The %s is a template slot — if you ever add sub-pages, their title will be
  // "Sub-page Title | Vid Šafranko". For a single-page site this is just the
  // default value.
  title: {
    default: "Vid Šafranko – Full-Stack Developer & Infrastructure Engineer",
    template: "%s | Vid Šafranko",
  },
  description:
    "Portfolio of Vid Šafranko, a Full-Stack Developer and Infrastructure Engineer based in Helsinki, Finland. Specialising in Next.js, React, Flutter, Firebase and cloud infrastructure. Available for new opportunities.",
  metadataBase: new URL("https://vidsafranko.com"),
  alternates: {
    canonical: "/",
  },

  keywords: [
    "Vid Šafranko",
    "full-stack developer Helsinki",
    "Next.js developer",
    "React developer",
    "Flutter developer",
    "infrastructure engineer",
    "TypeScript developer",
    "Firebase developer",
    "web developer Finland",
    "mobile app developer",
    "portfolio",
  ],

  authors: [{ name: "Vid Šafranko", url: "https://vidsafranko.com" }],
  creator: "Vid Šafranko",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidsafranko.com",
    siteName: "Vid Šafranko Portfolio",
    title: "Vid Šafranko – Full-Stack Developer & Infrastructure Engineer",
    description:
      "Full-Stack Developer and Infrastructure Engineer based in Helsinki. Building scalable applications with Next.js, React, Flutter and cloud infrastructure.",
    images: [
      {
        url: "images/profile/og-image.png", // Create this: 1200×630px, place in /public/images/profile/
        width: 1200,
        height: 630,
        alt: "Vid Šafranko – Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vid Šafranko – Full-Stack Developer & Infrastructure Engineer",
    description:
      "Full-Stack Developer based in Helsinki. Next.js, React, Flutter, Firebase, infrastructure.",
    images: ["images/profile/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://vidsafranko.com/#person",
                  name: "Vid Šafranko",
                  givenName: "Vid",
                  familyName: "Šafranko",
                  jobTitle: "Full-Stack Developer & Infrastructure Engineer",
                  description:
                    "Full-Stack Developer and Infrastructure Engineer based in Helsinki, Finland. Specialising in Next.js, React, Flutter, Firebase and cloud infrastructure.",
                  url: "https://vidsafranko.com",
                  image: "https://vidsafranko.com/images/profile/og-image.png",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Helsinki",
                    addressCountry: "FI",
                  },
                  sameAs: [
                    "https://github.com/orangetheowl",
                    "https://www.linkedin.com/in/vid-safranko/",
                  ],
                  knowsAbout: [
                    "Next.js",
                    "React",
                    "Flutter",
                    "TypeScript",
                    "Firebase",
                    "Google Cloud Platform",
                    "Node.js",
                    "Infrastructure Engineering",
                    "Mobile Development",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://vidsafranko.com/#website",
                  url: "https://vidsafranko.com",
                  name: "Vid Šafranko Portfolio",
                  description:
                    "Portfolio of Vid Šafranko, Full-Stack Developer & Infrastructure Engineer",
                  author: {
                    "@id": "https://vidsafranko.com/#person",
                  },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}