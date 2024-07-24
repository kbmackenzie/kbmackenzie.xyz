import { HTMLAttributes } from 'react';
import ReactMarkdown, { Components, ExtraProps } from 'react-markdown';
import { styleClasses } from '@/utils/style-classes';

/* Markdown, with syntax highlighting.
 * Accepts syntax highlighters based on language. */

export type Highlighter = (
  input: string,
  props: Omit<HTMLAttributes<HTMLElement> & ExtraProps, 'children'>,
) => JSX.Element;

type Props = {
  className?: string;
  children: string;
  highlighters?: Map<string, Highlighter>;
};

const languageName: RegExp = /language-(\w+)/;

export function MarkdownHighlight({ className, children, highlighters }: Props) {
  const components: Components = {
    code(props) {
      const language = languageName.exec(props.className || '')?.[1];

      if (!language || !highlighters || !highlighters.has(language)) {
        return <code {...props}>{children}</code>
      }
      const highlighter = highlighters.get(language)!;
      const input = String(props.children);

      return highlighter(input, props);
    },
  };
  return (
    <ReactMarkdown components={components} className={styleClasses(className)}>
      {children}
    </ReactMarkdown>
  );
}
