import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "STEAMer Academy",
  description: "STEAMer Academy Main Home Page",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c0caf5" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2335" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="antialiased">
        {children}
        <script type="text/partytown">
          <GoogleAnalytics gaId="G-DD3FHBDSP0" />
        </script>
      </body>
    </html>
  );
}
