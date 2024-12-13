import { Project } from '@/types/project';
import { Skill } from '@/types/skill';
import mewlixLogo from '@/features/projects/assets/mewlix.png';
import alpacaLogo from '@/features/projects/assets/alpaca.png';
import araneaLogo from '@/features/projects/assets/aranea.png';
import henhenLogo from '@/features/projects/assets/henhen.png';
import projectIcon from '@/features/projects/assets/project.png';
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
    name: 'henhen',
    id: 'henhen',
    description: joinLines(
      'A tool for managing virtual environments for CHICKEN Scheme. 🐔',
      'It lets you install dependencies in an isolated environment on a per-project basis.',
    ),
    image: {
      src: henhenLogo,
      alt: 'henhen logo',
    },
    datafile: getProjectDatafile('henhen.md'),
    link: {
      url: 'https://github.com/kbmackenzie/henhen',
    },
    skills: [Skill.Haskell],
  },
  {
    name: 'aranea',
    id: 'aranea',
    description: joinLines(
      'A tiny shell preprocessor written in POSIX Awk.',
      'Inspired by the C preprocessor. Works outo-of-the-box in most Linux distros!',
    ),
    image: {
      src: araneaLogo,
      alt: 'aranea logo',
    },
    datafile: getProjectDatafile('aranea.md'),
    link: {
      url: 'https://github.com/kbmackenzie/aranea',
    },
    skills: [Skill.Awk],
  },
  {
    name: 'Mods: Inscryption',
    id: 'mods-inscryption',
    description: 'An assortment of mods I made for the game "Inscryption".',
    image: {
      src: projectIcon,
      alt: 'terminal icon',
    },
    datafile: getProjectDatafile('mods/inscryption.md'),
    link: {
      url: 'https://thunderstore.io/c/inscryption/p/KellyBetty/',
    },
    skills: [Skill.CSharp, Skill.Unity],
  },
  {
    name: 'Mods: Cult of the Lamb',
    id: 'mods-cult-of-the-lamb',
    description: 'An assortment of mods I made for the game "Cult of the Lamb".',
    image: {
      src: projectIcon,
      alt: 'terminal icon',
    },
    datafile: getProjectDatafile('mods/cult-of-the-lamb.md'),
    link: {
      url: 'https://thunderstore.io/c/cult-of-the-lamb/p/KellyBetty/',
    },
    skills: [Skill.CSharp, Skill.Unity],
  },
];
