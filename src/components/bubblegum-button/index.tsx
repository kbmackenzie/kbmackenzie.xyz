import { ReactNode } from 'react';
import Link from 'next/link';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/components/bubblegum-button/index.module.sass';

type BubblegumButtonProps = {
  href: string;
  className?: string;
  children: ReactNode
};

export function BubblegumButton({ href, children, className }: BubblegumButtonProps) {
  return (
    <div className={styleClasses(className)}>
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    </div>
  );
}
