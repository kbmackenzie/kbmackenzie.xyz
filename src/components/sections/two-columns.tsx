import { ReactNode } from 'react';
import classNames from 'classnames';
import '@components/sections/two-columns.sass';

type Props = {
  aside: ReactNode;
  reverse?: boolean;
  children: ReactNode;
  classes?: string[];
};

export function TwoColumns({ aside, reverse, children, classes }: Props) {
  const twoColumns = reverse ? 'two-columns-reverse' : 'two-columns';
  return (
    <div className={classNames(twoColumns, classes)}>
      <div className="two-columns-aside">{aside}</div>
      <div className="two-columns-content">{children}</div>
    </div>
  );
}
