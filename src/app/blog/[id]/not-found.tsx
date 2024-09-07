import { BubblegumButton } from '@/components/bubblegum-button';
import styles from '@/app/blog/[id]/not-found.module.sass';

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h2>Post not found!</h2>
      <BubblegumButton href="/blog">
        See All Posts
      </BubblegumButton>
    </div>
  );
}
