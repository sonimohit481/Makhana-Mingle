import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://makhanamingle.com"),
  title: "Makhana Mingle | Premium Healthy Makhana Snacks",
  description:
    "Discover premium makhana snacks, nourishing recipes, health benefits, and a modern Indian pantry story with Makhana Mingle.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Makhana Mingle | Premium Healthy Makhana Snacks",
    description:
      "Snack Smart with Makhana. Explore recipes, shop premium fox nut snacks, and discover the story behind Bihar's beloved superfood.",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makhana Mingle | Premium Healthy Makhana Snacks",
    description:
      "Snack Smart with Makhana. Explore recipes, shop premium fox nut snacks, and discover the story behind Bihar's beloved superfood.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
