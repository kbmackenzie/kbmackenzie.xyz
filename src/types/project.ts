import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Skill } from '@/types/skill';

export type Project = {
  name: string;
  id: string;
  description: string;
  image: {
    src: string | StaticImport;
    alt: string;
    width?: number;
    height?: number;
  }
  datafile: string;
  link: {
    url: string;
    internal?: boolean;
  },
  skills: Skill[];
}
