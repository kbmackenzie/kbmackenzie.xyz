import NavigationButtons from '@components/buttons/navigation-buttons';
import { ButtonData } from '@components/buttons/navigation-buttons';
import '@components/navigation.sass'

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

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavigationButtons buttons={buttons} />
    </nav>
  )
}
