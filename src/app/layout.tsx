import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { fullName, lawyer } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { Footer, Header } from "@/components/chrome";
import { SmoothScroll } from "@/components/motion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(lawyer.site),
  title: {
    default: `Av. ${fullName} | ${lawyer.city}`,
    template: `%s | Av. ${fullName}`,
  },
  description: `Av. ${fullName} — ${lawyer.bar}. Mesleki bilgiler, çalışma alanları ve iletişim bilgileri.`,
  openGraph: {
    locale: "tr_TR",
    type: "website",
    siteName: `Av. ${fullName}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#101c2c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: `Av. ${fullName}`,
  telephone: lawyer.phoneDisplay,
  email: lawyer.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: lawyer.address,
    addressLocality: lawyer.city,
    addressCountry: "TR",
  },
  knowsAbout: areas.map((a) => a.title),
};

const themeScript = `try{var t=localStorage.getItem('av-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      data-theme="light"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
