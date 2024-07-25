import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Skill } from '@/types/skill';

export type Project = {
  name: string;
  description: string;
  image: {
    src: string | StaticImport;
    alt: string;
    width?: number;
    height?: number;
  }
  datafile: string;
  url: string;
  skills: Skill[];
}
