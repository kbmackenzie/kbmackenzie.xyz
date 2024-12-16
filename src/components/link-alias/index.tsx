import { linkAliases } from '@/store/link-aliases';
import { ComponentProps } from 'react';
import Link from 'next/link';

/* Aliases for URLs; primarily used when rendering our Markdown content.
 * Note: They must *ALWAYS* resolve to a RELATIVE PATH in the website. */

const aliasRegex = /(@\w+)\/(.*)/;

export function LinkAlias({ children, href, ...props }: ComponentProps<'a'>) {
  const parsed = href && aliasRegex.exec(href);
  if (!parsed) {
    return <a href={href} {...props}>{children}</a>
  }
  const key    = parsed[1];
  const prefix = linkAliases[key] ?? '/'; /* forgive bad prefixes. better than exploding. */
  const url    = prefix + parsed[2];
  return <Link href={url} {...props}>{children}</Link>
}
