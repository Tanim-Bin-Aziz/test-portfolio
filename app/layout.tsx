import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bithi Farhana Islam — Fashion Designer",
  description:
    "Portfolio of Bithi Farhana Islam, a Dhaka-based fashion designer working across couture, ready-to-wear, and editorial.",
  openGraph: {
    title: "Bithi Farhana Islam — Fashion Designer",
    description:
      "Sculptural silhouettes, hand-finished textiles, and a quiet sense of drama.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
