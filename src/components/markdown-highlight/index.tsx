import { HTMLAttributes } from 'react';
import hljs from 'highlight.js/lib/core';
import { supportedLanguages } from '@/store/highlight';
import ReactMarkdown, { Components, ExtraProps } from 'react-markdown';
import { styleClasses } from '@/utils/style-classes';

/* Markdown, with syntax highlighting.
 * Accepts syntax highlighters based on language.
 *
 * Note to future self: This will only be used for blog posts, *never* user input.
 * Blog posts are static and come from the server.
 * Thus, blog post input *can* be trusted, and using 'dangerouslySetInnerHTML' is fine.
 *
 * todo: 'purify' HTML for future me's sanity. */

export type Highlighter = (
  input: string,
  props: Omit<HTMLAttributes<HTMLElement> & ExtraProps, 'children'>,
) => JSX.Element;

type Props = {
  className?: string;
  children: string;
  customHighlighters?: Map<string, Highlighter>;
};

const languageName: RegExp = /language-(\w+)/;

const defaultHighlighters = new Map<string, Highlighter>(
  supportedLanguages.map(language => [language, (input, props) => {
    const html = hljs.highlight(input, { language: language }).value;
    return <code {...props} dangerouslySetInnerHTML={{ __html: html }}></code>
  }])
);

export function MarkdownHighlight({ className, children, customHighlighters }: Props) {
  function getHighlighter(language: string): Highlighter | null {
    if (customHighlighters && customHighlighters.has(language)) {
      return customHighlighters.get(language)!;
    }
    if (defaultHighlighters.has(language)) {
      return defaultHighlighters.get(language)!;
    }
    return null;
  }

  const components: Components = {
    code({ children, ...props }) {
      const language = languageName.exec(props.className || '')?.[1];
      if (!language || !getHighlighter(language)) {
        return <code {...props}>{children}</code>
      }
      const highlighter = getHighlighter(language)!;
      const input = String(children);

      return highlighter(input, props);
    },
  };
  return (
    <ReactMarkdown components={components} className={styleClasses(className)}>
      {children}
    </ReactMarkdown>
  );
}
