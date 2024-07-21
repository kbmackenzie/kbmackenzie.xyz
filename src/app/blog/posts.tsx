'use client';

import { PostMetadata } from '@/blog/blog-post';
import { groupyBy } from '@/utils/group-by';
import { yearOfPost } from '@/blog/blog-post';
import { BrowsePosts } from '@/features/browse-posts';
import { Observer } from '@/components/observer';
import styles from '@/app/blog/posts.module.sass';

export function Posts({ posts }: { posts: PostMetadata[] }) {
  const postsByYear = groupyBy(
    posts,
    post => yearOfPost(post),
  );
  return (
    <ul className={styles.list}>
      {postsByYear.map(([year, posts]) => (
        <li key={year} className={styles.year}>
          <h3>{year}</h3>
          <hr />
          <Observer threshold={0.2}>
            <BrowsePosts
              className={styles.posts}
              posts={posts} />
          </Observer>
        </li>
      ))}
    </ul>
  );
}
