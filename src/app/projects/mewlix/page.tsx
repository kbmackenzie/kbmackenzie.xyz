import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/mewlix/page.module.sass';

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
