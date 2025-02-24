'use client';

import { ComponentProps, useCallback, useRef, KeyboardEvent} from 'react';
import { useSearchTransform } from '@/hooks/use-search-transform';

export function Search(props: ComponentProps<'div'>) {
  const input  = useRef<HTMLInputElement | null>(null);
  const search = useSearchTransform();

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.repeat || event.key !== 'Enter' || !input.current) return;
      event.preventDefault();

      const tag = input.current.value.trim();
      input.current.value = '';

      search(params => {
        if (tag !== '') {
          params.set('tagged', tag);
        }
        else {
          params.delete('tagged');
        }
        return params;
      });
    },
    [search]
  );

  return (
    <div {...props} onKeyDown={onKeyDown}>
      <label htmlFor="filter-by">Filter by tag:</label>
      <input ref={input} type="text" name="filter-by" />
    </div>
  );
}
