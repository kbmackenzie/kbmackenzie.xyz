import { useRef } from 'react';
import { MousePosition, useMousePosition } from '../hooks/useMousePosition';

export type DrawCallback = {
  (context: CanvasRenderingContext2D, position: MousePosition): void
};

type Props = {
  draw: DrawCallback;
  width: number;
  height: number;
};

export default function CanvasMouseAnimation({ draw, width, height, ...props }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = canvasRef.current?.getContext('2d');

  useMousePosition(position => {
    if (!context) return;
    draw(context, position);
  });

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      {...props}
    ></canvas>
  );
}
