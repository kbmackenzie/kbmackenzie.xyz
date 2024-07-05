import Link from 'next/link';
import { Fira_Mono } from 'next/font/google';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import styles from '@/features/alpaca-layout/components/buttons/index.module.sass';

const firaMono = Fira_Mono({
  weight:  ['400', '500', '700'],
  subsets: ['latin'],
});

function Button({ data }: { data: ButtonData }) {
  const { type, text, url } = data;
  const classes = [styles.button, styles[type]].join(' ');
  return <Link className={classes} href={url}>{text}</Link>;
}

export function Buttons({ buttons }: { buttons: ButtonData[] }) {
  const classes = [firaMono.className, styles.buttons].join(' ');
  return (
    <nav className={classes}>
      {buttons.map(data => (
        <Button key={data.text} data={data} />
      ))}
    </nav>
  );
}
