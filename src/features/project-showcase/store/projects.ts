import { Project } from '@/features/project-showcase/types/project';
import { Skill } from '@/features/project-showcase/types/skill';
import kbmLogo from '@/features/project-showcase/assets/kbm.png';
import mewlixLogo from '@/features/project-showcase/assets/mewlix.png';

function joinLines(...lines: string[]): string {
  return lines.join('\n');
}

export const projects: Project[] = [
  {
    name: 'mewlix',
    description: joinLines(
      'A cat-themed esoteric programming language, with templates for creating pixel games!',
      'The compiler is written in pure Haskell.',
    ),
    image: {
      src: mewlixLogo,
      alt: 'mewlix logo',
    },
    url: 'https://github.com/kbmackenzie/mewlix',
    skills: [Skill.Haskell, Skill.TypeScript, Skill.Sass],
  },
  {
    name: 'kbmackenzie.xyz',
    description: joinLines(
      'This website! A personal website + statically compiled blog.',
      'Written in TypeScript with React, Sass and Next.js.',
    ),
    image: {
      src: kbmLogo,
      alt: 'kbmackenzie.xyz logo',
    },
    url: 'https://github.com/kbmackenzie/kbmackenzie.xyz',
    skills: [Skill.TypeScript, Skill.React, Skill.Sass, Skill.NextJS],
  },
  {
    name: 'Inscryption Mods',
    description: 'An assortment of mods I made for the game "Inscryption."',
    image: {
      src: kbmLogo,
      alt: 'inscryption logo',
    },
    url: 'https://thunderstore.io/c/inscryption/p/KellyBetty/',
    skills: [Skill.CSharp],
  },
  {
    name: 'Cult of the Lamb Mods',
    description: 'An assortment of mods I made for the game "Cult of the Lamb."',
    image: {
      src: kbmLogo,
      alt: 'cult of the lamb logo',
    },
    url: 'https://thunderstore.io/c/cult-of-the-lamb/p/KellyBetty/',
    skills: [Skill.CSharp],
  },
];
