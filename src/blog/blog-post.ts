export type PostMetadata = Readonly<{
  title: string;
  id: string;
  timestamp: number;
  description: string;
  thumbnail?: Image;
  tags: string[];
}>;

export type Image = Readonly<{
  src: string;
  alt?: string;
}>;

export type BlogPost = Readonly<{
  metadata: PostMetadata;
  body: string;
}>;

export function yearOfPost(post: PostMetadata): number {
  return new Date(post.timestamp).getFullYear();
}
