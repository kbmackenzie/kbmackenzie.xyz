import { ReactNode } from 'react';
import classNames from 'classnames';
import '@components/sections/two-columns.sass';

type Props = {
  aside: ReactNode;
  reverse?: boolean;
  children: ReactNode;
  classes?: string[];
};

export function TwoColumns({ aside, reverse, children, classes}: Props) {
  const nodes = (reverse)
    ? [aside, children]
    : [children, aside];

  return (
    <section className={classNames('two-columns', classes)}>
      {nodes}
    </section>
  );
}
