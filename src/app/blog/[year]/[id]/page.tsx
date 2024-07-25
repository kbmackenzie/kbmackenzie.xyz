import { PostQuery, yearOfPost } from '@/blog/blog-post';
import { Post } from '@/app/blog/[year]/[id]/post';
import { fetchPostMetadata, postExists, fetchPost, isValidQuery } from '@/blog/fetch-post';
import Link from 'next/link';
import styles from '@/app/blog/[year]/[id]/page.module.sass';

type PostParams = {
  year: string;
  id: string;
};

export async function generateStaticParams(): Promise<PostParams[]> {
  const metadata = await fetchPostMetadata();
  return metadata.map(post => ({
    year: yearOfPost(post).toString(),
    id:   post.id,
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
  const query: PostQuery = {
    year: Number(params.year),
    id: params.id,
  };

  if (!isValidQuery(query) || !postExists(query)) {
    return <NotFound />;
  }

  const post = await fetchPost(query);
  return (
    <main className={styles.post}>
      <Post post={post} />
    </main>
  );
}
