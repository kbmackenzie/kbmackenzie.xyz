import { useState, useEffect } from 'react'

export type ImageDetails = {
  key: string;
  path: string;
}

export type ImageTable = {
  [key: string]: ImageBitmap;
}

async function loadImage(path: string): Promise<ImageBitmap> {
  const response = await fetch(path);
  const blob = await response.blob();
  return await createImageBitmap(blob);
}

async function loadImages(paths: ImageDetails[]): Promise<ImageTable> {
  const table: ImageTable = {};
  for (const { key, path } of paths) {
    table[key] = await loadImage(path);
  }
  return table;
}

export function useImages(paths: ImageDetails[]): ImageTable | null {
  const [images, setImages] = useState<ImageTable | null>(null);

  useEffect(() => {
    loadImages(paths).then(table => setImages(table));
  }, [paths]);

  return images;
}
