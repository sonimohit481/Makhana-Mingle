import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makhana Mingle | Premium Healthy Makhana Snacks",
  description:
    "Discover premium makhana snacks, nourishing recipes, health benefits, and a modern Indian pantry story with Makhana Mingle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
