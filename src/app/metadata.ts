import { Metadata } from 'next';

type MetadataMaker = Readonly<{
  title: string;
  description?: string;
  keywords?: string[];
}>;

export const root = {
  title: 'kbmackenzie\'s corner',
  description: 'Functional programming, esoteric languages, game modding... and cats!',
};

export function makePageTitle(words: string) {
  return `${words} | ${root.title}`;
}

export function makeMetadata({ title, description, ...rest }: MetadataMaker): Metadata {
  return {
    title: title,
    description: description,
    ...rest,
    openGraph: {
      title: title,
      description: description,
    },
  };
}
