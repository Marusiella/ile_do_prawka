import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Kiedy mogę zacząć prawko?",
  description: "Tutaj dowiesz się kiedy możesz zacząć kurs na prawo jazdy. Kalkulator oblicza datę twoich 18 urodzin i podaje informacje o egzaminie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <script defer src="https://stats.marektoja.pl/script.js" data-website-id="c676d4c1-9d5b-48e3-8d84-e39f968eecd5"></script>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
