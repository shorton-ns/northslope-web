import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northslope Technologies — Software for the hard problems",
  description:
    "Northslope partners with organizations to design, build, and scale technology that works where it counts — complex environments, regulated industries, and high-stakes operations.",
  openGraph: {
    title: "Northslope Technologies",
    description:
      "Software engineering and technology strategy for defence, government, critical infrastructure, and energy.",
    siteName: "Northslope Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Hanken Grotesk — Altitude body font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/*
          Aeonik (Altitude heading font) is a commercial typeface.
          License from: https://costype.io/fonts/aeonik
          After licensing, place woff2 files in /public/fonts/ and
          uncomment the @font-face declarations in globals.css.
        */}
      </head>
      <body
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </body>
    </html>
  );
}
