export type PostMetadata = Readonly<{
  title: string;
  id: string;
  timestamp: number;
  description: string;
  tags: string[];
}>;

export type BlogPost = Readonly<{
  metadata: PostMetadata;
  body: string;
}>;

export type PostQuery = Readonly<{
  year: number;
  id: string;
}>;

export function yearOfPost(post: PostMetadata) {
  return new Date(post.timestamp).getFullYear();
}

export function isQueriedPost(query: PostQuery, post: PostMetadata): boolean {
  return yearOfPost(post) === query.year && post.id === query.id;
}
