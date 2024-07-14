'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { firaMono } from '@/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/alpaca-layout/components/side-menu/index.module.sass';
import exitIcon from '@/features/alpaca-layout/assets/exit-icon.svg';

function Button({ data }: { data: ButtonData }) {
  const { type, text, url } = data;
  const classes = styleClasses(firaMono.className, styles.button, styles[type]);
  return <Link href={url} className={classes}>{text}</Link>;
}

type Props = {
  buttons: ButtonData[];
  portalTarget: string;
  exit: () => void;
};

const exitDelay = 400;

export function SideMenu({ buttons, portalTarget, exit }: Props) {
  const [shouldClose, setShouldClose] = useState<boolean>(false);

  useEffect(() => {
    /* Add a small delay for exit animation. */
    if (!shouldClose) return;
    const timeout = setTimeout(exit, exitDelay);
    return () => clearTimeout(timeout);
  }, [shouldClose, exit]);

  const menuClasses = styleClasses(styles.menu, shouldClose && styles.close);

  return createPortal(
    <>
      <div className={styles.overlay}></div>
      <nav className={menuClasses}>
        <button className={styles.exit} onClick={() => setShouldClose(true)}>
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
