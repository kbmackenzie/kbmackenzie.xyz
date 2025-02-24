import { MarkdownDoc } from '@/features/markdown-doc';
import { getStaticFile } from '@/utils/static-file';
import { notFound } from 'next/navigation';
import { BubblegumButton } from '@/components/bubblegum-button';
import styles from '@/app/projects/mewlix/[doc]/page.module.sass';
import Link from 'next/link';
import { Metadata } from 'next';
import { makeMetadata, makePageTitle } from '@/app/metadata';

type MewlixDocParam = {
  doc: string;
};

const docs: ReadonlyArray<string> = [
  'language',
  'compiler',
  'std',
  'graphic',
  'console',
  'functional-patterns',
  'extensions',
  'faq',
];

const docSet = new Set(docs);

export function generateStaticParams(): MewlixDocParam[] {
  return docs.map(doc => ({
    doc: doc,
  }));
}

/* Note: I should handle 404 logic myself. I can't rely on 'not-found.{ts|tsx}'.
 * See: https://github.com/vercel/next.js/issues/54270 */

export function generateMetadata({ params }: { params: MewlixDocParam }): Metadata {
  const name = params.doc.replace('-', ' ');
  return makeMetadata({
    title: makePageTitle(`mewlix - ${name}`),
    description: 'Documentation for Mewlix, a cat-themed esolang.',
  });
}

function MewlixContext() {
  return (
    <Link href="/projects/mewlix" className={styles.context}>
      Mewlix Documentation
    </Link>
  );
}

export default function MewlixDocfile({ params }: { params: MewlixDocParam }) {
  if (!params.doc || !docSet.has(params.doc)) {
    return notFound();
  }
  const path = getStaticFile('mewlix/docs/', `${params.doc}.md`);
  return (
    <main className={styles.body}>
      <MewlixContext />
      <MarkdownDoc
        docPath={path}
        className={styles.doc} />
      <BubblegumButton href="/projects/mewlix" className={styles['see-full']}>
        See Full Documentation
      </BubblegumButton>
    </main>
  );
}
