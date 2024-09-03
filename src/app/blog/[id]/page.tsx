import { Post } from '@/app/blog/[id]/post';
import { BubblegumButton } from '@/components/bubblegum-button';
import { fetchPostMetadata, postExists, fetchPost, isValidId } from '@/blog/fetch-post';
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
