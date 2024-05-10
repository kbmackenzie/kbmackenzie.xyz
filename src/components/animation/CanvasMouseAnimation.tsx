import { useRef, useCallback } from 'react';
import { MousePosition, MouseCallback, useMousePosition } from '@hooks/useMousePosition';

export type DrawCallback = {
  (context: CanvasRenderingContext2D, mouse: MousePosition): void
};

type Props = {
  draw: DrawCallback;
  width: number;
  height: number;
};

export default function CanvasMouseAnimation({ draw, width, height, ...props }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = canvasRef.current?.getContext('2d');

  const callback = useCallback<MouseCallback>(mouse => {
    if (!context) return;
    draw(context, mouse);
  }, [draw])
  useMousePosition(callback);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      {...props}
    ></canvas>
  );
}