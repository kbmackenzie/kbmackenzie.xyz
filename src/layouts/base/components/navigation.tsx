import { NavigationButtons } from '@components/navigation/navigation-buttons';
import { LinkData } from '@shared/link';
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
  return (
    <>
      <NavigationButtons buttons={buttons} classes={['header-navigation', 'fira-mono']} />
    </>
  )
}
