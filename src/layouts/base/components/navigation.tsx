import { NavigationLinks, LinkData } from '@components/navigation/navigation-buttons';
import '@layouts/base/components/navigation.sass'

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

export function Navigation() {
  const buttonClasses = [
    'header-navigation-button',
    'fira-mono',
  ];
  return (
    <nav className="header-navigation">
      <NavigationLinks buttons={buttons} classes={buttonClasses} />
    </nav>
  )
}
