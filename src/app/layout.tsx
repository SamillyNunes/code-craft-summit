import './globals.css';

import type { Metadata } from "next";
import { Montserrat, Oxanium } from 'next/font/google';

export const metadata: Metadata = {
  title: "CodeCraft Summit 2025",
  description: "The biggest technology event of 2025.",
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'], //quais caracteres eu quero
  variable: '--font-oxanium',
});

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'], //quais caracteres eu quero
  variable: '--font-montserrat', //nome que vai ser identificado pelo tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
