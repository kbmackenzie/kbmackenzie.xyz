import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type Project = {
  name: string;
  description: string;
  image: {
    src: string | StaticImport;
    alt: string;
    width?: number;
    height?: number;
  }
  url: string;
}
