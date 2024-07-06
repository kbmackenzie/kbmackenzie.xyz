import Image from 'next/image';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/components/honeycomb-grid/index.module.sass';

export type HoneycombSlot =
  | 'center'
  | 'top'
  | 'top-right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'top-left';

export type HoneycombIcon = {
  src: string;
  alt: string;
};

type Props = {
  icons: Map<HoneycombSlot, HoneycombIcon>;
  className?: string;
};

export function HoneycombGrid({ icons, className }: Props) {
  return (
    <div className={styleClasses(styles.honeycomb, className)}>
      {Array.from(icons.entries()).map(([key, icon]) => {
        const classes = styleClasses(styles.slot, styles[`slot-${key}`]);
        return (
          <div className={classes} key={key}>
            <Image src={icon.src} alt={icon.alt} />
          </div>
        );
      })}
    </div>
  );
}
