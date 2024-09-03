import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename)
const staticFolder = path.resolve(__dirname, '../../static/');

export function getStaticFile(...paths: string[]): string {
  return path.join(staticFolder, ...paths);
}

export function readStaticFile(...paths: string[]): Promise<Buffer> {
  const staticPath = getStaticFile(...paths);
  return fs.readFile(staticPath);
}
