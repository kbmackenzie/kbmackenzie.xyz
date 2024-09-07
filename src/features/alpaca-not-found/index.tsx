import { BubblegumButton } from '@/components/bubblegum-button';
import { Message } from '@/features/alpaca-not-found/message';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/alpaca-not-found/index.module.sass';

type Props = {
  info?: string;
  className?: string;
};

const defaultInfo = 'The page you requested does not exist.';

export function AlpacaNotFound({ info, className }: Props) {
  return (
    <div className={styleClasses(styles.container, className)}>
      <h3 className={styles.message}>
        <Message />
      </h3>
      <p className={styles.info}>
        {info ?? defaultInfo}
      </p>
      <BubblegumButton href="/">
        Go Back
      </BubblegumButton>
    </div>
  );
}
