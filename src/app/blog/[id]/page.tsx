import { Post } from '@/app/blog/[id]/post';
import { BubblegumButton } from '@/components/bubblegum-button';
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

function NotFound() {
  return (
    <main className={styles.error}>
      <h2>Post not found.</h2>
      <BubblegumButton href="/blog">
        See All Posts
      </BubblegumButton>
    </main>
  );
}

export default async function BlogPost({ params }: { params: PostParams }) {
  if (!isValidId(params.id) || !postExists(params.id)) {
    return <NotFound />;
  }
  const post = await fetchPost(params.id);
  return (
    <main className={styles.post}>
      <Post post={post} />
    </main>
  );
}
