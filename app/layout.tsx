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
  title: "Jayaraj Aalas — Front-End Developer",
  description: "Portfolio of Jayaraj Aalas, a front-end developer building clean, responsive interfaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="ambient" aria-hidden="true">
          <div className="ambientOrbOne" />
          <div className="ambientOrbTwo" />
          <div className="ambientGrid" />
        </div>
        {children}
      </body>
    </html>
  );
}