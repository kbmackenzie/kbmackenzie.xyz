import { PipedProps } from '@/types/piped-props';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/components/arrow/index.module.sass';

export function Arrow({ className, children, ...props }: PipedProps<HTMLButtonElement>) {
  return (
    <button className={styleClasses(styles.arrow, className)} {...props}>
      {children}
    </button>
  );
}
