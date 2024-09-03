import { MewlixDoc } from '@/features/mewlix-doc';
import { getStaticFile } from '@/utils/static-file';
import styles from '@/app/projects/mewlix/page.module.sass';

export default function Mewlix() {
  const path = getStaticFile('mewlix/mewlix.md');
  return (
    <MewlixDoc
      docpath={path}
      className={styles.doc} />
  );
}
