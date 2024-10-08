'use client';

import { useRef, useCallback } from 'react';
import { AttrsAndStyle } from '@/types/attrs-and-style';
import { AnimationCallback, useAnimation } from '@/hooks/use-animation';

export type DrawCallback = (context: CanvasRenderingContext2D, delta: number) => void;

type Props = AttrsAndStyle<HTMLCanvasElement> & {
  draw: DrawCallback;
  width: number;
  height: number;
};

export function CanvasAnimation({ draw, width, height, ...props }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = canvasRef.current?.getContext('2d');

  const callback = useCallback<AnimationCallback>(delta => {
    if (!context) return;
    draw(context, delta);
  }, [context, draw]);
  useAnimation(callback);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      {...props}
    ></canvas>
  )
}
