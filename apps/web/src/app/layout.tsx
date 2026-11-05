import type { Metadata, Viewport } from "next";
import { Bangers, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion/provider";
import { siteUrl } from "@/content/site";
import "./globals.css";

const bangers = Bangers({ weight: "400", subsets: ["latin"], variable: "--font-bangers" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description =
  "Still is a 56-day reset for the way you trade: how you think, plan, practise and review. One short quest a day.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Still: The 56-Day Trading Reset",
  description,
  openGraph: {
    title: "Still: The 56-Day Trading Reset",
    description,
    type: "website",
    images: ["/images/blog/blog-reset.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0FA3A3",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bangers.variable} ${inter.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
