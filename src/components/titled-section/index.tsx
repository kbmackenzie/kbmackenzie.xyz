import { ReactNode } from 'react';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/components/titled-section/index.module.sass';

type Props = {
  className?: string;
  title: string;
  children: ReactNode;
};

export function TitledSection({ className, title, children }: Props) {
  return (
    <section className={styleClasses(className)}>
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.divider} />
      {children}
    </section>
  );
}
