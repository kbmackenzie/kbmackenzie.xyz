import { HTMLAttributes } from 'react';
import hljs from 'highlight.js/lib/core';
import { supportedLanguages } from '@/store/highlight';
import ReactMarkdown, { Components, ExtraProps } from 'react-markdown';
import { styleClasses } from '@/utils/style-classes';
import { firaMono } from '@/fonts';

/* Markdown, with syntax highlighting.
 * Accepts syntax highlighters based on language.
 *
 * Note to future self: This will only be used for blog posts, *never* user input.
 * Blog posts are static and come from the server.
 * Thus, blog post input *can* be trusted, and using 'dangerouslySetInnerHTML' is fine.
 *
 * todo: 'purify' HTML for future me's sanity. */

export type CodeProps = HTMLAttributes<HTMLElement> & ExtraProps;

export type Highlighter = (
  input: string,
  props: Omit<CodeProps, 'children'>,
) => JSX.Element;

type Props = {
  className?: string;
  children: string;
  additionalComponents?: Components;
};

const languageName: RegExp = /language-(\w+)/;

const highlighters = new Map<string, Highlighter>(
  supportedLanguages.map(language => [language, (input, props) => {
    const html = hljs.highlight(input, { language: language }).value;
    const classes = styleClasses(props.className, firaMono.className, 'code-block');
    return <code {...props} className={classes} dangerouslySetInnerHTML={{ __html: html }}></code>
  }])
);

export function MarkdownHighlight({ className, children, additionalComponents }: Props) {
  const components: Components = {
    code({ children, ...props }) {
      const language = languageName.exec(props.className ?? '')?.[1];
      if (!language || !highlighters.has(language)) {
        const classes = styleClasses(
          props.className,
          firaMono.className,
          language ? 'code-block' : 'code-inline'
        );
        return <code {...props} className={classes}>{children}</code>
      }
      const highlighter = highlighters.get(language)!;
      const input = String(children);

      return highlighter(input, props);
    },
    ...additionalComponents
  };
  return (
    <ReactMarkdown components={components} className={styleClasses(className)}>
      {children}
    </ReactMarkdown>
  );
}
