'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Buttons } from '@/features/alpaca-layout/components/buttons';
import { SideMenu } from '@/features/alpaca-layout/components/side-menu';
import { ButtonData } from '@/features/alpaca-layout/types/button-data';
import styles from '@/features/alpaca-layout/navigation.module.sass';
import menuIcon from '@/features/alpaca-layout/assets/menu-icon.svg';

const buttons: ButtonData[] = [
  {
    type: 'regular',
    text: 'Home',
    url: '/',
  },
  {
    type: 'regular',
    text: 'Blog',
    url: '/blog',
  },
  {
    type: 'focus',
    text: 'Projects',
    url: '/projects',
  },
];

function MobileNavigation() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className={styles.mobile}>
      <button className={styles.hamburger} onClick={() => setShowMenu(x => !x)}>
        <Image src={menuIcon} alt="hamburger icon"></Image>
      </button>
      {showMenu &&
        <SideMenu
          buttons={buttons}
          portalTarget={'side-menu'}
          exit={() => { setShowMenu(false); }} />}
    </nav>
  );
}

export function Navigation() {
  return (
    <>
      <Buttons buttons={buttons} />
      <MobileNavigation />
    </>
  );
}
