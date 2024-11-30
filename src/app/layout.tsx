import type { Metadata } from 'next';

import { Manrope } from 'next/font/google';

import '../styles/globals.css';

const manrope = Manrope({ subsets: ['latin'], weight: ['300', '400', '700', '800'] });

export const metadata: Metadata = {
  title: 'Sergio Cerdá Hervás',
  description: 'Porfolio web de Sergio Cerdá Hervás',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
