import { PostMetadata } from '@/blog/blog-post';
import { styleClasses } from '@/utils/style-classes';
import Link from 'next/link';
import styles from '@/features/latest-posts/index.module.sass';

export function LatestPosts({ className }: { className?: string; }) {
  const currentYear = new Date().getFullYear();

  function linkToPost(date: Date, id: string): string {
    return `/blog/${date.getFullYear()}/${id}`;
  }

  return (
    <section className={styleClasses(styles.latest, className)}>
      <h2 className={styles.title}>
        Latest Posts
      </h2>
      <hr className={styles.divider} />
      <ul className={styles.posts}>
        {dummyPosts.map(post => {
          const date = new Date(post.timestamp);
          return (
            <li key={post.id}>
              <Link className={styles.post} href={linkToPost(date, post.id)}>
                <h3 className={styles.name}>{post.title}</h3>
                <p className={styles.date}>{date.toLocaleDateString()}</p>
                <p className={styles.description}>{post.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );

}
