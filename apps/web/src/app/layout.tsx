import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion/provider";
import { siteUrl } from "@/content/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

const title = "Still: A steadier mind. A better trading routine.";
const description =
  "Still is a 56-day practice for retail traders across all markets: one useful task a day to prepare, pause, practise and review.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/images/art/hero.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#F5F2EB",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
