import { styleClasses } from '@/utils/style-classes';
import { micromark } from 'micromark';

type Props = {
  children: string;
  className?: string;
};

/* Notes to my future self.
 *
 * This is fine because:
 * - micromark output is safe.
 * - markdown will only ever come from the server
 *
 * todo: benchmark alternatives */

export function Markdown({ children, className }: Props) {
  const html = micromark(children);
  return (
    <div
      className={styleClasses(className)}
      dangerouslySetInnerHTML={{ __html: html }} >
    </div>
  );
}
