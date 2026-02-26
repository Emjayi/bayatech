import localFont from 'next/font/local'
 import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/home/Header';
import FadeInUp from '@/components/home/FadeInUp';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const yekanBakh = localFont({
  src: './Yekan Bakh Regular.ttf',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bayatech",
  description: "Created by sol studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" >
      <body
        className={`${yekanBakh.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
