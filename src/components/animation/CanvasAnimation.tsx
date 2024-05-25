import { useRef, useCallback } from 'react';
import { AnimationCallback, useAnimation } from '@hooks/useAnimation';

export type DrawCallback = (context: CanvasRenderingContext2D, delta: number) => void;

type Props = {
  draw: DrawCallback;
  width: number;
  height: number;
};

export default function CanvasAnimation({ draw, width, height, ...props }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = canvasRef.current?.getContext('2d');

  const callback = useCallback<AnimationCallback>(delta => {
    if (!context) return;
    draw(context, delta);
  }, [draw]);
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
