import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { PostMetadata, BlogPost, PostQuery, } from '@/blog/blog-post';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename)
const blogDirectory = path.resolve(__dirname, '../../blog');

/* Note: Runtime validation for the I/O operations below is not needed.
 *
 * 1. Posts are static files. They will never change.
 * 2. Posts are validated at compile time.
 *
 * It's expected that the content inside 'posts/' is valid at runtime. */

export async function fetchPost({ year, id }: PostQuery): Promise<BlogPost> {
  const postPath = path.join(blogDirectory, year.toString(), `${id}.md`);

  const contents = await readFile(postPath);
  const post = matter(contents);

  const metadata: PostMetadata = {
    title:        post.data.title,
    id:           post.data.id,
    timestamp:    post.data.timestamp,
    description:  post.data.description,
    tags:         post.data.tags ?? [],
  };

  return {
    body: post.content,
    metadata: metadata,
  };
}

/* Cache I/O operation. (Static file never changes.) */
let metadataCache: PostMetadata[] | null = null;

export async function fetchPostMetadata(): Promise<PostMetadata[]> {
  if (metadataCache !== null) return metadataCache;

  const metaPath = path.join(blogDirectory, 'posts.json');
  const contents = await readFile(metaPath);
  const metadata = JSON.parse(contents.toString()) as PostMetadata[];

  metadataCache  = metadata;
  return metadata;
}
