import { ReactNode } from 'react';
import { Alpaca } from '@/features/alpaca-layout/components/alpaca';
import { Title } from '@/features/alpaca-layout/components/title';
import { Navigation } from '@/features/alpaca-layout/navigation';
import styles from '@/features/alpaca-layout/index.module.sass';

export function AlpacaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Target for the SideMenu component's portal. */}
      <div id="side-menu"></div>

      {/* Root of all content. */}
      <div className={styles.root}>
        <header className={styles.header}>
          <Title className={styles.title} />
          <Alpaca className={styles.alpaca} />
        </header>
        <hr className={styles.divider} />
        <Navigation />
        {children}
      </div>
    </>
  );
}
