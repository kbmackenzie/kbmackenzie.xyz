import { fetchPost, fetchMetadata } from '@/blog/fetch-post';
import ReactMarkdown from 'react-markdown';

type PostParams = {
  year: string;
  id: string;
};

export async function generateStaticParams(): Promise<PostParams[]> {
  const metadata = await fetchMetadata();

  return metadata.map(data => ({
    year: data.date.getFullYear().toString(),
    id:   data.id,
  }));
}

export default async function Post({ params }: { params: PostParams }) {
  const post = await fetchPost(params.year, params.id);
  /* todo: post rendering logic */
  return (
    <>
      <h2>{post.metadata.title}</h2>
      <h3>{post.metadata.description}</h3>
      <hr />
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </>
  );
}
