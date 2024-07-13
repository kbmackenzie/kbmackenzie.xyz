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
