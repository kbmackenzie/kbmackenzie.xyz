import { useEffect } from 'react';

export type MouseCallback = {
  (x: number, y: number): void
}

export function useMousePosition(callback: MouseCallback) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      callback(event.clientX, event.clientY);
    };
    window.addEventListener('mousemove', listener);

    return () => {
      window.removeEventListener('mousemove', listener)
    };
  }, [callback]);
}
