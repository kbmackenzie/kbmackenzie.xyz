import { ComponentProps, ReactNode, createElement } from 'react';
import { Components } from 'react-markdown';
import { onlyText } from 'react-children-utilities';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = ComponentProps<Heading>;
type HeadingComponent = Components[Heading];

function getId(children: ReactNode): string {
  const text = onlyText(children);
  return text.replace(/\W/g, '-').toLowerCase();
}

function headingAnchor(heading: Heading): HeadingComponent {
  return function HeadingAnchor({ children, className, ...props }) {
    const id = getId(children);
    const linkProps: ComponentProps<'a'> = {
      href: '#' + id,
    };
    const headingProps: HeadingProps = {
      id: id,
      ...props
    };
    return createElement(
      heading,
      headingProps,
      createElement('a', linkProps, children)
    );
  }
}

/* A little repetitive, but there are only 6 headings anyway!
 * No point in overcomplicating the little snippet below. */
export const headingAnchors: Record<Heading, HeadingComponent> = {
  'h1': headingAnchor('h1'),
  'h2': headingAnchor('h2'),
  'h3': headingAnchor('h3'),
  'h4': headingAnchor('h4'),
  'h5': headingAnchor('h5'),
  'h6': headingAnchor('h6'),
};
