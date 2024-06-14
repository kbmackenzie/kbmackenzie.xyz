export type Skill =
  | 'haskell'
  | 'linux'
  | 'typescript'
  | 'react'
  | 'sass'
  | 'css'
  | 'node'
  | 'neovim'
  | 'csharp';

export const skillIcons: Record<Skill, string> = {
  haskell:    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-plain.svg',
  linux:      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
  react:      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  sass:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  css:        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg',
  node:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg',
  neovim:     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-plain.svg',
  csharp:     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg',
};
