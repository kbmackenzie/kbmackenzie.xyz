import NavigationButtons from "@components/buttons/NavigationButtons";
import { ButtonData } from "@components/buttons/NavigationButtons";
import '@components/Navigation.sass'

const buttons: ButtonData[] = [
  {
    type: 'regular',
    name: 'Blog',
    onClick: () => undefined,
  },
  {
    type: 'regular',
    name: 'About',
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
