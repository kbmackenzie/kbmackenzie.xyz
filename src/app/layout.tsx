import type { Metadata } from 'next';
import { openSans } from '@/fonts';
import { AlpacaLayout } from '@/features/alpaca-layout';
import './globals.sass';

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
