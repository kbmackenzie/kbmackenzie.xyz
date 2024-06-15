import { ReactNode, DOMAttributes } from 'react';
import classNames from 'classnames';
import '@components/links/circle-link.sass';

type Props = DOMAttributes<HTMLButtonElement> & {
  children: ReactNode;
  classes?: string[];
};

export function CircleButton({ children, classes, ...props }: Props) {
  return (
    <button className={classNames('circle-button', classes)} {...props}>
      {children}
    </button>
  );
}
