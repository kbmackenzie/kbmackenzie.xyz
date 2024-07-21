'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { styleClasses } from '@/utils/style-classes';

/* Animate an element into view by adding a class when it comes into view!
 * Accepts a visibility threshold, from 0.0 to 1.0, as specified in the Intersection Observer API. */

type Props = {
  threshold: number;
  children: ReactNode;
};

export function Observer({ threshold, children }: Props) {
  const [visible , setVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || visible) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach( /* This is fine; observer will only have *one* entry. */
        (entry) => {
          if (entry.intersectionRatio <= threshold) return;
          visible || setVisible(_ => true);
        },
      ),
      {
        root: document,
        threshold: threshold,
      },
    );
    observer.observe(ref.current);
    return () => { 
      observer.disconnect();
    };
  }, [ref, threshold, visible]);

  return (
    <div ref={ref} className={styleClasses(visible && 'visible')}>
      {children}
    </div>
  );
}
