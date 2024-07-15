import { fetchPostMetadata } from '@/blog/fetch-post';
import { groupyBy } from '@/utils/group-by';
import { yearOfPost } from '@/blog/blog-post';
import { BrowsePosts } from '@/features/browse-posts';
import styles from '@/app/blog/page.module.sass';

export default async function Blog() {
  const postsByYear = groupyBy(
    await fetchPostMetadata(),
    post => yearOfPost(post),
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
