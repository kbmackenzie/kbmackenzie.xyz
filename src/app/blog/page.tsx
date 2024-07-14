import { fetchPostMetadata } from '@/blog/fetch-post';
import { groupyBy } from '@/utils/group-by';
import { BrowsePosts } from '@/features/browse-posts';
import styles from '@/app/blog/page.module.sass';

export default async function Blog() {
  const postsByYear = groupyBy(
    await fetchPostMetadata(),
    post => new Date(post.timestamp).getFullYear()
  );

  return (
    <main className={styles.blog}>
      <ul>
        {postsByYear.map(([year, posts]) => (
          <li key={year} className={styles.year}>
            <h3>{year}</h3>
            <hr />
            <BrowsePosts
              className={styles.posts}
              posts={posts} />
          </li>
        ))}
      </ul>
    </main>
  );
}
