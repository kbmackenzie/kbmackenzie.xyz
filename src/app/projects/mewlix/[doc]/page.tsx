import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/mewlix/[doc]/page.module.sass';
import { Metadata } from 'next';

type MewlixDocParam = {
  doc: string;
};

export const dynamicParams = false;

export function generateStaticParams(): MewlixDocParam[] {
  const docs: string[] = [
    'language',
    'compiler',
    'std',
    'graphic',
    'console',
    'functional-patterns',
    'faq',
  ];
  return docs.map(doc => ({
    doc: doc,
  }));
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
  const path = getStaticFile('mewlix/docs/', `${params.doc}.md`);
  return (
    <main className={styles.body}>
      <MewlixDoc
        docpath={path}
        className={styleClasses('alpaca-markdown', styles.doc)} />
    </main>
  );
}
