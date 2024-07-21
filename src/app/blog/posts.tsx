'use client';

import { PostMetadata } from '@/blog/blog-post';
import { groupyBy } from '@/utils/group-by';
import { yearOfPost } from '@/blog/blog-post';
import { BrowsePosts } from '@/features/browse-posts';
import { Observer } from '@/components/observer';
import { useSearchParams } from 'next/navigation';
import styles from '@/app/blog/posts.module.sass';

export function Posts({ posts }: { posts: PostMetadata[] }) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tagged');

  function hasTag(post: PostMetadata): boolean {
    if (tag === null || tag === '') return true;
    return post.tags.includes(tag);
  }

  const postsByYear = groupyBy(
    posts.filter(hasTag),
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
