import type { Metadata } from 'next';
import { openSans } from '@/fonts';
import { AlpacaLayout } from '@/features/alpaca-layout';
import './globals.sass';

const title = 'kbmackenzie\'s corner';
const description  = 'Functional programming, esoteric languages, game modding... and cats!';

export const metadata: Metadata = {
  metadataBase: new URL('https://kbmackenzie.xyz'),
  title: title,
  description: description,
  keywords: [
    'programming',
    'esolangs',
    'modding'
  ],
  authors: { name: 'kbmackenzie', url: 'https://github.com/kbmackenzie', },
  generator: 'Next.js',
  openGraph: {
    title: title,
    description: description,
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
