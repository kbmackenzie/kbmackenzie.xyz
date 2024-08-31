import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { PostMetadata, BlogPost } from '@/blog/blog-post';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename)

const blogDirectory = path.resolve(__dirname, '../../blog');
const postDirectory = path.join(blogDirectory, 'posts');

/* Note: Runtime validation for the I/O operations below is not needed.
 *
 * 1. Posts are static files. They will never change.
 * 2. Posts are validated at compile time.
 *
 * It's expected that the content inside 'posts/' is valid at runtime. */

function getPostPath(id: string): string {
  return path.join(postDirectory, `${id}.json`);
}

const idValidator: RegExp = /^[a-zA-Z0-9-]+$/;
const idMaxLength: number = 413;

export function isValidId(id: string): boolean {
  return idValidator.test(id);
}

export function isValidQuery(id: string): boolean {
  return id.length <= idMaxLength && isValidId(id);
}

export async function fetchPost(id: string): Promise<BlogPost> {
  const postPath = getPostPath(id);
  const contents = await readFile(postPath);
  return JSON.parse(contents.toString()) as BlogPost;
}

export function postExists(id: string): boolean {
  const postPath = getPostPath(id);
  return existsSync(postPath);
}

export async function fetchPostMetadata(): Promise<PostMetadata[]> {
  const metaPath = path.join(blogDirectory, 'meta.json');
  const contents = await readFile(metaPath);
  return JSON.parse(contents.toString()) as PostMetadata[];
}
