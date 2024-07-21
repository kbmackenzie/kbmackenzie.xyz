'use client';

import { useCallback, useRef, KeyboardEvent} from 'react';
import { AttrsAndStyle } from '@/types/attrs-and-style';
import { useRouter, usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export function Search(props: AttrsAndStyle<HTMLDivElement>) {
  const input = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const addTagParam = useCallback(
    (input: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const tag= input.trim();
      if (tag !== '') {
        params.set('tagged', tag);
      }
      else {
        params.delete('tagged');
      }
      return params.toString();
    },
    [searchParams]
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.repeat || event.key !== 'Enter' || !input.current) return;
      event.preventDefault();

      const params = addTagParam(input.current.value);
      input.current.value = '';
      router.push(`${pathname}?${params.toString()}`);
    },
    [input, router, pathname, addTagParam]
  );

  return (
    <div {...props} onKeyDown={onKeyDown}>
      <label htmlFor="filter-by">Filter by:</label>
      <input ref={input} type="text" name="filter-by" />
    </div>
  );
}
