import { BrowsePosts, PostPredicate } from '@/features/browse-posts';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/latest-posts/index.module.sass';

export function LatestPosts({ className }: { className?: string; }) {
  const predicate: PostPredicate = posts => [...posts]
    .sort((a, b) => a.timestamp - b.timestamp)
    .slice(0, 10);

  return (
    <section className={styleClasses(styles.latest, className)}>
      <h2 className={styles.title}>
        Latest Posts
      </h2>
      <hr className={styles.divider} />
      <BrowsePosts
        className={styles.posts}
        predicate={predicate} />
    </section>
  );

}
