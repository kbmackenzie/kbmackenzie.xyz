import { BubblegumButton } from '@/components/bubblegum-button';
import { Message } from '@/features/alpaca-not-found/message';
import styles from '@/features/alpaca-not-found/index.module.sass';

export function AlpacaNotFound() {
  return (
    <div className={styles.container}>
      <h3 className={styles.message}>
        <Message />
      </h3>
      <p className={styles.info}>
        The page you requested does not exist.
      </p>
      <BubblegumButton href="/">
        Go Back
      </BubblegumButton>
    </div>
  );
}
