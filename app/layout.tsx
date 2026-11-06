import type { Metadata } from "next";
import { Antonio, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const antonio = Antonio({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-antonio", display: "swap" });
const dmSans  = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });
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
