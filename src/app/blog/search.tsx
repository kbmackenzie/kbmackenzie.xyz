'use client';

import { useCallback, useRef, KeyboardEvent} from 'react';
import { AttrsAndStyle } from '@/types/attrs-and-style';
import { useRouter, usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function isWhitespace(input: string) {
  return /^\s*$/.test(input);
}

export function Search(props: AttrsAndStyle<HTMLDivElement>) {
  const input = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const addTagParam = useCallback(
    (tag: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('tagged', tag);
      return params.toString();
    },
    [searchParams]
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.repeat || event.key !== 'Enter' || event.shiftKey) return;
      if (!input.current || isWhitespace(input.current.value)) return;
      event.preventDefault();

      const params = addTagParam(input.current.value);
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
