import { Post } from '@/app/blog/[id]/post';
import { fetchPostMetadata, postExists, fetchPost } from '@/blog/fetch-post';
import Link from 'next/link';
import styles from '@/app/blog/[id]/page.module.sass';

type PostParams = {
  id: string;
};

export async function generateStaticParams(): Promise<PostParams[]> {
  const metadata = await fetchPostMetadata();
  return metadata.map(post => ({
    id: post.id,
  }));
}

function NotFound() {
  return (
    <main className={styles.error}>
      <h2>Post not found.</h2>
      <Link href="/blog">See All Posts</Link>
    </main>
  );
}

export default async function BlogPost({ params }: { params: PostParams }) {
  if (!postExists(params.id)) {
    return <NotFound />;
  }
  const post = await fetchPost(params.id);
  return (
    <main className={styles.post}>
      <Post post={post} />
    </main>
  );
}
