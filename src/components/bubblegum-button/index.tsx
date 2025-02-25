import { ReactNode } from 'react';
import Link from 'next/link';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/components/bubblegum-button/index.module.sass';

type BubblegumButtonProps = {
  href: string;
  title: string;
  className?: string;
  children: ReactNode
};

export function BubblegumButton({ href, title, children, className }: BubblegumButtonProps) {
  return (
    <div className={styleClasses(styles.container, className)}>
      <Link href={href} title={title} className={styles.button}>
        {children}
      </Link>
    </div>
  );
}
