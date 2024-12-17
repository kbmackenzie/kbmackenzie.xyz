import { MarkdownStylish } from '@/components/markdown-stylish';
import { ComponentProps } from 'react';
import fs from 'node:fs/promises';

type MarkdownDocProps = Omit<ComponentProps<typeof MarkdownStylish>, 'children'> & {
  docPath: string;
};

export async function MarkdownDoc({ docPath, className, ...props }: MarkdownDocProps) {
  const buffer = await fs.readFile(docPath);
  return (
    <MarkdownStylish className={className} {...props}>
      {String(buffer)}
    </MarkdownStylish>
  );
}
