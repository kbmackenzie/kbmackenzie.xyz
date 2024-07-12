import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { PostMetadata, BlogPost } from '@/blog/blog-post';
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

export async function fetchPost(year: string, id: string): Promise<BlogPost> {
  const postPath = path.join(blogDirectory, 'posts/', year, `${id}.md`);

  const contents = await readFile(postPath);
  const post = matter(contents);

  const metadata: PostMetadata = {
    title:        post.data.title,
    id:           post.data.id,
    date:         post.data.date,
    description:  post.data.description,
    tags:         post.data.tags ?? [],
  };

  return {
    body: post.content,
    metadata: metadata,
  };
}

export async function fetchMetadata(): Promise<PostMetadata[]> {
  const metaPath = path.join(blogDirectory, 'posts.json');
  const contents = await readFile(metaPath);
  return JSON.parse(contents.toString()) as PostMetadata[];
}