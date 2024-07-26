import { StaticImport } from 'next/dist/shared/lib/get-img-props';
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
  src: string | StaticImport;
  alt: string;
};

type Props = {
  icons: ReadonlyMap<HoneycombSlot, HoneycombIcon>;
  gridStyle?: string;
  slotStyle?: {
    normal?: string;
    center?: string;
  },
};

export function HoneycombGrid({ icons, gridStyle, slotStyle }: Props) {
  return (
    <div className={styleClasses(styles.honeycomb, gridStyle)}>
      {Array.from(icons.entries()).map(([key, icon]) => {
        const classes = styleClasses(
          styles.slot,
          styles[`slot-${key}`],
          slotStyle && (key === 'center' ? slotStyle.center : slotStyle.normal)
        );
        return (
          <div className={classes} key={key}>
            <Image src={icon.src} alt={icon.alt} width={128} height={128} />
          </div>
        );
      })}
    </div>
  );
}
