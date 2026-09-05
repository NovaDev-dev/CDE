import type { Metadata } from "next";
import { Antonio, DM_Sans } from "next/font/google";
import "./globals.css";

const antonio = Antonio({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-antonio", display: "swap" });
const dmSans  = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });

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
      <body className={`${antonio.variable} ${dmSans.variable} font-body bg-ink text-cream antialiased`}>
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}
