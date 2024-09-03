import { styleClasses } from '@/utils/style-classes';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  children: string;
  className?: string;
};

/* A simple Markdown-rendering plugin, with no syntax highlighting.
 * When syntax highlighting is a necessity, use 'MarkdownHighlight'. */

export function Markdown({ children, className }: Props) {
  return (
    <ReactMarkdown className={styleClasses(className)} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
}
