import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { redirects } from './static/redirects.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@styles'] = resolve(__dirname, 'src/styles');
    return config;
  },
  sassOptions: {
    logger: {
      warn:  (message) => console.warn('[sass] ' + message),
      debug: (message) => console.debug('[sass] ' + message),
    },
    /* See: https://github.com/vercel/next.js/issues/71638#issuecomment-2431137842 */
    silenceDeprecations: ["legacy-js-api"],
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
