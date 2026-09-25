import type { Metadata } from "next";
import { Oswald, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://venkatesh-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ramavath Venkatesh — AI-Powered SEO & Organic Growth Architect",
    template: "%s | Ramavath Venkatesh",
  },
  description:
    "Lead SEO & Organic Growth Strategist at GIVA Jewellery. B.Tech IT engineer specializing in Programmatic SEO (10K+ pages), Generative Engine Optimization (GEO/AEO), Core Web Vitals, and App Store Optimization (ASO).",
  keywords: [
    "Ramavath Venkatesh",
    "Venkatesh Ramavath",
    "SEO Growth Strategist",
    "Programmatic SEO",
    "pSEO Architect",
    "Generative Engine Optimization",
    "GEO Specialist",
    "AEO",
    "GIVA Jewellery SEO",
    "App Store Optimization",
    "ASO Expert",
    "Technical SEO Consultant",
    "Core Web Vitals",
    "Cyberpunk Portfolio",
  ],
  authors: [{ name: "Ramavath Venkatesh", url: siteUrl }],
  creator: "Ramavath Venkatesh",
  publisher: "Ramavath Venkatesh",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ramavath Venkatesh — AI-Powered SEO & Organic Growth Architect",
    description:
      "Bridging product architecture, programmatic data pipelines, and generative AI search (GEO/AEO) to drive compounding multi-million organic search acquisition.",
    siteName: "Ramavath Venkatesh Portfolio",
    images: [
      {
        url: "/images/cinematic_closeup.jpg",
        width: 1200,
        height: 630,
        alt: "Ramavath Venkatesh — Cinematic Cyberpunk Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramavath Venkatesh — AI-Powered SEO & Organic Growth Architect",
    description:
      "Lead SEO & Organic Growth Strategist at GIVA Jewellery. Programmatic SEO (10K+ pages), Generative Engine Optimization (GEO), Core Web Vitals.",
    images: ["/images/cinematic_closeup.jpg"],
    creator: "@venkatesh",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ramavath Venkatesh",
      givenName: "Venkatesh",
      familyName: "Ramavath",
      jobTitle: "Lead SEO & Organic Growth Strategist",
      worksFor: {
        "@type": "Organization",
        name: "GIVA Jewellery",
        url: "https://giva.co",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "TKR Engineering College",
        },
        {
          "@type": "EducationalOrganization",
          name: "KDR Govt Polytechnic",
        },
      ],
      url: siteUrl,
      image: `${siteUrl}/images/cinematic_closeup.jpg`,
      sameAs: [
        "https://linkedin.com/in/ramavath-venkatesh",
        "https://github.com",
      ],
      knowsAbout: [
        "Programmatic SEO (pSEO)",
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "App Store Optimization (ASO)",
        "Core Web Vitals",
        "Technical SEO",
        "E-Commerce Taxonomy",
        "Next.js",
        "Python Automation",
        "Google Search Console",
        "BigQuery SQL",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ramavath Venkatesh — Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Structured Data for Google Knowledge Graph & Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text antialiased selection:bg-accent-red selection:text-white">
        {/* Ambient Top Glow Progress Bar */}
        <div id="scroll-progress-bar" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
