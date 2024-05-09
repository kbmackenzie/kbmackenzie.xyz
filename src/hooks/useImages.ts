import { useState, useEffect } from 'react'

export type ImageDetails = {
  key: string;
  path: string;
}

export type ImageTable = {
  [key: string]: ImageBitmap;
}

async function loadImage(path: string) {
  const response = await fetch(path);
  const blob = await response.blob();
  return await createImageBitmap(blob);
}

export function useImages(paths: ImageDetails[]): ImageTable | null {
  const [images, setImages] = useState<ImageTable | null>(null);

  useEffect(() => {
    async function loadImages() {
      const output: ImageTable = {};
      for (const { key, path } of paths) {
        output[key] = await loadImage(path);
      }
      setImages(output);
    }
    loadImages();
  }, [paths]);

  return images;
}
