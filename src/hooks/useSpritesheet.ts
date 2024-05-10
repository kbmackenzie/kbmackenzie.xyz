import { useState, useEffect } from 'react';

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Sprite = {
  key: string;
  rect: Rect;
};

export type SpriteTable = {
  [key: string]: ImageBitmap;
};

async function loadSprites(imagePath: string, spriteRects: Sprite[]): Promise<SpriteTable> {
  const response = await fetch(imagePath);
  const blob = await response.blob();

  const table: SpriteTable = {};

  for (const { key, rect } of spriteRects) {
    table[key] = await createImageBitmap(blob, rect.x, rect.y, rect.width, rect.height);
  }
  return table;
}

export function useSpritesheet(imagePath: string, spriteRects: Sprite[]): SpriteTable | null {
  const [sprites, setSprites] = useState<SpriteTable | null>(null);

  useEffect(() => {
    loadSprites(imagePath, spriteRects)
      .then(table => setSprites(table));
  }, [imagePath, spriteRects]);

  return sprites;
}
