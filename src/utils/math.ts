/**
 * Clamp a number between a min bound and a max bound.
 * Makes sure a value never leaves the range [min, max].
 *
 * @param x   - Number to clamp.
 * @param min - Min bound, inclusive.
 * @param max - Max bound, inclusive. */
export function clamp(x: number, min: number, max: number): number {
  if (x < min) return min;
  if (x > max) return max;
  return x;
}

/**
 * Make a number 'wrap around' a min bound and a max bound.
 * Similar to tbe behavior of unsigned integers when they overflow/underflow.
 *
 * @param x   - Number to wrap.
 * @param min - Min bound, inclusive.
 * @param max - Max bound, inclusive. */
export function wrapAround(x: number, min: number, max: number): number {
  if (x < min) return max;
  if (x > max) return min;
  return x;
}
