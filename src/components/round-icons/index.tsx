import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/components/round-icons/index.module.sass';

/* Note: The URL is expected to link outside the website. */
export type RoundIconData = {
  src: string | StaticImport;
  alt: string;
  url: string;
};

type Props = {
  icons: RoundIconData[];
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
};

export function RoundIcons({ icons, iconWidth, iconHeight, className }: Props) {
  return (
    <nav className={styleClasses(styles.container, className)}>
      {icons.map(icon => (
        <a href={icon.url} key={icon.alt} className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={iconWidth ?? 16}
            height={iconHeight ?? 16} />
        </a>
      ))}
    </nav>
  );
}
