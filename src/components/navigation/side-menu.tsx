import classNames from 'classnames';
import { LinkData } from '@shared/link';
import '@components/navigation/side-menu';

type ButtonProps = {
  data: LinkData;
};

function Button({ data }: ButtonProps) {
  const { type, name, url } = data;
  return (
    <a href={url} className={classNames('side-menu-button', type)}>
      {name}
    </a>
  );
}

type SideMenuProps = {
  buttons: LinkData[];
  classes?: string[];
};

export function SideMenu({ buttons, classes }: SideMenuProps) {
  return (
    <nav className={classNames('side-menu', classes)}>
      {buttons.map(button => (
        <Button key={button.name} data={button} />
      ))}
    </nav>
  );
}
