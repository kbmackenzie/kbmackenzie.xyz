import { HoneycombSlot, HoneycombIcon } from '@/components/honeycomb-grid';

/* todo: add center icon */
export const slots: ReadonlyMap<HoneycombSlot, HoneycombIcon> = new Map([
  ['top'          , {
    alt: 'haskell',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-plain.svg',
  }],
  ['top-right'    , {
    alt: 'linux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg',
  }],
  ['bottom-right' , {
    alt: 'neovim',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-plain.svg',
  }],
  ['bottom'       , {
    alt: 'csharp',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg',
  }],
  ['bottom-left'  , {
    alt: 'react',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  }],
  ['top-left'     , {
    alt: 'typescript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
  }],
]);
