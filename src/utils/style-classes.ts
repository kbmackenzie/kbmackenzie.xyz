type StyleValue =
  | string
  | StyleValue[]
  | false /* Explicitly disallow 'true'. */
  | null
  | undefined;

function getStyle(acc: string[], style: StyleValue): string[] {
  if (typeof style === 'string') {
    acc.push(style);
    return acc;
  }
  if (Array.isArray(style)) {
    acc.push(styleClasses(style));
    return acc;
  }
  return acc;
}

export function styleClasses(...styles: StyleValue[]): string {
  return styles.reduce(getStyle, []).join(' ');
}
