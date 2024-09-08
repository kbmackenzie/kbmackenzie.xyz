import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/mewlix/page.module.sass';
import { Metadata } from 'next';
import { makeMetadata, makePageTitle } from '@/app/metadata';

export const metadata: Metadata = makeMetadata({
  title: makePageTitle('mewlix'),
  description: 'Documentation for Mewlix, a cat-themed esolang',
  keywords: ['cats', 'esolang', 'programming'],
});

export default function Mewlix() {
  const path = getStaticFile('mewlix/mewlix.md');
  return (
    <main className={styles.body}>
      <h2 className={styles.title}>
        mewlix
      </h2>
      <hr className={styles.divider} />
      <MewlixDoc
        docpath={path}
        className={styleClasses('alpaca-markdown', styles.doc)} />
    </main>
  );
}
