export function getRandomInt(min: number, max: number): number {
  const minf = Math.floor(min);
  const maxf = Math.floor(max);
  return Math.floor(Math.random() * (maxf - minf) + minf);
}
