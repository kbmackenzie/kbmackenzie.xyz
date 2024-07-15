export function groupyBy<T1, T2>(array: T1[], groupOf: (t: T1) => T2): [T2, T1[]][] {
  const groups: Map<T2, T1[]> = new Map();

  for (const value of array) {
    const group = groupOf(value);
    let groupArray = groups.get(group);

    if (groupArray === undefined) {
      groupArray = [];
      groups.set(group, groupArray);
    }
    groupArray.push(value);
  }

  return Array.from(groups.entries());
}
