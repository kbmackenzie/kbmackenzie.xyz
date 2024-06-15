import { DOMAttributes } from 'react'
import classNames from 'classnames';
import '@components/links/round-icon.sass';

export type IconData = {
  src: string;
  alt: string;
  url: string;
};

type Props = DOMAttributes<HTMLAnchorElement> & {
  icon: IconData;
  classes?: string[];
};

export function RoundIcon({ icon, classes, ...props}: Props) {
  return (
    <a
      className={classNames('round-icon', classes)}
      href={icon.url}
      target="_blank"
      rel="noopener noreferrer"
      {...props}>
      <img src={icon.src} alt={icon.alt} />
    </a>
  );
}
