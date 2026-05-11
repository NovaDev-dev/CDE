import type { Metadata } from "next";
import {
  Space_Grotesk,
  Bebas_Neue,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const space     = Space_Grotesk({ subsets: ["latin"], variable: "--font-space",     display: "swap" });
const bebas     = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas",     display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "CDE — Colombian Dance Experience",
  description:
    "Salsa caleña, salsa choque y champeta en Calgary. El evento donde Colombia se encuentra con Canadá.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "CDE — Colombian Dance Experience",
    description: "Salsa caleña, salsa choque y champeta en Calgary.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${space.variable} ${bebas.variable} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
