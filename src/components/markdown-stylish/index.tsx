import { headingAnchors } from '@/components/markdown-stylish/anchor';
import { codeBlock } from '@/components/markdown-stylish/code';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { styleClasses } from '@/utils/style-classes';

/* Markdown, with syntax highlighting.
 * Accepts syntax highlighters based on language.
 *
 * Note to future self: This will only be used for blog posts, *never* user input.
 * Blog posts are static and come from the server.
 * Thus, blog post input *can* be trusted, and using 'dangerouslySetInnerHTML' is fine.
 *
 * todo: 'purify' HTML for future me's sanity. */
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
