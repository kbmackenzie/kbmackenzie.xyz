import { DOMAttributes } from 'react';
import { PipedProps } from '@/types/piped-props';
import styles from '@/features/alpaca-layout/components/title/index.module.sass';

export function Title({ ...props }: PipedProps<HTMLHeadingElement>) {
  return (
    <h1 {...props}>
      <span className={styles.title}>
        <span className={styles.typing}>
          <span className={styles.echo}>$ echo </span>
          <span className={styles.name}>kbmackenzie</span>
        </span>
      </span>
    </h1>
  );
}
