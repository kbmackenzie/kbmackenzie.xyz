import { HTMLAttributes } from 'react';
import hljs from 'highlight.js/lib/core';
import { supportedLanguages } from '@/store/highlight';
import { Components, ExtraProps } from 'react-markdown';
import { styleClasses } from '@/utils/style-classes';
import { firaMono } from '@/fonts';

type CodeProps = HTMLAttributes<HTMLElement> & ExtraProps;

type Highlighter = (
  input: string,
  props: Omit<CodeProps, 'children'>,
) => JSX.Element;

const highlighters = new Map<string, Highlighter>(
  supportedLanguages.map(language => [language, (input, props) => {
    const html = hljs.highlight(input, { language: language }).value;
    const classes = styleClasses(props.className, firaMono.className, 'code-block');
    return <code {...props} className={classes} dangerouslySetInnerHTML={{ __html: html }}></code>
  }])
);

const languageRe: RegExp = /language-(\w+)/;

export const codeBlock: Components = {
  code({ children, ...props }) {
    const language = languageRe.exec(props.className ?? '')?.[1];
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
};
