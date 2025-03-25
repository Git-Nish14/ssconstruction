import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Sindhwai Constructions | Premium Civil & Infrastructure Projects in India",
  description:
    "Shree Sindhwai Constructions is a trusted name in delivering top-tier civil engineering and infrastructure projects across India. With 20+ years of experience, we focus on safety, innovation, and quality in residential, commercial, and industrial construction.",
  keywords: [
    "Shree Sindhwai Constructions",
    "Construction company India",
    "Civil engineering firm",
    "Residential construction",
    "Commercial infrastructure",
    "Industrial buildings",
    "Uttam Kanaiyalal Patel",
    "Mumbai construction companies",
    "Turnkey projects India",
    "Structural engineering",
  ],
  metadataBase: new URL("https://ssconstructions.vercel.app"),
  openGraph: {
    title: "Shree Sindhwai Constructions | Building India’s Future",
    description:
      "Explore how Shree Sindhwai Constructions delivers high-quality, on-time construction services with a legacy of trust and engineering excellence.",
    url: "https://ssconstructions.vercel.app",
    siteName: "Shree Sindhwai Constructions",
    images: [
      {
        url: "https://ssconstructions.vercel.app/og-image.jpg", // Make sure you upload this
        width: 1200,
        height: 630,
        alt: "Shree Sindhwai Constructions - Office",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Sindhwai Constructions",
    description:
      "Premium construction services for residential, commercial, and industrial projects across India.",
    images: ["https://ssconstructions.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="SS Consts" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
