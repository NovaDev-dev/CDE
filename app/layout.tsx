import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted (Google Fonts latin subset, variable weight) so builds are deterministic —
// next/font/google produced mismatched class hashes between HTML and CSS on Vercel.
const antonio = localFont({ src: "./fonts/Antonio-Variable.woff2", weight: "400 700", variable: "--font-antonio", display: "swap" });
const dmSans  = localFont({ src: "./fonts/DMSans-Variable.woff2", weight: "100 1000", variable: "--font-dmsans", display: "swap" });
// Splatink by Måns Grebäck, the CDE brand script. Personal-use build; see mansgreback.com/product/splatink for licensing.
const splat   = localFont({ src: "./fonts/Splatink_PERSONAL_USE_ONLY.woff", variable: "--font-splat", display: "swap" });

export const metadata: Metadata = {
  title: "CDE — Colombian Dance Experience",
  description:
    "A four-week Colombian cultural training program in Calgary. Salsa caleña, Afro, champeta and salsa fusion.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "CDE — Colombian Dance Experience",
    description: "A four-week Colombian cultural training program in Calgary.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${antonio.variable} ${dmSans.variable} ${splat.variable} font-body bg-ink text-cream antialiased`}>
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}
