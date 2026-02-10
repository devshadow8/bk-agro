import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
const geistSans = 
Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BK Agro Exporters | Structured Suran Farming & Export from India",
  description: "Learn about BK Agro Exporters structured suran farming approach focused on planned cultivation, quality handling, and reliable domestic and international market supply",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
       <head>
        <link rel="icon" href="/images/bk-agro-logo.png" type="website-icon" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>      
      <body className="m-0 p-0 box-border">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
