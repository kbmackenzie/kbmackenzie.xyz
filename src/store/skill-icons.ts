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
  haskell:    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg',
  linux:      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  react:      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  sass:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  css:        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  node:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  neovim:     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg',
  csharp:     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
};
