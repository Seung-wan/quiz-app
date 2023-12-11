export function shuffle<T>(arr: T[]): T[] {
  return arr.toSorted(() => Math.random() - 0.5);
}
