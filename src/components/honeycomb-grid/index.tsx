import Image from 'next/image';
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
};

export function HoneycombGrid({ icons }: Props) {
  return (
    <div className={styles.honeycomb}>
      {Array.from(icons.entries()).map(([key, icon]) => {
        const classes = [styles.slot, styles[`slot-${key}`]].join(' ');
        return (
          <div className={classes} key={key}>
            <Image src={icon.src} alt={icon.alt} />
          </div>
        );
      })}
    </div>
  );
}
