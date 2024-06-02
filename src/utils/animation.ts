export function lerp(start: number, end: number, x: number):number {
  return start + (end - start) * x;
}

export function easeInQuad(x: number): number {
  return x * x;
}

export function easeOutQuad(x: number): number {
  return 1 - (1 - x) * (1 - x);
}
