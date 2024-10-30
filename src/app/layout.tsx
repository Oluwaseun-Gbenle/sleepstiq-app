import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Open_Sans } from 'next/font/google'; 

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: "Sleepstiq App",
  description: "MyCurrency Assessment",
  icons: {
    icon: '/images/favicon.ico', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body
              className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${openSans.variable} antialiased`}
            >
              {children}
            </body>
          </html>
          );
}
