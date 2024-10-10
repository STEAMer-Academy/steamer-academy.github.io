import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STEAMer Academy",
  description: "Learn STEAM subjects with STEAMer Academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container mx-auto flex-grow px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
