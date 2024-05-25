import NavigationButtons from "@components/buttons/NavigationButtons";
import { ButtonData } from "@components/buttons/NavigationButtons";

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
    <nav className="w-full flex justify-end gap-4 p-6">
      <NavigationButtons buttons={buttons} />
    </nav>
  )
}
