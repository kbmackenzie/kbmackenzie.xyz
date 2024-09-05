import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/mewlix/page.module.sass';
import { Metadata } from 'next';

const title = 'mewlix 🐱 | kbmackenzie.xyz';
const description = 'documentation for mewlix, a cat-themed esolang';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['mewlix', 'esolang', 'programming'],
  openGraph: {
    title: title,
    description: description,
  },
};

export default function Mewlix() {
  const path = getStaticFile('mewlix/mewlix.md');
  return (
    <main className={styles.body}>
      <h2 className={styles.title}>
        mewlix 🐱
      </h2>
      <hr className={styles.divider} />
      <MewlixDoc
        docpath={path}
        className={styleClasses('alpaca-markdown', styles.doc)} />
    </main>
  );
}
