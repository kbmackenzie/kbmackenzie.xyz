import { firaMono } from '@/fonts';
import Link from 'next/link';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/alpaca-layout/components/buttons/index.module.sass';

function Button({ data }: { data: ButtonData }) {
  const { type, text, url } = data;
  const classes = styleClasses(styles.button, styles[type]);
  return <Link className={classes} title={text} href={url}>{text}</Link>;
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
