'use client';

import { CSSProperties } from 'react';
import { PostMetadata } from '@/blog/blog-post';
import Link from 'next/link';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/browse-posts/index.module.sass';

type Props = {
  posts: ReadonlyArray<PostMetadata>;
  className?: string;
};

export function BrowsePosts({ className, posts }: Props) {
  function linkToPost(id: string): string {
    return `/blog/${id}`;
  }

  return (
    <ul className={styleClasses(styles.posts, className)}>
      {posts.map((post, i) => {
        const date = new Date(post.timestamp);
        const delay = 0.25 + (i * 0.15);
        const postStyle: CSSProperties = {
          animationDelay: `${delay}s`
        };
        const imageStyle: CSSProperties = {
          backgroundImage: `url(${post.thumbnail?.src ?? ''})`
        };

        return (
          <li key={post.id} className={styles.container} style={postStyle}>
            <Link className={styles.post} href={linkToPost(post.id)}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.date}>
                <strong>Posted: </strong>{date.toLocaleString()}
              </p>
              <p className={styles.description}>
                {post.description}
              </p>
              <div className={styles.image} style={imageStyle}></div>
            </Link>
          </li>
        );
      })}
    </ul>
  );

}
