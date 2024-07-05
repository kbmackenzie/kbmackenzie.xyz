import { HTMLAttributes } from 'react';

export type PipedProps<T extends HTMLElement> = HTMLAttributes<T> & {
  className?: string;
};
