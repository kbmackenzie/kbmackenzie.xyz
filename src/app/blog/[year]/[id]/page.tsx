import { PostQuery, yearOfPost } from '@/blog/blog-post';
import { fetchPostMetadata, postExists, fetchPost } from '@/blog/fetch-post';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
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

export default async function Post({ params }: { params: PostParams }) {
  const query: PostQuery = {
    year: Number(params.year),
    id: params.id,
  };

  if (!postExists(query)) {
    return <NotFound />;
  }

  const post = await fetchPost(query);
  return (
    <>
      <h2>{post.metadata.title}</h2>
      <h3>{post.metadata.description}</h3>
      <hr />
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </>
  );
}
