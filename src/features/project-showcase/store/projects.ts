import { Project } from '@/features/project-showcase/types/project';

export const projects: Project[] = [
  {
    name: 'mewlix',
    description: 'A cat-themed esoteric programming language written in pure Haskell.',
    image: {
      src: '',
      alt: 'mewlix logo',
    },
    url: 'https://github.com/kbmackenzie/mewlix',
  },
  {
    name: 'kbmackenzie.xyz',
    description: 'The website you\'re currently browsing! Written in TypeScript with Next.js.',
    image: {
      src: '',
      alt: 'kbmackenzie.xyz logo',
    },
    url: 'https://github.com/kbmackenzie/kbmackenzie.xyz',
  },
  {
    name: 'Inscryption Mods',
    description: 'An assortment of mods I made for the game "Inscryption."',
    image: {
      src: '',
      alt: 'inscryption logo',
    },
    url: 'https://thunderstore.io/c/inscryption/p/KellyBetty/',
  },
  {
    name: 'Cult of the Lamb Mods',
    description: 'An assortment of mods I made for the game "Cult of the Lamb."',
    image: {
      src: '',
      alt: 'cult of the lamb logo',
    },
    url: 'https://thunderstore.io/c/cult-of-the-lamb/p/KellyBetty/',
  },
];
