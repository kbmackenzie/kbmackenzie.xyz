export function groupyBy<T1, T2>(array: T1[], groupOf: (t: T1) => T2): [T2, T1[]][] {
  const groups: Map<T2, T1[]> = new Map();

  for (const value of array) {
    const group = groupOf(value);
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group)!.push(value);
  }

  return Array.from(groups.entries());
}
