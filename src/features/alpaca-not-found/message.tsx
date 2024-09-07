'use client';

import { useState } from 'react';
import { getRandomInt } from '@/utils/random';

const options: ReadonlyArray<string> = [
  'No alpacas here.',
  'No cats here.',
  '404: Alpaca not found.',
];

export function Message() {
  const [index, _] = useState(
    getRandomInt(0, options.length)
  );
  const message = options[index];
  return (
    <span suppressHydrationWarning>
      {message}
    </span>
  );
}
