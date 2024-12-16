export type AliasTable = Record<string, string>;

/* Aliases for URLs; primarily used when rendering our Markdown content.
 * Note: They must *ALWAYS* resolve to a RELATIVE PATH in the website. */
export const aliasTable: AliasTable = {
  '@mewlix': '/projects/mewlix',
};
