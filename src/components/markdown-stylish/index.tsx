import { anchorAlias } from '@/components/markdown-stylish/anchor';
import { codeBlock } from '@/components/markdown-stylish/code';
import { headingAnchors } from '@/components/markdown-stylish/heading';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { styleClasses } from '@/utils/style-classes';
import '@styles/markdown.sass';
import '@styles/hljs.sass';

/* Markdown, with stylish features:
 * - Syntax highlighting!
 * - Anchors for headings (IDs)!
 * Also supports GFM (tables, strikethrough, etc) through the 'remark-gfm' plugin! */

type Props = {
  className?: string;
  children: string;
  customStyles?: boolean;
  additionalComponents?: Components;
};

export function MarkdownStylish({ className, children, additionalComponents, customStyles }: Props) {
  const components: Components = {
    ...anchorAlias,
    ...codeBlock,
    ...headingAnchors,
    ...additionalComponents
  };
  const classes = styleClasses(className, !customStyles && 'alpaca-markdown');
  return (
    <ReactMarkdown components={components} className={classes} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
}
