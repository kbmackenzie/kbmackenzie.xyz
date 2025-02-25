import { ReactNode } from 'react';
import Link from 'next/link';
import { onlyText } from 'react-children-utilities';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/components/bubblegum-button/index.module.sass';

type BubblegumButtonProps = {
  href: string;
  title?: string;
  className?: string;
  children: ReactNode
};

export function BubblegumButton({ href, title, children, className }: BubblegumButtonProps) {
  const titleStr = title ?? onlyText(children);
  return (
    <div title={titleStr} className={styleClasses(styles.container, className)}>
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    </div>
  );
}
