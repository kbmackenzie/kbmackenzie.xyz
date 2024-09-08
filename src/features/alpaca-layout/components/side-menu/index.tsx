'use client';

import { useState, useEffect, ComponentProps } from 'react';
import { createPortal } from 'react-dom';
import { firaMono } from '@/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/alpaca-layout/components/side-menu/index.module.sass';
import exitIcon from '@/features/alpaca-layout/assets/exit-icon.svg';

type ButtonProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  data: ButtonData,
};

function Button({ data, ...props }: ButtonProps) {
  const { type, text, url } = data;
  const classes = styleClasses(firaMono.className, styles.button, styles[type]);
  return (
    <Link {...props} href={url} className={classes}>
      {text}
    </Link>
  );
}

type SideMenuProps = {
  buttons: ButtonData[];
  portalTarget: string;
  exit: () => void;
};

const exitDelay = 400;

export function SideMenu({ buttons, portalTarget, exit }: SideMenuProps) {
  const [shouldClose, setShouldClose] = useState<boolean>(false);

  useEffect(() => {
    /* Add a small delay for exit animation. */
    if (!shouldClose) return;
    const timeout = setTimeout(exit, exitDelay);
    return () => clearTimeout(timeout);
  }, [shouldClose, exit]);

  const menuClasses  = styleClasses(styles.menu, shouldClose && styles.close);
  const closeOnClick = () => setShouldClose(true);

  return createPortal(
    <>
      <div className={styles.overlay}></div>
      <nav className={menuClasses}>
        <button className={styles.exit} onClick={closeOnClick}>
          <Image src={exitIcon} alt="exit menu" />
        </button>
        {buttons.map(button => (
          <Button key={button.text} data={button} onClick={closeOnClick} />
        ))}
      </nav>
    </>,
    document.getElementById(portalTarget)!
  );
}
