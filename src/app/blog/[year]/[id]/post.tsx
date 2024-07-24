import { BlogPost } from '@/blog/blog-post';
import { MarkdownHighlight } from '@/components/markdown-highlight';
import styles from '@/app/blog/[year]/[id]/post.module.sass';

type Props = {
  post: BlogPost;
};

export function Post({ post }: Props) {
  const date = new Date(post.metadata.timestamp);
  return (
    <>
      <h2 className={styles.title}>
        {post.metadata.title}
      </h2>
      <h3 className={styles.date}>
        Posted: {date.toLocaleString()}
      </h3>
      <h3 className={styles.description}>
        {post.metadata.description}
      </h3>
      <hr className={styles.divider} />
      <MarkdownHighlight className={styles.body}>
        {post.body}
      </MarkdownHighlight>
    </>
  );
}
