import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import { styleClasses } from '@/utils/style-classes';
import { notFound } from 'next/navigation';
import { BubblegumButton } from '@/components/bubblegum-button';
import styles from '@/app/projects/mewlix/[doc]/page.module.sass';
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

export default function MewlixDocfile({ params }: { params: MewlixDocParam }) {
  if (!params.doc || !docSet.has(params.doc)) {
    return notFound();
  }
  const path = getStaticFile('mewlix/docs/', `${params.doc}.md`);
  return (
    <main className={styles.body}>
      <MewlixDoc
        docpath={path}
        className={styleClasses('alpaca-markdown', styles.doc)} />
      <BubblegumButton href="/projects/mewlix" className={styles.seefull}>
        See Full Documentation
      </BubblegumButton>
    </main>
  );
}
