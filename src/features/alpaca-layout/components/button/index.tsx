import { Fira_Mono } from 'next/font/google';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import styles from '@/features/alpaca-layout/components/button/index.module.sass';

const firaMono = Fira_Mono({
  weight:  ['400', '500', '700'],
  subsets: ['latin'],
});

function Button({ data }: { data: ButtonData }) {
  const { type, text, url } = data;
  return <a className={styles[type]} href={url}>{text}</a>;
}

export function NavigationButtons({ buttons }: { buttons: ButtonData[] }) {
  const classes = [firaMono.className, styles.button].join(' ');
  return (
    <nav className={classes}>
      {buttons.map(data => (
        <Button key={data.text} data={data} />
      ))}
    </nav>
  );
}
