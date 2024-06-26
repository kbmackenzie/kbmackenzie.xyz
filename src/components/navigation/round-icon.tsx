import { DOMAttributes } from 'react'
import classNames from 'classnames';
import { IconData } from '@typings/icon';
import '@components/navigation/round-icon.sass';

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
