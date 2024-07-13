import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { AlpacaLayout } from '@/features/alpaca-layout';
import './globals.sass';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'kelly\'s hut',
  description: 'functional programming, esoteric languages and cats.',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <AlpacaLayout>
          {children}
        </AlpacaLayout>
      </body>
    </html>
  );
}
