import { fetchPostMetadata } from '@/blog/fetch-post';
import { Posts } from '@/app/blog/posts';
import { Suspense } from 'react';
import styles from '@/app/blog/page.module.sass';

export default async function Blog() {
  const posts = await fetchPostMetadata();
  return (
    <main className={styles.blog}>
      <Suspense>
        <Posts posts={posts} />
      </Suspense>
    </main>
  );
}
