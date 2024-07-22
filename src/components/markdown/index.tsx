import { styleClasses } from '@/utils/style-classes';
import { micromark } from 'micromark';

type Props = {
  contents: string;
  className?: string;
};

/* Notes to my future self.
 *
 * This is fine because:
 * - micromark output is safe.
 * - markdown will only ever come from the server
 *
 * todo: benchmark alternatives */

export function Markdown({ contents, className }: Props) {
  const html = micromark(contents);
  return (
    <div
      className={styleClasses(className)}
      dangerouslySetInnerHTML={{ __html: html }} >
    </div>
  );
}
