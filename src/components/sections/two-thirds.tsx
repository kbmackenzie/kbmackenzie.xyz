import { ReactNode } from 'react';
import classNames from 'classnames';
import '@components/sections/two-thirds.sass';

type Props = {
  aside: ReactNode;
  reverse?: boolean;
  children: ReactNode;
  classes?: string[];
};

export function TwoThirds({ aside, reverse, children, classes }: Props) {
  const twoThirds = reverse ? 'two-thirds-reverse' : 'two-thirds';
  return (
    <section className={classNames(twoThirds, classes)}>
      <div className="two-thirds-aside">{aside}</div>
      <div className="two-thirds-content">{children}</div>
    </section>
  );
}
