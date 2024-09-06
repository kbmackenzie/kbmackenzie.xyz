import { Project } from '@/types/project';
import { Skill } from '@/types/skill';
import mewlixLogo from '@/features/projects/assets/mewlix.png';
import alpacaLogo from '@/features/projects/assets/alpaca.png';
import terminalIcon from '@/features/projects/assets/terminal.png';
import { getStaticFile } from '@/utils/static-file';

function getProjectDatafile(datafile: string): string {
  return getStaticFile('projects', datafile);
}

function joinLines(...lines: string[]): string {
  return lines.join('\n');
}

export const projects: Project[] = [
  {
    name: 'mewlix',
    id: 'mewlix',
    description: joinLines(
      'A cat-themed esoteric programming language, with templates for creating pixel games!',
      'The compiler is written in pure Haskell.',
    ),
    image: {
      src: mewlixLogo,
      alt: 'mewlix logo',
    },
    datafile: getProjectDatafile('mewlix.md'),
    link: {
      url: '/projects/mewlix',
      internal: true,
    },
    skills: [Skill.Haskell, Skill.TypeScript, Skill.HTML, Skill.Sass],
  },
  {
    name: 'kbmackenzie.xyz',
    id: 'kbmackenzie-xyz',
    description: joinLines(
      'This website! Written entirely from scratch in TypeScript with React, Sass and Next.js.',
      'All animations are written by hand! No templates used! 🐱💖',
    ),
    image: {
      src: alpacaLogo,
      alt: 'kbmackenzie.xyz logo',
    },
    datafile: getProjectDatafile('kbmackenzie-xyz.md'),
    link: {
      url: 'https://github.com/kbmackenzie/kbmackenzie.xyz',
    },
    skills: [Skill.TypeScript, Skill.React, Skill.Sass, Skill.NextJS],
  },
  {
    name: 'Inscryption Mods',
    id: 'inscryption-mods',
    description: 'An assortment of mods I made for the game "Inscryption".',
    image: {
      src: terminalIcon,
      alt: 'terminal icon',
    },
    datafile: getProjectDatafile('mods/inscryption.md'),
    link: {
      url: 'https://thunderstore.io/c/inscryption/p/KellyBetty/',
    },
    skills: [Skill.CSharp, Skill.Unity],
  },
  {
    name: 'Cult of the Lamb Mods',
    id: 'cult-of-the-lamb-mods',
    description: 'An assortment of mods I made for the game "Cult of the Lamb".',
    image: {
      src: terminalIcon,
      alt: 'terminal icon',
    },
    datafile: getProjectDatafile('mods/cult-of-the-lamb.md'),
    link: {
      url: 'https://thunderstore.io/c/cult-of-the-lamb/p/KellyBetty/',
    },
    skills: [Skill.CSharp, Skill.Unity],
  },
];
