import Link from 'next/link';
import { Fira_Mono } from 'next/font/google';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/alpaca-layout/components/buttons/index.module.sass';

const firaMono = Fira_Mono({
  weight:  ['400', '500', '700'],
  subsets: ['latin'],
});

function Button({ data }: { data: ButtonData }) {
  const { type, text, url } = data;
  const classes = styleClasses(styles.button, styles[type]);
  return <Link className={classes} href={url}>{text}</Link>;
}

export function Buttons({ buttons }: { buttons: ButtonData[] }) {
  const classes = styleClasses(firaMono.className, styles.buttons);
  return (
    <nav className={classes}>
      {buttons.map(data => (
        <Button key={data.text} data={data} />
      ))}
    </nav>
  );
}
