import { fetchPostMetadata } from '@/blog/fetch-post';
import { Posts } from '@/app/blog/posts';
import { Suspense } from 'react';

export default async function Blog() {
  const posts = await fetchPostMetadata();
  return (
    <main>
      <Suspense>
        <Posts posts={posts} />
      </Suspense>
    </main>
  );
}
