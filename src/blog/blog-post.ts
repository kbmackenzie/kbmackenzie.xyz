export type PostMetadata = Readonly<{
  title: string;
  id: string;
  date: Date;
  description: string;
  tags: string[];
}>;

export type BlogPost = Readonly<{
  metadata: PostMetadata;
  body: string;
}>;
