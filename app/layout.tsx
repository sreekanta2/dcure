import { siteConfig } from "@/config/site";
import AuthProvider from "@/provider/auth.provider";
import Providers from "@/provider/providers";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./assets/scss/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords || [],
  authors: [
    {
      name: siteConfig.author || "Your Company",
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author || "Your Company",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage || `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage || `${siteConfig.url}/og-image.jpg`],
    creator: siteConfig.twitterHandle || "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google:
      siteConfig.googleSiteVerification || "your-google-verification-code",
  },
  category: "Healthcare",
  other: {
    "ahrefs-site-verification":
      siteConfig.ahrefsVerification || "your-ahrefs-code",
  },
};

// Generate structured data outside of JSX
const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    "@id": `${siteConfig.url}/#logo`,
    url: siteConfig.logo || `${siteConfig.url}/logo.png`,
    width: "300",
    height: "60",
    caption: siteConfig.name,
  },
  sameAs: siteConfig.socialLinks?.map((link) => link.url) || [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact?.phone || "+1-555-123-4567",
      contactType: "Customer Support",
      areaServed: "US",
      availableLanguage: "en",
    },
  ],
  medicalSpecialty: "Healthcare",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body className={inter.className}>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>

        {/* Structured Data - Moved to body */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
          strategy="afterInteractive"
        />

        {siteConfig.googleAnalyticsId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
