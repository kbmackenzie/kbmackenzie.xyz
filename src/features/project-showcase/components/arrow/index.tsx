import { AttrsAndStyle } from '@/types/attrs-and-style';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/components/arrow/index.module.sass';

export function Arrow({ className, children, ...props }: AttrsAndStyle<HTMLButtonElement>) {
  return (
    <button className={styleClasses(styles.arrow, className)} {...props}>
      {children}
    </button>
  );
}
