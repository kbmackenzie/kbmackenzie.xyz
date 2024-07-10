import { AttrsAndStyle } from '@/types/attrs-and-style';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/alpaca-layout/components/title/index.module.sass';

import { Fira_Mono } from 'next/font/google';
const firaMono = Fira_Mono({
  weight:  ['400', '500', '700'],
  subsets: ['latin'],
});

export function Title({ ...props }: AttrsAndStyle<HTMLHeadingElement>) {
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
