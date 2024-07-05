'use client';

import { useState, useEffect } from 'react';

export type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type SpriteDetails = {
  key: string;
  rect: Rectangle;
};

export type SpriteTable = {
  [key: string]: ImageBitmap;
};

async function loadSprites(imagePath: string, spriteDetails: SpriteDetails[]): Promise<SpriteTable> {
  const response = await fetch(imagePath);
  const blob = await response.blob();

  const table: SpriteTable = {};

  for (const { key, rect } of spriteDetails) {
    table[key] = await createImageBitmap(blob, rect.x, rect.y, rect.width, rect.height);
  }
  return table;
}

export function useSpritesheet(imagePath: string, spriteDetails: SpriteDetails[]): SpriteTable | null {
  const [sprites, setSprites] = useState<SpriteTable | null>(null);

  useEffect(() => {
    loadSprites(imagePath, spriteDetails)
      .then(table => setSprites(table));
  }, [imagePath, spriteDetails]);

  return sprites;
}
