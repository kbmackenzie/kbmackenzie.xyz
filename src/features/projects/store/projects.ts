import { Project } from '@/types/project';
import { Skill } from '@/types/skill';
import mewlixLogo from '@/features/projects/assets/mewlix.png';
import alpacaLogo from '@/features/projects/assets/alpaca.png';
import terminalIcon from '@/features/projects/assets/terminal.png';
import url from 'url';
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename)
const projectDirectory = path.resolve(__dirname, '../../../../static/projects/');

function getDatafile(datafile: string): string {
  return path.join(projectDirectory, datafile);
}

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
    datafile: getDatafile('mewlix.md'),
    url: 'https://github.com/kbmackenzie/mewlix',
    skills: [Skill.Haskell, Skill.TypeScript, Skill.HTML, Skill.Sass],
  },
  {
    name: 'kbmackenzie.xyz',
    description: joinLines(
      'This website! A personal website + statically compiled blog. It\'s entirely open-source.',
      'Written in TypeScript with React, Sass and Next.js.',
    ),
    image: {
      src: alpacaLogo,
      alt: 'kbmackenzie.xyz logo',
    },
    datafile: getDatafile('kbmackenzie-xyz.md'),
    url: 'https://github.com/kbmackenzie/kbmackenzie.xyz',
    skills: [Skill.TypeScript, Skill.React, Skill.Sass, Skill.NextJS],
  },
  {
    name: 'Inscryption Mods',
    description: 'An assortment of mods I made for the game "Inscryption".',
    image: {
      src: terminalIcon,
      alt: 'terminal icon',
    },
    datafile: getDatafile('mods/inscryption.md'),
    url: 'https://thunderstore.io/c/inscryption/p/KellyBetty/',
    skills: [Skill.CSharp, Skill.Unity],
  },
  {
    name: 'Cult of the Lamb Mods',
    description: 'An assortment of mods I made for the game "Cult of the Lamb".',
    image: {
      src: terminalIcon,
      alt: 'terminal icon',
    },
    datafile: getDatafile('mods/cult-of-the-lamb.md'),
    url: 'https://thunderstore.io/c/cult-of-the-lamb/p/KellyBetty/',
    skills: [Skill.CSharp, Skill.Unity],
  },
];
