import { ReactNode } from 'react';
import { Alpaca } from '@/features/alpaca-layout/components/alpaca';
import { Title } from '@/features/alpaca-layout/components/title';
import { Navigation } from '@/features/alpaca-layout/components/navigation';
import styles from '@/features/alpaca-layout/index.module.sass';

export function AlpacaLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Title className={styles.title} />
        <Alpaca className={styles.alpaca} />
      </header>
      <hr className={styles.divider} />
      <Navigation />
      {children}
    </div>
  );
}
