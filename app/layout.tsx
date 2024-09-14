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
          <script defer src="https://stats.marektoja.pl/script.js" data-website-id="04c58a72-89a7-4a16-9831-7da6be2e0aae"></script>      <body
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
