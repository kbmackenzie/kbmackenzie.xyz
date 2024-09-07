import { BubblegumButton } from '@/components/bubblegum-button';
import styles from '@/app/not-found.module.sass';

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h2>Nothing here!</h2>
      {/* todo: Add randomized 'not found' message! */}
      <BubblegumButton href="/">
        Go Back
      </BubblegumButton>
    </div>
  );
}
