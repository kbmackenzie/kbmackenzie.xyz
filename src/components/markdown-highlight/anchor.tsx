import { ReactNode } from 'react';
import { Components } from 'react-markdown';
import { onlyText } from 'react-children-utilities';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingComponent = Components[Headings];

function getId(children: ReactNode): string {
  const text = onlyText(children);
  return text.replace(/\W/, '-');
}

/* A little repetitive, but automating this would be extremely pointless.
 * There are only 6 headings; a little repetition is fine. */

export const headingAnchors: Record<Headings, HeadingComponent> = {
  h1({ children, ...props }) {
    const id = getId(children);
    return <h1 id={id} {...props}>{children}</h1>;
  },
  h2({ children, ...props }) {
    const id = getId(children);
    return <h2 id={id} {...props}>{children}</h2>;
  },
  h3({ children, ...props }) {
    const id = getId(children);
    return <h3 id={id} {...props}>{children}</h3>;
  },
  h4({ children, ...props }) {
    const id = getId(children);
    return <h4 id={id} {...props}>{children}</h4>;
  },
  h5({ children, ...props }) {
    const id = getId(children);
    return <h5 id={id} {...props}>{children}</h5>;
  },
  h6({ children, ...props }) {
    const id = getId(children);
    return <h6 id={id} {...props}>{children}</h6>;
  },
};
