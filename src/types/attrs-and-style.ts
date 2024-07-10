import { HTMLAttributes } from 'react';

/* Type name is short for 'Attributes and Style'! */
export type AttrsAndStyle<T extends HTMLElement> = HTMLAttributes<T> & {
  className?: string;
};
