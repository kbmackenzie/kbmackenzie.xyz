import { PostMetadata } from '@/blog/blog-post';
import { fetchPostMetadata } from '@/blog/fetch-post';
import Link from 'next/link';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/browse-posts/index.module.sass';

export type PostPredicate = (posts: PostMetadata[]) => PostMetadata[];

type Props = {
  className?: string;
  predicate: PostPredicate;
};

export async function BrowsePosts({ className, predicate }: Props) {
  const metadata = await fetchPostMetadata();
  const posts = predicate(metadata);

  function linkToPost(date: Date, id: string): string {
    return `/blog/${date.getFullYear()}/${id}`;
  }

  return (
    <ul className={styleClasses(styles.posts, className)}>
      {posts.map(post => {
        const date = new Date(post.timestamp);
        return (
          <li key={post.id}>
            <Link className={styles.post} href={linkToPost(date, post.id)}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.date}>{date.toLocaleDateString()}</p>
              <p className={styles.description}>{post.description}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );

}
