import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clicks & Serve - Restaurant Growth Agency | Scale Your Restaurant Business",
  description: "We build reservation backlogs, not just beautiful feeds. The Tier-1 Growth Agency for Cafes, Restaurants, & Hotels. Professional content creation, marketing strategy, and website development.",
  keywords: ["restaurant marketing", "restaurant growth", "content creation", "digital marketing", "restaurant website", "social media marketing"],
  authors: [{ name: "Clicks & Serve" }],
  openGraph: {
    title: "Clicks & Serve - Stop Marketing. Start Scaling.",
    description: "The Tier-1 Growth Agency for Cafes, Restaurants, & Hotels",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
