import { Post } from '@/app/blog/[id]/post';
import { notFound } from 'next/navigation';
import { fetchPostMetadata, postExists, fetchPost, isValidId } from '@/blog/fetch-post';
import styles from '@/app/blog/[id]/page.module.sass';
import { Metadata } from 'next';

type PostParams = {
  id: string;
};

/* Allow only pre-rendered posts. */
export const dynamicParams = false;

export async function generateStaticParams(): Promise<PostParams[]> {
  const metadata = await fetchPostMetadata();
  return metadata.map(post => ({
    id: post.id
  }));
}

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
    notFound();
  }
  const post = await fetchPost(params.id);
  return (
    <main className={styles.post}>
      <Post post={post} />
    </main>
  );
}
