import { useCallback } from 'react';
import { SpriteDetails, useSpritesheet } from "@hooks/useSpritesheet";
import CanvasMouseAnimation from '@components/animation/CanvasMouseAnimation';
import { DrawCallback } from '@components/animation/CanvasMouseAnimation';
import alpacaPeek from '@assets/alpaca-peek.png';

const alpacaFrames: SpriteDetails[] = [
  { key: 'base', rect: { x: 0, y: 0  , width: 800, height: 357 } },
  { key: 'eyes', rect: { x: 0, y: 357, width: 800, height: 357 } },
  { key: 'hair', rect: { x: 0, y: 714, width: 800, height: 357 } },
];

const canvasWidth  = 800;
const canvasHeight = 357;

function transformX(x: number, max: number): number {
  const clientWidth = document.documentElement.clientWidth;
  return (max * x) / clientWidth;
}

export default function AlpacaAnimation({...props}) {
  const sprites = useSpritesheet(alpacaPeek, alpacaFrames);

  const drawAlpaca = useCallback<DrawCallback>((context, mouse) => {
    if (!sprites) return;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(sprites.base, 0, 0);

    const eyeX = transformX(mouse.x, 70);
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
