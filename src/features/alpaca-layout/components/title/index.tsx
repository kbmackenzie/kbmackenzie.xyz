import { ComponentProps } from 'react';
import { firaMono } from '@/fonts';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/alpaca-layout/components/title/index.module.sass';

export function Title({ ...props }: ComponentProps<'h1'>) {
  const classes = styleClasses(firaMono.className, styles.title);
  return (
    <h1 {...props}>
      <span className={classes}>
        <span className={styles.typing}>
          <span className={styles.echo}>$ echo </span>
          <span className={styles.name}>kbmackenzie</span>
        </span>
      </span>
    </h1>
  );
}
