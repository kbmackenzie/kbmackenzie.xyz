import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import { BubblegumButton } from '@/components/bubblegum-button';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/mewlix/[doc]/page.module.sass';
import { Metadata } from 'next';

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

/* I have to handle 404 logic myself. I can't rely on 'not-found.{ts|tsx}'.
 * See: https://github.com/vercel/next.js/issues/54270 */

function NotFound({ doc }: { doc: string }) {
  return (
    <main className={styles.error}>
      <h2>No cats here.</h2>
      <p>{`No Mewlix documentation page matches the key "${doc}".`}</p>
      <BubblegumButton href="/projects/mewlix">
        Go Back
      </BubblegumButton>
    </main>
  );
}

export function generateMetadata({ params }: { params: MewlixDocParam }): Metadata {
  const name = params.doc.replace('-', ' ');
  const title = `mewlix - ${name} | kbmackenzie.xyz`;
  return {
    title: title,
    openGraph: {
      title: title,
    },
  };
}

export default function MewlixDocfile({ params }: { params: MewlixDocParam }) {
  if (!params.doc || !docSet.has(params.doc)) {
    return <NotFound doc={params.doc} />;
  }
  const path = getStaticFile('mewlix/docs/', `${params.doc}.md`);
  return (
    <main className={styles.body}>
      <MewlixDoc
        docpath={path}
        className={styleClasses('alpaca-markdown', styles.doc)} />
    </main>
  );
}
