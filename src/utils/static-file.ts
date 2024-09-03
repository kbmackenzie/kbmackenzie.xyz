import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename)
const staticFolder = path.resolve(__dirname, '../../static/');

export function getStaticFile(relative: string): string {
  return path.join(staticFolder, relative);
}

export function readStaticFile(relative: string): Promise<Buffer> {
  const staticPath = getStaticFile(relative);
  return fs.readFile(staticPath);
}
