import { PipedProps } from '@/types/piped-props';
import ReactMarkdown from 'react-markdown';

export function Introduction(props: PipedProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <h1>{`Hello, I'm Kelly!`}</h1>
      <hr />
      <ReactMarkdown>{`I'm a **full-stack web developer**, **language tinkerer** and cat enthusiast. I'm in love with **functional programming**, **compilers**, **DSLs** and **game development**.`}</ReactMarkdown>
    </div>
  );
}

