export type BlogPost = Readonly<{
  name: string;
  date: Date;
  description: string;
  tags: string[];
  body: string;
}>;
