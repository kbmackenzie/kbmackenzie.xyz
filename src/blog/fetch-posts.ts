import { readFile } from 'fs/promises';
import { globby } from 'globby';
import matter from 'gray-matter';
import { BlogPost } from '@/blog/blog-post';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename)

export async function fetchPosts(): Promise<BlogPost[]> {
  const postDirectory = resolve(__dirname, '../../posts');
  const pattern = '*.md';

  const files = await globby(pattern, {
    cwd: postDirectory,
  });

  const posts: BlogPost[] = [];

  for (const file of files) {
    const contents = await readFile(file);
    const parsed = matter(contents);

    /* Data validation would be good here, however:
     * 1. Posts can be validated at compile time.
     * 2. Posts are static files.
     * Runtime validation is thus not necessary. */
    const post: BlogPost = {
      name: parsed.data.name,
      date: parsed.data.date,
      description: parsed.data.description ?? '',
      tags: parsed.data.tags ?? [],
      body: parsed.content,
    };

    posts.push(post);
  }
  return posts;
}
