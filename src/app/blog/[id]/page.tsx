import { Post } from '@/app/blog/[id]/post';
import { notFound } from 'next/navigation';
import { fetchPostMetadata, postExists, fetchPost, isValidId } from '@/blog/fetch-post';
import styles from '@/app/blog/[id]/page.module.sass';
import { Metadata } from 'next';

type PostParams = {
  id: string;
};

export async function generateStaticParams(): Promise<PostParams[]> {
  const metadata = await fetchPostMetadata();
  return metadata.map(post => ({
    id: post.id
  }));
}

/* Note: I should handle 404 logic myself. I can't rely on 'not-found.{ts|tsx}'.
 * See: https://github.com/vercel/next.js/issues/54270 */

export async function generateMetadata({ params }: { params: PostParams }): Promise<Metadata> {
  if (!isValidId(params.id) || !postExists(params.id)) {
    return {
      title: 'invalid post',
    };
  }
  const { metadata: post } = await fetchPost(params.id);
  const title = `${post.title} - Post in kbmackenzie's blog`;
  return {
    title: title,
    description: post.description,
    openGraph: {
      title: title,
      description: post.description,
      images: post.thumbnail ? [post.thumbnail.src] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: PostParams }) {
  if (!isValidId(params.id) || !postExists(params.id)) {
    return notFound();
  }
  const post = await fetchPost(params.id);
  return (
    <main className={styles.post}>
      <Post post={post} />
    </main>
  );
}
