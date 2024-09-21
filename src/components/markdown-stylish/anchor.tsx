import { ComponentProps, ReactNode, createElement } from 'react';
import { Components } from 'react-markdown';
import { onlyText } from 'react-children-utilities';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = ComponentProps<Headings>;
type HeadingComponent = Components[Headings];

function getId(children: ReactNode): string {
  const text = onlyText(children);
  return text.replace(/\W/g, '-').toLowerCase();
}

function headingAnchor(heading: Headings): HeadingComponent {
  return function({ children, ...props }) {
    const id = getId(children);
    const newProps: HeadingProps = {
      id: id,
      ...props
    };
    return createElement(heading, newProps, children);
  }
}

/* A little repetitive, but there are only 6 headings anyway!
 * No point in overcomplicating the little snippet below. */
export const headingAnchors: Record<Headings, HeadingComponent> = {
  'h1': headingAnchor('h1'),
  'h2': headingAnchor('h2'),
  'h3': headingAnchor('h3'),
  'h4': headingAnchor('h4'),
  'h5': headingAnchor('h5'),
  'h6': headingAnchor('h6'),
};
