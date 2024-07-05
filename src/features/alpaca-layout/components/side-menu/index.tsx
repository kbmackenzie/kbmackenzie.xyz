'use client';

import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import styles from '@/features/alpaca-layout/components/side-menu/index.module.sass';
import exitIcon from '@/features/alpaca-layout/assets/exit-icon.svg';

function Button({ data }: { data: ButtonData }) {
  const { type, text, url } = data;
  const classes = [styles.button, styles[type]].join(' ');
  return <Link href={url} className={classes}>{text}</Link>;
}

type Props = {
  buttons: ButtonData[];
  portalTarget: string;
  onExit: () => void;
};

export function SideMenu({ buttons, portalTarget, onExit }: Props) {
  return createPortal(
    <>
      <div className={styles.overlay}></div>
      <nav className={styles.menu}>
        <button className={styles.exit} onClick={onExit}>
          <Image src={exitIcon} alt="exit menu" />
        </button>
        {buttons.map(button => (
          <Button key={button.text} data={button} />
        ))}
      </nav>
    </>,
    document.getElementById(portalTarget)!
  );
}
