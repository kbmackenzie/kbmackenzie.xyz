import { PostMetadata } from '@/blog/blog-post';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/latest-posts/index.module.sass';

const dummyPosts: PostMetadata[] = [
  {
    title: 'Something Or Other',
    id: 'something-or-other',
    date: new Date(),
    description: 'Test post.',
    tags: ['first'],
  },
  {
    title: 'Another Something Or Other',
    id: 'another-something-or-other',
    date: new Date(),
    description: 'Another test post.',
    tags: ['second'],
  },
];

export function LatestPosts({ className }: { className?: string; }) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styleClasses(styles.latest, className)}>
      <h2 className={styles.title}>
        Latest Posts
      </h2>
      <hr className={styles.divider} />
      <ul className={styles.posts}>
        {dummyPosts.map(post => (
          <li key={post.id} className={styles.post}>
            <h3 className={styles.name}>{post.title}</h3>
            <p className={styles.date}>{post.date.toLocaleDateString()}</p>
            <p className={styles.description}>{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );

}
