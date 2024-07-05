import { ReactNode } from 'react';
import { Alpaca } from '@/features/alpaca-layout/components/alpaca';
import { Title } from '@/features/alpaca-layout/components/title';
import { Navigation } from '@/features/alpaca-layout/components/navigation';
import styles from '@/features/alpaca-layout/index.module.sass';

export function AlpacaLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Alpaca className={styles.alpaca} />
        <Title className={styles.title} />
      </header>
      <hr className={styles.divider} />
      <Navigation />
      {children}
    </div>
  );
}
