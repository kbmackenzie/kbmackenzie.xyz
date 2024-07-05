'use client';

import { useCallback } from 'react';
import { PipedProps } from '@/types/piped-props';
import { SpriteDetails, useSpritesheet } from '@/hooks/use-spritesheet';
import { CanvasMouseAnimation, DrawCallback } from '@/components/canvas-mouse-animation';
import { lerp, easeInQuad } from '@/utils/animation';
import { clamp } from '@/utils/math';
import alpacaPeek from '@/features/alpaca-layout/assets/alpaca-peek.png';

const alpacaSprites: SpriteDetails[] = [
  { key: 'base', rect: { x: 0, y: 0  , width: 800, height: 357 } },
  { key: 'eyes', rect: { x: 0, y: 357, width: 800, height: 357 } },
  { key: 'hair', rect: { x: 0, y: 714, width: 800, height: 357 } },
];

const canvasWidth  = 800;
const canvasHeight = 357;

function interpolateX(x: number, max: number): number {
  const clientWidth = document.documentElement.clientWidth;
  const target = lerp(0, max, easeInQuad(x / clientWidth));

  return clamp(target, 0, max);
}

export function Alpaca({...props}: PipedProps<HTMLCanvasElement>) {
  const sprites = useSpritesheet(alpacaPeek.src, alpacaSprites);

  const drawAlpaca = useCallback<DrawCallback>((context, mouse) => {
    if (!sprites) return;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(sprites.base, 0, 0);

    const eyeX = interpolateX(mouse.x, 70);
    context.drawImage(sprites.eyes, eyeX, 0);

    context.drawImage(sprites.hair, 0, 0);
  }, [sprites]);

  return (
    <CanvasMouseAnimation
      draw={drawAlpaca}
      width={canvasWidth}
      height={canvasHeight}
      {...props}
    />
  )
}
