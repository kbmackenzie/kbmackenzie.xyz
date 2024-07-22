import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
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

function getPostPath({ year, id }: PostQuery): string {
  return path.join(blogDirectory, year.toString(), `${id}.json`);
}

export async function fetchPost(query: PostQuery): Promise<BlogPost> {
  const postPath = getPostPath(query);
  const contents = await readFile(postPath);
  return JSON.parse(contents.toString()) as BlogPost;
}

export function postExists(query: PostQuery): boolean {
  const postPath = getPostPath(query);
  return existsSync(postPath);
}

export async function fetchPostMetadata(): Promise<PostMetadata[]> {
  const metaPath = path.join(blogDirectory, 'posts.json');
  const contents = await readFile(metaPath);
  const metadata = JSON.parse(contents.toString()) as PostMetadata[];
  return metadata;
}
