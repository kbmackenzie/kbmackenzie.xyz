import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { LinkData } from '@shared/link';
import '@components/navigation/side-menu.sass';
import exitIcon from '@assets/x-icon.svg';

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
  destination: string;
  onExit: () => void;
};

export function SideMenu({ buttons, classes, destination, onExit }: SideMenuProps) {
  return createPortal(
    <nav className={classNames('side-menu', classes)}>
      <button className="side-menu-exit" onClick={onExit}>
        <img src={exitIcon} alt="exit side menu" />
      </button>
      {buttons.map(button => (
        <Button key={button.name} data={button} />
      ))}
    </nav>,
    document.getElementById(destination)!
  );
}
