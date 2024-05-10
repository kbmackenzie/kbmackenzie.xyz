import { useEffect } from 'react';

export type MousePosition = {
  x: number;
  y: number;
};

export type MouseCallback = {
  (position: MousePosition): void;
};

export function useMousePosition(callback: MouseCallback): void {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const position: MousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      callback(position);
    };
    window.addEventListener('mousemove', listener);

    return () => {
      window.removeEventListener('mousemove', listener)
    };
  }, [callback]);
}
