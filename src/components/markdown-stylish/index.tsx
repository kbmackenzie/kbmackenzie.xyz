import { headingAnchors } from '@/components/markdown-stylish/anchor';
import { codeBlock } from '@/components/markdown-stylish/code';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { styleClasses } from '@/utils/style-classes';

/* Markdown, with stylish features:
 * - Syntax highlighting!
 * - Anchors for headings (IDs)!
 * Also supports GFM (tables, strikethrough, etc) through the 'remark-gfm' plugin! */

type Props = {
  className?: string;
  children: string;
  additionalComponents?: Components;
};

export function MarkdownStylish({ className, children, additionalComponents }: Props) {
  const components: Components = {
    ...codeBlock,
    ...headingAnchors,
    ...additionalComponents
  };
  return (
    <ReactMarkdown components={components} className={styleClasses(className)} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
}
