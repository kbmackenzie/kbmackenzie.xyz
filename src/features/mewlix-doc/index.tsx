import { MarkdownHighlight } from '@/components/markdown-highlight';
import Link from 'next/link';
import fs from 'node:fs/promises';
import { Components } from 'react-markdown';

type MewlixDocProps = {
  docpath: string;
  className?: string;
};

const mewlixRe = /^\@mewlix\/(.*)$/;

const components: Components = {
  a({ children, href, ...props }) {
    const relative = href && mewlixRe.exec(href)?.[1];
    if (!relative) {
      return <a href={href} {...props}>{children}</a>;
    }
    const resolved = '/projects/mewlix/' + relative;
    return <Link href={resolved} {...props}>{children}</Link>;
  },
};

export async function MewlixDoc({ docpath, className }: MewlixDocProps) {
  const buffer = await fs.readFile(docpath);
  return (
    <MarkdownHighlight className={className} additionalComponents={components}>
      {String(buffer)}
    </MarkdownHighlight>
  );
}
