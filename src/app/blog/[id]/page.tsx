import { Post } from '@/app/blog/[id]/post';
import { BubblegumButton } from '@/components/bubblegum-button';
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


/* I have to handle 404 logic myself. I can't rely on 'not-found.{ts|tsx}'.
 * See: https://github.com/vercel/next.js/issues/54270 */

function NotFound({ id }: { id: string }) {
  return (
    <main className={styles.error}>
      <h2>Post not found!</h2>
      <p>{`No post found matching id "${id}"!`}</p>
      <BubblegumButton href="/blog">
        See All Posts
      </BubblegumButton>
    </main>
  );
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
    return <NotFound id={params.id} />;
  }
  const post = await fetchPost(params.id);
  return (
    <main className={styles.post}>
      <Post post={post} />
    </main>
  );
}
