import { useState } from 'react';
import { NavigationButtons } from '@components/navigation/navigation-buttons';
import { SideMenu } from '@components/navigation/side-menu';
import { LinkData } from '@shared/link';
import '@layouts/base/components/navigation.sass'
import menuIcon from '@layouts/base/assets/menu-icon.svg';

const buttons: LinkData[] = [
  {
    type: 'regular',
    name: 'Home',
    url: '#',
  },
  {
    type: 'regular',
    name: 'Blog',
    url: '#',
  },
  {
    type: 'focus',
    name: 'Projects',
    url: '#',
  },
];

function MobileNavigation() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="header-navigation-mobile">
      <button className="header-mobile-hamburger" onClick={() => setShowMenu(x => !x)}>
        <img src={menuIcon} alt="hamburger icon"></img>
      </button>
      {showMenu && <SideMenu buttons={buttons} classes={['header-mobile-side-menu', 'fira-mono']}/>}
    </nav>
  );
}

export function Navigation() {
  return (
    <>
      <NavigationButtons buttons={buttons} classes={['header-navigation', 'fira-mono']} />
      <MobileNavigation />
    </>
  )
}
