import { NavigationButtons, ButtonData } from '@components/buttons/navigation-buttons';
import '@layouts/base/components/navigation.sass'

const buttons: ButtonData[] = [
  {
    type: 'regular',
    name: 'Home',
    onClick: () => undefined,
  },
  {
    type: 'regular',
    name: 'Blog',
    onClick: () => undefined,
  },
  {
    type: 'focus',
    name: 'Projects',
    onClick: () => undefined,
  },
];

export function Navigation() {
  const buttonClasses = [
    'header-navigation-button',
    'fira-mono',
  ];
  return (
    <nav className="header-navigation">
      <NavigationButtons buttons={buttons} classes={buttonClasses} />
    </nav>
  )
}
