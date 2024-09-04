import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import styles from '@/app/projects/mewlix/[doc]/page.module.sass';

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

export default function MewlixDocfile({ params }: { params: MewlixDocParam }) {
  const path = getStaticFile('mewlix/docs/', `${params.doc}.md`);
  return (
    <main className={styles.body}>
      <MewlixDoc
        docpath={path}
        className={styles.doc} />
    </main>
  );
}
