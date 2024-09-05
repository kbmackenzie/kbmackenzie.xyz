import { BlogPost } from '@/blog/blog-post';
import { MarkdownStylish } from '@/components/markdown-stylish';
import { BubblegumButton } from '@/components/bubblegum-button';
import Link from 'next/link';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/blog/[id]/post.module.sass';

type Props = {
  post: BlogPost;
  className?: string;
};

export function Post({ post, className }: Props) {
  const date = new Date(post.metadata.timestamp);
  const tagCount = post.metadata.tags.length;

  return (
    <div className={styleClasses(styles.post, className)}>
      <h2 className={styles.title}>
        {post.metadata.title}
      </h2>
      <div className={styles.info}>
        <p className={styles.date}>
          <strong>Posted: </strong>{date.toLocaleString()}
        </p>
        <p className={styles.tags}>
          <strong>Tags: </strong>{post.metadata.tags.map((tag, i) => (
            <span key={tag}>
              <Link className={styles.tag} href={`/blog?tagged=${tag}`}>
                #{tag}
              </Link>
              {i < tagCount - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
      <hr className={styles.divider} />
      <MarkdownStylish className="alpaca-markdown">
        {post.body}
      </MarkdownStylish>
      <hr className={styles.divider} />
      <BubblegumButton href="/blog" className={styles.seeall}>
        See All Posts
      </BubblegumButton>
    </div>
  );
}
