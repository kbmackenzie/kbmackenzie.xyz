import { PipedProps } from '@/types/piped-props';
import styles from '@/features/alpaca-layout/components/title/index.module.sass';

import { Fira_Mono } from 'next/font/google';
const firaMono = Fira_Mono({
  weight:  ['400', '500', '700'],
  subsets: ['latin'],
});

export function Title({ ...props }: PipedProps<HTMLHeadingElement>) {
  const classes = [firaMono.className, styles.title].join(' ');
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
