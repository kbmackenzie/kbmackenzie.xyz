/** @type {import('next/dist/lib/load-custom-routes').Redirect[]} */
export const redirects = [
  {
    source: '/mewlix',
    destination: 'https://github.com/kbmackenzie/mewlix',
    basePath: false,
    permanent: true,
  },
  {
    source: '/mewlix-base',
    destination: 'https://github.com/kbmackenzie/mewlix-base',
    basePath: false,
    permanent: true,
  },
  {
    source: '/mewlix-examples',
    destination: 'https://github.com/kbmackenzie/mewlix-examples',
    basePath: false,
    permanent: true,
  },
  {
    source: '/inscryption',
    destination: '/projects#mods-inscryption',
    permanent: true,
  },
  {
    source: '/cult-of-the-lamb',
    destination: '/projects#mods-cult-of-the-lamb',
    permanent: true,
  },
];
