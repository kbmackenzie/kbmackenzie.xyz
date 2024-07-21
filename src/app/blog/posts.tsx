'use client';

import { PostMetadata } from '@/blog/blog-post';
import { groupyBy } from '@/utils/group-by';
import { yearOfPost } from '@/blog/blog-post';
import { BrowsePosts } from '@/features/browse-posts';
import { Observer } from '@/components/observer';
import { useSearchParams } from 'next/navigation';
import { Search } from '@/app/blog/search';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/blog/posts.module.sass';

export function Posts({ posts, className }: { posts: PostMetadata[], className?: string }) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tagged');
  const filterByTag = tag !== null && tag !== '';

  function hasTag(post: PostMetadata): boolean {
    return filterByTag && post.tags.includes(tag);
  }

  const postsByYear = groupyBy(
    filterByTag ? posts.filter(hasTag) : posts,
    post => yearOfPost(post),
  );

  return (
    <div className={styleClasses(styles.container, className)}>
      <h1 className={styles.title}>Posts</h1>
      <Search className={styles.search} />
      {filterByTag &&
        <h3 className={styles.status}>
          Filtering by tag: <span className={styles.tag}>"{tag}"</span>
        </h3>}
      <hr className={styles.divider} />
      <ul className={styles.list}>
        {postsByYear.map(([year, posts]) => (
          <li key={year} className={styles.posts}>
            <h3 className={styles.year}>{year}</h3>
            <Observer threshold={0.2}>
              <BrowsePosts posts={posts} />
            </Observer>
          </li>
        ))}
      </ul>
    </div>
  );
}
