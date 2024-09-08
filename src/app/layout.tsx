import type { Metadata } from 'next';
import { openSans } from '@/fonts';
import { AlpacaLayout } from '@/features/alpaca-layout';
import { root } from '@/app/metadata';
import './globals.sass';

export const metadata: Metadata = {
  metadataBase: new URL('https://kbmackenzie.xyz'),
  title: root.title,
  description: root.description,
  keywords: [
    'programming',
    'esolangs',
    'modding'
  ],
  authors: { name: 'kbmackenzie', url: 'https://github.com/kbmackenzie', },
  generator: 'Next.js',
  openGraph: {
    title: root.title,
    description: root.description,
  },
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
