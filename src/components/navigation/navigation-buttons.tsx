import { JSX, DOMAttributes } from 'react';
import classNames from 'classnames';
import { LinkData } from '@shared/link';

type AnchorProps = DOMAttributes<HTMLAnchorElement> & {
  data: LinkData;
  classes: string[];
};

function Anchor({ data, classes }: AnchorProps) {
  const { type, name, url } = data;
  return (
    <a className={classNames(type, classes)} href={url}>
      <span>{name}</span>
    </a>
  )
}

function generateLink(data: LinkData, classes: string[]): JSX.Element {
  return <Anchor key={data.name} data={data} classes={classes} />;
}

type NavigationLinksProps = {
  buttons: LinkData[]
  classes: string[],
};

export function NavigationLinks({ buttons, classes }: NavigationLinksProps) {
  return <>{buttons.map(button => generateLink(button, classes))}</>
}
