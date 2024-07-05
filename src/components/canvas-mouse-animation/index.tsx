'use client';

import { useRef, useCallback, useEffect } from 'react';
import { MousePosition, MouseCallback, useMousePosition } from '@/hooks/use-mouse-position';

export type DrawCallback = (context: CanvasRenderingContext2D, mouse: MousePosition) => void;

type Props = {
  draw: DrawCallback;
  width: number;
  height: number;
};

export function CanvasMouseAnimation({ draw, width, height, ...props }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = canvasRef.current?.getContext('2d');

  const callback = useCallback<MouseCallback>(mouse => {
    if (!context) return;
    draw(context, mouse);
  }, [context, draw])
  useMousePosition(callback);

  useEffect(() => { callback({ x: 0, y: 0 }); }, [callback]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      {...props}
    ></canvas>
  );
}
