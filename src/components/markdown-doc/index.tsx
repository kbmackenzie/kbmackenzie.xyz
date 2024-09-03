import { MarkdownHighlight } from '@/components/markdown-highlight';
import { styleClasses } from '@/utils/style-classes';
import fs from 'node:fs/promises'

type MarkdownDocProps = {
  docpath: string;
  className?: string;
};

export async function MarkdownDoc({ docpath, className }: MarkdownDocProps) {
  const buffer = await fs.readFile(docpath);
  return (
    <MarkdownHighlight className={styleClasses(className)}>
      {String(buffer)}
    </MarkdownHighlight>
  );
}
