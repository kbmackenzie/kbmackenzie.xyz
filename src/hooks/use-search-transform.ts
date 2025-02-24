'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export function useSearchTransform() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (transform: (params: URLSearchParams) => URLSearchParams) => {
    const params = new URLSearchParams(searchParams);
    const newParams = transform(params);
    router.push(`${pathname}?${newParams.toString()}`);
  };
}
